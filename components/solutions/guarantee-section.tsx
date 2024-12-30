"use client"

import React from "react"

interface GuaranteeSectionProps {
  title: string
  description: string
  guarantees: string[]
}

export function GuaranteeSection({
  title,
  description,
  guarantees,
}: GuaranteeSectionProps) {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold">{title}</h2>
        <p className="mb-8 text-center text-gray-600">{description}</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 p-6 text-center"
            >
              <p className="text-lg">{guarantee}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
