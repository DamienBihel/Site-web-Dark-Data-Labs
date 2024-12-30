"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  category: string
  problems: string[]
  solutions: string[]
  benefits: string[]
  status: string
  index: number
}

export function ProjectCard({ 
  title, 
  category, 
  problems, 
  solutions, 
  benefits, 
  status, 
  index 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {title}
            <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
          </CardTitle>
          <CardDescription>{category}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Problématiques Adressées</p>
            <ul className="space-y-1">
              {problems.map((problem, i) => (
                <li key={i} className="text-sm">• {problem}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Solution Proposée</p>
            <ul className="space-y-1">
              {solutions.map((solution, i) => (
                <li key={i} className="text-sm">• {solution}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Bénéfices Attendus</p>
            <ul className="space-y-1">
              {benefits.map((benefit, i) => (
                <li key={i} className="text-sm">• {benefit}</li>
              ))}
            </ul>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm font-medium text-secondary">{status}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}