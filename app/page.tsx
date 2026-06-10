'use client';

import { Phone, MapPin, Leaf, ChevronRight, Axe, Scissors, Zap, AlertCircle, Trash2, Check, ArrowRight } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: 'Tree Removal',
      description: 'Professional and safe removal of trees of any size, including hazardous and dead trees.',
      icon: Axe,
    },
    {
      title: 'Tree Trimming & Pruning',
      description: 'Expert trimming and pruning to maintain tree health and aesthetic appeal.',
      icon: Scissors,
    },
    {
      title: 'Stump Grinding',
      description: 'Complete stump removal and grinding services to reclaim your yard space.',
      icon: Zap,
    },
    {
      title: 'Emergency Services',
      description: '24/7 rapid response for storm damage and urgent tree-related hazards.',
      icon: AlertCircle,
    },
    {
      title: 'Debris Removal',
      description: 'Complete cleanup and hauling of tree debris and yard waste.',
      icon: Trash2,
    },
  ];

  const serviceAreas = [
    {
      county: 'Lee County',
      cities: ['Cape Coral', 'Fort Myers', 'North Fort Myers', 'Bonita Springs', 'Estero', 'Fort Myers Beach', 'Lehigh Acres', 'San Carlos'],
    },
    {
      county: 'Collier County',
      cities: ['Naples'],
    },
    {
      county: 'Charlotte County',
      cities: ['Punta Gorda', 'Port Charlotte'],
    },
  ];

  const portfolioImages = [
    { src: '/f8h5UdagejkL.png', alt: 'Tree removal project' },
    { src: '/6sQo5j29z5ki.png', alt: 'Tree trimming service' },
    { src: '/S0YyK3lAn5A4.png', alt: 'Palm tree work' },
    { src: '/BLrwQGKbg4x9.jpg', alt: 'Tree removal equipment' },
    { src: '/BZsLNgpflK6P.webp', alt: 'Stump grinding' },
    { src: '/6G0M80xm5YyK.jpg', alt: 'Stump removal' },
    { src: '/o3tRQOU3xJ9W.jpg', alt: 'Professional tree care' },
    { src: '/k1DJTYNlr6um.webp', alt: 'Landscape project' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black border-b border-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Tree Care SWFL</h1>
                <p className="text-xs text-green-400">Professional Tree Services</p>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-300 hover:text-green-400 font-medium text-sm transition-colors">
                Services
              </a>
              <a href="#areas" className="text-gray-300 hover:text-green-400 font-medium text-sm transition-colors">
                Service Areas
              </a>
              <a href="#portfolio" className="text-gray-300 hover:text-green-400 font-medium text-sm transition-colors">
                Portfolio
              </a>
              <a
                href="tel:2399440073"
                className="bg-green-600 hover:bg-green-700 text-black px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (239) 944-0073
              </a>
            </div>

            {/* Mobile Menu - Using Details/Summary */}
            <details className="md:hidden group">
              <summary className="cursor-pointer text-green-400 p-2 list-none flex items-center justify-center">
                <svg className="w-6 h-6 group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="w-6 h-6 hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </summary>
              <div className="absolute right-0 top-20 bg-black border border-green-600 rounded-lg shadow-lg w-48 py-2">
                <a href="#services" className="block px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-gray-900">Services</a>
                <a href="#areas" className="block px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-gray-900">Service Areas</a>
                <a href="#portfolio" className="block px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-gray-900">Portfolio</a>
                <a href="tel:2399440073" className="block px-4 py-3 mx-2 mt-2 bg-green-600 hover:bg-green-700 text-black rounded text-center font-semibold">Call Now</a>
              </div>
            </details>
          </div>
        </div>
      </nav>

      {/* Emergency Banner */}
      <div className="fixed top-20 w-full bg-red-600 text-white py-3 px-4 text-center font-semibold z-40 md:relative md:top-0 md:mt-0">
        24/7 Emergency Tree Service Available - Call (239) 944-0073
      </div>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-900 text-green-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-green-600 flex items-center gap-2">
                <Check className="w-4 h-4" />
                33+ Years of Excellence
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Premium Tree Care for Southwest Florida
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Family-owned and operated. Licensed, insured, and trusted by thousands of homeowners across Lee, Collier, and Charlotte counties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:2399440073"
                  className="bg-green-600 hover:bg-green-700 text-black font-bold py-4 px-8 rounded-lg text-center transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-600/50"
                >
                  <AlertCircle className="w-5 h-5" />
                  Emergency Service Now
                </a>
                <a
                  href="#contact"
                  className="border-2 border-green-600 text-green-400 hover:bg-green-900/30 font-bold py-4 px-8 rounded-lg text-center transition-all"
                >
                  Free Estimate
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="border-l-2 border-green-600 pl-4">
                  <p className="text-3xl font-bold text-green-400">33+</p>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </div>
                <div className="border-l-2 border-green-600 pl-4">
                  <p className="text-3xl font-bold text-green-400">62</p>
                  <p className="text-gray-400 text-sm">5-Star Reviews</p>
                </div>
                <div className="border-l-2 border-green-600 pl-4">
                  <p className="text-3xl font-bold text-green-400">24/7</p>
                  <p className="text-gray-400 text-sm">Emergency Ready</p>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="bg-gradient-to-br from-green-600 to-green-900 rounded-2xl h-96 flex items-center justify-center shadow-2xl shadow-green-600/20">
                <Leaf className="w-24 h-24 text-black opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive Tree Care Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From routine maintenance to emergency response, we handle all your tree care needs with professional expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className="group bg-gray-900 border border-green-600/30 rounded-xl p-6 hover:shadow-xl hover:shadow-green-600/20 hover:border-green-500 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex items-center text-green-400 font-semibold group-hover:translate-x-2 transition-transform text-sm">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="areas" className="py-20 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Service Areas
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Proudly serving Southwest Florida with professional tree care services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl p-8 border border-green-600/30 hover:shadow-lg hover:shadow-green-600/20 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-white">{area.county}</h3>
                </div>
                <ul className="space-y-3">
                  {area.cities.map((city, cidx) => (
                    <li key={cidx} className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Work
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See the quality and professionalism of our completed projects across Southwest Florida.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {portfolioImages.map((image, idx) => (
              <div
                key={idx}
                className="group relative bg-gray-800 rounded-xl h-64 overflow-hidden hover:shadow-xl hover:shadow-green-600/30 transition-all cursor-pointer border border-green-600/20 hover:border-green-500"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Transform Your Landscape?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Get a free, no-obligation estimate from our team of certified arborists. We're available 24/7 for emergency services.
              </p>

              <div className="space-y-6">
                <a href="tel:2399440073" className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg border border-green-600/30 hover:border-green-500 hover:shadow-lg hover:shadow-green-600/20 transition-all">
                  <Phone className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg text-white">(239) 944-0073</p>
                    <p className="text-gray-400">Available 24/7 for emergencies</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg border border-green-600/30">
                  <MapPin className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg text-white">4332 NW 35th Ave</p>
                    <p className="text-gray-400">Cape Coral, FL 33993</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-gray-900 text-white p-8 rounded-xl space-y-4 border border-green-600/30">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-green-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-green-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 bg-gray-800 border border-green-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <textarea
                  placeholder="Tell us about your tree care needs..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-green-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-white placeholder-gray-500 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-black font-bold py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-green-600/50 flex items-center justify-center gap-2"
              >
                Request Free Estimate
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 px-4 border-t border-green-600/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-green-500" />
                <span className="font-bold text-white">Tree Care SWFL</span>
              </div>
              <p className="text-sm text-gray-500">
                Professional tree care services serving Southwest Florida since 1991. Licensed, insured, and dedicated to excellence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-green-400 transition-colors">Tree Removal</a></li>
                <li><a href="#services" className="hover:text-green-400 transition-colors">Tree Trimming</a></li>
                <li><a href="#services" className="hover:text-green-400 transition-colors">Stump Grinding</a></li>
                <li><a href="#services" className="hover:text-green-400 transition-colors">Emergency Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-green-400 transition-colors">Services</a></li>
                <li><a href="#areas" className="hover:text-green-400 transition-colors">Service Areas</a></li>
                <li><a href="#portfolio" className="hover:text-green-400 transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <p className="text-sm mb-2">(239) 944-0073</p>
              <p className="text-sm mb-2">Treesswfl@gmail.com</p>
              <p className="text-sm">Cape Coral, FL 33993</p>
            </div>
          </div>

          <div className="border-t border-green-600/30 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2026 Tree Care of SWFL LLC. All rights reserved. Licensed & Insured.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        details > summary::-webkit-details-marker {
          display: none;
        }
        details > summary {
          list-style: none;
        }
      `}</style>
    </div>
  );
}
