import { useLocation, Routes, Route, Link, NavLink } from 'react-router'
import NavItem from './components/NavItem'
import Home from './pages/Home'
import About from './pages/About'
// import Work from './pages/Work'
// import Contact from './pages/Contact'

function App() {
  const location = useLocation();
  return (
    <>
      <header className="ml-20 pt-4 pr-4 pb-4 sticky">
        <nav className="font-semibold p-3">
          <NavItem to="/">{"{"} Isaac Linder {"}"}</NavItem>
          <NavItem to="/about">+ About</NavItem>
          {/* <Link to="/work">Work</Link> */}
          {/* <Link to="/contact">Contact</Link> */}
        </nav>
      </header>
      <main key={location.pathname} className="animate-fade-in">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* ... */}
        </Routes>
      </main>
    </>
  )
}

export default App
