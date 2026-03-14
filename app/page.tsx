'use client';
import React, { useState, useEffect } from 'react';

const BADGE_HEIGHT = 52;

const badgeHoverOn = (e: React.MouseEvent) => {
  const el = e.currentTarget as HTMLElement;
  el.style.opacity = '0.75';
  el.style.transform = 'translateY(-2px)';
};
const badgeHoverOff = (e: React.MouseEvent) => {
  const el = e.currentTarget as HTMLElement;
  el.style.opacity = '1';
  el.style.transform = 'translateY(0)';
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
      onMouseEnter={badgeHoverOn}
      onMouseLeave={badgeHoverOff}
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
      onMouseEnter={badgeHoverOn}
      onMouseLeave={badgeHoverOff}
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

// ─── AI Categorization Demo ───────────────────────────────────────────────────
const AI_EXAMPLES = [
  {
    name: 'Starbucks Coffee',
    category: 'Coffee & Cafes',
    icon: '☕',
    color: '#F97316',
    bg: '#FFF7ED',
    amount: '-₹320',
  },
  {
    name: 'Netflix',
    category: 'Streaming Services',
    icon: '📺',
    color: '#EC4899',
    bg: '#FDF2F8',
    amount: '-₹680',
  },
  {
    name: 'Big Bazaar',
    category: 'Groceries',
    icon: '🛒',
    color: '#F97316',
    bg: '#FFF7ED',
    amount: '-₹1,240',
  },
  {
    name: 'Uber',
    category: 'Taxi & Ride Share',
    icon: '🚗',
    color: '#3B82F6',
    bg: '#EFF6FF',
    amount: '-₹180',
  },
  {
    name: 'Cult.fit',
    category: 'Gym & Fitness',
    icon: '💪',
    color: '#22C55E',
    bg: '#F0FDF4',
    amount: '-₹910',
  },
];

function AICategorizeDemo() {
  const [exIdx, setExIdx] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'thinking' | 'done'>('typing');
  const [typedLen, setTypedLen] = useState(0);
  const [history, setHistory] = useState<typeof AI_EXAMPLES>([]);

  const ex = AI_EXAMPLES[exIdx];

  useEffect(() => {
    setPhase('typing');
    setTypedLen(0);
  }, [exIdx]);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === 'typing') {
      if (typedLen < ex.name.length) {
        t = setTimeout(() => setTypedLen((l) => l + 1), 70);
      } else {
        t = setTimeout(() => setPhase('thinking'), 400);
      }
    } else if (phase === 'thinking') {
      t = setTimeout(() => setPhase('done'), 1300);
    } else if (phase === 'done') {
      t = setTimeout(() => {
        setHistory((h) => [ex, ...h].slice(0, 3));
        setExIdx((i) => (i + 1) % AI_EXAMPLES.length);
      }, 1800);
    }
    return () => clearTimeout(t);
  }, [phase, typedLen, ex]);

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 20,
        border: '1px solid #e5e7eb',
        padding: '24px 24px 20px',
        width: '100%',
        maxWidth: 420,
        boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: '#9ca3af',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: 10,
        }}
      >
        Add Transaction
      </div>

      {/* Input field */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '12px 16px',
          borderRadius: 12,
          border: '2px solid #111',
          background: '#f9fafb',
          marginBottom: 14,
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: '#111', flex: 1 }}>
          {ex.name.slice(0, typedLen)}
          <span
            style={{
              borderRight: '2px solid #111',
              marginLeft: 1,
              animation: 'cursorBlink 1s step-end infinite',
            }}
          >
            &nbsp;
          </span>
        </span>
      </div>

      {/* AI response area */}
      <div
        style={{
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 14,
        }}
      >
        {phase === 'thinking' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                background: '#111',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              ✦
            </div>
            <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#111',
                    animation: `aiDot 1s ${i * 0.22}s ease-in-out infinite`,
                  }}
                />
              ))}
            </div>
            <span style={{ fontSize: 13, color: '#6b7280', fontWeight: 500 }}>
              AI is thinking…
            </span>
          </div>
        )}
        {phase === 'done' && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 18px',
              borderRadius: 50,
              background: ex.bg,
              border: `1.5px solid ${ex.color}30`,
              animation: 'popIn 0.4s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          >
            <span style={{ fontSize: 20 }}>{ex.icon}</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: ex.color }}>
              {ex.category}
            </span>
            <span style={{ fontSize: 12, color: '#9ca3af', marginLeft: 2 }}>
              ✓
            </span>
          </div>
        )}
        {phase === 'typing' && (
          <span style={{ fontSize: 13, color: '#d1d5db' }}>
            AI will auto-categorize this…
          </span>
        )}
      </div>

      {/* History */}
      {history.length > 0 && (
        <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: 12 }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: '#9ca3af',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}
          >
            Recently Added
          </div>
          {history.map((row, i) => (
            <div
              key={`${row.name}-${i}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '7px 0',
                borderBottom:
                  i < history.length - 1 ? '1px solid #f9fafb' : 'none',
                animation: i === 0 ? 'slideDown 0.3s ease' : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: row.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                  }}
                >
                  {row.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: '#111',
                      lineHeight: 1.2,
                    }}
                  >
                    {row.name}
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: row.color,
                      background: row.bg,
                      padding: '2px 8px',
                      borderRadius: 20,
                      display: 'inline-block',
                      marginTop: 2,
                    }}
                  >
                    {row.category}
                  </span>
                </div>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#111' }}>
                {row.amount}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Report Donut Demo ────────────────────────────────────────────────────────
const REPORT_CATS = [
  { name: 'Entertainment', pct: 34, color: '#EC4899', amount: '₹4,180' },
  { name: 'Education', pct: 17, color: '#8B5CF6', amount: '₹2,100' },
  { name: 'Shopping', pct: 16, color: '#6366F1', amount: '₹2,000' },
  { name: 'Food & Drink', pct: 12, color: '#F97316', amount: '₹1,500' },
  { name: 'Transport', pct: 10, color: '#3B82F6', amount: '₹1,230' },
  { name: 'Other', pct: 11, color: '#10B981', amount: '₹1,279' },
];

function ReportDemo() {
  const [active, setActive] = useState<number | null>(null);
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnim(true), 300);
    return () => clearTimeout(t);
  }, []);

  const r = 62;
  const C = 2 * Math.PI * r;
  let cum = 0;

  return (
    <div
      style={{
        display: 'flex',
        gap: 48,
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {/* Donut SVG */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <svg width={200} height={200} viewBox='0 0 200 200'>
          <g transform='rotate(-90 100 100)'>
            {REPORT_CATS.map((cat, i) => {
              const dash = (cat.pct / 100) * C;
              const offset = -(cum / 100) * C;
              cum += cat.pct;
              const isActive = active === i;
              const isAnyActive = active !== null;
              return (
                <circle
                  key={i}
                  cx={100}
                  cy={100}
                  r={r}
                  fill='none'
                  stroke={cat.color}
                  strokeWidth={isActive ? 28 : 22}
                  strokeDasharray={
                    anim ? `${dash - 2} ${C - dash + 2}` : `0 ${C}`
                  }
                  strokeDashoffset={offset}
                  style={{
                    transition: `stroke-dasharray 1.2s ${i * 0.1}s cubic-bezier(0.4,0,0.2,1), stroke-width 0.2s ease, opacity 0.2s ease`,
                    cursor: 'pointer',
                    opacity: isAnyActive && !isActive ? 0.3 : 1,
                  }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                />
              );
            })}
          </g>
        </svg>
        {/* Center label */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          {active !== null ? (
            <>
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  color: REPORT_CATS[active].color,
                  lineHeight: 1,
                }}
              >
                {REPORT_CATS[active].pct}%
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: '#6b7280',
                  fontWeight: 500,
                  textAlign: 'center',
                  maxWidth: 72,
                  marginTop: 2,
                }}
              >
                {REPORT_CATS[active].name}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#111',
                  marginTop: 2,
                }}
              >
                {REPORT_CATS[active].amount}
              </div>
            </>
          ) : (
            <>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#111' }}>
                27%
              </div>
              <div style={{ fontSize: 10, color: '#9ca3af', fontWeight: 500 }}>
                of budget
              </div>
              <div style={{ fontSize: 11, color: '#6b7280', marginTop: 1 }}>
                spent
              </div>
            </>
          )}
        </div>
      </div>

      {/* Category list */}
      <div style={{ flex: 1, minWidth: 240 }}>
        {REPORT_CATS.map((cat, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '9px 12px',
              borderRadius: 12,
              marginBottom: 4,
              cursor: 'pointer',
              background: active === i ? `${cat.color}12` : 'transparent',
              transition: 'background 0.15s',
            }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: cat.color,
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 4,
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 600, color: '#111' }}>
                  {cat.name}
                </span>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#111' }}>
                  {cat.amount}
                </span>
              </div>
              <div
                style={{
                  height: 4,
                  background: '#f3f4f6',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    background: cat.color,
                    borderRadius: 2,
                    width: anim ? `${cat.pct * 2.5}%` : '0%',
                    transition: `width 1.2s ${i * 0.12}s cubic-bezier(0.4,0,0.2,1)`,
                  }}
                />
              </div>
            </div>
            <span
              style={{
                fontSize: 12,
                color: '#9ca3af',
                fontWeight: 600,
                width: 34,
                textAlign: 'right',
              }}
            >
              {cat.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Phone Mockup ─────────────────────────────────────────────────────────────
function PhoneMockup() {
  return (
    <div
      className='phone-float'
      style={{
        width: 248,
        flexShrink: 0,
        background: '#111',
        borderRadius: 40,
        padding: '10px 8px 14px',
        boxShadow:
          '0 40px 80px rgba(0,0,0,0.24), 0 0 0 1px rgba(255,255,255,0.06)',
      }}
    >
      {/* Dynamic Island */}
      <div
        style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}
      >
        <div
          style={{
            width: 88,
            height: 26,
            background: '#000',
            borderRadius: 13,
          }}
        />
      </div>
      {/* Screen */}
      <div
        style={{
          borderRadius: 30,
          background: '#0d0d0d',
          overflow: 'hidden',
          padding: '16px 14px',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 12 }}>
          <div
            style={{
              fontSize: 10,
              color: '#444',
              fontWeight: 500,
              marginBottom: 2,
            }}
          >
            March 2026
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.5px',
            }}
          >
            ₹4,98,500
          </div>
          <div style={{ fontSize: 10, color: '#444' }}>Total balance</div>
        </div>

        {/* Balance card */}
        <div
          style={{
            background: '#fff',
            borderRadius: 16,
            padding: '12px 12px 10px',
            marginBottom: 12,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 8,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 9,
                  color: '#9ca3af',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Spent
              </div>
              <div style={{ fontSize: 17, fontWeight: 800, color: '#111' }}>
                ₹13,289
              </div>
            </div>
            <svg width={38} height={38} viewBox='0 0 38 38'>
              <circle
                cx={19}
                cy={19}
                r={14}
                fill='none'
                stroke='#f3f4f6'
                strokeWidth={5}
              />
              <circle
                cx={19}
                cy={19}
                r={14}
                fill='none'
                stroke='#111'
                strokeWidth={5}
                strokeDasharray='24 88'
                strokeDashoffset={22}
                strokeLinecap='round'
                transform='rotate(-90 19 19)'
              />
              <text
                x={19}
                y={23}
                textAnchor='middle'
                fontSize={8}
                fontWeight={800}
                fill='#111'
              >
                27%
              </text>
            </svg>
          </div>
          <div
            style={{
              height: 4,
              background: '#f3f4f6',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '27%',
                height: '100%',
                background: '#111',
                borderRadius: 2,
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 4,
            }}
          >
            <span style={{ fontSize: 9, color: '#9ca3af' }}>₹36,711 left</span>
            <span style={{ fontSize: 9, color: '#9ca3af' }}>of ₹50,000</span>
          </div>
        </div>

        {/* Transactions */}
        <div
          style={{
            fontSize: 9,
            fontWeight: 700,
            color: '#444',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginBottom: 7,
          }}
        >
          Recent
        </div>
        {[
          {
            name: 'Rice',
            tag: 'Groceries',
            tagColor: '#F97316',
            tagBg: '#FFF7ED',
            amount: '-₹1,500',
            cls: 'tx-1',
          },
          {
            name: 'Netflix',
            tag: 'Streaming',
            tagColor: '#EC4899',
            tagBg: '#FDF2F8',
            amount: '-₹680',
            cls: 'tx-2',
          },
          {
            name: 'Petrol',
            tag: 'Fuel',
            tagColor: '#3B82F6',
            tagBg: '#EFF6FF',
            amount: '-₹2,400',
            cls: 'tx-3',
          },
        ].map((tx, i) => (
          <div
            key={i}
            className={tx.cls}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '6px 0',
              borderBottom: i < 2 ? '1px solid #1c1c1c' : 'none',
            }}
          >
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#fff' }}>
                {tx.name}
              </div>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  color: tx.tagColor,
                  background: `${tx.tagBg}28`,
                  padding: '1px 6px',
                  borderRadius: 10,
                }}
              >
                {tx.tag}
              </span>
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#fff' }}>
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
      {/* Home bar */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <div
          style={{
            width: 80,
            height: 4,
            background: '#2a2a2a',
            borderRadius: 2,
          }}
        />
      </div>
    </div>
  );
}

// ─── Bento Card ───────────────────────────────────────────────────────────────
function BentoCard({
  children,
  style,
  colSpan = 4,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  colSpan?: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        gridColumn: `span ${colSpan}`,
        borderRadius: 20,
        border: '1px solid #e8e8e8',
        padding: 28,
        background: '#fff',
        transition: 'box-shadow 0.22s ease, transform 0.22s ease',
        boxShadow: hovered
          ? '0 12px 40px rgba(0,0,0,0.1)'
          : '0 2px 8px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        overflow: 'hidden',
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const NAV_LINKS = [
    { label: 'Features', href: '#features' },
    { label: 'Reports', href: '#reports' },
    { label: 'Pricing', href: '#pricing' },
  ];
  return (
    <div style={{ position: 'sticky', top: 14, zIndex: 100, padding: '0 20px' }}>
      <nav
        style={{
          maxWidth: 1100,
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 18, fontWeight: 800, color: '#111', letterSpacing: '-0.5px' }}>
            Pennify
          </span>

          {/* Desktop links */}
          <div className='nav-desktop-links'>
            {NAV_LINKS.map((l) => (
              <a key={l.label} className='nav-link' href={l.href}>{l.label}</a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            className='nav-desktop-cta'
            href='https://apps.apple.com/app/pennify'
            style={{
              fontSize: 13, fontWeight: 700, color: '#fff',
              background: '#111', padding: '9px 22px', borderRadius: 50,
              textDecoration: 'none', transition: 'opacity 0.18s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.7')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
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
                <line x1={4} y1={4} x2={18} y2={18} stroke='#111' strokeWidth={2} strokeLinecap='round' />
                <line x1={18} y1={4} x2={4} y2={18} stroke='#111' strokeWidth={2} strokeLinecap='round' />
              </svg>
            ) : (
              <svg width={22} height={22} viewBox='0 0 22 22' fill='none'>
                <line x1={3} y1={6} x2={19} y2={6} stroke='#111' strokeWidth={2} strokeLinecap='round' />
                <line x1={3} y1={11} x2={19} y2={11} stroke='#111' strokeWidth={2} strokeLinecap='round' />
                <line x1={3} y1={16} x2={19} y2={16} stroke='#111' strokeWidth={2} strokeLinecap='round' />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`nav-mobile-menu${open ? ' open' : ''}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} className='nav-mobile-link' href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className='nav-mobile-cta' href='https://apps.apple.com/app/pennify'>
            Get the App
          </a>
        </div>
      </nav>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <style>{`
        * { font-family: var(--font-bricolage), system-ui, sans-serif !important; box-sizing: border-box; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes txSlide {
          0%, 8%   { opacity: 0; transform: translateY(8px); }
          18%, 72% { opacity: 1; transform: translateY(0); }
          82%, 100%{ opacity: 0; transform: translateY(-8px); }
        }
        @keyframes aiDot {
          0%, 100% { transform: translateY(0); opacity: 0.35; }
          50%      { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.7); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        .a-up   { animation: fadeUp 0.6s ease both; }
        .a-up-1 { animation: fadeUp 0.6s 0.1s ease both; }
        .a-up-2 { animation: fadeUp 0.6s 0.22s ease both; }
        .a-up-3 { animation: fadeUp 0.6s 0.34s ease both; }
        .a-in   { animation: fadeIn 0.9s 0.1s ease both; }
        .phone-float { animation: float 5.5s ease-in-out infinite; }
        .tx-1 { animation: txSlide 6s 0s ease-in-out infinite; }
        .tx-2 { animation: txSlide 6s 2s ease-in-out infinite; }
        .tx-3 { animation: txSlide 6s 4s ease-in-out infinite; }

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
          left: 0;
          right: 0;
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

        @media (max-width: 768px) {
          .bento-grid { grid-template-columns: 1fr !important; }
          .bento-grid > div { grid-column: span 1 !important; }
        }
      `}</style>

      {/* ══ Navbar ══════════════════════════════════════════════════════════════ */}
      <Navbar />

      {/* ══ Hero ════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: '#fff',
          position: 'relative',
          padding: '64px 20px 96px',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid — mask applied only to this background layer, not content */}
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
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            gap: 56,
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Copy */}
          <div style={{ flex: '1 1 360px', maxWidth: 520 }}>
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
                letterSpacing: '0.02em',
              }}
            >
              <span style={{ fontSize: 14 }}>✦</span> AI-Powered Personal
              Finance
            </div>
            <h1
              className='a-up-1'
              style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: 800,
                color: '#111',
                lineHeight: 1.08,
                letterSpacing: '-1.5px',
                margin: '0 0 20px',
              }}
            >
              Your finances,
              <br />
              <span style={{ color: '#888' }}>finally under</span> control.
            </h1>
            <p
              className='a-up-2'
              style={{
                fontSize: 17,
                color: '#666',
                lineHeight: 1.7,
                margin: '0 0 36px',
                maxWidth: 440,
                fontWeight: 400,
              }}
            >
              Track every rupee. AI categorizes your spending automatically. Set
              budgets, reach goals, and see exactly where your money goes.
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

          {/* Phone */}
          <div className='a-in' style={{ flexShrink: 0 }}>
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ══ Stats Bar ═══════════════════════════════════════════════════════════ */}
      <div
        style={{
          background: '#f9f9f9',
          borderTop: '1px solid #efefef',
          borderBottom: '1px solid #efefef',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '32px 20px',
            display: 'flex',
            justifyContent: 'center',
            gap: 56,
            flexWrap: 'wrap',
          }}
        >
          {[
            ['40+', 'Smart categories'],
            ['₹0', 'Monthly cost'],
            ['100%', 'Offline capable'],
            ['< 1s', 'AI categorization'],
          ].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: 28,
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

      {/* ══ AI Section ══════════════════════════════════════════════════════════ */}
      <section
        id='features'
        style={{ background: '#fff', padding: '100px 20px' }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            gap: 72,
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <div style={{ flex: '1 1 300px', maxWidth: 460 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                fontWeight: 700,
                color: '#fff',
                background: '#111',
                padding: '6px 14px',
                borderRadius: 50,
                marginBottom: 20,
              }}
            >
              <span>✦</span> AI Categorization
            </div>
            <h2
              style={{
                fontSize: 'clamp(30px, 4vw, 48px)',
                fontWeight: 800,
                color: '#111',
                lineHeight: 1.12,
                letterSpacing: '-1px',
                margin: '0 0 18px',
              }}
            >
              Just type.
              <br />
              AI does the rest.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#666',
                lineHeight: 1.7,
                margin: '0 0 28px',
                fontWeight: 400,
              }}
            >
              Add a transaction name and Pennify instantly categorizes it —
              Groceries, Fuel, Streaming, Gym. No manual tagging, ever.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                {
                  icon: '⚡',
                  title: 'Instant results',
                  desc: 'Under 1 second to categorize any transaction',
                },
                {
                  icon: '🧠',
                  title: 'Learns your habits',
                  desc: 'Smart Rules let you teach and override the AI',
                },
                {
                  icon: '🏷️',
                  title: '40+ categories',
                  desc: 'Food, Transport, Shopping, Health and more',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 11,
                      background: '#f6f6f6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      flexShrink: 0,
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
          <div style={{ flexShrink: 0 }}>
            <AICategorizeDemo />
          </div>
        </div>
      </section>

      {/* ══ Reports Section ═════════════════════════════════════════════════════ */}
      <section
        id='reports'
        style={{ background: '#f6f6f6', padding: '100px 20px' }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
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
                marginBottom: 16,
              }}
            >
              📊 Visual Reports
            </div>
            <h2
              style={{
                fontSize: 'clamp(30px, 4vw, 48px)',
                fontWeight: 800,
                color: '#111',
                lineHeight: 1.12,
                letterSpacing: '-1px',
                margin: '0 0 14px',
              }}
            >
              See where every rupee goes
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#666',
                maxWidth: 480,
                margin: '0 auto',
                lineHeight: 1.65,
              }}
            >
              Beautiful charts break down spending by category. Hover to
              explore. Navigate month by month with a tap.
            </p>
          </div>
          <div
            style={{
              background: '#fff',
              borderRadius: 24,
              padding: '44px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
            }}
          >
            <ReportDemo />
          </div>
        </div>
      </section>

      {/* ══ Features Bento ══════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '100px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2
              style={{
                fontSize: 'clamp(30px, 4vw, 48px)',
                fontWeight: 800,
                color: '#111',
                lineHeight: 1.12,
                letterSpacing: '-1px',
                margin: '0 0 14px',
              }}
            >
              Everything you need
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#666',
                maxWidth: 420,
                margin: '0 auto',
                lineHeight: 1.65,
              }}
            >
              A complete personal finance toolkit built for how people actually
              manage money.
            </p>
          </div>

          {/* Grid */}
          <div
            className='bento-grid'
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 16,
            }}
          >
            {/* Budget */}
            <BentoCard colSpan={7} style={{ minHeight: 300 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  marginBottom: 6,
                }}
              >
                <span style={{ fontSize: 18 }}>📊</span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#9ca3af',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Budget Tracking
                </span>
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: '#111',
                  margin: '0 0 24px',
                  letterSpacing: '-0.5px',
                }}
              >
                Set budgets,
                <br />
                stay on track
              </h3>
              {[
                {
                  label: 'Food & Drink',
                  spent: 2000,
                  total: 2000,
                  color: '#F97316',
                  pct: 100,
                },
                {
                  label: 'Entertainment',
                  spent: 4000,
                  total: 5000,
                  color: '#EC4899',
                  pct: 80,
                },
                {
                  label: 'Transport',
                  spent: 400,
                  total: 2000,
                  color: '#3B82F6',
                  pct: 20,
                },
                {
                  label: 'Personal Care',
                  spent: 500,
                  total: 5000,
                  color: '#8B5CF6',
                  pct: 10,
                },
              ].map((b, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 5,
                    }}
                  >
                    <span
                      style={{ fontSize: 13, fontWeight: 600, color: '#111' }}
                    >
                      {b.label}
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: b.pct >= 100 ? '#ef4444' : '#111',
                      }}
                    >
                      ₹{b.spent.toLocaleString()}{' '}
                      <span style={{ color: '#9ca3af', fontWeight: 400 }}>
                        / ₹{b.total.toLocaleString()}
                      </span>
                    </span>
                  </div>
                  <div
                    style={{
                      height: 5,
                      background: '#f3f4f6',
                      borderRadius: 3,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        background: b.pct >= 100 ? '#ef4444' : b.color,
                        width: `${Math.min(b.pct, 100)}%`,
                        borderRadius: 3,
                      }}
                    />
                  </div>
                </div>
              ))}
            </BentoCard>

            {/* Goals */}
            <BentoCard colSpan={5} style={{ minHeight: 300 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  marginBottom: 6,
                }}
              >
                <span style={{ fontSize: 18 }}>🎯</span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#9ca3af',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Goals
                </span>
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: '#111',
                  margin: '0 0 20px',
                  letterSpacing: '-0.5px',
                }}
              >
                Save for what
                <br />
                matters most
              </h3>
              {[
                {
                  name: 'New Bike',
                  saved: 0,
                  target: 300000,
                  color: '#6366F1',
                },
                {
                  name: 'Vacation',
                  saved: 45000,
                  target: 150000,
                  color: '#22C55E',
                },
                {
                  name: 'Emergency Fund',
                  saved: 80000,
                  target: 200000,
                  color: '#F59E0B',
                },
              ].map((g, i) => (
                <div
                  key={i}
                  style={{
                    padding: '10px 12px',
                    background: '#f9fafb',
                    borderRadius: 12,
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{ fontSize: 13, fontWeight: 600, color: '#111' }}
                    >
                      {g.name}
                    </span>
                    <span
                      style={{ fontSize: 12, color: g.color, fontWeight: 700 }}
                    >
                      {Math.round((g.saved / g.target) * 100)}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: 4,
                      background: '#e5e7eb',
                      borderRadius: 2,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        background: g.color,
                        borderRadius: 2,
                        width: `${Math.round((g.saved / g.target) * 100)}%`,
                      }}
                    />
                  </div>
                  <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 4 }}>
                    ₹{g.saved.toLocaleString()} of ₹
                    {(g.target / 1000).toFixed(0)}k
                  </div>
                </div>
              ))}
            </BentoCard>

            {/* Smart Rules */}
            <BentoCard colSpan={4}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  marginBottom: 6,
                }}
              >
                <span style={{ fontSize: 18 }}>⚡</span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#9ca3af',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Smart Rules
                </span>
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: '#111',
                  margin: '0 0 12px',
                  letterSpacing: '-0.5px',
                }}
              >
                Keyword → Category
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: '#6b7280',
                  lineHeight: 1.6,
                  margin: '0 0 16px',
                }}
              >
                Create rules once. Every matching transaction auto-categorizes —
                no AI needed.
              </p>
              {[
                {
                  keyword: '"healthy food"',
                  cat: 'Gym & Fitness',
                  color: '#22C55E',
                  bg: '#F0FDF4',
                },
                {
                  keyword: '"outside food"',
                  cat: 'Restaurants',
                  color: '#F97316',
                  bg: '#FFF7ED',
                },
                {
                  keyword: '"- diet"',
                  cat: 'Gym & Fitness',
                  color: '#22C55E',
                  bg: '#F0FDF4',
                },
              ].map((rule, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 8,
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: '#111',
                      background: '#f3f4f6',
                      padding: '3px 8px',
                      borderRadius: 6,
                    }}
                  >
                    {rule.keyword}
                  </span>
                  <span style={{ color: '#d1d5db', fontSize: 12 }}>→</span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: rule.color,
                      background: rule.bg,
                      padding: '3px 8px',
                      borderRadius: 20,
                    }}
                  >
                    {rule.cat}
                  </span>
                </div>
              ))}
            </BentoCard>

            {/* Subscriptions */}
            <BentoCard colSpan={4}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  marginBottom: 6,
                }}
              >
                <span style={{ fontSize: 18 }}>🔄</span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#9ca3af',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Subscriptions
                </span>
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: '#111',
                  margin: '0 0 4px',
                  letterSpacing: '-0.5px',
                }}
              >
                Track recurring
              </h3>
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 800,
                  color: '#111',
                  marginBottom: 16,
                  letterSpacing: '-1px',
                }}
              >
                ₹3,690
                <span
                  style={{ fontSize: 14, fontWeight: 500, color: '#9ca3af' }}
                >
                  /mo
                </span>
              </div>
              {[
                {
                  name: 'Netflix',
                  cat: 'Streaming Services',
                  catColor: '#EC4899',
                  amount: '₹680',
                  next: '15 Apr',
                },
                {
                  name: 'Gym',
                  cat: 'Gym & Fitness',
                  catColor: '#22C55E',
                  amount: '₹910',
                  next: '20 Apr',
                },
                {
                  name: 'Claude',
                  cat: 'Productivity Tools',
                  catColor: '#6366F1',
                  amount: '₹2,100',
                  next: '1 Apr',
                },
              ].map((sub, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 0',
                    borderBottom: i < 2 ? '1px solid #f3f4f6' : 'none',
                  }}
                >
                  <div>
                    <div
                      style={{ fontSize: 13, fontWeight: 600, color: '#111' }}
                    >
                      {sub.name}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: sub.catColor,
                        fontWeight: 500,
                        marginTop: 1,
                      }}
                    >
                      {sub.cat}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div
                      style={{ fontSize: 13, fontWeight: 700, color: '#111' }}
                    >
                      {sub.amount}
                    </div>
                    <div style={{ fontSize: 11, color: '#9ca3af' }}>
                      Next {sub.next}
                    </div>
                  </div>
                </div>
              ))}
            </BentoCard>

            {/* Offline */}
            <BentoCard
              colSpan={4}
              style={{ background: '#111', border: '1px solid #222' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  marginBottom: 6,
                }}
              >
                <span style={{ fontSize: 18 }}>📴</span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#444',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Offline First
                </span>
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: '#fff',
                  margin: '0 0 12px',
                  letterSpacing: '-0.5px',
                }}
              >
                Works without internet
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: '#777',
                  lineHeight: 1.65,
                  margin: '0 0 20px',
                }}
              >
                All your data lives on your device. Add transactions on a
                flight, in a basement, anywhere — sync happens automatically
                when you&apos;re back online.
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['No internet needed', 'Instant sync', 'Privacy-first'].map(
                  (tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: '#666',
                        background: '#1a1a1a',
                        padding: '4px 10px',
                        borderRadius: 20,
                        border: '1px solid #2a2a2a',
                      }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════════════════════════════════ */}
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
              fontSize: 'clamp(36px, 5vw, 60px)',
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

      {/* ══ Footer ══════════════════════════════════════════════════════════════ */}
      <footer
        style={{
          background: '#0a0a0a',
          borderTop: '1px solid #1a1a1a',
          padding: '44px 20px',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: '#fff',
                marginBottom: 4,
                letterSpacing: '-0.5px',
              }}
            >
              Pennify
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
            © 2026 Pennify. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
