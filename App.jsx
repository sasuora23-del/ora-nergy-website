import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Realisations from './pages/Realisations'
import AidesFinancieres from './pages/AidesFinancieres'
import Partenaires from './pages/Partenaires'
import APropos from './pages/APropos'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nos-solutions" element={<Solutions />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/aides-financieres" element={<AidesFinancieres />} />
            <Route path="/partenaires" element={<Partenaires />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
