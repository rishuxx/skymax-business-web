import React from 'react';
import { ArrowRight } from 'lucide-react';
import SEO from './SEO';
import { 
  PiMapPinThin,
  PiUsersThin,
  PiWrenchThin,
  PiHeadsetThin,
  PiChartLineUpThin,
  PiStackThin,
  PiBuildingsThin,
  PiHandshakeThin,
  PiClipboardThin,
  PiTreeStructureThin
} from 'react-icons/pi';
import { PageId } from '../types';

interface WhySkymaxViewProps {
  onNavigate: (page: PageId) => void;
}

// 10 Premium thin react-icons (Phosphor icons) representing each pillar with elite style
const IndiaMapIcon = () => (
  <div className="w-14 h-14 text-[#0B2E59] mx-auto transition-transform duration-500 hover:scale-115 flex items-center justify-center">
    <PiMapPinThin size="100%" />
  </div>
);

const TeamExpertsIcon = () => (
  <div className="w-14 h-14 text-[#0B2E59] mx-auto transition-transform duration-500 hover:scale-115 flex items-center justify-center">
    <PiUsersThin size="100%" />
  </div>
);

const ServicePartsIcon = () => (
  <div className="w-14 h-14 text-[#0B2E59] mx-auto transition-transform duration-500 hover:scale-115 flex items-center justify-center">
    <PiWrenchThin size="100%" />
  </div>
);

const ConsultativeIcon = () => (
  <div className="w-14 h-14 text-[#0B2E59] mx-auto transition-transform duration-500 hover:scale-115 flex items-center justify-center">
    <PiHeadsetThin size="100%" />
  </div>
);

const SolutionOptimizationIcon = () => (
  <div className="w-14 h-14 text-[#0B2E59] mx-auto transition-transform duration-500 hover:scale-115 flex items-center justify-center">
    <PiChartLineUpThin size="100%" />
  </div>
);

const DedicatedDeptIcon = () => (
  <div className="w-14 h-14 text-[#0B2E59] mx-auto transition-transform duration-500 hover:scale-115 flex items-center justify-center">
    <PiStackThin size="100%" />
  </div>
);

const LargeDealIcon = () => (
  <div className="w-14 h-14 text-[#0B2E59] mx-auto transition-transform duration-500 hover:scale-115 flex items-center justify-center">
    <PiBuildingsThin size="100%" />
  </div>
);

const ClientFirstIcon = () => (
  <div className="w-14 h-14 text-[#0B2E59] mx-auto transition-transform duration-500 hover:scale-115 flex items-center justify-center">
    <PiHandshakeThin size="100%" />
  </div>
);

const SopIcon = () => (
  <div className="w-14 h-14 text-[#0B2E59] mx-auto transition-transform duration-500 hover:scale-115 flex items-center justify-center">
    <PiClipboardThin size="100%" />
  </div>
);

const TransparentAccessIcon = () => (
  <div className="w-14 h-14 text-[#0B2E59] mx-auto transition-transform duration-500 hover:scale-115 flex items-center justify-center">
    <PiTreeStructureThin size="100%" />
  </div>
);

interface PillarData {
  title: string;
  description: string;
  icon: () => React.ReactNode;
}

const pillars: PillarData[] = [
  {
    title: 'PAN INDIA SUPPORT',
    description: 'Nationwide service network ensuring your operations ever stop — no matter where you are in India.',
    icon: IndiaMapIcon,
  },
  {
    title: 'TEAM OF INDUSTRY EXPERTS',
    description: '17+ years of collective experience in printing, IT hardware, and office automation.',
    icon: TeamExpertsIcon,
  },
  {
    title: 'IN-HOUSE SERVICE & SPARE PARTS MANAGEMENT',
    description: 'No third-party dependencies. Our in-house engineers and parts inventory ensure faster turnaround.',
    icon: ServicePartsIcon,
  },
  {
    title: 'CONSULTATIVE APPROACH',
    description: 'We study your setup, share real client success stories, and recommend only what you actually need.',
    icon: ConsultativeIcon,
  },
  {
    title: 'SOLUTION OPTIMIZATION',
    description: 'We don\'t just sell — we optimize. Every solution is fine-tuned to maximize efficiency and minimize cost.',
    icon: SolutionOptimizationIcon,
  },
  {
    title: 'DEDICATED DEPARTMENTS',
    description: 'Beyond sales and service — dedicated teams for billing, support, escalation, and client success.',
    icon: DedicatedDeptIcon,
  },
  {
    title: 'LARGE DEAL CAPABILITY',
    description: 'Equipped to handle high-volume, multi-location, and bulk enterprise requirements seamlessly.',
    icon: LargeDealIcon,
  },
  {
    title: 'PROFESSIONAL YET CLIENT-FIRST',
    description: 'We balance professionalism with a genuine commitment to making every client feel valued.',
    icon: ClientFirstIcon,
  },
  {
    title: 'STRONG SOPs & SERVICE STANDARDS',
    description: 'Structured Standard Operating Proceduresthat consistently uphold our exceptional service vision.',
    icon: SopIcon,
  },
  {
    title: 'TRANSPARENT HIERARCHY ACCESS',
    description: 'One Team. One Goal. Clients can reach any levelof leadership directly — because open communication solves problems faster.',
    icon: TransparentAccessIcon,
  },
];

const gridBgSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%230B2E59' fill-opacity='.015'/%3E%3C/svg%3E";

export default function WhySkymaxView({ onNavigate }: WhySkymaxViewProps) {
  return (
    <div id="why-skymax-root" className="pt-24 space-y-0">
      <SEO 
        title="Why Choose Skymax? | Reliability & Infrastructure" 
        description="Discover the foundational reliability that makes Skymax the designated partner for major corporations requiring 99.9% SLA uptime." 
        keywords="reliable IT partner, skymax SLA, IT hardware uptime, pan-India IT procurement, nationwide IT support" 
        canonical="/why-skymax"
      />
      
      {/* Header section with brand identity matching the user image perfectly */}
      <section className="group relative bg-[#FAF9F5] pt-32 pb-20 md:pt-40 border-b border-neutral-200/60 text-left overflow-hidden">
        {/* 1. Background Image behind grid lines */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none z-0 overflow-hidden">
          {/* Edge fades for seamless page integration */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF9F5] to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF9F5] to-transparent z-10" />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/85 lg:via-[#FAF9F5]/30 to-transparent z-10" />
          
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" 
            alt="Enterprise Systems Partnership Collaboration" 
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
              #THE SKYMAX ADVANTAGE
            </span>
            <h1 className="text-4xl sm:text-6xl font-sans font-bold text-[#0B2E59] tracking-[-0.03em] leading-[1.05]">
              Formulating elite <br />
              enterprise systems.
            </h1>
            <p className="text-sm text-neutral-500 max-w-xl font-light leading-relaxed font-sans">
              At <span className="font-bold text-[#0B2E59]">Skymax Business Solutions LLP</span>, we go beyond simple product delivery. We construct reliable operations backed by technical expertise, robust supply pipelines, and a commitment to your scalable success.
            </p>
          </div>
        </div>
      </section>

      {/* Grid displays the 10 Pillars exactly like the panel layout */}
      <section className="bg-white bg-grid-pattern py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Perfectly adaptive grid, spanning 5 columns on desktop, wrap on mobile/tablet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#1D5EA8]/20 hover:border-[#1D5EA8]/60 p-6 rounded-[2rem] flex flex-col items-center text-center justify-between min-h-[350px] shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* Top layout */}
                  <div className="flex flex-col items-center space-y-5 w-full">
                    {/* Centered large icon */}
                    <div className="p-3">
                      <Icon />
                    </div>

                    {/* Uppercase Title match */}
                    <h3 className="text-xs sm:text-[13px] font-bold font-sans text-[#0B2E59] tracking-tight leading-snug uppercase min-h-[40px] flex items-center justify-center">
                      {p.title}
                    </h3>

                    {/* Centered Divider stroke */}
                    <div className="w-16 h-[2px] bg-[#1D5EA8]/40"></div>
                  </div>

                  {/* Bottom description block */}
                  <p className="text-[12px] text-gray-500 leading-relaxed font-light mt-4 flex-1 flex items-center justify-center">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SLA action footer banner remains pristine and helpful */}
      <section className="bg-[#0B2E59] text-white py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <h2 className="text-2xl md:text-3xl font-bold font-sans tracking-tight">
                Align Your Procurement with ISO Standards Today
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl font-light leading-relaxed">
                We design fully documented operations setups matching exact compliance registers. Call us to inspect our physical warehouse and spare parts inventory layers located in Viman Nagar, Pune.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#1D5EA8] hover:bg-sky-500 text-white font-semibold text-sm px-6 py-3.5 rounded-lg shadow-md transition-all inline-flex items-center space-x-2"
              >
                <span>Initiate SLA Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
