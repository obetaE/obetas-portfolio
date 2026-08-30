import type { UIUXProject } from '../types';

/**
 * UI/UX case studies rendered by src/pages/UIUXCaseStudyPage.tsx.
 *
 * The page resolves a project from the URL (/uiux/:slug) by matching either
 * `slug` or a slugified `title`, so both /uiux/averly-haven and a title-derived
 * URL will find the same entry.
 *
 * Every section below the required fields is optional — leave one out and the
 * page simply skips that block. Set `ready: false` to show the Coming Soon
 * panel instead of the case study.
 */
export const uiuxProjects: UIUXProject[] = [
  {
    slug: 'averly-haven',
    title: 'Averly Haven',
    tagline: 'From vision to celebration, stress-free.',
    desc:
      'A wedding and event planning mobile app that brings venues, vendors and deposits into one place. ' +
      'Designed around trust and calm — warm neutrals, visible ratings and a deposit flow that gives both ' +
      'sides a record of what was paid.',
    tags: ['Figma', 'Mobile App', 'User Flows', 'Prototyping', 'Design System', 'UI/UX'],
    cover: '/haven.png',
    ready: true,

    meta: [
      { label: 'Role', value: 'UI/UX Designer — solo' },
      { label: 'Platform', value: 'iOS · 430 × 932' },
      { label: 'Tools', value: 'Figma' },
      { label: 'Screens', value: '30+ frames' },
      { label: 'Scope', value: '6 end-to-end flows' },
      { label: 'Year', value: '2025' },
    ],

    overview: [
      'Averly Haven is a mobile app for people planning weddings and events, built around a single question: ' +
        'how do you book a stranger to handle the most important day of your life, and feel safe doing it?',
      'Planning in Port Harcourt — and across Nigeria generally — happens in fragments. A venue comes from a ' +
        'friend of a friend, a decorator from an Instagram page, a caterer from a WhatsApp broadcast. Prices ' +
        'are quoted verbally, deposits move by bank transfer, and nobody holds a record of the agreement. The ' +
        'work here was to collapse that scattered process into one app without making it feel like a marketplace.',
      'The result is a four-tab product covering discovery, filtering, booking, deposits and account management, ' +
        'with the visual language doing as much work as the structure: a calm, editorial palette that reads ' +
        'closer to a wedding invitation than to a booking platform.',
    ],

    problems: [
      {
        title: 'Discovery is fragmented',
        desc:
          'Venues and vendors live across Instagram, WhatsApp groups and word of mouth. There is no single ' +
          'surface where a couple can see what is available and compare it side by side.',
      },
      {
        title: 'Trust is the real blocker',
        desc:
          'Deposits go to vendors who cannot be verified. No ratings, no reviewable history, no proof of ' +
          'past work — the decision comes down to whoever posts the best photos.',
      },
      {
        title: 'Too many variables to filter by',
        desc:
          'Service type, price, availability, capacity, style, distance and experience all matter at once. ' +
          'A flat scrollable list cannot narrow that down, and neither can a single search field.',
      },
      {
        title: 'Deposits are informal',
        desc:
          'Money moves by transfer with no receipt inside the process. Neither the client nor the vendor ' +
          'ends up with a record tied to the booking itself.',
      },
      {
        title: 'The process is already stressful',
        desc:
          'Dense, utilitarian booking interfaces add pressure to something people are emotionally invested in. ' +
          'The interface needed to reduce anxiety, not add to it.',
      },
    ],

    solutions: [
      {
        title: 'One dashboard for everything',
        desc:
          'Venues and vendors sit together on the home screen under filter pills — View All, Most Popular, ' +
          'Highest Rated, Book Now — with a featured vendor spotlight at the top and ratings on every card.',
      },
      {
        title: 'Trust signals on every surface',
        desc:
          'Star ratings, review counts and vendor identity appear on the card itself, not two taps deeper. ' +
          'A Verified Only filter lets someone restrict results to vendors the platform has checked.',
      },
      {
        title: 'A nine-facet filter sheet',
        desc:
          'Experience Level, Packages/Offers, Payment Option, Featured Vendors, Vendor Capacity, Style/Theme, ' +
          'Newly Added, Verified Only and Closest to You — with active filters shown as removable chips so ' +
          'the user can always see what is narrowing their results.',
      },
      {
        title: 'Deposits designed in, not bolted on',
        desc:
          'Paying a deposit is part of the onboarding promise and the booking flow, with Payment Methods and ' +
          'Transaction History given permanent homes in settings.',
      },
      {
        title: 'A calm visual language',
        desc:
          'Warm neutrals, generous spacing and a serif display face. The palette does the emotional work so ' +
          'the interface can stay quiet and let the vendor photography carry the page.',
      },
    ],

    process: [
      {
        title: 'Discover',
        desc:
          'Framed the problem around how events actually get planned locally — informal referrals, unverifiable ' +
          'vendors, cash-first deposits — and identified trust as the constraint the product had to solve for.',
      },
      {
        title: 'Define',
        desc:
          'Translated the findings into six flows: onboarding, authentication, password recovery, discovery ' +
          'and filtering, booking and deposit, and account management.',
      },
      {
        title: 'Structure',
        desc:
          'Settled the information architecture on a four-tab bottom bar — Home, Search, Book, Profile — so ' +
          'discovery, targeted search and active bookings each keep a permanent entry point.',
      },
      {
        title: 'Design',
        desc:
          'Built the visual system — palette, serif/sans pairing, vendor card, filter chip, input states, ' +
          'modal sheet — then applied it consistently across 30+ frames.',
      },
      {
        title: 'Prototype',
        desc:
          'Specified every interactive control in both inactive and active states, including the four-digit ' +
          'code entry as it fills, so the whole journey could be clicked through and tested end to end.',
      },
    ],

    flows: [
      {
        name: 'Onboarding',
        steps: ['Splash', 'Welcome', 'Book Vendor', 'Browse Venue', 'Pay Deposit', 'Get Started'],
      },
      {
        name: 'Create account',
        steps: ['Sign Up', 'Name & contact', 'Password', 'Register', 'Dashboard'],
      },
      {
        name: 'Password recovery',
        steps: ['Login', 'Forgot Password', 'Email address', '4-digit code', 'New password', 'Success'],
      },
      {
        name: 'Discover & book',
        steps: ['Dashboard', 'Category', 'Vendor card', 'See More', 'Book Now', 'Deposit'],
      },
      {
        name: 'Search & filter',
        steps: ['Search', 'Filter sheet', 'Select facets', 'Apply', 'Filtered results'],
      },
      {
        name: 'Account',
        steps: ['Profile', 'Favourites', 'Settings', 'Payment Methods', 'Transaction History'],
      },
    ],

    palette: [
      { name: 'Blush Ivory', hex: '#F8F1ED', usage: 'Primary background' },
      { name: 'Champagne Sand', hex: '#D9C7B6', usage: 'Secondary surface, nav bar' },
      { name: 'Cocoa', hex: '#5A4A42', usage: 'Dark surface, body text' },
      { name: 'Mauve Plum', hex: '#8D6781', usage: 'Interactive — chips, buttons' },
      { name: 'Magenta', hex: '#EE2C8C', usage: 'Active state, selected tab' },
      { name: 'Ivory White', hex: '#FFFFFF', usage: 'Modals, input fields' },
    ],

    typography: [
      { role: 'Display', name: 'Serif', usage: 'Screen titles and section headings' },
      { role: 'Interface', name: 'Geometric Sans', usage: 'Body copy, labels, buttons' },
      { role: 'Wordmark', name: 'Script', usage: 'Averly Haven logotype and AH monogram' },
    ],

    outcomes: [
      '30+ frames covering six flows end to end, from splash screen to transaction history.',
      'A reusable component set — vendor card, filter chip, bottom nav, modal sheet, input states.',
      'Every interactive control specified in both inactive and active states, so build hand-off carries no guesswork.',
      'Trust made visible at the card level: ratings, review counts and verification surfaced before the tap, not after.',
    ],

    nextSteps: [
      'Usability-test the filter sheet with couples actively planning — nine facets may be too many for a first pass.',
      'Design the vendor-facing side: accepting bookings, managing availability, responding to reviews.',
      'Add a saved-plan or checklist view so a user can track an entire event rather than individual bookings.',
      'Replace placeholder copy with real vendor descriptions and pricing to pressure-test the card layouts.',
    ],

    screenshots: [
      /* ---- Launch ---- */
      {
        src: '/averlyn-haven/iPhone%2014%20&%2015%20Pro%20Max%20-%201.png',
        caption: 'Splash — AH monogram on champagne',
        group: 'Launch',
      },
      {
        src: '/averlyn-haven/iPhone%2014%20&%2015%20Pro%20Max%20-%202.png',
        caption: 'Splash — light variant',
        group: 'Launch',
      },

      /* ---- Onboarding (ordered by the pagination dots, not the file names) ---- */
      {
        src: '/averlyn-haven/Wedding%20Ceratives.png',
        caption: 'Welcome — “From vision to celebration, stress-free.”',
        group: 'Onboarding',
      },
      {
        src: '/averlyn-haven/Browse.png',
        caption: 'Onboarding 2 — Book Vendor',
        group: 'Onboarding',
      },
      {
        src: '/averlyn-haven/Book.png',
        caption: 'Onboarding 3 — Browse Venue',
        group: 'Onboarding',
      },
      {
        src: '/averlyn-haven/Depositt.png',
        caption: 'Onboarding 4 — Pay Deposit',
        group: 'Onboarding',
      },

      /* ---- Authentication ---- */
      {
        src: '/averlyn-haven/Login%20Page(Inactive).png',
        caption: 'Login — inactive state',
        group: 'Authentication',
      },
      {
        src: '/averlyn-haven/Login%20Page(Active).png',
        caption: 'Login — active input, biometric and social sign-in',
        group: 'Authentication',
      },
      {
        src: '/averlyn-haven/Sign%20Up%20Page(Inactive).png',
        caption: 'Create account — inactive state',
        group: 'Authentication',
      },
      {
        src: '/averlyn-haven/Sign%20Up%20Page(Active).png',
        caption: 'Create account — name, email, phone, password',
        group: 'Authentication',
      },

      /* ---- Password recovery ---- */
      {
        src: '/averlyn-haven/Forget%20password(Active).png',
        caption: 'Recovery — email address entry',
        group: 'Password recovery',
      },
      {
        src: '/averlyn-haven/Forget%20password(Active)-1.png',
        caption: 'Recovery — verification code, empty',
        group: 'Password recovery',
      },
      {
        src: '/averlyn-haven/Forget%20password(Active)-5.png',
        caption: 'Recovery — code complete, Verify enabled',
        group: 'Password recovery',
      },
      {
        src: '/averlyn-haven/Forget%20password(Active)-6.png',
        caption: 'Recovery — confirm new password',
        group: 'Password recovery',
      },
      {
        src: '/averlyn-haven/Successful%20screen.png',
        caption: 'Recovery — password successfully changed',
        group: 'Password recovery',
      },

      /* ---- Core product ---- */
      {
        src: '/averlyn-haven/Dashboard.png',
        caption: 'Dashboard — featured vendor, categories, rated listings',
        group: 'Core product',
        tall: true,
      },
      {
        src: '/averlyn-haven/Book-1.png',
        caption: 'Book — location-aware results for Port Harcourt',
        group: 'Core product',
      },
      {
        src: '/averlyn-haven/Search.png',
        caption: 'Search — active filter chips over popular results',
        group: 'Core product',
      },
      {
        src: '/averlyn-haven/Frame%2081.png',
        caption: 'Filter sheet — nine facets, six selected',
        group: 'Core product',
      },

      /* ---- Account ---- */
      {
        src: '/averlyn-haven/Profile.png',
        caption: 'Profile — saved favourites',
        group: 'Account',
        tall: true,
      },
      {
        src: '/averlyn-haven/Settings.png',
        caption: 'Settings — payments, transaction history, support',
        group: 'Account',
      },
    ],

    figmaLink: null,
  },
 {
  slug: 'stridehub',
  title: 'StrideHub',
  desc: 'A footwear-focused e-commerce mobile app connecting Nigerian shoppers to authentic, well-fitted shoes...',
  tags: ['Figma', 'Mobile App'],
  cover: '/StripeHub/StripeHub.png',
  ready: false,
  comingSoonNote: 'Case study in progress — available on request.',
  screenshots: [],
},
  /* ------------------------------------------------------------------
   * Coming Soon template — copy this block for a project whose case
   * study is not written yet. `ready: false` renders the Coming Soon
   * panel on /uiux/<slug> and a Coming Soon card in the projects grid.
   * ------------------------------------------------------------------
   *
   * {
   *   slug: 'project-name',
   *   title: 'Project Name',
   *   desc: 'One or two lines about what this project is.',
   *   tags: ['Figma', 'Mobile App'],
   *   cover: '/project-name/cover.png',
   *   ready: false,
   *   comingSoonNote: 'Case study in progress — available on request.',
   *   screenshots: [],
   * },
   */
];

export default uiuxProjects;
