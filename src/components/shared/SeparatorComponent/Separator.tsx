import { SeparatorProps } from "./Separator.interface"

export const Separator = ({ className }: SeparatorProps) => {
  return (
    <div className={`my-5 h-px bg-slate-200 ${className}`} />
  )
}