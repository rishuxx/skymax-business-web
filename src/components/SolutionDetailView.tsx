import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from './SEO';
import { 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  Printer, 
  Laptop, 
  ShoppingCart, 
  Gift, 
  Briefcase, 
  Award, 
  Heart, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight,
  Clock,
  Calendar,
  Activity,
  Layers,
  Send,
  Zap,
  Globe,
  Settings,
  Users,
  Compass,
  ArrowUpRight,
  Sparkles,
  Database,
  Eye,
  Check
} from 'lucide-react';
import { Solution, PageId, SolutionId } from '../types';
import { solutionsData } from '../data';
// @ts-ignore
import printingImg from './printing.jpg';

interface SolutionDetailViewProps {
  solution: Solution;
  onNavigate: (page: PageId, solution?: SolutionId) => void;
}

// Subtle premium background coordinates
const gridBgSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%230B2E59' fill-opacity='.015'/%3E%3C/svg%3E`;

// Theme system mapping tailored closely for premium corporate vibes
const solutionThemes: Record<SolutionId, {
  accentColor: string;
  badgeBg: string;
  borderColor: string;
  gradientFrom: string;
  primaryTextColor: string;
  bgCircle: string;
}> = {
  'printing-document-management': {
    accentColor: '#1D5EA8',
    badgeBg: 'bg-blue-50/80 text-[#1D5EA8] border-blue-100',
    borderColor: 'border-blue-200/50',
    gradientFrom: 'from-blue-500/10',
    primaryTextColor: 'text-[#0B2E59]',
    bgCircle: 'bg-[#1D5EA8]/5'
  },
  'it-hardware-office-automation': {
    accentColor: '#4F46E5',
    badgeBg: 'bg-indigo-50/85 text-indigo-700 border-indigo-100',
    borderColor: 'border-indigo-200/50',
    gradientFrom: 'from-indigo-500/10',
    primaryTextColor: 'text-[#0B2E59]',
    bgCircle: 'bg-indigo-600/5'
  },
  'corporate-procurement': {
    accentColor: '#059669',
    badgeBg: 'bg-emerald-50/85 text-emerald-700 border-emerald-100',
    borderColor: 'border-emerald-200/50',
    gradientFrom: 'from-emerald-500/10',
    primaryTextColor: 'text-[#0B2E59]',
    bgCircle: 'bg-emerald-600/5'
  },
  'corporate-gifting': {
    accentColor: '#8B2635',
    badgeBg: 'bg-rose-50/85 text-[#8B2635] border-rose-100',
    borderColor: 'border-rose-200/50',
    gradientFrom: 'from-rose-500/10',
    primaryTextColor: 'text-[#0B2E59]',
    bgCircle: 'bg-rose-700/5'
  },
  'travel-event-management': {
    accentColor: '#0284C7',
    badgeBg: 'bg-sky-50/85 text-sky-700 border-sky-100',
    borderColor: 'border-sky-200/50',
    gradientFrom: 'from-sky-500/10',
    primaryTextColor: 'text-[#0B2E59]',
    bgCircle: 'bg-sky-600/5'
  },
  'training-solutions': {
    accentColor: '#D97706',
    badgeBg: 'bg-amber-50/85 text-amber-700 border-amber-100',
    borderColor: 'border-amber-200/50',
    gradientFrom: 'from-amber-400/10',
    primaryTextColor: 'text-[#0B2E59]',
    bgCircle: 'bg-amber-600/5'
  },
  'wellness-solutions': {
    accentColor: '#0D9488',
    badgeBg: 'bg-teal-50/85 text-teal-700 border-teal-100',
    borderColor: 'border-teal-200/50',
    gradientFrom: 'from-teal-500/10',
    primaryTextColor: 'text-[#0B2E59]',
    bgCircle: 'bg-teal-600/5'
  }
};

// Outcomes (Business Impact outcome metric panels)
const indexImpactList: Record<SolutionId, { title: string; metric: string; desc: string }[]> = {
  'printing-document-management': [
    { title: 'Operational Efficiency', metric: '+38%', desc: 'Reduction in document access bottleneck queues.' },
    { title: 'Cost Optimization', metric: '-30%', desc: 'Average savings verified on cost-per-page audits.' },
    { title: 'SLA Support readiness', metric: '99.4%', desc: 'Device uptime guaranteed across critical clusters.' },
    { title: 'Process Automation', metric: '4x', desc: 'Faster document indexing and digital search speeds.' }
  ],
  'it-hardware-office-automation': [
    { title: 'Deployment SLA', metric: '48h', desc: 'Zero-touch laptop image provisioning with OS baselines.' },
    { title: 'Outage Reduction', metric: '99.99%', desc: 'Network reliability across local SD-WAN links.' },
    { title: 'CapEx Savings', metric: '100%', desc: 'Transition capital assets to predictable monthly OpEx.' },
    { title: 'Productivity Level', metric: '+25%', desc: 'Elimination of boot lagging and Wi-Fi drop cycles.' }
  ],
  'corporate-procurement': [
    { title: 'Vendor Simplification', metric: '180 to 1', desc: 'Consolidation of nationwide unvetted suppliers.' },
    { title: 'Wholesale Savings', metric: '-22%', desc: 'Locked-in volume framework pricing offsets.' },
    { title: 'Delivery Compliance', metric: '99.8%', desc: 'Depot logistics executed within guaranteed SOP timelines.' },
    { title: 'Admin Load Reduction', metric: '-75%', desc: 'Fewer purchase orders, manual approvals and clearances.' }
  ],
  'corporate-gifting': [
    { title: 'Employee Attrition Drop', metric: '-18%', desc: 'Consistent welcome box brand alignment outcome.' },
    { title: 'Sourcing Overhead', metric: '-90%', desc: 'Outsourced packing, storage, and home deliveries.' },
    { title: 'Brand Sentiment', metric: '98.5%', desc: 'Audited post-campaign satisfaction index score.' },
    { title: 'Onboarding Velocity', metric: 'Day 1', desc: 'Ready-to-open kits dispatched automatically.' }
  ],
  'travel-event-management': [
    { title: 'Average Travel Savings', metric: '15%', desc: 'Enterprise volume lodging and carrier pricing.' },
    { title: 'Rescue Resolve Time', metric: '<5 Min', desc: '24/7 dedicated dispatch rescue support lines.' },
    { title: 'Policy Compliance', metric: '100%', desc: 'Automatic block of out-of-budget booking workflows.' },
    { title: 'Event Timelines Failures', metric: '0%', desc: 'SOP-coordinated technical staging at AGMs.' }
  ],
  'training-solutions': [
    { title: 'Adoption Velocity', metric: '+45%', desc: 'Team speed transitioning to cloud technologies.' },
    { title: 'Recruitment Savings', metric: '-50%', desc: 'Bridge critical skills internally, avoiding hire premiums.' },
    { title: 'Class Certifications', metric: '320+', desc: 'Practical test blocks successfully completed.' },
    { title: 'Practical Competency', metric: '94%', desc: 'Hands-on practice retention verified in sandboxes.' }
  ],
  'wellness-solutions': [
    { title: 'Absenteeism Reduction', metric: '-45%', desc: 'Early identification under medical diagnostic blocks.' },
    { title: 'Postural Strain Index', metric: '-65%', desc: 'Ergonomic keyboard and desk setup audit outcomes.' },
    { title: 'Employee Retention', metric: '+12%', desc: 'Strengthened employer branding indicators.' },
    { title: 'Voluntary Engagement', metric: '88%', desc: 'Staff participation verified within custom workshops.' }
  ]
};

