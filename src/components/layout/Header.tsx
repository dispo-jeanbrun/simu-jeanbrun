'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/simulateur', label: 'Simulateur' },
  { href: '/dispositif-jeanbrun', label: 'Le dispositif' },
  { href: '/jeanbrun-vs-lmnp', label: 'Jeanbrun vs LMNP' },
  { href: '/conditions-jeanbrun', label: 'Conditions' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JB</span>
            </div>
            <span className="text-lg font-bold text-primary hidden sm:block">
              Simu-Jeanbrun
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-text-light hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <Link
            href="/simulateur"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary-light transition-colors shadow-sm"
          >
            Simuler gratuitement
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-text-light hover:text-primary cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-sm font-medium text-text-light hover:text-primary hover:bg-primary/5 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/simulateur"
              className="block mt-2 px-5 py-3 bg-secondary text-white text-sm font-semibold rounded-lg text-center hover:bg-secondary-light"
              onClick={() => setMobileOpen(false)}
            >
              Simuler gratuitement
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
