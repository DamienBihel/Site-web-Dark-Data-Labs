import { motion } from "framer-motion"
import { Button } from "@/components/shared/ui/button"
import { ParticlesBackground } from "@/components/shared/ui/particles-background"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BaseComponentProps } from "@/components/component.config"
import { cn } from "@/lib/utils"

interface HeroProps extends BaseComponentProps {}

const animations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
}

export function Hero({ className, ...props }: HeroProps) {
  return (
    <section 
      className={cn(
        "relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-gradient-to-br from-primary to-primary/80",
        className
      )}
      {...props}
    >
      <ParticlesBackground />
      <div className="container py-16 sm:py-24 relative z-10">
        <motion.div
          variants={animations.container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <div className="space-y-6 max-w-3xl">
            <motion.h1 
              variants={animations.item}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Maîtrisez vos données,{" "}
              <span className="text-secondary">maîtrisez votre avenir</span>
            </motion.h1>
            <motion.h2 
              variants={animations.item}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/80"
            >
              Solutions data sur mesure pour PME ambitieuses
            </motion.h2>
            <motion.p 
              variants={animations.item}
              className="text-base sm:text-lg text-white/60"
            >
              Transformez vos données en insights stratégiques. Nos solutions 
              personnalisées vous accompagnent dans votre croissance digitale.
            </motion.p>
          </div>
          
          <motion.div 
            variants={animations.item}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Démarrer votre projet
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/solutions">
              <Button variant="secondary" size="lg">
                Découvrir nos solutions
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