// Process roadmap dictionary step variables
const processStepDetails: Record<SolutionId, Array<{ duration: string; stakeholder: string }>> = {
  'printing-document-management': [
    { duration: 'Days 1 - 5', stakeholder: 'Lead Telemetry Auditor' },
    { duration: 'Days 6 - 12', stakeholder: 'Infrastructure Architect' },
    { duration: 'Weeks 2 - 3', stakeholder: 'Network Integrations Lead' },
    { duration: 'Continuous SLA', stakeholder: 'Regional Service Delivery Manager' }
  ],
  'it-hardware-office-automation': [
    { duration: 'Days 1 - 7', stakeholder: 'Systems Lead Architect' },
    { duration: 'Weeks 1 - 2', stakeholder: 'Corporate Finance Lead' },
    { duration: 'Weeks 3 - 4', stakeholder: 'Lead Systems Handover Specialist' },
    { duration: 'Ongoing Routine', stakeholder: 'Operations SLA Director' }
  ],
  'corporate-procurement': [
    { duration: 'Days 1 - 5', stakeholder: 'Vendor Audit Associate' },
    { duration: 'Days 6 - 10', stakeholder: 'Catalog Solutions Manager' },
    { duration: 'Weeks 2 - 3', stakeholder: 'Integration Team Lead' },
    { duration: 'Continuous Sourcing', stakeholder: 'Logistics SLA Manager' }
  ],
  'corporate-gifting': [
    { duration: 'Days 1 - 4', stakeholder: 'Chief Brand Curator' },
    { duration: 'Days 5 - 10', stakeholder: 'Sourcing & Quality Controller' },
    { duration: 'Weeks 2 - 3', stakeholder: 'Laser Operations Specialist' },
    { duration: 'Continuous Execution', stakeholder: 'Enterprise Logistics Lead' }
  ],
  'travel-event-management': [
    { duration: 'Days 1 - 5', stakeholder: 'Corporate Policy Director' },
    { duration: 'Days 6 - 12', stakeholder: 'Systems Travel Developer' },
    { duration: 'Weeks 2 - 3', stakeholder: 'Logistics Desk Dispatcher' },
    { duration: 'Continuous Rescue', stakeholder: 'MICE Operations Manager' }
  ],
  'training-solutions': [
    { duration: 'Days 1 - 7', stakeholder: 'Skills GAP Assessor' },
    { duration: 'Weeks 2 - 3', stakeholder: 'Syllabus Coordinator' },
    { duration: 'Weeks 3 - 4', stakeholder: 'Certified Instruction Lead' },
    { duration: 'Continuous Value', stakeholder: 'Chief Learning Officer' }
  ],
  'wellness-solutions': [
    { duration: 'Days 1 - 5', stakeholder: 'Ergonomics Therapist' },
    { duration: 'Days 6 - 12', stakeholder: 'Program Calendar Designer' },
    { duration: 'Weeks 2 - 3', stakeholder: 'Diagnostic Chief Auditor' },
    { duration: 'Continuous Audit', stakeholder: 'Active Wellness Coordinator' }
  ]
};

// Detailed deliverables checklist metadata for roadmap steps
const deliverablesList: Record<SolutionId, string[][]> = {
  'printing-document-management': [
    [
      'Deploy localized telemetry software to map current devices',
      'Register daily printed sheet outputs and trace color ratios',
      'Analyze historical lease agreements and paper expenditure'
    ],
    [
      'Generate print console multi-function centralization plans',
      'Calculate power offsets and prospective reduction rates',
      'Document printer room layouts and secure swipe credentials'
    ],
    [
      'Load Follow-Me network drivers across primary workstations',
      'Initialize biometric scanning parameters and file databases',
      'Establish automated toner refill scripts on local terminals'
    ],
    [
      'Activate guaranteed technician on-call dispatch SLA desks',
      'Conduct scheduled audits of physical printer cartridges',
      'Deliver automated compliance reports reflecting real volumes'
    ]
  ],
  'it-hardware-office-automation': [
    [
      'Examine local spectrum logs to document office dead zones',
      'Inspect bare-metal server cluster storage age profiles',
      'Draft power load estimates and UPS backup safety lines'
    ],
    [
      'Specify exact configurations for laptop leases',
      'Determine optimal amortization tables (12 to 36 months)',
      'Secure volume production schedules with golden-tier OEMs'
    ],
    [
      'Pre-load secure business-ready operating systems profiles',
      'Deploy unified SD-WAN configurations and encryption credentials',
      'Mount courtroom visual displays and echo-cancelling array mics'
    ],
    [
      'Initialize automated diagnostic software to track component failures',
      'Deploy localized helpdesk queue portals on user desktops',
      'Activate the elite next-business-day hardware swap protocol'
    ]
  ],
  'corporate-procurement': [
    [
      'Sponsor automated spend audits to highlights vendor leaks',
      'Log legacy contract rates and non-compliant grey-market items',
      'Document multi-depot logistics bottlenecks and transit delays'
    ],
    [
      'Select stationary and pantry catalogs for your teams',
      'Negotiate volume discount thresholds with gold alliance suppliers',
      'Lock-in flat pricing structures for custom lease or raw products'
    ],
    [
      'Connect API pipelines directly with SAP or local ERP systems',
      'Configure auto-approval thresholds across department budgets',
      'Ensure secure SSL transfer for all digital dispatch receipts'
    ],
    [
      'Integrate nationwide stock reserves across central depots',
      'Activate auto-dispatch algorithms based on active inventory levels',
      'Produce comprehensive audit reports showing GST profiles upfront'
    ]
  ],
  'corporate-gifting': [
    [
      'Verify corporate color parameters, guidelines, and vectors',
      'Draft tiered budget programs spanning luxury and staff kits',
      'Deliver custom virtual previews and box layouts to teams'
    ],
    [
      'Build physical prototype boxes loaded with customized products',
      'Inspect linen lining, magnetic snap lids, and paper thickness',
      'Collect formal feedback and make necessary configuration adjustments'
    ],
    [
      'Deploy precision high-speed CO2 fiber laser engraving',
      'Program high-stitch embroidery on customized executive apparel',
      'Pack all components securely into custom presentation layouts'
    ],
    [
      'Coordinate climate-controlled warehousing for chocolate products',
      'Schedule automated milestones and anniversary dispatches',
      'Track remote domestic home dispatches with direct notification maps'
    ]
  ],
  'travel-event-management': [
    [
      'Configure precise policy parameters based on corporate grades',
      'Specify preferred airline routes and approved hotel chains',
      'Align approval hierarchies for emergency out-of-budget triggers'
    ],
    [
      'Onboard frequent flyer numbers, visa constraints, and preferences',
      'Connect travel desk databases with central staff portals',
      'Deploy offline compliance checking routines on client devices'
    ],
    [
      'Generate optimal itineraries linking transport, lodging, and fees',
      'Deliver customized digital boarding wallets to team phones',
      'Integrate local executive transportation with vetted car dispatchers'
    ],
    [
      'Expose live delay monitoring on executive dispatch lines',
      'Activate 24/7 rescue support for flight cancellation swaps',
      'Synthesize consolidated single-invoice accounting logs'
    ]
  ],
  'training-solutions': [
    [
      'Draft skills verification logs and deploy diagnostic tests',
      'Document current talency blockages across developer teams',
      'Present custom executive summary highlighting actual skills GAP'
    ],
    [
      'Design comprehensive technical syllabus modules and scripts',
      'Establish cloud practice sandboxes for database operations',
      'Coordinate lesson timetables respecting client work calendars'
    ],
    [
      'Deliver structured, high-intensity workshops led by experts',
      'Deploy live feedback surveys to monitor student rating values',
      'Review task logs in training environments in real time'
    ],
    [
      'Execute exit examinations reflecting industry standards',
      'Award certified credentials validating course achievements',
      'Conduct monthly adoption checks to trace talent deployment progress'
    ]
  ],
  'wellness-solutions': [
    [
      'Deploy anonymized posture and strain question profiles',
      'Log historic data regarding fatigue absenteeism scales',
      'Present comprehensive baseline team strain diagnostic reports'
    ],
    [
      'Coordinate wellness calendars around primary business shifts',
      'Design targeted yoga, focus, and mindfulness routines',
      'Select top diagnostic clinicians for onsite blood profiling'
    ],
    [
      'Establish secure private clinics at physical office rooms',
      'Run certified medical testing with guaranteed HIPAA compliance',
      'Conduct physical ergonomics checks on keyboard angles/coordinates'
    ],
    [
      'Sponsor micro-guided strain relief sessions during operations',
      'Generate consolidated corporate wellness performance scoreboards',
      'Assess yearly metric improvements to optimize future programs'
    ]
  ]
};

