import React from 'react';
import '../../styles/rustbucket.css';

const PRODUCTS = {
  headphones: '/rust-bucket/products/rust-bucket-headphones.png',
  earbuds: '/rust-bucket/products/rust-bucket-earbuds.png',
  speaker: '/rust-bucket/products/rust-bucket-speaker.png',
  phone: '/rust-bucket/products/rust-bucket-phone.png',
  watch: '/rust-bucket/products/rust-bucket-watch.png',
  laptop: '/rust-bucket/products/rust-bucket-laptop.png',
};

const ICON_PATHS: Record<string, React.ReactNode> = {
  home: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" /></>,
  bag: <><path d="M5 8h14l1 13H4L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>,
  support: <><path d="M4 13v-2a8 8 0 0 1 16 0v2" /><path d="M4 13h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2Zm16 0h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2Zm0 6a5 5 0 0 1-5 3h-2" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M5 21v-2a7 7 0 0 1 14 0v2" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  heart: <path d="M20.8 8.6c0 4.3-8.8 10-8.8 10S3.2 12.9 3.2 8.6a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8Z" />,
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
  plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
  minus: <path d="M5 12h14" />,
  close: <><path d="m18 6-12 12" /><path d="m6 6 12 12" /></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /></>,
  moon: <path d="M20.8 13A8.5 8.5 0 0 1 11 3.2 8.5 8.5 0 1 0 20.8 13Z" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  check: <path d="m5 12 4 4L19 6" />,
};

