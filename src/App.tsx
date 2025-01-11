import React from 'react';
import { Axe, ChevronDown, MapPin, Phone, Mail, Star, Menu } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Axe className="h-8 w-8 text-amber-800" />
              <span className="text-xl font-semibold text-amber-900">Móveis Meotti</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-amber-800">Sobre</a>
              <a href="#services" className="text-gray-700 hover:text-amber-800">Serviços</a>
              <a href="#portfolio" className="text-gray-700 hover:text-amber-800">Portfólio</a>
              <a href="#products" className="text-gray-700 hover:text-amber-800">Produtos</a>
              <a href="#testimonials" className="text-gray-700 hover:text-amber-800">Depoimentos</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-800">Contato</a>
            </div>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Products />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;