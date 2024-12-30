"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  certifications: string[]
  imageUrl: string
  index: number
}

export function TeamMember({ name, role, bio, certifications, imageUrl, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col md:flex-row gap-8 items-start"
    >
      <div className="relative w-full md:w-1/3 aspect-square rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 space-y-4">
        <div>
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-secondary font-medium">{role}</p>
        </div>
        <p className="text-muted-foreground">{bio}</p>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert, i) => (
            <Badge key={i} variant="secondary">{cert}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}