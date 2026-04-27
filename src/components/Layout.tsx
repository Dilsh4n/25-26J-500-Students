import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#F5F3FF] text-slate-800 font-sans selection:bg-purple-200 selection:text-purple-900">
      <Navbar />
      <main className="pt-28 min-h-[calc(100vh-4rem)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="max-w-7xl mx-auto px-6 py-12"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="max-w-7xl mx-auto px-6 pb-8">
        <div className="glass rounded-[2rem] p-8 md:p-12 shadow-sm border-white/30 text-center">
          <p className="text-slate-900 font-bold text-sm">
            © 2026 Memora Research Group
          </p>
          <p className="text-slate-500 text-xs mt-2 font-medium">
            Centralized Behavior-Aware AI Context Management Framework &bull; Academic Repository
          </p>
        </div>
      </footer>
    </div>
  );
}
