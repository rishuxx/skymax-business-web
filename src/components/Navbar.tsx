import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, ArrowRight, Printer, Laptop, ShoppingCart, Gift, Briefcase, Award, Heart, Phone } from 'lucide-react';
import { PageId, SolutionId } from '../types';
import SkymaxLogo from './SkymaxLogo';

interface NavbarProps {
  currentPage: PageId;
  currentSolutionId: SolutionId | null;
  onNavigate: (page: PageId, solution?: SolutionId) => void;
}

export default function Navbar({ currentPage, currentSolutionId, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState<string | null>(null);

  // Monitor scroll state for styling feedback
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on transition
  const handleNavClick = (page: PageId, solution?: SolutionId) => {
    onNavigate(page, solution);
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    setActiveMobileSub(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuCategories = [
    {
      title: 'Business Infrastructure',
      links: [
        {
          id: 'printing-document-management' as SolutionId,
          title: 'Printing & Document Management',
          desc: 'Managed Print Services & secure document flow',
          icon: Printer,
          color: 'text-blue-600',
        },
        {
          id: 'it-hardware-office-automation' as SolutionId,
          title: 'IT Hardware & Office Automation',
          desc: 'Bare-metal, client leasing, & smart boards',
          icon: Laptop,
          color: 'text-indigo-600',
        },
      ],
    },
    {
      title: 'Business Services',
      links: [
        {
          id: 'corporate-procurement' as SolutionId,
          title: 'Corporate Procurement',
          desc: 'Volume procurement contracts & logistics',
          icon: ShoppingCart,
          color: 'text-sky-600',
        },
        {
          id: 'corporate-gifting' as SolutionId,
          title: 'Corporate Gifting',
          desc: 'Premium bespoke hampers & hire packages',
          icon: Gift,
          color: 'text-violet-600',
        },
        {
          id: 'travel-event-management' as SolutionId,
          title: 'Travel & Event Management',
          desc: 'Enterprise flights, AGMs & MICE events',
          icon: Briefcase,
          color: 'text-cyan-600',
        },
      ],
    },
    {
      title: 'People & Development',
      links: [
        {
          id: 'training-solutions' as SolutionId,
          title: 'Training Solutions',
          desc: 'Tech bootcamps, upskilling & executive leadership',
          icon: Award,
          color: 'text-teal-600',
        },
        {
          id: 'wellness-solutions' as SolutionId,
          title: 'Wellness Solutions',
          desc: 'Preventative screenings & mental stamina',
          icon: Heart,
          color: 'text-rose-600',
        },
      ],
    },
  ];

  return (
    <header
      id="main-navbar-header"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-none px-4 py-3 md:py-5"
    >
      <div 
        className={`mx-auto max-w-7xl w-full pointer-events-auto transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          isScrolled
            ? 'bg-white/75 backdrop-blur-xl shadow-xl rounded-full border border-neutral-200/40 py-2.5 max-w-6xl'
            : 'bg-[#FAF9F5]/40 backdrop-blur-md py-3.5 border border-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo on Left */}
          <div
            id="navbar-logo-container"
            onClick={() => handleNavClick('home')}
            className="flex items-center cursor-pointer py-1 pl-1 gap-2"
          >
            <SkymaxLogo 
              className="h-7 sm:h-8 w-auto text-[#0B2E59]" 
              mode="currentColor"
            />
            <span className="font-mono text-[8px] sm:text-[9px] text-[#0B2E59]/40 tracking-wider self-end pb-0.5 sm:pb-1 select-none font-medium">
              LLPIN: ACX-1360
            </span>
          </div>

          {/* Navigation Center Aligned */}
          <nav id="navbar-nav-center" className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase rounded-full transition-colors ${
                currentPage === 'home'
                  ? 'text-[#1D5EA8] bg-blue-50'
                  : 'text-gray-700 hover:text-[#1D5EA8]'
              }`}
            >
              Home
            </button>
            
            <button
              onClick={() => handleNavClick('about')}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase rounded-full transition-colors ${
                currentPage === 'about'
                  ? 'text-[#1D5EA8] bg-blue-50'
                  : 'text-gray-700 hover:text-[#1D5EA8]'
              }`}
            >
              About
            </button>

            {/* Custom Interactive Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase rounded-full transition-colors ${
                  currentPage === 'solutions' || currentPage === 'solution-detail'
                    ? 'text-[#1D5EA8] bg-blue-50'
                    : 'text-gray-700 hover:text-[#1D5EA8]'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Overlay */}
              <AnimatePresence>
                {megaMenuOpen && (
                  <motion.div
                    id="navbar-mega-menu"
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-4.5 w-[52rem] max-w-5xl bg-white border border-neutral-200/50 rounded-[2rem] shadow-[0_25px_60px_-15px_rgba(11,46,89,0.12)] p-7 grid grid-cols-3 gap-6"
                    style={{ zIndex: 100 }}
                  >
                    {[
                      {
                        title: 'Business Infrastructure',
                        links: [
                          {
                            id: 'printing-document-management' as SolutionId,
                            title: 'Printing & Document',
                            desc: 'Managed Print Services & secure document flow',
                            icon: Printer,
                            bg: 'bg-blue-50/40',
                            border: 'border-blue-100/50',
                            iconColor: 'text-[#0B2E59]',
                            hoverBg: 'group-hover/item:bg-blue-50 group-hover/item:border-blue-200/50'
                          },
                          {
                            id: 'it-hardware-office-automation' as SolutionId,
                            title: 'IT Hardware & IT Systems',
                            desc: 'Bare-metal, client leasing, & smart boards',
                            icon: Laptop,
                            bg: 'bg-blue-50/40',
                            border: 'border-blue-100/50',
                            iconColor: 'text-[#0B2E59]',
                            hoverBg: 'group-hover/item:bg-blue-50 group-hover/item:border-blue-200/50'
                          },
                        ],
                      },
                      {
                        title: 'Business Services',
                        links: [
                          {
                            id: 'corporate-procurement' as SolutionId,
                            title: 'Corporate Procurement',
                            desc: 'Volume procurement contracts & logistics',
                            icon: ShoppingCart,
                            bg: 'bg-blue-50/40',
                            border: 'border-blue-100/50',
                            iconColor: 'text-[#0B2E59]',
                            hoverBg: 'group-hover/item:bg-blue-50 group-hover/item:border-blue-200/50'
                          },
                          {
                            id: 'corporate-gifting' as SolutionId,
                            title: 'Corporate Gifting',
                            desc: 'Premium bespoke hampers & hire packages',
                            icon: Gift,
                            bg: 'bg-blue-50/40',
                            border: 'border-blue-100/50',
                            iconColor: 'text-[#0B2E59]',
                            hoverBg: 'group-hover/item:bg-blue-50 group-hover/item:border-blue-200/50'
                          },
                          {
                            id: 'travel-event-management' as SolutionId,
                            title: 'Travel & Event Management',
                            desc: 'Enterprise flights, AGMs & MICE events',
                            icon: Briefcase,
                            bg: 'bg-blue-50/40',
                            border: 'border-blue-100/50',
                            iconColor: 'text-[#0B2E59]',
                            hoverBg: 'group-hover/item:bg-blue-50 group-hover/item:border-blue-200/50'
                          },
                        ],
                      },
                      {
                        title: 'People & Development',
                        links: [
                          {
                            id: 'training-solutions' as SolutionId,
                            title: 'Training Solutions',
                            desc: 'Tech bootcamps, upskilling & executive leadership',
                            icon: Award,
                            bg: 'bg-blue-50/40',
                            border: 'border-blue-100/50',
                            iconColor: 'text-[#0B2E59]',
                            hoverBg: 'group-hover/item:bg-blue-50 group-hover/item:border-blue-200/50'
                          },
                          {
                            id: 'wellness-solutions' as SolutionId,
                            title: 'Wellness Solutions',
                            desc: 'Preventative screenings & mental stamina',
                            icon: Heart,
                            bg: 'bg-blue-50/40',
                            border: 'border-blue-100/50',
                            iconColor: 'text-[#0B2E59]',
                            hoverBg: 'group-hover/item:bg-blue-50 group-hover/item:border-blue-200/50'
                          },
                        ],
                      },
                    ].map((cat, idx) => (
                      <div key={idx} className="space-y-4 border-r last:border-r-0 border-neutral-100 pr-5 last:pr-0">
                        <div className="px-3 pb-1 flex items-center">
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 font-mono">
                            {cat.title}
                          </h4>
                        </div>
                        <div className="flex flex-col items-start gap-2 text-left">
                          {cat.links.map((link) => {
                            const Icon = link.icon;
                            const isCurrent = currentSolutionId === link.id && currentPage === 'solution-detail';
                            return (
                              <button
                                key={link.id}
                                onClick={() => handleNavClick('solution-detail', link.id)}
                                className={`w-full text-left flex items-start space-x-3.5 p-3 rounded-2xl transition-all duration-300 hover:bg-neutral-50/60 border border-transparent hover:border-neutral-100/80 group/item relative ${
                                  isCurrent ? 'bg-blue-50/40 border-blue-100/60' : ''
                                }`}
                              >
                                {isCurrent && (
                                  <span className="absolute left-0 top-3 bottom-3 w-1 bg-[#1D5EA8] rounded-r-full" />
                                )}
                                <div className={`p-2 rounded-xl shrink-0 transition-all duration-300 ${link.bg} border ${link.border} ${link.iconColor} ${link.hoverBg} group-hover/item:scale-105 group-hover/item:shadow-sm`}>
                                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                                </div>
                                <div className="flex-1 min-w-0 space-y-0.5">
                                  <p className="text-xs font-bold text-[#0B2E59] group-hover/item:text-[#1D5EA8] transition-colors duration-200 line-clamp-1 flex items-center justify-between">
                                    <span>{link.title}</span>
                                    <ArrowRight className="w-3 h-3 text-neutral-300 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 -translate-x-1 transition-all duration-200 stroke-[2.5]" />
                                  </p>
                                  <p className="text-[10px] text-gray-400 line-clamp-2 leading-relaxed font-light group-hover/item:text-gray-500 transition-colors duration-200">
                                    {link.desc}
                                  </p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                    <div className="col-span-3 bg-[#FAF9F5]/80 -mx-7 -mb-7 p-4.5 rounded-b-[2rem] border-t border-neutral-150/40 flex justify-between items-center px-7">
                      <div className="flex items-center space-x-2">
                        <span className="relative flex h-1.5 w-1.5 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D5EA8]/40 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#1D5EA8]"></span>
                        </span>
                        <p className="text-[10px] text-neutral-400 font-mono tracking-wider uppercase">
                          Tailored business models and custom SLA frameworks.
                        </p>
                      </div>
                      <button
                        onClick={() => handleNavClick('solutions')}
                        className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1D5EA8] hover:text-[#0B2E59] flex items-center space-x-1 transition-colors duration-200"
                      >
                        <span>View Solutions Matrix</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNavClick('why-skymax')}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase rounded-full transition-colors ${
                currentPage === 'why-skymax'
                  ? 'text-[#1D5EA8] bg-blue-50'
                  : 'text-gray-700 hover:text-[#1D5EA8]'
              }`}
            >
              Why Skymax
            </button>

            <button
              onClick={() => handleNavClick('support-amc')}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase rounded-full transition-colors ${
                currentPage === 'support-amc'
                  ? 'text-[#1D5EA8] bg-blue-50'
                  : 'text-gray-700 hover:text-[#1D5EA8]'
              }`}
            >
              Support &amp; AMC
            </button>

            <button
              onClick={() => handleNavClick('pricing')}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase rounded-full transition-colors ${
                currentPage === 'pricing'
                  ? 'text-[#1D5EA8] bg-blue-50'
                  : 'text-gray-700 hover:text-[#1D5EA8]'
              }`}
            >
              Pricing
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase rounded-full transition-colors ${
                currentPage === 'contact'
                  ? 'text-[#1D5EA8] bg-blue-50'
                  : 'text-gray-700 hover:text-[#1D5EA8]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* CTA Button on Right */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-[#0B2E59] hover:bg-[#1D5EA8] text-[#FFFFFF] px-6 py-2.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase shadow-sm hover:shadow transition-all duration-250 flex items-center space-x-1"
            >
              <span>Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#0B2E59] p-2 rounded-md hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-neutral-100 overflow-y-auto max-h-[calc(100vh-80px)] shadow-xl rounded-[2rem] pointer-events-auto mt-2"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              <button
                onClick={() => handleNavClick('home')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-900 hover:bg-gray-50 block"
              >
                Home
              </button>
              
              <button
                onClick={() => handleNavClick('about')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-900 hover:bg-gray-50 block"
              >
                About Us
              </button>

              {/* Collapsible Mobile Mega Menu */}
              <div className="border-b border-gray-50 pb-2">
                <button
                  onClick={() => setActiveMobileSub(activeMobileSub === 'solutions' ? null : 'solutions')}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${activeMobileSub === 'solutions' ? 'rotate-180' : ''}`} />
                </button>

                {activeMobileSub === 'solutions' && (
                  <div className="pl-4 mt-2 space-y-4">
                    {menuCategories.map((cat, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 pl-3">
                          {cat.title}
                        </div>
                        <div className="space-y-1 pl-1">
                          {cat.links.map((link) => (
                            <button
                              key={link.id}
                              onClick={() => handleNavClick('solution-detail', link.id)}
                              className="w-full text-left py-2 px-3 text-sm font-medium text-gray-700 hover:text-[#1D5EA8] rounded-md hover:bg-gray-50 flex items-center space-x-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1D5EA8]"></span>
                              <span>{link.title}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('why-skymax')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-900 hover:bg-gray-50 block"
              >
                Why Skymax
              </button>

              <button
                onClick={() => handleNavClick('support-amc')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-900 hover:bg-gray-50 block"
              >
                Support & AMC
              </button>

              <button
                onClick={() => handleNavClick('pricing')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-900 hover:bg-gray-50 block"
              >
                Pricing
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold text-gray-900 hover:bg-gray-50 block"
              >
                Contact
              </button>

              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 text-center bg-[#0B2E59] hover:bg-[#1D5EA8] text-[#FFFFFF] rounded-lg text-sm font-semibold shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Request Consultation</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
