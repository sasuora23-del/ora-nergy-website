import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import oraLogo from '../assets/ora_nergy_logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Solutions', href: '/nos-solutions' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Aides Financières', href: '/aides-financieres' },
    { name: 'Partenaires', href: '/partenaires' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={oraLogo} 
              alt="Ora Nergy Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:0148434029" 
              className="flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              <Phone className="h-4 w-4 mr-2" />
              01 48 43 40 29
            </a>
            <Button 
              asChild
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Link to="/contact">Réduire mes factures</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a 
                  href="tel:0148434029" 
                  className="flex items-center px-3 py-2 text-green-600 font-medium"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  01 48 43 40 29
                </a>
                <Button 
                  asChild
                  className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white"
                >
                  <Link to="/contact">Réduire mes factures</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

