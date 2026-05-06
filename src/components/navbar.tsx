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
  const currentPath =
    location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '')

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Matching your bold blue style */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-[#0A2540] text-xl font-black tracking-tight uppercase">
              DRIVING AFRICA
            </span>
          </Link>

          {/* Desktop Links - Matching the screenshot underline style */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive =
                currentPath ===
                (link.to === '/' ? '/' : link.to.replace(/\/$/, ''))
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative py-2 text-xs font-bold tracking-wider transition-colors hover:text-[#0A2540] ${
                    isActive ? 'text-[#0A2540]' : 'text-slate-500'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0A2540]" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Action Button - Matching the dark navy rounded box */}
          <div className="hidden md:block">
            <Link to="/products">
              <button className="bg-[#0A2540] text-white px-6 py-2.5 rounded text-[10px] font-bold tracking-widest uppercase hover:bg-slate-800 transition-all">
                GET STARTED
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0A2540] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - Matches the clean, white aesthetic */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[400px] border-t border-gray-100' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-4 py-6">
            {NAV_LINKS.map((link) => {
              const isActive =
                currentPath ===
                (link.to === '/' ? '/' : link.to.replace(/\/$/, ''))
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[11px] font-bold tracking-widest px-2 ${
                    isActive
                      ? 'text-[#0A2540] border-l-4 border-[#0A2540]'
                      : 'text-slate-500'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-2">
              <Link to="/products">
                <button className="w-full bg-[#0A2540] text-white py-3 rounded text-[10px] font-bold tracking-widest uppercase">
                  GET STARTED
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
