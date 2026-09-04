import { cn } from "../lib/cn";

export default function MarkedItem({ marker = '*', className, children }) {
  return (
    <div className="flex gap-2">
      <span className={cn("text-brand text-2xl leading-none shrink-0 relative top-2", className)}>{marker}</span>
      <span>{children}</span>
    </div>
  )
}

