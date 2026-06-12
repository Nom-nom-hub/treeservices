'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Phone, MapPin, ChevronRight, Axe, Scissors, Zap, AlertCircle, Trash2, Check, X, ArrowUp, MessageCircle, Trophy, Sun, Moon, TreeDeciduous } from 'lucide-react';
import Logo from '@/app/logo';
import { services as serviceData, serviceAreas, portfolioImages } from '@/app/data';
import AnimatedCounter from '@/app/animated-counter';

const serviceIcons: Record<number, React.ComponentType<{ className?: string }>> = { 0: Axe, 1: Scissors, 2: Zap, 3: AlertCircle, 4: Trash2 };
const trustSignals = ['33+ Years Experience', '62 Five-Star Reviews', 'Licensed & Insured', 'Family Owned', '24/7 Emergency Service', 'Serving SWFL Since 1991'];

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const shownRef = useRef(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 14}px, ${e.clientY - 14}px)`;
      }
      if (!shownRef.current) {
        shownRef.current = true;
        setVisible(true);
      }
    };

    const isInteractive = (el: HTMLElement | null) =>
      el && el.closest('a, button, [role="button"], input, select, textarea, label');

    const over = (e: MouseEvent) => {
      if (isInteractive(e.target as HTMLElement)) {
        setHovering(true);
      }
    };

    const out = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const related = e.relatedTarget as HTMLElement | null;
      if (isInteractive(target) && !isInteractive(related)) {
        setHovering(false);
      }
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);

    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      document.body.style.cursor = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none transition-[width,height] duration-200"
      style={{
        width: hovering ? 44 : 28,
        height: hovering ? 44 : 28,
      }}
    >
      {/* Glow ring */}
      <div
        className="absolute inset-0 rounded-full transition-all duration-200"
        style={{
          background: hovering
            ? 'radial-gradient(circle, rgba(34,197,94,0.35) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)',
          transform: hovering ? 'scale(1.4)' : 'scale(1)',
        }}
      />
      {/* Tree icon */}
      <TreeDeciduous
        className="absolute inset-0 w-full h-full p-0.5 text-accent transition-all duration-200"
        style={{ transform: hovering ? 'scale(1.15)' : 'scale(1)' }}
      />
    </div>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch (e) {}
  };

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={toggle}
      className="relative w-9 h-9 flex items-center justify-center rounded-xl text-text-muted hover:text-text-tertiary hover:bg-card-hover transition-all duration-300 active:scale-90"
      aria-label={dark ? 'Light mode' : 'Dark mode'}
    >
      <Sun className={`w-5 h-5 absolute transition-all duration-500 ${dark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
      <Moon className={`w-5 h-5 absolute transition-all duration-500 ${dark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
    </button>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showFloatingCall, setShowFloatingCall] = useState(false);

  useEffect(() => { const o = new IntersectionObserver((e) => { e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); }); }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }); document.querySelectorAll('.reveal').forEach(el => o.observe(el)); return () => o.disconnect(); }, []);
  useEffect(() => { const h = () => { setScrolled(window.scrollY > 80); setShowBackToTop(window.scrollY > 500); setShowFloatingCall(window.scrollY > 400); }; window.addEventListener('scroll', h, { passive: true }); return () => window.removeEventListener('scroll', h); }, []);
  useEffect(() => { document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [mobileMenuOpen]);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent-subtle via-card to-accent-subtle/30">
      <CustomCursor />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-accent focus:text-on-accent focus:px-4 focus:py-2 focus:rounded-lg">Skip to content</a>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-card/95 backdrop-blur-xl border-b border-border-accent-strong shadow-lg' : 'bg-card/70 backdrop-blur-sm border-b border-transparent shadow-none'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-center justify-between h-24">
          <div className="flex items-center gap-4">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); closeMobileMenu(); }} className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]">
              <Logo className="h-24 w-auto" />
            </a>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {['Services', 'Service Areas', 'Portfolio'].map(item => (<a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-').replace('service-areas', 'areas')}`} className="group relative text-text-muted hover:text-text-accent-hover font-medium text-sm transition-colors">{item}<span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-full" /></a>))}
            <ThemeToggle />
            <a href="tel:2399440073" className="bg-accent hover:bg-accent-bright text-on-accent px-6 py-2.5 rounded-full font-semibold transition-all duration-300 active:scale-95 hover:shadow-lg hover:shadow-accent/30 hover:scale-105 flex items-center gap-2"><Phone className="w-4 h-4" /> (239) 944-0073</a>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="relative w-8 h-8 flex items-center justify-center text-text-tertiary" aria-label="Toggle menu">
              <div className="w-6 h-5 flex flex-col justify-between"><span className={`block h-0.5 w-full bg-current rounded transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} /><span className={`block h-0.5 w-full bg-current rounded transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-0' : ''}`} /><span className={`block h-0.5 w-full bg-current rounded transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} /></div>
            </button>
          </div>
        </div></div>
        <div className={`md:hidden fixed inset-0 top-24 z-40 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className={`h-full w-full bg-card/90 backdrop-blur-xl flex flex-col items-center justify-center gap-6 -mt-24 transition-all duration-500 ${mobileMenuOpen ? 'translate-y-0' : 'translate-y-4'}`}>
            {[{ label: 'Services', href: '#services' },{ label: 'Service Areas', href: '#areas' },{ label: 'Portfolio', href: '#portfolio' },{ label: 'Contact', href: '#contact' }].map((l, i) => (<a key={l.href} href={l.href} onClick={closeMobileMenu} className={`text-2xl text-text-tertiary hover:text-text-accent font-semibold transition-all duration-500 py-2 ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: mobileMenuOpen ? `${i * 0.08}s` : '0s' }}>{l.label}</a>))}
            <a href="tel:2399440073" onClick={closeMobileMenu} className="mt-6 bg-accent hover:bg-accent-bright text-on-accent px-10 py-4 rounded-full font-bold text-lg active:scale-95 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-accent/30"><Phone className="w-5 h-5" /> (239) 944-0073</a>
          </div>
        </div>
      </nav>

      <div className="emergency-banner fixed top-24 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white py-3 px-4 text-center font-semibold z-40 md:relative md:top-0 md:mt-24 flex items-center justify-center gap-3 shadow-md">
        <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" /><span className="relative inline-flex rounded-full h-3 w-3 bg-white" /></span>
        <span>24/7 Emergency Tree Service Available</span>
        <a href="tel:2399440073" className="underline underline-offset-2 decoration-white/50 hover:decoration-white font-bold">Call (239) 944-0073</a>
      </div>

      <main id="main-content" aria-hidden={!!lightboxImage}>
        <section className="relative pt-28 md:pt-32 pb-20 px-4 bg-gradient-to-b from-accent-subtle via-card to-surface overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q2ZDNkMSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
          <div className="max-w-7xl mx-auto relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <div className="inline-block bg-accent-bg text-text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-border-accent-strong"><Check className="w-4 h-4 inline mr-1" /> 33+ Years of Excellence</div>
                <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">Your Trees Deserve <span className="text-text-accent">Expert Care</span></h1>
                <p className="text-xl text-text-muted mb-8 leading-relaxed">Family-owned and operated. Licensed, insured, and trusted by thousands of homeowners across Lee, Collier, and Charlotte counties.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:2399440073" className="bg-accent hover:bg-accent-bright text-on-accent font-bold py-4 px-8 rounded-xl text-center transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-accent/30"><AlertCircle className="w-5 h-5" /> Emergency Service Now</a>
                  <a href="#contact" className="border-2 border-border-strong text-text-tertiary hover:border-accent hover:text-text-accent-hover font-bold py-4 px-8 rounded-xl text-center transition-all active:scale-95">Free Estimate</a>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-6">
                  {[{ target: '33+', label: 'Years Experience' },{ target: '62', label: '5-Star Reviews' },{ target: '24/7', label: 'Emergency Ready' }].map((s, i) => (
                    <div key={i} className="border-l-2 border-text-accent pl-4 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                      <p className="text-3xl font-bold text-text-accent"><AnimatedCounter target={s.target} /></p>
                      <p className="text-text-dim text-sm">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative hidden md:grid grid-cols-2 gap-3 reveal h-96">
                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-border">
                  <Image src="/IMG_1361.jpeg" alt="Tree Care of SWFL — Professional Equipment" fill className="object-contain hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 300px" />
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-border">
                  <Image src="/IMG_1524.jpeg" alt="Tree Care of SWFL — Our Team" fill className="object-contain hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 300px" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-y border-border-accent bg-accent-subtle py-3 overflow-hidden">
          <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
            {[...trustSignals, ...trustSignals].map((s, i) => (<span key={i} className="inline-flex items-center gap-2 mx-6 text-sm text-text-accent-hover/60 font-medium"><Trophy className="w-3.5 h-3.5 text-text-accent/40" />{s}</span>))}
          </div>
        </div>

        <section id="services" className="py-20 px-4 bg-card">
          <div className="max-w-7xl mx-auto"><div className="text-center mb-16 reveal"><h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Comprehensive Tree Care Services</h2><p className="text-xl text-text-dim max-w-2xl mx-auto">From routine maintenance to emergency response, we handle all your tree care needs with professional expertise.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {serviceData.map((s, idx) => { const Icon = serviceIcons[idx];
              return (<div key={idx} className="reveal group relative bg-surface rounded-2xl p-[1px] hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 via-accent-bright/15 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[shimmer_2s_linear_infinite] bg-[length:200%_100%]" />
                <div className="relative bg-surface rounded-2xl p-6 h-full border border-border group-hover:border-border-accent-strong transition-colors">
                  <div className="mb-4 w-12 h-12 bg-accent-bg rounded-xl flex items-center justify-center group-hover:bg-accent-bg transition-colors"><Icon className="w-6 h-6 text-text-accent" /></div>
                  <h3 className="text-lg font-bold text-text-secondary mb-2">{s.title}</h3><p className="text-text-dim text-sm leading-relaxed">{s.description}</p>
                  <a href="#contact" className="mt-4 flex items-center text-text-accent font-semibold group-hover:translate-x-2 transition-transform text-sm cursor-pointer">Learn more <ChevronRight className="w-4 h-4 ml-1" /></a>
                </div>
              </div>);
            })}
          </div></div>
        </section>

        <section id="areas" className="py-20 px-4 bg-surface">
          <div className="max-w-7xl mx-auto"><div className="text-center mb-16 reveal"><h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Service Areas</h2><p className="text-xl text-text-dim max-w-2xl mx-auto">Proudly serving Southwest Florida with professional tree care services.</p></div>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceAreas.map((area, idx) => (<div key={idx} className="reveal group relative bg-card rounded-2xl p-[1px] hover:shadow-lg transition-all duration-300" style={{ transitionDelay: `${idx * 0.15}s` }}>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 via-accent-bright/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[shimmer_2s_linear_infinite] bg-[length:200%_100%]" />
              <div className="relative bg-card rounded-2xl p-8 h-full border border-border group-hover:border-border-accent transition-colors">
                <div className="flex items-center gap-3 mb-6"><MapPin className="w-6 h-6 text-text-accent flex-shrink-0" /><h3 className="text-2xl font-bold text-text-secondary">{area.county}</h3></div>
                <ul className="space-y-3">{area.cities.map((city, cidx) => (<li key={cidx} className="flex items-center gap-2 text-text-muted"><span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />{city}</li>))}</ul>
              </div>
            </div>))}
          </div></div>
        </section>

        <section id="portfolio" className="py-20 px-4 bg-card">
          <div className="max-w-7xl mx-auto"><div className="text-center mb-16 reveal"><h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Our Work</h2><p className="text-xl text-text-dim max-w-2xl mx-auto">See the quality and professionalism of our completed projects across Southwest Florida.</p></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {portfolioImages.map((img, idx) => (<div key={idx} onClick={() => setLightboxImage(img.src)} className="reveal group relative bg-card-hover rounded-2xl overflow-hidden hover:shadow-lg transition-all cursor-pointer aspect-square border border-border hover:border-border-accent-strong" style={{ transitionDelay: `${idx * 0.1}s` }} role="button" tabIndex={0} aria-label={`View: ${img.alt}`} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightboxImage(img.src); } }}>
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center"><div className="opacity-0 group-hover:opacity-100 transition-all"><div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center shadow-lg"><svg className="w-6 h-6 text-on-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg></div></div></div>
            </div>))}
          </div></div>
        </section>

        <section id="contact" className="py-20 px-4 bg-gradient-to-b from-surface to-accent-subtle/50">
          <div className="max-w-4xl mx-auto text-center reveal"><h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Ready to Transform Your Landscape?</h2><p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">Get a free, no-obligation estimate. Call or text us — we&apos;re available 24/7.</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="tel:2399440073" className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-border-accent-strong transition-all hover:-translate-y-1"><div className="w-16 h-16 bg-accent-bg rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-bg transition-colors"><Phone className="w-8 h-8 text-text-accent" /></div><h3 className="text-xl font-bold text-text-secondary mb-2">Call Us</h3><p className="text-2xl font-bold text-text-accent mb-2">(239) 944-0073</p><p className="text-text-dim text-sm">Tap to call now</p></a>
            <a href="sms:2399440073" className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-border-accent-strong transition-all hover:-translate-y-1"><div className="w-16 h-16 bg-accent-bg rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-bg transition-colors"><MessageCircle className="w-8 h-8 text-text-accent" /></div><h3 className="text-xl font-bold text-text-secondary mb-2">Text Us</h3><p className="text-2xl font-bold text-text-accent mb-2">(239) 944-0073</p><p className="text-text-dim text-sm">Send us a text message</p></a>
          </div></div>
        </section>
      </main>

      <footer className="bg-footer text-text-dim py-12 px-4">
        <div className="max-w-7xl mx-auto"><div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="reveal"><Logo className="h-24 w-auto mb-4 brightness-0 invert" /><p className="text-sm leading-relaxed">Professional tree care serving Southwest Florida since 1991. Licensed &amp; insured.</p></div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}><h4 className="font-semibold text-on-accent mb-4">Services</h4><ul className="space-y-2 text-sm">{['Tree Removal','Tree Trimming','Stump Grinding','Emergency Service'].map(i => <li key={i}><a href="#services" className="hover:text-accent transition-colors">{i}</a></li>)}</ul></div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}><h4 className="font-semibold text-on-accent mb-4">Quick Links</h4><ul className="space-y-2 text-sm">{['Services','Service Areas','Portfolio','Contact'].map(i => <li key={i}><a href={`#${i.toLowerCase().replace(' ','-').replace('service-areas','areas')}`} className="hover:text-accent transition-colors">{i}</a></li>)}</ul></div>
          <div className="reveal" style={{ transitionDelay: '0.3s' }}><h4 className="font-semibold text-on-accent mb-4">Contact</h4><a href="tel:2399440073" className="block text-sm mb-2 hover:text-accent transition-colors">(239) 944-0073</a><a href="sms:2399440073" className="block text-sm hover:text-accent transition-colors">Text Us</a></div>
        </div><div className="border-t border-border-strong pt-8 text-center text-sm"><p>&copy; 2026 Tree Care of SWFL LLC. All rights reserved. Licensed &amp; Insured.</p></div></div>
      </footer>

      {lightboxImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-[fadeIn_0.2s_ease-out]" onClick={() => setLightboxImage(null)} role="dialog" aria-modal="true">
          <button onClick={() => setLightboxImage(null)} className="absolute top-6 right-6 text-on-accent hover:text-accent transition-colors z-10 p-2"><X className="w-8 h-8" /></button>
          <div className="relative w-full max-w-4xl h-[80vh]" onClick={e => e.stopPropagation()}><Image src={lightboxImage} alt="Enlarged" fill className="object-contain" sizes="100vw" /></div>
        </div>
      )}

      <a href="tel:2399440073" className={`md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-accent hover:bg-accent-bright text-on-accent font-bold py-3.5 px-6 rounded-full flex items-center gap-2.5 shadow-lg transition-all active:scale-95 ${showFloatingCall ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}><span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" /></span><Phone className="w-4 h-4" /> (239) 944-0073</a>
      <button onClick={scrollToTop} className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-accent hover:bg-accent-bright text-on-accent rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}><ArrowUp className="w-5 h-5" /></button>
    </div>
  );
}
