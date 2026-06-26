import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Send, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme.js';
import { navItems } from '../data/portfolio.js';
import Button from './Button.jsx';

export default function Navbar() {
  const [active, setActive] = useState('about');
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const links = (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          className="relative px-1 py-2 text-sm font-medium text-muted transition hover:text-ink"
        >
          {item.label}
          {active === item.href.slice(1) && (
            <motion.span layoutId="nav-underline" className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-accent" />
          )}
        </a>
      ))}
    </>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-[rgb(var(--bg)/0.72)] backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#top" className="font-display text-lg font-bold tracking-normal text-ink">
          Sweta<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">{links}</div>
        <div className="hidden items-center gap-3 md:flex">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button href="#contact" icon={Send} className="!px-4 !py-2">
            Contact
          </Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-btn" onClick={() => setOpen((value) => !value)} aria-label="Open menu" aria-expanded={open}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-line/60 bg-[rgb(var(--bg)/0.94)] px-4 py-5 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">{links}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
