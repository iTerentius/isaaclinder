import { Routes, Route, Link } from 'react-router'
import Home from './pages/Home'
// import About from './pages/About'
// import Work from './pages/Work'
// import Contact from './pages/Contact'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link> */}
        {/* <Link to="/work">Work</Link> */}
        {/* <Link to="/contact">Contact</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/work" element={<Work />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  )
}

export default App
