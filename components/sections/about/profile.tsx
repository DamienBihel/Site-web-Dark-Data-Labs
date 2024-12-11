"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const certifications = [
  "Data Analyst (Certifié)",
  "Python Development",
  "Automation Specialist",
  "18 ans d'expertise en métrologie"
]

export function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row gap-8 items-start"
    >
      <div className="relative w-full md:w-1/3 aspect-square rounded-lg overflow-hidden bg-muted">
        <Image
          src="/damien-profile.jpg"
          alt="Damien - Data Strategist"
          width={400}
          height={400}
          className="object-cover"
          priority
        />
      </div>
      <div className="flex-1 space-y-6">
        <div>
          <h3 className="text-2xl font-bold">Damien</h3>
          <p className="text-secondary font-medium">Data Strategist & Automation Expert</p>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Après 18 ans comme métrologue, où j&apos;ai développé une expertise pointue dans la précision 
            et l&apos;analyse technique, j&apos;ai effectué une transition réussie vers l&apos;analyse de données. 
            Cette double expertise me permet d&apos;avoir une approche unique :
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Rigueur méthodologique du métrologue</li>
            <li>• Créativité du data analyst</li>
            <li>• Vision stratégique du consultant</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <Badge key={cert} variant="secondary">{cert}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}