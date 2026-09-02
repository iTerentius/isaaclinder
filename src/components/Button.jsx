import clsx from 'clsx'
import { Link } from 'react-router'

export default function Button({ to, variant = 'primary', children }) {
  return (
    <Link
      to={to}
      className={clsx(
        'inline-block px-6 py-3 rounded font-display transition-colors duration-150 cursor-pointer',
        variant === 'primary' && 'bg-brand text-white hover:bg-brand-light',
        variant === 'secondary' && 'border-2 border-brand text-brand hover:bg-brand hover:text-white'
      )}
    >
      {children}
    </Link>
  )
}
