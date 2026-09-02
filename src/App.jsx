import { useLocation, Routes, Route  } from 'react-router'
import NavItem from './components/NavItem'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Footer from './components/Footer';
// import Work from './pages/Work'
// import Contact from './pages/Contact'

function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 md:pl-50 sticky">
        <nav className="font-semibold p-3">
          <NavItem to="/">{"{"} Isaac Linder {"}"}</NavItem>
          <NavItem to="/about">+ About</NavItem>
          <NavItem to="/work">+ Work</NavItem>
          {/* <Link to="/contact">Contact</Link> */}
        </nav>
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
