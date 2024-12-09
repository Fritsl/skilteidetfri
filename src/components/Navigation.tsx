import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { FaTree } from 'react-icons/fa';

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <FaTree className="w-12 h-12 text-nature-500" />
            <span className="text-6xl font-logo font-black text-nature-500 hover:text-nature-600 transition-colors tracking-tight">
              Skilte I Det Fri
            </span>
          </Link>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                location.pathname === '/'
                  ? 'text-nature-500'
                  : 'text-gray-600 hover:text-nature-500'
              } transition-colors`}
            >
              Hjem
            </Link>
            <Link
              to="/sadan-fungerer-det"
              className={`${
                location.pathname === '/sadan-fungerer-det'
                  ? 'text-nature-500'
                  : 'text-gray-600 hover:text-nature-500'
              } transition-colors`}
            >
              Sådan fungerer det
            </Link>
            <Link
              to="/cases"
              className={`${
                location.pathname === '/cases'
                  ? 'text-nature-500'
                  : 'text-gray-600 hover:text-nature-500'
              } transition-colors`}
            >
              Vores Cases
            </Link>
            <Link
              to="/kontakt"
              className="bg-nature-500 text-white px-4 py-2 rounded-lg hover:bg-nature-600 transition-colors"
            >
              Kontakt os
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`${
                  location.pathname === '/'
                    ? 'text-nature-500'
                    : 'text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hjem
              </Link>
              <Link
                to="/sadan-fungerer-det"
                className={`${
                  location.pathname === '/sadan-fungerer-det'
                    ? 'text-nature-500'
                    : 'text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sådan fungerer det
              </Link>
              <Link
                to="/cases"
                className={`${
                  location.pathname === '/cases'
                    ? 'text-nature-500'
                    : 'text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Vores Cases
              </Link>
              <Link
                to="/kontakt"
                className="bg-nature-500 text-white px-4 py-2 rounded-lg hover:bg-nature-600 transition-colors w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt os
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}