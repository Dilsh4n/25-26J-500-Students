import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

export default function Layout() {
  const { pathname } = useLocation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-[#F5F3FF] text-slate-800 font-sans selection:bg-purple-200 selection:text-purple-900">
      {/* Global mouse-following purple blur — visible on every page */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed w-[800px] h-[800px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none z-0"
      />

      <Navbar />
      <main className="pt-28 min-h-[calc(100vh-4rem)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="max-w-7xl mx-auto px-6 py-12 relative z-10"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="max-w-7xl mx-auto px-6 pb-8 relative z-10">
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
