import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoClicked, setIsLogoClicked] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'project', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certification', label: 'Certifications' },
  ];

  // Remove pulse effect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogoClick = () => {
    setIsLogoClicked(true);
    setTimeout(() => setIsLogoClicked(false), 300);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050414]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo Button with Functionality */}
          <div className="flex items-center">
            <Link 
              to="home" 
              spy={true} 
              smooth={true} 
              duration={500}
              onClick={handleLogoClick}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 ${
                isLogoClicked ? 'transform scale-90' : 'transform scale-100'
              }`}
            >
              {/* Pulse effect (only shows initially) */}
              {showPulse && (
                <span className="absolute inline-flex w-full h-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
              )}
              <span className="text-white font-bold text-lg relative z-10">SS</span>
              
              {/* Tooltip on hover */}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Back to Home
              </span>
            </Link>
          </div>
          
          {/* Centered Navigation - hidden on mobile */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  activeClass="active"
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === link.id
                      ? 'text-white bg-indigo-600/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button - on the right */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Empty div to balance the layout on desktop */}
          <div className="hidden md:block w-10"></div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#050414]/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                activeClass="active"
                to={link.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === link.id
                    ? 'text-white bg-indigo-600/30'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;