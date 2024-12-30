import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface AboutSectionProps {
  className?: string
}

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

const features = [
  {
    title: "Expertise Data",
    description: "Notre équipe d'experts maîtrise les dernières technologies de traitement et d'analyse de données.",
    icon: "📊"
  },
  {
    title: "Innovation",
    description: "Nous développons des solutions sur mesure en utilisant les technologies les plus innovantes.",
    icon: "💡"
  },
  {
    title: "Accompagnement",
    description: "Un suivi personnalisé pour vous aider à tirer le meilleur parti de vos données.",
    icon: "🤝"
  }
]

export function AboutSection({ className, ...props }: AboutSectionProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-background", className)} {...props}>
      <div className="container">
        <motion.div
          variants={animations.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <motion.h2 
              variants={animations.item}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              Experts en Data Science
            </motion.h2>
            <motion.p 
              variants={animations.item}
              className="text-xl text-muted-foreground"
            >
              Dark Data Labs accompagne les entreprises dans leur transformation digitale 
              grâce à des solutions data innovantes et personnalisées.
            </motion.p>
          </div>

          <motion.div 
            variants={animations.item}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative p-6 bg-card rounded-lg border transition-shadow hover:shadow-md"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div 
            variants={animations.item}
            className="text-center"
          >
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Depuis notre création, nous avons accompagné plus de 50 entreprises 
              dans leur transformation digitale, traitant plus de 100To de données 
              et développant des solutions sur mesure pour chacun de nos clients.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
