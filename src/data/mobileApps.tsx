import type { MobileAppProject } from '../types';
import {
  BrowseScreen,
  DetailScreen,
  DiscoverScreen,
  ProfileScreen,
  QuizScreen,
} from '../components/scenewise/PhoneScreens';

/**
 * Mobile app case studies.
 * Each entry drives /apps/:slug via src/pages/MobileAppCaseStudyPage.tsx.
 *
 * The screens live here as JSX because they are rebuilt in code
 * (components/scenewise/PhoneScreens.tsx) rather than exported from Figma.
 */
export const mobileApps: MobileAppProject[] = [
  {
    slug: 'scenewise',
    title: 'Scenewise',
    cover: '/scenewise/cover.jpg',
    logo: '/scenewise/logo.png',
    tagline: "Know what you're in for before you press play.",
    desc:
      'A spoiler-free movie companion for Android. Scenewise helps people decide what to watch ' +
      'tonight — pacing, runtime, age rating and where to stream — then lets them like, shelve and ' +
      'review films without ever creating an account.',
    ready: true,
    featured: true,

    installUrl:
      'https://expo.dev/accounts/obetaer/projects/scenewise/builds/807117bd-4a7e-4b55-89a0-595ce051fb4e',
    installLabel: 'Install on Android',
    apiUrl: 'https://scenewise.onrender.com/api/health',
    apiLabel: 'Live API status',

    heroScreens: [
      { position: 'left',   label: 'Movie detail screen', screen: <DetailScreen /> },
      { position: 'center', label: 'Discover screen',     screen: <DiscoverScreen /> },
      { position: 'right',  label: 'Profile screen',      screen: <ProfileScreen /> },
    ],

    meta: [
      { label: 'Role',     value: 'Solo — design, mobile & API' },
      { label: 'Platform', value: 'Android · Expo SDK 54' },
      { label: 'Stack',    value: 'React Native · Express · MongoDB' },
      { label: 'Data',     value: 'TMDB · OMDb · JustWatch' },
      { label: 'Timeline', value: '2 weeks · Sep 2026' },
      { label: 'Status',   value: 'Shipped — APK + live API' },
    ],

    overview: {
      problem: [
        'Choosing a film takes longer than watching one. Streaming apps show a poster and a star ' +
          'rating, but not the things that decide a night in: how long it is, how slow it starts, how ' +
          'intense it gets — and finding out usually means reading spoilers.',
      ],
      response: [
        'A calm, cinema-dark app that answers "should I watch this tonight?" in a few taps: a mood ' +
          'quiz for the undecided, live search for the decided, and a detail page that covers ' +
          'everything up to pressing play. Built end to end — interface, React Native client and the ' +
          'API behind it.',
      ],
    },

    featuresNote:
      "The screens below are rebuilt in HTML and CSS from the app's own components and design " +
      'tokens, using the sample titles bundled with the app. For the real thing, install the ' +
      'Android build.',

    features: [
      {
        screen: <DiscoverScreen />,
        label: 'Discover tab — trending posters with match rings and short-runtime picks',
        kicker: 'Discover',
        title: 'Decide before you press play',
        desc:
          'The home tab leads with how a film feels, not just what it is. Every poster carries a ' +
          'score ring, runtime and age rating, and a "Low-commitment picks" row surfaces shorter ' +
          'films for weeknights.',
        points: [
          'Renders bundled sample titles instantly, then swaps in the live feed — the screen is never blank.',
          'A rotating spotlight row (box-office hits, classics, new releases) keeps the feed fresh.',
          'Filter sheet for genre, runtime, rating floor and certification, backed by TMDB discover.',
        ],
        chips: ['Score ring · SVG', 'Pull to refresh'],
      },
      {
        screen: <QuizScreen />,
        label: 'Watch-decision quiz — bottom sheet asking what the viewer wants to feel',
        kicker: 'Watch-decision quiz',
        title: 'A 30-second cure for scrolling',
        desc:
          'Four skippable questions — feel, length, era, pickiness — get an indecisive viewer to a ' +
          'watchable title. Every answer maps to a real TMDB query parameter; none of them are ' +
          'decorative.',
        points: [
          'Single-select answers, so each one is a definite constraint.',
          'If a tight combination returns nothing, the rating floor relaxes once instead of hitting a dead end.',
          'Results open straight into the full movie detail.',
        ],
        chips: ['4 questions', 'No dead ends'],
      },
      {
        screen: <BrowseScreen />,
        label: 'Browse tab — live movie search with TMDB ratings',
        kicker: 'Browse',
        title: 'Live search across the whole catalogue',
        desc:
          'Search hits TMDB through the API with a 400 ms debounce and falls back to trending when ' +
          'cleared. Tapping a result registers it in the catalogue, so likes and reviews have ' +
          'something to attach to.',
        points: [
          'Idempotent register call — the same film is never stored twice.',
          'Per-row loading state while a film opens, so taps never feel ignored.',
          'Offline or asleep? Sample titles stay on screen under an explanatory banner.',
        ],
        chips: ['Debounced · 400 ms', 'Graceful offline'],
      },
      {
        screen: <DetailScreen />,
        label:
          'Movie detail — backdrop, ratings, shelf status, streaming providers and review stars',
        kicker: 'Movie detail',
        title: 'Everything about one film, on one scroll',
        desc:
          'Trailer, the Scenewise community rating next to TMDB’s, where to stream, a three-state ' +
          'shelf and a star review — all from a single screen. Nice-to-have data loads in the ' +
          'background and never blocks it.',
        points: [
          'Optimistic likes that roll back if the request fails.',
          'Ratings are the community’s own — recalculated on every review, with TMDB shown separately.',
          'Critic scores from Rotten Tomatoes, Metacritic and IMDb, always attributed.',
        ],
        chips: ['Optimistic UI', 'JustWatch providers'],
      },
      {
        screen: <ProfileScreen />,
        label: 'Profile — For you recommendations by genre, shelf, reviews and likes',
        kicker: 'Profile',
        title: 'A profile without a sign-up form',
        desc:
          'Shelf, reviews and likes belong to the device, not an account. "For you" gives brand-new ' +
          'users something to scroll immediately, with genre-led picks rated 6.5 and above.',
        points: [
          'A random device ID is created on first launch and sent with every request.',
          'Four tabs — For you, Shelf, Reviews, Likes — with honest empty states.',
          'A "Built by" card links back to the developer from inside the app.',
        ],
        chips: ['Zero-friction onboarding', 'x-device-id'],
      },
    ],

    visualSystem: {
      types: [
        {
          role: 'Display · Serif',
          name: 'Fraunces',
          weights: 'SemiBold 600',
          sample: 'Aa',
          usage: 'Titles, section headings, scores',
          fontClassName: 'sw-fraunces',
        },
        {
          role: 'Interface · Sans',
          name: 'Plus Jakarta Sans',
          weights: 'Regular · Medium · SemiBold',
          alphabet:
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz 0123456789',
          usage: 'Body copy, labels, buttons, tab bar',
          fontClassName: 'sw-jakarta',
        },
      ],
      palette: [
        { name: 'Background',  hex: '#201C19' },
        { name: 'Card',        hex: '#2B2723' },
        { name: 'Primary',     hex: '#D9B96A' },
        { name: 'Accent',      hex: '#94E8BF' },
        { name: 'Warning',     hex: '#E2A468' },
        { name: 'Destructive', hex: '#D0574A' },
        { name: 'Foreground',  hex: '#FAFAF8' },
        { name: 'Muted',       hex: '#B7AC9C' },
      ],
      note:
        'A warm, low-glare dark theme — cinema lighting rather than pure black — with a single gold ' +
        'accent for anything interactive. Radii run from 12 to 32 px, and every token lives in one ' +
        'Tailwind config shared through NativeWind.',
    },

    architecture: {
      ariaLabel:
        'The Expo app calls an Express API on Render, which reads from TMDB and OMDb and stores ' +
        'likes, reviews and shelves in MongoDB Atlas.',
      flow: [
        {
          type: 'node',
          small: 'Client',
          title: 'Expo app',
          desc: 'React Native · Expo Router · device ID in AsyncStorage',
        },
        { type: 'link', label: 'HTTPS + x-device-id' },
        {
          type: 'node',
          small: 'API · Render',
          title: 'Express 5 + TypeScript',
          desc: 'movie · review · shelf · profile routes',
          core: true,
        },
        { type: 'link', label: 'reads & writes' },
        {
          type: 'group',
          nodes: [
            { title: 'TMDB',          desc: 'catalogue, trending, trailers, watch providers' },
            { title: 'OMDb',          desc: 'critic scores, gap-filling, budget-capped' },
            { title: 'MongoDB Atlas', desc: 'movies, likes, reviews, shelves' },
          ],
        },
      ],
      decisions: [
        {
          title: 'No login, still personal',
          desc:
            'A sign-up wall kills a casual "what should I watch" app. The phone generates a UUID on ' +
            'first launch (expo-crypto + AsyncStorage) and the API scopes every like, review and ' +
            'shelf entry to it.',
        },
        {
          title: 'Designing around a sleeping server',
          desc:
            'Render’s free tier sleeps and takes 30–50 s to wake. A short first request tells ' +
            '"asleep" apart from "broken"; the app shows "Waking the server up…" and retries with a ' +
            'longer timeout, over sample content.',
        },
        {
          title: 'Ratings that belong to the app',
          desc:
            'The Scenewise rating is recalculated from the app’s own reviews on every create, edit ' +
            'and delete. TMDB’s score is stored separately and labelled as such.',
        },
        {
          title: 'Honest third-party data',
          desc:
            'OMDb supplies critic scores and fills only fields TMDB left empty. It runs under a ' +
            'daily request budget, is optional, and no review text is ever invented.',
        },
      ],
    },

    stack: [
      'React Native 0.81',
      'Expo SDK 54',
      'Expo Router',
      'TypeScript',
      'NativeWind v4',
      'react-native-svg',
      'Node.js',
      'Express 5',
      'MongoDB Atlas',
      'Mongoose',
      'TMDB API',
      'OMDb API',
      'EAS Build',
      'Render',
    ],

    outcome: {
      shipped: [
        'An installable Android build, produced with EAS Build.',
        'A live REST API on Render, with a health check and cold-start handling.',
        'Three tabs and two detail views, from mood quiz to written review.',
        'Type-checked end to end — client and server both pass tsc cleanly.',
      ],
      nextSteps: [
        'An iOS build and a Play Store listing.',
        'Optional accounts, so a shelf can move between devices.',
        'Pacing and content-warning data for the live catalogue, not just the curated titles.',
        'Reminders for films sitting on the "Want to watch" shelf.',
      ],
    },

    cta: {
      title: 'Try it on your phone',
      desc:
        'Open the build link on an Android device to install Scenewise. The first load may take a ' +
        'few seconds while the server wakes up — the app will tell you when that happens.',
    },
  },

  {
    slug: 'rust-bucket',
    title: 'Rust Bucket',
    cover: '/rust-bucket/cover.png',
    tagline: 'Technology with staying power.',
    desc: 'A full-stack e-commerce mobile app for a fictional gadget and audio shop — React Native (Expo) on the front, Express + MongoDB on the back, built end to end.',
    ready: false,
    comingSoonNote: 'Case study dropping soon — screenshots and write-up in progress.',
    tags: ['React Native', 'Expo'],
  },

  /* ------- Coming Soon example — copy this block to stub a new app -------
  {
    slug: 'some-new-app',
    title: 'Some New App',
    tagline: 'One-line pitch.',
    desc: 'One or two sentences about what it is.',
    ready: false,
    comingSoonNote: 'Case study dropping soon — screenshots and write-up in progress.',
    tags: ['React Native', 'Expo'],
  },
  */
];

export default mobileApps;