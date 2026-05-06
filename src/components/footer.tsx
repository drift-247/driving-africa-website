import { Link } from '@tanstack/react-router'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'COMPANY',
      links: [
        { label: 'About Us', to: '/about' },
        { label: 'Careers', to: '/careers' },
        { label: 'Press & Media', to: '/press' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      title: 'PRODUCTS',
      links: [
        { label: 'Drift247', to: '/products' },
        { label: 'Solutions', to: '/products' },
        { label: 'Innovation', to: '/products' },
        { label: 'Technology', to: '/products' },
      ],
    },
    {
      title: 'LEGAL',
      links: [
        { label: 'Privacy Policy', to: '/privacy' },
        { label: 'Terms of Service', to: '/terms' },
        { label: 'Cookie Policy', to: '/cookie-policy' },
      ],
    },
  ]

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-black tracking-tighter text-white">
                DRIVING AFRICA
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Pioneering the future of transportation and logistics across the African continent with innovative digital solutions.
            </p>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-sm font-bold tracking-widest text-accent uppercase">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-widest text-accent uppercase">
              GET IN TOUCH
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Abibatu Amoke Bello Close Lekki, Lagos Nigeria</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>drivingafricadigital.ng@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs tracking-wider">
            © {currentYear} DRIVING AFRICA DIGITAL SERVICES LIMITED. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center space-x-8">
            <Link to="/privacy" className="text-slate-500 hover:text-white text-xs tracking-wider transition-colors">
              PRIVACY
            </Link>
            <Link to="/terms" className="text-slate-500 hover:text-white text-xs tracking-wider transition-colors">
              TERMS
            </Link>
            <Link to="/cookie-policy" className="text-slate-500 hover:text-white text-xs tracking-wider transition-colors">
              COOKIES
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
