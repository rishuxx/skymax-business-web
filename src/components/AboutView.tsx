import { useState } from 'react';
import { motion } from 'motion/react';
import SEO from './SEO';
import { Target, Eye, Handshake, MapPin, Award, Building, Landmark, Compass, Server, Check } from 'lucide-react';

const gridBgSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%230B2E59' fill-opacity='.015'/%3E%3C/svg%3E";

export default function AboutView() {
  const [selectedHubIdx, setSelectedHubIdx] = useState<number>(0);

  const values = [
    {
      title: 'Integrity & Transparency',
      desc: 'We operate with strict line-item disclosure, providing fully audited pricing reports across print volumes, materials, and spare parts.',
      icon: Handshake,
    },
    {
      title: 'Enterprise Scale Execution',
      desc: 'Formulating logistics structures capable of carrying massive capital-focused hardware rolls and multi-location deployment support.',
      icon: Landmark,
    },
    {
      title: 'Direct Accountability',
      desc: 'Rejecting sub-contracted manual support layers; our client solutions are installed and maintained by our own certified technicians.',
      icon: Eye,
    },
    {
      title: 'Service Resilience',
      desc: 'Governing critical servers and user desktop groups with high-standard SLA response envelopes and preventive maintenance schedules.',
      icon: Target,
    },
  ];

  const statistics = [
    { value: '15+', label: 'Years of Corporate Presence' },
    { value: '450+', label: 'Enterprise Contract Accounts' },
    { value: '24+', label: 'States with SLA Coverage' },
    { value: '98%', label: 'Annual Client Retention' },
  ];

  const regionalHubs = [
    { state: 'Maharashtra (HQ)', city: 'Pune, Mumbai, Navi Mumbai, Nagpur', type: 'Primary Delivery' },
    { state: 'Uttar Pradesh', city: 'Prayagraj (Regional), Lucknow, Noida, Kanpur', type: 'Regional Hub' },
    { state: 'Karnataka', city: 'Bengaluru, Hubballi', type: 'Support Nodes' },
    { state: 'Delhi NCR', city: 'New Delhi, Gurugram, Ghaziabad', type: 'Delivery Nodes' },
  ];

  return (
    <div id="about-page-root" className="pt-24 space-y-0">
      <SEO 
        title="About Us" 
        description="Learn how Skymax Business Solutions scales enterprise IT infrastructure, supplying rigorous technical compliance and robust service networks across India." 
        keywords="about skymax business, enterprise IT partner, IT infrastructure company India, corporate SLAs, hardware provisioning experts" 
        canonical="/about"
      />
      
      {/* Hero Section */}
      <section className="group relative bg-[#FAF9F5] pt-32 pb-20 md:pt-40 border-b border-neutral-200/60 text-left overflow-hidden">
        {/* 1. Background Image behind grid lines */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none z-0 overflow-hidden">
          {/* Edge fades for seamless page integration */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF9F5] to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF9F5] to-transparent z-10" />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/85 lg:via-[#FAF9F5]/30 to-transparent z-10" />
          
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80" 
            alt="Minimalist Corporate Workspace Background" 
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
              #WHO WE ARE
            </span>
            <h1 className="text-4xl sm:text-6xl font-sans font-bold text-[#0B2E59] tracking-[-0.03em] leading-[1.05]">
              Leading enterprise <br />
              service integration.
            </h1>
            <p className="text-sm text-neutral-500 max-w-xl font-light leading-relaxed font-sans">
              Skymax Business Solutions LLP delivers end-to-end office automation, IT hardware platforms, corporate supply logistics, and training frameworks built for resilient operations.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Block with Stats */}
      <section className="bg-white bg-grid-pattern py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold font-sans text-[#0B2E59] tracking-tight">
                Skymax Corporate Overview
              </h2>
              <div className="space-y-4 text-xs md:text-sm text-gray-500 leading-relaxed font-light">
                <p>
                  Established as a centralized partner for multi-branch corporations, Skymax Business Solutions LLP has evolved into one of India's premier providers of structured Business Infrastructure and Managed Operational Services. We specialize in transforming fragmented procurement methods into predictable, high-availability workflows.
                </p>
                <p>
                  From configuring complex document server infrastructures and leasing major computer hardware networks, to designing wellness plans and delivering custom corporate hampers, our logistics layer supports hundreds of operations on a daily basis. We unify administration, billing, and technical service support into a single point of interface for CEOs, CIOs, and Procurement Chiefs.
                </p>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-100">
                {statistics.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-2xl md:text-3.5xl font-extrabold font-mono text-[#1D5EA8]">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-gray-500 font-mono tracking-tight uppercase leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual side card representation of our Certs */}
            <div className="lg:col-span-5 bg-[#F7F8FA] border border-gray-100 p-8 rounded-2xl space-y-6">
              <h3 className="text-xs font-mono font-bold tracking-widest text-[#0B2E59] uppercase border-b border-gray-200 pb-3">
                REGULATORY CERTIFICATIONS
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-xs text-gray-600">
                  <div className="p-1 px-2.5 bg-blue-100 text-[#1D5EA8] rounded font-mono font-bold shrink-0">ISO</div>
                  <div className="space-y-1 font-light">
                    <p className="font-bold text-gray-800">ISO 9001:2015 Quality Management</p>
                    <p>Governing the design and delivery of managed print processes and OEM hardware integration architectures.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-xs text-gray-600">
                  <div className="p-1 px-2.5 bg-blue-100 text-[#1D5EA8] rounded font-mono font-bold shrink-0">WEEE</div>
                  <div className="space-y-1 font-light">
                    <p className="font-bold text-gray-800">Certified E-Waste Compliant</p>
                    <p>Strict structural adherence to environmentally responsible asset decommissioning frameworks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-xs text-gray-600">
                  <div className="p-1 px-2.5 bg-blue-100 text-[#1D5EA8] rounded font-mono font-bold shrink-0">OEM</div>
                  <div className="space-y-1 font-light">
                    <p className="font-bold text-gray-800">Golden Tier Partnership Codes</p>
                    <p>Direct system authorizations securely registered with Canon, HP Enterprise, Cisco, Lenovo, and Dell.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision, Mission & Philosophy */}
      <section className="bg-[#F7F8FA] py-16 md:py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Vision card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 space-y-4">
              <div className="p-2.5 bg-blue-50 text-[#1D5EA8] rounded-xl inline-block">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-sans text-[#0B2E59] tracking-tight">
                Our Corporate Vision
              </h3>
              <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                To serve as the definitive high-availability foundation for corporate workflows across South Asia, empowering enterprises to operate with zero operational friction.
              </p>
            </div>

            {/* Mission card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 space-y-4">
              <div className="p-2.5 bg-blue-50 text-[#1D5EA8] rounded-xl inline-block">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-sans text-[#0B2E59] tracking-tight">
                Our Corporate Mission
              </h3>
              <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                To deliver itemized transparency, manufacturer-certified engineering, and strict SLA enforcement across technology leasing, print fleets, and wellness services.
              </p>
            </div>

            {/* Business Philosophy card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 space-y-4">
              <div className="p-2.5 bg-blue-50 text-[#1D5EA8] rounded-xl inline-block">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-sans text-[#0B2E59] tracking-tight">
                Corporate Philosophy
              </h3>
              <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                We believe that enterprise growth relies on predictable infrastructure support. By managing day-to-day facilities operations, we allow leadership to focus on core strategic growth.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white bg-grid-pattern py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-4 md:gap-5 mb-16">
            <p className="inline-block text-xs font-mono font-bold tracking-widest text-[#1D5EA8] uppercase">
              ETHICS & BEHAVIOR
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-[#0B2E59] tracking-tight">
              Our Core Operational Values
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
              Every deployment at Skymax is governed by standardized operational compliance rules.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-[#F7F8FA] border border-gray-50 p-6 rounded-xl space-y-4">
                  <div className="p-2 bg-white text-[#1D5EA8] rounded-lg border border-gray-100 inline-block">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-[#0B2E59] tracking-tight">
                    {val.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Indian Geographic Presence Block */}
      <section className="bg-gradient-to-b from-white to-[#F7F8FA] py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Presence Descriptions with Clickable Rows */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-block bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-[11px] font-mono font-bold text-[#1D5EA8] uppercase">
                  COORDINATED GEOGRAPHY
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-sans text-[#0B2E59] tracking-tight mt-2 text-left">
                  Our Physical Footprint Across India
                </h2>
                <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed mt-2 text-left">
                  Skymax manages logistics hubs, technical standby units, and client depots across key Indian corporate nodes. Click on any regional hub node below to inspect live active operations telemetry.
                </p>
              </div>
              
              <div className="space-y-2.5 pt-2">
                {[
                  { state: 'Maharashtra (HQ)', city: 'Pune, Mumbai, Navi Mumbai, Nagpur', type: 'Primary Delivery HQ', depots: 18, dispatch: '3.8 Hrs', engineers: '140+ Active Engineers', cx: 160, cy: 180, isSelectable: true },
                  { state: 'Uttar Pradesh', city: 'Prayagraj (Regional), Lucknow, Noida, Kanpur', type: 'Regional Hub', depots: 14, dispatch: '4.2 Hrs', engineers: '85+ Active Engineers', cx: 210, cy: 110, isSelectable: true },
                  { state: 'Karnataka', city: 'Bengaluru, Hubballi', type: 'Support Nodes', depots: 6, dispatch: '4.0 Hrs', engineers: '50+ Active Engineers', cx: 180, cy: 220, isSelectable: false },
                  { state: 'Delhi NCR', city: 'New Delhi, Gurugram, Ghaziabad', type: 'Delivery Nodes', depots: 5, dispatch: '3.9 Hrs', engineers: '45+ Active Engineers', cx: 130, cy: 80, isSelectable: false }
                ].map((hub, idx) => {
                  const isSelectable = hub.isSelectable;
                  return (
                    <div 
                      key={idx} 
                      onClick={() => {
                        if (isSelectable) setSelectedHubIdx(idx);
                      }}
                      className={`flex items-center justify-between text-xs p-3.5 border rounded-xl transition-all ${
                        !isSelectable 
                          ? 'bg-neutral-50/40 border-neutral-100 text-neutral-400 cursor-not-allowed opacity-65' 
                          : selectedHubIdx === idx 
                            ? 'bg-blue-50/50 border-[#1D5EA8] shadow-sm text-[#0B2E59] cursor-pointer' 
                            : 'border-gray-100 hover:bg-gray-50/50 text-gray-600 cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        {isSelectable ? (
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                            selectedHubIdx === idx ? 'bg-[#1D5EA8] text-white' : 'bg-gray-200 text-transparent'
                          }`}>
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                          </div>
                        )}
                        <span className="font-bold font-sans">
                          {hub.state}
                        </span>
                      </div>
                      <span className={`text-gray-500 font-light truncate max-w-[12rem] md:max-w-xs ${!isSelectable && 'text-neutral-400/80 italic'}`}>
                        {isSelectable ? hub.city : 'Regional deployment planned'}
                      </span>
                      {isSelectable ? (
                        <span className={`text-[9px] px-2.5 py-0.5 rounded-full font-mono font-bold ${
                          selectedHubIdx === idx ? 'bg-[#1D5EA8] text-white' : 'bg-slate-100 text-gray-500'
                        }`}>
                          {hub.depots} Depots
                        </span>
                      ) : (
                        <span className="text-[9px] px-2 py-0.5 rounded-md font-mono font-bold bg-neutral-100 text-neutral-400 border border-neutral-200/50 uppercase tracking-wider">
                          COMING SOON
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Vector Graphic: India Map styled representation */}
            <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-gray-150 shadow-sm relative overflow-hidden h-[28rem] flex flex-col justify-between">
              
              {/* Telemetry info regarding selected Node */}
              <div className="flex justify-between items-start border-b border-gray-100 pb-3">
                <div>
                  <p className="text-[10px] font-mono font-bold text-gray-400">NETWORK COVERAGE TELEMETRY</p>
                  <h4 className="font-bold sm:text-base text-sm text-[#0B2E59]">
                    {[
                      { state: 'Maharashtra Regional HQ', engineers: '140+ Certified Engineers' },
                      { state: 'Uttar Pradesh ( Prayagraj Base )', engineers: '85+ Certified Engineers' },
                      { state: 'Karnataka Support Hub', engineers: '50+ Certified Engineers' },
                      { state: 'Delhi NCR Logistics Depot', engineers: '45+ Certified Engineers' }
                    ][selectedHubIdx]?.state || 'Maharashtra Regional HQ'}
                  </h4>
                </div>
                <div className="flex items-center space-x-1.5 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[9px] font-mono font-bold">ONLINE</span>
                </div>
              </div>

              {/* Connected nodes SVG Map display */}
              <div className="relative flex-1 flex items-center justify-center">
                <svg className="w-full h-56 text-[#1D5EA8]/10" fill="none" viewBox="0 0 400 300">
                  {/* Outline background shape representing abstract borders */}
                  <path d="M150,50 L200,80 L250,70 L280,120 L230,160 L180,180 L130,220 L100,160 L140,110 Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                  
                  {/* Connections */}
                  <line x1="160" y1="180" x2="210" y2="110" stroke="#1D5EA8" strokeWidth="1" className="opacity-40" strokeDasharray={selectedHubIdx === 1 ? "0" : "2"} />
                  <line x1="160" y1="180" x2="180" y2="220" stroke="#1D5EA8" strokeWidth="1" className="opacity-40" strokeDasharray={selectedHubIdx === 2 ? "0" : "2"} />
                  <line x1="160" y1="180" x2="130" y2="80" stroke="#1D5EA8" strokeWidth="1" className="opacity-40" strokeDasharray={selectedHubIdx === 3 ? "0" : "2"} />

                  {/* Primary Pune Node */}
                  <circle cx="160" cy="180" r={selectedHubIdx === 0 ? "9" : "6"} className={`transition-all duration-300 ${selectedHubIdx === 0 ? "fill-brand-blue stroke-brand-dark stroke-2" : "fill-[#0B2E59] stroke-white stroke-2"}`} />
                  <text x="175" y="184" className={`font-mono text-[9px] font-bold ${selectedHubIdx === 0 ? 'fill-[#1D5EA8]' : 'fill-gray-400'}`}>PUNE (HQ)</text>

                  {/* Regional office Node */}
                  <circle cx="210" cy="110" r={selectedHubIdx === 1 ? "8" : "5"} className={`transition-all duration-300 ${selectedHubIdx === 1 ? "fill-brand-blue stroke-brand-dark stroke-2" : "fill-[#1D5EA8] stroke-white"}`} />
                  <text x="222" y="114" className={`font-mono text-[8px] ${selectedHubIdx === 1 ? 'fill-[#1D5EA8] font-bold' : 'fill-gray-400'}`}>PRAYAGRAJ (RO)</text>

                  {/* Connected Support Nodes */}
                  <circle cx="180" cy="220" r={selectedHubIdx === 2 ? "7" : "3.5"} className={`transition-all ${selectedHubIdx === 2 ? "fill-brand-blue stroke-white stroke-2" : "fill-blue-400"}`} />
                  <circle cx="130" cy="80" r={selectedHubIdx === 3 ? "7" : "3.5"} className={`transition-all ${selectedHubIdx === 3 ? "fill-brand-blue stroke-white stroke-2" : "fill-blue-400"}`} />
                </svg>
              </div>

              {/* Dynamic Telemetry parameters */}
              <div className="bg-[#F7F8FA] -mx-8 -mb-8 p-4 rounded-b-2xl border-t border-gray-150 grid grid-cols-3 gap-2 text-center text-[10px] text-gray-500 font-mono">
                <div className="border-r border-gray-200">
                  <p className="text-[8px] text-gray-400">ACTIVE INVENTORY</p>
                  <p className="font-bold text-[#0B2E59] text-xs mt-0.5">
                    {[18, 14, 6, 5][selectedHubIdx] ?? 18} Depots
                  </p>
                </div>
                <div className="border-r border-gray-200">
                  <p className="text-[8px] text-gray-400">SLA DISPATCH SPEED</p>
                  <p className="font-bold text-[#0B2E59] text-xs mt-0.5">
                    {['3.8 Hrs', '4.2 Hrs', '4.0 Hrs', '3.9 Hrs'][selectedHubIdx] ?? '3.8 Hrs'} Onsite
                  </p>
                </div>
                <div>
                  <p className="text-[8px] text-gray-400">SYSTEM ENGINEERS</p>
                  <p className="font-bold text-[#1D5EA8] text-xs mt-0.5">
                    {['140+', '85+', '50+', '45+'][selectedHubIdx] ?? '140+'} Staff
                  </p>
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
