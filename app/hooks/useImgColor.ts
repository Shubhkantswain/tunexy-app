import { useState, useEffect } from 'react';

function useImageColor(imageUrl: string) {
  const [dominantColor, setDominantColor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!imageUrl) return;

    const getImageColor = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Create a canvas element to analyze the image
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        // Handle cross-origin issues
        img.crossOrigin = 'Anonymous';
        
        img.src = imageUrl;
        
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = () => reject(new Error('Failed to load image'));
        });
        
        // Set canvas dimensions
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw image on canvas
        ctx.drawImage(img, 0, 0, img.width, img.height);
        
        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        
        // Analyze colors (simple version - gets average color)
        let r = 0, g = 0, b = 0;
        let count = 0;
        
        // Sample pixels (every 10th pixel for performance)
        for (let i = 0; i < imageData.length; i += 40) {
          r += imageData[i];
          g += imageData[i + 1];
          b += imageData[i + 2];
          count++;
        }
        
        // Calculate average
        r = Math.round(r / count);
        g = Math.round(g / count);
        b = Math.round(b / count);
        
        // Convert to hex
        const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        
        setDominantColor(hex);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getImageColor();
  }, [imageUrl]);

  return { dominantColor, loading, error };
}

export default useImageColor