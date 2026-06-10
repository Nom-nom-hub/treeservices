'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Sparkles, Leaf, Zap, Crown, ArrowRight, Palette, ChevronDown,
  Phone, Check, Monitor, Smartphone, Eye, Code, Star, MessageCircle,
  ExternalLink, MousePointerClick, Layers, Clock, Shield, Heart, Trophy, TrendingUp, Users
} from 'lucide-react';

const DEV_PHONE = '2397713675';
const DEV_PHONE_DISPLAY = '(239) 771-3675';
const BIZ_NAME = 'Tree Care of SWFL';

const themeCardClasses: Record<string, {
  border: string; borderHover: string; glow: string;
  previewBg: string; previewAccent: string; watermark: string;
  badge: string; badgeText: string; shimmer: string;
}> = {
  dark: {
    border: 'border-green-600/30', borderHover: 'hover:border-green-600', glow: 'hover:shadow-green-600/40',
    previewBg: 'bg-gradient-to-br from-green-950 via-green-900 to-black', previewAccent: 'bg-green-600',
    watermark: 'text-green-800/20', badge: 'bg-green-600/20 border-green-600/40', badgeText: 'text-green-400',
    shimmer: 'from-green-500/0 via-green-400/20 to-green-500/0',
  },
  light: {
    border: 'border-amber-500/30', borderHover: 'hover:border-amber-500', glow: 'hover:shadow-amber-600/30',
    previewBg: 'bg-gradient-to-br from-amber-100 via-stone-50 to-green-50', previewAccent: 'bg-amber-600',
    watermark: 'text-amber-300/20', badge: 'bg-amber-100 border-amber-300', badgeText: 'text-amber-700',
    shimmer: 'from-amber-500/0 via-amber-400/20 to-amber-500/0',
  },
  minimal: {
    border: 'border-blue-500/30', borderHover: 'hover:border-blue-500', glow: 'hover:shadow-blue-500/30',
    previewBg: 'bg-gradient-to-br from-blue-50 via-white to-gray-50', previewAccent: 'bg-blue-600',
    watermark: 'text-blue-300/10', badge: 'bg-blue-50 border-blue-200', badgeText: 'text-blue-600',
    shimmer: 'from-blue-500/0 via-blue-400/20 to-blue-500/0',
  },
  bold: {
    border: 'border-amber-500/30', borderHover: 'hover:border-amber-500', glow: 'hover:shadow-amber-500/30',
    previewBg: 'bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950', previewAccent: 'bg-amber-500',
    watermark: 'text-amber-600/10', badge: 'bg-amber-500/10 border-amber-500/30', badgeText: 'text-amber-400',
    shimmer: 'from-amber-500/0 via-amber-400/20 to-amber-500/0',
  },
};

const themes = [
  { id: 'dark' as const, name: 'Dark & Green', tagline: 'Bold. Modern. Trustworthy.', description: 'A sleek dark background with vibrant green accents. Glassmorphism navigation, smooth animations, and a professional edge that commands confidence.', icon: Zap, features: ['Glassmorphism nav', 'Green accent glows', 'Smooth reveals', 'Dark gradient depth'] },
  { id: 'light' as const, name: 'Light & Natural', tagline: 'Warm. Organic. Inviting.', description: 'A bright, airy design with warm earth tones. Cream backgrounds, wood-inspired accents, and a welcoming feel that builds trust through transparency.', icon: Leaf, features: ['Warm earth palette', 'Subtle grid texture', 'Organic rounded shapes', 'Bright & airy feel'] },
  { id: 'minimal' as const, name: 'Modern Minimal', tagline: 'Clean. Crisp. Precise.', description: 'A white-on-white masterpiece with bold typography and a single electric blue accent. Maximum whitespace, minimal noise.', icon: Sparkles, features: ['Bold typography', 'Single accent color', 'Maximum whitespace', 'Clean sharp lines'] },
  { id: 'bold' as const, name: 'Bold Professional', tagline: 'Premium. Authoritative. Elite.', description: 'A commanding navy and gold palette that radiates authority. Premium typography, gold accents, and a presence that says "we\'re the best."', icon: Crown, features: ['Navy & gold palette', 'Premium typography', 'Authoritative feel', 'Luxury accents'] },
];

