import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTimeoutRef = useRef(null);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    scrollToTop();
    setMobileMenuOpen(false);
  };

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="glass sticky top-0 z-50 w-full border-b border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
        <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105" onClick={scrollToTop}>
          <img src="/assets/images/RTLYNX_LOGO.png" className="header-logo" alt="RTLYNX" />
        </Link>
        <nav className="hidden md:flex gap-5 items-center text-sm font-medium">
          <Link to="/" className={`hover:text-green-500 transition-all duration-300 relative ${location.pathname === '/' ? 'text-green-500' : ''}`} onClick={scrollToTop}>
            Home
            {location.pathname === '/' && <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-green-500 rounded-full"></span>}
          </Link>
          <Link to="/about" className={`hover:text-green-500 transition-all duration-300 relative ${location.pathname === '/about' ? 'text-green-500' : ''}`} onClick={scrollToTop}>
            About
            {location.pathname === '/about' && <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-green-500 rounded-full"></span>}
          </Link>
          <div 
            className="relative group"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button className="hover:text-green-500 transition-all duration-300 flex items-center gap-1">
              Services 
              <svg className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`absolute left-0 mt-3 bg-white border border-gray-200 shadow-lg rounded-lg p-4 w-80 transition-all duration-300 ${
                servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="space-y-1">
                <Link className="block px-4 py-2.5 text-sm hover:bg-gray-50 rounded-md hover:text-green-500 transition-all duration-200" to="/services/chip" onClick={scrollToTop}>
                  Chip & Silicon Engineering
                  </Link>
                <Link className="block px-4 py-2.5 text-sm hover:bg-gray-50 rounded-md hover:text-green-500 transition-all duration-200" to="/services/ai" onClick={scrollToTop}>
                  Agentic AI Systems
                  </Link>
                <Link className="block px-4 py-2.5 text-sm hover:bg-gray-50 rounded-md hover:text-green-500 transition-all duration-200" to="/services/hardware" onClick={scrollToTop}>
                  Hardware Platform Engineering
                  </Link>
                <Link className="block px-4 py-2.5 text-sm hover:bg-gray-50 rounded-md hover:text-green-500 transition-all duration-200" to="/services/embedded" onClick={scrollToTop}>
                  Systems & Embedded
                  </Link>
                <Link className="block px-4 py-2.5 text-sm hover:bg-gray-50 rounded-md hover:text-green-500 transition-all duration-200" to="/services/connected" onClick={scrollToTop}>
                  Secured & Connected Ecosystems
                  </Link>
              </div>
            </div>
          </div>
          <Link to="/board" className={`hover:text-green-500 transition-all duration-300 relative ${location.pathname === '/board' ? 'text-green-500' : ''}`} onClick={scrollToTop}>
            Board
            {location.pathname === '/board' && <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-green-500 rounded-full"></span>}
          </Link>
          <Link to="/careers" className={`hover:text-green-500 transition-all duration-300 relative ${location.pathname === '/careers' ? 'text-green-500' : ''}`} onClick={scrollToTop}>
            Careers
            {location.pathname === '/careers' && <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-green-500 rounded-full"></span>}
          </Link>
          <Link to="/blogs" className={`hover:text-green-500 transition-all duration-300 relative ${location.pathname === '/blogs' ? 'text-green-500' : ''}`} onClick={scrollToTop}>
            Blogs
            {location.pathname === '/blogs' && <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-green-500 rounded-full"></span>}
          </Link>
          <Link to="/contact" className={`hover:text-green-500 transition-all duration-300 relative ${location.pathname === '/contact' ? 'text-green-500' : ''}`} onClick={scrollToTop}>
            Contact
            {location.pathname === '/contact' && <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-green-500 rounded-full"></span>}
          </Link>
          <a 
            href="https://www.linkedin.com/company/rtlynx" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#0077b5] to-[#005885] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            aria-label="Connect on LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            aria-label="menu" 
            className="p-1.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 animate-slideDown shadow-lg">
          <Link className="block px-6 py-2 border-b border-gray-100 hover:bg-gray-50 transition-all text-sm" to="/" onClick={handleLinkClick}>Home</Link>
          <Link className="block px-6 py-2 border-b border-gray-100 hover:bg-gray-50 transition-all text-sm" to="/about" onClick={handleLinkClick}>About</Link>
          <Link className="block px-6 py-2 border-b border-gray-100 hover:bg-gray-50 transition-all text-sm" to="/services" onClick={handleLinkClick}>Services</Link>
          <Link className="block px-6 py-2 border-b border-gray-100 hover:bg-gray-50 transition-all text-sm" to="/board" onClick={handleLinkClick}>Board</Link>
          <Link className="block px-6 py-2 border-b border-gray-100 hover:bg-gray-50 transition-all text-sm" to="/careers" onClick={handleLinkClick}>Careers</Link>
          <Link className="block px-6 py-2 border-b border-gray-100 hover:bg-gray-50 transition-all text-sm" to="/blogs" onClick={handleLinkClick}>Blogs</Link>
          <Link className="block px-6 py-2 border-b border-gray-100 hover:bg-gray-50 transition-all text-sm" to="/contact" onClick={handleLinkClick}>Contact</Link>
          <a href="https://www.linkedin.com/company/rtlynx" target="_blank" rel="noopener noreferrer" className="block px-6 py-2 bg-gradient-to-r from-[#0077b5] to-[#005885] text-white hover:from-[#005885] hover:to-[#004060] transition-all text-sm">Connect on LinkedIn</a>
        </div>
      )}
    </header>
  );
}

export default Header;

