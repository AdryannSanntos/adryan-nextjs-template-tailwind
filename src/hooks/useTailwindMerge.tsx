import { twMerge } from 'tailwind-merge'

interface TailwindMergeProps {
  baseStyles?: string
  className?: string
}

export function useTailwindMerge({
  baseStyles,
  className,
}: TailwindMergeProps) {
  return twMerge(baseStyles, className)
}
