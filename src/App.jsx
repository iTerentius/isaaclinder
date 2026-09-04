import { useLocation, Routes, Route} from 'react-router'
import NavItem from './components/NavItem'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Footer from './components/Footer';
import ContactMenu from './components/ContactMenu'
import { useState, useRef, useEffect } from 'react'
import { cn } from './lib/cn'

function App() {
  const location = useLocation();
  const [contactOpen, setContactOpen] = useState(false)
  const [contactMounted, setContactMounted] = useState(false)
  const closeTimeout = useRef(null)

  const toggleContactMenu = () => {
    if (contactOpen) {
      setContactOpen(false)
      closeTimeout.current = setTimeout(() => setContactMounted(false), 500)
    } else {
      clearTimeout(closeTimeout.current)
      setContactMounted(true)
      requestAnimationFrame(() => setContactOpen(true))
    }
  }

  useEffect(() => () => clearTimeout(closeTimeout.current), [])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 md:pl-40 sticky">
        <nav className="font-semibold md:p-3">
          <NavItem className="block md:inline" to="/">{"{"} Isaac Linder {"}"}</NavItem>
          <NavItem to="/about">+ About</NavItem>
          <NavItem to="/work">+ Work</NavItem>
          <button className={cn("text-gray-900 px-4 font-bold", contactOpen && "text-[#c29613]")}
            onClick={toggleContactMenu}
            onBlur={() => setContactOpen(false)}
          >+ Contact Info</button>
        </nav>
        {contactMounted && (
          <ContactMenu className={`absolute inset-x-0 top-full z-40 origin-top transform transition-all duration-500 ease-in-out
              ${contactOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4'
              }`}/>
        )}
      </header>

      <main key={location.pathname} className="flex-1 animate-fade-in">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
