/**
 * ASCII Art Converter Utility
 * 
 * This utility provides functions to convert images to ASCII art with various configuration options.
 */

export interface AsciiConverterOptions {
  // Character set to use for ASCII art (from darkest to lightest)
  characterSet: string;
  // Width of the output ASCII art in characters
  width: number;
  // Whether to invert the brightness
  invert: boolean;
  // Contrast adjustment (-1 to 1)
  contrast: number;
  // Brightness adjustment (-1 to 1)
  brightness: number;
  // Whether to use color in the output
  colored: boolean;
  // Line height for the output
  lineHeight: number;
  // Font size for the output
  fontSize: number;
  // Font family for the output
  fontFamily: string;
}

export const DEFAULT_OPTIONS: AsciiConverterOptions = {
  characterSet: '@%#*+=-:. ',
  width: 80,
  invert: false,
  contrast: 0,
  brightness: 0,
  colored: false,
  lineHeight: 1,
  fontSize: 12,
  fontFamily: 'monospace',
};

// Predefined character sets
export const CHARACTER_SETS = {
  standard: '@%#*+=-:. ',
  detailed: '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^`\'. ',
  blocks: '█▓▒░ ',
  simple: '#@%*+=-:. ',
  numbers: '9876543210 ',
  binary: '10 ',
  warhammer: '■Ѱ☠Ѧ◊⚜☣◘■#&%Ѳϟ☣=+Ѩ*∞҈⚙;:. ',
  imperial: '⚜☠☣⚙▓#%&*█▒░◊+*=;:. ',
};

/**
 * Converts an image to ASCII art
 * @param imageData - ImageData from canvas context
 * @param options - Configuration options
 * @returns ASCII art as string
 */
/**
 * Detects edges in the image data
 */
const detectEdges = (imageData: ImageData): ImageData => {
  const canvas = document.createElement('canvas');
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  const ctx = canvas.getContext('2d')!;
  ctx.putImageData(imageData, 0, 0);
  
  const output = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = output.data;
  const width = imageData.width;
  const height = imageData.height;
  
  // Simple Sobel operator for edge detection
  const sobelX = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
  const sobelY = [-1, -2, -1, 0, 0, 0, 1, 2, 1];
  
  // Create a temporary array to store the original data
  const origData = new Uint8ClampedArray(data);
  
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      let magX = 0;
      let magY = 0;
      
      // Apply the convolution
      for (let ky = -1; ky <= 1; ky++) {
        for (let kx = -1; kx <= 1; kx++) {
          const idx = ((y + ky) * width + (x + kx)) * 4;
          const pixVal = (origData[idx] + origData[idx + 1] + origData[idx + 2]) / 3;
          
          magX += pixVal * sobelX[(ky + 1) * 3 + (kx + 1)];
          magY += pixVal * sobelY[(ky + 1) * 3 + (kx + 1)];
        }
      }
      
      // Calculate gradient magnitude
      const mag = Math.sqrt(magX * magX + magY * magY);
      
      // Set pixel value
      const outIdx = (y * width + x) * 4;
      data[outIdx] = data[outIdx + 1] = data[outIdx + 2] = Math.min(255, mag);
    }
  }
  
  return output;
};

/**
 * Enhances the details in the image by combining the original with edge detection
 */
const enhanceDetails = (imageData: ImageData, edgeWeight: number = 0.3): ImageData => {
  const edgeData = detectEdges(imageData);
  const canvas = document.createElement('canvas');
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  const ctx = canvas.getContext('2d')!;
  
  // Draw original image
  ctx.putImageData(imageData, 0, 0);
  
  // Overlay edge data with reduced opacity
  const blendedData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = blendedData.data;
  const edgeDataArr = edgeData.data;
  
  for (let i = 0; i < data.length; i += 4) {
    // Blend edge data with original image
    const edgeIntensity = (edgeDataArr[i] + edgeDataArr[i + 1] + edgeDataArr[i + 2]) / 3;
    
    // Enhance contrast around edges
    data[i] = Math.min(255, data[i] * (1 - edgeWeight) + edgeIntensity * edgeWeight);
    data[i + 1] = Math.min(255, data[i + 1] * (1 - edgeWeight) + edgeIntensity * edgeWeight);
    data[i + 2] = Math.min(255, data[i + 2] * (1 - edgeWeight) + edgeIntensity * edgeWeight);
  }
  
  return blendedData;
};

