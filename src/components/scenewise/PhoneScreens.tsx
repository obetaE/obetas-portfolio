import React from 'react';

/**
 * Scenewise screens, recreated in HTML/CSS from the app's own components
 * (scenewise-expo/app/**) and design tokens (tailwind.config.js), so the
 * case study can show the product without static screenshots.
 *
 * Everything is sized for a 300 × 650 screen; <Phone> scales the whole
 * device with a CSS variable, so the screens never need their own breakpoints.
 */

const POSTERS = [1, 2, 3, 4, 5].map((n) => `/scenewise/poster-${n}.jpg`);

/* ------------------------------------------------------------------ */
/* Icons (lucide paths, matching lucide-react-native in the app)       */
/* ------------------------------------------------------------------ */

const ICONS: Record<string, React.ReactNode> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m16.24 7.76-1.8 5.41a2 2 0 0 1-1.27 1.27L7.76 16.24l1.8-5.41a2 2 0 0 1 1.27-1.27z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  user: (
    <>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
  heart: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  ),
  star: (
    <path d="M11.53 2.3a.53.53 0 0 1 .95 0l2.31 4.68a2.12 2.12 0 0 0 1.6 1.16l5.16.76a.53.53 0 0 1 .3.9l-3.74 3.64a2.12 2.12 0 0 0-.61 1.88l.88 5.14a.53.53 0 0 1-.77.56l-4.62-2.43a2.12 2.12 0 0 0-1.97 0l-4.62 2.43a.53.53 0 0 1-.77-.56l.88-5.14a2.12 2.12 0 0 0-.61-1.88L2.16 9.8a.53.53 0 0 1 .3-.91l5.16-.75a2.12 2.12 0 0 0 1.6-1.16z" />
  ),
  arrowLeft: <path d="m12 19-7-7 7-7M19 12H5" />,
  arrowRight: <path d="M5 12h14M12 5l7 7-7 7" />,
  play: <path d="M6 3l14 9-14 9z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  sliders: <path d="M21 4h-7M10 4H3M21 12h-9M8 12H3M21 20h-5M12 20H3M14 2v4M8 10v4M16 18v4" />,
  sparkles: <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />,
  x: <path d="M18 6 6 18M6 6l12 12" />,
  code: <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" />,
};

export const Icon: React.FC<{ name: keyof typeof ICONS; size?: number; fill?: string; color?: string }> = ({
  name,
  size = 14,
  fill = 'none',
  color = 'currentColor',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {ICONS[name]}
  </svg>
);

/* ------------------------------------------------------------------ */
/* Shared pieces                                                       */
/* ------------------------------------------------------------------ */

/** components/MatchRing.tsx */
const MatchRing: React.FC<{ value: number; size?: number }> = ({ value, size = 40 }) => {
  const stroke = 3.5;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <span className="sw-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} stroke="rgba(255,255,255,0.15)" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * value) / 100}
          stroke="var(--sw-primary)"
        />
      </svg>
      <span style={{ fontSize: size * 0.3 }}>{value}</span>
    </span>
  );
};

const StatusBar = () => (
  <div className="sw-status" aria-hidden="true">
    <span>9:41</span>
    <span className="sw-status-icons">
      <i />
      <i />
      <b />
    </span>
  </div>
);

type Tab = 'discover' | 'browse' | 'profile';

const TabBar: React.FC<{ active: Tab }> = ({ active }) => (
  <div className="sw-tabbar" aria-hidden="true">
    {(
      [
        ['discover', 'compass', 'Discover'],
        ['browse', 'search', 'Browse'],
        ['profile', 'user', 'Profile'],
      ] as const
    ).map(([key, icon, label]) => (
      <span key={key} className={active === key ? 'is-active' : ''}>
        <Icon name={icon} size={18} />
        {label}
      </span>
    ))}
  </div>
);

