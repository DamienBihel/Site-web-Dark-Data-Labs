import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';

interface ImageFormat {
  format: 'webp' | 'avif' | 'jpeg';
  quality: number;
}

interface ImageSize {
  width: number;
  height?: number;
  suffix: string;
}

interface OptimizationOptions {
  formats: ImageFormat[];
  sizes: ImageSize[];
  placeholder: boolean;
}

const DEFAULT_FORMATS: ImageFormat[] = [
  { format: 'webp', quality: 80 },
  { format: 'avif', quality: 75 },
  { format: 'jpeg', quality: 85 }
];

const DEFAULT_SIZES: ImageSize[] = [
  { width: 640, suffix: 'sm' },
  { width: 1024, suffix: 'md' },
  { width: 1920, suffix: 'lg' }
];

export class ImageOptimizationService {
  private cacheDir: string;
  private publicDir: string;

  constructor() {
    this.cacheDir = path.join(process.cwd(), '.next/cache/images');
    this.publicDir = path.join(process.cwd(), 'public');
  }

  async optimizeImage(
    imagePath: string,
    options: Partial<OptimizationOptions> = {}
  ) {
    const formats = options.formats || DEFAULT_FORMATS;
    const sizes = options.sizes || DEFAULT_SIZES;
    const generatePlaceholder = options.placeholder ?? true;

    const originalImage = sharp(path.join(this.publicDir, imagePath));
    const metadata = await originalImage.metadata();

    if (!metadata.width || !metadata.height) {
      throw new Error('Unable to get image dimensions');
    }

    const results = {
      original: {
        width: metadata.width,
        height: metadata.height,
      },
      versions: [] as Array<{
        path: string;
        format: string;
        width: number;
        height: number;
      }>,
      placeholder: '',
    };

    // Générer un placeholder base64 pour le chargement progressif
    if (generatePlaceholder) {
      const placeholderBuffer = await originalImage
        .resize(20)
        .blur(5)
        .toBuffer();
      results.placeholder = `data:image/${metadata.format};base64,${placeholderBuffer.toString('base64')}`;
    }

    // Générer les différentes versions
    for (const size of sizes) {
      const resizedWidth = Math.min(size.width, metadata.width);
      const resizedHeight = size.height || Math.round(
        (resizedWidth * metadata.height) / metadata.width
      );

      for (const format of formats) {
        const outputFilename = this.generateOutputFilename(
          imagePath,
          size.suffix,
          format.format
        );
        const outputPath = path.join(this.cacheDir, outputFilename);

        await originalImage
          .resize(resizedWidth, resizedHeight)
          [format.format]({ quality: format.quality })
          .toFile(outputPath);

        results.versions.push({
          path: `/cache/images/${outputFilename}`,
          format: format.format,
          width: resizedWidth,
          height: resizedHeight,
        });
      }
    }

    return results;
  }

  private generateOutputFilename(
    originalPath: string,
    suffix: string,
    format: string
  ): string {
    const parsedPath = path.parse(originalPath);
    return `${parsedPath.name}-${suffix}.${format}`;
  }

  async cleanup(): Promise<void> {
    try {
      await fs.rm(this.cacheDir, { recursive: true, force: true });
      await fs.mkdir(this.cacheDir, { recursive: true });
    } catch (error) {
      console.error('Error cleaning up image cache:', error);
    }
  }
}

export const imageOptimizer = new ImageOptimizationService();

// Exemple d'utilisation :
/*
const optimizedImage = await imageOptimizer.optimizeImage('/images/hero.jpg', {
  formats: [
    { format: 'webp', quality: 85 },
    { format: 'avif', quality: 80 }
  ],
  sizes: [
    { width: 400, suffix: 'sm' },
    { width: 800, suffix: 'md' }
  ],
  placeholder: true
});
*/
