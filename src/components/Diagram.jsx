import { cn } from "../lib/cn";

export default function Diagram({title, children, className}) {
  return(
    <div className={cn("p-4  bg-yellow-400 rounded-xl w-full md:w-3/4 h-auto m-auto mt-10 mb-10", className)}>
      {title && <p className="pt-2 text-center text-yellow-700 font-bold">{title}</p>}
      {children}
    </div>
  )
}
