'use client';
import React, { useState } from 'react';

const BADGE_HEIGHT = 52;

const hoverOn = (e: React.MouseEvent) => {
  (e.currentTarget as HTMLElement).style.opacity = '0.75';
  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
};
const hoverOff = (e: React.MouseEvent) => {
  (e.currentTarget as HTMLElement).style.opacity = '1';
  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
};

function AppStoreBadge() {
  return (
    <a
      href='https://apps.apple.com/app/pennify'
      style={{
        display: 'inline-block',
        lineHeight: 0,
        textDecoration: 'none',
        transition: 'opacity 0.18s, transform 0.18s',
      }}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src='/applestore.svg'
        alt='Download on the App Store'
        style={{ height: BADGE_HEIGHT, width: 'auto', display: 'block' }}
      />
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href='https://play.google.com/store/apps/details?id=com.pennify'
      style={{
        display: 'inline-block',
        lineHeight: 0,
        textDecoration: 'none',
        transition: 'opacity 0.18s, transform 0.18s',
      }}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src='/googleplay.svg'
        alt='Get it on Google Play'
        style={{ height: BADGE_HEIGHT, width: 'auto', display: 'block' }}
      />
    </a>
  );
}

// ─── Phone Frame ──────────────────────────────────────────────────────────────
function AppImg({ src, alt, width }: { src: string; alt: string; width: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      style={{
        width,
        height: 'auto',
        display: 'block',
        flexShrink: 0,
        filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.18))',
      }}
    />
  );
}

// ─── Features Tabs ────────────────────────────────────────────────────────────
const FEATURES = [
  {
    id: 'dashboard',
    icon: '🏠',
    label: 'Dashboard',
    title: 'Everything at a glance',
    desc: "Open the app and instantly see your total balance, how much you've spent this month vs your budget, and your most recent transactions — all on one screen.",
    screenshot: '/home-page.svg',
    alt: 'Spendler home dashboard showing balance and transactions',
  },
  {
    id: 'reports',
    icon: '📊',
    label: 'Reports',
    title: 'See where your money really goes',
    desc: 'A beautiful donut chart breaks down your spending by category every month. Hover any slice to drill into the numbers. Navigate month by month to spot trends.',
    screenshot: '/report.svg',
    alt: 'Spendler monthly spending report with donut chart',
  },
  {
    id: 'budgets',
    icon: '🎯',
    label: 'Budget & Goals',
    title: 'Plan spending. Save for goals.',
    desc: "Set per-category budgets so you always know when you're close to your limit. Add savings goals for big purchases and track your progress every month.",
    screenshot: '/plan-budgets-for-category-and-for-goals.svg',
    alt: 'Spendler budget tracking and savings goals',
  },
  {
    id: 'categories',
    icon: '🏷️',
    label: '40+ Categories',
    title: '40+ categories built in',
    desc: 'Food & Drink, Transport, Shopping, Health, Entertainment and more — organized into groups that match how you actually spend. Fully customizable too.',
    screenshot: '/40-categories-for-you.svg',
    alt: 'Spendler 40+ spending categories',
  },
  {
    id: 'subscriptions',
    icon: '🔄',
    label: 'Subscriptions',
    title: 'Know your monthly commitments',
    desc: 'Every recurring payment in one place. See the total monthly cost of all your subscriptions, when each renews next, and which category it belongs to.',
    screenshot: '/track-subscriptions.svg',
    alt: 'Spendler subscription tracker showing Netflix, Gym, Claude',
  },
  {
    id: 'rules',
    icon: '⚡',
    label: 'Smart Rules',
    title: 'Automate what you repeat',
    desc: 'Create keyword rules once — "healthy food" → Gym & Fitness, "outside food" → Restaurants. Every matching transaction is instantly categorized, no AI needed.',
    screenshot: '/smart-rules.svg',
    alt: 'Spendler smart rules for auto-categorization',
  },
];

