import './App.css'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Service from './pages/Service.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <>
      {/* Header prend 100% de la largeur */}
      <div className="w-screen fixed top-0 left-0 z-50">
        <Header />
      </div>

      {/* Le contenu garde ses marges */}
      <main className="mx-auto max-w-7xl px-4 pt-40 pb-24 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/temoignages" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
