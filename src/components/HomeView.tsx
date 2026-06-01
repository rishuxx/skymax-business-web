import { useState, ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from './SEO';
import { 
  ArrowUpRight, 
  Printer, 
  Laptop, 
  ShoppingCart, 
  Gift, 
  Briefcase, 
  Award, 
  Heart, 
  Users, 
  Landmark, 
  ShieldCheck, 
  Activity, 
  Mail, 
  Sliders, 
  Cpu, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { PageId, SolutionId } from '../types';
import { trustIndicators, solutionsData, supportTimelineSteps } from '../data';

// @ts-ignore
import canonLogo from '../assets/canon.png';
// @ts-ignore
import dellLogo from '../assets/dell.png';
// @ts-ignore
import hpLogo from '../assets/hp.png';
// @ts-ignore
import konicaLogo from '../assets/konica.png';

function PartnerLogo({ logo, name }: { logo: string; name: string }) {
  const [error, setError] = useState(false);
  
  // Custom brand-themed styles when operating in elegant fallback mode
  const getBrandStyle = () => {
    const lName = name.toLowerCase();
    if (lName.includes('canon')) {
      return {
        bg: 'bg-red-50/40 group-hover:bg-red-50/85',
        text: 'text-red-500/70 group-hover:text-red-600 font-sans tracking-wide',
        border: 'border-red-100/60',
        letter: 'Canon'
      };
    } else if (lName.includes('hp') || lName.includes('hewlett')) {
      return {
        bg: 'bg-blue-50/40 group-hover:bg-blue-50/85',
        text: 'text-neutral-500 group-hover:text-[#0B2E59] font-serif italic lowercase tracking-tight',
        border: 'border-blue-100/60',
        letter: 'hp'
      };
    } else if (lName.includes('dell')) {
      return {
        bg: 'bg-sky-50/40 group-hover:bg-sky-50/85',
        text: 'text-sky-500/70 group-hover:text-[#1D5EA8] font-sans font-bold uppercase tracking-wider',
        border: 'border-sky-100/60',
        letter: 'DELL'
      };
    } else {
      // Konica / default
      return {
        bg: 'bg-indigo-50/40 group-hover:bg-indigo-50/85',
        text: 'text-indigo-500/70 group-hover:text-indigo-800 font-sans tracking-wide',
        border: 'border-indigo-100/60',
        letter: 'Konica'
      };
    }
  };

  const style = getBrandStyle();

  if (error || !logo) {
    return (
      <div className={`w-28 h-28 rounded-full border border-dashed ${style.border} ${style.bg} flex items-center justify-center transition-all duration-300 shadow-xs`}>
        <span className={`text-xl font-bold uppercase ${style.text} transition-colors duration-300`}>
          {style.letter}
        </span>
      </div>
    );
  }

  return (
    <div className="w-28 h-28 rounded-full border border-neutral-100 bg-white flex items-center justify-center p-5 shadow-xs transition-shadow duration-300 overflow-hidden relative">
      <img 
        src={logo} 
        alt={`${name} logo`}
        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 z-10"
        onError={() => setError(true)}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

interface SliderRowProps {
  icon: ReactNode;
  title: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (val: number) => void;
  displayValue?: string;
  minLabel?: string;
  maxLabel?: string;
}

function SliderRow({ 
  icon, 
  title, 
  value, 
  min, 
  max, 
  step, 
  unit, 
  onChange,
  displayValue,
  minLabel,
  maxLabel
}: SliderRowProps) {
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
  const activeDisplay = displayValue || `${value} ${unit}`;
  const activeMinLabel = minLabel || `0 ${unit}`;
  const activeMaxLabel = maxLabel || `${max.toLocaleString()} Max`;

  return (
    <div className="space-y-3 bg-white border border-neutral-150 p-4 sm:p-5 rounded-2xl shadow-xs hover:shadow-md hover:border-blue-200/50 transition-all duration-300">
      <div className="flex justify-between items-center gap-2">
        <span className="font-display font-semibold text-neutral-800 text-xs flex items-center space-x-2">
          <span className="text-[#1D5EA8] shrink-0">{icon}</span>
          <span>{title}</span>
        </span>
        <span className="font-mono bg-blue-50 border border-blue-100/50 text-[#1D5EA8] font-bold px-2.5 py-0.5 rounded-lg text-[11px] shrink-0 shadow-2xs">
          {activeDisplay}
        </span>
      </div>
      
      <div className="flex items-center space-x-3 pt-1">
        {/* Decrement Button */}
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - step))}
          className="w-7 h-7 flex items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-500 hover:text-[#1D5EA8] hover:bg-blue-50 hover:border-blue-100 font-sans text-sm font-bold transition-all select-none active:scale-95 cursor-pointer shadow-3xs"
        >
          -
        </button>
        
        {/* Styled Interactive Progress Component */}
        <div className="flex-1 relative py-2 group/slider">
          {/* Static Track Background */}
          <div className="h-1.5 w-full bg-neutral-100 border border-neutral-200/40 rounded-full relative overflow-visible">
            {/* Active Fill Track */}
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#1D5EA8] to-[#0B2E59] rounded-full"
              style={{ width: `${pct}%` }}
            />
            {/* Custom Dot Thumb */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-4.5 h-4.5 rounded-full bg-white border-[3px] border-[#1D5EA8] shadow-[0_2px_6px_rgba(29,94,168,0.3)] transition-transform duration-100 group-hover/slider:scale-120 select-none pointer-events-none"
              style={{ left: `calc(${pct}% - 9px)` }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#0B2E59] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
          
          {/* Invisible interactive native slider range to intercept all touch/drag events */}
          <input 
            type="range" 
            min={min} 
            max={max} 
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full absolute inset-0 opacity-0 cursor-pointer h-full z-15"
          />
        </div>
        
        {/* Increment Button */}
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + step))}
          className="w-7 h-7 flex items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-500 hover:text-[#1D5EA8] hover:bg-blue-50 hover:border-blue-100 font-sans text-sm font-bold transition-all select-none active:scale-95 cursor-pointer shadow-3xs"
        >
          +
        </button>
      </div>

      <div className="flex justify-between text-[10px] font-mono text-neutral-400 font-normal px-0.5">
        <span>{activeMinLabel}</span>
        <span>{activeMaxLabel}</span>
      </div>
    </div>
  );
}

interface HomeViewProps {
  onNavigate: (page: PageId, solution?: SolutionId) => void;
}

const gridBgSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%230B2E59' fill-opacity='.015'/%3E%3C/svg%3E";

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      label: 'SKYMAX B2B SYSTEMS ORCHESTRATION',
      title: <>Delivering excellence <br />beyond possibilities.</>,
      description: 'Unified operations design for modern enterprises. We provision hardware, manage print document flow, and secure multi-branch supply networks under robust corporate SLAs.',
      link: 'solutions',
      solutionId: undefined,
      linkText: 'EXPLORE PORTFOLIO',
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
    },
    ...solutionsData.map((s, i) => {
      const images = [
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1600&auto=format&fit=crop", // Gifting
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80"
      ];
      return {
        label: s.category.toUpperCase(),
        title: <>{s.title}</>,
        description: s.shortDesc || s.description,
        link: 'solutions',
        solutionId: s.id,
        linkText: 'VIEW SOLUTION',
        image: images[i % images.length]
      };
    })
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Trigger smooth page navigations
  const handleNavClick = (page: PageId, solution?: SolutionId) => {
    onNavigate(page, solution);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceIconMap = {
    'printing-document-management': Printer,
    'it-hardware-office-automation': Laptop,
    'corporate-procurement': ShoppingCart,
    'corporate-gifting': Gift,
    'travel-event-management': Briefcase,
    'training-solutions': Award,
    'wellness-solutions': Heart,
  };

  // Modern structured cards with super small descriptions
  const featureCards = [
    {
      title: 'Industry Experts',
      tag: '#GLOBAL EXPERTISE',
      description: 'Accredited engineers directly vetted by Skymax to deploy systems with elite compliance and absolute transparency.',
      icon: Users,
    },
    {
      title: 'Large Capital Base',
      tag: '#UNIFIED ROLLOUTS',
      description: 'Strong capitalization enabling high-density bare-metal procurement and seamless nationwide scaling.',
      icon: Landmark,
    },
    {
      title: 'In-House Vetted Team',
      tag: '#ACCOUNTABILITY',
      description: 'Direct corporate employees handling your sensitive operational flow with zero sub-contracting risk.',
      icon: ShieldCheck,
    },
    {
      title: 'Pan India Coverage',
      tag: '#METRO ROUTING',
      description: 'Connected network across key commercial metros with guaranteed high-availability spare delivery pools.',
      icon: Activity,
    },
    {
      title: 'Deep Integrity',
      tag: '#COMPLIANT AUDIT',
      description: 'Clear reporting, line-item accountability, and direct relationship channels that reduce administrative friction.',
      icon: Mail,
    },
    {
      title: 'Tailored Telemetry',
      tag: '#DIAGNOSTICS',
      description: 'Engineered custom integrations prioritizing your team’s active workflows and hardware cycles over generic templates.',
      icon: Sliders,
    },
  ];

  // Modern Workflow Steps
  const workSteps = [
    {
      step: '01',
      title: 'Telemetry Audit',
      tag: '#SYSTEMS ANALYSIS',
      desc: 'Physical & diagnostic systems evaluation to uncover structural optimization targets.',
    },
    {
      step: '02',
      title: 'SLA Blueprints',
      tag: '#SOLUTION DESIGN',
      desc: 'Formulate itemized layout designs matched to your core operational volume parameters.',
    },
    {
      step: '03',
      title: 'Commissioning',
      tag: '#NATIONWIDE DEPLOY',
      desc: 'Rapid equipment staging, software image loads, and deployment with zero workflow friction.',
    },
    {
      step: '04',
      title: 'Continuous NOC',
      tag: '#AUTOMATED PARTS',
      desc: 'Predictive maintenance, automated consumable dispatches, and priority response response keys.',
    },
  ];

  // Professional minimalistic animation specs
  const fReveal = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
  };

  const fStgContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const fStgItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div id="home-view-container" className="bg-[#FFFFFF] text-[#000000] font-sans antialiased overflow-x-hidden">
      <SEO 
        title="Global Enterprise IT Operations & Procurement" 
        description="Skymax Business Solutions orchestrates hardware provisioning, managed print services, business automation, and multi-branch rollouts." 
        keywords="IT hardware leasing, managed print services, corporate IT procurement, business automation, B2B IT support, enterprise solutions" 
        canonical="/"
      />
      
      {/* SECTION 1: HERO - ULTRA MODERN, TITANIC TYPOGRAPHY (Now Carousel) */}
      <section 
        id="home-hero-section" 
        className="group relative bg-[#FAF9F5] pt-40 pb-24 md:pt-52 md:pb-36 lg:pt-60 lg:pb-40 border-b border-neutral-200/60 overflow-hidden"
      >
        {/* 1. Background Image behind grid lines */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none z-0 overflow-hidden">
          {/* Edge fades for seamless page integration */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF9F5] to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF9F5] to-transparent z-10" />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/85 lg:via-[#FAF9F5]/30 to-transparent z-10" />
          
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              src={heroSlides[currentSlide].image}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out scale-100 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </div>

        {/* 2. Grid Pattern Overlay on top of the image */}
        <div 
          className="absolute inset-0 pointer-events-none z-10 opacity-70"
          style={{ backgroundImage: `url("${gridBgSvg}")` }}
        />

        {/* 3. Sleek radial gradient behind hero content */}
        <div className="absolute inset-0 z-10 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_70%_30%,#D5E5FF_0%,transparent_60%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          
          <div className="max-w-4xl flex flex-col justify-center space-y-8 text-left h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
                  exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
                }}
                className="flex flex-col space-y-8"
              >
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                  }}
                  className="inline-flex items-center space-x-2.5"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1D5EA8] animate-pulse"></span>
                  <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#1D5EA8] uppercase">
                    {heroSlides[currentSlide].label}
                  </span>
                </motion.div>

                {/* Massive Modern Title */}
                <motion.h1 
                  variants={{
                    hidden: { opacity: 0, y: 35 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="text-5xl sm:text-7.5xl lg:text-8xl font-sans font-bold tracking-[-0.04em] text-[#0B2E59] leading-[1.05] select-none"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>

                {/* Minimal Descriptions */}
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
                  }}
                  className="text-base sm:text-lg text-neutral-600 font-light max-w-xl leading-relaxed min-h-[4.5rem]"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>

                {/* Modern Action Controllers */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
                  }}
                  className="flex flex-wrap items-center gap-4 pt-4"
                >
                  <button
                    onClick={() => handleNavClick(heroSlides[currentSlide].link as PageId, heroSlides[currentSlide].solutionId as SolutionId)}
                    className="group bg-[#0B2E59] hover:bg-[#1D5EA8] text-[#FFFFFF] px-8 py-4 rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-all flex items-center space-x-3.5 shadow-sm hover:shadow-lg"
                  >
                    <span>{heroSlides[currentSlide].linkText}</span>
                    <ArrowUpRight className="w-4.5 h-4.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="bg-white hover:bg-neutral-100 text-[#0B2E59] border border-neutral-300 px-8 py-4 rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-all"
                  >
                    CONTACT OFFICE
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators / Controls under actions */}
            <div className="flex items-center space-x-3 pt-6 pointer-events-auto z-30">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === currentSlide 
                      ? 'w-8 bg-[#1D5EA8]' 
                      : 'w-4 bg-[#1D5EA8]/20 hover:bg-[#1D5EA8]/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Key Highlights Metrics - Static at bottom of hero content */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              className="pt-10 border-t border-neutral-200/80 grid grid-cols-3 gap-6 max-w-lg relative z-10"
            >
              <div>
                <p className="text-2xl font-mono font-bold text-[#0B2E59]">99.9%</p>
                <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-0.5">SLA Guaranteed Uptime</p>
              </div>
              <div>
                <p className="text-2xl font-mono font-bold text-[#0B2E59]">&lt;4 HR</p>
                <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-0.5">Branch On-site Response</p>
              </div>
              <div>
                <p className="text-2xl font-mono font-bold text-[#0B2E59]">152+</p>
                <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-0.5">India Support Nodes</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: AUTHORIZED OEM STRIP - AGENT LANDSCAPE LOOK */}
      <section id="home-trust-indicators" className="bg-[#FFFFFF] bg-grid-pattern py-16 border-b border-neutral-200/50">
        <motion.div 
          {...fReveal}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20"
        >
          
          {/* Label Strip */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="inline-block text-[11px] font-mono font-bold tracking-[0.2em] text-[#1D5EA8] uppercase">
                OFFICIAL B2B SYSTEM INTEGRATION &amp; PLATFORM ALLIANCES
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-400">STATUS: APPROVED FOR ACTIVE ENTERPRISE PROCUREMENT</span>
          </div>

          {/* Grid of clean circular logo branding alignments */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-6">
            {[
              { name: 'Canon Systems', logo: canonLogo },
              { name: 'HP Enterprise', logo: hpLogo },
              { name: 'Dell Technologies', logo: dellLogo },
              { name: 'Konica Minolta', logo: konicaLogo }
            ].map((partner) => (
              <motion.div 
                key={partner.name} 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex flex-col items-center justify-center text-center space-y-4 group cursor-pointer"
              >
                <div className="flex justify-center items-center">
                  <PartnerLogo logo={partner.logo} name={partner.name} />
                </div>
                <h4 className="font-display font-medium text-neutral-700 text-sm md:text-base tracking-tight group-hover:text-[#1D5EA8] transition-colors duration-250">
                  {partner.name}
                </h4>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </section>

      {/* SECTION 3: CORE SOLUTIONS Showcase - THE "ISORA/PHENOMENON" CASE SHOWCASE STYLE */}
      <section id="home-business-solutions" className="bg-[#FFFFFF] bg-grid-pattern py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Header layout: Giant Title, Minimal Description Side-by-Side */}
          <motion.div 
            {...fReveal}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-neutral-200 pb-12 text-left"
          >
            <div className="lg:col-span-8">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#1D5EA8] uppercase">
                #PORTFOLIO OF CAPABILITIES
              </span>
              <h2 className="text-4xl sm:text-6xl font-sans font-bold tracking-[-0.03em] text-[#0B2E59] leading-[1.1] mt-3">
                Operational nodes <br />
                made simple.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                We take multi-branch procurement, physical hardware provisioning, print fleet audits, and organizational upskilling to the absolute next level. Guided by rigid governance.
              </p>
            </div>
          </motion.div>

          {/* Solutions Stack: Giant Cards resembling Case Studies */}
          <motion.div 
            variants={fStgContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10"
          >
            {solutionsData.map((sol, index) => {
              const Icon = serviceIconMap[sol.id] || Laptop;
              
              // We style the first two items inside a balanced asymmetric showcase layout
              return (
                <motion.div 
                  variants={fStgItem}
                  key={sol.id}
                  onClick={() => handleNavClick('solution-detail', sol.id)}
                  whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
                  className={`cursor-pointer group flex flex-col justify-between border border-neutral-200 hover:border-[#1D5EA8] p-8 sm:p-10 rounded-3xl transition-all duration-300 hover:shadow-xl bg-[#FAF9F5]/80 hover:bg-white ${
                    index === 0 || index === 1 ? 'lg:col-span-6' : 'lg:col-span-4'
                  }`}
                >
                  <div className="space-y-6">
                    {/* Upper row: Tag and Icon */}
                    <div className="flex items-center justify-between pb-4 border-b border-neutral-200/40">
                      <span className="text-[9px] font-mono font-black tracking-widest text-[#1D5EA8] uppercase">
                        {sol.category}
                      </span>
                      <div className="p-2 bg-white rounded-xl border border-neutral-200 shrink-0 text-[#1D5EA8] group-hover:bg-[#1D5EA8] group-hover:text-white group-hover:shadow transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-left space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0B2E59] tracking-tight group-hover:text-[#1D5EA8] transition-colors leading-snug">
                        {sol.title}
                      </h3>
                      <p className="text-sm text-neutral-500 font-light leading-relaxed">
                        {sol.shortDesc}
                      </p>
                    </div>

                    {/* Metadata details list */}
                    <div className="grid grid-cols-2 gap-4 text-left pt-4 font-mono">
                      <div>
                        <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">STANDARD ARRANGEMENT</p>
                        <p className="text-xs text-neutral-700 font-medium mt-0.5">Asset Lease Option</p>
                      </div>
                      <div>
                        <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">MOBILIZATION PERIOD</p>
                        <p className="text-xs text-neutral-700 font-medium mt-0.5">&lt; 3 Business Days</p>
                      </div>
                    </div>
                  </div>

                  {/* Action row at bottom */}
                  <div className="pt-8 mt-8 border-t border-neutral-200/50 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#1D5EA8] group-hover:text-[#0B2E59]">
                    <span>VIEW SOLUTIONS MATRIX</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* SECTION 4: PROFESSIONAL GOVERNANCE - THE "PHENOMENON" METRO ALIGNMENT LINE */}
      <section id="home-how-we-work" className="bg-[#FAF9F5] bg-grid-pattern py-24 md:py-32 border-y border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Header */}
          <motion.div 
            {...fReveal}
            className="flex flex-col items-center text-center max-w-3xl mx-auto gap-5 md:gap-6"
          >
            <span className="inline-block bg-blue-50 border border-neutral-200 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold text-[#1D5EA8] uppercase tracking-[0.2em]">
              THE SYSTEM IN PERSPECTIVE
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#0B2E59] tracking-[-0.03em] leading-tight">
              Our implementation flow
            </h2>
            <p className="text-sm text-neutral-500 font-light max-w-md mx-auto leading-relaxed">
              Vetted blueprints design, structured corporate operations pipelines, and active compliance screening.
            </p>
          </motion.div>

          {/* Stepped Timeline - Modern Layout */}
          <motion.div 
            variants={fStgContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          >
            {workSteps.map((step) => (
              <motion.div 
                variants={fStgItem}
                key={step.step}
                className="bg-white border border-neutral-200/80 p-8 rounded-3xl text-left flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:border-[#1D5EA8]"
              >
                <div>
                  <span className="text-4xl font-mono font-black text-neutral-200 block mb-4">
                    {step.step}
                  </span>
                  <p className="inline-block text-[9px] font-mono font-bold text-[#1D5EA8] uppercase tracking-wider block">
                    {step.tag}
                  </p>
                  <h3 className="text-base font-bold font-display text-[#0B2E59] tracking-tight mt-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed mt-2.5">
                    {step.desc}
                  </p>
                </div>
                <div className="w-10 h-1.5 bg-neutral-100 rounded-full mt-6"></div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* SECTION 6: STRUCTURAL PUSH / PILLARS - THE "WINS THAT INSPIRE US FORWARD" DESIGN MATRIX */}
      <section id="home-why-skymax" className="bg-[#FAF9F5] bg-grid-pattern py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          <motion.div 
            {...fReveal}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-neutral-200 pb-12 text-left"
          >
            <div className="lg:col-span-8">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#1D5EA8] uppercase">
                #WHY MULTI-BRANCH ENTERPRISES TRUST SKYMAX
              </span>
              <h2 className="text-4xl sm:text-6xl font-display tracking-[-0.03em] text-[#0B2E59] leading-[1.05] mt-3">
                <span className="font-light text-[#0B2E59]">Pillars of </span>
                <span className="font-semibold">constant</span> <br />
                <span className="font-display font-light text-[#1D5EA8] select-none">reliability.</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                We maintain extreme ownership over the active pipeline. Direct field engineers, large asset holding lines, and responsive transparent auditing paths.
              </p>
            </div>
          </motion.div>

          {/* Cards styled exactly like reference image 2 (Thin boundaries, minimal description, view button) */}
          <motion.div 
            variants={fStgContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featureCards.map((feat) => {
              const Icon = feat.icon;
              return (
                <motion.div 
                  variants={fStgItem}
                  key={feat.title}
                  whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
                  className="bg-white border border-neutral-200/80 hover:border-[#1D5EA8] p-8 rounded-3xl flex flex-col justify-between text-left space-y-6 transition-all duration-300 group hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono font-black tracking-widest text-[#1D5EA8]">
                        {feat.tag}
                      </span>
                      <div className="p-2.5 bg-[#FAF9F5] rounded-xl text-[#0B2E59] group-hover:bg-[#0B2E59] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-display font-semibold text-[#0B2E59] text-xl tracking-tight leading-snug">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div 
                    onClick={() => handleNavClick('why-skymax')}
                    className="pt-4  border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 group-hover:text-[#1D5EA8] transition-colors cursor-pointer"
                  >
                    <span>ANALYZE METRICS PROFILE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* SECTION 7: AMC TIMELINE & DISPATCH ENGINE */}
      <section id="home-support-system" className="bg-[#FFFFFF] bg-grid-pattern py-24 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <motion.div 
            {...fReveal}
            className="flex flex-col items-center text-center max-w-3xl mx-auto gap-5 md:gap-6"
          >
            <span className="inline-block bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold text-[#1D5EA8] uppercase tracking-[0.25em]">
              PREDICTIVE MAINTENANCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display text-[#0B2E59] tracking-[-0.03em] leading-tight">
              Support <span className="font-display font-light text-[#1D5EA8] px-1 select-none">timeline</span> phase
            </h2>
            <p className="text-sm text-neutral-500 font-light max-w-md mx-auto">
              Our structured flow guarantees continuous asset operation with zero administrative latency.
            </p>
          </motion.div>

          <motion.div 
            variants={fStgContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative max-w-4xl mx-auto space-y-8"
          >
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-neutral-200"></div>

            {supportTimelineSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  variants={fStgItem}
                  key={idx} 
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Timeline bullet dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-3.5 h-3.5 bg-[#1D5EA8] rounded-full transform -translate-x-[5px] border-2 border-white z-10 shadow-sm"></div>

                  {/* Left Box */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right ${isEven ? 'md:block' : 'md:hidden'}`}>
                    <div className="bg-[#FAF9F5] border border-neutral-200 p-6 rounded-3xl inline-block w-full max-w-md text-left transition-all duration-300 hover:border-[#1D5EA8] hover:shadow-md">
                      <span className="text-[9px] font-mono font-bold text-[#1D5EA8] uppercase tracking-wider block mb-1">
                        {step.phase}
                      </span>
                      <h4 className="font-display font-bold text-neutral-900 text-sm">{step.title}</h4>
                      <p className="text-xs text-neutral-500 font-light leading-relaxed mt-2">{step.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2"></div>

                  {/* Right Boxs */}
                  <div className={`w-full md:w-1/2 pl-12 text-left ${!isEven ? 'md:block' : 'md:hidden'}`}>
                    <div className="bg-[#FAF9F5] border border-neutral-200 p-6 rounded-3xl inline-block w-full max-w-md transition-all duration-300 hover:border-[#1D5EA8] hover:shadow-md">
                      <span className="text-[9px] font-mono font-bold text-[#1D5EA8] uppercase tracking-wider block mb-1">
                        {step.phase}
                      </span>
                      <h4 className="font-display font-bold text-neutral-900 text-sm">{step.title}</h4>
                      <p className="text-xs text-neutral-500 font-light leading-relaxed mt-2">{step.description}</p>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>

          <motion.div 
            {...fReveal}
            className="text-center pt-8"
          >
            <button 
              onClick={() => handleNavClick('support-amc')}
              className="group bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all inline-flex items-center space-x-3 shadow-md"
            >
              <span>READ AMC SLA HANDBOOK</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* SECTION 8: IMPACTFUL CALL TO ACTION BANNER */}
      <section id="home-cta-banner" className="bg-[#0b172a] text-white py-24 relative overflow-hidden text-left border-t border-neutral-800">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_30%_80%,#1D5EA8_0%,transparent_50%)]"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8"
        >
          <span className="text-[10px] font-mono font-bold text-sky-400 tracking-[0.3em] uppercase block">
            #DEPLOY DISPATCH CORE
          </span>
          <h2 className="text-4xl sm:text-6xl font-display tracking-[-0.03em] leading-tight max-w-3xl">
            Ready to take your workplace <br />
            <span className="font-display font-light text-[#3D9FFF] select-none">
              to the next level?
            </span>
          </h2>
          <p className="text-sm text-neutral-400 max-w-lg font-light leading-relaxed">
            Submit your core metrics, schedule custom telecom audits, and get on-site blueprints designed by qualified Skymax technicians.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-[#3D9FFF] hover:bg-sky-400 text-white px-8 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all"
            >
              REQUEST CONSULTATION
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-transparent hover:bg-white/10 text-white border border-neutral-700 hover:border-neutral-500 px-8 py-3.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all"
            >
              GET QUOTE
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