// Visual Workflow node arrays for diagram visualization
const workflowDiagrams: Record<SolutionId, { id: string; step: string; desc: string }[]> = {
  'printing-document-management': [
    { id: '1', step: 'Assessment', desc: 'Deploy telemetry software to map printing volumes & leakages' },
    { id: '2', step: 'Infra Planning', desc: 'Sizing proper console blueprit to optimize paper flow' },
    { id: '3', step: 'Deployment', desc: 'Securely mount network multi-function consoles' },
    { id: '4', step: 'Training', desc: 'Onboard key departments on follow-me secure swipe release' },
    { id: '5', step: 'Monitoring', desc: 'Activate automatic toner replenishment logs' },
    { id: '6', step: 'SLA Support', desc: 'Dispatch on-call expert certified maintenance engineers' }
  ],
  'it-hardware-office-automation': [
    { id: '1', step: 'Tech Audit', desc: 'Assess network dead zones and Bare-Metal age profiles' },
    { id: '2', step: 'Leases Customization', desc: 'Determine laptop models & 12-36M billing matrices' },
    { id: '3', step: 'Image Loading', desc: 'Load secure custom operating system baselines & secure keys' },
    { id: '4', step: 'Global Logistics', desc: 'Tracked freight shipping to local business branches' },
    { id: '5', step: 'Onsite Setup', desc: 'Mount access points, route routers & wire boardroom systems' },
    { id: '6', step: 'SLA Lifecycle', desc: 'Uptime locks backing on-demand hardware swap configurations' }
  ],
  'corporate-procurement': [
    { id: '1', step: 'Vendor Audits', desc: 'Trace legacy supplier invoice errors and compliance breaches' },
    { id: '2', step: 'Catalog Lock', desc: 'Specify pre-approved items on locked pricing frameworks' },
    { id: '3', step: 'ERP Connect', desc: 'Link order system directly with Oracle or SAP databases' },
    { id: '4', step: 'Pool Sourcing', desc: 'Aggregate national branch demands for heavy bulk discounts' },
    { id: '5', step: 'Auto-Dispatch', desc: 'Dispatch supplies from temperature-regulated local depots' },
    { id: '6', step: 'Transparent Audit', desc: 'Deliver integrated single bill with clear GST trails' }
  ],
  'corporate-gifting': [
    { id: '1', step: 'Brand Alignment', desc: 'Audit logo colors, dimensions, and material restrictions' },
    { id: '2', step: 'Concept Design', desc: 'Submit curated box sketches and luxury package models' },
    { id: '3', step: 'Physical Mockup', desc: 'Examine sample products, lining, and magnetic box finishes' },
    { id: '4', step: 'Branding Execution', desc: 'Execute precision fiber-laser engraving and embroidery' },
    { id: '5', step: 'Quality Checks', desc: 'Manually inspect packaging integrity before final sealing' },
    { id: '6', step: 'Direct Shipping', desc: 'Dispatch home shipments with live coordinate notification logs' }
  ],
  'travel-event-management': [
    { id: '1', step: 'Policy Mapping', desc: 'Establish carrier tiers & grade budget ranges' },
    { id: '2', step: 'Staff Calibration', desc: 'Integrate frequent flyer numbers and preferred food logs' },
    { id: '3', step: 'Auto-Booking', desc: 'Draft optimal trip tickets matching budget policies' },
    { id: '4', step: 'Flight Deck Logs', desc: 'Monitor active flights to intercept weather or delays' },
    { id: '5', step: 'Hospitality Setup', desc: 'Organize hotel meeting rooms and sound projector grids' },
    { id: '6', step: 'Cost Clearing', desc: 'Deliver simplified consolidated reports to finance' }
  ],
  'training-solutions': [
    { id: '1', step: 'Skills Gap Diagnostic', desc: 'Assess coding and cloud architectural competencies' },
    { id: '2', step: 'Custom Syllabus', desc: 'Establish target lesson schemes and exercise blueprints' },
    { id: '3', step: 'Certified Expert Run', desc: 'High-engagement training led by senior developers' },
    { id: '4', step: 'Sandbox Deploy', desc: 'Practice environments replicating actual production hurdles' },
    { id: '5', step: 'Practical Exit Tests', desc: 'Conduct test blocks in sandboxes to issue certified credits' },
    { id: '6', step: 'Log Metrics Review', desc: 'Track team speed improvements and adopt timelines online' }
  ],
  'wellness-solutions': [
    { id: '1', step: 'Anonymized Study', desc: 'Document team muscle fatigue scales under HIPAA guidelines' },
    { id: '2', step: 'Calendar Mapping', desc: 'Schedule classes matching typical department load times' },
    { id: '3', step: 'Clinic Setup', desc: 'Organize onsite diagnostic rooms for direct blood profiling' },
    { id: '4', step: 'Yoga & Mind Sessions', desc: 'Execute certified physical stretch routines & breathing guides' },
    { id: '5', step: 'Ergonomic Checks', desc: 'Calibrate workstation coordinates, mouse heights, and seating' },
    { id: '6', step: 'Health Audits', desc: 'Deliver yearly corporate wellness scores showing status levels' }
  ]
};

