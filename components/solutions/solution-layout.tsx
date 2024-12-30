"use client"

import React from "react"

interface SolutionLayoutProps {
  children: React.ReactNode
}

export function SolutionLayout({ children }: SolutionLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
    </div>
  )
}
