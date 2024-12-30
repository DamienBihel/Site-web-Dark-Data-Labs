"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center font-['Montserrat'] text-xl tracking-wider", className)}>
      <span className="font-extrabold text-[#00FF85] hover:text-[#F2F2F2] transition-colors duration-300">DARK</span>
      <span className="font-bold text-[#F2F2F2] hover:text-[#00FF85] transition-colors duration-300 ml-2">DATA LABS</span>
    </Link>
  )
}
