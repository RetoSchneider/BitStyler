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
  width: 100,
  invert: true, // Default to inverted for white background (dark text on light background)
  colored: false,
  lineHeight: 1, // Reduced line height for better proportions
  fontSize: 13,
  fontFamily: 'monospace',
};

// Standard font size ranges for good looking ASCII art
export const FONT_SIZE_LIMITS = {
  min: 8,
  max: 16,
  optimal: 13
};

// Predefined character sets
export const CHARACTER_SETS = {
  standard: '@%#*+=-:. ',
  blocks: '█▓▒░ ',
};

/**
 * Converts an image to ASCII art
 * @param imageData - ImageData from canvas context
 * @param options - Configuration options
 * @returns ASCII art as string
 */
// Edge detection and detail enhancement functions removed to simplify the code

export const imageToAscii = (
  imageData: ImageData,
  options: Partial<AsciiConverterOptions> = {}
): string => {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const { width, characterSet, invert } = opts;

  // Calculate a better aspect ratio (characters are taller than wide)
  const aspectRatio = 0.5; // Character height/width ratio adjustment (matches vanilla JS example)
  const height = Math.floor((imageData.height / imageData.width) * width * aspectRatio);
  const blockWidth = Math.floor(imageData.width / width);
  const blockHeight = Math.floor(imageData.height / height);

  const pixels = imageData.data;
  let result = '';

  // Process each block and convert to ASCII
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // Get the position of this block in the image
      const blockStartX = x * blockWidth;
      const blockStartY = y * blockHeight;

      // Calculate average brightness for this block
      let totalBrightness = 0;
      let pixelCount = 0;

      // Sample pixels in this block
      for (let by = 0; by < blockHeight; by++) {
        for (let bx = 0; bx < blockWidth; bx++) {
          const pixelX = blockStartX + bx;
          const pixelY = blockStartY + by;

          // Skip if outside image bounds
          if (pixelX >= imageData.width || pixelY >= imageData.height) continue;

          // Get pixel data
          const index = (pixelY * imageData.width + pixelX) * 4;
          const r = pixels[index];
          const g = pixels[index + 1];
          const b = pixels[index + 2];

          // Calculate brightness using the standard luminance formula (matches vanilla JS example)
          const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
          totalBrightness += brightness;
          pixelCount++;
        }
      }

      // Calculate average brightness (0-255)
      const avgBrightness = pixelCount > 0 ? totalBrightness / pixelCount : 0;

      // Map brightness (0-255) to character index (0-characterSet.length-1)
      const normalizedBrightness = avgBrightness / 255;
      const charIndex = invert
        ? Math.floor((1 - normalizedBrightness) * (characterSet.length - 1))
        : Math.floor(normalizedBrightness * (characterSet.length - 1));

      // Add character to result
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
  const opts = { ...DEFAULT_OPTIONS, ...options, colored: true };
  const { width, characterSet, invert, fontSize, fontFamily, lineHeight } = opts;

  // Calculate a better aspect ratio
  const aspectRatio = 0.5; // Match the regular ASCII conversion
  const height = Math.floor((imageData.height / imageData.width) * width * aspectRatio);
  const blockWidth = Math.floor(imageData.width / width);
  const blockHeight = Math.floor(imageData.height / height);

  const pixels = imageData.data;

  // Start building HTML
  let result = `<div style="font-family: ${fontFamily}; font-size: ${fontSize}px; line-height: ${lineHeight}; white-space: pre; letter-spacing: 0;">`;

  // Process blocks and build colored ASCII art
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // Get the position of this block in the image
      const blockStartX = x * blockWidth;
      const blockStartY = y * blockHeight;

      // Calculate average brightness and color for this block
      let totalR = 0;
      let totalG = 0;
      let totalB = 0;
      let totalBrightness = 0;
      let pixelCount = 0;

      // Sample pixels in this block
      for (let by = 0; by < blockHeight; by++) {
        for (let bx = 0; bx < blockWidth; bx++) {
          const pixelX = blockStartX + bx;
          const pixelY = blockStartY + by;

          // Skip if outside image bounds
          if (pixelX >= imageData.width || pixelY >= imageData.height) continue;

          // Get pixel data
          const index = (pixelY * imageData.width + pixelX) * 4;
          const r = pixels[index];
          const g = pixels[index + 1];
          const b = pixels[index + 2];

          // Calculate brightness using the standard luminance formula
          const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

          totalR += r;
          totalG += g;
          totalB += b;
          totalBrightness += brightness;
          pixelCount++;
        }
      }

      // Calculate averages
      const avgR = pixelCount > 0 ? Math.floor(totalR / pixelCount) : 0;
      const avgG = pixelCount > 0 ? Math.floor(totalG / pixelCount) : 0;
      const avgB = pixelCount > 0 ? Math.floor(totalB / pixelCount) : 0;
      const avgBrightness = pixelCount > 0 ? totalBrightness / pixelCount : 0;

      // Map brightness (0-255) to character index (0-characterSet.length-1)
      const normalizedBrightness = avgBrightness / 255;
      const charIndex = invert
        ? Math.floor((1 - normalizedBrightness) * (characterSet.length - 1))
        : Math.floor(normalizedBrightness * (characterSet.length - 1));

      const char = characterSet[charIndex];

      // Enhance colors for better visibility on white backgrounds
      let colorStr;
      if (!invert) {
        // For dark background: use original colors
        colorStr = `rgb(${avgR}, ${avgG}, ${avgB})`;
      } else {
        // For white background: darken colors to ensure visibility
        // Reduce brightness by 30% to ensure visibility on white
        const darkR = Math.max(0, Math.floor(avgR * 0.7));
        const darkG = Math.max(0, Math.floor(avgG * 0.7));
        const darkB = Math.max(0, Math.floor(avgB * 0.7));
        colorStr = `rgb(${darkR}, ${darkG}, ${darkB})`;
      }

      // Add colored character
      result += `<span style="color: ${colorStr}">${char}</span>`;
    }
    result += '<br>';
  }

  result += '</div>';
  return result;
};

/**
 * Gets the average brightness of a block of pixels
 */
export const getAverageBrightness = (
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
    variance,
  };
};

// Smart sampling function removed to simplify the code

/**
 * Gets the average brightness and color of a block of pixels (simple version)
 */
export const getAverageBrightnessAndColor = (
  imageData: ImageData,
  startX: number,
  startY: number,
  width: number,
  height: number
): { brightness: number; color: { r: number; g: number; b: number } } => {
  const { brightness, color } = getSmartSampleWithColor(imageData, startX, startY, width, height);
  return { brightness, color };
};
