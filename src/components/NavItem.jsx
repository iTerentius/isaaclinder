import { NavLink } from 'react-router'
import {cn } from '../lib/cn.js'

function NavItem({ to, children, className }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'px-4 first:pl-0 py-2 font-display',
          isActive ? 'text-brand font-bold' : 'text-gray-900',
          className
        )
      }
    >
      {children}
    </NavLink>
  )
}

export default NavItem
