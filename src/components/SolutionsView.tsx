import { useState } from 'react';
import { Printer, Laptop, ShoppingCart, Gift, Briefcase, Award, Heart, ArrowRight, Search, SlidersHorizontal, RefreshCcw } from 'lucide-react';
import SEO from './SEO';
import { PageId, SolutionId } from '../types';
import { solutionsData } from '../data';

interface SolutionsViewProps {
  onNavigate: (page: PageId, solution?: SolutionId) => void;
}

const gridBgSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%230B2E59' fill-opacity='.015'/%3E%3C/svg%3E";

export default function SolutionsView({ onNavigate }: SolutionsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

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

  const categories = [
    { id: 'All', title: 'All Solutions', count: solutionsData.length },
    { id: 'Business Infrastructure', title: 'Business Infrastructure', count: solutionsData.filter(s => s.category === 'Business Infrastructure').length },
    { id: 'Business Services', title: 'Business Services', count: solutionsData.filter(s => s.category === 'Business Services').length },
    { id: 'People & Development', title: 'People & Development', count: solutionsData.filter(s => s.category === 'People & Development').length },
  ];

  // Dynamically filter solutions based on search input and active category
  const filteredSolutions = solutionsData.filter((sol) => {
    const matchesSearch = 
      sol.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sol.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sol.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase())) ||
      sol.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || sol.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="solutions-view-root" className="pt-24 space-y-0">
      <SEO 
        title="Enterprise IT Solutions & Services" 
        description="Explore our full portfolio including IT Hardware Leasing, Managed Print Services, Corporate Gifting, Training, and Business Travel Management." 
        keywords="enterprise IT solutions, hardware lease, corporate gifting solutions, managed print fleet, office automation services, business support" 
        canonical="/solutions"
      />
      
      {/* Hero Banner Header */}
      <section className="group relative bg-[#FAF9F5] pt-32 pb-20 md:pt-40 border-b border-neutral-200/60 text-left overflow-hidden">
        {/* 1. Background Image behind grid lines */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none z-0 overflow-hidden">
          {/* Edge fades for seamless page integration */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF9F5] to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF9F5] to-transparent z-10" />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/85 lg:via-[#FAF9F5]/30 to-transparent z-10" />
          
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80" 
            alt="Enterprise Systems Solutions Matrix Background" 
            className="w-full h-full object-cover grayscale opacity-[0.14] lg:opacity-[0.22] transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:opacity-[0.75] scale-100 group-hover:scale-[1.03]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* 2. Grid Pattern Overlay on top of the image */}
        <div 
          className="absolute inset-0 pointer-events-none z-10 opacity-70"
          style={{ backgroundImage: `url("${gridBgSvg}")` }}
        />

        {/* 3. Sleek radial gradient behind hero content */}
        <div className="absolute inset-0 z-10 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_70%_30%,#D5E5FF_0%,transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-25">
          <div className="max-w-3xl space-y-5">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#1D5EA8] uppercase">
              #OPERATIONS MODULES CATALOG
            </span>
            <h1 className="text-4xl sm:text-6xl font-sans font-bold text-[#0B2E59] tracking-[-0.03em] leading-[1.05]">
              Our corporate <br />
              solutions matrix.
            </h1>
            <p className="text-sm text-neutral-500 max-w-xl font-light leading-relaxed font-sans">
              Providing premium end-to-end operational architectures designed to meet high volume requirements under strict SLA contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Search & Filter Controls Panel */}
      <section className="bg-[#F7F8FA] border-b border-gray-200/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Left side: Category Selectors */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mr-2 hidden sm:inline-block flex-shrink-0">
                Filter Nodes:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 flex-shrink-0 flex items-center space-x-2 border ${
                    selectedCategory === cat.id
                      ? 'bg-[#0B2E59] border-[#0B2E59] text-white shadow-sm'
                      : 'bg-white border-gray-200 text-gray-600 hover:text-[#0B2E59] hover:bg-gray-50'
                  }`}
                >
                  <span>{cat.title}</span>
                  <span className={`inline-block text-[9px] px-1.5 py-0.5 rounded font-mono ${
                    selectedCategory === cat.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Right side: Live Search Text Input */}
            <div className="relative w-full lg:w-80">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search solutions, brands, SLAs..."
                className="w-full text-xs md:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-250 bg-white focus:outline-none focus:border-[#1D5EA8] transition-all placeholder:text-gray-400 text-[#0B2E59]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-gray-400 hover:text-gray-600 font-mono"
                >
                  Clear
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Solutions Cards Display Grid */}
      <section className="bg-white bg-grid-pattern py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
          
          {filteredSolutions.length === 0 ? (
            <div className="text-center py-20 bg-[#F7F8FA] border border-dashed border-gray-250 rounded-2xl max-w-xl mx-auto p-8 space-y-4">
              <SlidersHorizontal className="w-12 h-12 text-gray-300 mx-auto" />
              <h3 className="font-sans font-bold text-base text-[#0B2E59]">No Operational Match Found</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Could not find any solutions matching &ldquo;{searchQuery}&rdquo;. Adjust your filters or view our entire offerings folder.
              </p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="bg-[#0B2E59] hover:bg-[#1D5EA8] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-all inline-flex items-center space-x-1"
              >
                <RefreshCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((sol) => {
                const Icon = serviceIconMap[sol.id] || Laptop;
                return (
                  <div
                    key={sol.id}
                    onClick={() => handleNavClick('solution-detail', sol.id)}
                    className="group bg-[#F7F8FA] border border-gray-150 hover:border-blue-250 hover:bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="space-y-4 text-left">
                      <div className="flex justify-between items-start">
                        <div className="inline-flex p-3 rounded-xl bg-white text-[#1D5EA8] border border-gray-100 group-hover:bg-[#1D5EA8] group-hover:text-white transition-all duration-300">
                          <Icon className="w-5.5 h-5.5" />
                        </div>
                        <span className="text-[9px] font-mono font-bold text-[#1D5EA8] bg-blue-50/70 border border-blue-50 px-2.5 py-0.5 rounded-full uppercase">
                          {sol.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold font-sans text-[#0B2E59] tracking-tight group-hover:text-[#1D5EA8] transition-colors leading-tight">
                        {sol.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed line-clamp-3">
                        {sol.shortDesc}
                      </p>
                    </div>

                    {/* highlights list short snippet */}
                    <div className="mt-6 pt-5 border-t border-gray-200/60 space-y-2 text-left">
                      <p className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">KEY SPECIFICATIONS:</p>
                      <div className="space-y-1">
                        {sol.highlights.slice(0, 3).map((high, hIdx) => (
                          <p key={hIdx} className="text-xs text-gray-600 truncate font-light flex items-center space-x-1.5">
                            <span className="w-1 h-1 rounded-full bg-sky-500 shrink-0"></span>
                            <span>{high}</span>
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-150 flex items-center justify-between text-xs font-semibold text-[#1D5EA8]">
                      <span>Read Dedicated Specifications</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
