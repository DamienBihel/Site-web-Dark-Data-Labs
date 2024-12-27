import React, { memo } from 'react';

const HeavyComponent: React.FC = () => {
  // Simuler un composant lourd
  const heavyCalculation = () => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += Math.random();
    }
    return result;
  };

  // Utiliser useMemo pour éviter les calculs inutiles
  const result = React.useMemo(() => heavyCalculation(), []);

  return (
    <div>
      <h2>Composant Lourd</h2>
      <p>Résultat du calcul: {result}</p>
    </div>
  );
};

// Utiliser memo pour éviter les re-renders inutiles
export default memo(HeavyComponent);
