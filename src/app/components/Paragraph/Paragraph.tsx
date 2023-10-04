import { useTailwindMerge } from '@/hooks/useTailwindMerge'
import React from 'react'

type ParagraphLevel = 'p1' | 'p2' | 'p3'

interface ParagraphComponentProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  variant?: ParagraphLevel
}

const baseStyles = {
  p1: 'text-[16px] leading-[20px] lg:text-[24px] lg:leading-[32px] xxl:text-[24px] xxl:leading-[32px]',
  p2: 'text-[14px] leading-[20px] lg:text-[20px] lg:leading-[24px] xxl:text-[20px] xxl:leading-[24px]',
  p3: 'text-[12px] leading-[16px] lg:text-[16px] lg:leading-[20px] xxl:text-[16px] xxl:leading-[20px]',
}

function ParagraphComponent({
  variant = 'p1',
  ...props
}: ParagraphComponentProps) {
  const className = useTailwindMerge({
    baseStyles: baseStyles[variant],
    className: props.className,
  })

  return (
    <p {...props} className={className}>
      {props.children}
    </p>
  )
}

export const Paragraph = ParagraphComponent
