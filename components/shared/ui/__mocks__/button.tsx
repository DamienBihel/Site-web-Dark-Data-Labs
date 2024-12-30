import React from 'react'

export const Button = ({ children, className, ...props }: any) => (
  <button data-testid="ui-button" className={className} {...props}>
    {children}
  </button>
)