const Icon: React.FC<{ name: keyof typeof ICON_PATHS; size?: number; filled?: boolean }> = ({
  name,
  size = 16,
  filled = false,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {ICON_PATHS[name]}
  </svg>
);

const StatusBar = () => (
  <div className="rb-status" aria-hidden="true">
    <span>9:41</span>
    <span className="rb-status-right"><i /><i /><b /></span>
  </div>
);

type Tab = 'shop' | 'cart' | 'support' | 'profile';

const TabBar: React.FC<{ active: Tab }> = ({ active }) => (
  <nav className="rb-tabbar" aria-label="Main navigation">
    {([
      ['shop', 'home', 'Shop'],
      ['cart', 'bag', 'Bag'],
      ['support', 'support', 'Support'],
      ['profile', 'user', 'You'],
    ] as const).map(([key, icon, label]) => (
      <div key={key} className={`rb-tab${active === key ? ' is-active' : ''}`}>
        <Icon name={icon} size={17} />
        <span>{label}</span>
        {key === 'cart' && <i className="rb-tab-dot" />}
      </div>
    ))}
  </nav>
);

const Screen: React.FC<{ active: Tab; children: React.ReactNode; noTabs?: boolean }> = ({
  active,
  children,
  noTabs = false,
}) => (
  <div className={`rb-screen${noTabs ? ' rb-screen-no-tabs' : ''}`}>
    <StatusBar />
    <main className="rb-main">{children}</main>
    {!noTabs && <TabBar active={active} />}
  </div>
);

const BrandMark = () => (
  <span className="rb-mark" aria-hidden="true">
    <b>R</b><i />
  </span>
);

const ProductTile: React.FC<{
  image: string;
  tag: string;
  name: string;
  price: string;
}> = ({ image, tag, name, price }) => (
  <article className="rb-product-tile">
    <div className="rb-tile-image">
      <img src={image} alt="" />
      <span className="rb-heart"><Icon name="heart" size={14} /></span>
    </div>
    <div className="rb-tile-copy">
      <span className="rb-eyebrow">{tag}</span>
      <h3>{name}</h3>
      <b>{price}</b>
    </div>
  </article>
);

/** app/(tabs)/shop.tsx */
export const ShopScreen = () => (
  <Screen active="shop">
    <div className="rb-scroll-content rb-shop-content">
      <header className="rb-shop-header">
        <div className="rb-brand-lockup">
          <BrandMark />
          <div><span className="rb-overline">TECH WITH STAYING POWER</span><b>rust bucket</b></div>
        </div>
        <span className="rb-search-btn"><Icon name="search" size={17} /></span>
      </header>

      <p className="rb-greeting">Good morning, Alex</p>
      <h1 className="rb-shop-title">Find your next<br />upgrade.</h1>
      <div className="rb-search-field"><Icon name="search" size={15} /><span>Search gadgets</span></div>

      <div className="rb-hero-card">
        <div className="rb-hero-copy">
          <span className="rb-pill">NEW FLAGSHIP</span>
          <h2>Heavy on sound.<br />Light on noise.</h2>
          <p>Meet the Forge H1 <Icon name="arrow" size={14} /></p>
        </div>
        <img src={PRODUCTS.headphones} alt="Forge H1 over-ear headphones" />
      </div>

      <div className="rb-category-row">
        <span className="is-active">All gear</span><span>Audio</span><span>Phones</span>
      </div>
      <div className="rb-section-title">
        <div><span className="rb-eyebrow">CURATED FOR YOU</span><h2>Shop the collection</h2></div>
        <span className="rb-see-all">See all</span>
      </div>
      <div className="rb-product-grid">
        <ProductTile image={PRODUCTS.headphones} tag="FLAGSHIP" name="Forge H1" price="$289" />
        <ProductTile image={PRODUCTS.earbuds} tag="JUST LANDED" name="Foundry Pods" price="$179" />
        <ProductTile image={PRODUCTS.speaker} tag="OUTDOOR" name="Field Box" price="$219" />
        <ProductTile image={PRODUCTS.watch} tag="EVERYDAY" name="Pulse W2" price="$249" />
        <ProductTile image={PRODUCTS.phone} tag="PRO CAMERA" name="Verdant One" price="$849" />
        <ProductTile image={PRODUCTS.laptop} tag="CREATOR" name="Canopy 13" price="$1,199" />
      </div>
    </div>
  </Screen>
);

/** app/product/[id].tsx */
export const ProductScreen = () => (
  <Screen active="shop" noTabs>
    <div className="rb-product-detail">
      <div className="rb-product-visual">
        <div className="rb-detail-top">
          <span className="rb-round-button"><Icon name="arrow" size={17} /></span>
          <div><span className="rb-round-button"><Icon name="heart" size={17} /></span><span className="rb-round-button"><Icon name="bag" size={17} /></span></div>
        </div>
        <img src={PRODUCTS.headphones} alt="Forge H1 noise-cancelling headphones" />
        <span className="rb-glass-tag"><Icon name="check" size={12} /> Free express delivery</span>
        <div className="rb-image-dots"><i className="is-active" /><i /><i /><i /></div>
      </div>
      <div className="rb-detail-copy">
        <span className="rb-eyebrow">HEADPHONES · FLAGSHIP</span>
        <div className="rb-detail-title"><h1>Forge H1</h1><b>$289</b></div>
        <div className="rb-rating"><Icon name="star" size={14} filled /> <b>4.9</b><span>(148 reviews)</span></div>
        <p className="rb-description">Adaptive noise control and 60-hour power in a precision-built over-ear silhouette.</p>
        <div className="rb-assurances"><span>2-year cover</span><span>30-day returns</span><span>Carbon neutral</span></div>
        <div className="rb-color-choice"><span>Colour</span><i /><i className="selected" /><i /></div>
        <div className="rb-add-button"> <Icon name="bag" size={16} /> Add to bag <b>$289</b></div>
      </div>
    </div>
  </Screen>
);

/** app/(tabs)/cart.tsx — populated bag */
export const CartScreen = () => (
  <Screen active="cart">
    <div className="rb-scroll-content rb-cart-content">
      <div className="rb-page-heading"><span className="rb-eyebrow">YOUR RUST BUCKET ORDER</span><h1>Your bag <span>2</span></h1></div>
      <div className="rb-cart-items">
        <article className="rb-cart-item">
          <div className="rb-cart-image"><img src={PRODUCTS.headphones} alt="" /></div>
          <div className="rb-cart-info"><span className="rb-eyebrow">HEADPHONES</span><h2>Forge H1</h2><p>Forest / Graphite</p><div className="rb-quantity"><Icon name="minus" size={12} /><b>1</b><Icon name="plus" size={12} /></div></div>
          <div className="rb-cart-price"><Icon name="close" size={13} /><b>$289</b></div>
        </article>
        <article className="rb-cart-item">
          <div className="rb-cart-image"><img src={PRODUCTS.earbuds} alt="" /></div>
          <div className="rb-cart-info"><span className="rb-eyebrow">EARBUDS</span><h2>Foundry Pods</h2><p>Stone / Forest</p><div className="rb-quantity"><Icon name="minus" size={12} /><b>1</b><Icon name="plus" size={12} /></div></div>
          <div className="rb-cart-price"><Icon name="close" size={13} /><b>$179</b></div>
        </article>
      </div>
      <div className="rb-delivery-note"><span><Icon name="check" size={14} /></span><div><b>You’ve unlocked free delivery</b><small>Your order ships carbon neutral.</small></div></div>
      <div className="rb-summary"><div><span>Subtotal</span><b>$468.00</b></div><div><span>Delivery</span><b className="rb-free">Free</b></div><div className="rb-total"><b>Total</b><b>$468.00</b></div></div>
      <div className="rb-checkout-button">Secure checkout <Icon name="arrow" size={16} /></div>
      <p className="rb-secure-note"><Icon name="card" size={12} /> Secure checkout · Easy 30-day returns</p>
    </div>
  </Screen>
);

/** app/(tabs)/support.tsx */
export const SupportScreen = () => (
  <Screen active="support">
    <div className="rb-support-hero">
      <div className="rb-support-heading"><span className="rb-eyebrow">WE’RE HERE FOR YOU</span><h1>Customer care</h1></div>
      <p>Real help, minus the runaround.</p>
      <div className="rb-support-cards">
        <div><span className="rb-support-icon">✳</span><b>Live chat</b><small>You’re in it — just type below</small></div>
        <div><span className="rb-support-icon">?</span><b>Help centre</b><small>Delivery, returns & warranty</small></div>
      </div>
    </div>
    <div className="rb-chat">
      <div className="rb-chat-date">TODAY · 9:41 AM</div>
      <div className="rb-message rb-from-support"><span className="rb-moss-avatar">M</span><p>Hi! I’m Moss, your Rust Bucket guide. How can I help?</p></div>
      <div className="rb-message rb-from-user"><p>Where’s my order?</p></div>
      <div className="rb-message rb-from-support"><span className="rb-moss-avatar">M</span><p>Happy to help. If you share your order number, I’ll take a look.</p></div>
      <div className="rb-chat-input"><span>Type your message…</span><b><Icon name="arrow" size={15} /></b></div>
    </div>
  </Screen>
);

/** app/(tabs)/profile.tsx */
export const ProfileScreen = () => (
  <Screen active="profile">
    <div className="rb-scroll-content rb-profile-content">
      <div className="rb-page-heading"><span className="rb-eyebrow">ACCOUNT & PREFERENCES</span><h1>Your account</h1></div>
      <div className="rb-account-card"><span className="rb-avatar">AC</span><div><h2>Alex Carter</h2><p>alex.carter@email.com</p></div><span className="rb-chevron">›</span></div>
      <section className="rb-profile-section">
        <div className="rb-section-heading"><span className="rb-eyebrow">MAKE YOURSELF AT HOME</span><h2>Appearance</h2></div>
        <div className="rb-theme-switch"><span className="is-active"><Icon name="sun" size={14} /> Light</span><span><Icon name="moon" size={14} /> Dark</span><span><i /> Auto</span></div>
      </section>
      <section className="rb-profile-section">
        <div className="rb-section-heading"><span className="rb-eyebrow">TRACK YOUR GEAR</span><h2>Recent orders</h2></div>
        <div className="rb-order-card"><span className="rb-order-icon"><Icon name="bag" size={16} /></span><div><b>RB-240826</b><small>2 items · $468.00</small></div><span className="rb-order-status">On its way</span></div>
        <div className="rb-order-card"><span className="rb-order-icon"><Icon name="check" size={16} /></span><div><b>RB-240719</b><small>Foundry Pods · $179.00</small></div><span className="rb-order-status is-delivered">Delivered</span></div>
      </section>
      <div className="rb-profile-link"><span><Icon name="pin" size={16} /> Warranty & repairs</span><b>›</b></div>
      <div className="rb-profile-note"><BrandMark /><div><span className="rb-eyebrow">BUILT WITH CARE</span><b>Technology with staying power.</b></div></div>
      <span className="rb-signout">Sign out</span>
    </div>
  </Screen>
);

/** app/checkout/index.tsx */
export const CheckoutScreen = () => (
  <Screen active="cart" noTabs>
    <div className="rb-scroll-content rb-checkout-content">
      <div className="rb-checkout-heading"><span className="rb-round-button"><Icon name="arrow" size={17} /></span><div><span className="rb-eyebrow">ALMOST YOURS</span><h1>Checkout</h1></div></div>
      <div className="rb-checkout-step"><span>01</span><div><b>Delivery address</b><small>Alex Carter · 24 Garden Lane, Bristol</small></div><Icon name="check" size={16} /></div>
      <div className="rb-checkout-step"><span>02</span><div><b>Payment method</b><small>Visa ending in 4242</small></div><Icon name="check" size={16} /></div>
      <div className="rb-checkout-summary"><span className="rb-eyebrow">ORDER SUMMARY · 2 ITEMS</span><div className="rb-checkout-product"><img src={PRODUCTS.headphones} alt="" /><span>Forge H1 <small>Qty 1</small></span><b>$289</b></div><div className="rb-checkout-product"><img src={PRODUCTS.earbuds} alt="" /><span>Foundry Pods <small>Qty 1</small></span><b>$179</b></div><div className="rb-checkout-total"><b>Total</b><b>$468.00</b></div></div>
      <div className="rb-checkout-button"><Icon name="card" size={15} /> Place order · $468 <Icon name="arrow" size={16} /></div>
      <p className="rb-secure-note"><Icon name="check" size={12} /> Protected by secure checkout</p>
    </div>
  </Screen>
);
