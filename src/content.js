/**
 * All marketing copy for the FleetHub landing page.
 * Components import from here — no copy strings live inside JSX.
 */

export const brand = {
  name: 'FleetHub',
  maker: 'by SoloHub',
};

// WhatsApp is the only real contact channel — every CTA points here.
export const contact = {
  whatsapp: '+965 9001 7795',
  whatsappHref:
    'https://wa.me/96590017795?text=' +
    encodeURIComponent('Hi FleetHub — I’d like to book a demo.'),
};

export const nav = {
  links: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Who It’s For', href: '#roles' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Book a Demo',
};

export const hero = {
  badge: 'Trusted by fleet operators in Kuwait',
  headlineTop: 'Run Your Entire Fleet Operation',
  // Shorter first line on phones, where the full one wraps awkwardly
  headlineTopMobile: 'Run Your Operation',
  headlineAccent: 'From One Place',
  subhead:
    'Manage drivers, vehicles, deliveries, and payroll across multiple companies — built for Kuwait delivery fleets.',
  primaryCta: 'Book a Demo',
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
      points: [
        'Daily delivery logs',
        'Petty cash & deductions',
        'Full audit trail',
      ],
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
      title: 'Employee Management',
      description:
        'Upload civil IDs, licences, and passports, then track contracts and vehicle assignments for every person on your team.',
      art: 'people',
      image: '/driverprofile.png',
      // Very wide (1066×314) — shown whole rather than cropped to the panel
      imageFit: 'contain',
      imageAlt:
        'FleetHub driver profile header showing the driver’s ID, company, aggregator, and status',
    },
    {
      title: 'Vehicle Maintenance',
      description:
        'Assign vehicles to drivers, log maintenance, and print bilingual handover forms and reports on demand.',
      art: 'vehicle',
      image: '/service.png',
      // Wider than the panel (1076×518) — shown whole so the units on the right
      // survive the narrow mobile crop
      imageFit: 'contain',
      imageAlt:
        'FleetHub vehicle service form with odometer, maintenance, and cost fields',
    },
    {
      title: 'Expense Tracking',
      description:
        'Run piece-rate and fixed payroll, log petty cash and deductions, and see exactly where every dinar went this month.',
      art: 'payroll',
      image: '/salary.png',
      // Much wider than the panel (1390×652) — cropping it to fill loses the
      // heading and the total on mobile, so it is shown whole instead
      imageFit: 'contain',
      imageAlt:
        'FleetHub monthly expenses chart tracking spend across the year',
    },
    {
      title: 'Live Notifications',
      description:
        'See what is about to expire — civil IDs, licences, registrations, and contracts — plus salaries you have not entered yet. The list updates itself across every company.',
      art: 'alerts',
      image: '/notification.png',
      imageAlt:
        'FleetHub notifications panel listing expired and expiring contracts, civil IDs, and licences',
    },
  ],
};

export const roles = {
  label: 'Who It’s For',
  headingTop: 'Built for the People',
  headingAccent: 'Running the Fleet',
  subheading:
    'One system, scoped to each role — every user sees only the companies and pages they are assigned.',
  cards: [
    {
      title: 'Operations',
      art: 'ops',
      description:
        'Keep drivers, vehicles, and daily movement on record instead of in a group chat.',
      points: [
        'Vehicle assignments per driver',
        'Daily delivery logs',
        'Maintenance & handover forms',
      ],
    },
    {
      title: 'HR',
      art: 'hr',
      description:
        'Own every personnel file and know what lapses before it lapses, not after.',
      points: [
        'Driver & employee records',
        'Contracts and renewals',
        'Civil ID & licence expiry alerts',
      ],
    },
    {
      title: 'Finance',
      art: 'accounts',
      description:
        'Close the month with the numbers, the paperwork, and the audit trail in one place.',
      points: [
        'Piece-rate & fixed salaries',
        'Petty cash and deductions',
        'Arabic payment vouchers',
      ],
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
        'Yes. Each user gets a set of assigned companies plus per-page permissions, and a top-bar selector narrows every list, dashboard, and export to whichever companies they pick. The two controls are independent, so an accountant can hold payroll access across three companies while an HR user sees only one — and a user with no companies assigned sees nothing at all. Anything outside a user’s companies is not refused — it simply is not there. Viewer-role accounts can read but never write.',
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
        'The alert list is recalculated from live records every time you open it — nothing to mark as read, nothing to keep in sync. It covers driver and employee civil IDs, licences, and contracts; vehicle registration and service due dates; company documents, including sections that are missing entirely; and commitment contracts like accommodation or car rental. It also catches money problems the same way — a salary that was never entered for the month, or a driver whose gross income went negative. Most alerts flag both what has already expired and what lapses within 30 days — contracts use 90 days — and everything is filtered to the companies and permissions of the signed-in user.',
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
  secondaryCta: 'Book a Demo',
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
