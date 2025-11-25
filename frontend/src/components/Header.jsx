import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '@/assets/logo2.png'

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Témoignages clients', to: '/temoignages' },
  { label: 'Contact', to: '/contact' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-screen border-b transition-all duration-300 ${
        scrolled
          ? 'border-gray-300 bg-white/80 backdrop-blur-md shadow-sm py-3 opacity-90'
          : 'border-gray-400 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 py-5 opacity-100'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <div className="relative overflow-hidden rounded-full transition-all duration-300 group-hover:ring-2 group-hover:ring-[#045389]/50">
            <img
              src={logo}
              alt="Logo MC Work"
              className="h-9 w-9 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <span className="text-lg font-semibold tracking-wide text-gray-900 transition-colors duration-300 group-hover:text-[#045389]">
            MC Work
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.to
              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-[#045389]'
                        : 'text-gray-700 hover:text-[#045389]'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#045389] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Burger */}
        <button
          aria-label="Ouvrir le menu"
          className="group md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 transition-all duration-300 hover:border-[#045389] hover:bg-[#045389]/10 hover:text-[#045389] active:scale-95"
          onClick={() => setIsOpen((v) => !v)}
        >
          <div className="relative w-6">
            <span
              className={`absolute top-0 left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                isOpen ? 'top-2 rotate-45' : 'top-0 rotate-0'
              }`}
            />
            <span
              className={`absolute top-2 left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute top-4 left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                isOpen ? 'top-2 -rotate-45' : 'top-4 rotate-0'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden w-full overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 pb-4 sm:px-6 lg:px-8">
          <ul className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <li
                key={item.to}
                style={{
                  animation: isOpen
                    ? `slideInDown 0.3s ease-out ${index * 0.1}s both`
                    : 'none',
                }}
              >
                <NavLink
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-[#045389]/10 text-[#045389] shadow-sm'
                        : 'text-gray-700 hover:bg-[#045389]/10 hover:text-[#045389] active:scale-95'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </header>
  )
}

export default Header