// Interactive use case catalog metadata
const useCasesCatalog: Record<SolutionId, { title: string; challenge: string; strategy: string; result: string }[]> = {
  'printing-document-management': [
    {
      title: 'Secure Healthcare Printing',
      challenge: 'Unsecured clinical documents sitting on public trays violated patient confidentiality rules.',
      strategy: 'Deployed integrated smart card readers across 35 multifunction print units.',
      result: 'Met 100% regulatory compliance, eliminated visual exposure, and decreased paper waste by 24%.'
    },
    {
      title: 'Multi-State Office Consolidation',
      challenge: 'Managing over 120 legacy desktop printers across 14 states led to high invoicing complexity.',
      strategy: 'Consolidated into 18 cloud-managed high-volume network systems with unified diagnostic billing.',
      result: 'Reduced overall printing spend by 35% under a single, direct transparent contract.'
    },
    {
      title: 'Academic Volume Processing',
      challenge: 'High-volume final exam print runs caused critical printer breakdowns and delayed test times.',
      strategy: 'Installed continuous heavy-duty consoles backed by an on-site standby support technician.',
      result: 'Maintained zero exam delay events over 5 continuous academic cycles.'
    },
    {
      title: 'Legal Archive Digitization',
      challenge: 'Filing spaces housing 50,000 document folders slowed folder query speeds to over 15 minutes.',
      strategy: 'Sourced encrypted DMS hosting optical-character-recognition search algorithms.',
      result: 'Reduced index retrieval speeds to under 3 seconds, logging every action securely.'
    }
  ],
  'it-hardware-office-automation': [
    {
      title: 'Scale-Up Tech Device Leases',
      challenge: 'Sudden corporate expansion required the rapid setup of 350 custom-configured laptops.',
      strategy: 'Designed corporate-image leasing schedules with preloaded software baselines.',
      result: 'Delivered fully-ready logins in 48 hours without compromising working capital.'
    },
    {
      title: 'Intelligent Meeting Boardrooms',
      challenge: 'HDMI adapter friction and dropping microphones disrupted hybrid executive reviews.',
      strategy: 'Integrated room soundbars with echo-cancelling array-microphones and simple screen casting.',
      result: 'Decreased boardroom conference connection lag from 12 minutes to under 20 seconds.'
    },
    {
      title: 'High-Density Wi-Fi Infrastructure',
      challenge: 'Office structural walls caused call dropouts during inter-branch team movements.',
      strategy: 'Deployed redundant Wi-Fi controllers triggering seamless packet handoffs.',
      result: 'Guaranteed uninterrupted video streaming across more than 400 parallel active staff logins.'
    },
    {
      title: 'Backup Power Optimization',
      challenge: 'Sudden regional voltage cuts caused database corruption during transactional loops.',
      strategy: 'Engineered custom modular dual-UPS systems paired with active battery telemetry alerts.',
      result: 'Preserved 100% server network operations through 12 deep monsoon storm cycles.'
    }
  ],
  'corporate-procurement': [
    {
      title: 'National Branch Sourcing',
      challenge: 'Independent branches bought custom supplies locally, creating 22% procurement leakage.',
      strategy: 'Centralized administrative goods under flat-rate custom Skymax portal catalogs.',
      result: 'Sourced supplies 28% cheaper with automated electronic transaction records.'
    },
    {
      title: 'Bulk Technology Sourcing',
      challenge: 'Buying memory and network nodes in minor lots led to highly unstable pricing.',
      strategy: 'Formulated volume-guaranteed wholesale agreements directly with gold-tier OEMs.',
      result: 'Sourced 1,250 certified server components at 18% below general retail rates.'
    },
    {
      title: 'Heavy Equipment Imports',
      challenge: 'Advanced laboratory testing units were stalled at port docks due to complex customs paperwork.',
      strategy: 'Deployed Skymax’s legal teams to coordinate import licensing and specialized transport.',
      result: 'Equipment safely integrated at the Noida testing site within 12 days.'
    },
    {
      title: 'Automated Pantry Fulfillment',
      challenge: 'Frequent pantry stockout events interrupted executive visits and required urgent retail trips.',
      strategy: 'Constructed custom weight-sensor replenishment racks inside central stock depots.',
      result: 'Triggered next-day freight delivery automatically, removing manual purchasing time.'
    }
  ],
  'corporate-gifting': [
    {
      title: 'Onboarding Welcome Boxes',
      challenge: 'Onboarding staff kits arrived late, causing negative employee sentiment on day one.',
      strategy: 'Created beautiful pre-assembled kits stored and packed by Skymax.',
      result: 'Delivered welcome boxes directly to homes on day one without HR administrative lag.'
    },
    {
      title: 'High-End Client Appreciation',
      challenge: 'Cheap standard corporate gifts damaged relationships with high-value directors.',
      strategy: 'Assembled elite custom leather boxes featuring engraved smart tech and fine packaging.',
      result: 'Sustained 100% positive executive feedback, strengthening contract values.'
    },
    {
      title: 'National Festive Campaigns',
      challenge: 'Sending over 1,500 fragile hampers across 18 states required immense manual coordination.',
      strategy: 'Distributed logistical dispatches across strategic regional depots.',
      result: 'All dispatches completed securely, logging real-time digital drop coordinate details.'
    },
    {
      title: 'Milestone Recognition Triggers',
      challenge: 'Missing employee milestone anniversaries lowered morale across remote staff clusters.',
      strategy: 'Integrated HR platform triggers directly with Skymax-fulfillment dispatch calendars.',
      result: 'Gifts shipped automatically, celebrating key workforce events securely on time.'
    }
  ],
  'travel-event-management': [
    {
      title: 'Nationwide Leadership Retreats',
      challenge: 'Coordinating travel, rooms, and meals for 240 managers in Pune caused high billing chaos.',
      strategy: 'Chartered corporate flights, reserved hotel blocks, and managed stage designs.',
      result: 'Completed event safely on budget under a single, itemized corporate bill.'
    },
    {
      title: 'Emergency Traveler Help Desks',
      challenge: 'Severe weather stranded tech leads in distant branches with no support.',
      strategy: 'Activated 24/7 rescue coordinators to organize re-bookings and hotel swaps.',
      result: 'All stranded leads returned safely, bypassing manual accounting approval delays.'
    },
    {
      title: 'Product Launch Stage Production',
      challenge: 'Lagging microphone audio and bad coordinate mapping disrupted previous releases.',
      strategy: 'Engineered premium stage setups with high-definition LED backdrops.',
      result: 'Staged seamless product showcase event attended by over 400 enterprise clients.'
    },
    {
      title: 'Executive Travel Policy Tuning',
      challenge: 'Out-of-policy luxury travel bookings created 14% budget leakage.',
      strategy: 'Implemented smart online portals that blocked non-compliant route options instantly.',
      result: 'Reduced administrative booking approval cycles from 18 hours to under 5 minutes.'
    }
  ],
  'training-solutions': [
    {
      title: 'AWS Cloud Architecture Labs',
      challenge: 'Adopting cloud storage was delayed by major tech talency bottlenecks.',
      strategy: 'Sponsered custom 6-week technical bootcamps led by senior enterprise engineers.',
      result: '22 developers successfully passed cloud credentials, accelerating cloud upgrades.'
    },
    {
      title: 'Executive Leadership Grooming',
      challenge: 'Talented technical managers struggled with client communication and conflict resolution.',
      strategy: 'Conordinated structured face-to-face workshops on behavioral presence.',
      result: 'Average team effectiveness ratings rose by 40% in yearly internal reviews.'
    },
    {
      title: 'Simulated Customer Success',
      challenge: 'New customer support staff required 3 months of training to handle clients.',
      strategy: 'Built simulated client interaction sandboxes preloaded with actual dialogue logs.',
      result: 'Reduced CS onboarding periods by 50% while sustaining high CSAT metrics.'
    },
    {
      title: 'Sales Qualification Seminars',
      challenge: 'Extended sales cycles on high-value contracts limited corporate revenue speed.',
      strategy: 'Conducted advanced value-based negotiation workshops for senior accounts team.',
      result: 'Decreased average b2b negotiation timelines by 18 days.'
    }
  ],
  'wellness-solutions': [
    {
      title: 'Medical Diagnostic Screening',
      challenge: 'Undiagnosed chronic physical issues increased sudden medical leave incidents by 14%.',
      strategy: 'Hosted periodic on-site health screening clinics covering blood panels and lifestyle.',
      result: 'Achieved 88% employee participation, diagnosing health issues early.'
    },
    {
      title: 'Ergonomic Desk Calibrations',
      challenge: 'Repetitive strain and neck pain reports triggered constant physiotherapy claims.',
      strategy: 'Physical therapists audited keyboard heights, mouse positions, and chair coordinates.',
      result: 'Decreased postural discomfort reports by 65% in post-audit wellness logs.'
    },
    {
      title: 'Mind-Fitness Stress Relief',
      challenge: 'High work pressure at customer service branches drove high recruitment attrition.',
      strategy: 'Launched brief mindfulness breaks and confidential health counseling.',
      result: 'Stabilized employee attrition by 14%, increasing daily concentration levels.'
    },
    {
      title: 'Workplace Burnout Interventions',
      challenge: 'High workloads on critical deliverables led to executive departures.',
      strategy: 'Implemented workload balancing frameworks coupled with quiet workspace rooms.',
      result: 'Reduced voluntary fatigue departures to zero across 12 calendar months.'
    }
  ]
};

