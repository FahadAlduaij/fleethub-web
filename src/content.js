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
      stat: 'Day-to-Day',
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
      title: 'Vehicles & Maintenance',
      description:
        'Assign drivers to vehicles, log maintenance, and print bilingual handover forms and reports on demand.',
      art: 'vehicle',
      image: '/service.png',
      imageAlt:
        'FleetHub bilingual vehicle handover form with vehicle details and a condition inspection diagram',
    },
    {
      title: 'Salaries & Expenses',
      description:
        'Automated payroll, petty cash, and contract-based expense tracking.',
      art: 'payroll',
      image: '/salary.png',
      // Wide shot — shown whole rather than cropped to the panel
      imageFit: 'contain',
      imageAlt:
        'FleetHub expense breakdown chart totalling 718.000 KWD across salaries, services, and petty cash',
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
  subheading:
    'Straight answers on access, payroll, and keeping every document valid.',
  items: [
    {
      question: 'Can one user manage several companies from a single account?',
      answer:
        'Yes. Each user gets a set of assigned companies plus per-page permissions, and a top-bar selector narrows every list, dashboard, and export to whichever companies they pick. The two controls are independent, so an accountant can hold payroll access across three companies while an HR user sees only one — and a user with no companies assigned sees nothing at all. Viewer-role accounts can read but never write.',
    },
    {
      question: 'Does FleetHub generate Arabic payment vouchers?',
      answer:
        'Yes. Payment vouchers spell the KWD amount out in formal Arabic — dinars and fils — and are available from driver salaries, employee salaries, petty cash, and individual driver and employee records. The system also prints fuel card, phone, and SIM card receipts, and CSV exports are written so Arabic opens correctly in Excel.',
    },
    {
      question: 'How is driver pay calculated?',
      answer:
        'Drivers are paid piece-rate: total driver amount = cost per order × completed orders, plus bonus or tips. What actually gets transferred is that total minus deductions and minus any cash dues the driver still owes. Completed orders are entered on the salary record itself — the daily delivery log is kept separately. FleetHub also tracks gross income per record — total income minus the driver’s amount — so you see the margin on every driver, every month. Office employees run on a completely separate fixed-salary system (base + overtime + allowances − deductions), and there is one salary record per person per month in both.',
    },
    {
      question: 'How does document expiry tracking work?',
      answer:
        'The alert list is recalculated from live records every time you open it — nothing to mark as read, nothing to keep in sync. It covers driver and employee civil IDs, licences, and contracts; vehicle registration and service due dates; company documents, including sections that are missing entirely; and commitment contracts like accommodation or car rental. Most alerts flag both what has already expired and what lapses within 30 days — contracts use 90 days — and everything is filtered to the companies and permissions of the signed-in user.',
    },
    {
      question: 'Is FleetHub used by drivers or customers?',
      answer:
        'Neither — it is an internal back-office system. Every login belongs to your own staff: fleet managers, operations, HR, and accounts. Drivers and vehicles are records you manage, not app users, so there is no driver app and no customer-facing side.',
    },
  ],
};

export const cta = {
  label: 'Get Started',
  headlineTop: 'Ready to simplify your fleet operations?',
  headlineAccent: 'Let’s talk.',
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
