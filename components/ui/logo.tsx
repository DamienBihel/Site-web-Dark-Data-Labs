"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <Link href="/" className="flex items-center gap-2">
        <span className="font-montserrat font-bold text-[#1f2a44]">DARK</span>
        <span className="font-montserrat text-[#4a4a4a]">DATA LABS</span>
      </Link>
    </div>
  )
}