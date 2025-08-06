import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="container">
        <div className="grid grid-cols-4 gap-8">
          <Link to="/" className="bg-gray-700/50 aspect-square p-8 group hover:bg-gray-700 transition-colors duration-200">
            <span className="text-2xl">Home</span>
            <svg 
              className="absolute bottom-8 right-8 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2"/>
            </svg>
          </Link>

          <Link to="/properties" className="bg-dark aspect-square p-8 group hover:bg-gray-900 transition-colors duration-200">
            <span className="text-2xl">Properties</span>
            <svg 
              className="absolute bottom-8 right-8 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2"/>
            </svg>
          </Link>

          <Link to="/investors" className="bg-dark aspect-square p-8 group hover:bg-gray-900 transition-colors duration-200">
            <span className="text-2xl">Investors</span>
            <svg 
              className="absolute bottom-8 right-8 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2"/>
            </svg>
          </Link>

          <Link to="/ad-hoc-disclosures" className="bg-dark aspect-square p-8 group hover:bg-gray-900 transition-colors duration-200">
            <span className="text-2xl">Ad Hoc Disclosures</span>
            <svg 
              className="absolute bottom-8 right-8 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2"/>
            </svg>
          </Link>

          <Link to="/announcements" className="bg-dark aspect-square p-8 group hover:bg-gray-900 transition-colors duration-200">
            <span className="text-2xl">Announcements</span>
            <svg 
              className="absolute bottom-8 right-8 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2"/>
            </svg>
          </Link>

          <Link to="/newsroom" className="bg-dark aspect-square p-8 group hover:bg-gray-900 transition-colors duration-200">
            <span className="text-2xl">Newsroom</span>
            <svg 
              className="absolute bottom-8 right-8 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2"/>
            </svg>
          </Link>

          <Link to="/company" className="bg-gray-700/50 aspect-square p-8 group hover:bg-gray-700 transition-colors duration-200">
            <span className="text-2xl">Company</span>
            <svg 
              className="absolute bottom-8 right-8 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2"/>
            </svg>
          </Link>

          <Link to="/contact" className="bg-dark aspect-square p-8 group hover:bg-gray-900 transition-colors duration-200">
            <span className="text-2xl">Contact</span>
            <svg 
              className="absolute bottom-8 right-8 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2"/>
            </svg>
          </Link>
        </div>

        <div className="mt-16 flex justify-between items-center text-sm text-white/60">
          <img src="/images/logo-white.svg" alt="Ultima Capital" className="h-4" />
          <div className="flex items-center space-x-8">
            <Link to="/gdpr" className="hover:text-white transition-colors duration-200">
              GDPR and cookie policy
            </Link>
            <a href="https://ewm.swiss" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
              Designed by EWM.SWISS
            </a>
            <div>© 2020 Ultima Capital SA. All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 