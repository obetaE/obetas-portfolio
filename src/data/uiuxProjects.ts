import type { UIUXProject } from '../types';
import { createElement } from 'react';
import { GrassroutesLiveScreen } from '../components/grassroutes/LaptopScreens';

/**
 * UI/UX case studies rendered by src/pages/UIUXCaseStudyPage.tsx.
 *
 * The page resolves a project from the URL (/uiux/:slug) by matching either
 * `slug` or a slugified `title`, so both /uiux/averly-haven and a title-derived
 * URL will find the same entry.
 *
 * Every section below the required fields is optional — leave one out and the
 * page simply skips that block. Set `ready: false` to show the Coming Soon
 * panel instead of the case study. Screens in `screenshots` can use either a
 * static `src` image or a coded React `screen`; set `device: 'laptop'` for
 * website previews. `link` is optional and only shows a live-site button when
 * supplied.
 */
export const uiuxProjects: UIUXProject[] = [
  {
    slug: 'grassroutes',
    title: 'Grassroutes',
    tagline: 'Good food, close to home.',
    desc:
      'A responsive farm-to-table storefront that brings local growers and everyday shoppers closer. ' +
      'The experience makes fresh produce easy to discover, understand and add to a basket, while ' +
      'keeping the people and farms behind each product in view.',
    tags: ['Website', 'E-commerce', 'Responsive Design', 'React', 'UI/UX'],
    cover: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
    ready: true,
    device: 'laptop',

    meta: [
      { label: 'Role', value: 'Product design & frontend' },
      { label: 'Platform', value: 'Responsive website' },
      { label: 'Tools', value: 'Figma · React · CSS' },
      { label: 'Screens', value: '14 live route previews' },
      { label: 'Scope', value: 'Discovery to checkout' },
      { label: 'Year', value: '2026' },
    ],

    overview: [
      'Grassroutes is a farm-to-table shopping experience built around a simple idea: good food should feel close to home. Shoppers can explore seasonal produce, learn who grew it, and gather everyday essentials in one calm, welcoming storefront.',
      'The interface pairs an editorial, produce-forward identity with familiar shopping patterns. Clear categories, farm details, visible prices and a simple basket help people move from browsing to checkout without losing the story behind their food.',
    ],

    problems: [
      { title: 'Finding good local produce takes work', desc: 'Shoppers often discover growers through scattered social posts and word of mouth, with no easy way to browse what is available together.' },
      { title: 'The source can disappear in the shopping flow', desc: 'Product listings rarely make the grower part of the decision, even when freshness and provenance matter.' },
      { title: 'Shopping needs to feel simple and trustworthy', desc: 'A busy catalogue or unclear pricing adds friction to a familiar task and makes a new local marketplace harder to trust.' },
    ],

    solutions: [
      { title: 'A clear path from home to harvest', desc: 'A focused landing page introduces the promise, then leads directly into categories and seasonal picks.' },
      { title: 'Growers stay visible', desc: 'Farm names and product details sit close to the price and selection controls, keeping provenance part of the purchase.' },
      { title: 'Familiar shopping patterns', desc: 'Responsive product cards, clear size choices and a readable basket make the experience easy to scan across screen sizes.' },
    ],

    process: [
      { title: 'Discover', desc: 'Framed the experience around the relationship between local growers, fresh produce and everyday shoppers.' },
      { title: 'Structure', desc: 'Mapped the core journey across the home page, shop, product details and basket.' },
      { title: 'Design', desc: 'Built a warm visual system around greens, harvest yellow, generous typography and editorial food imagery.' },
      { title: 'Build', desc: 'Translated the interface into a responsive React storefront with reusable product and page components.' },
    ],

    flows: [
      { name: 'Browse the harvest', steps: ['Home', 'Shop', 'Category', 'Product details'] },
      { name: 'Gather an order', steps: ['Product details', 'Choose a size', 'Add to basket', 'Review basket', 'Checkout'] },
    ],

    palette: [
      { name: 'Harvest Green', hex: '#21813B', usage: 'Primary actions and brand accents' },
      { name: 'Deep Field', hex: '#12321F', usage: 'Hero surfaces and strong contrast' },
      { name: 'Fresh Paper', hex: '#F8F8F4', usage: 'Main page background' },
      { name: 'Harvest Yellow', hex: '#F7CA38', usage: 'Calls to action and small highlights' },
    ],
    typography: [
      { role: 'Display', name: 'Manrope', usage: 'Brand, headlines and product emphasis' },
      { role: 'Interface', name: 'DM Sans', usage: 'Navigation, body copy and controls' },
    ],
    outcomes: [
      'A complete responsive storefront concept from discovery through basket review.',
      'Grower identity and product provenance remain visible while people browse.',
      'Reusable React screens make the website previewable directly in this case study.',
    ],
    nextSteps: [
      'Add seasonal availability and grower profiles to the storefront.',
      'Usability-test category discovery, product sizing and checkout on mobile and desktop.',
      'Connect product inventory and grower profiles to live data.',
    ],
    screenshots: [
      ...[
        { path: '/', caption: 'Home', group: 'Home' },
        { path: '/shop', caption: 'Shop', group: 'Shop' },
        { path: '/product/1', caption: 'Product details', group: 'Product details' },
        { path: '/cart', caption: 'Basket', group: 'Basket' },
        { path: '/delivery', caption: 'Pickup point', group: 'Delivery & checkout' },
        { path: '/checkout', caption: 'Checkout', group: 'Delivery & checkout' },
        { path: '/order-status', caption: 'Order status', group: 'Delivery & checkout' },
        { path: '/about', caption: 'Our story', group: 'Our story' },
        { path: '/about#our-values', caption: 'Our values', group: 'Our story' },
        { path: '/login', caption: 'Sign in', group: 'Account' },
        { path: '/register', caption: 'Create account', group: 'Account' },
        { path: '/forgot-password', caption: 'Forgot password', group: 'Account' },
        { path: '/verification', caption: 'Email verification', group: 'Account' },
        { path: '/change-password', caption: 'Change password', group: 'Account' },
      ].map(({ path, caption, group }) => ({
        type: 'code' as const,
        screen: createElement(GrassroutesLiveScreen, { path }),
        caption,
        group,
      })),
    ],
    link: 'https://grass-routes-sable.vercel.app/',
    figmaLink: null,
  },
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
  comingSoonNote: 'Full case study dropping soon — the fit-and-trust problem in Nigerian footwear e-commerce turned out to be a fascinating design challenge.',
  screenshots: [],
},
 {
      slug: 'NorthBound',
      title: 'NorthBound',
      desc: 'Northbound is a thoughtful editorial space exploring ideas around work, learning, culture, technology, and the way we think — through essays written to encourage deeper understanding and reflection.',
      tags: ['Figma', 'Mobile App'],
      cover: '/NorthBound/cover.png',
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
