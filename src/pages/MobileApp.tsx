import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  BrowseScreen,
  DetailScreen,
  DiscoverScreen,
  Phone,
  ProfileScreen,
  QuizScreen,
} from '../components/scenewise/PhoneScreens';

/**
 * Scenewise — mobile app case study (/apps/scenewise).
 *
 * The app is built in code rather than Figma, so the screens are recreated
 * as live HTML/CSS in components/scenewise/PhoneScreens.tsx instead of
 * being shown as exported frames.
 */

const INSTALL_URL =
  'https://expo.dev/accounts/obetaer/projects/scenewise/builds/807117bd-4a7e-4b55-89a0-595ce051fb4e';
const API_URL = 'https://scenewise.onrender.com/api/health';

const META = [
  { label: 'Role', value: 'Solo — design, mobile & API' },
  { label: 'Platform', value: 'Android · Expo SDK 54' },
  { label: 'Stack', value: 'React Native · Express · MongoDB' },
  { label: 'Data', value: 'TMDB · OMDb · JustWatch' },
  { label: 'Timeline', value: '2 weeks · Sep 2026' },
  { label: 'Status', value: 'Shipped — APK + live API' },
];

const FEATURES = [
  {
    screen: <DiscoverScreen />,
    label: 'Discover tab — trending posters with match rings and short-runtime picks',
    kicker: 'Discover',
    title: 'Decide before you press play',
    desc:
      'The home tab leads with how a film feels, not just what it is. Every poster carries a score ring, ' +
      'runtime and age rating, and a "Low-commitment picks" row surfaces shorter films for weeknights.',
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
      'Four skippable questions — feel, length, era, pickiness — get an indecisive viewer to a watchable title. ' +
      'Every answer maps to a real TMDB query parameter; none of them are decorative.',
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
      'Search hits TMDB through the API with a 400 ms debounce and falls back to trending when cleared. ' +
      'Tapping a result registers it in the catalogue, so likes and reviews have something to attach to.',
    points: [
      'Idempotent register call — the same film is never stored twice.',
      'Per-row loading state while a film opens, so taps never feel ignored.',
      'Offline or asleep? Sample titles stay on screen under an explanatory banner.',
    ],
    chips: ['Debounced · 400 ms', 'Graceful offline'],
  },
  {
    screen: <DetailScreen />,
    label: 'Movie detail — backdrop, ratings, shelf status, streaming providers and review stars',
    kicker: 'Movie detail',
    title: 'Everything about one film, on one scroll',
    desc:
      'Trailer, the Scenewise community rating next to TMDB’s, where to stream, a three-state shelf and a ' +
      'star review — all from a single screen. Nice-to-have data loads in the background and never blocks it.',
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
      'Shelf, reviews and likes belong to the device, not an account. "For you" gives brand-new users something ' +
      'to scroll immediately, with genre-led picks rated 6.5 and above.',
    points: [
      'A random device ID is created on first launch and sent with every request.',
      'Four tabs — For you, Shelf, Reviews, Likes — with honest empty states.',
      'A "Built by" card links back to the developer from inside the app.',
    ],
    chips: ['Zero-friction onboarding', 'x-device-id'],
  },
];

const DECISIONS = [
  {
    title: 'No login, still personal',
    desc:
      'A sign-up wall kills a casual "what should I watch" app. The phone generates a UUID on first launch ' +
      '(expo-crypto + AsyncStorage) and the API scopes every like, review and shelf entry to it.',
  },
  {
    title: 'Designing around a sleeping server',
    desc:
      'Render’s free tier sleeps and takes 30–50 s to wake. A short first request tells "asleep" apart from ' +
      '"broken"; the app shows "Waking the server up…" and retries with a longer timeout, over sample content.',
  },
  {
    title: 'Ratings that belong to the app',
    desc:
      'The Scenewise rating is recalculated from the app’s own reviews on every create, edit and delete. ' +
      'TMDB’s score is stored separately and labelled as such.',
  },
  {
    title: 'Honest third-party data',
    desc:
      'OMDb supplies critic scores and fills only fields TMDB left empty. It runs under a daily request budget, ' +
      'is optional, and no review text is ever invented.',
  },
];

const PALETTE = [
  { name: 'Background', hex: '#201C19' },
  { name: 'Card', hex: '#2B2723' },
  { name: 'Primary', hex: '#D9B96A' },
  { name: 'Accent', hex: '#94E8BF' },
  { name: 'Warning', hex: '#E2A468' },
  { name: 'Destructive', hex: '#D0574A' },
  { name: 'Foreground', hex: '#FAFAF8' },
  { name: 'Muted', hex: '#B7AC9C' },
];

const STACK = [
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
];

const SectionHeading: React.FC<{ number: string; title: string }> = ({ number, title }) => (
  <div className="section-header cs-section-header">
    <span className="section-number">{number}</span>
    <div className="section-line" />
    <h2 className="section-title">{title}</h2>
  </div>
);

