import { useState } from 'react'
export default function CaseStudy({ title, hook, children }) {
  const [open, setOpen] = useState(false)
  const [renderKey, setRenderKey] = useState(0)

  const handleClick = (e) => {
    if (e.target.closest('a')) return // let links navigate normally
    e.preventDefault() // stop the browser from toggling on its own
    setOpen((prev) => {
      const next = !prev
      if (next) setRenderKey((k) => k + 1)
      return next
    })
  }
  return (
    <details 
      className="group  p-4 open:pb-6" 
      onClick={handleClick}
      open={open}
      >
      <summary className="cursor-pointer list-none font-display text-lg font-semibold">
        <div className="flex items-start gap-2">
          <span className="text-brand text-lg leading-none shrink-0 transition-transform group-open:rotate-90 relative top-2">
            ▶
          </span>
          <div>
            <span className="font-light text-2xl group-open:font-bold">{title}</span>
            {hook && (
              <p className="text-sm text-gray-600 mt-1">{hook}</p>
            )}
            <p className="text-mono font-extralight text-sm text-brand mt-1">{open ? 'collapse' : 'see details'}</p>
          </div>
        </div>
      </summary>
      {open && (
        <>
          <div key={renderKey} className="mt-4 ml-5 space-y-5 prose group-open:animate-fade-in group-close:animate-fade-out">{children}</div>
          <p className="cursor-pointer text-mono font-extralight text-sm text-brand text-center mt-1 ml-7">collapse</p>
        </>
      )}
    </details>
  )
}
