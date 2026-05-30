import { useState, ChangeEvent, FormEvent } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  MessageSquare, 
  Send, 
  ArrowRight, 
  Copy, 
  Check, 
  Clock, 
  ExternalLink, 
  Compass, 
  CalendarDays,
  ShieldCheck,
  Navigation
} from 'lucide-react';
import SEO from './SEO';
import { ofcLocations } from '../data';
import { motion, AnimatePresence } from 'motion/react';

type DispatchZone = {
  name: string;
  distance: string;
  time: string;
  urgencyLevel: string;
  primaryRoad: string;
};

const puneZones: DispatchZone[] = [
  { name: 'Viman Nagar / Lohegaon Campus', distance: '2.5 km', time: '8-12 mins', urgencyLevel: 'Corporate Gold Instant (<1h)', primaryRoad: 'DY Patil Road' },
  { name: 'Kharadi IT Park (EON & World Trade)', distance: '6.8 km', time: '15-20 mins', urgencyLevel: 'Corporate Gold Instant (<1h)', primaryRoad: 'Nagar Road / DP Road Junction' },
  { name: 'Koregaon Park / Kalyani Nagar Office', distance: '5.2 km', time: '12-15 mins', urgencyLevel: 'Corporate Gold Instant (<1h)', primaryRoad: 'Kalyani Bridge Route' },
  { name: 'Yerwada Business Bay & Commerzone', distance: '6.0 km', time: '15-18 mins', urgencyLevel: 'Gold SLA Standard Priority', primaryRoad: 'Airport Rd Bypass' },
  { name: 'Hinjewadi Infotech Park (Phase 1-3)', distance: '24.5 km', time: '40-50 mins', urgencyLevel: 'SLA Dispatch Corridor', primaryRoad: 'Pune-Bangalore High-Speed Highway' },
  { name: 'Baner / Balewadi Corporates', distance: '20.1 km', time: '35-40 mins', urgencyLevel: 'SLA Dispatch Corridor', primaryRoad: 'Wakad-Pashan Highway Link' },
  { name: 'Hadapsar / Magarpatta City SEZ', distance: '12.4 km', time: '25-30 mins', urgencyLevel: 'SLA Standard Channel', primaryRoad: 'Solapur Rd Bypass' },
];

const prayagrajZones: DispatchZone[] = [
  { name: 'Civil Lines / MG Marg Corporate Hub', distance: '0.5 km', time: '3-5 mins', urgencyLevel: 'Immediate Tech Dispatch', primaryRoad: 'Cooper Road Core' },
  { name: 'Katra / University Campus Area', distance: '2.1 km', time: '5-8 mins', urgencyLevel: 'Immediate Tech Dispatch', primaryRoad: 'University Road Axis' },
  { name: 'George Town / Tagore Town Hubs', distance: '1.8 km', time: '5-10 mins', urgencyLevel: 'Tech Fast-Track Channel', primaryRoad: 'Kamla Nehru Road' },
  { name: 'Naini Corporate / Industrial Zone', distance: '9.5 km', time: '20-25 mins', urgencyLevel: 'Regional Support Corridor', primaryRoad: 'Naini Bridge Highway' },
  { name: 'Jhalwa IT Zone (IIIT-Allahabad Hub)', distance: '8.2 km', time: '18-22 mins', urgencyLevel: 'Regional Support Corridor', primaryRoad: 'Jhalwa-Devghat Arterial' },
  { name: 'Phaphamau Industrial Link', distance: '11.0 km', time: '25-30 mins', urgencyLevel: 'Standard Outlying SLA Channel', primaryRoad: 'Ganga Bridge Highway Route' },
];

const gridBgSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%230B2E59' fill-opacity='.015'/%3E%3C/svg%3E";

