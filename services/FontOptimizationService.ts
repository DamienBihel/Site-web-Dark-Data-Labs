import { NetworkSpeedTest } from './NetworkSpeedTest';

interface FontVariant {
  weight: number;
  style: 'normal' | 'italic';
  subset?: string;
}

interface FontConfig {
  family: string;
  variants: FontVariant[];
  display: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
  preload?: boolean;
  format: 'woff2' | 'woff' | 'ttf';
}

export class FontOptimizationService {
  private networkSpeed: NetworkSpeedTest;
  private loadedFonts: Set<string> = new Set();
  private fontLoadingPromises: Map<string, Promise<void>> = new Map();

  constructor() {
    this.networkSpeed = new NetworkSpeedTest();
  }

  // Générer le CSS @font-face optimisé
  private generateFontFace(
    family: string,
    variant: FontVariant,
    format: string,
    display: string
  ): string {
    const weight = variant.weight;
    const style = variant.style;
    const subset = variant.subset ? `-${variant.subset}` : '';
    
    return `
      @font-face {
        font-family: '${family}';
        font-style: ${style};
        font-weight: ${weight};
        font-display: ${display};
        src: url('/fonts/${family}-${weight}${style}${subset}.${format}') format('${format}');
        unicode-range: ${this.getUnicodeRange(variant.subset)};
      }
    `;
  }

  // Obtenir la plage Unicode pour un sous-ensemble
  private getUnicodeRange(subset?: string): string {
    const ranges: { [key: string]: string } = {
      latin: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      latinExt: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      cyrillic: 'U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      greek: 'U+0370-03FF',
    };
    return ranges[subset || 'latin'] || ranges.latin;
  }

  // Optimiser la configuration des polices en fonction des conditions
  async optimizeFontConfig(config: FontConfig): Promise<FontConfig> {
    const speed = await this.networkSpeed.measureSpeed();
    const optimizedConfig = { ...config };

    // Ajuster la stratégie de chargement en fonction de la vitesse
    if (speed < 1) { // Connexion lente
      optimizedConfig.display = 'swap';
      optimizedConfig.format = 'woff2';
      optimizedConfig.variants = config.variants.filter(v => !v.style.includes('italic'));
    } else if (speed < 5) { // Connexion moyenne
      optimizedConfig.display = 'fallback';
      optimizedConfig.format = 'woff2';
    } else { // Connexion rapide
      optimizedConfig.display = 'optional';
    }

    return optimizedConfig;
  }

  // Précharger une police
  async preloadFont(family: string, variant: FontVariant, format: string): Promise<void> {
    const fontId = `${family}-${variant.weight}${variant.style}`;
    
    if (this.loadedFonts.has(fontId)) {
      return;
    }

    if (this.fontLoadingPromises.has(fontId)) {
      return this.fontLoadingPromises.get(fontId);
    }

    const loadingPromise = new Promise<void>((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = `font/${format}`;
      link.href = `/fonts/${family}-${variant.weight}${variant.style}.${format}`;
      link.crossOrigin = 'anonymous';

      link.onload = () => {
        this.loadedFonts.add(fontId);
        resolve();
      };
      link.onerror = reject;

      document.head.appendChild(link);
    });

    this.fontLoadingPromises.set(fontId, loadingPromise);
    return loadingPromise;
  }

  // Injecter les styles de police optimisés
  async injectOptimizedFonts(configs: FontConfig[]): Promise<void> {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'optimized-fonts';

    let css = '';
    for (const config of configs) {
      const optimizedConfig = await this.optimizeFontConfig(config);
      
      // Précharger les polices critiques
      if (optimizedConfig.preload) {
        for (const variant of optimizedConfig.variants) {
          await this.preloadFont(
            optimizedConfig.family,
            variant,
            optimizedConfig.format
          );
        }
      }

      // Générer les règles @font-face
      for (const variant of optimizedConfig.variants) {
        css += this.generateFontFace(
          optimizedConfig.family,
          variant,
          optimizedConfig.format,
          optimizedConfig.display
        );
      }
    }

    styleSheet.textContent = css;
    document.head.appendChild(styleSheet);
  }

  // Charger un sous-ensemble de police à la demande
  async loadFontSubset(
    family: string,
    variant: FontVariant,
    subset: string
  ): Promise<void> {
    const fontId = `${family}-${variant.weight}${variant.style}-${subset}`;
    
    if (this.loadedFonts.has(fontId)) {
      return;
    }

    const variantWithSubset = { ...variant, subset };
    const css = this.generateFontFace(family, variantWithSubset, 'woff2', 'swap');
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = css;
    document.head.appendChild(styleSheet);

    this.loadedFonts.add(fontId);
  }
}

export const fontOptimizer = new FontOptimizationService();

// Exemple d'utilisation :
/*
const fontConfigs = [
  {
    family: 'Montserrat',
    variants: [
      { weight: 400, style: 'normal' },
      { weight: 700, style: 'normal' }
    ],
    display: 'swap',
    preload: true,
    format: 'woff2'
  }
];

// Injecter les polices optimisées
await fontOptimizer.injectOptimizedFonts(fontConfigs);

// Charger un sous-ensemble spécifique à la demande
await fontOptimizer.loadFontSubset('Montserrat', {
  weight: 400,
  style: 'normal'
}, 'cyrillic');
*/
