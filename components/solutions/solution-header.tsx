"use client"

import React from "react"

interface SolutionHeaderProps {
  title: string
  description: string
}

export function SolutionHeader({ title, description }: SolutionHeaderProps) {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="mb-4 text-4xl font-bold">{title}</h1>
      <p className="text-xl text-gray-600">{description}</p>
    </div>
  )
}