export default function ContactView() {
  const [formData, setFormData] = useState({
    fullName: '',
    corporateEmail: '',
    phoneNumber: '',
    companyName: '',
    employeeScale: '10-49',
    interestedService: 'printing-document-management',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [activeOfficeIdx, setActiveOfficeIdx] = useState(0);
  const [selectedZoneIdx, setSelectedZoneIdx] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.corporateEmail,
          phone: formData.phoneNumber,
          company: formData.companyName,
          interest: formData.interestedService,
          message: formData.message,
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.debug && data.debug.errors && data.debug.errors.length > 0) {
          console.warn("Form submitted, but integrations had errors:", data.debug.errors);
          // If ONLY Resend or Supabase failed but not both, it still returns ok, so we let the user know.
        }

        setSubmitSuccess(true);
        // Reset after success
        setFormData({
          fullName: '',
          corporateEmail: '',
          phoneNumber: '',
          companyName: '',
          employeeScale: '10-49',
          interestedService: 'printing-document-management',
          message: '',
        });
      } else {
        console.error("Failed to submit form:", await response.text());
        alert("There was an issue submitting your inquiry. Please try again or contact us directly on WhatsApp.");
      }
    } catch (err) {
      console.error("Error submitting form", err);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const servicesOptionList = [
    { value: 'printing-document-management', label: 'Printing & Document Management' },
    { value: 'it-hardware-office-automation', label: 'IT Hardware & Office Automation' },
    { value: 'corporate-procurement', label: 'Corporate Procurement Solutions' },
    { value: 'corporate-gifting', label: 'Corporate Gifting Merchandise' },
    { value: 'travel-event-management', label: 'Travel & Event Management Tours' },
    { value: 'training-solutions', label: 'Technology Training Solutions' },
    { value: 'wellness-solutions', label: 'Preventative Wellness Analytics' },
    { value: 'amc-sla-contracts', label: 'SLA Support & Annual Maintenance Contract (AMC)' },
  ];

  return (
    <div id="contact-page-root" className="pt-24 space-y-0">
      <SEO 
        title="Contact Enterprise Sales & Support" 
        description="Reach out to discuss global IT deployment, scheduled predictive NOC audits, and unified procurement pipelines." 
        keywords="contact skymax, IT procurement consultation, IT support contact, hardware lease quote, enterprise SLA support" 
        canonical="/contact"
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
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1600&q=80" 
            alt="Enterprise Office Communication Desk Background" 
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
              #REQUEST FOR PROPOSAL (RFP)
            </span>
            <h1 className="text-4xl sm:text-6xl font-sans font-bold text-[#0B2E59] tracking-[-0.03em] leading-[1.05]">
              Initiate corporate <br />
              consultations.
            </h1>
            <p className="text-sm text-neutral-500 max-w-xl font-light leading-relaxed font-sans">
              Connect with our technical advisors to design custom SLAs or submit high-density hardware procurement requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form Left, Offices/Infos Right */}
      <section className="bg-white bg-grid-pattern py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Left on Large Screens */}
            <div className="lg:col-span-7 bg-white border border-gray-150 p-8 rounded-2xl shadow-sm space-y-8">
              
              <div className="space-y-2">
                <h2 className="text-xl font-bold font-sans text-[#0B2E59] tracking-tight">
                  Corporate Inquiry Form
                </h2>
                <p className="text-xs text-gray-500 font-light">
                  Please submit valid company directories. All inquiries are evaluated and responded to within 2 brief business hours.
                </p>
              </div>

              {submitSuccess ? (
                <div id="contact-success-notification" className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl space-y-4 text-emerald-800">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm tracking-tight text-emerald-900">RFP Submission Document Issued</h4>
                      <p className="text-xs text-emerald-600 mt-0.5 font-light">Verification Ticket: #SKX-{Math.floor(1000 + Math.random() * 9000)}-MH</p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed font-light text-emerald-700">
                    Thank you. Your organizational specs have been locked into our database. An account advisor from our Pune Head Office will call your listed number shortly to deliver a preliminary configuration document.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline"
                  >
                    Submit a secondary SLA request
                  </button>
                </div>
              ) : (
                <form id="corporate-contact-form" onSubmit={handleFormSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="fullName" className="text-xs font-mono font-bold text-gray-700">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full text-xs md:text-sm p-3 rounded-lg border border-gray-300 focus:border-[#1D5EA8] focus:outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="corporateEmail" className="text-xs font-mono font-bold text-gray-700">
                        CORPORATE EMAIL
                      </label>
                      <input
                        type="email"
                        id="corporateEmail"
                        name="corporateEmail"
                        required
                        value={formData.corporateEmail}
                        onChange={handleInputChange}
                        placeholder="j.doe@enterprise.com"
                        className="w-full text-xs md:text-sm p-3 rounded-lg border border-gray-300 focus:border-[#1D5EA8] focus:outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="phoneNumber" className="text-xs font-mono font-bold text-gray-700">
                        CONTACT TELEPHONE
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="+91 99000 12345"
                        className="w-full text-xs md:text-sm p-3 rounded-lg border border-gray-300 focus:border-[#1D5EA8] focus:outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="companyName" className="text-xs font-mono font-bold text-gray-700">
                        COMPANY NAME
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Acme Corporation LLP"
                        className="w-full text-xs md:text-sm p-3 rounded-lg border border-gray-300 focus:border-[#1D5EA8] focus:outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="employeeScale" className="text-xs font-mono font-bold text-gray-700">
                        ORGANIZATIONAL SCALE
                      </label>
                      <select
                        id="employeeScale"
                        name="employeeScale"
                        value={formData.employeeScale}
                        onChange={handleInputChange}
                        className="w-full text-xs md:text-sm p-3 rounded-lg border border-gray-300 focus:border-[#1D5EA8] focus:outline-none bg-white transition-all text-gray-700"
                      >
                        <option value="10-49">10 - 49 Employees</option>
                        <option value="50-249">50 - 249 Employees</option>
                        <option value="250-999">250 - 999 Employees (Mid-Market)</option>
                        <option value="1000+">1000+ Employees (Global Enterprise)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="interestedService" className="text-xs font-mono font-bold text-gray-700">
                        REQUIRED SOLUTION NODE
                      </label>
                      <select
                        id="interestedService"
                        name="interestedService"
                        value={formData.interestedService}
                        onChange={handleInputChange}
                        className="w-full text-xs md:text-sm p-3 rounded-lg border border-gray-300 focus:border-[#1D5EA8] focus:outline-none bg-white transition-all text-gray-700"
                      >
                        {servicesOptionList.map((srv) => (
                          <option key={srv.value} value={srv.value}>{srv.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="message" className="text-xs font-mono font-bold text-gray-700">
                      RFP TECHNICAL SPECIFICATIONS / COMMENTS
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please draft physical parameters (e.g. printer volume requirements, hardware lease parameters, required training modules, delivery cities)..."
                      className="w-full text-xs md:text-sm p-3 rounded-lg border border-gray-300 focus:border-[#1D5EA8] focus:outline-none transition-all placeholder:text-gray-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-[#0B2E59] hover:bg-[#1D5EA8] disabled:bg-slate-350 text-[#FFFFFF] font-semibold text-sm px-8 py-3.5 rounded-lg shadow transition-all flex items-center justify-center space-x-2"
                  >
                    <span>{isSubmitting ? 'Verifying Coordinates...' : 'Submit Request Information'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>

            {/* Offices & Contacts Info Column Right - Redesigned as an Interactive Service Hub Console */}
            <div className="lg:col-span-12 xl:col-span-5 lg:col-span-5 space-y-6">
              
              {/* WhatsApp direct response helper */}
              <div className="bg-emerald-50/60 border border-emerald-100 p-5 rounded-2xl flex items-start space-x-4">
                <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl border border-emerald-200 shrink-0">
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-emerald-950">
                    Instant WhatsApp Backline
                  </h4>
                  <p className="text-xs text-emerald-800 font-light leading-relaxed">
                    Need instant technical support calibrations? Chat directly with our dispatch room coordinators.
                  </p>
                  <div className="pt-1.5">
                    <a
                      href="https://wa.me/918329682551"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 group"
                    >
                      <span>Connect with Desk (+91 83296 82551)</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Console Wrapper */}
              <div className="bg-[#FAF9F5] border border-neutral-200 rounded-2xl p-6 space-y-6 shadow-sm">
                
                {/* Console Selector Header */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold text-[#1D5EA8] tracking-widest uppercase block">
                    INTERACTIVE SERVICE HUBS
                  </span>
                  
                  {/* Tabs */}
                  <div className="grid grid-cols-2 gap-2 bg-neutral-200/50 p-1 rounded-xl">
                    {ofcLocations.map((loc, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setActiveOfficeIdx(idx);
                          setSelectedZoneIdx('');
                        }}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold tracking-tight transition-all text-center ${
                          activeOfficeIdx === idx
                            ? 'bg-white text-[#0B2E59] shadow-sm font-bold'
                            : 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100/50'
                        }`}
                      >
                        {idx === 0 ? 'Pune (HQ)' : 'Prayagraj (North)'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Animated Office Detail Card */}
                {ofcLocations.map((loc, idx) => {
                  if (activeOfficeIdx !== idx) return null;
                  
                  const isPune = idx === 0;
                  const zones = isPune ? puneZones : prayagrajZones;
                  const selectedZoneObj = selectedZoneIdx !== '' ? zones[Number(selectedZoneIdx)] : null;
                  
                  return (
                    <div key={idx} className="space-y-5 text-left">
                      
                      {/* Office Heading & Status */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-neutral-200/60">
                        <div>
                          <h3 className="font-sans font-extrabold text-base text-[#0B2E59]">
                            {loc.name}
                          </h3>
                          <div className="flex items-center space-x-1.5 mt-1 text-[11px] text-neutral-500">
                            <Clock className="w-3.5 h-3.5 text-neutral-400" />
                            <span>Mon - Sat: 9:00 AM – 7:00 PM</span>
                          </div>
                        </div>
                        
                        {/* Live Status indicator */}
                        <span className="inline-flex items-center space-x-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-mono font-bold py-1 px-2.5 rounded-full self-start sm:self-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span>ACTIVE HUB</span>
                        </span>
                      </div>

                      {/* Address Body & Copy Control */}
                      <div className="bg-white border border-neutral-200 p-4 rounded-xl space-y-3 shadow-inner relative group">
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1">
                            <span className="text-[9px] font-mono text-neutral-400 font-semibold uppercase tracking-wider block">
                              OFFICIAL MAILING COORDINATES
                            </span>
                            <p className="text-xs text-neutral-700 font-normal leading-relaxed">
                              {loc.address}
                            </p>
                          </div>
                          
                          {/* Copy Address Trigger */}
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(loc.address);
                              setCopied(true);
                              setTimeout(() => setCopied(false), 2000);
                            }}
                            className="p-2 text-neutral-400 hover:text-[#1D5EA8] hover:bg-neutral-50 rounded-lg transition-all shrink-0"
                            title="Copy Address to Clipboard"
                          >
                            {copied ? (
                              <Check className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>

                        {/* Interactive "Copied" alert notification absolute overlay */}
                        <AnimatePresence>
                          {copied && (
                            <motion.div 
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 5 }}
                              className="absolute bottom-2 right-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm"
                            >
                              Copied!
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Dynamic Maps Coordinates */}
                        <div className="pt-2 border-t border-neutral-100 text-[10px] text-neutral-400 font-mono flex flex-wrap items-center justify-between gap-2">
                          <span>GEOLOCATION LOCK</span>
                          <span className="font-semibold text-neutral-600">
                            {isPune ? '18.6012° N, 73.9268° E' : '25.4484° N, 81.8267° E'}
                          </span>
                        </div>
                      </div>

                      {/* Responsive Iframe Map with overlay directions button */}
                      <div className="relative h-56 w-full rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100 group">
                        <iframe
                          src={loc.mapUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={false}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={loc.name}
                          className="w-full h-full grayscale-[15%] hover:grayscale-0 transition-all duration-300"
                        ></iframe>

                        {/* Directions Overlay Button */}
                        <div className="absolute bottom-3 right-3">
                          <a
                            href={
                              isPune 
                              ? "https://www.google.com/maps/dir/?api=1&destination=DY+Patil+College+Road+Lohegaon+Pune"
                              : "https://www.google.com/maps/dir/?api=1&destination=Vinayak+Central+Plaza+Civil+Lines+Allahabad"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 bg-[#0B2E59] hover:bg-[#1D5EA8] text-white text-xs font-bold font-mono px-3.5 py-2 rounded-lg shadow-md transition-all uppercase tracking-wider"
                          >
                            <span>Open Directions</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                      {/* Direct Contacts Info */}
                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href={`tel:${loc.phone.split(',')[0].trim()}`}
                          className="bg-white border border-neutral-200/80 hover:border-blue-200 p-3 rounded-xl block text-left transition-all hover:bg-blue-50/30 group"
                        >
                          <span className="text-[9px] font-mono text-neutral-400 font-semibold uppercase tracking-wider block">
                            TELEPHONE CONTACT
                          </span>
                          <span className="text-[11px] font-bold text-neutral-700 mt-1 block truncate group-hover:text-[#1D5EA8]">
                            {loc.phone.split(',')[0].trim()}
                          </span>
                        </a>

                        <a
                          href={loc.email ? `mailto:${loc.email}` : '#corporate-contact-form'}
                          className="bg-white border border-neutral-200/80 hover:border-blue-200 p-3 rounded-xl block text-left transition-all hover:bg-blue-50/30 group"
                        >
                          <span className="text-[9px] font-mono text-neutral-400 font-semibold uppercase tracking-wider block">
                            ENTERPRISE EMAIL
                          </span>
                          <span className="text-[11px] font-bold text-neutral-700 mt-1 block truncate group-hover:text-[#1D5EA8]">
                            {loc.email ? loc.email : 'RFP Desk Form'}
                          </span>
                        </a>
                      </div>

                      {/* Interactive Transit & SLA Calculator */}
                      <div className="bg-neutral-150/40 border border-neutral-200/60 p-4 rounded-xl space-y-3">
                        <div className="flex items-center space-x-2">
                          <Compass className="w-4 h-4 text-[#1D5EA8]" />
                          <h4 className="font-sans font-bold text-xs text-[#0B2E59]">
                            SLA Response Area &amp; Transit Estimator
                          </h4>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[9px] font-mono font-bold text-neutral-400 uppercase tracking-wide block">
                            SELECT TARGET ENTERPRISE SECTOR
                          </label>
                          <select
                            value={selectedZoneIdx}
                            onChange={(e) => setSelectedZoneIdx(e.target.value)}
                            className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 focus:border-[#1D5EA8] focus:outline-none bg-white font-medium text-neutral-700"
                          >
                            <option value="">-- Choose Corporate Neighborhood --</option>
                            {zones.map((zone, zIdx) => (
                              <option key={zIdx} value={zIdx.toString()}>{zone.name}</option>
                            ))}
                          </select>
                        </div>

                        {/* Dynamic Estimations Result Panel */}
                        <AnimatePresence mode="wait">
                          {selectedZoneObj ? (
                            <motion.div
                              key={selectedZoneIdx}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-white border border-blue-100 rounded-xl p-3 shadow-inner overflow-hidden"
                            >
                              <div className="flex items-center justify-between border-b border-neutral-100 pb-2 mb-2 text-xs">
                                <span className="font-bold text-neutral-900">{selectedZoneObj.name}</span>
                                <span className="bg-blue-100 text-[#1D5EA8] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                                  {selectedZoneObj.distance} away
                                </span>
                              </div>

                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div>
                                  <span className="text-neutral-400 block font-mono text-[9px] uppercase">Est. On-Site Time</span>
                                  <span className="font-bold text-[#0B2E59] font-mono text-xs">{selectedZoneObj.time}</span>
                                </div>
                                <div className="text-right">
                                  <span className="text-neutral-400 block font-mono text-[9px] uppercase">SLA Level</span>
                                  <span className="font-bold text-emerald-600 font-mono text-[10px] leading-tight block">{selectedZoneObj.urgencyLevel}</span>
                                </div>
                              </div>

                              <div className="bg-neutral-50 p-2 rounded-lg text-[10px] text-neutral-500 leading-normal border border-neutral-150 flex items-center space-x-1.5 mt-2.5 text-left">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1D5EA8] shrink-0"></span>
                                <span>Transit Route Pipeline: <strong className="text-neutral-700">{selectedZoneObj.primaryRoad}</strong></span>
                              </div>
                            </motion.div>
                          ) : (
                            <div className="text-[11px] text-neutral-400 italic text-center font-light py-2">
                              Select a region above to estimate tech dispatch SLA response time.
                            </div>
                          )}
                        </AnimatePresence>
                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
