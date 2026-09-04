import Button from "./Button"
import { cn } from "../lib/cn"

export default function CTA({label, loc, className}){
  return(
    <div className={cn("mt-5 font-bold text-xl", className)}>
      <Button variant="secondary" to={loc}>{label}</Button>
    </div>
  )
}

