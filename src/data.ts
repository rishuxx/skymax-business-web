import { Solution, Pillar, TrustIndicator } from './types';

export const trustIndicators: TrustIndicator[] = [
  {
    title: 'Authorized Partner',
    description: 'Direct alliance with leading global OEMs including HP, Dell, Lenovo, Cisco, and Canon.',
  },
  {
    title: 'Pan India Support',
    description: 'Seamless service distribution and support network operational across tier-1 and tier-2 cities.',
  },
  {
    title: 'Industry Experts',
    description: 'A team of certified consultants and enterprise engineers with over 15+ years of operational expertise.',
  },
  {
    title: 'Dedicated Service Team',
    description: 'On-site SLA-bound engineering and helpdesk resources to ensure minimal critical business downtime.',
  },
  {
    title: 'Structured SOP Processes',
    description: 'ITIL-aligned processes governing design, implementation, audits, and remote management.',
  },
];

export const supportTimelineSteps = [
  {
    phase: 'Diagnostic',
    title: 'Telemetry & Audit',
    description: 'Comprehensive evaluation of enterprise hardware, device configurations, network status, and utilization patterns to pinpoint operational inefficiencies.',
  },
  {
    phase: 'Preventive Maintenance',
    title: 'Continuous Remediation',
    description: 'Scheduled calibration, automated software patch updates, hardware clean-ups, and pre-emptive part replacements to avert systemic failures.',
  },
  {
    phase: 'Quick Repairs',
    title: 'SLA-Driven Dispatch',
    description: 'Direct deployment of certified field engineers within strict response frames (4-hour on-site SLA for critical server and workstation environments).',
  },
  {
    phase: 'Parts Replacement',
    title: 'OEM Genuine Sourcing',
    description: 'Instant logistics chain matching high-availability parts inventories across India, supplying only authenticated genuine spare parts.',
  },
];

export const ofcLocations = [
  {
    name: 'Pune Corporate Head Office',
    address: 'Survey No. 300/3/1, DY Patil College Road, Lohegaon, Pune – 411047, Maharashtra, India',
    phone: '+91 8329682551, +91 8976408999',
    email: 'dheeraj.bali@skymaxbusiness.com',
    mapUrl: 'https://maps.google.com/maps?q=DY%20Patil%20College%20Road,%20Lohegaon,%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed'
  },
  {
    name: 'Prayagraj Regional Office',
    address: 'UG-4, Vinayak Central Plaza, Cooper Road, M.G. Marg, Civil Lines, Allahabad, U.P, 211001',
    phone: '+91 79857 71381',
    email: '',
    mapUrl: 'https://maps.google.com/maps?q=Vinayak%20Central%20Plaza,%20Cooper%20Road,%20Civil%20Lines,%20Allahabad&t=&z=13&ie=UTF8&iwloc=&output=embed'
  }
];

