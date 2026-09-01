export default function MarkedItem({ marker = '*', children }) {
  return (
    <li className="flex gap-2">
      <span className="text-brand text-2xl leading-none shrink-0 relative top-2">{marker}</span>
      <span>{children}</span>
    </li>
  )
}

