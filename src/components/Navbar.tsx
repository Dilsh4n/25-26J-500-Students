import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Domain', path: '/domain' },
  { name: 'Milestones', path: '/milestones' },
  { name: 'Documents', path: '/documents' },
  { name: 'Presentations', path: '/presentations' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 glass rounded-2xl px-6 py-3 shadow-sm border-white/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-12 items-center">
          <NavLink to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg purple-gradient flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-purple-900">Memora</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-purple-600 ${
                    isActive ? 'text-purple-600' : 'text-slate-600'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 pt-4 border-t border-purple-100 space-y-2 pb-2"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'bg-purple-100/50 text-purple-600' : 'text-slate-600 hover:bg-slate-50'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
