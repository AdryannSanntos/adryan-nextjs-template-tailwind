import { useTailwindMerge } from '@/hooks/useTailwindMerge'
import React, { ElementType } from 'react'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingComponentProps extends React.HTMLAttributes<HTMLElement> {
  as: Extract<ElementType, HeadingLevel>
}

const baseStyles = {
  h1: 'xxl:text-[128px] xxl:leading-[156px] lg:text-[96px] lg:leading-[116px] text-[56px] leading-[68px]',
  h2: 'xxl:text-[96px] xxl:leading-[120px] lg:text-[72px] lg:leading-[88px] text-[40px] leading-[48px]',
  h3: 'xxl:text-[64px] xxl:leading-[80px] lg:text-[48px] lg:leading-[60px] text-[32px] leading-[40px]',
  h4: 'xxl:text-[48px] xxl:leading-[60px] lg:text-[40px] lg:leading-[48px] text-[24px] leading-[32px]',
  h5: 'xxl:text-[40px] xxl:leading-[48px] lg:text-[32px] lg:leading-[40px] text-[22px] leading-[28px]',
  h6: 'xxl:text-[32px] xxl:leading-[40px] lg:text-[28px] lg:leading-[36px] text-[18px] leading-[24px]',
}

function HeadingComponent({ as: Tag, ...props }: HeadingComponentProps) {
  const className = useTailwindMerge({
    baseStyles: baseStyles[Tag],
    className: props.className,
  })

  return (
    <Tag {...props} className={className}>
      {props.children}
    </Tag>
  )
}

export const Heading = HeadingComponent
