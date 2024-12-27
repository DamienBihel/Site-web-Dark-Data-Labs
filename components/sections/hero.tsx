"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ParticlesBackground } from "@/components/particles-background"
import { EnhancedImage } from "@/components/ui/enhanced-image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { OptimizedSection } from "./OptimizedSection"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary/80">
      <ParticlesBackground />
      
      {/* Image d'arrière-plan optimisée */}
      <div className="absolute inset-0 z-0">
        <EnhancedImage
          src="/images/hero-background.jpg"
          alt="Hero background"
          width={1920}
          height={1080}
          priority={true}
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>

      <OptimizedSection priority="high" className="container py-16 sm:py-24 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <div className="space-y-6 max-w-3xl">
            <motion.h1 
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Maîtrisez vos données,{" "}
              <span className="text-secondary">maîtrisez votre avenir</span>
            </motion.h1>
            <motion.h2 
              variants={item}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/80"
            >
              Solutions data sur mesure pour PME ambitieuses
            </motion.h2>
            <motion.p 
              variants={item}
              className="text-base sm:text-lg text-white/60"
            >
              Transformez vos données en avantage compétitif grâce à nos solutions d&apos;automatisation et d&apos;analyse. 
              Nos projets démontrent un potentiel d'augmentation de ROI de 25%+. Soyez parmi les premières entreprises à en bénéficier.
            </motion.p>
          </div>

          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white"
              asChild
            >
              <Link href="/contact">
                Audit gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border-white"
              asChild
            >
              <Link href="/solutions">
                Voir les solutions
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </OptimizedSection>
    </section>
  )
}