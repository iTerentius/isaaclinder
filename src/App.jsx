import { Routes, Route, Link, NavLink } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
// import Work from './pages/Work'
// import Contact from './pages/Contact'

function App() {
  return (
    <>
      <header className="ml-20 pt-4 pr-4 pb-4 sticky">
        <nav className="font-semibold p-3">
          <NavLink to="/">{"{"} Isaac Linder {"}"}</NavLink>
          <NavLink to="/about">+ About</NavLink>
          {/* <Link to="/work">Work</Link> */}
          {/* <Link to="/contact">Contact</Link> */}
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/work" element={<Work />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  )
}

export default App