export const whySkymaxPillars: Pillar[] = [
  {
    number: 1,
    title: 'Consultative Philosophy',
    subtitle: 'Tailored Infrastructures',
    description: 'We do not sell pre-packaged software or generic hardware bundles. We design systems from the ground up to match the unique volume requirements and structural demands of your organization.',
  },
  {
    number: 2,
    title: 'PAN India Distribution Network',
    subtitle: 'Sovereign Compliance',
    description: 'With logistics and support capabilities stretching across 24 states and all major metros, we unify multi-office IT provisioning under a single administrative umbrella.',
  },
  {
    number: 3,
    title: 'In-House Operational Force',
    subtitle: 'Direct accountability',
    description: 'Unlike modern aggregators who sub-contract labor, our team consists of full-time, corporate-bonded, manufacturer-certified engineers who carry direct corporate accountability.',
  },
  {
    number: 4,
    title: 'SLA-Locked Compliance',
    subtitle: 'High Availability',
    description: 'We back all Managed Support Services and printing contracts with legally binding Service Level Agreements that guarantee uptime and specify response timetables.',
  },
  {
    number: 5,
    title: 'End-to-End Managed Lifecycle',
    subtitle: 'Procurement to Asset Disposal',
    description: 'We orchestrate the entire corporate lifecycle: consulting, financing, procurement, installation, scaling, preventative maintenance, and secure e-waste recycling.',
  },
  {
    number: 6,
    title: 'Large-Scale Deal Capabilities',
    subtitle: 'Capital Resiliency',
    description: 'Our strong financial standing allows us to fund capital-heavy infrastructure projects, corporate procurement orders, and office automation leasing plans.',
  },
  {
    number: 7,
    title: 'Direct OEM Authorizations',
    subtitle: 'Unrestricted Access',
    description: 'Our gold-tier partnerships with Cisco, HP, Dell, Lenovo, and Canon secure preferential volume pricing and elite tier-3 backline technical support for our clients.',
  },
  {
    number: 8,
    title: 'Transparent Fiscal Audits',
    subtitle: 'Predictable Expenditure',
    description: 'We provide itemized reporting dashboards for printing, procurement, and support costs, ensuring complete transparency with zero hidden surcharges or administrative markups.',
  },
  {
    number: 9,
    title: 'Rigorous SOP Governance',
    subtitle: 'Standardized Workflows',
    description: 'Our workflows—from onboarding corporate gifts to diagnostic printing telemetry—are governed by strict execution protocols that ensure repeatable quality.',
  },
  {
    number: 10,
    title: 'Holistic Client Retention',
    subtitle: 'Averaging 98% Renewal',
    description: 'Our relationship timelines average over 7+ years of continuous engagement, reflecting our dedication to keeping your business operations running efficiently day and night.',
  },
];