function FeaturesTabs() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const handleSelect = (i: number) => {
    setActive(i);
    setAnimKey((k) => k + 1);
  };

  const f = FEATURES[active];

  return (
    <div
      style={{
        display: 'flex',
        gap: 56,
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {/* Tab list — left */}
      <div style={{ flex: '1 1 300px', maxWidth: 440 }}>
        {FEATURES.map((feat, i) => (
          <button
            key={feat.id}
            onClick={() => handleSelect(i)}
            style={{
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
              width: '100%',
              padding: '14px 16px',
              borderRadius: 14,
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              marginBottom: 4,
              background: active === i ? '#f5f5f5' : 'transparent',
              transition: 'background 0.15s',
              borderLeft:
                active === i ? '3px solid #111' : '3px solid transparent',
            }}
          >
            <span style={{ fontSize: 22, flexShrink: 0, lineHeight: 1.3 }}>
              {feat.icon}
            </span>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: active === i ? '#111' : '#666',
                  marginBottom: active === i ? 6 : 0,
                  transition: 'color 0.15s',
                  fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                }}
              >
                {feat.title}
              </div>
              {active === i && (
                <div
                  style={{
                    fontSize: 13,
                    color: '#6b7280',
                    lineHeight: 1.65,
                    fontFamily: 'var(--font-bricolage), system-ui, sans-serif',
                    animation: 'fadeUp 0.3s ease both',
                  }}
                >
                  {feat.desc}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Screenshot — right */}
      <div
        key={animKey}
        style={{
          flexShrink: 0,
          animation: 'phoneIn 0.35s cubic-bezier(0.4,0,0.2,1) both',
        }}
      >
        <AppImg src={f.screenshot} alt={f.alt} width={310} />
      </div>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const NAV_LINKS = [
    { label: 'Features', href: '#features' },
    { label: 'Reports', href: '#reports' },
    { label: 'Pricing', href: '#pricing' },
  ];
  return (
    <div
      style={{ position: 'sticky', top: 14, zIndex: 100, padding: '0 20px' }}
    >
      <nav
        style={{
          maxWidth: 1024,
          margin: '0 auto',
          padding: '12px 24px',
          borderRadius: 18,
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 2px 24px rgba(0,0,0,0.07)',
          position: 'relative',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a href='/' style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/logo.png' alt='Spendler logo' style={{ width: 28, height: 28, borderRadius: 7, display: 'block' }} />
            <span style={{ fontSize: 18, fontWeight: 800, color: '#111', letterSpacing: '-0.5px' }}>
              Spendler
            </span>
          </a>

          {/* Desktop links */}
          <div className='nav-desktop-links'>
            {NAV_LINKS.map((l) => (
              <a key={l.label} className='nav-link' href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            className='nav-desktop-cta'
            href='https://apps.apple.com/app/pennify'
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: '#fff',
              background: '#111',
              padding: '9px 22px',
              borderRadius: 50,
              textDecoration: 'none',
              transition: 'opacity 0.18s',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = '0.7')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = '1')
            }
          >
            Get the App
          </a>

          {/* Hamburger */}
          <button
            className='nav-hamburger'
            onClick={() => setOpen((o) => !o)}
            aria-label='Toggle menu'
          >
            {open ? (
              <svg width={22} height={22} viewBox='0 0 22 22' fill='none'>
                <line
                  x1={4}
                  y1={4}
                  x2={18}
                  y2={18}
                  stroke='#111'
                  strokeWidth={2}
                  strokeLinecap='round'
                />
                <line
                  x1={18}
                  y1={4}
                  x2={4}
                  y2={18}
                  stroke='#111'
                  strokeWidth={2}
                  strokeLinecap='round'
                />
              </svg>
            ) : (
              <svg width={22} height={22} viewBox='0 0 22 22' fill='none'>
                <line
                  x1={3}
                  y1={6}
                  x2={19}
                  y2={6}
                  stroke='#111'
                  strokeWidth={2}
                  strokeLinecap='round'
                />
                <line
                  x1={3}
                  y1={11}
                  x2={19}
                  y2={11}
                  stroke='#111'
                  strokeWidth={2}
                  strokeLinecap='round'
                />
                <line
                  x1={3}
                  y1={16}
                  x2={19}
                  y2={16}
                  stroke='#111'
                  strokeWidth={2}
                  strokeLinecap='round'
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown — absolutely positioned, doesn't push content */}
        <div className={`nav-mobile-menu${open ? ' open' : ''}`}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              className='nav-mobile-link'
              href={l.href}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            className='nav-mobile-cta'
            href='https://apps.apple.com/app/pennify'
          >
            Get the App
          </a>
        </div>
      </nav>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ background: '#fff', color: '#111', minHeight: '100vh' }}>
      <style>{`
        * { font-family: var(--font-bricolage), system-ui, sans-serif !important; box-sizing: border-box; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes phoneIn {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.8) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        .a-up   { animation: fadeUp 0.6s ease both; }
        .a-up-1 { animation: fadeUp 0.6s 0.1s ease both; }
        .a-up-2 { animation: fadeUp 0.6s 0.2s ease both; }
        .a-up-3 { animation: fadeUp 0.6s 0.32s ease both; }
        .a-in   { animation: fadeIn 0.8s 0.1s ease both; }
        .phone-hero { animation: float 5s ease-in-out infinite; }

        .nav-link { font-size: 14px; font-weight: 500; color: #666; text-decoration: none; transition: color 0.15s; }
        .nav-link:hover { color: #111; }

        .footer-link { font-size: 13px; color: #555; text-decoration: none; transition: color 0.15s; }
        .footer-link:hover { color: #fff; }

        .nav-desktop-links { display: flex; gap: 28px; align-items: center; }
        .nav-desktop-cta   { display: block; }
        .nav-hamburger     { display: none; background: none; border: none; cursor: pointer; padding: 4px; }

        .nav-mobile-menu {
          display: none;
          flex-direction: column;
          gap: 4px;
          position: absolute;
          top: calc(100% + 8px);
          left: 0; right: 0;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          padding: 12px 24px 16px;
          z-index: 10;
        }
        .nav-mobile-menu.open { display: flex; }
        .nav-mobile-link {
          font-size: 15px; font-weight: 500; color: #444; text-decoration: none;
          padding: 10px 4px; border-radius: 8px; transition: color 0.15s;
        }
        .nav-mobile-link:hover { color: #111; }
        .nav-mobile-cta {
          display: block; margin-top: 8px; text-align: center;
          font-size: 14px; font-weight: 700; color: #fff;
          background: #111; padding: 12px 22px; border-radius: 50px;
          text-decoration: none;
        }

        @media (max-width: 640px) {
          .nav-desktop-links { display: none; }
          .nav-desktop-cta   { display: none; }
          .nav-hamburger     { display: flex; align-items: center; justify-content: center; }
        }

        @media (max-width: 860px) {
          .hero-ai-card { display: none; }
        }
      `}</style>

      <Navbar />

      {/* ══ Hero ═══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: '#fff',
          position: 'relative',
          padding: '64px 20px 96px',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid background layer only */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, #d0d0d0 1px, transparent 1px)',
            backgroundSize: '26px 26px',
            WebkitMaskImage:
              'radial-gradient(ellipse 90% 70% at 50% 0%, #000 30%, transparent 75%)',
            maskImage:
              'radial-gradient(ellipse 90% 70% at 50% 0%, #000 30%, transparent 75%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 1280,
            margin: '0 auto',
            display: 'flex',
            gap: 56,
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Copy */}
          <div style={{ flex: '1 1 340px', maxWidth: 500 }}>
            <div
              className='a-up'
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                fontWeight: 700,
                color: '#111',
                background: '#f0f0f0',
                padding: '6px 14px',
                borderRadius: 50,
                marginBottom: 22,
              }}
            >
              <span>✦</span> AI-Powered Personal Finance
            </div>
            <h1
              className='a-up-1'
              style={{
                fontSize: 'clamp(38px, 5vw, 62px)',
                fontWeight: 800,
                color: '#111',
                lineHeight: 1.08,
                letterSpacing: '-1.5px',
                margin: '0 0 20px',
              }}
            >
              Track every penny.
              <br />
              <span style={{ color: '#888' }}>AI handles the rest.</span>
            </h1>
            <p
              className='a-up-2'
              style={{
                fontSize: 17,
                color: '#555',
                lineHeight: 1.7,
                margin: '0 0 36px',
                maxWidth: 420,
                fontWeight: 400,
              }}
            >
              Add a transaction, Spendler categorizes it instantly. Set budgets,
              track goals, monitor subscriptions — all in one clean app.
            </p>
            <div
              className='a-up-3'
              style={{
                display: 'flex',
                gap: 14,
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
            <div
              className='a-up-3'
              style={{
                marginTop: 22,
                display: 'flex',
                gap: 22,
                flexWrap: 'wrap',
              }}
            >
              {['Free to download', 'Works offline', '40+ categories'].map(
                (label) => (
                  <div
                    key={label}
                    style={{ display: 'flex', alignItems: 'center', gap: 6 }}
                  >
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        background: '#111',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontSize: 9, color: '#fff' }}>✓</span>
                    </div>
                    <span
                      style={{
                        fontSize: 13,
                        color: '#6b7280',
                        fontWeight: 500,
                      }}
                    >
                      {label}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Phone + floating card */}
          <div className='a-in' style={{ position: 'relative', flexShrink: 0 }}>
            <div className='phone-hero'>
              <AppImg src='/home-page.svg' alt='Spendler home dashboard' width={320} />
            </div>

            {/* Floating AI categorization card */}
            <div
              className='hero-ai-card'
              style={{
                position: 'absolute',
                bottom: 60,
                left: -148,
                background: '#fff',
                borderRadius: 16,
                padding: '14px 16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                border: '1px solid #f0f0f0',
                width: 200,
                animation:
                  'popIn 0.5s 0.6s cubic-bezier(0.34,1.56,0.64,1) both',
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: '#9ca3af',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: 8,
                }}
              >
                AI Categorized
              </div>
              {[
                {
                  name: 'Rice',
                  tag: 'Groceries',
                  color: '#F97316',
                  bg: '#FFF7ED',
                },
                {
                  name: 'Netflix',
                  tag: 'Streaming',
                  color: '#EC4899',
                  bg: '#FDF2F8',
                },
                {
                  name: 'Petrol',
                  tag: 'Fuel',
                  color: '#3B82F6',
                  bg: '#EFF6FF',
                },
              ].map((tx) => (
                <div
                  key={tx.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{ fontSize: 13, fontWeight: 600, color: '#111' }}
                  >
                    {tx.name}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: tx.color,
                      background: tx.bg,
                      padding: '2px 8px',
                      borderRadius: 20,
                    }}
                  >
                    {tx.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Floating stats card top-right */}
            <div
              style={{
                position: 'absolute',
                top: 40,
                right: -120,
                background: '#111',
                borderRadius: 14,
                padding: '12px 16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                animation:
                  'popIn 0.5s 0.8s cubic-bezier(0.34,1.56,0.64,1) both',
                minWidth: 130,
              }}
              className='hero-ai-card'
            >
              <div
                style={{
                  fontSize: 10,
                  color: '#555',
                  fontWeight: 500,
                  marginBottom: 4,
                }}
              >
                This month
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: '#fff',
                  letterSpacing: '-0.5px',
                }}
              >
                $1,289
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: '#22C55E',
                  fontWeight: 600,
                  marginTop: 2,
                }}
              >
                27% of budget
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Stats Bar ══════════════════════════════════════════════════════════ */}
      <div
        style={{
          background: '#f9f9f9',
          borderTop: '1px solid #efefef',
          borderBottom: '1px solid #efefef',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '28px 20px',
            display: 'flex',
            justifyContent: 'center',
            gap: 56,
            flexWrap: 'wrap',
          }}
        >
          {[
            ['40+', 'Smart categories'],
            ['$0', 'Monthly cost'],
            ['100%', 'Offline capable'],
            ['< 1s', 'AI categorization'],
          ].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  color: '#111',
                  letterSpacing: '-0.5px',
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: '#9ca3af',
                  fontWeight: 500,
                  marginTop: 2,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ Features Tabs ══════════════════════════════════════════════════════ */}
      <section
        id='features'
        style={{ background: '#fff', padding: '100px 20px' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                fontWeight: 700,
                color: '#111',
                background: '#f0f0f0',
                padding: '6px 14px',
                borderRadius: 50,
                marginBottom: 16,
              }}
            >
              ✦ Everything you need
            </div>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 46px)',
                fontWeight: 800,
                color: '#111',
                lineHeight: 1.12,
                letterSpacing: '-1px',
                margin: '0 0 14px',
              }}
            >
              One app, your entire financial life
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#666',
                maxWidth: 460,
                margin: '0 auto',
                lineHeight: 1.65,
              }}
            >
              From daily transactions to long-term goals — explore every feature
              Spendler has to offer.
            </p>
          </div>
          <FeaturesTabs />
        </div>
      </section>

      {/* ══ Monthly Transactions Highlight ═════════════════════════════════════ */}
      <section
        id='reports'
        style={{ background: '#f6f6f6', padding: '100px 20px' }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'flex',
            gap: 72,
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <div className='a-in' style={{ flexShrink: 0 }}>
            <AppImg src='/monthly-transactions.svg' alt='Monthly transactions view' width={320} />
          </div>
          <div style={{ flex: '1 1 300px', maxWidth: 460 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                fontWeight: 700,
                color: '#111',
                background: '#e8e8e8',
                padding: '6px 14px',
                borderRadius: 50,
                marginBottom: 20,
              }}
            >
              📅 Monthly View
            </div>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 800,
                color: '#111',
                lineHeight: 1.12,
                letterSpacing: '-1px',
                margin: '0 0 18px',
              }}
            >
              Every transaction, perfectly organized
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#555',
                lineHeight: 1.7,
                margin: '0 0 28px',
              }}
            >
              Browse your full transaction history by month. Search anything,
              filter by category, and see your top spending categories at a
              glance.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                {
                  icon: '🔍',
                  title: 'Instant search',
                  desc: 'Find any transaction by name in milliseconds',
                },
                {
                  icon: '📈',
                  title: 'Top categories',
                  desc: 'See which categories consumed most of your budget',
                },
                {
                  icon: '💳',
                  title: 'Income & expenses',
                  desc: 'Track both sides to see your true net cashflow',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      flexShrink: 0,
                      border: '1px solid #e8e8e8',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: '#111',
                        marginBottom: 2,
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: '#6b7280',
                        lineHeight: 1.5,
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════════════════════ */}
      <section
        id='pricing'
        style={{ background: '#111', padding: '100px 20px' }}
      >
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: '#444',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Start today — it&apos;s free
          </div>
          <h2
            style={{
              fontSize: 'clamp(34px, 5vw, 58px)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.08,
              letterSpacing: '-1.5px',
              margin: '0 0 20px',
            }}
          >
            Take control of your money
          </h2>
          <p
            style={{
              fontSize: 17,
              color: '#555',
              margin: '0 0 44px',
              lineHeight: 1.65,
            }}
          >
            Track expenses, set budgets, and hit your financial goals. Free,
            offline-capable, and genuinely easy to use.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 14,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
          <p style={{ fontSize: 13, color: '#333', marginTop: 24 }}>
            Free download · No subscription required · Works offline
          </p>
        </div>
      </section>

      {/* ══ Footer ═════════════════════════════════════════════════════════════ */}
      <footer
        style={{
          background: '#0a0a0a',
          borderTop: '1px solid #1a1a1a',
          padding: '44px 20px',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='/logo.png' alt='Spendler logo' style={{ width: 26, height: 26, borderRadius: 6, display: 'block' }} />
              <span style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>Spendler</span>
            </div>
            <div style={{ fontSize: 13, color: '#444' }}>
              Personal finance, crystal clear.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 28 }}>
            <a className='footer-link' href='/privacy'>
              Privacy
            </a>
            <a className='footer-link' href='/terms'>
              Terms
            </a>
            <a className='footer-link' href='/contact'>
              Contact
            </a>
          </div>
          <div style={{ fontSize: 13, color: '#333' }}>
            © 2026 Spendler. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