const MobileApp: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <section className="cs-page sw-page">
        <div className="sw-page-glow" aria-hidden="true" />

        <div className="cs-container">
          <Link to="/#projects" className="cs-back">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to Projects</span>
          </Link>

          {/* ---------- Hero ---------- */}
          <header className="sw-hero-grid">
            <div className="sw-hero-copy reveal">
              <span className="cs-eyebrow">Mobile App · Case Study</span>
              <div className="sw-title-row">
                <img src="/scenewise/logo.png" alt="" width={56} height={56} />
                <h1 className="cs-hero-title">Scenewise</h1>
              </div>
              <p className="cs-hero-tagline">Know what you're in for before you press play.</p>
              <p className="cs-hero-desc">
                A spoiler-free movie companion for Android. Scenewise helps people decide what to watch
                tonight — pacing, runtime, age rating and where to stream — then lets them like, shelve and
                review films without ever creating an account.
              </p>

              <div className="cs-actions">
                <a href={INSTALL_URL} target="_blank" rel="noopener noreferrer" className="cs-btn cs-btn-primary">
                  Install on Android
                </a>
                <a href={API_URL} target="_blank" rel="noopener noreferrer" className="cs-btn cs-btn-ghost">
                  Live API status
                </a>
              </div>
            </div>

            <div className="sw-hero-devices" aria-label="Scenewise screens">
              <Phone label="Movie detail screen" className="sw-hero-phone sw-hero-left">
                <DetailScreen />
              </Phone>
              <Phone label="Discover screen" className="sw-hero-phone sw-hero-center">
                <DiscoverScreen />
              </Phone>
              <Phone label="Profile screen" className="sw-hero-phone sw-hero-right">
                <ProfileScreen />
              </Phone>
            </div>
          </header>

          <dl className="cs-meta sw-meta reveal">
            {META.map((item) => (
              <div key={item.label} className="cs-meta-item">
                <dt className="cs-meta-label">{item.label}</dt>
                <dd className="cs-meta-value">{item.value}</dd>
              </div>
            ))}
          </dl>

          {/* ---------- Overview ---------- */}
          <section className="cs-section reveal">
            <SectionHeading number="01" title="Overview" />
            <div className="cs-split">
              <div className="cs-split-col">
                <h3 className="cs-block-title">
                  <span className="cs-dot cs-dot-problem" />
                  The problem
                </h3>
                <div className="cs-prose">
                  <p>
                    Choosing a film takes longer than watching one. Streaming apps show a poster and a star
                    rating, but not the things that decide a night in: how long it is, how slow it starts, how
                    intense it gets — and finding out usually means reading spoilers.
                  </p>
                </div>
              </div>
              <div className="cs-split-col">
                <h3 className="cs-block-title">
                  <span className="cs-dot cs-dot-solution" />
                  The response
                </h3>
                <div className="cs-prose">
                  <p>
                    A calm, cinema-dark app that answers "should I watch this tonight?" in a few taps: a mood
                    quiz for the undecided, live search for the decided, and a detail page that covers
                    everything up to pressing play. Built end to end — interface, React Native client and the
                    API behind it.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ---------- Screens ---------- */}
          <section className="cs-section">
            <div className="reveal">
              <SectionHeading number="02" title="Key Screens" />
              <p className="sw-note sw-note-intro">
                The screens below are rebuilt in HTML and CSS from the app's own components and design
                tokens, using the sample titles bundled with the app. For the real thing, install the
                Android build.
              </p>
            </div>

            <div className="sw-features">
              {FEATURES.map((f, i) => (
                <article key={f.kicker} className={`sw-feature reveal ${i % 2 ? 'is-flipped' : ''}`}>
                  <div className="sw-feature-device">
                    <Phone label={f.label}>{f.screen}</Phone>
                    <div className="sw-float-chips" aria-hidden="true">
                      {f.chips.map((chip) => (
                        <span key={chip}>{chip}</span>
                      ))}
                    </div>
                  </div>
                  <div className="sw-feature-copy">
                    <span className="sw-feature-num">/ {String(i + 1).padStart(2, '0')} — {f.kicker}</span>
                    <h3 className="sw-feature-title">{f.title}</h3>
                    <p className="sw-feature-desc">{f.desc}</p>
                    <ul className="cs-bullets">
                      {f.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ---------- Visual system ---------- */}
          <section className="cs-section reveal">
            <SectionHeading number="03" title="Visual System" />
            <div className="sw-type-grid">
              <div className="sw-type-card">
                <span className="cs-type-role">Display · Serif</span>
                <p className="sw-type-name sw-fraunces">Fraunces</p>
                <span className="sw-type-weights">SemiBold 600</span>
                <p className="sw-type-sample sw-fraunces">Aa</p>
                <span className="cs-type-usage">Titles, section headings, scores</span>
              </div>
              <div className="sw-type-card">
                <span className="cs-type-role">Interface · Sans</span>
                <p className="sw-type-name sw-jakarta">Plus Jakarta Sans</p>
                <span className="sw-type-weights">Regular · Medium · SemiBold</span>
                <p className="sw-type-alphabet sw-jakarta">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  <br />
                  abcdefghijklmnopqrstuvwxyz 0123456789
                </p>
                <span className="cs-type-usage">Body copy, labels, buttons, tab bar</span>
              </div>
            </div>

            <div className="sw-palette">
              {PALETTE.map((c) => (
                <div key={c.hex} className="sw-swatch">
                  <span className="sw-swatch-chip" style={{ background: c.hex }} />
                  <span className="cs-swatch-name">{c.name}</span>
                  <span className="cs-swatch-hex">{c.hex}</span>
                </div>
              ))}
            </div>
            <p className="sw-note">
              A warm, low-glare dark theme — cinema lighting rather than pure black — with a single gold
              accent for anything interactive. Radii run from 12 to 32 px, and every token lives in one
              Tailwind config shared through NativeWind.
            </p>
          </section>

          {/* ---------- Architecture ---------- */}
          <section className="cs-section reveal">
            <SectionHeading number="04" title="How It Works" />

            <div className="sw-arch" role="img" aria-label="The Expo app calls an Express API on Render, which reads from TMDB and OMDb and stores likes, reviews and shelves in MongoDB Atlas.">
              <div className="sw-arch-node">
                <small>Client</small>
                <b>Expo app</b>
                <span>React Native · Expo Router · device ID in AsyncStorage</span>
              </div>
              <div className="sw-arch-link">
                <span>HTTPS + x-device-id</span>
              </div>
              <div className="sw-arch-node is-core">
                <small>API · Render</small>
                <b>Express 5 + TypeScript</b>
                <span>movie · review · shelf · profile routes</span>
              </div>
              <div className="sw-arch-link">
                <span>reads &amp; writes</span>
              </div>
              <div className="sw-arch-group">
                <div className="sw-arch-node">
                  <b>TMDB</b>
                  <span>catalogue, trending, trailers, watch providers</span>
                </div>
                <div className="sw-arch-node">
                  <b>OMDb</b>
                  <span>critic scores, gap-filling, budget-capped</span>
                </div>
                <div className="sw-arch-node">
                  <b>MongoDB Atlas</b>
                  <span>movies, likes, reviews, shelves</span>
                </div>
              </div>
            </div>

            <ul className="cs-insight-list sw-decisions">
              {DECISIONS.map((d) => (
                <li key={d.title} className="cs-insight">
                  <h4 className="cs-insight-title">{d.title}</h4>
                  <p className="cs-insight-desc">{d.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- Stack ---------- */}
          <section className="cs-section reveal">
            <SectionHeading number="05" title="Built With" />
            <div className="project-tags sw-stack-tags">
              {STACK.map((t) => (
                <span key={t} className="project-tag">
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* ---------- Outcome ---------- */}
          <section className="cs-section reveal">
            <SectionHeading number="06" title="Outcome" />
            <div className="cs-split">
              <div className="cs-split-col">
                <h3 className="cs-block-title">What shipped</h3>
                <ul className="cs-bullets">
                  <li>An installable Android build, produced with EAS Build.</li>
                  <li>A live REST API on Render, with a health check and cold-start handling.</li>
                  <li>Three tabs and two detail views, from mood quiz to written review.</li>
                  <li>Type-checked end to end — client and server both pass tsc cleanly.</li>
                </ul>
              </div>
              <div className="cs-split-col">
                <h3 className="cs-block-title">Where it goes next</h3>
                <ul className="cs-bullets cs-bullets-muted">
                  <li>An iOS build and a Play Store listing.</li>
                  <li>Optional accounts, so a shelf can move between devices.</li>
                  <li>Pacing and content-warning data for the live catalogue, not just the curated titles.</li>
                  <li>Reminders for films sitting on the "Want to watch" shelf.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ---------- CTA ---------- */}
          <div className="cs-cta reveal">
            <h3 className="cs-cta-title">Try it on your phone</h3>
            <p className="cs-cta-desc">
              Open the build link on an Android device to install Scenewise. The first load may take a few
              seconds while the server wakes up — the app will tell you when that happens.
            </p>
            <div className="cs-actions">
              <a href={INSTALL_URL} target="_blank" rel="noopener noreferrer" className="cs-btn cs-btn-primary">
                Install on Android
              </a>
              <Link to="/#contact" className="cs-btn cs-btn-ghost">
                Get in touch
              </Link>
              <Link to="/#projects" className="cs-btn cs-btn-ghost">
                View more projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MobileApp;
