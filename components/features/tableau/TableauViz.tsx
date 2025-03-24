'use client'

import { BaseComponentProps } from '@/components/component.config'
import { cn } from '@/lib/utils'

interface TableauVizProps extends BaseComponentProps {
  vizUrl: string
}

export function TableauViz({ vizUrl, className }: TableauVizProps) {
  // Construire l'URL d'intégration
  const embedUrl = `${vizUrl}?:showVizHome=no&:embed=true&:toolbar=yes&:tabs=no&:apiID=host0#navType=0&navSrc=Parse`;

  return (
    <div className={cn("relative w-full pb-[56.25%]", className)}>
      <iframe
        src={embedUrl}
        className="absolute top-0 left-0 w-full h-full border-0 bg-[#1F1F1F]"
        frameBorder="0"
        allowFullScreen
        allow="fullscreen"
        title="Tableau Visualization"
      />
    </div>
  )
}