const trustSignals = ['33+ Years Experience', '62 Five-Star Reviews', 'Licensed & Insured', 'Family Owned', '24/7 Emergency Service', 'Serving SWFL Since 1991'];

function AnimatedCounter({ target, duration = 2000 }: { target: string; duration?: number }) {
  const [count, setCount] = useState('0');
  const startedRef = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !startedRef.current) {
        startedRef.current = true;
        const numTarget = parseInt(target.replace(/\D/g, '')) || 0;
        const start = performance.now();
        const animate = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * numTarget);
          setCount(target.includes('%') ? `${current}%` : target.includes('min') ? `${current} min` : `${current}+`);
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <span ref={ref}>{count}</span>;
}

export default function ShowcaseLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [showDevContact, setShowDevContact] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      setShowDevContact(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse spotlight
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({ x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ============ NAVIGATION ============ */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                <Palette className="w-6 h-6 text-black" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base font-bold text-white leading-tight tracking-tight">VIP Design Suite</h1>
              <p className="text-xs text-gray-500">{BIZ_NAME}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-xs text-gray-500 uppercase tracking-widest">Step {activeStep} of 3</span>
            <a href={`tel:${DEV_PHONE}`}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-black px-5 py-2.5 rounded-xl font-semibold transition-all active:scale-95 text-sm shadow-lg shadow-green-500/20 flex items-center gap-2">
              <Phone className="w-4 h-4" /> {DEV_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <section ref={heroRef} onMouseMove={handleMouseMove} id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
        {/* Mouse-follow spotlight */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{ background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(34,197,94,0.06) 0%, transparent 60%)` }} />

        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-green-500/8 rounded-full blur-[180px] animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-400/6 rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite_2s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-600/3 rounded-full blur-[200px] animate-[pulse_12s_ease-in-out_infinite_4s]" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="reveal inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-green-400 px-5 py-2.5 rounded-full text-sm font-medium mb-8">
            <Heart className="w-4 h-4" />
            Handcrafted Exclusively for {BIZ_NAME}
          </div>

          {/* Main heading */}
          <h1 className="reveal text-5xl sm:text-6xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight" style={{ transitionDelay: '0.1s' }}>
            A Website as{' '}
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_100%]">
              Strong
            </span>
            <br />as Your Reputation
          </h1>

          <p className="reveal text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed font-light" style={{ transitionDelay: '0.2s' }}>
            You&apos;ve built something incredible with {BIZ_NAME}.{' '}
            <span className="text-white font-medium">Your online presence should match.</span>
            {' '}Four premium designs — pick the one that feels like you.
          </p>
          <p className="reveal text-sm text-gray-600 mb-12" style={{ transitionDelay: '0.3s' }}>
            Built for speed. Optimized for mobile. Deployable in 10 minutes flat.
          </p>

          {/* Steps */}
          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-12" style={{ transitionDelay: '0.4s' }}>
            {[
              { num: 1, label: 'Browse Themes', icon: Eye },
              { num: 2, label: 'Pick Your Favorite', icon: MousePointerClick },
              { num: 3, label: 'Contact Developer', icon: Phone },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all duration-300 ${activeStep >= step.num ? 'bg-white/10 border-green-500/50 shadow-lg shadow-green-500/10' : 'bg-white/5 border-white/10'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${activeStep >= step.num ? 'bg-green-500 text-black' : 'bg-white/10 text-gray-400'}`}>
                    {step.num}
                  </div>
                  <span className={`text-sm font-semibold hidden sm:inline ${activeStep >= step.num ? 'text-white' : 'text-gray-500'}`}>{step.label}</span>
                </div>
                {i < 2 && <ChevronDown className="hidden sm:block w-4 h-4 text-gray-700 rotate-[-90deg]" />}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4" style={{ transitionDelay: '0.5s' }}>
            <a href="#themes"
              className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-black font-bold py-4 px-10 rounded-2xl text-lg transition-all active:scale-95 shadow-2xl shadow-green-500/30 hover:shadow-green-400/50 flex items-center gap-3"
              onClick={() => { setActiveStep(2); setTimeout(() => setActiveStep(3), 1500); }}>
              See Your Options
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={`tel:${DEV_PHONE}`}
              className="border-2 border-white/20 hover:border-green-500/50 text-gray-300 hover:text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all active:scale-95 flex items-center gap-3">
              <Phone className="w-5 h-5" />
              Talk to Developer
            </a>
          </div>

          {/* Animated Stats */}
          <div className="reveal mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto" style={{ transitionDelay: '0.6s' }}>
            {[{ target: '4', label: 'Unique Themes', icon: Palette }, { target: '100%', label: 'Mobile Ready', icon: Smartphone }, { target: '10 min', label: 'Turnaround', icon: Zap }].map((s, i) => (
              <div key={i} className="text-center group">
                <s.icon className="w-5 h-5 text-green-500 mx-auto mb-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="text-3xl font-black text-white">
                  <AnimatedCounter target={s.target} />
                </p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </div>
      </section>

      {/* ============ TRUST MARQUEE ============ */}
      <div className="border-y border-green-600/20 bg-green-950/10 py-4 overflow-hidden">
        <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          {[...trustSignals, ...trustSignals].map((signal, i) => (
            <span key={i} className="inline-flex items-center gap-2 mx-8 text-sm text-green-400/70 font-medium">
              <Trophy className="w-4 h-4 text-green-500/50" /> {signal}
            </span>
          ))}
        </div>
      </div>

      {/* ============ THEME SHOWCASE ============ */}
      <section id="themes" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-green-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">Curated for You</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Four Designs. One Perfect Fit.</h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Each theme is complete and production-ready — same content, services, and contact info. The only difference is the <span className="text-white">feel</span>.
            </p>
          </div>

          <div className="space-y-8">
            {themes.map((theme, idx) => {
              const IconComponent = theme.icon;
              const cls = themeCardClasses[theme.id];
              return (
                <div key={theme.id} className="reveal group relative rounded-3xl p-[1.5px] transition-all duration-500 hover:-translate-y-1" style={{ transitionDelay: `${idx * 0.1}s` }}>
                  {/* Shimmer border */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${cls.shimmer} opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[shimmer_2s_linear_infinite] bg-[length:200%_100%]`} />
                  <div className={`relative rounded-3xl overflow-hidden border ${cls.border} transition-all duration-500 hover:shadow-2xl ${cls.glow}`}>
                    <div className={`grid lg:grid-cols-5 ${theme.id === 'light' || theme.id === 'minimal' ? 'bg-white text-gray-900' : 'bg-gray-900'}`}>
                      {/* Preview panel */}
                      <div className={`lg:col-span-2 relative ${cls.previewBg} min-h-[280px] flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r ${theme.id === 'light' || theme.id === 'minimal' ? 'border-gray-200' : 'border-white/10'}`}>
                        <div className={`absolute top-0 left-0 right-0 h-10 ${theme.id === 'light' || theme.id === 'minimal' ? 'bg-gray-100' : 'bg-black/40'} flex items-center px-4 gap-2 backdrop-blur-sm`}>
                          <div className="w-3 h-3 rounded-full bg-red-500/60" /><div className="w-3 h-3 rounded-full bg-yellow-500/60" /><div className="w-3 h-3 rounded-full bg-green-500/60" />
                          <div className={`ml-3 w-32 h-2 rounded-full ${theme.id === 'light' || theme.id === 'minimal' ? 'bg-gray-300' : 'bg-white/10'} opacity-50`} />
                        </div>
                        <div className="mt-8 flex flex-col items-center gap-3 w-3/4">
                          <div className={`w-full h-6 rounded ${theme.id === 'dark' ? 'bg-white/10' : theme.id === 'bold' ? 'bg-white/10' : 'bg-gray-300'} opacity-60`} />
                          <div className={`w-3/4 h-3 rounded ${theme.id === 'dark' ? 'bg-white/5' : theme.id === 'bold' ? 'bg-white/5' : 'bg-gray-200'} opacity-50`} />
                          <div className={`w-1/2 h-3 rounded ${theme.id === 'dark' ? 'bg-white/5' : theme.id === 'bold' ? 'bg-white/5' : 'bg-gray-200'} opacity-40`} />
                          <div className={`w-24 h-9 rounded-xl mt-4 ${cls.previewAccent} opacity-90 shadow-lg`} />
                        </div>
                        <IconComponent className={`absolute bottom-4 right-4 w-20 h-20 ${cls.watermark}`} />
                        <div className={`absolute top-14 left-4 ${cls.badge} border px-3 py-1 rounded-full text-xs font-semibold ${cls.badgeText} backdrop-blur-sm`}>Live Preview</div>
                      </div>

                      {/* Info panel */}
                      <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-12 h-12 ${theme.id === 'light' || theme.id === 'minimal' ? 'bg-gray-100' : 'bg-white/10'} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className={`w-6 h-6 ${(theme.id === 'light' || theme.id === 'minimal') ? 'text-gray-700' : 'text-green-400'}`} />
                          </div>
                          <div>
                            <h3 className={`text-2xl font-black ${theme.id === 'light' || theme.id === 'minimal' ? 'text-gray-900' : 'text-white'} mb-1`}>{theme.name}</h3>
                            <p className="text-sm text-gray-500 font-medium">{theme.tagline}</p>
                          </div>
                        </div>
                        <p className={`text-sm leading-relaxed mb-6 ${theme.id === 'light' || theme.id === 'minimal' ? 'text-gray-500' : 'text-gray-400'}`}>{theme.description}</p>
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {theme.features.map((f, fi) => (
                            <div key={fi} className={`flex items-center gap-2 text-xs ${theme.id === 'light' || theme.id === 'minimal' ? 'text-gray-600' : 'text-gray-400'}`}>
                              <Check className={`w-3.5 h-3.5 ${theme.id === 'light' || theme.id === 'minimal' ? 'text-green-600' : 'text-green-500'} flex-shrink-0`} /> {f}
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link href={`/themes/${theme.id}`}
                            className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm transition-all active:scale-95 ${theme.id === 'light' || theme.id === 'minimal' ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                            <Eye className="w-4 h-4" /> View Full Preview <ExternalLink className="w-3 h-3 opacity-50" />
                          </Link>
                          <a href={`tel:${DEV_PHONE}`}
                            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm transition-all active:scale-95 bg-green-500 hover:bg-green-400 text-black shadow-lg shadow-green-500/20">
                            <Phone className="w-4 h-4" /> Choose This — Call Dev
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ WHY IT MATTERS ============ */}
      <section className="py-20 px-4 bg-white/5 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-green-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">The Impact</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Your Business Deserves This</h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">A professional website isn&apos;t just a page — it&apos;s your hardest-working employee. Here&apos;s what it delivers for {BIZ_NAME}.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'More Customers', desc: 'A fast, mobile-ready site ranks higher on Google and converts visitors into paying clients — 24/7, even while you sleep.' },
              { icon: Shield, title: 'Instant Credibility', desc: 'When potential clients search for tree services, a professional website makes you the obvious choice over competitors with no web presence.' },
              { icon: Users, title: 'Less Phone Time', desc: 'All your services, areas, and contact info are clearly displayed. Clients self-serve and reach out already sold.' },
            ].map((item, i) => (
              <div key={i} className="reveal bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPARISON ============ */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="text-green-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">At a Glance</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Side-by-Side Comparison</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Every theme includes the same powerful features. The difference is in the feel.</p>
          </div>
          <div className="reveal overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-5 text-gray-400 font-medium">Feature</th>
                  {themes.map(t => (<th key={t.id} className="p-5 text-center"><div className="flex flex-col items-center gap-1"><t.icon className="w-5 h-5 text-green-400" /><span className="text-white font-bold text-xs">{t.name}</span></div></th>))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { feature: 'Responsive Mobile', icon: Smartphone }, { feature: 'Lightbox Gallery', icon: Monitor }, { feature: 'Scroll Animations', icon: Layers }, { feature: 'SEO Optimized', icon: Code },
                  { feature: 'Call / Text CTAs', icon: MessageCircle }, { feature: '24/7 Banner', icon: Clock }, { feature: 'Floating Contact', icon: Phone }, { feature: 'Trust Badges', icon: Shield },
                ].map((row, ri) => (
                  <tr key={ri} className="hover:bg-white/5 transition-colors">
                    <td className="p-5"><div className="flex items-center gap-2"><row.icon className="w-4 h-4 text-gray-500" /><span className="text-gray-300">{row.feature}</span></div></td>
                    {[0, 1, 2, 3].map(vi => (<td key={vi} className="p-5 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>))}
                  </tr>
                ))}
                <tr className="border-t border-white/10">
                  <td className="p-5 font-semibold text-white">Choose</td>
                  {themes.map(t => (<td key={t.id} className="p-5 text-center"><Link href={`/themes/${t.id}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-green-400 hover:text-green-300 transition-colors">Preview <ArrowRight className="w-3 h-3" /></Link></td>))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ DEVELOPER CTA ============ */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 via-black to-black pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="reveal inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Star className="w-4 h-4" />
            Let&apos;s Make It Real
          </div>

          <h2 className="reveal text-4xl md:text-6xl font-black text-white mb-6" style={{ transitionDelay: '0.1s' }}>You Found the One?</h2>
          <p className="reveal text-xl text-gray-400 mb-4 max-w-xl mx-auto leading-relaxed" style={{ transitionDelay: '0.2s' }}>
            You&apos;ve built {BIZ_NAME} into something remarkable. Now give it the online home it deserves. Tell me which design you love and your domain — I&apos;ll have it live in <span className="text-green-400 font-semibold">under 10 minutes</span>.
          </p>
          <p className="reveal text-sm text-gray-600 mb-10" style={{ transitionDelay: '0.25s' }}>
            Your domain • Vercel hosting • SEO • Mobile-friendly • No downtime
          </p>

          <div className="reveal max-w-md mx-auto" style={{ transitionDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-green-950/30 rounded-3xl p-10 border border-green-600/30 shadow-2xl shadow-green-500/10">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/30">
                <Code className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Ready When You Are</h3>
              <p className="text-gray-400 text-sm mb-8">
                Call or text me right now. Tell me which theme caught your eye. I&apos;ll deploy it while we&apos;re still on the phone.
              </p>
              <a href={`tel:${DEV_PHONE}`}
                className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-black font-black py-5 px-8 rounded-2xl text-xl transition-all active:scale-95 shadow-2xl shadow-green-500/30 hover:shadow-green-400/50 mb-4">
                <span className="flex items-center justify-center gap-3"><Phone className="w-6 h-6" /> {DEV_PHONE_DISPLAY}</span>
              </a>
              <a href={`sms:${DEV_PHONE}?body=Hi!%20I%20picked%20a%20design%20theme%20for%20Tree%20Care%20of%20SWFL.`}
                className="block w-full border-2 border-white/10 hover:border-green-500/30 text-white font-semibold py-4 rounded-2xl transition-all active:scale-95 text-sm">
                <span className="flex items-center justify-center gap-2"><MessageCircle className="w-4 h-4" /> Send a Text Instead</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="py-10 px-4 border-t border-white/5 text-center">
        <p className="text-xs text-gray-600">
          VIP Design Suite for {BIZ_NAME} LLC. All theme content &copy; 2026 {BIZ_NAME} LLC.
        </p>
      </footer>

      {/* ============ FLOATING DEV CONTACT ============ */}
      <a href={`tel:${DEV_PHONE}`}
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-black font-bold py-4 px-8 rounded-2xl flex items-center gap-3 shadow-2xl shadow-green-500/40 transition-all duration-500 active:scale-95 ${showDevContact ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}
        aria-label={`Call developer at ${DEV_PHONE_DISPLAY}`}>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black" />
        </span>
        <Phone className="w-5 h-5" /> <span>Let&apos;s Go: {DEV_PHONE_DISPLAY}</span>
      </a>

      {/* ============ GLOBAL STYLES ============ */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
