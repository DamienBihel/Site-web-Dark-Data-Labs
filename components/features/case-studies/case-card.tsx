"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface CaseCardProps {
  title: string
  industry: string
  before: string
  action: string
  result: string
  roi: string
  index: number
}

export function CaseCard({ title, industry, before, action, result, roi, index }: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group cursor-pointer transition-all hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {title}
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </CardTitle>
          <CardDescription>{industry}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Avant</p>
            <p className="text-sm">{before}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Action</p>
            <p className="text-sm">{action}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Résultat</p>
            <p className="text-sm">{result}</p>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm font-medium">ROI : <span className="text-secondary">{roi}</span></p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}