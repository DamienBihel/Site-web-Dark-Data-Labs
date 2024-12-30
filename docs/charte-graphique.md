# Charte Graphique Dark Data Labs 🧪

> Guide complet de l'identité visuelle Dark Data Labs - Un style sombre, techno et mystérieux.

## 1. Palette de Couleurs 🎨

### Couleurs Principales
```css
--color-dark: #0A0A0A;      /* Noir profond - Couleur principale */
--color-neon: #00FF85;      /* Vert néon - Accent */
--color-gray: #1F1F1F;      /* Gris anthracite - Fond secondaire */
--color-light: #F2F2F2;     /* Blanc cassé - Texte */
```

### Utilisation
- **Fond principal** : Noir profond (#0A0A0A)
- **Accents et CTA** : Vert néon (#00FF85)
- **Sections alternées** : Gris anthracite (#1F1F1F)
- **Texte et éléments UI** : Blanc cassé (#F2F2F2)

### Variantes de Transparence
```css
--color-neon-glow: rgba(0, 255, 133, 0.2);    /* Pour effets de glow */
--color-dark-overlay: rgba(10, 10, 10, 0.8);   /* Pour overlays */
```

## 2. Typographie 📝

### Titres et Accroches
```css
font-family: 'Montserrat', sans-serif;
font-weight: 800;  /* ExtraBold */
text-transform: uppercase;
letter-spacing: 0.05em;
```

### Texte Courant
```css
font-family: 'Roboto', sans-serif;
font-weight: 400;  /* Regular */
line-height: 1.6;
```

### Hiérarchie
- H1 : 3rem / 48px
- H2 : 2.25rem / 36px
- H3 : 1.5rem / 24px
- Corps de texte : 1rem / 16px
- Petits textes : 0.875rem / 14px

## 3. Éléments Graphiques 🎯

### Icônes
- Style : Ligne fine (outline)
- Épaisseur : 1.5px
- Couleurs : Blanc (#F2F2F2) ou vert néon (#00FF85)
- Format recommandé : SVG

### Effets Visuels
- **Glow Effect**
  ```css
  box-shadow: 0 0 20px var(--color-neon-glow);
  ```
- **Grain Texture**
  ```css
  background-image: url('/noise.png');
  opacity: 0.4;
  mix-blend-mode: overlay;
  ```
- **Glitch Effect**
  - À utiliser avec parcimonie sur les titres importants
  - Animation subtile pour ne pas perturber la lecture

### Grilles et Layouts
- Grille principale : 12 colonnes
- Gouttière : 24px
- Marges latérales :
  - Desktop : 64px
  - Tablet : 32px
  - Mobile : 16px

## 4. Composants UI 🖥️

### Boutons
```css
/* Bouton Principal */
.btn-primary {
  background: var(--color-neon);
  color: var(--color-dark);
  border-radius: 4px;
  padding: 12px 24px;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease;
}

/* Bouton Secondaire */
.btn-secondary {
  background: transparent;
  color: var(--color-neon);
  border: 1px solid var(--color-neon);
}
```

### Cartes
```css
.card {
  background: var(--color-gray);
  border: 1px solid rgba(242, 242, 242, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}
```

## 5. Ton et Style de Communication 🗣️

### Ton
- Professionnel mais mystérieux
- Orienté tech et innovation
- Vocabulaire précis et technique
- Touch d'humour subtile dans les accroches

### Messages Clés
- Focus sur l'IA et l'automatisation
- Mise en avant de l'expertise technique
- Approche no-code pour l'accessibilité
- Ambiance "laboratoire du futur"

## 6. Responsive Design 📱

### Breakpoints
```css
--mobile: 320px;
--tablet: 768px;
--desktop: 1024px;
--large: 1440px;
```

### Adaptations Mobile
- Police réduite de 10-15%
- Marges réduites
- Layouts simplifiés en colonnes
- Menus hamburger avec animation néon

## 7. Accessibilité ♿

- Contraste minimum 4.5:1 pour le texte
- Focus visible sur les éléments interactifs
- Alternatives textuelles pour les images
- Navigation possible au clavier

---

> Note : Cette charte graphique est un document vivant. N'hésitez pas à proposer des améliorations tout en respectant l'esprit "Dark Data Labs".
