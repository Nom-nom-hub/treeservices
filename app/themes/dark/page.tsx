'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Leaf, ChevronRight, Axe, Scissors, Zap, AlertCircle, Trash2, Check, X, ArrowUp, MessageCircle, ArrowLeft, Trophy } from 'lucide-react';
import Logo from '@/app/logo';
import { services, serviceAreas, portfolioImages } from '@/app/data';
import AnimatedCounter from '@/app/animated-counter';

const serviceIcons: Record<number, React.ComponentType<{ className?: string }>> = { 0: Axe, 1: Scissors, 2: Zap, 3: AlertCircle, 4: Trash2 };
const trustSignals = ['33+ Years Experience', '62 Five-Star Reviews', 'Licensed & Insured', 'Family Owned', '24/7 Emergency Service', 'Serving SWFL Since 1991'];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showFloatingCall, setShowFloatingCall] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => { setShowBackToTop(window.scrollY > 500); setShowFloatingCall(window.scrollY > 400); };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-black">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-green-600 focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold">Skip to content</a>

      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-green-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
            <Link href="/" className="text-xs text-gray-500 hover:text-green-400 transition-colors flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Showcase</Link>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); closeMobileMenu(); }} className="flex items-center gap-3 group"><Logo className="h-12 w-auto group-hover:opacity-90 transition-opacity" /></a>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Services', 'Service Areas', 'Portfolio'].map(item => (<a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-').replace('service-areas', 'areas')}`} className="relative text-gray-300 hover:text-green-400 font-medium text-sm transition-colors py-1 group">{item}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300" /></a>))}
              <a href="tel:2399440073" className="bg-green-600 hover:bg-green-500 text-black px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-600/40 transition-all active:scale-95 flex items-center gap-2"><Phone className="w-4 h-4" />(239) 944-0073</a>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden relative w-10 h-10 flex items-center justify-center text-green-400 hover:text-green-300 transition-colors" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>
              <div className="w-6 h-5 flex flex-col justify-between transition-all duration-300">
                <span className={`block h-0.5 w-full bg-current rounded transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} /><span className={`block h-0.5 w-full bg-current rounded transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} /><span className={`block h-0.5 w-full bg-current rounded transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
        <div className={`md:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-sm z-40 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center justify-center h-full gap-4 -mt-20">
            {[{ label: 'Services', href: '#services' },{ label: 'Service Areas', href: '#areas' },{ label: 'Portfolio', href: '#portfolio' },{ label: 'Contact', href: '#contact' }].map(link => (<a key={link.href} href={link.href} onClick={closeMobileMenu} className="text-2xl text-gray-300 hover:text-green-400 font-semibold transition-colors py-2">{link.label}</a>))}
            <a href="tel:2399440073" onClick={closeMobileMenu} className="mt-6 bg-green-600 hover:bg-green-500 text-black px-10 py-4 rounded-lg font-bold text-lg transition-all active:scale-95 flex items-center gap-3"><Phone className="w-5 h-5" />(239) 944-0073</a>
          </div>
        </div>
      </nav>

      <div className="fixed top-20 w-full bg-red-600 text-white py-3 px-4 text-center font-semibold z-40 md:relative md:top-0 md:mt-20 flex items-center justify-center gap-2">
        <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" /></span>
        24/7 Emergency Tree Service Available - Call (239) 944-0073
      </div>

      <main id="main-content" aria-hidden={!!lightboxImage}>
        <section className="relative pt-28 md:pt-32 pb-20 px-4 bg-gradient-to-b from-gray-900 to-black overflow-hidden" onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setMousePos({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height }); }}>
          <div className="absolute inset-0 pointer-events-none z-0" style={{ background: `radial-gradient(500px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(34,197,94,0.06) 0%, transparent 60%)` }} />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-900/20 rounded-full blur-[128px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-800/10 rounded-full blur-[96px] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <div className="inline-block bg-green-900/60 text-green-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-green-600/40 flex items-center gap-2 backdrop-blur-sm"><Check className="w-4 h-4" />33+ Years of Excellence</div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Premium Tree Care for <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Southwest Florida</span></h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">Family-owned and operated. Licensed, insured, and trusted by thousands of homeowners across Lee, Collier, and Charlotte counties.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:2399440073" className="bg-green-600 hover:bg-green-500 text-black font-bold py-4 px-8 rounded-lg text-center transition-all active:scale-95 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-600/50"><AlertCircle className="w-5 h-5" />Emergency Service Now</a>
                  <a href="#contact" className="border-2 border-green-600 text-green-400 hover:bg-green-600 hover:text-black hover:border-green-600 font-bold py-4 px-8 rounded-lg text-center transition-all active:scale-95">Free Estimate</a>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-6">
                  {[{ target: '33+', label: 'Years Experience' },{ target: '62', label: '5-Star Reviews' },{ target: '24/7', label: 'Emergency Ready' }].map((s, i) => (
                    <div key={i} className="border-l-2 border-green-600 pl-4 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                      <p className="text-3xl font-bold text-green-400"><AnimatedCounter target={s.target} /></p>
                      <p className="text-gray-400 text-sm">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative hidden md:block reveal">
                <div className="relative bg-gradient-to-br from-green-600 to-green-900 rounded-2xl h-96 flex items-center justify-center shadow-2xl shadow-green-600/20 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]" />
                  <Leaf className="w-24 h-24 text-black/20" />
                  <div className="absolute inset-4 border border-white/10 rounded-xl" /><div className="absolute inset-8 border border-white/5 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Marquee */}
        <div className="border-y border-green-600/20 bg-green-950/10 py-3 overflow-hidden">
          <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
            {[...trustSignals, ...trustSignals].map((s, i) => (<span key={i} className="inline-flex items-center gap-2 mx-6 text-sm text-green-400/60 font-medium"><Trophy className="w-3.5 h-3.5 text-green-500/40" />{s}</span>))}
          </div>
        </div>

        <section id="services" className="py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 reveal"><h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Comprehensive Tree Care Services</h2><p className="text-xl text-gray-400 max-w-2xl mx-auto">From routine maintenance to emergency response, we handle all your tree care needs with professional expertise.</p></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {services.map((service, idx) => {
                const IconComponent = serviceIcons[idx];
                return (
                  <div key={idx} className="reveal group relative bg-gray-900 rounded-xl p-[1px] hover:shadow-xl hover:shadow-green-600/20 transition-all duration-300 hover:-translate-y-2" style={{ transitionDelay: `${idx * 0.1}s` }}>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/0 via-green-400/15 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[shimmer_2s_linear_infinite] bg-[length:200%_100%]" />
                    <div className="relative bg-gray-900 rounded-xl p-6 h-full border border-green-600/30 group-hover:border-green-500/50 transition-colors">
                      <div className="mb-4 group-hover:scale-110 transition-transform duration-300"><IconComponent className="w-12 h-12 text-green-500" /></div>
                      <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                      <div className="mt-4 flex items-center text-green-400 font-semibold group-hover:translate-x-2 transition-transform text-sm">Learn more <ChevronRight className="w-4 h-4 ml-1" /></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="areas" className="py-20 px-4 bg-gray-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 reveal"><h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Service Areas</h2><p className="text-xl text-gray-400 max-w-2xl mx-auto">Proudly serving Southwest Florida with professional tree care services.</p></div>
            <div className="grid md:grid-cols-3 gap-8">
              {serviceAreas.map((area, idx) => (
                <div key={idx} className="reveal group relative bg-gray-900 rounded-xl p-[1px] hover:shadow-lg hover:shadow-green-600/20 transition-all duration-300 hover:-translate-y-1" style={{ transitionDelay: `${idx * 0.15}s` }}>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/0 via-green-400/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[shimmer_2s_linear_infinite] bg-[length:200%_100%]" />
                  <div className="relative bg-gray-900 rounded-xl p-8 h-full border border-green-600/30 group-hover:border-green-500/50 transition-colors">
                    <div className="flex items-center gap-3 mb-6"><MapPin className="w-6 h-6 text-green-500 flex-shrink-0" /><h3 className="text-2xl font-bold text-white">{area.county}</h3></div>
                    <ul className="space-y-3">{area.cities.map((city, cidx) => (<li key={cidx} className="flex items-center gap-2 text-gray-300"><span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />{city}</li>))}</ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 reveal"><h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h2><p className="text-xl text-gray-400 max-w-2xl mx-auto">See the quality and professionalism of our completed projects across Southwest Florida.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {portfolioImages.map((image, idx) => (
                <div key={idx} onClick={() => setLightboxImage(image.src)} className="reveal group relative bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300 cursor-pointer border border-green-600/20 hover:border-green-500 aspect-square" style={{ transitionDelay: `${idx * 0.1}s` }} role="button" tabIndex={0} aria-label={`View: ${image.alt}`} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightboxImage(image.src); } }}>
                  <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                      <div className="w-12 h-12 rounded-full bg-green-600/90 flex items-center justify-center shadow-lg"><svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Landscape?</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">Get a free, no-obligation estimate from our team of certified arborists. Call or text us — we&apos;re available 24/7 for emergency services.</p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a href="tel:2399440073" className="group bg-gray-900 border border-green-600/30 rounded-2xl p-8 hover:shadow-xl hover:shadow-green-600/20 hover:border-green-500 transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600/30 group-hover:scale-110 transition-all"><Phone className="w-8 h-8 text-green-500" /></div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3><p className="text-2xl font-bold text-green-400 mb-2">(239) 944-0073</p><p className="text-gray-400 text-sm">Tap to call now</p>
              </a>
              <a href="sms:2399440073" className="group bg-gray-900 border border-green-600/30 rounded-2xl p-8 hover:shadow-xl hover:shadow-green-600/20 hover:border-green-500 transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600/30 group-hover:scale-110 transition-all"><MessageCircle className="w-8 h-8 text-green-500" /></div>
                <h3 className="text-xl font-bold text-white mb-2">Text Us</h3><p className="text-2xl font-bold text-green-400 mb-2">(239) 944-0073</p><p className="text-gray-400 text-sm">Send us a text message</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 text-gray-400 py-12 px-4 border-t border-green-600/30">
        <div className="max-w-7xl mx-auto"><div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="reveal"><Logo className="h-12 w-auto mb-4" /><p className="text-sm text-gray-500 leading-relaxed">Professional tree care serving Southwest Florida since 1991. Licensed &amp; Insured.</p></div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}><h4 className="font-semibold text-white mb-4">Services</h4><ul className="space-y-2 text-sm">{['Tree Removal', 'Tree Trimming', 'Stump Grinding', 'Emergency Service'].map(item => (<li key={item}><a href="#services" className="hover:text-green-400 transition-colors">{item}</a></li>))}</ul></div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}><h4 className="font-semibold text-white mb-4">Quick Links</h4><ul className="space-y-2 text-sm">{['Services', 'Service Areas', 'Portfolio', 'Contact'].map(item => (<li key={item}><a href={`#${item.toLowerCase().replace(' ', '-').replace('service-areas', 'areas')}`} className="hover:text-green-400 transition-colors">{item}</a></li>))}</ul></div>
          <div className="reveal" style={{ transitionDelay: '0.3s' }}><h4 className="font-semibold text-white mb-4">Contact</h4><a href="tel:2399440073" className="block text-sm mb-2 hover:text-green-400 transition-colors">(239) 944-0073</a><a href="sms:2399440073" className="block text-sm hover:text-green-400 transition-colors">Text Us</a></div>
        </div><div className="border-t border-green-600/30 pt-8 text-center text-sm text-gray-500"><p>&copy; 2026 Tree Care of SWFL LLC. All rights reserved. Licensed &amp; Insured.</p></div></div>
      </footer>

      {lightboxImage && (<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-[fadeIn_0.2s_ease-out]" onClick={() => setLightboxImage(null)} role="dialog" aria-modal="true"><button onClick={() => setLightboxImage(null)} className="absolute top-6 right-6 text-white hover:text-green-400 transition-colors z-10 p-2"><X className="w-8 h-8" /></button><div className="relative w-full max-w-4xl h-[80vh]" onClick={(e) => e.stopPropagation()}><Image src={lightboxImage} alt="Enlarged" fill className="object-contain" sizes="100vw" /></div></div>)}

      <a href="tel:2399440073" className={`md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-green-600 hover:bg-green-500 text-black font-bold py-3.5 px-6 rounded-full flex items-center gap-2.5 shadow-lg transition-all active:scale-95 ${showFloatingCall ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}><span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black" /></span><Phone className="w-4 h-4" />(239) 944-0073</a>
      <button onClick={scrollToTop} className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-green-600 hover:bg-green-500 text-black rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}><ArrowUp className="w-5 h-5" /></button>
      <a href="tel:2397713675" className="fixed bottom-6 left-4 sm:left-8 z-50 bg-green-500 hover:bg-green-400 text-black font-bold py-2.5 px-4 sm:py-3 sm:px-5 rounded-xl flex items-center gap-2 shadow-xl shadow-green-500/30 transition-all active:scale-95 animate-[fadeIn_0.5s_ease-out]"><Phone className="w-4 h-4" /><span className="hidden sm:inline">Like this? Call Dev</span></a>
    </div>
  );
}