export default function SolutionDetailView({ solution, onNavigate }: SolutionDetailViewProps) {
  const theme = solutionThemes[solution.id] || solutionThemes['printing-document-management'];
  const activeImpacts = indexImpactList[solution.id] || indexImpactList['printing-document-management'];
  const activeRoadmapMeta = processStepDetails[solution.id] || processStepDetails['printing-document-management'];
  const activeDeliverablesMeta = deliverablesList[solution.id] || deliverablesList['printing-document-management'];
  const activeWorkflowNodes = workflowDiagrams[solution.id] || workflowDiagrams['printing-document-management'];
  const activeUseCases = useCasesCatalog[solution.id] || useCasesCatalog['printing-document-management'];
  
  // State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({ 0: true });
  const [activeUseCaseIndex, setActiveUseCaseIndex] = useState<number>(0);

  // Re-initialize state when moving across solutions
  useEffect(() => {
    setActiveStepIndex(0);
    setActiveUseCaseIndex(0);
    setCompletedSteps({ 0: true });
    setOpenFaqIndex(null);
  }, [solution.id]);

  const handleNavClick = (page: PageId, optSolution?: SolutionId) => {
    onNavigate(page, optSolution);
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

  const IconComponent = serviceIconMap[solution.id] || Laptop;

  // Pick 3 related services from solutionsData excluding current
  const relatedSolutions = solutionsData
    .filter(item => item.id !== solution.id)
    .slice(0, 3);

  return (
    <div 
      id={`solution-detail-${solution.id}`} 
      className="bg-white min-h-screen text-slate-800 font-sans relative overflow-x-hidden selection:bg-blue-50 selection:text-[#1D5EA8] pt-24"
      style={{ backgroundImage: `url("${gridBgSvg}")` }}
    >
      <SEO 
        title={`${solution.title} | Enterprise Solutions`} 
        description={solution.shortDesc || solution.description.substring(0, 150) + "..."} 
        keywords={`${solution.title.toLowerCase()}, enterprise IT, business operations, skymax solutions, ${solution.category.toLowerCase()}`} 
        canonical={`/solutions/${solution.id}`}
      />

      {/* Dynamic blurred abstract spot to convey elite depth */}
      <div className={`absolute top-20 right-0 w-[550px] h-[550px] rounded-full filter blur-[150px] opacity-[0.04] pointer-events-none z-0 ${theme.bgCircle}`} />
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] rounded-full filter blur-[140px] opacity-[0.03] pointer-events-none z-0 bg-blue-900/10" />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden text-left z-10 border-b border-neutral-100 group">
        
        {/* Absolute Background Image aligned completely to the right half and blending seamlessly */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none z-0 overflow-hidden">
          {/* Edge fades for seamless page integration */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white via-white/85 lg:via-white/30 to-transparent z-10" />
          
          <img 
            src={
              solution.id === 'printing-document-management' ? 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1200&q=80' :
              solution.id === 'it-hardware-office-automation' ? 'https://images.unsplash.com/photo-1588702547897-9007ad5854b5?auto=format&fit=crop&w=1200&q=80' :
              solution.id === 'corporate-procurement' ? 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80' :
              solution.id === 'corporate-gifting' ? 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80' :
              solution.id === 'travel-event-management' ? 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80' :
              solution.id === 'training-solutions' ? 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80' :
              'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80'
            } 
            alt={solution.title} 
            className="w-full h-full object-cover grayscale opacity-[0.14] lg:opacity-[0.22] transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:opacity-[0.75] scale-100 group-hover:scale-[1.03]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Column expanded for beautiful editorial reading length */}
            <div className="lg:col-span-8 space-y-6">
              <button
                onClick={() => handleNavClick('solutions')}
                className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#1D5EA8] hover:text-[#0B2E59] transition-colors"
                id="hero-back-to-matrix-btn"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>BACK TO SOLUTIONS MATRIX</span>
              </button>

              <div className="space-y-4">
                <span className={`inline-flex items-center space-x-1.5 ${theme.badgeBg} text-xs font-mono font-bold px-3 py-1.5 rounded-full border`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{solution.category.toUpperCase()}</span>
                </span>
                
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-sans font-bold ${theme.primaryTextColor} tracking-tight leading-[1.08]`}>
                  {solution.title}
                </h1>
                
                <p className="text-sm md:text-base text-neutral-500 font-light leading-relaxed max-w-2xl font-sans pt-1">
                  {solution.description}
                </p>
              </div>

              {/* Key Highlights inside Hero with beautiful borders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-neutral-100">
                {solution.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs text-[#0B2E59] font-medium bg-[#FAF9F5]/80 p-3 rounded-xl border border-neutral-200/50">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#1D5EA8] shrink-0 mt-0.5" />
                    <span className="leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BUSINESS IMPACT SECTION ================= */}
      <section className="py-12 bg-[#FAF9F5] bg-grid-pattern border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-neutral-200/50 pb-5 mb-8">
            <div className="flex flex-col items-start gap-1 text-left">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#1D5EA8] uppercase block">VALUE FIRST METHODOLOGY</span>
              <h2 className="text-2xl font-bold text-[#0B2E59] tracking-tight">Business Impact</h2>
              <p className="text-xs text-neutral-500 font-light font-sans">Projected outcomes and strategic advancements unlocked upon consolidated coordination.</p>
            </div>
            
            <div className="mt-4 md:mt-0 bg-[#EBF5FF] text-[#1D5EA8] border border-blue-200/60 rounded-lg px-3.5 py-1.5 text-[11px] font-mono font-bold uppercase select-none tracking-widest">
              OUTCOMES DETAILED REPORT
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeImpacts.map((obj, i) => (
              <div 
                key={i} 
                className="bg-white border border-neutral-200/80 rounded-2xl p-5 hover:border-neutral-300 transition-all shadow-xs text-left group"
              >
                <div className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-widest block">KPI MODELING 0{i + 1}</div>
                <h4 className="text-sm font-bold text-[#0B2E59] font-sans mt-2 group-hover:text-[#1D5EA8] transition-colors leading-snug">{obj.title}</h4>
                <div className="text-3xl font-mono font-extrabold text-[#1D5EA8] tracking-tight mt-3">{obj.metric}</div>
                <p className="text-xs text-neutral-400 font-light font-sans mt-1 leading-normal">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEY OFFERINGS (Bento Layout Redesign) ================= */}
      <section className="py-20 bg-white bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl gap-4 md:gap-5">
            <span className="inline-block text-[10px] font-mono font-bold tracking-widest text-[#1D5EA8] bg-[#EBF5FF] px-2.5 py-1 rounded border border-blue-200 uppercase">
              Bento Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#0B2E59] tracking-tight">
              Key Strategic Offerings
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-light font-sans max-w-xl">
              Engineered with different card scopes to establish operational visual rhythm, matching precise enterprise guidelines.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Box 1 (Take width 7 on desktop) */}
            <div className="md:col-span-7 bg-[#FAF9F5] border border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-[#1D5EA8]/50 shadow-2xs hover:shadow-xs transition-all text-left flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#1D5EA8]/10 to-transparent pointer-events-none rounded-full" />
              
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D5EA8] shadow-3xs">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold text-neutral-400 tracking-widest block">CORE BLUEPRINT CONFIGURATION</span>
                  <h3 className="text-lg font-bold text-[#0B2E59] font-sans mt-1">{solution.keyOfferings[0]?.title || 'Core Strategy Asset'}</h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed font-sans mt-2">
                    {solution.keyOfferings[0]?.description || 'Complete bespoke alignment and hardware planning designed to integrate seamlessly within active operational boundaries.'}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200/60 mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-[11px] font-mono text-[#1D5EA8] font-semibold bg-white border border-blue-100 px-3 py-1 rounded-md">
                  <Zap className="w-3.5 h-3.5" />
                  <span>PREMIUM CONFIGURATION SERVICE</span>
                </div>
                <span className="text-[11px] font-sans text-neutral-400 font-light">Custom SLA Bound</span>
              </div>
            </div>

            {/* Box 2 (Take width 5 on desktop) */}
            <div className="md:col-span-5 bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-neutral-300 shadow-2xs hover:shadow-xs transition-all text-left flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-3xs">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold text-indigo-400 tracking-widest block font-sans">MODULAR SCALABILITY</span>
                  <h3 className="text-base font-bold text-[#0B2E59] font-sans mt-1">{solution.keyOfferings[1]?.title || 'Scale Optimization'}</h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed font-sans mt-2">
                    {solution.keyOfferings[1]?.description || 'Ensuring complete flexibility for scaling teams and multi-state offices.'}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 mt-4 text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest block">
                SOP Level II Approved
              </div>
            </div>

            {/* Box 3 (Take width 5 on desktop) */}
            <div className="md:col-span-5 bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-neutral-300 shadow-2xs hover:shadow-xs transition-all text-left flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shadow-3xs">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold text-teal-500 tracking-widest block">TRANSPARENT MONITORING LAYERS</span>
                  <h3 className="text-base font-bold text-[#0B2E59] mt-1 font-sans">{solution.keyOfferings[2]?.title || 'Audit & Verification System'}</h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed font-sans mt-2">
                    {solution.keyOfferings[2]?.description || 'Complete transparency. Providing itemized reports and analytics to protect budget targets.'}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 mt-4 text-[10px] font-mono font-bold text-[#1D5EA8] tracking-widest uppercase block">
                PAN INDIA ACTIVE
              </div>
            </div>

            {/* Box 4 (Take width 7 on desktop - Big visual highlight) */}
            <div className="md:col-span-7 bg-[#0B2E59] text-white rounded-3xl p-6 sm:p-8 space-y-4 hover:border-neutral-800 shadow-2xs hover:shadow-xs transition-all text-left flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#1D5EA8]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 bg-[#1D5EA8] text-white border border-blue-400/20 text-[9px] font-mono font-bold rounded">CONSULTATIVE ACCENT</span>
                  <span className="text-[9px] text-[#1D5EA8] font-mono font-extrabold tracking-widest">SOCIALLY BONDED PLATFORM</span>
                </div>
                
                <h3 className="text-lg font-bold tracking-tight">Dedicated Client Advantage</h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed font-sans">
                  We integrate directly on your local teams. By placing on-site payroll corporate-bonded engineers and dedicated helpdesks, Skymax guarantees maximum operational uptime. We do not subcontract, ensuring high security.
                </p>
              </div>

              <div className="pt-6 border-t border-[#1D5EA8]/40 mt-6 flex items-center justify-between">
                <span className="text-xs font-semibold text-white/95">Skymax SLA Guarantee</span>
                <span className="text-[10px] font-mono text-neutral-300 flex items-center space-x-1">
                  <span>Audit Level IV Certification</span>
                </span>
              </div>
            </div>

          </div>

          {/* Primary Benefits sidebar transformed to elegant badges summary */}
          <div className="bg-[#FAF9F5] border border-neutral-200 rounded-2xl p-6 text-left space-y-4">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-[#1D5EA8]" />
              <h4 className="font-display font-bold text-[#0B2E59] text-sm">Primary Solutions Benefits</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {solution.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white border border-neutral-200/50 p-4 rounded-xl flex items-start space-x-3 shadow-3xs hover:border-neutral-300 transition-colors">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-[#1D5EA8] flex items-center justify-center shrink-0 text-xs font-bold font-sans">
                    0{idx+1}
                  </span>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed font-sans">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHY THIS SOLUTION MATTERS SECTION ================= */}
      <section className="py-20 bg-[#FAF9F5] bg-grid-pattern border-t border-b border-neutral-200/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: Common Challenges */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#1D5EA8] uppercase block">CRITICAL BUSINESS CONSTRAINTS</span>
                <h2 className="text-3xl font-bold text-[#0B2E59] tracking-tight">Why This Solution Matters</h2>
                <p className="text-xs text-neutral-400 font-light font-sans leading-relaxed">
                  Every large enterprise faces persistent logistical failure nodes. Skymax actively maps and targets these systemic variables.
                </p>
              </div>

              {/* Challenge cards */}
              <div className="space-y-4">
                {solution.challengesSolved.map((chal, i) => (
                  <div 
                    key={i} 
                    className="bg-white border border-neutral-200 p-5 rounded-2xl shadow-3xs flex items-start space-x-3.5 group hover:border-[#1D5EA8]/40 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold text-rose-500 uppercase tracking-widest">FAILURE VECTOR 0{i + 1}</span>
                      <p className="text-xs text-neutral-500 font-light leading-relaxed font-sans">
                        {chal}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Skymax Advantages */}
            <div className="lg:col-span-7 bg-white border border-neutral-200 p-6 sm:p-8 rounded-3xl space-y-6 shadow-xs">
              <div className="border-b border-neutral-100 pb-4">
                <h4 className="font-display font-bold text-[#0B2E59] text-base">The Skymax Mitigation Plan</h4>
                <p className="text-xs text-neutral-400 font-light mt-0.5">How we resolve systemic variables under SLA-Locked compliance.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'SOP-Locked Compliance', desc: 'Processes are ITIL-aligned, executing identical diagnostic checkups across all branch nodes.' },
                  { title: 'Dedicated In-House Team', desc: '100% direct payroll staff. No middle-agents, protecting your corporate security codes.' },
                  { title: 'Direct OEM Sourcing', desc: 'Sovereign alliances with HP, Cisco, Lenovo provide fast procurement parts matching.' },
                  { title: 'Itemized Audit Reports', desc: 'Provides real-time dashboards for cost tracing, ensuring predictable monthly budgets.' }
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-[#FAF9F5]/60 border border-neutral-200/80 rounded-xl space-y-2 group hover:bg-[#EBF5FF]/20 hover:border-[#1D5EA8]/20 transition-all">
                    <div className="w-6 h-6 rounded bg-[#EBF5FF] border border-blue-100 flex items-center justify-center text-[#1D5EA8] font-bold text-xs">
                      {i + 1}
                    </div>
                    <h5 className="font-sans font-bold text-[#0B2E59] text-xs leading-none">{item.title}</h5>
                    <p className="text-[10px] text-neutral-400 font-light leading-relaxed font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#EBF5FF]/30 border border-blue-200/40 rounded-2xl p-4 flex items-center space-x-3.5">
                <ShieldCheck className="w-6 h-6 text-[#1D5EA8] shrink-0" />
                <p className="text-[11px] text-[#0B2E59] font-medium leading-relaxed font-sans">
                  Our contract structures are fully customizable. From early exit options to direct hardware upgrade pathways, your control remains absolute.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROCESS / ROADMAP SECTION ================= */}
      <section className="bg-white bg-grid-pattern py-20 border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200/60 pb-6">
            <div className="flex flex-col items-start gap-2 text-left">
              <span className="inline-block text-[10px] font-mono font-bold tracking-widest text-[#1D5EA8] uppercase block">
                Linear-Inspired Dashboard
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#0B2E59] tracking-tight">
                Deployment &amp; Integration Roadmap
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 font-light max-w-xl font-sans">
                Active workflow stages configured cleanly within our Monday PM dashboard framework. Select a node to trace deliverables.
              </p>
            </div>

            {/* Dashboard Indicators */}
            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                disabled={activeStepIndex === 0}
                className={`p-2.5 rounded-full border transition-all ${
                  activeStepIndex === 0
                    ? 'border-neutral-100 text-neutral-300 cursor-not-allowed'
                    : 'border-neutral-200 text-[#0B2E59] hover:bg-[#FAF9F5] shadow-3xs active:scale-95'
                }`}
                title="Previous Step"
                id="pm-prev-step-btn"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              
              <div className="text-xs font-mono font-bold text-neutral-500 bg-[#FAF9F5] border border-neutral-200 px-3 py-1.5 rounded-md">
                Stage {activeStepIndex + 1} of {solution.process.length}
              </div>

              <button
                onClick={() => setActiveStepIndex(Math.min(solution.process.length - 1, activeStepIndex + 1))}
                disabled={activeStepIndex === solution.process.length - 1}
                className={`p-2.5 rounded-full border transition-all ${
                  activeStepIndex === solution.process.length - 1
                    ? 'border-neutral-100 text-neutral-300 cursor-not-allowed'
                    : 'border-neutral-200 text-[#0B2E59] hover:bg-[#FAF9F5] shadow-3xs active:scale-95'
                }`}
                title="Next Step"
                id="pm-next-step-btn"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Connected timeline rail */}
          <div className="relative py-6 overflow-x-auto scrollbar-none">
            <div className="relative min-w-[700px] py-4 px-4">
              
              {/* Slate Base Connecting line */}
              <div className="absolute top-[48px] left-12 right-12 h-0.5 bg-neutral-200 rounded z-0" />
              
              {/* Dynamic Line Progress fill */}
              <div 
                className="absolute top-[48px] left-12 h-0.5 bg-[#1D5EA8] z-0 rounded transition-all duration-500 ease-out"
                style={{ width: `${(activeStepIndex / (solution.process.length - 1)) * 100}%` }}
              />

              <div className="grid grid-cols-4 relative z-10 text-center">
                {solution.process.map((p, idx) => {
                  const isActive = idx === activeStepIndex;
                  const isCompleted = idx < activeStepIndex || completedSteps[idx];
                  return (
                    <div 
                      key={p.step} 
                      className="flex flex-col items-center cursor-pointer px-3"
                      onClick={() => setActiveStepIndex(idx)}
                    >
                      {/* Round Node Element */}
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs border transition-all duration-300 ${
                          isActive 
                            ? 'bg-[#0B2E59] text-white border-white scale-110 shadow-md ring-4 ring-[#1D5EA8]/20'
                            : isCompleted
                            ? 'bg-[#1D5EA8] text-white border-white'
                            : 'bg-white text-neutral-400 border-neutral-300 hover:border-neutral-400 hover:text-neutral-600'
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-4 h-4 stroke-[3]" />
                        ) : (
                          <span>0{p.step}</span>
                        )}
                      </div>

                      <span className={`block text-[11px] font-sans font-bold mt-3 transition-colors ${isActive ? 'text-[#0B2E59] scale-105 font-extrabold' : 'text-neutral-400'}`}>
                        {p.title}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Active Phase Dashboard card (Linear style) */}
          <div className="bg-[#FAF9F5] border border-neutral-200 rounded-3xl p-6 sm:p-8 text-left space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-200/60 pb-5">
              <div className="flex items-center space-x-3">
                <span className="text-4xl font-mono font-extrabold text-[#1D5EA8]">0{activeStepIndex + 1}</span>
                <div className="h-6 w-px bg-neutral-200" />
                <div>
                  <span className="text-[9px] font-mono font-bold text-neutral-400 tracking-widest block uppercase">ACTIVE PROTOCOL PHASE</span>
                  <h4 className="text-base font-bold text-[#0B2E59] mt-0.5">{solution.process[activeStepIndex]?.title}</h4>
                </div>
              </div>

              {/* Status Selectors */}
              <div className="flex items-center space-x-2">
                <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border ${
                  completedSteps[activeStepIndex] 
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-150' 
                    : 'bg-white text-[#1D5EA8] border-blue-150 animate-pulse'
                }`}>
                  {completedSteps[activeStepIndex] ? '✓ TASK COMPLETED' : 'STATUS: ACTIVE'}
                </span>

                <button
                  type="button"
                  onClick={() => {
                    setCompletedSteps(prev => ({
                      ...prev,
                      [activeStepIndex]: !prev[activeStepIndex]
                    }));
                  }}
                  className="bg-white border border-neutral-200 hover:bg-neutral-50 px-3 py-1 text-[10px] font-mono text-neutral-500 rounded-md transition-colors"
                >
                  TOGGLE STATE
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left detail Column */}
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                  {solution.process[activeStepIndex]?.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  
                  <div className="bg-white border border-neutral-200 p-4 rounded-2xl flex items-center space-x-3 shadow-3xs">
                    <div className="p-2 bg-blue-50 text-[#1D5EA8] rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold text-neutral-400 block tracking-wider uppercase">EXPECTED DURATION</span>
                      <span className="text-xs font-bold text-slate-800 leading-tight">{activeRoadmapMeta[activeStepIndex]?.duration || 'Days 1 - 7'}</span>
                    </div>
                  </div>

                  <div className="bg-white border border-neutral-200 p-4 rounded-2xl flex items-center space-x-3 shadow-3xs">
                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold text-neutral-400 block tracking-wider uppercase">RESPONSIBLE TEAM</span>
                      <span className="text-xs font-bold text-slate-800 leading-tight">{activeRoadmapMeta[activeStepIndex]?.stakeholder || 'Operations SLA Director'}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Checklist Deliverables Column - Redesigned cleanly */}
              <div className="lg:col-span-5 bg-white border border-neutral-200 p-5 rounded-2xl space-y-4 shadow-3xs">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#1D5EA8] block border-b border-neutral-100 pb-2">PHASE REQUISITES &amp; OUTPUTS</span>
                
                <div className="space-y-3">
                  {(activeDeliverablesMeta[activeStepIndex] || []).map((stepVal, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-neutral-500 font-light">
                      <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</span>
                      <p className="leading-snug">{stepVal}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= VISUAL WORKFLOW SECTION ================= */}
      <section className="py-20 bg-[#FAF9F5] bg-grid-pattern border-b border-neutral-200/60 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
          
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-4 md:gap-5">
            <span className="inline-block text-[10px] font-mono font-bold tracking-widest text-[#1D5EA8] bg-white px-2.5 py-1 rounded border border-blue-200 uppercase">
              Systematic Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#0B2E59] tracking-tight">
              Operational Visual Workflow
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans font-light">
              We govern delivery vectors using strict standard operating procedures, ensuring zero communication lag.
            </p>
          </div>

          {/* Interactive connected workflow nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            
            {activeWorkflowNodes.map((node, idx) => {
              const isLast = idx === activeWorkflowNodes.length - 1;
              return (
                <div key={node.id} className="relative group text-left">
                  
                  {/* Connected line in desktop view */}
                  {!isLast && (
                    <div className="hidden lg:block absolute top-7 left-1/2 right-[-50%] h-0.5 bg-neutral-200 z-0" />
                  )}

                  <div className="bg-white border border-neutral-205 rounded-2xl p-5 hover:border-[#1D5EA8] shadow-3xs hover:shadow-2xs transition-all relative z-10 space-y-3 flex flex-col justify-between h-full group">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="w-6.5 h-6.5 rounded-lg bg-[#EBF5FF] text-[#1D5EA8] border border-blue-100 flex items-center justify-center text-[10px] font-mono font-bold">
                          0{idx + 1}
                        </span>
                        
                        {!isLast ? (
                          <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:translate-x-0.5 transition-transform" />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        )}
                      </div>

                      <h4 className="font-display font-bold text-xs text-[#0B2E59]">{node.step}</h4>
                      <p className="text-[9.5px] text-neutral-400 font-light leading-snug font-sans">{node.desc}</p>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ================= USE CASES SECTION ================= */}
      <section className="py-20 bg-white bg-grid-pattern border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
          
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-4 md:gap-5">
            <span className="inline-block text-[10px] font-mono font-bold tracking-widest text-[#1D5EA8] bg-[#EBF5FF] px-2.5 py-1 rounded border border-blue-200 uppercase">
              Proven Case Log
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#0B2E59] tracking-tight">
              Interactive Use Cases
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans font-light">
              Select any validated scenario block to review the exact challenge, strategy blueprint, and verified outcome.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
            
            {/* Left side: Case selectors */}
            <div className="lg:col-span-5 space-y-2">
              {activeUseCases.map((cs, i) => {
                const isSelected = i === activeUseCaseIndex;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveUseCaseIndex(i)}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none flex items-center justify-between ${
                      isSelected 
                        ? 'border-[#1D5EA8] bg-[#EBF5FF]/30 text-[#0B2E59] font-semibold' 
                        : 'border-neutral-200 text-neutral-500 hover:bg-[#FAF9F5] hover:border-neutral-300'
                    }`}
                  >
                    <span>{cs.title}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'translate-x-1 text-[#1D5EA8]' : 'text-neutral-300'}`} />
                  </button>
                );
              })}
            </div>

            {/* Right side: Detailed case description card */}
            <div className="lg:col-span-7 bg-[#FAF9F5] border border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div>
                <span className="text-[9px] font-mono font-bold text-[#1D5EA8] bg-white border border-blue-200 px-2.5 py-1 rounded uppercase tracking-wider">ENTERPRISE AUDITED STORY</span>
                <h3 className="text-lg font-bold text-[#0B2E59] font-sans mt-3">{activeUseCases[activeUseCaseIndex]?.title}</h3>
                <div className="h-0.5 w-12 bg-blue-200/50 rounded mt-1.5" />
              </div>

              <div className="space-y-4">
                
                {/* Challenge */}
                <div className="bg-white border border-neutral-200/60 p-4.5 rounded-xl space-y-1">
                  <span className="text-[9px] font-mono font-bold text-[#8B2635] uppercase tracking-wider block">THE CHALLENGE</span>
                  <p className="text-[11.5px] text-neutral-500 font-light leading-relaxed font-sans mt-1">
                    {activeUseCases[activeUseCaseIndex]?.challenge}
                  </p>
                </div>

                {/* Strategy */}
                <div className="bg-white border border-neutral-200/60 p-4.5 rounded-xl space-y-1">
                  <span className="text-[9px] font-mono font-bold text-[#1D5EA8] uppercase tracking-wider block">SKYMAX STRATEGY BLUEPRINT</span>
                  <p className="text-[11.5px] text-neutral-500 font-light leading-relaxed font-sans mt-1">
                    {activeUseCases[activeUseCaseIndex]?.strategy}
                  </p>
                </div>

                {/* Outcome */}
                <div className="bg-emerald-50/50 border border-emerald-150 p-4.5 rounded-xl space-y-1">
                  <span className="text-[9px] font-mono font-bold text-emerald-700 uppercase tracking-wider block">VERIFIED BUSINESS OUTCOME</span>
                  <p className="text-[11.5px] text-emerald-800 font-semibold leading-relaxed font-sans mt-1">
                    {activeUseCases[activeUseCaseIndex]?.result}
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= COMPLIANCE FAQS ================= */}
      <section className="bg-white bg-grid-pattern py-16 md:py-20 border-b border-neutral-150 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center gap-4 md:gap-5 mb-10">
            <span className="inline-block text-[9px] font-mono font-bold tracking-widest text-[#1D5EA8] border border-blue-200 bg-[#EBF5FF] px-2 py-0.5 rounded uppercase">VERIFIED SPECS</span>
            <h3 className="text-2xl font-bold text-[#0B2E59] tracking-tight">Frequently Asked Specifications</h3>
            <p className="text-xs text-neutral-400 font-light">Understand how service levels and custom diagnostic contracts operate.</p>
          </div>

          <div className="space-y-4">
            {solution.faq.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="border border-neutral-200 rounded-2xl bg-white overflow-hidden transition-all shadow-3xs hover:border-neutral-300">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-4.5 flex justify-between items-center bg-white hover:bg-[#FAF9F5]/40 transition-colors focus:outline-none"
                  >
                    <span className="font-semibold text-[#0B2E59] text-xs sm:text-sm font-sans flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#1D5EA8]" />
                      <span>{item.question}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#1D5EA8]' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="p-4.5 pt-0 border-t border-neutral-100 text-xs leading-relaxed text-neutral-500 font-light font-sans">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= RELATED SOLUTIONS SECTION ================= */}
      <section className="py-16 bg-[#FAF9F5] bg-grid-pattern border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#1D5EA8] uppercase block">EXPLORE PORTFOLIO</span>
            <h3 className="text-2xl font-bold text-[#0B2E59] font-sans">Related Solutions</h3>
            <p className="text-xs text-neutral-450 font-light font-sans">Leverage coordinated solutions across multiple operational categories.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedSolutions.map((item) => {
              const relTheme = solutionThemes[item.id] || solutionThemes['printing-document-management'];
              return (
                <div 
                  key={item.id}
                  className="bg-white border border-neutral-200 rounded-2xl p-5 hover:border-[#1D5EA8] shadow-3xs hover:shadow-2xs transition-all text-left flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className={`inline-block ${relTheme.badgeBg} text-[9px] font-semibold font-mono tracking-wider px-2 py-0.5 rounded`}>
                      {item.category.toUpperCase()}
                    </span>
                    <h4 className="font-display font-bold text-sm text-[#0B2E59] leading-tight">{item.title}</h4>
                    <p className="text-[11px] text-neutral-400 font-light leading-relaxed font-sans">{item.shortDesc}</p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 mt-4">
                    <button
                      onClick={() => handleNavClick('solution-detail', item.id)}
                      className="text-xs font-mono font-bold text-[#1D5EA8] hover:text-[#0B2E59] flex items-center space-x-1.5 transition-colors"
                    >
                      <span>EXPLORE DEEP VIEW</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= CALL-TO-ACTION (Enterprise-grade highlight) ================= */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden text-center z-10 border-t border-neutral-800">
        <div className="absolute inset-0 bg-radial from-blue-950/40 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="inline-block bg-blue-950/65 text-[#1D5EA8] border border-blue-800/30 font-mono font-bold text-[9px] tracking-[0.25em] px-4 py-1.5 rounded-full uppercase">
            PRINCIPAL STRATEGIC ADVISORY
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight max-w-3xl mx-auto leading-tight">
            Initiate a Technical Dialogue <br className="hidden sm:inline" /> for {solution.title}
          </h2>
          
          <p className="text-xs sm:text-sm text-neutral-305 max-w-xl mx-auto font-sans font-light leading-relaxed">
            Every organization is unique. Schedule a structured technical consultation or custom capability check with our senior solution designers.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4 max-w-md mx-auto">
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-white hover:bg-neutral-50 text-[#0B2E59] font-mono font-bold text-xs px-6 py-4 rounded-xl tracking-wider uppercase transition-all flex items-center justify-center space-x-1 shadow-sm w-full sm:w-auto"
            >
              <span>Request Technical Audit</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className="bg-slate-800 hover:bg-slate-750 text-white border border-slate-700 font-mono font-semibold text-xs px-6 py-4 rounded-xl tracking-wider uppercase transition-all flex items-center justify-center space-x-1.5 w-full sm:w-auto"
            >
              <Activity className="w-4 h-4 text-[#1D5EA8] animate-pulse" />
              <span>Diagnostic Value Calculator</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