export const imageToAscii = (
  imageData: ImageData,
  options: Partial<AsciiConverterOptions> = {}
): string => {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const { width, characterSet, invert } = opts;
  
  // Calculate a better aspect ratio (characters are taller than wide)
  const aspectRatio = 0.4; // Typical character height/width ratio
  const height = Math.floor((imageData.height / imageData.width) * width * aspectRatio);
  const blockWidth = Math.floor(imageData.width / width);
  const blockHeight = Math.floor(imageData.height / height);
  
  let result = '';
  
  // Apply brightness and contrast adjustments
  const adjustedData = applyAdjustments(imageData, opts);
  
  // Enhance details with edge detection
  const enhancedData = enhanceDetails(adjustedData, 0.3);
  
  // Process blocks and build ASCII art
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const blockStartX = x * blockWidth;
      const blockStartY = y * blockHeight;
      
      // Get brightness with smart sampling
      const { brightness, variance } = getSmartSample(
        enhancedData,
        blockStartX,
        blockStartY,
        blockWidth,
        blockHeight
      );
      
      // Use variance to select characters that represent detail
      let effectiveBrightness = brightness;
      if (variance > 0.2) { // High variance means more detail
        // Boost contrast in detailed areas
        effectiveBrightness = brightness > 0.5 ? brightness + 0.1 : brightness - 0.1;
        effectiveBrightness = Math.max(0, Math.min(1, effectiveBrightness));
      }
      
      // Map brightness to character
      const charIndex = invert
        ? Math.floor((1 - effectiveBrightness) * (characterSet.length - 1))
        : Math.floor(effectiveBrightness * (characterSet.length - 1));
      
      result += characterSet[charIndex];
    }
    result += '\\n';
  }
  
  return result;
};

/**
 * Converts an image to colored ASCII art (HTML)
 * @param imageData - ImageData from canvas context
 * @param options - Configuration options
 * @returns ASCII art as HTML
 */
export const imageToColoredAsciiHtml = (
  imageData: ImageData,
  options: Partial<AsciiConverterOptions> = {}
): string => {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const { width, characterSet, invert, fontSize, lineHeight, fontFamily } = opts;
  
  // Better aspect ratio for characters
  const aspectRatio = 0.4; // Typical character height/width ratio
  const height = Math.floor((imageData.height / imageData.width) * width * aspectRatio);
  const blockWidth = Math.floor(imageData.width / width);
  const blockHeight = Math.floor(imageData.height / height);
  
  let result = `<div style="font-family: ${fontFamily}; font-size: ${fontSize}px; line-height: ${lineHeight}; letter-spacing: 0; white-space: pre;">`;
  
  // Apply brightness and contrast adjustments
  const adjustedData = applyAdjustments(imageData, opts);
  
  // Enhance details with edge detection
  const enhancedData = enhanceDetails(adjustedData, 0.3);
  
  // Process blocks and build colored ASCII art
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const blockStartX = x * blockWidth;
      const blockStartY = y * blockHeight;
      
      // Get brightness and color with smart sampling
      const { brightness, color, variance } = getSmartSampleWithColor(
        enhancedData,
        blockStartX,
        blockStartY,
        blockWidth,
        blockHeight
      );
      
      // Use variance to select characters that represent detail
      let effectiveBrightness = brightness;
      if (variance > 0.2) { // High variance means more detail
        // Boost contrast in detailed areas
        effectiveBrightness = brightness > 0.5 ? brightness + 0.1 : brightness - 0.1;
        effectiveBrightness = Math.max(0, Math.min(1, effectiveBrightness));
      }
      
      // Map brightness to character
      const charIndex = invert
        ? Math.floor((1 - effectiveBrightness) * (characterSet.length - 1))
        : Math.floor(effectiveBrightness * (characterSet.length - 1));
      
      const char = characterSet[charIndex];
      
      // Add colored character with a slight glow effect for Warhammer aesthetic
      const glowEffect = variance > 0.15 ? 
        `text-shadow: 0 0 2px rgb(${color.r}, ${color.g}, ${color.b}, 0.8);` : '';
      
      result += `<span style="color: rgb(${color.r}, ${color.g}, ${color.b}); ${glowEffect}">${char}</span>`;
    }
    result += '\n';
  }
  
  result += '</div>';
  return result;
};

/**
 * Gets the average brightness of a block of pixels
 */
const getAverageBrightness = (
  imageData: ImageData,
  startX: number,
  startY: number,
  width: number,
  height: number
): number => {
  let totalBrightness = 0;
  let pixelCount = 0;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pixelX = startX + x;
      const pixelY = startY + y;
      
      if (pixelX < imageData.width && pixelY < imageData.height) {
        const index = (pixelY * imageData.width + pixelX) * 4;
        const r = imageData.data[index];
        const g = imageData.data[index + 1];
        const b = imageData.data[index + 2];
        
        // Calculate perceived brightness
        // Using the formula: 0.299*R + 0.587*G + 0.114*B
        const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        
        totalBrightness += brightness;
        pixelCount++;
      }
    }
  }
  
  return pixelCount > 0 ? totalBrightness / pixelCount : 0;
};

