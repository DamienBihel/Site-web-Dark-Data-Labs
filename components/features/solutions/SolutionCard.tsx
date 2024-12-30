import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Solution {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  href: string
}

interface SolutionCardProps {
  solution: Solution
  className?: string
}

const animations = {
  hover: {
    scale: 1.02,
    rotateY: 5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98,
    rotateY: 2,
    transition: {
      duration: 0.1
    }
  }
}

const featureAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

export function SolutionCard({ solution, className, ...props }: SolutionCardProps) {
  return (
    <Link href={solution.href} className="block h-full">
      <motion.div
        whileHover={animations.hover}
        whileTap={animations.tap}
        className={cn(
          "relative h-full p-6 bg-gradient-to-br from-card to-card/95 rounded-xl border border-border/50",
          "transition-all duration-300",
          "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
          className
        )}
        style={{ transformStyle: "preserve-3d" }}
        {...props}
      >
        {/* Background Glow Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative space-y-4">
          {/* Header */}
          <div className="space-y-3">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-block rounded-lg bg-primary/10 p-3"
            >
              {solution.icon}
            </motion.div>
            
            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/90">
              {solution.title}
            </h3>
            
            <p className="text-muted-foreground/90 text-sm leading-relaxed">
              {solution.description}
            </p>
          </div>

          {/* Features List */}
          <motion.ul
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            className="space-y-2 pt-4 border-t border-border/50"
          >
            {solution.features.map((feature) => (
              <motion.li
                key={feature}
                variants={featureAnimation}
                className="flex items-center gap-2 text-sm text-foreground/90"
              >
                <Check className="w-4 h-4 text-primary/80" />
                {feature}
              </motion.li>
            ))}
          </motion.ul>

          {/* Call to Action */}
          <div className="pt-4">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-sm font-medium text-primary"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
