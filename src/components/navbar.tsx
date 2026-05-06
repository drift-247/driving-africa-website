import { Link, useLocation } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

interface NavLink {
  label: string
  to: string
}

const NAV_LINKS: NavLink[] = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT US', to: '/about' },
  { label: 'OUR PRODUCTS', to: '/products' },
  { label: 'CAREERS', to: '/careers' },
  { label: 'CONTACT', to: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Normalize paths for comparison (remove trailing slashes)
  const currentPath =
    location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '')

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg border-b border-slate-100/50">
      <nav className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between px-6 md:px-8 py-5">
          <Link to="/" className="flex items-center z-50">
            <span className="text-xl font-black tracking-tighter text-primary cursor-pointer hover:opacity-80 transition-opacity">
              DRIVING AFRICA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => {
              const normalizedLinkTo =
                link.to === '/' ? '/' : link.to.replace(/\/$/, '')
              const isActive = currentPath === normalizedLinkTo

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link to="/products">
              <button className="btn-primary px-8 py-2.5 shadow-lg shadow-primary/10">
                GET STARTED
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-primary hover:bg-slate-50 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`
          fixed inset-0 bg-white z-40 md:hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
        `}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
            {NAV_LINKS.map((link) => {
              const normalizedLinkTo =
                link.to === '/' ? '/' : link.to.replace(/\/$/, '')
              const isActive = currentPath === normalizedLinkTo

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-2xl font-black tracking-widest uppercase transition-colors ${isActive ? 'text-accent' : 'text-primary'}`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link to="/products" className="w-full max-w-xs">
              <button className="btn-primary w-full py-5 rounded-2xl shadow-2xl shadow-primary/20 text-sm">
                GET STARTED
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
