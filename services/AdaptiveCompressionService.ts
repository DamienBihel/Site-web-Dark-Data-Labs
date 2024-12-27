import sharp from 'sharp';
import { imageOptimizer } from './ImageOptimizationService';
import { NetworkSpeedTest } from './NetworkSpeedTest';

interface CompressionProfile {
  quality: number;
  format: 'webp' | 'avif' | 'jpeg';
  width: number;
  optimizeMetadata: boolean;
}

export class AdaptiveCompressionService {
  private networkSpeed: NetworkSpeedTest;

  constructor() {
    this.networkSpeed = new NetworkSpeedTest();
  }

  private async determineOptimalProfile(
    originalSize: number,
    connectionSpeed: number
  ): Promise<CompressionProfile> {
    // Profils de compression basés sur la vitesse de connexion
    if (connectionSpeed < 1) { // < 1 Mbps
      return {
        quality: 60,
        format: 'webp',
        width: 640,
        optimizeMetadata: true
      };
    } else if (connectionSpeed < 5) { // 1-5 Mbps
      return {
        quality: 75,
        format: 'webp',
        width: 1024,
        optimizeMetadata: true
      };
    } else { // > 5 Mbps
      return {
        quality: 85,
        format: 'avif',
        width: 1920,
        optimizeMetadata: false
      };
    }
  }

  async compressImage(
    inputPath: string,
    outputPath: string,
    options: Partial<CompressionProfile> = {}
  ) {
    try {
      // Mesure de la vitesse de connexion
      const connectionSpeed = await this.networkSpeed.measureSpeed();
      
      // Obtention des métadonnées de l'image originale
      const metadata = await sharp(inputPath).metadata();
      const originalSize = metadata.size || 0;

      // Détermination du profil optimal
      const optimalProfile = await this.determineOptimalProfile(
        originalSize,
        connectionSpeed
      );

      // Fusion avec les options fournies
      const finalProfile = { ...optimalProfile, ...options };

      // Pipeline de compression
      let pipeline = sharp(inputPath);

      // Redimensionnement si nécessaire
      if (metadata.width && metadata.width > finalProfile.width) {
        pipeline = pipeline.resize(finalProfile.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        });
      }

      // Optimisation des métadonnées
      if (finalProfile.optimizeMetadata) {
        pipeline = pipeline.withMetadata({
          orientation: undefined,
          icc: undefined
        });
      }

      // Compression selon le format
      switch (finalProfile.format) {
        case 'webp':
          pipeline = pipeline.webp({
            quality: finalProfile.quality,
            effort: 6,
            nearLossless: true
          });
          break;
        case 'avif':
          pipeline = pipeline.avif({
            quality: finalProfile.quality,
            effort: 6,
            chromaSubsampling: '4:2:0'
          });
          break;
        case 'jpeg':
          pipeline = pipeline.jpeg({
            quality: finalProfile.quality,
            progressive: true,
            mozjpeg: true
          });
          break;
      }

      // Sauvegarde de l'image optimisée
      await pipeline.toFile(outputPath);

      // Calcul des statistiques d'optimisation
      const compressedMetadata = await sharp(outputPath).metadata();
      const compressionRatio = (originalSize - (compressedMetadata.size || 0)) / originalSize * 100;

      return {
        originalSize,
        compressedSize: compressedMetadata.size,
        compressionRatio,
        format: finalProfile.format,
        quality: finalProfile.quality,
        width: compressedMetadata.width
      };
    } catch (error) {
      console.error('Error during adaptive compression:', error);
      throw error;
    }
  }

  // Compression par lots avec limite de concurrence
  async batchCompress(
    images: Array<{ input: string; output: string }>,
    concurrency = 3
  ) {
    const results = [];
    for (let i = 0; i < images.length; i += concurrency) {
      const batch = images.slice(i, i + concurrency);
      const batchResults = await Promise.all(
        batch.map(img => this.compressImage(img.input, img.output))
      );
      results.push(...batchResults);
    }
    return results;
  }
}

export const adaptiveCompressor = new AdaptiveCompressionService();

// Exemple d'utilisation :
/*
const result = await adaptiveCompressor.compressImage(
  'input.jpg',
  'output.webp',
  { quality: 80 }
);

const batchResults = await adaptiveCompressor.batchCompress([
  { input: 'image1.jpg', output: 'image1.webp' },
  { input: 'image2.jpg', output: 'image2.webp' }
]);
*/
