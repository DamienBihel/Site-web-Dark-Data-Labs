import React from 'react';
import { OptimizedGallery } from '@/components/ui/optimized-gallery';
import { OptimizedSection } from '../OptimizedSection';

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    sources?: Array<{
      src: string;
      width: number;
      height: number;
    }>;
  };
  category: string;
  results: {
    metric: string;
    value: string;
  }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'automation-pme',
    title: 'Automatisation PME Industrielle',
    description: 'Réduction de 80% du temps de traitement des données de production',
    image: {
      src: '/images/case-studies/industrial-automation.jpg',
      alt: 'Automatisation industrielle',
      width: 800,
      height: 600,
      sources: [
        { src: '/images/case-studies/industrial-automation-sm.webp', width: 400, height: 300 },
        { src: '/images/case-studies/industrial-automation-md.webp', width: 800, height: 600 }
      ]
    },
    category: 'Automatisation',
    results: [
      { metric: 'Temps économisé', value: '30h/semaine' },
      { metric: 'ROI', value: '+150%' }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Analytics pour E-commerce',
    description: 'Augmentation de 45% des ventes grâce à l'analyse prédictive',
    image: {
      src: '/images/case-studies/ecommerce-analytics.jpg',
      alt: 'Analytics E-commerce',
      width: 800,
      height: 600,
      sources: [
        { src: '/images/case-studies/ecommerce-analytics-sm.webp', width: 400, height: 300 },
        { src: '/images/case-studies/ecommerce-analytics-md.webp', width: 800, height: 600 }
      ]
    },
    category: 'Analytics',
    results: [
      { metric: 'Augmentation des ventes', value: '+45%' },
      { metric: 'Rétention client', value: '+60%' }
    ]
  },
  // Ajoutez d'autres études de cas ici
];

export function CaseStudyGallery() {
  const galleryImages = caseStudies.map(study => ({
    src: study.image.src,
    alt: study.image.alt,
    width: study.image.width,
    height: study.image.height,
    sources: study.image.sources,
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
    metadata: {
      title: study.title,
      description: study.description,
      category: study.category,
      results: study.results
    }
  }));

  return (
    <OptimizedSection
      priority="medium"
      className="py-16 sm:py-24"
      animation="fade"
    >
      <div className="container">
        <h2 className="text-3xl font-bold mb-12">Nos Réalisations</h2>
        
        <OptimizedGallery
          images={galleryImages}
          columns={3}
          gap={24}
          loadingStrategy="progressive"
          className="min-h-[600px]"
        />
      </div>
    </OptimizedSection>
  );
}

// Exemple d'utilisation :
/*
import { CaseStudyGallery } from './components/sections/case-studies/CaseStudyGallery';

<CaseStudyGallery />
*/
