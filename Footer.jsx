import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import oraLogo from '../assets/ora_nergy_logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 lg:col-span-2">
            <img 
              src={oraLogo} 
              alt="Ora Nergy Logo" 
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Votre partenaire expert en énergie. Nous vous accompagnons dans tous vos projets énergétiques : 
              du courtage en électricité et gaz aux travaux de rénovation énergétique.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/nos-solutions" className="text-gray-300 hover:text-white transition-colors">Nos Solutions</Link></li>
              <li><Link to="/realisations" className="text-gray-300 hover:text-white transition-colors">Réalisations</Link></li>
              <li><Link to="/aides-financieres" className="text-gray-300 hover:text-white transition-colors">Aides Financières</Link></li>
              <li><Link to="/partenaires" className="text-gray-300 hover:text-white transition-colors">Partenaires</Link></li>
              <li><Link to="/a-propos" className="text-gray-300 hover:text-white transition-colors">À Propos</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-green-500" />
                <a href="tel:0148434029" className="text-gray-300 hover:text-white transition-colors">
                  01 48 43 40 29
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-green-500" />
                <a href="mailto:contact@oranergy.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@oranergy.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-1 text-green-500" />
                <address className="text-gray-300 not-italic">
                  1 rue du Pré Saint Gervais<br />
                  93500 Pantin
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Ora Nergy. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

