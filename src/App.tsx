/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  X, 
  Plus, 
  Minus, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2,
  Package,
  CreditCard,
  Truck,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { PRODUCTS } from './constants';
import { Product, CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'info' | 'success'>('info');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Bottle1', 'Bottle2', 'Bottle3', 'Bottle4'];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-neutral-background text-text-primary selection:bg-accent selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 w-full h-16 md:h-24 px-6 md:px-10 flex items-center justify-between border-b border-border bg-white/80 backdrop-blur-xl z-50">
        <div className="flex items-center gap-2">
          <img 
            src="/images/icon/logo.png" 
            alt="Prismatama Logo" 
            className="h-10 md:h-20 w-auto object-contain"
          />
        </div>
        
        <nav className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-text-secondary">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#collection" className="hover:text-accent transition-colors">Products</a>
          <a href="#philosophy" className="hover:text-accent transition-colors">Vision</a>
          <a href="#location" className="hover:text-accent transition-colors">Location</a>
        </nav>

        <div className="flex items-center gap-6">
          <button 
            id="cart-trigger"
            onClick={() => setIsCartOpen(true)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center relative hover:border-accent transition-colors group"
          >
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 text-text-primary group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-[10px] w-5 h-5 rounded-full flex items-center justify-center text-white font-black animate-in zoom-in duration-300 shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="relative pt-16 md:pt-24">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 py-24 overflow-hidden bg-black text-white">
          {/* Background Layer */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/Hero.mp4" type="video/mp4" />
            </video>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20"
          >
            <span className="section-label !text-accent !text-sm !mb-8">PT Solusi Kemasan Prismatama</span>
            <h1 className="hero-text mb-12 text-white">
              PACKAGING<br/>
              <span className="hollow-text !text-white opacity-80">SYSTEMS</span><br/>
              EVOLVED
            </h1>
            
            <div className="flex flex-col md:flex-row gap-12 items-start md:items-end justify-between">
              <p className="max-w-md text-white/80 text-base leading-relaxed uppercase tracking-wider font-medium">
                Solusi Kemasan Prismatama provides high-durability protection for global logistics. 
                Engineered for resilience, designed for precision.
              </p>
              <a href="#collection" className="bg-white text-text-primary px-10 py-6 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-500 flex items-center gap-4 group shadow-xl">
                Explore The Catalog
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Company Profile Section */}
        <section id="about" className="py-32 bg-white border-b border-border">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="space-y-16">
              <div className="space-y-6">
                <span className="text-accent text-xs font-black uppercase tracking-[0.6em] block">Our Identity</span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-text-primary">
                  LEADING THE<br/><span className="text-accent">PACKAGING</span> ERA
                </h2>
              </div>
              
              <div className="space-y-10 max-w-2xl mx-auto">
                <p className="text-text-secondary text-lg md:text-xl leading-relaxed font-medium uppercase tracking-wider">
                  Solusi Kemasan Prismatama berdiri sebagai pemimpin dalam inovasi pengemasan industri sejak 1966. Kami adalah mitra strategis dalam rantai pasokan global Anda.
                </p>
                
                <p className="text-text-tertiary text-sm leading-relaxed uppercase tracking-[0.1em] font-medium opacity-80">
                  Kami mengintegrasikan teknologi manufaktur mutakhir dengan keberlanjutan lingkungan untuk memberikan proteksi maksimal pada aset berharga Anda. Komitmen kami adalah pada presisi, keandalan, dan efisiensi tanpa kompromi.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-16 pt-16 border-t border-border">
                <div className="space-y-1">
                  <h5 className="text-5xl font-black text-text-primary">150+</h5>
                  <p className="text-[11px] font-black uppercase tracking-widest text-text-tertiary">Industrial Clients</p>
                </div>
                <div className="space-y-1">
                  <h5 className="text-5xl font-black text-text-primary">24M</h5>
                  <p className="text-[11px] font-black uppercase tracking-widest text-text-tertiary">Units Shipped</p>
                </div>
                <div className="space-y-1">
                  <h5 className="text-5xl font-black text-text-primary">99%</h5>
                  <p className="text-[11px] font-black uppercase tracking-widest text-text-tertiary">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Bar */}
        <div className="sticky top-20 bg-white/95 backdrop-blur-md z-40 border-b border-border py-4">
          <div className="w-full mx-auto px-2 md:px-10">
            <div className="grid grid-cols-5 gap-1 md:gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-1 py-2 text-[7.5px] min-[380px]:text-[9px] md:text-[10px] uppercase font-black tracking-tighter md:tracking-widest border transition-all duration-300 rounded-sm flex items-center justify-center text-center leading-none ${
                    activeCategory === cat 
                      ? 'bg-accent border-accent text-white shadow-lg shadow-accent/20' 
                      : 'bg-transparent border-border text-text-tertiary hover:border-text-secondary hover:text-text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <section id="collection" className="px-6 md:px-10 py-32 min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="product-card group flex flex-col p-8 bg-white"
                >
                  <div className="aspect-square bg-surface overflow-hidden mb-10 relative rounded-sm">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <button 
                        onClick={() => addToCart(product)}
                        className="w-full py-5 bg-text-primary text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent transition-colors shadow-2xl"
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xs font-black uppercase tracking-widest group-hover:text-accent transition-colors text-text-primary">{product.name}</h3>
                      <p className="text-[10px] text-text-tertiary uppercase tracking-widest font-bold">{product.category}</p>
                    </div>
                    <span className="text-sm font-black text-accent">${product.price}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="bg-surface border-y border-border py-48">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="text-text-primary/[0.03] text-9xl md:text-[220px] font-black leading-none mb-24 tracking-tighter uppercase pointer-events-none select-none">VISION</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div>
                <p className="text-3xl md:text-5xl font-black leading-tight uppercase mb-12 text-text-primary">
                  WE DON'T JUST <span className="text-accent underline decoration-4 underline-offset-8">WRAP</span> PRODUCTS. <br/>
                  WE ENGINEER <span className="hollow-text italic">SURVIVAL</span>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h5 className="text-xs font-black uppercase tracking-widest mb-3 text-text-primary">Zero Failure</h5>
                      <p className="text-[11px] leading-relaxed text-text-secondary uppercase tracking-[0.1em] font-medium">Our materials exceed ISO standards for impact and stress resistance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h5 className="text-xs font-black uppercase tracking-widest mb-3 text-text-primary">Efficiency</h5>
                      <p className="text-[11px] leading-relaxed text-text-secondary uppercase tracking-[0.1em] font-medium">Optimized for speed in high-volume industrial shipping environments.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <img 
                  src="/images/DSC03905.jpg" 
                  alt="Industrial Logistics"
                  className="w-full aspect-[4/3] object-cover rounded-sm grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                />
                <div className="absolute -top-8 -left-8 bg-accent w-24 h-24 -z-10 rounded-sm opacity-50"></div>
                <div className="absolute -bottom-8 -right-8 bg-text-primary w-24 h-24 -z-20 rounded-sm opacity-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Map / Location Section */}
        <section id="location" className="py-48 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-32 items-center">
              <div className="flex-1 space-y-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 border border-accent/10 rounded-none text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                  <MapPin className="w-3 h-3" />
                  Headquarters
                </div>
                <h2 className="text-6xl font-black uppercase tracking-tighter leading-none text-text-primary">
                  LOCATE OUR <br/><span className="hollow-text">FACILITY</span>
                </h2>
                <p className="text-text-secondary text-base leading-relaxed max-w-sm uppercase tracking-wider font-medium">
                  Our strategic distribution centers are ready to fulfill your enterprise needs. 
                  Visit us in Prismatama for a direct consultation on your logistics infrastructure.
                </p>
                <div className="pt-12">
                  <a 
                    href="https://maps.app.goo.gl/3fXpGZ7zUv6D8mZk8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 group"
                  >
                    <span className="w-20 h-20 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-500 shadow-sm group-hover:shadow-accent/20">
                      <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform group-hover:text-white" />
                    </span>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-tertiary mb-1">Open in Maps</span>
                      <span className="text-sm font-black uppercase tracking-[0.1em] group-hover:text-accent transition-colors text-text-primary">Jl. Simo Kwagean No.22, Surabaya</span>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="flex-1 w-full aspect-video md:aspect-square bg-surface overflow-hidden relative border border-border shadow-2xl rounded-sm">
                <iframe
                  title="Company Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.1) brightness(0.95)' }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.771!2d112.723!3d-7.267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f93864455555%3A0x6d8f8a8a8a8a8a8a!2sJl.%20Simo%20Kwagean%20No.22%2C%20Petemon%2C%20Kec.%20Sawahan%2C%20Surabaya!5e0!3m2!1sen!2sid!4v1714150000000!5m2!1sen!2sid"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border-[32px] border-white"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-surface-muted border-y border-border py-40">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
              <div className="space-y-8 group">
                <div className="w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent">
                  <Truck className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-black uppercase tracking-tight text-text-primary">Global Express</h4>
                  <p className="text-[11px] text-text-secondary uppercase tracking-[0.2em] leading-relaxed font-bold">Integrated shipping solutions with real-time payload monitoring and global reach.</p>
                </div>
              </div>
              <div className="space-y-8 group">
                <div className="w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent">
                  <Package className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-black uppercase tracking-tight text-text-primary">Rapid Manifest</h4>
                  <p className="text-[11px] text-text-secondary uppercase tracking-[0.2em] leading-relaxed font-bold">Automated generation of packaging labels and enterprise-grade transit documentation.</p>
                </div>
              </div>
              <div className="space-y-8 group">
                <div className="w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent">
                  <CreditCard className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-black uppercase tracking-tight text-text-primary">Tiered Billing</h4>
                  <p className="text-[11px] text-text-secondary uppercase tracking-[0.2em] leading-relaxed font-bold">Flexible enterprise credit cycles and volume-based pricing for large-scale operations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-20 border-t border-border flex flex-col md:flex-row justify-between items-center gap-16 bg-white">
        <img 
          src="/images/icon/logo.png" 
          alt="Prismatama Logo" 
          className="h-16 w-auto grayscale opacity-80"
        />
        <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-text-tertiary text-center max-w-sm leading-relaxed">
          © 2024 SOLUSI KEMASAN PRISMATAMA CORP. <br/>ENGINEERING THE FUTURE OF LOGISTICS.
        </div>
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] font-black text-text-secondary">
          <a href="#" className="hover:text-accent transition-colors">Privacy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms</a>
          <a href="#" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </footer>

      {/* Cart Sidebar Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-text-primary/40 backdrop-blur-md z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
              className="fixed right-0 top-0 h-full w-full max-w-md cart-panel z-[70] flex flex-col shadow-2xl"
            >
              <div className="p-10 border-b border-border flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-text-primary">Payload Manifest</h3>
                <button onClick={() => setIsCartOpen(false)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-10 space-y-10">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                    <ShoppingBag className="w-12 h-12 mb-8 text-text-tertiary" />
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-tertiary">System Empty</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-8 group">
                      <div className="w-24 h-24 bg-surface border border-border overflow-hidden rounded-sm">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                      </div>
                      <div className="flex-grow flex flex-col pt-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-[11px] font-black uppercase tracking-widest text-text-primary">{item.name}</h4>
                          <button onClick={() => removeFromCart(item.id)} className="text-text-tertiary hover:text-accent transition-colors">
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-[9px] text-text-tertiary uppercase tracking-[0.3em] mb-6 font-bold">{item.category}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center border border-border rounded-sm">
                            <button onClick={() => updateQuantity(item.id, -1)} className="w-10 h-10 flex items-center justify-center hover:bg-surface transition-colors">
                              <Minus className="w-2.5 h-2.5" />
                            </button>
                            <span className="w-12 text-center text-[10px] font-black uppercase text-text-primary">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="w-10 h-10 flex items-center justify-center hover:bg-surface transition-colors">
                              <Plus className="w-2.5 h-2.5" />
                            </button>
                          </div>
                          <span className="text-[11px] font-black uppercase tracking-widest text-accent">${item.price * item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-10 border-t border-border bg-surface">
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-tertiary">Total Value</span>
                    <span className="text-2xl font-black text-accent tracking-tighter">${cartTotal.toLocaleString()}</span>
                  </div>
                  <button 
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsCheckoutOpen(true);
                      setCheckoutStep('info');
                    }}
                    className="w-full bg-text-primary text-white py-6 text-xs font-black uppercase tracking-[0.3em] hover:bg-accent transition-all shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-accent/30 flex items-center justify-center gap-4 group"
                  >
                    Initiate Dispatch
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Checkout Modal */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute inset-0 bg-text-primary/60 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white w-full max-w-xl border border-border shadow-2xl flex flex-col overflow-hidden rounded-sm"
            >
              {checkoutStep === 'info' ? (
                <div className="p-10 md:p-20">
                  <div className="flex items-center justify-between mb-16">
                    <h2 className="text-2xl font-black uppercase tracking-tighter text-text-primary">DISPATCH INFO</h2>
                    <button onClick={() => setIsCheckoutOpen(false)} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <form onSubmit={handleCheckout} className="space-y-12">
                    <div className="grid grid-cols-2 gap-10 text-left">
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.3em] font-black text-text-tertiary">First Name</label>
                        <input required type="text" className="input-field" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.3em] font-black text-text-tertiary">Last Name</label>
                        <input required type="text" className="input-field" />
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-left">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-black text-text-tertiary">Email Address</label>
                      <input required type="email" className="input-field" />
                    </div>

                    <div className="space-y-4 text-left">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-black text-text-tertiary">Shipping Protocol (Address)</label>
                      <input required type="text" className="input-field" />
                    </div>

                    <div className="pt-12 text-center">
                      <button className="w-full bg-text-primary text-white py-6 text-xs font-black uppercase tracking-[0.3em] hover:bg-accent transition-all shadow-xl hover:shadow-accent/30">
                        Confirm Purchase manifest
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setIsCheckoutOpen(false)}
                        className="mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-text-tertiary hover:text-accent transition-colors"
                      >
                        Abort Protocol
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="p-20 flex flex-col items-center text-center">
                  <div className="w-28 h-28 rounded-full bg-accent/10 border-4 border-accent flex items-center justify-center mb-12 shadow-[0_0_50px_rgba(255,77,0,0.2)]">
                    <CheckCircle2 className="w-14 h-14 text-accent" />
                  </div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 text-text-primary leading-tight">MANIFEST<br/>SECURED</h2>
                  <p className="text-text-secondary text-base leading-relaxed max-w-xs mb-16 uppercase tracking-widest font-medium">
                    Your industrial acquisition has been logged. Dispatch sequence beginning within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsCheckoutOpen(false)}
                    className="bg-text-primary text-white px-20 py-6 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-accent hover:text-white transition-all shadow-xl"
                  >
                    Return to Base
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
