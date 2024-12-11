"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface NavigationItemProps {
  item: {
    name: string
    href: string
    items?: {
      name: string
      href: string
      description?: string
    }[]
  }
}

export function NavigationItem({ item }: NavigationItemProps) {
  const pathname = usePathname()

  if (!item.items) {
    return (
      <Link
        href={item.href}
        className={cn(
          "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
          pathname === item.href
            ? "text-primary"
            : "text-muted-foreground"
        )}
      >
        {item.name}
      </Link>
    )
  }

  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors hover:text-primary bg-transparent",
            pathname.startsWith(item.href) ? "text-primary" : "text-muted-foreground"
          )}
        >
          {item.name}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="w-[400px] p-4">
            <ul className="grid gap-3">
              {item.items.map((subItem) => (
                <li key={subItem.href}>
                  <Link
                    href={subItem.href}
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      pathname === subItem.href && "bg-accent"
                    )}
                  >
                    <div className="text-sm font-medium leading-none">{subItem.name}</div>
                    {subItem.description && (
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                        {subItem.description}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  )
}