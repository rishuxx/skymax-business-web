import { ShieldCheck, FileText, Globe, Key, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import SEO from './SEO';
import { PageId } from '../types';

interface SupportAMCViewProps {
  onNavigate: (page: PageId) => void;
}

const gridBgSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%230B2E59' fill-opacity='.015'/%3E%3C/svg%3E";

export default function SupportAMCView({ onNavigate }: SupportAMCViewProps) {
  const amcOffices = [
    {
      title: 'Preventative Maintenance',
      desc: 'Scheduled hardware telemetry audits, mechanical lubrication, scan calibration, and diagnostic updates performed quarterly.',
      icon: Clock,
    },
    {
      title: 'Emergency Standby Support',
      desc: '24/7 dedicated telephone hotline and web dashboard routing critical incidents directly to active on-duty engineers.',
      icon: AlertTriangle,
    },
    {
      title: 'OEM Genuine Spare Parts',
      desc: 'Absolute enforcement of genuine manufacturer parts sourced directly from Canon, HP, Dell, and Lenovo central warehouses.',
      icon: ShieldCheck,
    },
    {
      title: 'Direct Dispatch Systems',
      desc: 'SLA-driven physical engineer deployments within a strict 4-hour window for absolute network downtime remediation.',
      icon: Key,
    },
    {
      title: 'Detailed Analytical Reporting',
      desc: 'Itemized monthly expenditure logs outlining toner volume consumption, laptop health indices, and completed support dispatches.',
      icon: FileText,
    },
    {
      title: 'PAN India Logistics Depth',
      desc: 'Coordinated physical parts depot channels spanning Maharashtra, Uttar Pradesh, Delhi NCR, and Karnataka.',
      icon: Globe,
    },
  ];

  const responseSlas = [
    { tier: 'Severity 1 (Critical Server/Network Halt)', target: '< 4 Hours (Onsite)', resolution: 'Same-day structural resolution' },
    { tier: 'Severity 2 (Workstation Group Obstruction)', target: '< 8 Hours (Onsite)', resolution: '24-Hour swap guarantee' },
    { tier: 'Severity 3 (Individual Printer/Peripheral Error)', target: '< 24 Hours', resolution: '48-Hour parts supply remediation' },
  ];

  return (
    <div id="support-amc-view-root" className="pt-24 space-y-0">
      <SEO 
        title="IT Support & AMC Services" 
        description="Predictive maintenance and nationwide field-support response systems ensuring zero operational downtime for enterprise clusters." 
        keywords="enterprise IT AMC, managed service provider, IT support contracts, annual maintenance contract IT, predictive NOC support" 
        canonical="/support-amc"
      />
      
      {/* Top Header Banner */}
      <section className="group relative bg-[#FAF9F5] pt-32 pb-20 md:pt-40 border-b border-neutral-200/60 text-left overflow-hidden">
        {/* 1. Background Image behind grid lines */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none z-0 overflow-hidden">
          {/* Edge fades for seamless page integration */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF9F5] to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF9F5] to-transparent z-10" />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/85 lg:via-[#FAF9F5]/30 to-transparent z-10" />
          
          <img 
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80" 
            alt="Enterprise Hardware Engineering AMC Diagnostic Background" 
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
              #OPERATIONAL ASSURANCES
            </span>
            <h1 className="text-4xl sm:text-6xl font-sans font-bold text-[#0B2E59] tracking-[-0.03em] leading-[1.05]">
              Support systems <br />
              &amp; AMC framework.
            </h1>
            <p className="text-sm text-neutral-500 max-w-xl font-light leading-relaxed font-sans">
              Keep your business engines operating continuously with manufacturer-certified engineers, predictable diagnostic schedules, and prompt SLA dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* Core Support Framework Cards */}
      <section className="bg-white bg-grid-pattern py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-4 md:gap-5">
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-[#0B2E59] tracking-tight">
              Our 6-Component Maintenance Engine
            </h2>
            <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
              We eliminate technical bottlenecks by maintaining full-time service centers equipped with genuine, calibrated spare stock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amcOffices.map((office, idx) => {
              const Icon = office.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F7F8FA] border border-gray-150 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 space-y-4"
                >
                  <div className="inline-flex p-2.5 bg-white text-[#1D5EA8] rounded-xl border border-gray-200">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-base font-bold font-sans text-[#0B2E59] tracking-tight">
                    {office.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                    {office.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Sla matrices */}
      <section className="bg-[#F7F8FA] py-16 md:py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#1D5EA8] uppercase tracking-wider block">
                SLA TRANSPARENCY
              </span>
              <h2 className="text-2xl font-bold font-sans text-[#0B2E59] tracking-tight">
                Service Level Agreement (SLA) Indices
              </h2>
              <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                We bind our technical performance to strict metrics registered in administrative contracts, ensuring complete corporate protection.
              </p>
            </div>

            <div className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-150 text-[#0B2E59] font-mono font-bold">
                    <th className="p-4 md:p-5">Incident Class</th>
                    <th className="p-4 md:p-5">Response SLA</th>
                    <th className="p-4 md:p-5">Resolution SLA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-light">
                  {responseSlas.map((sla, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50">
                      <td className="p-4 md:p-5 font-semibold text-gray-900">{sla.tier}</td>
                      <td className="p-4 md:p-5 text-[#1D5EA8] font-mono font-bold">{sla.target}</td>
                      <td className="p-4 md:p-5 text-gray-650">{sla.resolution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="bg-sky-50 border-t border-blue-50 p-3 text-center text-[10px] md:text-xs font-mono text-[#0B2E59]">
                * 99.85% calculated network availability applies for all corporate client sites.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SLA Callout Banner */}
      <section className="bg-white bg-grid-pattern py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold font-sans text-[#0B2E59] tracking-tight leading-tight">
            Schedule a Diagnostic Telemetry Audit for Your Print Fleet or Device Net
          </h2>
          <p className="text-xs md:text-sm text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
            Our engineers will deploy passive logging sensors to track device usage, outages, and consumable wastage at your office sites absolutely free.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#0B2E59] hover:bg-[#1D5EA8] text-[#FFFFFF] font-semibold text-sm px-6 py-3.5 rounded-lg shadow-md transition-all inline-flex items-center space-x-1.5"
            >
              <span>Schedule Technical Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