const RowCard: React.FC<{ poster: string; title: string; meta: string; tag?: string; score?: number }> = ({
  poster,
  title,
  meta,
  tag,
  score,
}) => (
  <div className="sw-row">
    <img src={poster} alt="" className="sw-row-poster" loading="lazy" />
    <div className="sw-row-body">
      <p className="sw-row-title">{title}</p>
      <p className="sw-row-meta">{meta}</p>
      {tag && <span className="sw-tag">{tag}</span>}
    </div>
    {score != null && <MatchRing value={score} size={34} />}
  </div>
);

/* ------------------------------------------------------------------ */
/* Device                                                              */
/* ------------------------------------------------------------------ */

/**
 * Device frame. `scale` shrinks the whole phone while keeping its layout box
 * in sync, so surrounding content flows around the scaled size.
 */
export const Phone: React.FC<{ children: React.ReactNode; label: string; className?: string; scale?: number }> = ({
  children,
  label,
  className = '',
  scale,
}) => (
  <div
    className={`sw-phone-wrap ${className}`}
    style={scale ? ({ '--sw-scale': scale } as React.CSSProperties) : undefined}
    role="img"
    aria-label={label}
  >
    <div className="sw-phone">
      <div className="sw-screen">{children}</div>
      <div className="sw-island" />
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Screens                                                             */
/* ------------------------------------------------------------------ */

/** app/(tabs)/index.tsx */
export const DiscoverScreen = () => (
  <>
    <StatusBar />
    <div className="sw-scroll">
      <div className="sw-header">
        <div className="sw-brand">
          <img src="/scenewise/logo.png" alt="" width={26} height={26} />
          <div>
            <p className="sw-eyebrow">Tonight</p>
            <p className="sw-display sw-gold" style={{ fontSize: 19 }}>
              Scenewise
            </p>
          </div>
        </div>
        <div className="sw-header-actions">
          <span className="sw-icon-btn">
            <Icon name="search" size={13} />
          </span>
          <span className="sw-icon-btn">
            <Icon name="sliders" size={13} />
          </span>
        </div>
      </div>

      <p className="sw-lede">Know the pacing, the intensity and the warnings before you press play. No spoilers, ever.</p>

      <div className="sw-quiz-btn">
        <span>Can't decide? Take the 30-second quiz</span>
        <Icon name="arrowRight" size={13} />
      </div>

      <div className="sw-section-row">
        <p className="sw-display" style={{ fontSize: 15 }}>
          Trending now
        </p>
        <span className="sw-muted-xs">Swipe</span>
      </div>

      <div className="sw-carousel">
        <div className="sw-poster-card">
          <img src={POSTERS[0]} alt="" />
          <div className="sw-poster-score">
            <MatchRing value={94} size={32} />
            <span>
              Will I<br />
              like this
            </span>
          </div>
          <div className="sw-poster-info">
            <p className="sw-poster-genres">Neo-noir · Mystery</p>
            <p className="sw-display" style={{ fontSize: 15 }}>
              Neon Rain
            </p>
            <p className="sw-poster-meta">
              <Icon name="clock" size={9} /> 1h 58m <span>2024</span>
            </p>
            <span className="sw-tag">PG-13</span>
          </div>
        </div>
        <div className="sw-poster-card">
          <img src={POSTERS[1]} alt="" />
        </div>
      </div>

      <div className="sw-block">
        <p className="sw-display" style={{ fontSize: 15 }}>
          Low-commitment picks
        </p>
        <p className="sw-muted-xs">Shorter runtimes, if you haven't got all evening.</p>
        <div className="sw-stack">
          <RowCard poster={POSTERS[4]} title="Orbit Window" meta="1h 33m · 2022 · Sci-fi" tag="PG" score={85} />
          <RowCard poster={POSTERS[2]} title="The Long Table" meta="1h 41m · 2025 · Drama" tag="PG" score={91} />
        </div>
      </div>
    </div>
    <TabBar active="discover" />
  </>
);

/** components/WatchDecisionQuiz.tsx, open over the Discover tab */
export const QuizScreen = () => (
  <>
    <StatusBar />
    <div className="sw-scroll sw-dimmed" aria-hidden="true">
      <div className="sw-header">
        <div className="sw-brand">
          <img src="/scenewise/logo.png" alt="" width={26} height={26} />
          <p className="sw-display sw-gold" style={{ fontSize: 19 }}>
            Scenewise
          </p>
        </div>
      </div>
      <div className="sw-carousel">
        <div className="sw-poster-card">
          <img src={POSTERS[0]} alt="" />
        </div>
      </div>
    </div>

    <div className="sw-sheet">
      <div className="sw-sheet-handle" />
      <div className="sw-sheet-head">
        <span className="sw-kicker">
          <Icon name="sparkles" size={11} /> Question 1 of 4
        </span>
        <span className="sw-icon-btn">
          <Icon name="x" size={12} />
        </span>
      </div>
      <div className="sw-progress">
        <i className="is-on" />
        <i />
        <i />
        <i />
      </div>
      <p className="sw-display" style={{ fontSize: 19, marginTop: 14 }}>
        What do you want it to feel like?
      </p>
      <p className="sw-muted-xs" style={{ marginTop: 4 }}>
        This picks the genres we search.
      </p>
      <div className="sw-options">
        {[
          ['Make me laugh', 'Comedy'],
          ['Keep me on edge', 'Thriller, Mystery, Horror'],
          ['Move me', 'Drama, Romance'],
          ['Take me somewhere else', 'Sci-fi, Fantasy, Adventure'],
          ['Big and loud', 'Action, Adventure'],
        ].map(([label, hint], i) => (
          <div key={label} className={`sw-option ${i === 1 ? 'is-active' : ''}`}>
            <span>{label}</span>
            <small>{hint}</small>
          </div>
        ))}
      </div>
      <p className="sw-skip">Skip this question</p>
    </div>
  </>
);

/** app/(tabs)/browse.tsx */
export const BrowseScreen = () => (
  <>
    <StatusBar />
    <div className="sw-scroll">
      <p className="sw-display sw-gold" style={{ fontSize: 21, marginTop: 10 }}>
        Browse
      </p>
      <div className="sw-search">
        <Icon name="search" size={12} />
        <span className="sw-placeholder">
          <i className="sw-caret" />
          Search movies…
        </span>
      </div>
      <p className="sw-eyebrow" style={{ marginTop: 12 }}>
        Trending this week
      </p>
      <div className="sw-stack">
        {[
          [POSTERS[3], 'Lantern', '2024 · Thriller, Folk horror', '7.4'],
          [POSTERS[0], 'Neon Rain', '2024 · Neo-noir, Mystery', '7.9'],
          [POSTERS[1], 'Dust Horizon', '2023 · Sci-fi, Epic', '8.1'],
          [POSTERS[4], 'Orbit Window', '2022 · Sci-fi, Comedy', '6.9'],
          [POSTERS[2], 'The Long Table', '2025 · Drama, Family', '7.6'],
        ].map(([poster, title, meta, rating], i) => (
          <div key={title} className="sw-row sw-row-lg" style={i === 0 ? { opacity: 0.55 } : undefined}>
            <img src={poster} alt="" className="sw-row-poster" loading="lazy" />
            <div className="sw-row-body">
              <p className="sw-row-title">{title}</p>
              <p className="sw-row-meta">{meta}</p>
              <p className="sw-row-meta sw-rating">
                <Icon name="star" size={10} fill="var(--sw-primary)" color="var(--sw-primary)" />
                {rating} on TMDB
              </p>
            </div>
            {i === 0 && <span className="sw-spinner" />}
          </div>
        ))}
      </div>
    </div>
    <TabBar active="browse" />
  </>
);

/** app/movie/[id].tsx */
export const DetailScreen = () => (
  <>
    <div className="sw-scroll sw-scroll-flush">
      <div className="sw-hero">
        <img src={POSTERS[0]} alt="" />
        <div className="sw-hero-shade" />
        <StatusBar />
        <div className="sw-hero-actions">
          <span className="sw-icon-btn sw-icon-btn-dark">
            <Icon name="arrowLeft" size={13} />
          </span>
          <span className="sw-icon-btn sw-icon-btn-dark">
            <Icon name="heart" size={13} color="var(--sw-destructive)" fill="var(--sw-destructive)" />
          </span>
        </div>
        <div className="sw-hero-info">
          <p className="sw-poster-genres">Neo-noir · Mystery</p>
          <p className="sw-display" style={{ fontSize: 25, lineHeight: 1.1 }}>
            Neon Rain
          </p>
          <p className="sw-hero-meta">
            2024 · 118m <span className="sw-tag">PG-13</span>
            <span className="sw-likes">
              <Icon name="heart" size={9} color="var(--sw-destructive)" fill="var(--sw-destructive)" /> 24
            </span>
          </p>
          <span className="sw-trailer">
            <Icon name="play" size={10} fill="currentColor" /> Watch trailer
          </span>
        </div>
      </div>

      <div className="sw-pad">
        <div className="sw-rating-cards">
          <div>
            <small>Scenewise rating</small>
            <p>
              <b className="sw-display sw-gold">4.6</b> <span>12 reviews</span>
            </p>
          </div>
          <div>
            <small>TMDB rating</small>
            <p>
              <Icon name="star" size={11} fill="var(--sw-primary)" color="var(--sw-primary)" />
              <b className="sw-display">7.9</b>
            </p>
          </div>
        </div>

        <p className="sw-label">Overview</p>
        <p className="sw-body">
          A night-shift detective follows a trail of missing couriers through a city that never dries out.
        </p>

        <p className="sw-label">Add to profile</p>
        <div className="sw-segment">
          <span>Want to watch</span>
          <span className="is-active">Watching</span>
          <span>Watched</span>
        </div>

        <p className="sw-label">Where to watch</p>
        <div className="sw-chips">
          <span>Netflix</span>
          <span>Apple TV</span>
          <span>Prime Video</span>
        </div>

        <p className="sw-label">Rate this movie</p>
        <div className="sw-review-box">
          <div className="sw-stars">
            {[1, 2, 3, 4, 5].map((n) => (
              <Icon
                key={n}
                name="star"
                size={19}
                color="var(--sw-primary)"
                fill={n <= 4 ? 'var(--sw-primary)' : 'none'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

/** app/(tabs)/profile.tsx — "For you" tab */
export const ProfileScreen = () => (
  <>
    <StatusBar />
    <div className="sw-scroll">
      <p className="sw-display sw-gold" style={{ fontSize: 21, marginTop: 10 }}>
        Your profile
      </p>
      <div className="sw-pills">
        <span className="is-active">For you</span>
        <span>Shelf</span>
        <span>Reviews</span>
        <span>Likes</span>
      </div>

      <p className="sw-kicker" style={{ marginTop: 16 }}>
        <Icon name="sparkles" size={11} /> Pick a genre
      </p>
      <div className="sw-genres">
        <span>Action</span>
        <span>Comedy</span>
        <span className="is-active">Drama</span>
        <span>Horror</span>
      </div>

      <div className="sw-stack" style={{ marginTop: 12 }}>
        {[
          [POSTERS[2], 'The Long Table', '1h 41m · 2025 · PG', 91],
          [POSTERS[1], 'Dust Horizon', '2h 26m · 2023 · PG-13', 88],
          [POSTERS[0], 'Neon Rain', '1h 58m · 2024 · PG-13', 94],
        ].map(([poster, title, meta, score]) => (
          <div key={title as string} className="sw-row">
            <img src={poster as string} alt="" className="sw-row-poster" loading="lazy" />
            <div className="sw-row-body">
              <p className="sw-row-title">{title}</p>
              <p className="sw-row-meta">{meta}</p>
            </div>
            <span className="sw-display sw-gold" style={{ fontSize: 14 }}>
              {score}
            </span>
          </div>
        ))}
      </div>

      <div className="sw-dev-card">
        <p className="sw-kicker">
          <Icon name="code" size={11} /> Built by
        </p>
        <p className="sw-display" style={{ fontSize: 16, marginTop: 6 }}>
          Obeta Chukwuka
        </p>
        <p className="sw-muted-xs" style={{ marginTop: 4 }}>
          Scenewise is a personal project — built to help people decide what to watch without spoilers.
        </p>
      </div>
    </div>
    <TabBar active="profile" />
  </>
);
