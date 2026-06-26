import { ArrowUp } from 'lucide-react';
import { socials } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="border-t border-line/70 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-muted">Copyright (c) {new Date().getFullYear()} Sweta Singh. All rights reserved.</p>
        <div className="h-px w-full flex-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent sm:max-w-xs" />
        <div className="flex items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} className="icon-btn" aria-label={label} target="_blank" rel="noreferrer">
              <Icon size={17} />
            </a>
          ))}
          <a href="#top" className="icon-btn" aria-label="Back to top">
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
