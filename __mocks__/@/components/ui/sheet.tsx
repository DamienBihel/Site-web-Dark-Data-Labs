import React from 'react'

export const Sheet = ({ children }: any) => <div data-testid="sheet">{children}</div>

export const SheetTrigger = ({ children }: any) => (
  <button data-testid="sheet-trigger" aria-label="Toggle Menu">{children}</button>
)

export const SheetContent = ({ children }: any) => (
  <div data-testid="sheet-content">{children}</div>
)

export const SheetTitle = ({ children }: any) => (
  <h2 data-testid="sheet-title">{children}</h2>
)
