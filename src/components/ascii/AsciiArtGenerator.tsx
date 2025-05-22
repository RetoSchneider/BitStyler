"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { Slider } from '../ui/Slider';
import { Select } from '../ui/Select';
import { Toggle } from '../ui/Toggle';
import { Card } from '../ui/Card';
import {
  AsciiConverterOptions,
  DEFAULT_OPTIONS,
  CHARACTER_SETS,
  imageToAscii,
  imageToColoredAsciiHtml,
} from '../../lib/utils/ascii-converter';

export const AsciiArtGenerator: React.FC = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [asciiArt, setAsciiArt] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [options, setOptions] = useState<AsciiConverterOptions>({
    ...DEFAULT_OPTIONS,
    characterSet: CHARACTER_SETS.standard,
  });
  const [previewMode, setPreviewMode] = useState<'ascii' | 'image'>('ascii');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Create canvas element on component mount
  useEffect(() => {
    // Create a canvas element if it doesn't exist
    if (!canvasRef.current) {
      const canvas = document.createElement('canvas');
      canvasRef.current = canvas;
    }
    
    // Cleanup function to handle component unmount
    return () => {
      canvasRef.current = null;
    };
  }, []);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const asciiOutputRef = useRef<HTMLDivElement>(null);

  // Character set options for the select dropdown
  const characterSetOptions = Object.entries(CHARACTER_SETS).map(([key]) => ({
    value: key,
    label: key.charAt(0).toUpperCase() + key.slice(1),
  }));

  // Handle file input change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new window.Image();
      img.onload = () => {
        setImage(img);
        generateAsciiArt(img);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  // Handle drag and drop
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new window.Image();
      img.onload = () => {
        setImage(img);
        generateAsciiArt(img);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  // Handle drag over
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  // Generate ASCII art from image
  const generateAsciiArt = useCallback((imgElement: HTMLImageElement) => {
    setIsProcessing(true);
    
    // Use setTimeout to allow the UI to update before processing
    setTimeout(() => {
      try {
        // Create a local copy of the canvas to avoid React lifecycle issues
        let localCanvas: HTMLCanvasElement;
        
        // Ensure canvas ref exists or create a new one
        if (!canvasRef.current) {
          localCanvas = document.createElement('canvas');
          canvasRef.current = localCanvas;
        } else {
          localCanvas = canvasRef.current;
        }
        
        const ctx = localCanvas.getContext('2d');
        
        if (!ctx) {
          throw new Error('Could not get 2D context from canvas');
        }

        // Set canvas dimensions
        localCanvas.width = imgElement.width;
        localCanvas.height = imgElement.height;

        // Draw image on canvas
        ctx.drawImage(imgElement, 0, 0);

        // Get image data
        const imageData = ctx.getImageData(0, 0, localCanvas.width, localCanvas.height);

        // Generate ASCII art
        let result;
        if (options.colored) {
          result = imageToColoredAsciiHtml(imageData, options);
          setAsciiArt(result); // Store HTML string for colored output
        } else {
          result = imageToAscii(imageData, options);
          setAsciiArt(result); // Store plain ASCII text
        }
        setIsProcessing(false);
      } catch (error) {
        console.error('Error generating ASCII art:', error);
        setIsProcessing(false);
      }
    }, 0);
  }, [options, canvasRef, asciiOutputRef, setAsciiArt, setIsProcessing]);

  // Update ASCII art when options change
  useEffect(() => {
    if (image) {
      generateAsciiArt(image);
    }
  }, [options, generateAsciiArt, image]);

  // Handle option changes
  const updateOption = <K extends keyof AsciiConverterOptions>(
    key: K,
    value: AsciiConverterOptions[K]
  ) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  // Handle character set selection
  const handleCharacterSetChange = (value: string) => {
    const selectedSet = CHARACTER_SETS[value as keyof typeof CHARACTER_SETS] || CHARACTER_SETS.standard;
    updateOption('characterSet', selectedSet);
  };

  // Copy ASCII art to clipboard
  const copyToClipboard = () => {
    if (!asciiArt) return;

    navigator.clipboard.writeText(asciiArt.replace(/\\n/g, '\n'))
      .then(() => {
        alert('ASCII art copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  // Download ASCII art as text file
  const downloadAsciiArt = () => {
    if (!asciiArt) return;

    const element = document.createElement('a');
    const file = new Blob([asciiArt.replace(/\\n/g, '\n')], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'ascii-art.txt';
    
    // Safer approach: don't append to DOM, just simulate click
    element.style.display = 'none';
    element.click();
    
    // Clean up the URL object
    setTimeout(() => {
      URL.revokeObjectURL(element.href);
    }, 100);
  };

  // Download as HTML
  const downloadAsHtml = () => {
    if (!asciiOutputRef.current) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>ASCII Art</title>
        <style>
          body {
            background-color: #111;
            color: ${options.colored ? 'inherit' : '#f0f0f0'};
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
            font-family: ${options.fontFamily};
          }
        </style>
      </head>
      <body>
        ${asciiOutputRef.current.innerHTML}
      </body>
      </html>
    `;

    const element = document.createElement('a');
    const file = new Blob([htmlContent], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'ascii-art.html';
    
    // Safer approach: don't append to DOM, just simulate click
    element.style.display = 'none';
    element.click();
    
    // Clean up the URL object
    setTimeout(() => {
      URL.revokeObjectURL(element.href);
    }, 100);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      {/* Input section */}
      <div className="w-full lg:w-1/3">
        <Card title="Image Input">
          <div
            className="border-2 border-dashed border-gray-700 rounded-md p-6 mb-4 text-center cursor-pointer hover:border-red-700 transition-colors"
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            {image ? (
              <div className="flex flex-col items-center">
                <Image
                  src={image.src}
                  alt="Preview"
                  width={200}
                  height={150}
                  className="max-w-full max-h-48 mb-2 rounded object-contain"
                />
                <p className="text-gray-400 text-sm">Click or drag to replace</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-600 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-300 font-medium">Click or drag image here</p>
                <p className="text-gray-500 text-sm mt-1">Supports JPG, PNG, GIF, etc.</p>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="space-y-4">
            <h3 className="text-red-500 font-bold uppercase tracking-wider mb-2">Configuration</h3>
            
            <Select
              id="character-set"
              label="Character Set"
              options={characterSetOptions}
              value={Object.keys(CHARACTER_SETS).find(
                key => CHARACTER_SETS[key as keyof typeof CHARACTER_SETS] === options.characterSet
              ) || 'standard'}
              onChange={handleCharacterSetChange}
            />
            
            <Slider
              id="width"
              label="Width"
              min={20}
              max={200}
              step={5}
              value={options.width}
              onChange={(value) => updateOption('width', value)}
            />
            
            <Slider
              id="contrast"
              label="Contrast"
              min={-1}
              max={1}
              step={0.1}
              value={options.contrast}
              onChange={(value) => updateOption('contrast', value)}
            />
            
            <Slider
              id="brightness"
              label="Brightness"
              min={-1}
              max={1}
              step={0.1}
              value={options.brightness}
              onChange={(value) => updateOption('brightness', value)}
            />
            
            <Slider
              id="font-size"
              label="Font Size"
              min={6}
              max={24}
              step={1}
              value={options.fontSize}
              onChange={(value) => updateOption('fontSize', value)}
            />
            
            <Slider
              id="line-height"
              label="Line Height"
              min={0.5}
              max={2}
              step={0.1}
              value={options.lineHeight}
              onChange={(value) => updateOption('lineHeight', value)}
            />
            
            <Toggle
              id="invert"
              label="Invert Colors"
              checked={options.invert}
              onChange={(value) => updateOption('invert', value)}
            />
            
            <Toggle
              id="colored"
              label="Colored Output"
              checked={options.colored}
              onChange={(value) => updateOption('colored', value)}
            />
            
            <div className="flex gap-2 mt-4">
              <Button
                variant="primary"
                onClick={() => image && generateAsciiArt(image)}
                disabled={!image || isProcessing}
                className="flex-1"
              >
                {isProcessing ? 'Processing...' : 'Generate'}
              </Button>
              
              <Button
                variant="secondary"
                onClick={() => setOptions({
                  ...DEFAULT_OPTIONS,
                  characterSet: CHARACTER_SETS.standard,
                })}
                className="flex-1"
              >
                Reset
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Output section */}
      <div className="w-full lg:w-2/3">
        <Card title="ASCII Output" className="h-full">
          <div className="flex justify-between mb-4">
            <div className="flex gap-2">
              <Button
                variant={previewMode === 'ascii' ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setPreviewMode('ascii')}
              >
                ASCII
              </Button>
              <Button
                variant={previewMode === 'image' ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setPreviewMode('image')}
                disabled={!image}
              >
                Original
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={copyToClipboard}
                disabled={!asciiArt}
              >
                Copy
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={downloadAsciiArt}
                disabled={!asciiArt}
              >
                Download TXT
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={downloadAsHtml}
                disabled={!asciiArt}
              >
                Download HTML
              </Button>
            </div>
          </div>

          <div className="relative bg-black rounded-md overflow-auto h-[500px] p-4">
            {isProcessing && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10">
                <div className="text-red-500 text-xl font-bold">Processing...</div>
              </div>
            )}
                       {previewMode === 'ascii' ? (
              <>
                {asciiArt && !options.colored && (
                  <div className="text-gray-200 whitespace-pre overflow-auto" ref={asciiOutputRef}>
                    <pre
                      style={{
                        fontFamily: options.fontFamily,
                        fontSize: options.fontSize,
                        lineHeight: options.lineHeight,
                        margin: 0,
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-all'
                      }}
                    >
                      {asciiArt.replace(/\\n/g, '\n')}
                    </pre>
                  </div>
                )}
                {asciiArt && options.colored && (
                  <div
                    ref={asciiOutputRef}
                    style={{
                      fontFamily: options.fontFamily,
                      fontSize: options.fontSize,
                      lineHeight: options.lineHeight,
                      color: "#e5e7eb",
                      background: "black",
                      borderRadius: "0.375rem",
                      overflow: "auto",
                      height: "100%",
                      padding: "1rem",
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-all'
                    }}
                    dangerouslySetInnerHTML={{ __html: asciiArt.replace(/\\n/g, '\n') }}
                  />
                )}
                {!asciiArt && !isProcessing && (
                  <div className="flex flex-col items-center justify-center h-full text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <p className="text-lg font-medium">ASCII output will appear here</p>
                    <p className="text-sm mt-1">Upload an image to get started</p>
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                {image ? (
                  <Image
                    src={image.src}
                    alt="Original"
                    width={800}
                    height={600}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="text-gray-600">No image selected</div>
                )}
              </div>
            )}
          </div>

          <div className="mt-4 text-gray-500 text-sm">
            <p>
              <span className="text-red-500 font-bold">IMPERIUM APPROVED:</span> For the glory of the Emperor, transform your pict-captures into holy binary script.
            </p>
          </div>
        </Card>
      </div>

      {/* Hidden canvas for image processing */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};