export const solutionsData: Solution[] = [
  {
    id: 'printing-document-management',
    title: 'Printing & Document Management',
    category: 'Business Infrastructure',
    shortDesc: 'Corporate managed print services (MPS) and digital capture workflows that reduce overall printing costs by up to 30%.',
    description: 'We deliver comprehensive print fleet optimization and document digitization solutions designed for modern enterprise security and cost-control mandates.',
    highlights: [
      'Enterprise Managed Print Services (MPS)',
      'High-speed multifunction network printers (MFPs)',
      'Document management systems (DMS) with optical character recognition (OCR)',
      'Secure follow-me printing with swipe-card authentication'
    ],
    keyOfferings: [
      {
        title: 'Managed Print Services (MPS)',
        description: 'Complete outsourcing of printing infrastructure, covering printer supply, automatic toner replenishment, and parts replacement based on a cost-per-page model.'
      },
      {
        title: 'Document Management Software',
        description: 'Secure, encrypted cloud-based document management that centralizes files, automates archiving, and enforces policy-based user permissions.'
      },
      {
        title: 'Fleet Security Hardening',
        description: 'Integration of biometric, PIN-pad, and employee swipe-card print release to prevent sensitive documents from sitting unattended on printer trays.'
      }
    ],
    benefits: [
      'Reduce total cost of ownership (TCO) for physical print fleets by 20% to 40%.',
      'Optimize sustainability footprints with paperless digitization systems.',
      'Avert high-severity visual or database corporate data leaks via secure release protocols.'
    ],
    challengesSolved: [
      'Uncontrolled corporate printing costs and zero visibility into employee print volumes.',
      'Insecure document workflows that violate strict regional legal and data compliance panels.',
      'Frequent IT department tickets focused on toner outages, driver updates, and broken devices.'
    ],
    process: [
      { step: 1, title: 'Print Audit', description: 'Deploy telemetry software to map existing device counts, volume outputs, and total baseline costs.' },
      { step: 2, title: 'Fleet Consolidation', description: 'Design an elegant blueprint replacing fragmented hardware with unified, high-volume multi-function systems.' },
      { step: 3, title: 'Software Layering', description: 'Configure print server logic, deploy user-groups, and integrate scanning capture endpoints.' },
      { step: 4, title: 'SLA Lifecycle Support', description: 'Activate automated preventative monitoring and on-call engineering dispatch.' }
    ],
    faq: [
      {
        question: 'What is a cost-per-page (CPP) print billing model?',
        answer: 'You pay an agreed rate for actual printed pages. Skymax covers all parts, maintenance software, toner cartridges, and engineering labor under this flat rate.'
      },
      {
        question: 'How do you handle corporate data security?',
        answer: 'All scanned and printed metadata is local-to-network encrypted. Swipe-card authentication restricts retrieval to verified employees standing directly at the machine.'
      }
    ]
  },
  {
    id: 'it-hardware-office-automation',
    title: 'IT Hardware & Office Automation',
    category: 'Business Infrastructure',
    shortDesc: 'Sovereign computing architectures, network hardware, conference technologies, and modern automated systems.',
    description: 'We source, deploy, and maintain corporate-ready hardware arrays and communication setups to support frictionless workflow execution.',
    highlights: [
      'Enterprise laptops, desktops, and bare-metal server infrastructure leasing programs',
      'Unified enterprise networking (Cisco, Aruba, Ruckus Wi-Fi solutions)',
      'Modern automated boardrooms, professional audio, and video conference setups',
      'Uninterruptible Power Supply (UPS) setups and power redundancy planning'
    ],
    keyOfferings: [
      {
        title: 'Enterprise Device Leasing & Sales',
        description: 'Flexible bulk procurement models for high-tier professional laptop ranges (Dell Latitude, Lenovo ThinkPad, HP EliteBook) coupled with corporate images pre-loaded.'
      },
      {
        title: 'Intelligent Meeting Spaces',
        description: 'Full-integration boardroom automations featuring multi-device wireless casting, dedicated Teams/Zoom rooms, and intelligent echo-cancelling array-microphones.'
      },
      {
        title: 'SD-WAN & Network Security',
        description: 'Sovereign local area networks, high-density secure wireless networks, and corporate statefirewall architectures supporting hundreds of parallel connections.'
      }
    ],
    benefits: [
      'Transition heavy hardware capital expenditure (CapEx) into highly predictable operational models (OpEx).',
      'Empower mobile and hybrid teams with completely standard, clean device profiles.',
      'Achieve uninterrupted operations through enterprise-grade local network designs and UPS arrays.'
    ],
    challengesSolved: [
      'High onboarding delays due to slow manual computer provisioning.',
      'Constant VPN drops and spotty office Wi-Fi limiting hybrid-presence productivity.',
      'Irreversible database corruption from sudden brownouts and sub-standard backup storage.'
    ],
    process: [
      { step: 1, title: 'Infrastructure Assessment', description: 'Evaluate current local layouts, network endpoints, and power infrastructure limits.' },
      { step: 2, title: 'Sizing & Solution Blueprint', description: 'Select high-efficiency systems and layout reliable physical cable schemes.' },
      { step: 3, title: 'Zero-Touch Provisioning', description: 'Configure base layers and load specialized server components before final shipment.' },
      { step: 4, title: 'Onsite Integration', description: 'Mount and secure network racks, establish meeting hubs, and launch core services.' }
    ],
    faq: [
      {
        question: 'Do you offer device financing or rental structures?',
        answer: 'Yes. We provide modern IT hardware leasing structures spanning 12, 24, or 36 months, conserving working capital of growth-focused organizations.'
      },
      {
        question: 'Is maintenance included in corporate leases?',
        answer: 'Absolutely. Every leased hardware unit is backed by standard warranty programs and on-site engineering swap-outs managed directly by Skymax.'
      }
    ]
  },
  {
    id: 'corporate-procurement',
    title: 'Corporate Procurement',
    category: 'Business Services',
    shortDesc: 'Unified supply chain orchestration for raw materials, bulk electronics, office essentials, and specialized machinery.',
    description: 'We streamline business-to-business corporate supply procurement to secure volume discounts, ensure material compliance, and remove procurement blockages.',
    highlights: [
      'Consolidated bulk supply agreements',
      'Digital e-procurement integration',
      'Global OEM supply-chain logistics',
      'Sovereign regulatory and audit-trail compliance'
    ],
    keyOfferings: [
      {
        title: 'Bulk Technology Sourcing',
        description: 'Preferential wholesale price frames for high-density components, microchips, server RAM, client-workstations, and storage arrays.'
      },
      {
        title: 'General Administrative Consolidation',
        description: 'Single-source replenishment programs for nationwide office hubs, containing pantry goods, high-quality printing paper, and general consumables.'
      },
      {
        title: 'Industrial Equipment Logistics',
        description: 'Handling complex international import customs, clearance, and domestic freight for major engineering machinery and heavy laboratory units.'
      }
    ],
    benefits: [
      'Lower direct purchasing costs by leveraging Skymax volume contracts with international suppliers.',
      'Consolidate hundreds of unvetted, compliance-violating vendors into one corporate partner.',
      'Guarantee delivery timetables with structured logistics pipelines.'
    ],
    challengesSolved: [
      'Inflated administrative costs from processing individual invoices for small office supplies.',
      'Frequent shipping delays of crucial materials that cause assembly or business halts.',
      'Non-compliant grey-market hardware breaching internal corporate audit guidelines.'
    ],
    process: [
      { step: 1, title: 'Sourcing Audit', description: 'Analyze your historical vendor spend, volumes, and delivery bottlenecks.' },
      { step: 2, title: 'Framework Consolidation', description: 'Establish customized price-locks and define specific catalogs.' },
      { step: 3, title: 'Workflow Digitalization', description: 'Connect our operations with your ERP (SAP, Oracle) for painless auto-approvals.' },
      { step: 4, title: 'Continuous Logistics', description: 'Deploy materials via dedicated warehousing and reliable distribution channels.' }
    ],
    faq: [
      {
        question: 'Can you customize custom catalogs for individual branches?',
        answer: 'Yes. We configure specialized portal catalogs displaying pre-approved items tailored to each branch, respecting regional budgets.'
      },
      {
        question: 'What audit records do you generate?',
        answer: 'Every line item includes full GST compliance data, clean physical receipts, digital tracking, and OEM authentication certificates.'
      }
    ]
  },
  {
    id: 'corporate-gifting',
    title: 'Corporate Gifting',
    category: 'Business Services',
    shortDesc: 'Bespoke corporate merchandise, high-end employee welcome kits, rewards programs, and luxury executive hampers.',
    description: 'We craft and distribute branded corporate products and executive items that reinforce internal loyalty and elevate corporate brand sentiment.',
    highlights: [
      'Bespoke luxury hampers and premium client souvenirs',
      'Curated onboarding boxes with premium branded items',
      'Automated global dispatch for milestones and anniversaries',
      'Strict quality controls and premium packaging standards'
    ],
    keyOfferings: [
      {
        title: 'Branded Tech & Apparels',
        description: 'Premium laser-etched electronics (power banks, Bluetooth speakers, sleek smartwatches) and custom-tailored executive garments.'
      },
      {
        title: 'Executive Hampers',
        description: 'Gourmet organic collections, elite leather accessories, and hand-selected custom items for high-value client accounts.'
      },
      {
        title: 'New Hire Welcome Boxes',
        description: 'Ready-to-open, highly positive employee onboarding boxes featuring custom notebooks, metal vacuum tumblers, and professional keychains.'
      }
    ],
    benefits: [
      'Foster a high-retention corporate identity among distant virtual and physical teams.',
      'Deliver premium physical touchpoints that build strong bonds during corporate events.',
      'Save hundreds of internal HR and marketing hours spent packing hampers by outsourcing full-gifting mechanics.'
    ],
    challengesSolved: [
      'Sub-standard corporate gifts that damage brand image.',
      'Frustrating delivery logs with items breaking or arriving late to employee addresses.',
      'Lack of scale in printing custom merchandise leading to inflated cost margins.'
    ],
    process: [
      { step: 1, title: 'Concept Formulation', description: 'Align with corporate marketing teams regarding your brand colors, goals, and budget tiers.' },
      { step: 2, title: 'Physical Mockups', description: 'Assemble prototype kits for sensory inspection and finish verification.' },
      { step: 3, title: 'Precision Branding', description: 'Utilize state-of-the-art laser engraving, embroidery, and premium gift boxes.' },
      { step: 4, title: 'Milestone Fulfillment', description: 'Store inventory in our climate-controlled warehouse and ship on demand.' }
    ],
    faq: [
      {
        question: 'Is there a minimum order quantity (MOQ) for custom merchandise?',
        answer: 'Standard MOQs vary between 50 to 100 units depending on the customization method, but we support periodic scaling for long-term programs.'
      },
      {
        question: 'Do you manage individual remote delivery directly to homes?',
        answer: 'Yes. We operate a complete logistics layer: send us employee zip codes, and we manage direct-to-home insulated shipments with real-time tracking.'
      }
    ]
  },
  {
    id: 'travel-event-management',
    title: 'Travel & Event Management',
    category: 'Business Services',
    shortDesc: 'Sovereign business travel bookings, group tours, logistics coordination, and comprehensive event organization.',
    description: 'We design and coordinate structured enterprise business travel and premium corporate conferences with precise timing and compliance.',
    highlights: [
      'Consolidated corporate business travel and flight booking integrations',
      'Corporate retreats, product launches, and annual general meetings (AGMs)',
      '24/7 client rescue lines handling sudden schedule modifications',
      'Integrated corporate travel policy compliance controls'
    ],
    keyOfferings: [
      {
        title: 'Travel Desk Outsourcing',
        description: 'Complete flight, luxury rail, premium sedan, and vetted business-hotel booking structures mapped to specific rank allowances.'
      },
      {
        title: 'Large-Scale MICE Events',
        description: 'Flawless execution of massive corporate conferences, award shows, product launches, and management bootcamps.'
      },
      {
        title: 'Sovereign Travel Compliance',
        description: 'Integration of real-time corporate policy blocks that prevent unauthorized booking budget overflows before they occur.'
      }
    ],
    benefits: [
      'Minimize direct corporate hotel and transport costs by up to 15% through our volume rates.',
      'Mitigate travel risks with dedicated emergency support agents available 24/7.',
      'Deliver memorable, clean corporate events that amplify your values.'
    ],
    challengesSolved: [
      'Out-of-policy bookings and expense reports that trigger accounting audits.',
      'Stranded team members in distant timezones without active backhaul support.',
      'Disorganized corporate conferences characterized by sub-standard AV, late pickups, and bad timelines.'
    ],
    process: [
      { step: 1, title: 'Policy Setup', description: 'Define grade-specific budgets, premium approvals, and preferred airline blocks.' },
      { step: 2, title: 'Corporate Profiling', description: 'Register travelers, loyalty tiers, food preferences, and medical needs.' },
      { step: 3, title: 'Continuous Booking', description: 'Issue automated, instant itineraries with comprehensive digital travel cards.' },
      { step: 4, title: 'Real-Time Rescue', description: 'Provide multi-channel support for delays, weather cancellations, and prompt re-routing.' }
    ],
    faq: [
      {
        question: 'How does Skymax handle sudden last-minute booking changes?',
        answer: 'We maintain dedicated enterprise travel dispatchers who handle rapid re-bookings, flight updates, and hotel switches in real time.'
      },
      {
        question: 'Do you manage event space renting and AV coordination?',
        answer: 'Yes, our event teams handle venue rental contracts, stage planning, sound arrays, custom catering, and physical registration kiosks.'
      }
    ]
  },
  {
    id: 'training-solutions',
    title: 'Training Solutions',
    category: 'People & Development',
    shortDesc: 'Certified executive instruction, technology workshops, leadership bootcamps, and software upskilling.',
    description: 'We empower teams with relevant corporate training programs that address talent gaps, improve efficiency, and reduce onboarding timelines.',
    highlights: [
      'Custom technical certification bootcamps (Cloud, Security, Networking)',
      'High-performance sales acceleration and leadership academies',
      'Soft skills, client communications, and executive presence workshops',
      'Scalable digital training modules with tracking support'
    ],
    keyOfferings: [
      {
        title: 'Digital Up-Skilling Calendars',
        description: 'Corporate-tailored deep dives into modern technology spaces including AWS Cloud architectures, cybersecurity paradigms, and modern DevOps tools.'
      },
      {
        title: 'Leader Accelerators',
        description: 'Certified workshops preparing junior directors and team leaders for strategic decision-making, conflict resolution, and financial planning.'
      },
      {
        title: 'Customer Success Certification',
        description: 'Interactive workshops focus on high-impact communication, negotiation, and cross-cultural presentation standards.'
      }
    ],
    benefits: [
      'Bridge critical technical gaps internally, saving heavy recruiter fees for senior skills.',
      'Raise overall team performance and engagement, lowering turnover in competitive arenas.',
      'Standardize the execution of new project management systems.'
    ],
    challengesSolved: [
      'Irregular project workflows arising from fragmented technology understanding in teams.',
      'Stagnant management layers struggling to transition from manual to automated project styles.',
      'High onboarding cycles for new developers adjusting to major modern environments.'
    ],
    process: [
      { step: 1, title: 'Skill GAP Analysis', description: 'Run secure competency test blocks across departments to locate exact training needs.' },
      { step: 2, title: 'Syllabus Customization', description: 'Develop targeted exercise sandboxes, real-world models, and structured lecture schedules.' },
      { step: 3, title: 'Execution Phase', description: 'Deliver high-engagement sessions using certified senior instructors.' },
      { step: 4, title: 'Measurement & Certification', description: 'Conduct exit exams, provide formal certificates, and track retention data.' }
    ],
    faq: [
      {
        question: 'Can training classes be delivered directly at our physical corporate site?',
        answer: 'Yes, we conduct onsite intensive training labs at your offices, as well as digital training with access to mock sandbox environments.'
      },
      {
        question: 'Do you design custom learning paths for specific software frameworks?',
        answer: 'We design complete technology onboarding workflows customized to your team’s proprietary technology architecture.'
      }
    ]
  },
  {
    id: 'wellness-solutions',
    title: 'Wellness Solutions',
    category: 'People & Development',
    shortDesc: 'Sovereign corporate health screenings, mental wellness programs, stress reduction workshops, and nutritional guidance.',
    description: 'We install modular, premium corporate wellness frameworks that foster healthy habits, cultivate resilience, and reduce overall absenteeism.',
    highlights: [
      'Comprehensive on-site executive health audits and diagnostic clinics',
      'Certified mindfulness programs, yoga blocks, and stress relief initiatives',
      'Customized ergonomic assessments for modern office spaces',
      'Direct partnerships with major healthcare institutions and insurance desks'
    ],
    keyOfferings: [
      {
        title: 'Preventative Health Screenings',
        description: 'On-site clinical setups providing blood profiles, cardiac analysis, lifestyle counseling, and early symptom detection.'
      },
      {
        title: 'Mind-Fitness Frameworks',
        description: 'Interactive modules offering stress coping workshops, burnout intervention strategies, and confidential counseling sessions.'
      },
      {
        title: 'Aesthetic Ergonomics Audits',
        description: 'Certified physical therapists analyzing desk postures, lighting setups, and workstation coordinates to minimize physical discomfort.'
      }
    ],
    benefits: [
      'Reduce medical leave and long-term insurance premiums.',
      'Boost everyday team focus, positivity, and physical stamina with healthier habits.',
      'Solidify your employer branding under high-standard employee wellness frameworks.'
    ],
    challengesSolved: [
      'High absenteeism scales resulting from chronic postural stress and unmanaged fatigue.',
      'Burnout leading to low productivity and negative team morale.',
      'Low participation rates in generic wellness campaigns by installing personalized programs instead.'
    ],
    process: [
      { step: 1, title: 'Demographic Study', description: 'Anonymously survey teams to map primary stress markers and physical pain points.' },
      { step: 2, title: 'Wellness Roadmap', description: 'Formulate a realistic wellness calendar spanning physical health, mental focus, and ergonomics.' },
      { step: 3, title: 'Active Implementation', description: 'Install secure clinic spaces, stream live micro-guided breaks, and provide expert webinars.' },
      { step: 4, title: 'Analytics Review', description: 'Evaluate participation patterns and compute specific operational metrics over time.' }
    ],
    faq: [
      {
        question: 'How do you guarantee anonymous survey responses?',
        answer: 'All data matches HIPAA standards, ensuring individual responses are aggregated anonymously to protect privacy.'
      },
      {
        question: 'Can wellness sessions be integrated into corporate standard hours easily?',
        answer: 'Yes, we design micro-learning models (15-30 mins) that fit into daily routines without disrupting workflows.'
      }
    ]
  }
];
