import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from './SEO';
import { 
  Printer, 
  Laptop, 
  ShoppingCart, 
  Gift, 
  Briefcase, 
  Award, 
  Heart, 
  ShieldCheck, 
  Users, 
  Check, 
  ChevronRight, 
  Activity,
  FileText,
  Building2,
  Settings,
  Layers,
  ArrowUpRight,
  TrendingUp,
  X,
  Send,
  Download,
  CheckCircle2,
  HelpCircle,
  Clock,
  Compass,
  Zap
} from 'lucide-react';
import { PageId, SolutionId } from '../types';

interface PricingViewProps {
  onNavigate: (page: PageId, solution?: SolutionId) => void;
}

const gridBgSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%230B2E59' fill-opacity='.015'/%3E%3C/svg%3E";

export default function PricingView({ onNavigate }: PricingViewProps) {
  // 1. Profile settings state
  const [orgSize, setOrgSize] = useState<'startup' | 'small' | 'mid' | 'large'>('mid');
  const [employees, setEmployees] = useState(850);
  const [locations, setLocations] = useState(12);
  const [printVolume, setPrintVolume] = useState(75000);
  const [procurementLevel, setProcurementLevel] = useState(65); // 0-100 slider representing Low -> High
  const [selectedChallenge, setSelectedChallenge] = useState<string>('IT Infrastructure Management');

  // Interactive contact request states
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  // Toast / Download simulation states
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const [faqOpenState, setFaqOpenState] = useState<Record<number, boolean>>({
    0: true,
    1: false,
    2: false
  });

  const toggleFaq = (index: number) => {
    setFaqOpenState(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const triggerDownloadProfile = () => {
    setToastMessage("Skymax Corporate Profile downloaded successfully.");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const handleConsultationSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (fullName.trim() && workEmail.trim() && phone.trim()) {
      setIsFormSubmitted(true);
      setTimeout(() => {
        setIsConsultModalOpen(false);
        setIsFormSubmitted(false);
        setFullName('');
        setWorkEmail('');
        setPhone('');
        setCompanyName('');
        setAdditionalNotes('');
        // Show success alert toast
        setToastMessage("Assessment Request Logged. A direct consultation agent is reaching out in 2 hours.");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      }, 3000);
    }
  };

  // Helper trigger navigation
  const handleNavClick = (page: PageId, solution?: SolutionId) => {
    onNavigate(page, solution);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Live dynamic calculations for Metric Scorebars based on inputs
  const calculateMetrics = () => {
    // 1. Operational Efficiency
    let eff = 68;
    if (orgSize === 'mid' || orgSize === 'large') eff += 12;
    if (printVolume > 50000) eff += 8;
    if (selectedChallenge === 'Multiple Challenges' || selectedChallenge === 'High Printing Costs') eff += 6;
    eff = Math.min(97, eff);

    // 2. Vendor Consolidation
    let vc = 52;
    if (locations > 5) vc += 18;
    if (orgSize === 'large') vc += 12;
    if (selectedChallenge === 'Vendor Coordination') vc += 14;
    vc = Math.min(96, vc);

    // 3. Support Readiness
    let sr = 72;
    if (employees > 500) sr += 14;
    if (selectedChallenge === 'IT Infrastructure Management') sr += 12;
    sr = Math.min(99, sr);

    // 4. Business Scalability
    let bs = 58;
    if (orgSize === 'startup' || orgSize === 'small') bs += 16;
    if (procurementLevel > 60) bs += 12;
    bs = Math.min(95, bs);

    // 5. Process Optimization
    let po = 64;
    if (printVolume > 100000) po += 15;
    if (orgSize === 'mid' || orgSize === 'large') po += 10;
    po = Math.min(98, po);

    // 6. Infrastructure Reliability
    let ir = 70;
    if (employees > 200) ir += 12;
    if (selectedChallenge === 'IT Infrastructure Management' || selectedChallenge === 'Multiple Challenges') ir += 11;
    ir = Math.min(99, ir);

    return { eff, vc, sr, bs, po, ir };
  };

  const metrics = calculateMetrics();

  // Highlight relevance indicator based on current challange
  const isSolutionPrimary = (title: string) => {
    if (selectedChallenge === 'Multiple Challenges') return true;
    switch (title) {
      case 'Printing & Document Management':
        return selectedChallenge === 'High Printing Costs';
      case 'IT Hardware & Office Automation':
        return selectedChallenge === 'IT Infrastructure Management';
      case 'Corporate Procurement':
        return selectedChallenge === 'Vendor Coordination';
      case 'Training Solutions':
        return selectedChallenge === 'Employee Training';
      case 'Corporate Gifting':
        return selectedChallenge === 'Multiple Challenges';
      case 'Travel & Event Management':
        return selectedChallenge === 'Corporate Events';
      case 'Wellness Programs':
        return selectedChallenge === 'Employee Wellness';
      default:
        return false;
    }
  };

  // Procurement Dependency rating text
  const getProcurementLabel = (val: number) => {
    if (val < 25) return "Low Dependency";
    if (val < 50) return "Moderate Dependency";
    if (val < 75) return "High Operational Link";
    return "Critical Business Dependency";
  };

  return (
    <div id="pricing-page-root" className="bg-white min-h-screen text-slate-800">
      <SEO 
        title="Enterprise Pricing Strategy" 
        description="Transparent, capital-efficient leasing structures and SLA engagements tailored for global compliance and sustained growth." 
        keywords="IT hardware leasing cost, managed print services pricing, enterprise IT SLAs, hardware rental budget, corporate procurement costs" 
        canonical="/pricing"
      />
      
      {/* SECTION 1: HEADER HERO BANNER (Stripe & Linear elegant theme) */}
      <section className="group relative bg-[#FAF9F5] pt-32 pb-20 md:pt-40 border-b border-neutral-200/60 overflow-hidden text-left">
        {/* 1. Background Image behind grid lines */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none z-0 overflow-hidden">
          {/* Edge fades for seamless page integration */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF9F5] to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF9F5] to-transparent z-10" />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/85 lg:via-[#FAF9F5]/30 to-transparent z-10" />
          
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80" 
            alt="Corporate procurement planning assessment" 
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
            <span className="inline-block bg-[#EBF5FF] border border-blue-200 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold text-[#1F518C] uppercase tracking-[0.25em]">
              Executive Consultation Diagnostics
            </span>
            <h1 className="text-4xl sm:text-6xl font-sans font-bold text-[#0B2E59] tracking-[-0.03em] leading-[1.05]">
              Business Value <br className="hidden sm:inline" /> Assessment
            </h1>
            <p className="text-sm md:text-base text-neutral-500 max-w-2xl font-light leading-relaxed font-sans mt-2">
              Discover the right combination of solutions for your organization and understand how Skymax can help optimize operations, reduce complexity, and improve business efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: DUAL-COLUMN ASSESSMENT CONSOLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ==================== LEFT COLLUMN: BUSINESS PROFILE CONFIGURATION ==================== */}
          <div className="lg:col-span-5 bg-white border border-neutral-200 p-6 sm:p-8 rounded-3xl space-y-8 text-left shadow-xs">
            <div className="border-b border-gray-100 pb-5">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EBF5FF] flex items-center justify-center text-[#1D5EA8]">
                  <Building2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#0B2E59] text-base">
                    Configure Business Profile
                  </h3>
                  <p className="text-xs text-neutral-400 font-light mt-0.5">
                    Tell us about your organization so we can recommend relevant solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              
              {/* FIELD 1: Organization Size Segment Control */}
              <div className="space-y-2.5">
                <label className="text-[10px] font-mono font-bold tracking-wider text-neutral-400 uppercase block">
                  Organization Size
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 bg-[#FAF9F5] p-1 rounded-xl border border-neutral-200/60">
                  {[
                    { id: 'startup', label: 'Startup' },
                    { id: 'small', label: 'Small Biz' },
                    { id: 'mid', label: 'Mid-Size' },
                    { id: 'large', label: 'Enterprise' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setOrgSize(item.id as 'startup' | 'small' | 'mid' | 'large')}
                      className={`py-2 px-1 text-center rounded-lg text-xs font-semibold transition-all ${
                        orgSize === item.id 
                          ? 'bg-[#0B2E59] text-white shadow-xs' 
                          : 'text-neutral-500 hover:text-[#0B2E59]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* FIELD 2: Number of Employees Slider */}
              <div className="space-y-2 bg-[#FAF9F5]/40 border border-neutral-150 p-4 rounded-2xl">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-mono font-bold uppercase text-neutral-400 flex items-center space-x-1.5">
                    <Users className="w-3.5 h-3.5 text-[#1D5EA8]" />
                    <span>Number of Employees</span>
                  </span>
                  <span className="font-mono bg-[#EBF5FF] border border-blue-100 text-[#1D5EA8] font-bold px-2.5 py-0.5 rounded text-[11px]">
                    {employees >= 5000 ? "5,000+ Employees" : `${employees.toLocaleString()} Employees`}
                  </span>
                </div>
                <div className="flex items-center space-x-3 py-1">
                  <button
                    type="button"
                    onClick={() => setEmployees(prev => Math.max(10, prev - 50))}
                    className="w-6 h-6 flex items-center justify-center rounded border border-neutral-200 bg-white text-neutral-500 hover:text-[#1D5EA8] font-semibold text-xs active:scale-95 transition-all"
                  >
                    -
                  </button>
                  <input 
                    type="range"
                    min={10}
                    max={5000}
                    step={10}
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="flex-1 focus:outline-none accent-[#0B2E59] h-1"
                  />
                  <button
                    type="button"
                    onClick={() => setEmployees(prev => Math.min(5000, prev + 50))}
                    className="w-6 h-6 flex items-center justify-center rounded border border-neutral-200 bg-white text-neutral-500 hover:text-[#1D5EA8] font-semibold text-xs active:scale-95 transition-all"
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-between text-[9px] font-mono text-neutral-400">
                  <span>10</span>
                  <span>5,000+</span>
                </div>
              </div>

              {/* FIELD 3: Number of Locations Slider */}
              <div className="space-y-2 bg-[#FAF9F5]/40 border border-neutral-150 p-4 rounded-2xl">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-mono font-bold uppercase text-neutral-400 flex items-center space-x-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#1D5EA8]" />
                    <span>Active Locations</span>
                  </span>
                  <span className="font-mono bg-[#EBF5FF] border border-blue-100 text-[#1D5EA8] font-bold px-2.5 py-0.5 rounded text-[11px]">
                    {locations >= 100 ? "100+ Nodes" : `${locations} Location${locations > 1 ? 's' : ''}`}
                  </span>
                </div>
                <div className="flex items-center space-x-3 py-1">
                  <button
                    type="button"
                    onClick={() => setLocations(prev => Math.max(1, prev - 1))}
                    className="w-6 h-6 flex items-center justify-center rounded border border-neutral-200 bg-white text-neutral-500 hover:text-[#1D5EA8] font-semibold text-xs active:scale-95 transition-all"
                  >
                    -
                  </button>
                  <input 
                    type="range"
                    min={1}
                    max={100}
                    step={1}
                    value={locations}
                    onChange={(e) => setLocations(Number(e.target.value))}
                    className="flex-1 focus:outline-none accent-[#0B2E59] h-1"
                  />
                  <button
                    type="button"
                    onClick={() => setLocations(prev => Math.min(100, prev + 1))}
                    className="w-6 h-6 flex items-center justify-center rounded border border-neutral-200 bg-white text-neutral-500 hover:text-[#1D5EA8] font-semibold text-xs active:scale-95 transition-all"
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-between text-[9px] font-mono text-neutral-400">
                  <span>1 Depot</span>
                  <span>100+ Multi-State</span>
                </div>
              </div>

              {/* FIELD 4: Monthly Printing Volume */}
              <div className="space-y-2 bg-[#FAF9F5]/40 border border-neutral-150 p-4 rounded-2xl">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-mono font-bold uppercase text-neutral-400 flex items-center space-x-1.5">
                    <Printer className="w-3.5 h-3.5 text-[#1D5EA8]" />
                    <span>Monthly Printing Volume</span>
                  </span>
                  <span className="font-mono bg-[#EBF5FF] border border-blue-100 text-[#1D5EA8] font-bold px-2.5 py-0.5 rounded text-[11px]">
                    {printVolume.toLocaleString()} pages/mo
                  </span>
                </div>
                <div className="flex items-center space-x-3 py-1">
                  <button
                    type="button"
                    onClick={() => setPrintVolume(prev => Math.max(1000, prev - 5000))}
                    className="w-6 h-6 flex items-center justify-center rounded border border-neutral-200 bg-white text-neutral-500 hover:text-[#1D5EA8] font-semibold text-xs active:scale-95 transition-all"
                  >
                    -
                  </button>
                  <input 
                    type="range"
                    min={1000}
                    max={500000}
                    step={5000}
                    value={printVolume}
                    onChange={(e) => setPrintVolume(Number(e.target.value))}
                    className="flex-1 focus:outline-none accent-[#0B2E59] h-1"
                  />
                  <button
                    type="button"
                    onClick={() => setPrintVolume(prev => Math.min(500000, prev + 5000))}
                    className="w-6 h-6 flex items-center justify-center rounded border border-neutral-200 bg-white text-neutral-500 hover:text-[#1D5EA8] font-semibold text-xs active:scale-95 transition-all"
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-between text-[9px] font-mono text-neutral-400">
                  <span>1,000 / mo</span>
                  <span>5,00,000 / mo</span>
                </div>
              </div>

              {/* FIELD 5: Procurement Dependency */}
              <div className="space-y-2 bg-[#FAF9F5]/40 border border-neutral-150 p-4 rounded-2xl">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-mono font-bold uppercase text-neutral-400 flex items-center space-x-1.5">
                    <ShoppingCart className="w-3.5 h-3.5 text-[#1D5EA8]" />
                    <span>Procurement Dependency</span>
                  </span>
                  <span className="font-mono bg-[#EBF5FF] border border-blue-100 text-[#1D5EA8] font-bold px-2.5 py-0.5 rounded text-[11px]">
                    {getProcurementLabel(procurementLevel)}
                  </span>
                </div>
                <div className="flex items-center space-x-3 py-1">
                  <button
                    type="button"
                    onClick={() => setProcurementLevel(prev => Math.max(10, prev - 10))}
                    className="w-6 h-6 flex items-center justify-center rounded border border-neutral-200 bg-white text-neutral-500 hover:text-[#1D5EA8] font-semibold text-xs active:scale-95 transition-all"
                  >
                    -
                  </button>
                  <input 
                    type="range"
                    min={10}
                    max={100}
                    step={10}
                    value={procurementLevel}
                    onChange={(e) => setProcurementLevel(Number(e.target.value))}
                    className="flex-1 focus:outline-none accent-[#0B2E59] h-1"
                  />
                  <button
                    type="button"
                    onClick={() => setProcurementLevel(prev => Math.min(100, prev + 10))}
                    className="w-6 h-6 flex items-center justify-center rounded border border-neutral-200 bg-white text-neutral-500 hover:text-[#1D5EA8] font-semibold text-xs active:scale-95 transition-all"
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-between text-[9px] font-mono text-neutral-400">
                  <span>Low Operational Link</span>
                  <span>Critical System</span>
                </div>
              </div>

              {/* FIELD 6: Primary Business Challenge (Attractive selectable cards) */}
              <div className="space-y-2.5">
                <label className="text-[10px] font-mono font-bold tracking-wider text-neutral-400 uppercase block">
                  Primary Business Challenge
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { id: 'High Printing Costs', label: 'High Printing & Document Costs' },
                    { id: 'IT Infrastructure Management', label: 'IT Infrastructure & Device Sourcing' },
                    { id: 'Vendor Coordination', label: 'Complex Vendor Coordination & Supply Chain' },
                    { id: 'Employee Training', label: 'Employee Upskilling & Tech Adoption' },
                    { id: 'Corporate Events', label: 'Corporate Events & Business Travel Logs' },
                    { id: 'Employee Wellness', label: 'Employee Wellness & Health Compliance' },
                    { id: 'Multiple Challenges', label: 'Unified Resource Challenges (All of the Above)' }
                  ].map((card) => {
                    const isSelected = selectedChallenge === card.id;
                    return (
                      <button
                        key={card.id}
                        type="button"
                        onClick={() => setSelectedChallenge(card.id)}
                        className={`w-full text-left p-3 rounded-xl border text-xs transition-all relative flex items-center justify-between ${
                          isSelected 
                            ? 'border-[#1D5EA8] bg-[#EBF5FF]/30 text-[#0B2E59] font-semibold shadow-2xs' 
                            : 'border-neutral-200 text-neutral-600 hover:bg-[#FAF9F5] hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full transition-colors ${isSelected ? 'bg-[#1D5EA8]' : 'bg-neutral-300'}`} />
                          <span>{card.label}</span>
                        </div>
                        {isSelected && (
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#1D5EA8] bg-[#EBF5FF] border border-blue-200/50 px-2 py-0.5 rounded-full">
                            Active
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* ==================== RIGHT COLUMN: SOLUTION RECOMMENDATIONS & BENEFITS ==================== */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Dynamic Solutions Subsection */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="border-b border-neutral-200 pb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <h4 className="font-display font-bold text-[#0B2E59] text-base">Recommended Business Solutions</h4>
                  <p className="text-xs text-neutral-400 font-light mt-0.5">
                    Consultative modular solutions targeted to streamline your specified footprint.
                  </p>
                </div>
                
                <span className="bg-[#EBF5FF] border border-blue-200 text-[#1D5EA8] font-mono text-[10px] font-bold py-1.5 px-3 rounded-full flex items-center space-x-1 shrink-0 self-start sm:self-center">
                  <Activity className="w-3.5 h-3.5 text-[#1D5EA8] animate-pulse" />
                  <span>INTELLIGENT PROFILE ANALYSIS</span>
                </span>
              </div>

              {/* Dynamic Interactive Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    id: 'printing',
                    title: 'Printing & Document Management',
                    icon: <Printer className="w-5 h-5" />,
                    desc: `Optimized MPS (Managed Print Services) and secure audit-ready infrastructure for your ${printVolume.toLocaleString()} monthly pages.`,
                    path: 'solutions',
                    solId: 'mps' as SolutionId
                  },
                  {
                    id: 'it',
                    title: 'IT Hardware & Office Automation',
                    icon: <Laptop className="w-5 h-5" />,
                    desc: `Flexible asset leasing (laptops, network nodes) configured precisely for ${employees >= 5000 ? '5,000+' : employees} workplace logins.`,
                    path: 'solutions',
                    solId: 'it-hardware' as SolutionId
                  },
                  {
                    id: 'procurement',
                    title: 'Corporate Procurement',
                    icon: <ShoppingCart className="w-5 h-5" />,
                    desc: `Custom stationary, pantry nodes, and asset supply chains distributed cleanly across your ${locations} operational center${locations > 1 ? 's' : ''}.`,
                    path: 'solutions',
                    solId: 'procurement' as SolutionId
                  },
                  {
                    id: 'training',
                    title: 'Training Solutions',
                    icon: <Award className="w-5 h-5" />,
                    desc: 'Corporate technical upskilling, behavioral programs, and direct executive leadership courses customized for staff scale.',
                    path: 'solutions',
                    solId: 'training' as SolutionId
                  },
                  {
                    id: 'gifting',
                    title: 'Corporate Gifting',
                    icon: <Gift className="w-5 h-5" />,
                    desc: 'Fully managed client reward portfolios, welcome joining kits, and curated festive gift configurations.',
                    path: 'solutions',
                    solId: 'gifting' as SolutionId
                  },
                  {
                    id: 'travel',
                    title: 'Travel & Event Management',
                    icon: <Briefcase className="w-5 h-5" />,
                    desc: 'Enterprise corporate travel bookings, flight deck logs, hotel integrations, and large-scale coordinate alignments.',
                    path: 'solutions',
                    solId: 'travel' as SolutionId
                  },
                  {
                    id: 'wellness',
                    title: 'Wellness Programs',
                    icon: <Heart className="w-5 h-5" />,
                    desc: 'Onsite wellness audits, periodic medical diagnostic panels, and customized mental health consultation courses.',
                    path: 'solutions',
                    solId: 'wellness' as SolutionId
                  }
                ].map((sol) => {
                  const isPrimary = isSolutionPrimary(sol.title);
                  return (
                    <div 
                      key={sol.id} 
                      className={`p-5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 relative ${
                        isPrimary 
                          ? 'border-[#1D5EA8] bg-[#EBF5FF]/10 shadow-xs ring-1 ring-[#1D5EA8]/20' 
                          : 'border-neutral-200 bg-white hover:border-neutral-300'
                      }`}
                    >
                      {isPrimary && (
                        <span className="absolute top-3 right-3 text-[8px] font-mono font-bold tracking-widest text-[#1D5EA8] bg-[#EBF5FF] border border-blue-200 px-1.5 py-0.5 rounded uppercase">
                          MATCH
                        </span>
                      )}
                      
                      <div className="space-y-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isPrimary ? 'bg-[#1D5EA8] text-white' : 'bg-neutral-100 text-neutral-600'}`}>
                          {sol.icon}
                        </div>
                        <div>
                          <h5 className="font-display font-semibold text-[#0B2E59] text-sm leading-tight">{sol.title}</h5>
                          <p className="text-[11px] text-neutral-400 font-light mt-1.5 leading-relaxed">{sol.desc}</p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-neutral-100/60 mt-4 flex items-center justify-between">
                        <button 
                          onClick={() => handleNavClick(sol.path as PageId, sol.solId)}
                          className="text-[11px] font-semibold text-[#1D5EA8] hover:text-[#0B2E59] flex items-center space-x-1 transition-colors"
                        >
                          <span>Explore Solution Specs</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Business Benefits Score Indicators */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div>
                <h4 className="font-display font-bold text-[#0B2E59] text-base">Value Projections Metrics</h4>
                <p className="text-xs text-neutral-400 font-light mt-0.5">
                  Projected corporate diagnostic optimization levels based on selected operational matrices.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-1">
                
                {/* Score Option 1 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-neutral-700">Operational Efficiency Potential</span>
                    <span className="font-mono font-bold text-[#1D5EA8]">{metrics.eff}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[#1D5EA8] to-[#0B2E59] h-full rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${metrics.eff}%` }}
                    />
                  </div>
                </div>

                {/* Score Option 2 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-neutral-700">Vendor Simplification Score</span>
                    <span className="font-mono font-bold text-[#1D5EA8]">{metrics.vc}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[#1D5EA8] to-[#0B2E59] h-full rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${metrics.vc}%` }}
                    />
                  </div>
                </div>

                {/* Score Option 3 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-neutral-700">SLA Support Readiness</span>
                    <span className="font-mono font-bold text-[#1D5EA8]">{metrics.sr}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[#1D5EA8] to-[#0B2E59] h-full rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${metrics.sr}%` }}
                    />
                  </div>
                </div>

                {/* Score Option 4 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-neutral-700">Business Scalability Readiness</span>
                    <span className="font-mono font-bold text-[#1D5EA8]">{metrics.bs}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[#1D5EA8] to-[#0B2E59] h-full rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${metrics.bs}%` }}
                    />
                  </div>
                </div>

                {/* Score Option 5 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-neutral-700">Process &amp; Logistics Optimization</span>
                    <span className="font-mono font-bold text-[#1D5EA8]">{metrics.po}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[#1D5EA8] to-[#0B2E59] h-full rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${metrics.po}%` }}
                    />
                  </div>
                </div>

                {/* Score Option 6 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-neutral-700">Infrastructure Reliability</span>
                    <span className="font-mono font-bold text-[#1D5EA8]">{metrics.ir}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[#1D5EA8] to-[#0B2E59] h-full rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${metrics.ir}%` }}
                    />
                  </div>
                </div>

              </div>

              {/* Core value disclaimer badge */}
              <div className="bg-[#EBF5FF] border border-blue-150 rounded-2xl p-4 flex gap-3">
                <ShieldCheck className="w-5 h-5 text-[#1D5EA8] shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs text-neutral-600">
                  <p className="font-bold text-[#0B2E59]">Custom Service Level Agreements</p>
                  <p className="font-light leading-relaxed">
                    Skymax Business Solutions LLP is a consultative resource partner. Since pricing metrics depend strictly on locations, dynamic hardware models, custom support times, and client scale, actual rate proposals are drafted in an upfront line-item transparent consultative model.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: THE SKYMAX ADVANTAGE GRID (Premium feature cards) */}
      <section className="bg-[#FAF9F5] bg-grid-pattern border-t border-b border-neutral-200/60 py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-4 md:gap-5">
            <span className="inline-block text-[10px] bg-[#EBF5FF] border border-blue-200 font-mono font-bold text-[#1D5EA8] uppercase tracking-[0.2em] px-3 py-1 rounded-full">
              Enterprise Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#0B2E59] tracking-tight">
              The Skymax Advantage
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-light font-sans max-w-lg mx-auto">
              How we construct trustworthy, highly optimized capital resource infrastructures across multi-branch environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                title: "Dedicated Departments",
                desc: "Each solution is governed by custom-tiered operational desks ensuring specialized execution boundaries without cross-contamination."
              },
              {
                title: "Pan India Support",
                desc: "Active logistics network and technical support systems covering Noida, Pune, prayagraj, and other key Indian corporate hubs."
              },
              {
                title: "Industry Experts",
                desc: "Direct coordination with senior procurement auditors and technical field engineers carrying over 15+ years of infrastructure experience."
              },
              {
                title: "Large Deal Capability",
                desc: "Robust financial and operational frameworks engineered to handle multi-crore custom SLA requirements with total security."
              },
              {
                title: "Consultative Approach",
                desc: "We reject typical out-of-the-box packages. Every rate, timeline, and asset allocation is mapped directly to your exact balance sheet."
              },
              {
                title: "In-House Service Team",
                desc: "100% direct payroll system operators. We do not subcontract technical operations, guaranteeing complete compliance and security audits."
              },
              {
                title: "Transparent Communication",
                desc: "No hidden fuel indices, unnotified administrative markups, or service overheads. Every rupee is disclosed upfront."
              },
              {
                title: "Strong SOP Processes",
                desc: "Deployments and asset maintenance cycles are driven by precise Standard Operating Procedures, minimizing human delay vectors."
              },
              {
                title: "Solution Optimization",
                desc: "Continuous diagnostic loops. We actively recommend down-scaling dormant assets or print logs to protect your operational budget."
              },
              {
                title: "Client-First Philosophy",
                desc: "Our contract terms protect the client. From early exit options to hardware upgrade pathways, your control remains absolute."
              }
            ].map((adv, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-neutral-200 rounded-2xl p-5 hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="text-[10px] font-mono font-bold text-[#1D5EA8] tracking-widest uppercase">
                    Pillar 0{idx + 1}
                  </div>
                  <h4 className="font-display font-semibold text-[#0B2E59] text-xs leading-snug group-hover:text-[#1D5EA8] transition-colors">
                    {adv.title}
                  </h4>
                  <p className="text-[10px] text-neutral-400 font-light leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: BUSINESS TRANSFORMATION TIMELINE FRAMEWORK (Bottom Section) */}
      <section className="bg-white bg-grid-pattern py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-4 md:gap-5">
            <span className="inline-block text-[10px] bg-[#EBF5FF] border border-blue-200 font-mono font-bold text-[#1D5EA8] uppercase tracking-[0.2em] px-3 py-1 rounded-full">
              SOP Integration Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#0B2E59] tracking-tight">
              Business Transformation Framework
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-light font-sans max-w-lg mx-auto">
              Our structured corporate methodology from primary assessment to long-term operational optimization.
            </p>
          </div>

          <div className="relative mt-8">
            {/* Elegant Line between cards (desktop view) */}
            <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-neutral-200/80 -translate-y-1/2 hidden lg:block z-0 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#1D5EA8] to-sky-400"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">
              {[
                {
                  step: "Step 01",
                  title: "Assessment",
                  subtitle: "Operational Diagnostics",
                  desc: "We analyze your active locations, staff counts, current printers or IT device lease logs, and uncover bottlenecks or cost leakages."
                },
                {
                  step: "Step 02",
                  title: "Solution Design",
                  subtitle: "Bespoke Framework Mapping",
                  desc: "Our modular experts craft a customized solution combination. Transparent line-item contracts are detailed without hidden fees."
                },
                {
                  step: "Step 03",
                  title: "Implementation",
                  subtitle: "SOP-Backed Deployment",
                  desc: "Devices, IT setups, or gifting inventories are securely deployed. Integration lines are initiated with zero operational downtime."
                },
                {
                  step: "Step 04",
                  title: "Support & Optimization",
                  subtitle: "Continuous Value Audit",
                  desc: "Direct onsite support hours run actively. We conduct periodic checks to scale down idle hardware, maximizing your cost efficiency."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white border border-neutral-200 p-6 rounded-2xl hover:border-[#1D5EA8] transition-colors duration-300 relative hover:shadow-xl cursor-default"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-[10px] font-bold text-[#1D5EA8] bg-[#EBF5FF] px-2.5 py-1 rounded-md">
                      {item.step}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider font-mono">
                      Phase {idx + 1}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-[#0B2E59] text-sm">{item.title}</h4>
                  <p className="inline-block text-[10px] font-mono text-[#1D5EA8] font-semibold mt-1 uppercase tracking-wider">{item.subtitle}</p>
                  <p className="text-[11px] text-neutral-400 font-light mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PREMIUM CONSULTATION CALL TO ACTION AREA (Card Highlight) */}
      <section className="bg-white bg-grid-pattern pb-24 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B2E59] text-white p-8 sm:p-12 md:p-16 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            
            {/* Subtle light geometric mesh background */}
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#1D5EA8]/10 to-transparent z-0 pointer-events-none" />

            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="inline-block bg-[#1D5EA8] text-white text-[9px] font-mono font-bold px-3 py-1 rounded uppercase tracking-[0.2em] border border-blue-400/25">
                Principal Advisory Services
              </span>
              <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight leading-tight">
                Ready For A Personalized <br /> Assessment?
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-xl">
                Every organization is unique. Schedule a cost-free consultation with our solutions design experts to receive a tailored solution strategy aligned with your business objectives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10 shrink-0">
              <button 
                type="button"
                onClick={() => setIsConsultModalOpen(true)}
                className="bg-white hover:bg-neutral-50 text-[#0B2E59] font-mono font-bold text-xs p-4 rounded-xl tracking-wider uppercase transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Request Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                type="button"
                onClick={triggerDownloadProfile}
                className="bg-[#1D5EA8] hover:bg-sky-700 hover:border-sky-600 text-white font-mono font-semibold text-xs px-5 py-4 rounded-xl tracking-wider uppercase transition-all border border-blue-400/30 flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Company Profile</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: CONSULTATIVE FAQs Accordion */}
      <section className="bg-white bg-grid-pattern border-t border-neutral-150 py-16 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center gap-4 md:gap-5 mb-10">
            <h3 className="text-2xl font-bold text-[#0B2E59] tracking-tight">Frequently Answered Questions</h3>
            <p className="text-xs text-neutral-400 font-light">Understand how B2B custom assessments and service levels operate at Skymax.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How does Skymax establish the value assessment scores?',
                a: 'The calculations are powered by historical line-item audits across over 400 Indian enterprises. By correlating active branch locations, team scale, and primary hurdles, we pinpoint statistical margin improvements usually unlocked upon consolidated operations.'
              },
              {
                q: 'Do we need to pay for the initial solutions design profile?',
                a: 'Absolutely not. The Business Value Assessment is completely cost-free and consultative. It works strictly as a diagnostics protocol to guide your prospective capital deployment plans. You only pay for formalized service contracts.'
              },
              {
                q: 'Can we configure multi-state custom SLA support boundaries?',
                a: 'Yes. Skymax designs localized support programs. You can choose premium silver-level help desks in key corporate depots in Uttar Pradesh and Maharashtra while routing minor branches in other states via unified remote ticketing parameters.'
              }
            ].map((item, index) => {
              const isOpen = !!faqOpenState[index];
              return (
                <div 
                  key={index} 
                  className="border border-neutral-200 rounded-2xl bg-white overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-4.5 flex justify-between items-center bg-white hover:bg-neutral-50/50 transition-colors"
                  >
                    <span className="font-semibold text-neutral-800 text-xs sm:text-sm font-sans flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#1D5EA8]" />
                      <span>{item.q}</span>
                    </span>
                    <ChevronRight className={`w-4 h-4 text-neutral-400 shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-90 text-[#1D5EA8]' : ''}`} />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-4.5 pt-0 border-t border-neutral-100 text-xs leading-relaxed text-neutral-500 font-light">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== ASSESSMENTS MODAL COMPONENT (Slide/Center modal box) ==================== */}
      <AnimatePresence>
        {isConsultModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div 
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsConsultModalOpen(false)}
            />

            {/* Container */}
            <motion.div 
              className="bg-white border border-neutral-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative z-10 shadow-xl overflow-hidden text-left"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
            >
              
              {/* Header */}
              <div className="flex justify-between items-start pb-4 border-b border-neutral-100">
                <div className="space-y-1">
                  <span className="inline-block bg-[#EBF5FF] border border-blue-200 px-2 py-0.5 rounded text-[8px] font-mono font-bold text-[#1D5EA8] uppercase tracking-wider">
                    Value Diagnostics
                  </span>
                  <h3 className="text-lg font-bold text-[#0B2E59] font-sans">Request Enterprise Value Audit</h3>
                  <p className="text-[11px] text-neutral-400 font-light">
                    Submit your details and receive a tailored optimization proposal mapped to your profile inputs.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsConsultModalOpen(false)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!isFormSubmitted ? (
                <form onSubmit={handleConsultationSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold uppercase text-neutral-400">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Anand Sharma"
                        className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-[#1D5EA8] outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold uppercase text-neutral-400">Work Email</label>
                      <input 
                        type="email" 
                        required
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        placeholder="e.g. anand@company.in"
                        className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-[#1D5EA8] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold uppercase text-neutral-400">Phone / WhatsApp</label>
                      <input 
                        type="tel" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 99000 88776"
                        className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-[#1D5EA8] outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold uppercase text-neutral-400">Company Name</label>
                      <input 
                        type="text" 
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Sharma Enterprises"
                        className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-[#1D5EA8] outline-none"
                      />
                    </div>
                  </div>

                  {/* Configured Summary Badge inside modal */}
                  <div className="bg-[#FAF9F5] border border-neutral-150 p-3.5 rounded-xl space-y-1 text-[11px] text-neutral-600">
                    <span className="font-mono text-[9px] font-bold text-[#1D5EA8] uppercase tracking-wider block">Currently Configured Audit Parameters:</span>
                    <p className="font-light">
                      • {employees} Employees across {locations} active location{locations > 1 ? 's' : ''}.<br />
                      • {printVolume.toLocaleString()} monthly document prints.<br />
                      • Principle Hurdle: <strong className="text-neutral-800 font-semibold">{selectedChallenge}</strong>.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold uppercase text-neutral-400">Specific Requirements (Optional)</label>
                    <textarea 
                      rows={2}
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      placeholder="e.g. Need pricing specs for unified printer deployment in Pune and Delhi offices next quarter..."
                      className="w-full bg-white border border-neutral-300 rounded-xl p-3 text-xs focus:ring-1 focus:ring-[#1D5EA8] outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#0B2E59] hover:bg-[#1C4170] text-white py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-widest transition-all shadow-xs flex items-center justify-center space-x-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Audit Request</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 text-[#1D5EA8] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-sans font-bold text-[#0B2E59] text-sm">Assessment Request Logged!</h4>
                    <p className="text-[11px] text-neutral-400 font-light leading-relaxed max-w-sm mx-auto">
                      Thank you, <strong className="font-semibold text-neutral-700">{fullName}</strong>. Your custom diagnostic profile has been transmitted to our Principal solutions architect desk. 
                    </p>
                  </div>
                  <div className="bg-[#FAF9F5] p-3 rounded-lg border text-[10px] text-neutral-500 font-mono inline-block max-w-[280px]">
                    Reference ID: SKM-PR-{Math.floor(Math.random() * 900000) + 100000}
                  </div>
                  <p className="text-[10px] text-neutral-400 pt-2 select-none animate-pulse">
                    Transitioning console window...
                  </p>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Elegant Toast/Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            className="fixed bottom-6 right-6 z-50 bg-[#0B2E59] text-white border border-blue-400/20 px-5 py-3 rounded-xl shadow-lg flex items-center space-x-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <CheckCircle2 className="w-4 h-4 text-[#3D9FFF] shrink-0" />
            <span className="text-xs font-medium font-sans">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
