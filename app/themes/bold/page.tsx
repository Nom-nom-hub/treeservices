'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, ChevronRight, Axe, Scissors, Zap, AlertCircle, Trash2, X, ArrowUp, MessageCircle, Star, ArrowLeft, Trophy } from 'lucide-react';
import Logo from '@/app/logo';
import { services as serviceData, serviceAreas, portfolioImages } from '@/app/data';
import AnimatedCounter from '@/app/animated-counter';

const serviceIcons: Record<number, React.ComponentType<{ className?: string }>> = { 0: Axe, 1: Scissors, 2: Zap, 3: AlertCircle, 4: Trash2 };
const trustSignals = ['33+ Years Experience', '62 Five-Star Reviews', 'Licensed & Insured', 'Family Owned', '24/7 Emergency Service', 'Serving SWFL Since 1991'];

export default function BoldTheme() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showFloatingCall, setShowFloatingCall] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => { const o = new IntersectionObserver((e) => { e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); }); }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }); document.querySelectorAll('.reveal').forEach(el => o.observe(el)); return () => o.disconnect(); }, []);
  useEffect(() => { const h = () => { setShowBackToTop(window.scrollY > 500); setShowFloatingCall(window.scrollY > 400); }; window.addEventListener('scroll', h, { passive: true }); return () => window.removeEventListener('scroll', h); }, []);
  useEffect(() => { document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [mobileMenuOpen]);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-green-500 focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold">Skip to content</a>

      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs text-slate-500 hover:text-green-400 transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Showcase</Link>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); closeMobileMenu(); }} className="flex-shrink-0"><Logo className="h-16 w-auto" /></a>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Service Areas', 'Portfolio'].map(item => (<a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-').replace('service-areas', 'areas')}`} className="text-sm font-medium text-slate-300 hover:text-green-400 transition-colors uppercase tracking-wider">{item}</a>))}
            <a href="tel:2399440073" className="bg-green-500 hover:bg-green-400 text-slate-900 px-6 py-2.5 rounded font-bold text-sm transition-all active:scale-95 shadow-lg shadow-green-500/20 flex items-center gap-2"><Phone className="w-4 h-4" /> (239) 944-0073</a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-green-400" aria-label="Toggle menu"><div className="w-6 h-5 flex flex-col justify-between"><span className={`block h-0.5 w-full bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} /><span className={`block h-0.5 w-full bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} /><span className={`block h-0.5 w-full bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} /></div></button>
        </div></div>
        <div className={`md:hidden fixed inset-0 top-20 bg-slate-950/98 backdrop-blur-sm z-40 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}><div className="flex flex-col items-center justify-center h-full gap-4 -mt-20">
          {[{ label: 'Services', href: '#services' },{ label: 'Service Areas', href: '#areas' },{ label: 'Portfolio', href: '#portfolio' },{ label: 'Contact', href: '#contact' }].map(l => (<a key={l.href} href={l.href} onClick={closeMobileMenu} className="text-2xl text-slate-300 hover:text-green-400 font-semibold transition-colors py-2">{l.label}</a>))}
          <a href="tel:2399440073" onClick={closeMobileMenu} className="mt-6 bg-green-500 text-slate-900 px-10 py-4 rounded font-bold text-lg active:scale-95 flex items-center gap-3"><Phone className="w-5 h-5" /> (239) 944-0073</a>
        </div></div>
      </nav>

      <div className="fixed top-20 w-full bg-red-600 text-white py-3 px-4 text-center font-bold z-40 md:relative md:top-0 md:mt-20 flex items-center justify-center gap-2 text-sm tracking-wide">
        <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" /></span>24/7 Emergency Tree Service Available — Call (239) 944-0073
      </div>

      <main id="main-content" aria-hidden={!!lightboxImage}>
        <section className="relative pt-28 md:pt-32 pb-20 px-4 overflow-hidden" onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setMousePos({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height }); }}>
          <div className="absolute inset-0 pointer-events-none z-0" style={{ background: `radial-gradient(500px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(34,197,94,0.06) 0%, transparent 60%)` }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.08)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.05)_0%,transparent_50%)]" />
          <div className="max-w-7xl mx-auto relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <div className="inline-block bg-green-500/10 text-green-400 px-4 py-2 rounded border border-green-500/30 text-sm font-semibold mb-6 backdrop-blur-sm"><Star className="w-4 h-4 inline mr-1" /> 33+ Years of Excellence</div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">The <span className="bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">Authority</span> in Tree Care</h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">When quality matters, choose the professionals. Family-owned, licensed, insured — serving Southwest Florida with pride since 1991.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:2399440073" className="bg-green-500 hover:bg-green-400 text-slate-900 font-bold py-4 px-8 rounded text-center transition-all active:scale-95 flex items-center justify-center gap-2 shadow-xl shadow-green-500/20"><AlertCircle className="w-5 h-5" /> Emergency Service</a>
                  <a href="#contact" className="border-2 border-green-500/50 text-green-400 hover:bg-green-500 hover:text-slate-900 font-bold py-4 px-8 rounded text-center transition-all active:scale-95">Free Estimate</a>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-6">
                  {[{ target: '33+', label: 'Years Experience' },{ target: '62', label: '5-Star Reviews' },{ target: '24/7', label: 'Emergency Ready' }].map((s, i) => (
                    <div key={i} className="border-l-2 border-green-500 pl-4 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                      <p className="text-4xl font-black text-green-400"><AnimatedCounter target={s.target} /></p>
                      <p className="text-slate-400 text-sm uppercase tracking-wider font-medium">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative hidden md:grid grid-cols-2 gap-3 reveal h-96">
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-green-500/20 border border-slate-800">
                  <Image src="/IMG_1361.jpeg" alt="Tree Care of SWFL — Professional Equipment" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 300px" />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-green-500/20 border border-slate-800">
                  <Image src="/IMG_1524.jpeg" alt="Tree Care of SWFL — Our Team" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 300px" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-y border-green-500/10 bg-green-500/5 py-3 overflow-hidden">
          <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
            {[...trustSignals, ...trustSignals].map((s, i) => (<span key={i} className="inline-flex items-center gap-2 mx-6 text-sm text-green-400/50 font-medium"><Trophy className="w-3.5 h-3.5 text-green-500/30" />{s}</span>))}
          </div>
        </div>

        <section id="services" className="py-20 px-4 bg-slate-950/50">
          <div className="max-w-7xl mx-auto"><div className="text-center mb-16 reveal"><p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-4">Our Expertise</p><h2 className="text-4xl md:text-5xl font-black text-white mb-4">Comprehensive Tree Care Services</h2><p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">From routine maintenance to emergency response, we deliver excellence at every turn.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {serviceData.map((s, idx) => { const Icon = serviceIcons[idx];
              return (<div key={idx} className="reveal group relative bg-slate-900 rounded-xl p-[1px] hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-2" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/0 via-green-400/15 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[shimmer_2s_linear_infinite] bg-[length:200%_100%]" />
                <div className="relative bg-slate-900 rounded-xl p-6 h-full border border-slate-800 group-hover:border-green-500/30 transition-colors">
                  <div className="mb-4"><Icon className="w-10 h-10 text-green-500 group-hover:scale-110 transition-transform" /></div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
                  <div className="mt-4 flex items-center text-green-400 font-semibold group-hover:translate-x-2 transition-transform text-sm">Learn more <ChevronRight className="w-4 h-4 ml-1" /></div>
                </div>
              </div>);
            })}
          </div></div>
        </section>

        <section id="areas" className="py-20 px-4">
          <div className="max-w-7xl mx-auto"><div className="text-center mb-16 reveal"><p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-4">Coverage</p><h2 className="text-4xl md:text-5xl font-black text-white mb-4">Service Areas</h2><p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">Proudly serving Southwest Florida with professional tree care services.</p></div>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceAreas.map((area, idx) => (<div key={idx} className="reveal group relative bg-slate-900 rounded-xl p-[1px] hover:shadow-lg transition-all duration-300" style={{ transitionDelay: `${idx * 0.15}s` }}>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/0 via-green-400/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[shimmer_2s_linear_infinite] bg-[length:200%_100%]" />
              <div className="relative bg-slate-900 rounded-xl p-8 h-full border border-slate-800 group-hover:border-green-500/20 transition-colors">
                <div className="flex items-center gap-3 mb-6"><MapPin className="w-6 h-6 text-green-500 flex-shrink-0" /><h3 className="text-2xl font-bold text-white">{area.county}</h3></div>
                <ul className="space-y-3">{area.cities.map((city, cidx) => (<li key={cidx} className="flex items-center gap-2 text-slate-300"><span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />{city}</li>))}</ul>
              </div>
            </div>))}
          </div></div>
        </section>

        <section id="portfolio" className="py-20 px-4 bg-slate-950/50">
          <div className="max-w-7xl mx-auto"><div className="text-center mb-16 reveal"><p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-4">Gallery</p><h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Work</h2><p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">See the quality and professionalism of our completed projects.</p></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {portfolioImages.map((img, idx) => (<div key={idx} onClick={() => setLightboxImage(img.src)} className="reveal group relative bg-slate-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-green-500/10 transition-all cursor-pointer aspect-square border border-slate-700 hover:border-green-500/30" style={{ transitionDelay: `${idx * 0.1}s` }} role="button" tabIndex={0} aria-label={`View: ${img.alt}`} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightboxImage(img.src); } }}>
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center"><div className="opacity-0 group-hover:opacity-100 transition-all"><div className="w-12 h-12 rounded-full bg-green-500/90 flex items-center justify-center shadow-lg"><svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg></div></div></div>
            </div>))}
          </div></div>
        </section>

        <section id="contact" className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-4xl mx-auto text-center reveal"><p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-4">Get In Touch</p><h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Transform Your Landscape?</h2><p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light">Get a free, no-obligation estimate. Call or text us — 24/7 emergency availability.</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="tel:2399440073" className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-green-500/10 hover:border-green-500/50 transition-all hover:-translate-y-1"><div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 group-hover:scale-110 transition-all border border-green-500/20"><Phone className="w-8 h-8 text-green-400" /></div><h3 className="text-xl font-bold text-white mb-2">Call Us</h3><p className="text-2xl font-bold text-green-400 mb-2">(239) 944-0073</p><p className="text-slate-500 text-sm">Tap to call now</p></a>
            <a href="sms:2399440073" className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-green-500/10 hover:border-green-500/50 transition-all hover:-translate-y-1"><div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 group-hover:scale-110 transition-all border border-green-500/20"><MessageCircle className="w-8 h-8 text-green-400" /></div><h3 className="text-xl font-bold text-white mb-2">Text Us</h3><p className="text-2xl font-bold text-green-400 mb-2">(239) 944-0073</p><p className="text-slate-500 text-sm">Send us a text message</p></a>
          </div></div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-12 px-4 border-t border-green-500/10">
        <div className="max-w-7xl mx-auto"><div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="reveal"><Logo className="h-16 w-auto mb-4" /><p className="text-sm leading-relaxed">Professional tree care since 1991. Licensed, insured, and dedicated to excellence.</p></div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}><h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Services</h4><ul className="space-y-2 text-sm">{['Tree Removal','Tree Trimming','Stump Grinding','Emergency Service'].map(i => <li key={i}><a href="#services" className="hover:text-green-400 transition-colors">{i}</a></li>)}</ul></div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}><h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Quick Links</h4><ul className="space-y-2 text-sm">{['Services','Service Areas','Portfolio','Contact'].map(i => <li key={i}><a href={`#${i.toLowerCase().replace(' ','-').replace('service-areas','areas')}`} className="hover:text-green-400 transition-colors">{i}</a></li>)}</ul></div>
          <div className="reveal" style={{ transitionDelay: '0.3s' }}><h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Contact</h4><a href="tel:2399440073" className="block text-sm mb-2 hover:text-green-400 transition-colors">(239) 944-0073</a><a href="sms:2399440073" className="block text-sm hover:text-green-400 transition-colors">Text Us</a></div>
        </div><div className="border-t border-slate-800 pt-8 text-center text-sm"><p>&copy; 2026 Tree Care of SWFL LLC. All rights reserved. Licensed &amp; Insured.</p></div></div>
      </footer>

      {lightboxImage && (<div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/98 backdrop-blur-sm p-4 animate-[fadeIn_0.2s_ease-out]" onClick={() => setLightboxImage(null)} role="dialog" aria-modal="true"><button onClick={() => setLightboxImage(null)} className="absolute top-6 right-6 text-white hover:text-green-400 transition-colors z-10 p-2"><X className="w-8 h-8" /></button><div className="relative w-full max-w-4xl h-[80vh]" onClick={e => e.stopPropagation()}><Image src={lightboxImage} alt="Enlarged" fill className="object-contain" sizes="100vw" /></div></div>)}

      <a href="tel:2399440073" className={`md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-green-500 hover:bg-green-400 text-slate-900 font-bold py-3.5 px-6 rounded-full flex items-center gap-2.5 shadow-xl shadow-green-500/20 transition-all active:scale-95 ${showFloatingCall ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}><span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-900 opacity-75" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-900" /></span><Phone className="w-4 h-4" /> (239) 944-0073</a>
      <button onClick={scrollToTop} className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-green-500 hover:bg-green-400 text-slate-900 rounded-full flex items-center justify-center shadow-xl shadow-green-500/20 transition-all active:scale-90 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}><ArrowUp className="w-5 h-5" /></button>
      <a href="tel:2397713675" className="fixed bottom-6 left-4 sm:left-8 z-50 bg-green-500 hover:bg-green-400 text-slate-900 font-bold py-2.5 px-4 sm:py-3 sm:px-5 rounded-xl flex items-center gap-2 shadow-xl shadow-green-500/20 transition-all active:scale-95 animate-[fadeIn_0.5s_ease-out]"><Phone className="w-4 h-4" /><span className="hidden sm:inline">Like this? Call Dev</span></a>
    </div>
  );
}
