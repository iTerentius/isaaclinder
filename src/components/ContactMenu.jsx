import { cn } from "../lib/cn"

export default function ContactMenu({ className }){
  return(
    <div className={cn("bg-[#ebbe2c] p-4 text-brand", className)}>
      <div className="flex">
        <div className="m-auto flex flex-col ">
          <span className="text-red-800 font-extrabold">
            Open to Frontend Developer / Frontend Engineer roles.
          </span>
          <span className="font-mono font-light">
            <a href="mailto:isaac@terenti.us" target="_blank" className="underline">Email</a> +{' '}
            <a href="https://linkedin.com/in/isaactlinder" target="_blank" className="underline">LinkedIn</a> +{' '}
            <a href="https://github.com/iTerentius" target="_blank" className="underline">GitHub</a> +{' '}
            <a href="images/Isaac-Linder-Resume-2026.pdf" target="_blank" className="underline">Resume</a>
          </span>
        </div>
      </div>
    </div>
  )
}
