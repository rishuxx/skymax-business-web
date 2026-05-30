const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/components/HomeView.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Fix imports
content = content.replace(
  "import { useState, ReactNode } from 'react';",
  "import { useState, ReactNode, useEffect } from 'react';"
);
content = content.replace(
  "import { motion } from 'motion/react';",
  "import { motion, AnimatePresence } from 'motion/react';"
);

// 2. Define Hero Carousel Logic outside or inside the component
// The component is `export default function HomeView({ onNavigate }: HomeViewProps) {`
const heroLogic = `  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      label: 'SKYMAX B2B SYSTEMS ORCHESTRATION',
      title: <>Delivering excellence <br />beyond reach.</>,
      description: 'Unified operations design for modern enterprises. We provision hardware, manage print document flow, and secure multi-branch supply networks under robust corporate SLAs.',
      link: 'solutions',
      solutionId: undefined,
      linkText: 'EXPLORE PORTFOLIO',
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
    },
    ...solutionsData.map((s, i) => {
      const images = [
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1600&q=80", // Printing
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80", // IT
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80", // Proc
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600&q=80", // Gift
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80", // Travel
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80", // Training
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80"  // Wellness
      ];
      return {
        label: s.category.toUpperCase(),
        title: <>{s.title}</>,
        description: s.description,
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
`;

content = content.replace(
  "  const handleNavClick = (page: PageId, solution?: SolutionId) => {",
  heroLogic + "\n  const handleNavClick = (page: PageId, solution?: SolutionId) => {"
);

// 3. Replace Hero Section
const oldHeroRegex = /<\!-- SECTION 1: HERO - ULTRA MODERN, TITANIC TYPOGRAPHY -->[\s\S]*?<\!-- SECTION 2: AUTHORIZED OEM STRIP - AGENT LANDSCAPE LOOK -->/;

const newHero = \`{/* SECTION 1: HERO - ULTRA MODERN, TITANIC TYPOGRAPHY (Now Carousel) */}
      <section 
        id="home-hero-section" 
        className="group relative bg-[#FAF9F5] pt-32 pb-24 md:pt-44 md:pb-36 border-b border-neutral-200/60 overflow-hidden"
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
              animate={{ opacity: 0.14, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              src={heroSlides[currentSlide].image}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:opacity-[0.75] scale-100 group-hover:scale-[1.03]"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </div>

        {/* 2. Grid Pattern Overlay on top of the image */}
        <div 
          className="absolute inset-0 pointer-events-none z-10 opacity-70"
          style={{ backgroundImage: \\\`url("\${gridBgSvg}")\\\` }}
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
            <div className="flex items-center space-x-3 pt-6 pointer-events-auto">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={\`h-1 rounded-full transition-all duration-500 \${
                    i === currentSlide 
                      ? 'w-8 bg-[#1D5EA8]' 
                      : 'w-4 bg-[#1D5EA8]/20 hover:bg-[#1D5EA8]/40'
                  }\`}
                  aria-label={\`Go to slide \${i + 1}\`}
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

      {/* SECTION 2: AUTHORIZED OEM STRIP - AGENT LANDSCAPE LOOK */}`;

content = content.replace(oldHeroRegex, newHero);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Hero carousel added');
