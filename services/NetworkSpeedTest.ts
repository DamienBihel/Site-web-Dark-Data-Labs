export class NetworkSpeedTest {
  private readonly testImageSize = 100 * 1024; // 100KB
  private readonly testDuration = 3000; // 3 secondes
  private readonly sampleSize = 3;
  private lastTest: number = 0;
  private cachedSpeed: number = 0;
  private readonly cacheTimeout = 60000; // 1 minute

  private async downloadTest(): Promise<number> {
    const startTime = performance.now();
    const testImage = new Image();
    
    try {
      await new Promise((resolve, reject) => {
        testImage.onload = resolve;
        testImage.onerror = reject;
        testImage.src = `https://picsum.photos/200/300?random=${Math.random()}`;
      });

      const endTime = performance.now();
      const duration = (endTime - startTime) / 1000; // en secondes
      const speed = this.testImageSize / duration / 1024 / 1024; // en Mbps

      return speed;
    } catch (error) {
      console.warn('Network speed test failed:', error);
      return this.cachedSpeed || 1; // Fallback à 1 Mbps si pas de cache
    }
  }

  private async uploadTest(): Promise<number> {
    const blob = new Blob([new ArrayBuffer(this.testImageSize)]);
    const formData = new FormData();
    formData.append('file', blob);

    const startTime = performance.now();

    try {
      await fetch('/api/speed-test', {
        method: 'POST',
        body: formData
      });

      const endTime = performance.now();
      const duration = (endTime - startTime) / 1000;
      const speed = this.testImageSize / duration / 1024 / 1024;

      return speed;
    } catch (error) {
      console.warn('Upload speed test failed:', error);
      return this.cachedSpeed || 1;
    }
  }

  async measureSpeed(): Promise<number> {
    // Vérifier si un test récent est disponible
    if (
      this.cachedSpeed &&
      Date.now() - this.lastTest < this.cacheTimeout
    ) {
      return this.cachedSpeed;
    }

    try {
      // Effectuer plusieurs tests pour une meilleure précision
      const downloadSpeeds: number[] = [];
      const uploadSpeeds: number[] = [];

      for (let i = 0; i < this.sampleSize; i++) {
        downloadSpeeds.push(await this.downloadTest());
        uploadSpeeds.push(await this.uploadTest());
        
        // Petite pause entre les tests
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      // Calculer les moyennes
      const avgDownload = downloadSpeeds.reduce((a, b) => a + b) / this.sampleSize;
      const avgUpload = uploadSpeeds.reduce((a, b) => a + b) / this.sampleSize;

      // Utiliser la vitesse la plus basse pour être conservateur
      this.cachedSpeed = Math.min(avgDownload, avgUpload);
      this.lastTest = Date.now();

      return this.cachedSpeed;
    } catch (error) {
      console.error('Error measuring network speed:', error);
      return this.cachedSpeed || 1; // Fallback à 1 Mbps
    }
  }

  // Estimation rapide basée sur le type de connexion
  getConnectionType(): string {
    if (!navigator.connection) {
      return 'unknown';
    }

    const connection = (navigator as any).connection;
    return connection.effectiveType || 'unknown';
  }

  // Vérifier si la connexion est métrée
  isMeteredConnection(): boolean {
    if (!navigator.connection) {
      return false;
    }

    const connection = (navigator as any).connection;
    return connection.metered || false;
  }

  // Obtenir une estimation de la vitesse sans test
  getEstimatedSpeed(): number {
    const connectionType = this.getConnectionType();
    
    // Estimations basées sur les types de connexion courants
    switch (connectionType) {
      case 'slow-2g':
        return 0.1; // 100 Kbps
      case '2g':
        return 0.3; // 300 Kbps
      case '3g':
        return 1.5; // 1.5 Mbps
      case '4g':
        return 10; // 10 Mbps
      default:
        return this.cachedSpeed || 5; // Valeur par défaut raisonnable
    }
  }
}

// Exemple d'utilisation :
/*
const speedTest = new NetworkSpeedTest();

// Test complet
const speed = await speedTest.measureSpeed();
console.log(`Vitesse de connexion: ${speed} Mbps`);

// Estimation rapide
const estimatedSpeed = speedTest.getEstimatedSpeed();
console.log(`Vitesse estimée: ${estimatedSpeed} Mbps`);

// Type de connexion
const connectionType = speedTest.getConnectionType();
console.log(`Type de connexion: ${connectionType}`);
*/