/**
 * Gets the average brightness and color of a block of pixels
 */
/**
 * Gets brightness, color and variance using smart sampling
 */
const getSmartSampleWithColor = (
  imageData: ImageData,
  startX: number,
  startY: number,
  width: number,
  height: number
): { brightness: number; color: { r: number; g: number; b: number }; variance: number } => {
  let totalBrightness = 0;
  let totalR = 0;
  let totalG = 0;
  let totalB = 0;
  let pixelCount = 0;
  const brightnessValues: number[] = [];
  
  // Use adaptive sampling - more samples in high-detail areas
  const sampleStep = Math.max(1, Math.floor(Math.min(width, height) / 8));
  
  for (let y = 0; y < height; y += sampleStep) {
    for (let x = 0; x < width; x += sampleStep) {
      const pixelX = startX + x;
      const pixelY = startY + y;
      
      if (pixelX < imageData.width && pixelY < imageData.height) {
        const index = (pixelY * imageData.width + pixelX) * 4;
        const r = imageData.data[index];
        const g = imageData.data[index + 1];
        const b = imageData.data[index + 2];
        
        // Calculate perceived brightness with improved formula
        const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        brightnessValues.push(brightness);
        
        totalBrightness += brightness;
        totalR += r;
        totalG += g;
        totalB += b;
        pixelCount++;
      }
    }
  }
  
  // Calculate variance (measure of detail)
  const avgBrightness = pixelCount > 0 ? totalBrightness / pixelCount : 0;
  let variance = 0;
  
  for (const b of brightnessValues) {
    variance += (b - avgBrightness) ** 2;
  }
  variance = pixelCount > 1 ? variance / (pixelCount - 1) : 0;
  
  return {
    brightness: avgBrightness,
    color: {
      r: pixelCount > 0 ? Math.floor(totalR / pixelCount) : 0,
      g: pixelCount > 0 ? Math.floor(totalG / pixelCount) : 0,
      b: pixelCount > 0 ? Math.floor(totalB / pixelCount) : 0,
    },
    variance
  };
};

/**
 * Gets brightness and variance using smart sampling
 */
const getSmartSample = (
  imageData: ImageData,
  startX: number,
  startY: number,
  width: number,
  height: number
): { brightness: number; variance: number } => {
  const { brightness, variance } = getSmartSampleWithColor(
    imageData, startX, startY, width, height
  );
  return { brightness, variance };
};

/**
 * Gets the average brightness and color of a block of pixels (simple version)
 */
const getAverageBrightnessAndColor = (
  imageData: ImageData,
  startX: number,
  startY: number,
  width: number,
  height: number
): { brightness: number; color: { r: number; g: number; b: number } } => {
  const { brightness, color } = getSmartSampleWithColor(
    imageData, startX, startY, width, height
  );
  return { brightness, color };
};

/**
 * Applies brightness and contrast adjustments to image data
 */
const applyAdjustments = (
  imageData: ImageData,
  options: AsciiConverterOptions
): ImageData => {
  const { brightness, contrast } = options;
  
  // Create a copy of the image data
  const canvas = document.createElement('canvas');
  canvas.width = imageData.width;
  canvas.height = imageData.height;
  const ctx = canvas.getContext('2d')!;
  ctx.putImageData(imageData, 0, 0);
  
  // Apply brightness and contrast
  if (brightness !== 0 || contrast !== 0) {
    const adjustedData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = adjustedData.data;
    
    // Convert contrast to factor (range 0-2)
    const contrastFactor = contrast >= 0 
      ? 1 + contrast 
      : 1 / (1 - contrast);
    
    // Convert brightness to offset (range -255 to 255)
    const brightnessOffset = brightness * 255;
    
    for (let i = 0; i < data.length; i += 4) {
      // Apply brightness
      data[i] += brightnessOffset;
      data[i + 1] += brightnessOffset;
      data[i + 2] += brightnessOffset;
      
      // Apply contrast
      data[i] = ((data[i] - 128) * contrastFactor) + 128;
      data[i + 1] = ((data[i + 1] - 128) * contrastFactor) + 128;
      data[i + 2] = ((data[i + 2] - 128) * contrastFactor) + 128;
      
      // Clamp values
      data[i] = Math.max(0, Math.min(255, data[i]));
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1]));
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2]));
    }
    
    return adjustedData;
  }
  
  return imageData;
};
