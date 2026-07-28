/**
 * All marketing copy for the FleetHub landing page.
 * Components import from here — no copy strings live inside JSX.
 */

export const brand = {
  name: 'FleetHub',
  maker: 'by SoloHub',
};

export const nav = {
  links: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Get Started',
};

export const hero = {
  badge: 'Trusted by fleet operators in Kuwait',
  headlineTop: 'Run Your Entire Fleet Operation',
  headlineAccent: 'From One Place',
  subhead:
    'Manage drivers, vehicles, deliveries, and payroll across multiple companies — built for Kuwait delivery fleets.',
  primaryCta: 'Get Started',
  secondaryCta: 'Watch Demo',
};

export const stats = {
  label: 'By the Numbers',
  headingTop: 'Built for Real',
  headingAccent: 'Fleet Operations',
  subheading:
    'Every company, driver, and dinar — accounted for, every single day.',
  cards: [
    {
      stat: 'Multi-Company',
      caption: 'One platform, every entity',
      points: [
        'Unified access control',
        'Scoped permissions',
        'One login, every company',
      ],
    },
    {
      stat: 'Real-Time',
      caption: 'Always current, never stale',
      points: [
        'Document expiry alerts',
        'Live updating',
        'Instant notifications',
      ],
    },
    {
      stat: 'Ops-Proven',
      caption: 'Runs the daily grind',
      points: ['Daily delivery logs', 'Petty cash & deductions', 'Full audit trail'],
    },
  ],
};

export const howItWorks = {
  label: 'How It Works',
  headingTop: 'Built for Modern',
  headingAccent: 'Fleet Teams',
  subheading:
    'Powerful tools that help you manage people, vehicles, and payroll with confidence.',
  cards: [
    {
      title: 'Drivers & Employees',
      description:
        'Track documents, contracts, and assignments for every person on your team.',
      art: 'people',
      image: '/driverprofile.png',
      imageAlt:
        'FleetHub driver profile showing civil ID, licence expiry, contact, and work details',
    },
    {
      title: 'Vehicles & Deliveries',
      description:
        'Assign vehicles, log maintenance, and record daily deliveries per driver.',
      art: 'vehicle',
      image: '/service.png',
      imageAlt:
        'FleetHub create service form with service date, odometer, maintenance type, and cost in KWD',
    },
    {
      title: 'Salaries & Expenses',
      description:
        'Automated payroll, petty cash, and contract-based expense tracking — all in KWD.',
      art: 'payroll',
      image: '/salary.png',
      // Wide, dense table — enlarged so the columns stay readable in the card
      imageZoom: 1.8,
      imageAlt:
        'FleetHub bulk driver salary sheet with base salary, bonus, deductions, and transferable amounts in KWD',
    },
    {
      title: 'Live Notification',
      description:
        'Get alerted before civil IDs, licences, and vehicle registrations expire — live across every company, with no manual chasing.',
      art: 'alerts',
      image: '/notification.png',
      imageAlt:
        'FleetHub notifications panel listing expired and expiring contracts, civil IDs, and licences',
    },
  ],
};

export const testimonials = {
  label: 'Testimonials',
  headingTop: 'Trusted by the People',
  headingAccent: 'Running the Fleet',
  subheading: 'Placeholder quotes — swap for real customer feedback before launch.',
  cards: [
    {
      quote:
        'Placeholder quote. Describe how FleetHub replaced spreadsheets and put every company, driver, and vehicle under one roof.',
      name: 'Placeholder Name',
      role: 'Fleet Operations Manager',
    },
    {
      quote:
        'Placeholder quote. Describe how payroll runs and Arabic payment vouchers now take minutes instead of days.',
      name: 'Placeholder Name',
      role: 'Head of Accounts',
    },
    {
      quote:
        'Placeholder quote. Describe how document expiry alerts keep every driver licence and vehicle permit valid.',
      name: 'Placeholder Name',
      role: 'HR & Admin Lead',
    },
  ],
};

export const faq = {
  label: 'FAQ',
  headingTop: 'Questions,',
  headingAccent: 'Answered',
  subheading: 'Placeholder answers — replace with your final wording.',
  items: [
    {
      question: 'Can one user manage several companies from a single account?',
      answer:
        'Placeholder answer. Explain that one login can be scoped to multiple companies, with permissions set per company so staff only see the entities they are assigned to.',
    },
    {
      question: 'Does FleetHub generate Arabic payment vouchers?',
      answer:
        'Placeholder answer. Explain that payment vouchers are produced in Arabic with amounts in KWD, ready to print or attach to accounting records.',
    },
    {
      question: 'How is driver pay calculated?',
      answer:
        'Placeholder answer. Explain that driver pay is built from base salary, per-delivery counts, deductions, and contract terms, then rounded to three decimals for KWD.',
    },
    {
      question: 'How does document expiry tracking work?',
      answer:
        'Placeholder answer. Explain that licences, residencies, vehicle permits, and insurance carry expiry dates, and the system alerts the right staff before each one lapses.',
    },
    {
      question: 'Is FleetHub used by drivers or customers?',
      answer:
        'Placeholder answer. Explain that FleetHub is an internal back-office system — fleet managers, HR, accountants, and ops staff are the only users.',
    },
  ],
};

export const cta = {
  label: 'Get Started',
  headlineTop: 'Ready to streamline your fleet operations?',
  headlineAccent: 'Start managing smarter today.',
  primaryCta: 'Get Started',
  secondaryCta: 'Talk to Sales',
};

export const footer = {
  columns: [
    {
      title: 'Product',
      links: ['Features', 'Integrations', 'Changelog'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Documentation', 'Help Center'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Contact'],
    },
  ],
  copyright: '© 2026 FleetHub. All rights reserved.',
  legal: ['Privacy Policy', 'Terms of Service'],
};
