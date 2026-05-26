import { Link } from '@tanstack/react-router'
import { Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'NAVIGATION',
      links: [
        { label: 'Our Products', to: '/products' },
        { label: 'Career Opportunities', to: '/careers' },
        { label: 'Press & Media', to: '/press' },
        { label: 'Contact Us', to: '/contact' },
      ],
    },
    {
      title: 'LEGAL & PRIVACY',
      links: [
        { label: 'Privacy Policy', to: '/privacy' },
        { label: 'Terms of Service', to: '/terms' },
        { label: 'Cookie Policy', to: '/cookie-policy' },
      ],
    },
  ]

  return (
    <footer className="bg-primary text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {/* Brand Section */}
          <div className="space-y-8">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-white uppercase">
                DRIVING AFRICA
              </span>
            </Link>
            <p className="text-slate-400 text-[14px] leading-relaxed max-w-[280px]">
              Digital excellence for the African landscape. We specialize in
              software engineering, product design, and market-entry strategy.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/drift247_ng?igsh=a2RjdmVydjQ2aW80"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Driving Africa on Instagram"
                className="text-white hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/driving-africa-digital-services-limited/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Driving Africa on LinkedIn"
                className="text-white hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-8">
              <h4 className="text-[12px] font-bold tracking-[0.15em] text-white uppercase">
                {section.title}
              </h4>
              <ul className="space-y-5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-slate-400 hover:text-white text-[14px] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {/* Copyright positioned below the last section on the right-most column */}
                {section.title === 'LEGAL & PRIVACY' && (
                  <li className="pt-12 md:pt-16">
                    <p className="text-slate-500 text-[11px] leading-relaxed max-w-[320px]">
                      © {currentYear} Driving Africa Digital Services Limited. Building
                      Digital Products for Africa. All rights reserved.
                    </p>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
