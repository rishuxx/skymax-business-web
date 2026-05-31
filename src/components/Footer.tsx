import { Printer, Laptop, ShoppingCart, Gift, Briefcase, Award, Heart, Mail, Phone, MapPin, ShieldCheck, FileText, ArrowUpRight } from 'lucide-react';
import { PageId, SolutionId } from '../types';
import SkymaxLogo from './SkymaxLogo';

interface FooterProps {
  onNavigate: (page: PageId, solution?: SolutionId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: PageId, solution?: SolutionId) => {
    onNavigate(page, solution);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const solutionSpecs = [
    { id: 'printing-document-management' as SolutionId, title: 'Printing & Document Management', icon: Printer },
    { id: 'it-hardware-office-automation' as SolutionId, title: 'IT Hardware & Office Automation', icon: Laptop },
    { id: 'corporate-procurement' as SolutionId, title: 'Corporate Procurement', icon: ShoppingCart },
    { id: 'corporate-gifting' as SolutionId, title: 'Corporate Gifting', icon: Gift },
    { id: 'travel-event-management' as SolutionId, title: 'Travel & Event Management', icon: Briefcase },
    { id: 'training-solutions' as SolutionId, title: 'Training Solutions', icon: Award },
    { id: 'wellness-solutions' as SolutionId, title: 'Wellness Programs', icon: Heart },
  ];

  return (
    <footer id="corporate-footer" className="bg-[#051326] text-white pt-20 pb-10 border-t border-[#1D5EA8]/20 relative overflow-hidden">
      {/* Premium subtle background grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />
      
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full xl:max-w-none mx-auto px-4 sm:px-8 xl:px-20 2xl:px-32 relative z-10">
        
        {/* Core Footer Grid - Premium Wireframe / Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[1px] bg-sky-900/40 border border-sky-900/40 rounded-3xl overflow-hidden shadow-2xl mb-12">
          
          {/* Grid Item 1: Brand Info */}
          <div className="col-span-1 md:col-span-12 lg:col-span-4 bg-[#0B2E59] p-8 lg:p-10 space-y-8 relative group overflow-hidden">
            
            <div className="flex items-center cursor-pointer select-none" onClick={() => handleNavClick('home')}>
              <SkymaxLogo className="h-9 md:h-10 w-auto text-white" mode="dark" />
            </div>
            
            <p className="text-blue-100/70 text-sm leading-relaxed font-light pr-4 relative z-10">
              End-to-end enterprise scale business solutions helping corporate hubs optimize operations, print fleets, procurement pipelines, and organizational wellness frameworks.
            </p>
            
            <div className="flex items-center space-x-3 pt-4 border-t border-white/10 relative z-10 w-max">
              <div className="w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
              </div>
              <span className="text-[11px] font-mono font-bold text-sky-300 tracking-widest uppercase">
                ISO 9001:2015 Certified
              </span>
            </div>
          </div>

          {/* Grid Item 2: Solutions Navigation */}
          <div className="col-span-1 md:col-span-6 lg:col-span-3 bg-[#09264a] p-8 lg:p-10">
            <h4 className="text-[11px] font-mono font-bold tracking-[0.2em] text-sky-400 uppercase mb-8 flex items-center">
              <span className="w-2 h-2 bg-sky-400 mr-3 rounded-sm" />
              Operational Modules
            </h4>
            <ul className="space-y-4">
              {solutionSpecs.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} className="group/link">
                    <button
                      onClick={() => handleNavClick('solution-detail', item.id)}
                      className="text-blue-100/60 group-hover/link:text-white text-sm flex items-center space-x-3 transition-colors font-light text-left"
                    >
                      <Icon className="w-4 h-4 text-sky-400/50 group-hover/link:text-sky-400 transition-colors" />
                      <span>{item.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Grid Item 3: Corporate Desk Links */}
          <div className="col-span-1 md:col-span-6 lg:col-span-2 bg-[#09264a] p-8 lg:p-10">
            <h4 className="text-[11px] font-mono font-bold tracking-[0.2em] text-sky-400 uppercase mb-8 flex items-center">
              <span className="w-2 h-2 bg-indigo-400 mr-3 rounded-sm" />
              Corporate Desk
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Direct Home Gateway', page: 'home' },
                { label: 'Company Architecture', page: 'about' },
                { label: '10 Pillars & Trust', page: 'why-skymax' },
                { label: 'SLA & AMC Logistics', page: 'support-amc' },
                { label: 'Corporate Pricing', page: 'pricing' },
                { label: 'RFP Submission', page: 'contact' }
              ].map((link, idx) => (
                <li key={idx} className="group/link">
                  <button 
                    onClick={() => handleNavClick(link.page as PageId)} 
                    className="text-blue-100/60 group-hover/link:text-white text-sm transition-colors font-light flex items-center justify-between w-full text-left"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-hover/link:translate-y-0 transition-all text-sky-400" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Grid Item 4: Headquarters & Contact */}
          <div className="col-span-1 md:col-span-12 lg:col-span-3 bg-[#0b2b52] p-8 lg:p-10 relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-sky-900/20 to-transparent pointer-events-none" />
            
            <h4 className="text-[11px] font-mono font-bold tracking-[0.2em] text-sky-400 uppercase mb-8 flex items-center">
              <span className="w-2 h-2 bg-emerald-400 mr-3 rounded-sm" />
              Primary Headquarters
            </h4>
            
            <div className="space-y-6 text-blue-100/70 text-sm relative z-10">
              <div className="flex items-start space-x-3 group/item">
                <div className="w-6 h-6 rounded-md bg-sky-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-sky-500/20 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <span className="leading-relaxed font-light">
                  Survey No. 300/3/1, DY Patil College Road, Lohegaon, Pune – 411047, MH, India
                </span>
              </div>
              
              <div className="flex items-start space-x-3 group/item">
                <div className="w-6 h-6 rounded-md bg-sky-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-sky-500/20 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <div className="flex flex-col space-y-1 font-mono text-xs">
                  <span className="hover:text-white transition-colors cursor-pointer">+91 8329682551</span>
                  <span className="hover:text-white transition-colors cursor-pointer">+91 8976408999</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 group/item">
                <div className="w-6 h-6 rounded-md bg-sky-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-sky-500/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <a href="mailto:dheeraj.bali@skymaxbusiness.com" className="font-light hover:text-white transition-colors break-all mt-0.5">
                  dheeraj.bali@skymaxbusiness.com
                </a>
              </div>

              <div className="pt-5 border-t border-white/10 space-y-2">
                <p className="text-[9px] font-mono tracking-widest text-sky-500 uppercase">Prayagraj Node:</p>
                <p className="text-xs leading-relaxed text-blue-100/50 font-light pr-4">
                  UG-4, Vinayak Central Plaza, Cooper Rd, Civil Lines, Allahabad, U.P, 211001 <br />
                  <span className="font-mono mt-1 block hover:text-white transition-colors cursor-pointer">+91 79857 71381</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Segment */}
        <div className="flex flex-col md:flex-row justify-between items-center text-blue-100/40 text-[11px] space-y-4 md:space-y-0 w-full px-2">
          <div className="flex flex-col space-y-1.5 md:items-start items-center">
            <p className="font-light tracking-wide">
              &copy; {new Date().getFullYear()} Skymax Business Solutions LLP. All operational rights reserved.
            </p>
            <p className="font-mono text-[9px] uppercase tracking-wider text-blue-100/30">
              LLPIN: ACX-1360 | GSTIN Operational in Maharashtra and Uttar Pradesh
            </p>
          </div>
          <div className="flex items-center space-x-6 text-blue-100/50 font-light">
            <button className="hover:text-white transition-colors flex items-center space-x-1.5">
              <FileText className="w-3 h-3" />
              <span>SLA Terms</span>
            </button>
            <button className="hover:text-white transition-colors">Privacy Architecture</button>
            <button className="hover:text-white transition-colors">E-waste Compliance</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
