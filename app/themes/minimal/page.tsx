'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Axe, Scissors, Zap, AlertCircle, Trash2, X, ArrowUp, Phone, MessageCircle, ArrowLeft, Trophy } from 'lucide-react';
import Logo from '@/app/logo';
import { services as serviceData, serviceAreas, portfolioImages } from '@/app/data';
import AnimatedCounter from '@/app/animated-counter';

const serviceIcons: Record<number, React.ComponentType<{ className?: string }>> = { 0: Axe, 1: Scissors, 2: Zap, 3: AlertCircle, 4: Trash2 };
const trustSignals = ['33+ Years Experience', '62 Five-Star Reviews', 'Licensed & Insured', 'Family Owned', '24/7 Emergency Service', 'Serving SWFL Since 1991'];

export default function MinimalTheme() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showFloatingCall, setShowFloatingCall] = useState(false);

  useEffect(() => { const o = new IntersectionObserver((e) => { e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); }); }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }); document.querySelectorAll('.reveal').forEach(el => o.observe(el)); return () => o.disconnect(); }, []);
  useEffect(() => { const h = () => { setShowBackToTop(window.scrollY > 500); setShowFloatingCall(window.scrollY > 400); }; window.addEventListener('scroll', h, { passive: true }); return () => window.removeEventListener('scroll', h); }, []);
  useEffect(() => { document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [mobileMenuOpen]);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">Skip to content</a>

      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8"><div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs text-gray-400 hover:text-blue-600 transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Showcase</Link>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); closeMobileMenu(); }} className="flex-shrink-0"><Logo className="h-16 w-auto" /></a>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {['Services','Areas','Portfolio'].map(i => (<a key={i} href={`#${i.toLowerCase().replace('areas','areas')}`} className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors tracking-wide uppercase">{i === 'Areas' ? 'Service Areas' : i}</a>))}
            <a href="tel:2399440073" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold rounded transition-all active:scale-95 tracking-wide">(239) 944-0073</a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-600" aria-label="Toggle menu"><div className="w-5 h-4 flex flex-col justify-between"><span className={`block h-0.5 w-full bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} /><span className={`block h-0.5 w-full bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} /><span className={`block h-0.5 w-full bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} /></div></button>
        </div></div>
        <div className={`md:hidden fixed inset-0 top-16 bg-white z-40 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}><div className="flex flex-col items-center justify-center h-full gap-6 -mt-16">
          {['Services','Service Areas','Portfolio','Contact'].map(l => (<a key={l} href={`#${l.toLowerCase().replace(/\s+/g,'-').replace('service-areas','areas')}`} onClick={closeMobileMenu} className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">{l}</a>))}
          <a href="tel:2399440073" onClick={closeMobileMenu} className="mt-4 bg-blue-600 text-white px-10 py-4 font-bold text-lg rounded active:scale-95">(239) 944-0073</a>
        </div></div>
      </nav>

      <div className="fixed top-16 w-full bg-gray-900 text-white py-3 px-4 text-center font-semibold z-40 md:relative md:top-0 md:mt-16 text-sm tracking-wide">
        <span className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-2" />24/7 Emergency Tree Service Available — Call (239) 944-0073
      </div>

      <main id="main-content" aria-hidden={!!lightboxImage}>
        <section className="pt-28 md:pt-24 pb-20 px-6 max-w-6xl mx-auto">
          <div className="reveal max-w-3xl">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-6">33+ Years of Excellence</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-none tracking-tight">Professional Tree Care.<br /><span className="text-blue-600">No Compromises.</span></h1>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-xl">Family-owned. Licensed. Insured. Trusted by homeowners across Southwest Florida.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:2399440073" className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-10 rounded text-center transition-all active:scale-95 tracking-wide">Emergency Service</a>
              <a href="#contact" className="border-2 border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 font-semibold py-4 px-10 rounded text-center transition-all active:scale-95 tracking-wide">Free Estimate</a>
            </div>
            <div className="mt-16 flex gap-12">
              {[{ target: '33+', label: 'Years Experience' },{ target: '62', label: '5-Star Reviews' },{ target: '24/7', label: 'Emergency Ready' }].map((s, i) => (
                <div key={i}>
                  <p className="text-4xl font-bold text-gray-900"><AnimatedCounter target={s.target} /></p>
                  <p className="text-sm text-gray-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-y border-blue-100 bg-blue-50/50 py-3 overflow-hidden">
          <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
            {[...trustSignals, ...trustSignals].map((s, i) => (<span key={i} className="inline-flex items-center gap-2 mx-6 text-sm text-blue-600/50 font-medium"><Trophy className="w-3.5 h-3.5 text-blue-400/40" />{s}</span>))}
          </div>
        </div>

        <section id="services" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto"><div className="text-center mb-16 reveal"><p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">What We Do</p><h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Comprehensive Tree Care</h2><p className="text-xl text-gray-500 max-w-xl mx-auto">From routine maintenance to emergency response — we handle it all with precision.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {serviceData.map((s, idx) => { const Icon = serviceIcons[idx];
              return (<div key={idx} className="reveal group relative bg-white rounded p-[1px] hover:shadow-md transition-all duration-300" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="absolute inset-0 rounded bg-gradient-to-r from-blue-500/0 via-blue-400/15 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[shimmer_2s_linear_infinite] bg-[length:200%_100%]" />
                <div className="relative bg-white rounded p-6 h-full border border-gray-200 group-hover:border-blue-200 transition-colors">
                  <div className="mb-4"><Icon className="w-8 h-8 text-blue-600" /></div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3><p className="text-sm text-gray-500 leading-relaxed mb-4">{s.description}</p>
                  <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>);
            })}
          </div></div>
        </section>

        <section id="areas" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto"><div className="text-center mb-16 reveal"><p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Coverage</p><h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Service Areas</h2><p className="text-xl text-gray-500 max-w-xl mx-auto">Serving Southwest Florida with pride and professionalism.</p></div>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceAreas.map((area, idx) => (<div key={idx} className="reveal group relative bg-gray-50 rounded p-[1px] hover:border-blue-200 transition-all" style={{ transitionDelay: `${idx * 0.15}s` }}>
              <div className="absolute inset-0 rounded bg-gradient-to-r from-blue-500/0 via-blue-400/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[shimmer_2s_linear_infinite] bg-[length:200%_100%]" />
              <div className="relative bg-gray-50 rounded p-8 h-full border border-gray-100 group-hover:border-blue-200 transition-colors">
                <MapPin className="w-6 h-6 text-blue-600 mb-4" /><h3 className="text-xl font-bold text-gray-900 mb-4">{area.county}</h3>
                <ul className="space-y-2 text-sm text-gray-500">{area.cities.map((c, ci) => <li key={ci}>— {c}</li>)}</ul>
              </div>
            </div>))}
          </div></div>
        </section>

        <section id="portfolio" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto"><div className="text-center mb-16 reveal"><p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Gallery</p><h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Work</h2><p className="text-xl text-gray-500 max-w-xl mx-auto">See our completed projects across Southwest Florida.</p></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioImages.map((img, idx) => (<div key={idx} onClick={() => setLightboxImage(img.src)} className="reveal group relative bg-gray-200 overflow-hidden cursor-pointer aspect-square" style={{ transitionDelay: `${idx * 0.1}s` }} role="button" tabIndex={0} aria-label={`View: ${img.alt}`} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightboxImage(img.src); } }}>
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:saturate-150" sizes="(max-width: 640px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors flex items-center justify-center"><div className="opacity-0 group-hover:opacity-100 transition-all"><div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg"><svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></div></div></div>
            </div>))}
          </div></div>
        </section>

        <section id="contact" className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center reveal"><h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let&apos;s Talk</h2><p className="text-xl text-gray-500 mb-12">Get a free, no-obligation estimate. Call or text — 24/7 availability.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="tel:2399440073" className="group bg-gray-50 border border-gray-200 rounded p-8 hover:border-blue-300 hover:bg-gray-100 transition-all"><Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" /><h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3><p className="text-2xl font-bold text-blue-600 mb-1">(239) 944-0073</p><p className="text-sm text-gray-400">Tap to call now</p></a>
            <a href="sms:2399440073" className="group bg-gray-50 border border-gray-200 rounded p-8 hover:border-blue-300 hover:bg-gray-100 transition-all"><MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" /><h3 className="text-lg font-bold text-gray-900 mb-2">Text Us</h3><p className="text-2xl font-bold text-blue-600 mb-1">(239) 944-0073</p><p className="text-sm text-gray-400">Send us a message</p></a>
          </div></div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto"><div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="reveal"><Logo className="h-14 w-auto mb-4 opacity-90" /><p className="text-sm">Professional tree care since 1991. Licensed &amp; Insured.</p></div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}><h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4><ul className="space-y-2 text-sm">{['Tree Removal','Tree Trimming','Stump Grinding','Emergency'].map(i => <li key={i}><a href="#services" className="hover:text-white transition-colors">{i}</a></li>)}</ul></div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}><h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Links</h4><ul className="space-y-2 text-sm">{['Services','Service Areas','Portfolio','Contact'].map(i => <li key={i}><a href={`#${i.toLowerCase().replace(' ','-').replace('service-areas','areas')}`} className="hover:text-white transition-colors">{i}</a></li>)}</ul></div>
          <div className="reveal" style={{ transitionDelay: '0.3s' }}><h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4><a href="tel:2399440073" className="block text-sm mb-2 hover:text-white transition-colors">(239) 944-0073</a><a href="sms:2399440073" className="block text-sm hover:text-white transition-colors">Text Us</a></div>
        </div><div className="border-t border-gray-800 pt-8 text-center text-xs"><p>&copy; 2026 Tree Care of SWFL LLC. All rights reserved.</p></div></div>
      </footer>

      {lightboxImage && (<div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/98 p-4 animate-[fadeIn_0.2s_ease-out]" onClick={() => setLightboxImage(null)} role="dialog" aria-modal="true"><button onClick={() => setLightboxImage(null)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors z-10 p-2"><X className="w-8 h-8" /></button><div className="relative w-full max-w-4xl h-[80vh]" onClick={e => e.stopPropagation()}><Image src={lightboxImage} alt="Enlarged" fill className="object-contain" sizes="100vw" /></div></div>)}

      <a href="tel:2399440073" className={`md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3.5 px-6 rounded-full flex items-center gap-2.5 shadow-xl transition-all active:scale-95 ${showFloatingCall ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}><span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" /><Phone className="w-4 h-4" /> (239) 944-0073</a>
      <button onClick={scrollToTop} className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}><ArrowUp className="w-5 h-5" /></button>
      <a href="tel:2397713675" className="fixed bottom-6 left-4 sm:left-8 z-50 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-4 sm:py-3 sm:px-5 rounded-xl flex items-center gap-2 shadow-xl shadow-blue-500/20 transition-all active:scale-95 animate-[fadeIn_0.5s_ease-out]"><Phone className="w-4 h-4" /><span className="hidden sm:inline">Like this? Call Dev</span></a>
    </div>
  );
}
