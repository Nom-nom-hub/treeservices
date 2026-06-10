'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Sparkles, Leaf, Zap, Crown, ArrowRight, Palette, ChevronDown } from 'lucide-react';

const themeCardClasses: Record<string, { border: string; borderHover: string; glow: string; previewBg: string; previewAccent: string; watermark: string }> = {
  dark: {
    border: 'border-green-600/30',
    borderHover: 'hover:border-green-600/70',
    glow: 'hover:shadow-green-600/30',
    previewBg: 'bg-gradient-to-br from-green-900 to-black',
    previewAccent: 'bg-green-600',
    watermark: 'text-green-800/30',
  },
  light: {
    border: 'border-amber-500/30',
    borderHover: 'hover:border-amber-500/70',
    glow: 'hover:shadow-amber-600/20',
    previewBg: 'bg-gradient-to-br from-amber-100 to-green-50',
    previewAccent: 'bg-amber-600',
    watermark: 'text-amber-300/30',
  },
  minimal: {
    border: 'border-blue-500/30',
    borderHover: 'hover:border-blue-500/70',
    glow: 'hover:shadow-blue-500/20',
    previewBg: 'bg-gradient-to-br from-blue-50 to-white',
    previewAccent: 'bg-blue-600',
    watermark: 'text-blue-300/20',
  },
  bold: {
    border: 'border-amber-500/30',
    borderHover: 'hover:border-amber-500/70',
    glow: 'hover:shadow-amber-500/20',
    previewBg: 'bg-gradient-to-br from-blue-950 to-slate-900',
    previewAccent: 'bg-amber-500',
    watermark: 'text-amber-600/20',
  },
};

const themes = [
  {
    id: 'dark' as const,
    name: 'Dark & Green',
    tagline: 'Bold. Modern. Trustworthy.',
    description: 'A sleek dark background with vibrant green accents. Glassmorphism navigation, smooth animations, and a professional edge that commands confidence.',
    icon: Zap,
    accent: 'bg-green-600',
    accentText: 'text-green-400',
    mockBar: 'bg-gray-700',
    mockLine1: 'bg-gray-700',
    mockLine2: 'bg-gray-700',
    mockLine3: 'bg-gray-700',
  },
  {
    id: 'light' as const,
    name: 'Light & Natural',
    tagline: 'Warm. Organic. Inviting.',
    description: 'A bright, airy design with warm earth tones. Cream backgrounds, wood-inspired accents, and a welcoming feel that builds trust through transparency.',
    icon: Leaf,
    accent: 'bg-amber-600',
    accentText: 'text-amber-700',
    mockBar: 'bg-amber-200',
    mockLine1: 'bg-amber-100',
    mockLine2: 'bg-amber-100',
    mockLine3: 'bg-amber-100',
  },
  {
    id: 'minimal' as const,
    name: 'Modern Minimal',
    tagline: 'Clean. Crisp. Precise.',
    description: 'A white-on-white masterpiece with bold typography and a single electric blue accent. Maximum whitespace, minimal noise — let the message speak.',
    icon: Sparkles,
    accent: 'bg-blue-600',
    accentText: 'text-blue-600',
    mockBar: 'bg-gray-200',
    mockLine1: 'bg-gray-100',
    mockLine2: 'bg-gray-100',
    mockLine3: 'bg-gray-100',
  },
  {
    id: 'bold' as const,
    name: 'Bold Professional',
    tagline: 'Premium. Authoritative. Elite.',
    description: 'A commanding navy and gold palette that radiates authority. Premium typography, gold accents, and a presence that says "we\'re the best."',
    icon: Crown,
    accent: 'bg-amber-500',
    accentText: 'text-amber-400',
    mockBar: 'bg-slate-700',
    mockLine1: 'bg-slate-600',
    mockLine2: 'bg-slate-600',
    mockLine3: 'bg-slate-600',
  },
];

export default function ShowcaseLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white">
      {/* Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
              <Palette className="w-5 h-5 text-black" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white leading-tight">Tree Care of SWFL</h1>
              <p className="text-xs text-gray-400">Design Showcase</p>
            </div>
          </div>
          <a
            href="tel:2399440073"
            className="bg-green-600 hover:bg-green-500 text-black px-5 py-2.5 rounded-lg font-semibold transition-all active:scale-95 text-sm"
          >
            (239) 944-0073
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-400/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative">
          <div className="inline-flex items-center gap-2 bg-green-900/40 text-green-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-green-600/30">
            <Palette className="w-4 h-4" />
            Interactive Design Showcase
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              Perfect Design
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-2 leading-relaxed">
            Four professionally crafted themes for Tree Care of SWFL. Each is a fully functional website with the same content — pick the one that fits your brand.
          </p>
          <p className="text-sm text-gray-500 mb-12">
            Click any preview to explore the live theme. All contact info, services, and portfolio are baked in.
          </p>
          <a
            href="#themes"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3 rounded-full font-semibold transition-all"
          >
            View All Themes
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Theme Grid */}
      <section id="themes" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {themes.map((theme) => {
            const IconComponent = theme.icon;
            const cls = themeCardClasses[theme.id];
            return (
              <Link
                key={theme.id}
                href={`/themes/${theme.id}`}
                className={`group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border ${cls.border} ${cls.borderHover} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${cls.glow} cursor-pointer`}
              >
                {/* Preview thumbnail */}
                <div className={`h-48 ${cls.previewBg} relative overflow-hidden flex items-center justify-center`}>
                  {/* Mock browser chrome */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 flex items-center px-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  {/* Mock content */}
                  <div className="mt-8 flex flex-col items-center gap-3">
                    <div className={`w-16 h-4 rounded ${theme.mockBar} opacity-60`} />
                    <div className={`w-32 h-3 rounded ${theme.mockLine1} opacity-40`} />
                    <div className={`w-24 h-3 rounded ${theme.mockLine2} opacity-30`} />
                    <div className={`w-20 h-8 rounded-lg mt-4 ${cls.previewAccent} opacity-80`} />
                  </div>
                  {/* Watermark */}
                  <IconComponent className={`absolute bottom-4 right-4 w-16 h-16 ${cls.watermark}`} />
                </div>

                {/* Card content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 ${theme.accent} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-white/90 transition-colors">{theme.name}</h3>
                      <p className={`text-sm ${theme.accentText} font-medium`}>{theme.tagline}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{theme.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white/50 group-hover:text-white transition-colors">
                    Explore Live Preview
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center p-12 rounded-3xl bg-gradient-to-br from-green-900/40 to-black border border-green-600/30">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Pick a Design?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Each theme works on desktop and mobile. Same services, same contact info — just pick the look you love and we&apos;ll take it from there.
          </p>
          <a
            href="tel:2399440073"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-black font-bold py-4 px-10 rounded-xl text-lg transition-all active:scale-95 hover:shadow-xl hover:shadow-green-600/30"
          >
            Call (239) 944-0073
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5 text-center">
        <p className="text-sm text-gray-500">
          &copy; 2026 Tree Care of SWFL LLC. All rights reserved. Licensed &amp; Insured.
        </p>
      </footer>
    </div>
  );
}
