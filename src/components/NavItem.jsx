import { NavLink } from 'react-router'
import clsx from 'clsx'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'px-4 py-2 font-display',
          isActive ? 'text-brand font-bold' : 'text-gray-600'
        )
      }
    >
      {children}
    </NavLink>
  )
}

export default NavItem
