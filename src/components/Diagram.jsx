import { cn } from "../lib/cn";

export default function Diagram({title, children, className}) {
  return(
    <div className={cn("py-4 px-8 rounded-xl w-fit h-auto mx-auto bg-yellow-400 mt-10 mb-10", className)}>
      {title && <p className="pt-2 text-center text-yellow-700 font-bold">{title}</p>}
      {children}
    </div>
  )
}
