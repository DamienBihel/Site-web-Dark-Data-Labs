"use client"

import React from "react"

interface TimelineItem {
  title: string
  description: string
  date?: string
  icon?: React.ReactNode
}

interface TimelineSectionProps {
  title?: string
  items: TimelineItem[]
}

export function TimelineSection({
  title = "Notre processus",
  items,
}: TimelineSectionProps) {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="mb-12 text-center text-3xl font-bold">{title}</h2>
        )}
        <div className="mx-auto max-w-4xl">
          <div className="relative space-y-8">
            {/* Ligne verticale */}
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gray-200" />

            {items.map((item, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                } items-center justify-center gap-8`}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-primary" />

                {/* Contenu */}
                <div className="w-1/2 p-4">
                  <div
                    className={`rounded-lg bg-white p-6 shadow-lg ${
                      index % 2 === 0 ? "ml-8" : "mr-8"
                    }`}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      {item.icon && (
                        <div className="text-primary">{item.icon}</div>
                      )}
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    {item.date && (
                      <p className="mb-2 text-sm text-gray-500">{item.date}</p>
                    )}
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Espace pour l'autre côté */}
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
