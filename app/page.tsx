'use client';
import React from 'react';

const BADGE_HEIGHT = 52;

const hoverOn = (e: React.MouseEvent) => {
  (e.currentTarget as HTMLElement).style.opacity = '0.78';
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
        transition: 'opacity 0.18s ease, transform 0.18s ease',
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
        transition: 'opacity 0.18s ease, transform 0.18s ease',
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

export default function Home() {
  return (
    <>
      <style>{`
        * { font-family: var(--font-bricolage), system-ui, sans-serif !important; box-sizing: border-box; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes txSlide {
          0%,  8%  { opacity: 0; transform: translateY(10px); }
          18%, 75% { opacity: 1; transform: translateY(0); }
          85%, 100%{ opacity: 0; transform: translateY(-10px); }
        }
        @keyframes progressFill { 0%{width:0} 100%{width:73%} }
        @keyframes budgetFill1  { 0%{width:0} 100%{width:82%} }
        @keyframes budgetFill2  { 0%{width:0} 100%{width:45%} }
        @keyframes budgetFill3  { 0%{width:0} 100%{width:31%} }
        @keyframes goalFill     { 0%{width:0} 100%{width:58%} }

        .a-up   { animation: fadeUp 0.65s ease both; }
        .a-up-1 { animation: fadeUp 0.65s 0.12s ease both; }
        .a-up-2 { animation: fadeUp 0.65s 0.22s ease both; }
        .a-up-3 { animation: fadeUp 0.65s 0.34s ease both; }
        .a-in   { animation: fadeIn 0.9s 0.15s ease both; }
        .phone-float { animation: float 5s ease-in-out infinite; }

        .tx-1 { animation: txSlide 7s 0s   ease-in-out infinite; }
        .tx-2 { animation: txSlide 7s 2.3s ease-in-out infinite; }
        .tx-3 { animation: txSlide 7s 4.6s ease-in-out infinite; }

        .progress-bar { animation: progressFill 2.2s 1s   ease both; }
        .b-bar-1      { animation: budgetFill1  1.8s 0.8s ease both; }
        .b-bar-2      { animation: budgetFill2  1.8s 1.0s ease both; }
        .b-bar-3      { animation: budgetFill3  1.8s 1.2s ease both; }
        .goal-bar     { animation: goalFill     1.8s 1.2s ease both; }

        /* card hover */
        .card-hover { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        .card-hover:hover { transform: translateY(-3px); box-shadow: 0 20px 48px rgba(0,0,0,0.09) !important; }

        .card-dark-hover { transition: transform 0.22s ease, border-color 0.22s ease; }
        .card-dark-hover:hover { transform: translateY(-3px); border-color: #444 !important; }

        /* nav links */
        .nav-lnk { transition: color 0.15s; }
        .nav-lnk:hover { color: #000 !important; }
        .foot-lnk { transition: color 0.15s; }
        .foot-lnk:hover { color: rgba(255,255,255,0.85) !important; }

        ::selection { background: #000; color: #fff; }
      `}</style>

      <div
        style={{ backgroundColor: '#fff', color: '#000', overflowX: 'hidden' }}
      >
        {/* ═══════════════════ FLOATING NAVBAR ═══════════════════ */}
        <div
          style={{
            position: 'sticky',
            top: 14,
            zIndex: 100,
            padding: '0 20px',
          }}
        >
          <nav
            style={{
              maxWidth: 1100,
              margin: '0 auto',
              backgroundColor: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(20px) saturate(160%)',
              borderRadius: 18,
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow:
                '0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 32px rgba(0,0,0,0.06)',
              padding: '0 24px',
              height: 58,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#000',
                  borderRadius: 9,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width='15' height='15' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
                    stroke='#fff'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#000',
                  letterSpacing: '-0.04em',
                }}
              >
                Pennify
              </span>
            </div>

            {/* Center links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
              <a
                href='#features'
                className='nav-lnk'
                style={{
                  fontSize: 14,
                  color: '#777',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Features
              </a>
              <a
                href='#reports'
                className='nav-lnk'
                style={{
                  fontSize: 14,
                  color: '#777',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Reports
              </a>
              <a
                href='#download'
                className='nav-lnk'
                style={{
                  fontSize: 14,
                  color: '#777',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Download
              </a>
            </div>

            {/* CTA */}
            <a
              href='#download'
              style={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '9px 20px',
                borderRadius: 99,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '1';
              }}
            >
              Get the App
              <svg
                width='11'
                height='11'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#fff'
                strokeWidth='2.5'
              >
                <path d='M7 17L17 7M7 7h10v10' />
              </svg>
            </a>
          </nav>
        </div>

        {/* ═══════════════════ HERO ═══════════════════ */}
        <section
          style={{
            backgroundColor: '#fff',
            padding: '72px 32px 0',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '88vh',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Dot grid background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              backgroundImage:
                'radial-gradient(circle, #d4d4d4 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              maskImage:
                'radial-gradient(ellipse 75% 80% at 60% 50%, black 20%, transparent 80%)',
            }}
          />

          {/* Soft color blobs */}
          <div
            style={{
              position: 'absolute',
              top: '5%',
              right: '12%',
              width: 480,
              height: 480,
              borderRadius: '50%',
              background:
                'radial-gradient(ellipse, rgba(0,0,0,0.03) 0%, transparent 70%)',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '5%',
              width: 360,
              height: 360,
              borderRadius: '50%',
              background:
                'radial-gradient(ellipse, rgba(0,0,0,0.02) 0%, transparent 70%)',
              zIndex: 0,
            }}
          />

          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 64,
              position: 'relative',
              zIndex: 1,
              flexWrap: 'wrap',
              paddingBottom: 80,
            }}
          >
            {/* ── Copy ── */}
            <div style={{ flex: '1 1 480px' }}>
              {/* Badge */}
              <div
                className='a-up'
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  background: '#f3f3f3',
                  border: '1px solid #e8e8e8',
                  borderRadius: 99,
                  padding: '6px 14px 6px 8px',
                  marginBottom: 32,
                }}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 99,
                    background: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width='9'
                    height='9'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#fff'
                    strokeWidth='3'
                  >
                    <polyline points='20 6 9 17 4 12' />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    color: '#555',
                    fontWeight: 600,
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                  }}
                >
                  Personal Finance App
                </span>
              </div>

              {/* Headline */}
              <h1
                className='a-up-1'
                style={{
                  fontSize: 'clamp(52px, 7vw, 88px)',
                  fontWeight: 800,
                  color: '#000',
                  lineHeight: 1.0,
                  letterSpacing: '-0.055em',
                  margin: '0 0 24px',
                }}
              >
                Finance,
                <br />
                <span style={{ color: '#ccc' }}>finally</span>
                <br />
                clear.
              </h1>

              {/* Subtext */}
              <p
                className='a-up-2'
                style={{
                  fontSize: 18,
                  color: '#777',
                  lineHeight: 1.72,
                  maxWidth: 440,
                  margin: '0 0 40px',
                  fontWeight: 400,
                }}
              >
                Track every rupee, set smart budgets, and understand your
                spending — even at 30,000 feet with no internet.
              </p>

              {/* Store badges */}
              <div
                className='a-up-3'
                style={{
                  display: 'flex',
                  gap: 12,
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  marginBottom: 44,
                }}
              >
                <AppStoreBadge />
                <GooglePlayBadge />
              </div>

              {/* Social proof */}
              <div
                className='a-up-3'
                style={{ display: 'flex', alignItems: 'center', gap: 14 }}
              >
                <div style={{ display: 'flex' }}>
                  {['H', 'S', 'R', 'A', 'M'].map((l, i) => (
                    <div
                      key={i}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: '50%',
                        background: '#000',
                        border: '2.5px solid #fff',
                        marginLeft: i === 0 ? 0 : -9,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 10,
                        color: 'rgba(255,255,255,0.7)',
                        fontWeight: 700,
                        boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
                      }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <div style={{ width: 1, height: 28, background: '#e8e8e8' }} />
                <div>
                  <div style={{ display: 'flex', gap: 1, marginBottom: 2 }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} style={{ fontSize: 13, color: '#000' }}>
                        ★
                      </span>
                    ))}
                  </div>
                  <div style={{ fontSize: 12, color: '#aaa', fontWeight: 500 }}>
                    Loved by 10,000+ users
                  </div>
                </div>
              </div>
            </div>

            {/* ── Phone mockup + floating cards ── */}
            <div
              className='a-in'
              style={{
                flex: '0 0 auto',
                display: 'flex',
                alignItems: 'flex-end',
                position: 'relative',
              }}
            >
              {/* Soft card behind phone */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-28px -28px -0px -28px',
                  background:
                    'linear-gradient(145deg, #f5f5f5 0%, #ebebeb 100%)',
                  borderRadius: 52,
                  zIndex: 0,
                  boxShadow: '0 4px 0 #e0e0e0, 0 32px 80px rgba(0,0,0,0.08)',
                }}
              />

              {/* Floating stat card — top right */}
              <div
                style={{
                  position: 'absolute',
                  top: -20,
                  right: -68,
                  zIndex: 10,
                  background: '#fff',
                  border: '1px solid #ebebeb',
                  borderRadius: 18,
                  padding: '14px 18px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  minWidth: 150,
                  animation: 'float 5s ease-in-out infinite',
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: '#aaa',
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  MONTHLY SAVED
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: '#000',
                    letterSpacing: '-0.04em',
                  }}
                >
                  ₹24,850
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    marginTop: 6,
                  }}
                >
                  <div
                    style={{
                      background: '#000',
                      borderRadius: 99,
                      padding: '2px 8px',
                      fontSize: 10,
                      color: '#fff',
                      fontWeight: 700,
                    }}
                  >
                    ↑ 12%
                  </div>
                  <span style={{ fontSize: 10, color: '#aaa' }}>
                    vs last month
                  </span>
                </div>
              </div>

              {/* Floating AI card — bottom left */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 60,
                  left: -72,
                  zIndex: 10,
                  background: '#000',
                  borderRadius: 16,
                  padding: '12px 16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  minWidth: 176,
                  animation: 'float 5s 1.5s ease-in-out infinite',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 9,
                      background: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 14,
                    }}
                  >
                    ☕
                  </div>
                  <div>
                    <div
                      style={{ fontSize: 11, fontWeight: 700, color: '#fff' }}
                    >
                      Starbucks
                    </div>
                    <div
                      style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}
                    >
                      ₹380
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span
                    style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}
                  >
                    Auto-tagged as
                  </span>
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.12)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: 99,
                      padding: '2px 8px',
                      fontSize: 10,
                      color: '#fff',
                      fontWeight: 600,
                    }}
                  >
                    ⚡ Food
                  </div>
                </div>
              </div>

              {/* Phone shell */}
              <div
                className='phone-float'
                style={{
                  width: 262,
                  position: 'relative',
                  zIndex: 1,
                  background: '#080808',
                  borderRadius: 46,
                  border: '1px solid #1e1e1e',
                  boxShadow:
                    '0 0 0 7px #0f0f0f, 0 0 0 8px #1a1a1a, 0 40px 80px rgba(0,0,0,0.35)',
                  overflow: 'hidden',
                }}
              >
                {/* Dynamic island */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '15px 0 5px',
                    background: '#080808',
                  }}
                >
                  <div
                    style={{
                      width: 104,
                      height: 26,
                      backgroundColor: '#000',
                      borderRadius: 22,
                      border: '1px solid #1a1a1a',
                    }}
                  />
                </div>
                {/* Screen */}
                <div
                  style={{ padding: '10px 17px 26px', background: '#0a0a0a' }}
                >
                  {/* Header */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                    >
                      <div
                        style={{
                          width: 29,
                          height: 29,
                          borderRadius: 10,
                          background: '#1a1a1a',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg
                          width='13'
                          height='13'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='rgba(255,255,255,0.6)'
                          strokeWidth='2'
                        >
                          <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' />
                          <circle cx='12' cy='7' r='4' />
                        </svg>
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: 8,
                            color: 'rgba(255,255,255,0.3)',
                          }}
                        >
                          Good morning
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: '#fff',
                            fontWeight: 700,
                          }}
                        >
                          Harsh
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: 29,
                        height: 29,
                        borderRadius: 10,
                        background: '#1a1a1a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg
                        width='12'
                        height='12'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='rgba(255,255,255,0.6)'
                        strokeWidth='2'
                      >
                        <path d='M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9' />
                        <path d='M13.73 21a2 2 0 01-3.46 0' />
                      </svg>
                    </div>
                  </div>

                  {/* Balance card */}
                  <div
                    style={{
                      background: '#fff',
                      borderRadius: 20,
                      padding: '16px 16px 13px',
                      marginBottom: 9,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: -20,
                        right: -20,
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        background: 'rgba(0,0,0,0.03)',
                      }}
                    />
                    <div
                      style={{
                        fontSize: 7.5,
                        color: '#999',
                        fontWeight: 600,
                        letterSpacing: '0.07em',
                        textTransform: 'uppercase',
                        marginBottom: 3,
                      }}
                    >
                      Total Balance
                    </div>
                    <div
                      style={{
                        fontSize: 31,
                        fontWeight: 800,
                        color: '#000',
                        letterSpacing: '-0.05em',
                        lineHeight: 1,
                        marginBottom: 12,
                      }}
                    >
                      ₹24,850
                    </div>
                    <div style={{ display: 'flex', gap: 7 }}>
                      {[
                        { label: 'Income', val: '₹48,000', up: true },
                        { label: 'Spent', val: '₹23,150', up: false },
                      ].map((c) => (
                        <div
                          key={c.label}
                          style={{
                            flex: 1,
                            background: '#f5f5f5',
                            borderRadius: 10,
                            padding: '7px 9px',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 3,
                              marginBottom: 2,
                            }}
                          >
                            <div
                              style={{
                                width: 12,
                                height: 12,
                                borderRadius: 4,
                                background: c.up ? '#000' : '#e0e0e0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <svg
                                width='6'
                                height='6'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke={c.up ? '#fff' : '#888'}
                                strokeWidth='3'
                              >
                                <path
                                  d={
                                    c.up
                                      ? 'M7 17L17 7M7 7h10v10'
                                      : 'M17 7L7 17M17 17H7V7'
                                  }
                                />
                              </svg>
                            </div>
                            <span
                              style={{
                                fontSize: 6.5,
                                color: '#888',
                                fontWeight: 600,
                              }}
                            >
                              {c.label}
                            </span>
                          </div>
                          <div
                            style={{
                              fontSize: 11,
                              fontWeight: 800,
                              color: '#000',
                              letterSpacing: '-0.03em',
                            }}
                          >
                            {c.val}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transactions */}
                  <div style={{ marginBottom: 9 }}>
                    <div
                      style={{
                        fontSize: 7.5,
                        color: 'rgba(255,255,255,0.3)',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: 6,
                      }}
                    >
                      Today
                    </div>
                    {[
                      {
                        icon: '☕',
                        name: 'Starbucks',
                        cat: 'Food & Dining',
                        amt: '−₹380',
                      },
                      {
                        icon: '🚗',
                        name: 'Uber Ride',
                        cat: 'Transport',
                        amt: '−₹220',
                      },
                      {
                        icon: '💊',
                        name: 'Pharmacy',
                        cat: 'Health',
                        amt: '−₹650',
                      },
                    ].map((tx, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          padding: '7px 9px',
                          background: '#141414',
                          borderRadius: 11,
                          marginBottom: 4,
                        }}
                      >
                        <div
                          style={{
                            width: 26,
                            height: 26,
                            borderRadius: 8,
                            background: '#1e1e1e',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 13,
                            flexShrink: 0,
                          }}
                        >
                          {tx.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontSize: 9.5,
                              fontWeight: 700,
                              color: '#fff',
                            }}
                          >
                            {tx.name}
                          </div>
                          <div
                            style={{
                              fontSize: 7,
                              color: 'rgba(255,255,255,0.28)',
                            }}
                          >
                            {tx.cat}
                          </div>
                        </div>
                        <div
                          style={{
                            fontSize: 9.5,
                            fontWeight: 700,
                            color: '#fff',
                          }}
                        >
                          {tx.amt}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Budget bar */}
                  <div
                    style={{
                      background: '#141414',
                      borderRadius: 13,
                      padding: '11px 13px',
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
                        style={{
                          fontSize: 8.5,
                          color: 'rgba(255,255,255,0.4)',
                          fontWeight: 600,
                        }}
                      >
                        Monthly Budget
                      </span>
                      <span
                        style={{
                          fontSize: 8.5,
                          color: 'rgba(255,255,255,0.4)',
                          fontWeight: 600,
                        }}
                      >
                        73%
                      </span>
                    </div>
                    <div
                      style={{
                        height: 4,
                        background: '#2a2a2a',
                        borderRadius: 99,
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        className='progress-bar'
                        style={{
                          height: '100%',
                          background: '#fff',
                          borderRadius: 99,
                          width: 0,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ STATS BAR ═══════════════════ */}
        <section
          style={{ backgroundColor: '#fff', borderBottom: '1px solid #ebebeb' }}
        >
          <div
            style={{ maxWidth: 1200, margin: '0 auto', padding: '44px 32px' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              {[
                { val: '10K+', label: 'Downloads worldwide' },
                { val: '4.8★', label: 'Average App Store rating' },
                { val: '100%', label: 'Offline-first architecture' },
                { val: 'Free', label: 'to download, always' },
              ].map((s, i, arr) => (
                <div
                  key={s.val}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <div
                    style={{
                      padding: '0 clamp(20px, 4vw, 72px)',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 'clamp(26px, 3.5vw, 40px)',
                        fontWeight: 800,
                        letterSpacing: '-0.055em',
                        color: '#000',
                        lineHeight: 1,
                      }}
                    >
                      {s.val}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: '#999',
                        fontWeight: 500,
                        marginTop: 5,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div
                      style={{
                        width: 1,
                        height: 44,
                        background: '#ebebeb',
                        flexShrink: 0,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ FEATURES BENTO ═══════════════════ */}
        <section
          id='features'
          style={{ backgroundColor: '#f6f6f6', padding: '120px 32px' }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            {/* Header */}
            <div style={{ marginBottom: 60 }}>
              <div
                style={{
                  fontSize: 11,
                  color: '#aaa',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: 18,
                }}
              >
                Features
              </div>
              <h2
                style={{
                  fontSize: 'clamp(36px, 5vw, 62px)',
                  fontWeight: 800,
                  color: '#000',
                  letterSpacing: '-0.05em',
                  margin: 0,
                  lineHeight: 1.0,
                }}
              >
                Everything you need
                <br />
                <span style={{ color: '#bbb' }}>to own your finances.</span>
              </h2>
            </div>

            {/* Bento grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: 14,
              }}
            >
              {/* ── AI Categorization — accent dark (8 cols) ── */}
              <div
                className='card-dark-hover'
                style={{
                  gridColumn: '1 / 9',
                  background: '#111',
                  border: '1px solid #1e1e1e',
                  borderRadius: 28,
                  padding: '38px 38px 32px',
                  overflow: 'hidden',
                  position: 'relative',
                  minHeight: 300,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: -50,
                    right: -50,
                    width: 280,
                    height: 280,
                    borderRadius: '50%',
                    background:
                      'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 65%)',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 22,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 13,
                      background: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#000'
                      strokeWidth='2'
                    >
                      <circle cx='12' cy='12' r='3' />
                      <path d='M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83' />
                    </svg>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        color: '#fff',
                        letterSpacing: '-0.025em',
                      }}
                    >
                      AI Categorization
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.35)',
                        marginTop: 2,
                      }}
                    >
                      Zero manual tagging
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: 15,
                    color: 'rgba(255,255,255,0.45)',
                    lineHeight: 1.72,
                    maxWidth: 400,
                    margin: '0 0 32px',
                  }}
                >
                  Type what you spent. Our AI identifies the merchant, assigns
                  the category, and learns your habits over time.
                </p>
                {/* Animated transaction cards */}
                <div style={{ position: 'relative', height: 60 }}>
                  {[
                    {
                      name: 'Starbucks Coffee',
                      cat: 'Food & Dining',
                      emoji: '☕',
                    },
                    { name: 'Uber Ride', cat: 'Transport', emoji: '🚗' },
                    { name: 'Netflix', cat: 'Entertainment', emoji: '🎬' },
                  ].map((item, i) => (
                    <div
                      key={item.name}
                      className={`tx-${i + 1}`}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: '#1a1a1a',
                        border: '1px solid #2a2a2a',
                        borderRadius: 14,
                        padding: '12px 16px',
                        width: 'min(420px, 100%)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                        }}
                      >
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: '#222',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 16,
                          }}
                        >
                          {item.emoji}
                        </div>
                        <span
                          style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: '#fff',
                          }}
                        >
                          {item.name}
                        </span>
                      </div>
                      <div
                        style={{
                          background: '#fff',
                          color: '#000',
                          padding: '5px 12px',
                          borderRadius: 99,
                          fontSize: 11,
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 5,
                        }}
                      >
                        <span style={{ fontSize: 10 }}>⚡</span>
                        {item.cat}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Multiple Accounts — tall (4 cols, 2 rows) — white ── */}
              <div
                className='card-hover'
                style={{
                  gridColumn: '9 / 13',
                  gridRow: '1 / 3',
                  background: '#fff',
                  border: '1px solid #e8e8e8',
                  borderRadius: 28,
                  padding: 32,
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 13,
                    background: '#f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 18,
                  }}
                >
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#000'
                    strokeWidth='2'
                  >
                    <rect x='1' y='4' width='22' height='16' rx='2' />
                    <path d='M1 10h22' />
                  </svg>
                </div>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: '#000',
                    marginBottom: 8,
                    letterSpacing: '-0.025em',
                  }}
                >
                  Multiple Accounts
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: '#888',
                    lineHeight: 1.7,
                    margin: '0 0 24px',
                  }}
                >
                  Bank, cash, UPI, credit cards — unified in one view.
                </p>
                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: 9 }}
                >
                  {[
                    {
                      name: 'HDFC Savings',
                      type: 'Bank Account',
                      bal: '₹18,500',
                      icon: '🏦',
                    },
                    {
                      name: 'Cash Wallet',
                      type: 'Cash',
                      bal: '₹2,350',
                      icon: '💵',
                    },
                    {
                      name: 'Google Pay',
                      type: 'UPI',
                      bal: '₹4,000',
                      icon: '📱',
                    },
                    {
                      name: 'HDFC Credit',
                      type: 'Credit Card',
                      bal: '−₹8,200',
                      icon: '💳',
                    },
                  ].map((acc) => (
                    <div
                      key={acc.name}
                      style={{
                        background: '#f9f9f9',
                        borderRadius: 14,
                        padding: '11px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '1px solid #f0f0f0',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                        }}
                      >
                        <span style={{ fontSize: 18 }}>{acc.icon}</span>
                        <div>
                          <div
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              color: '#000',
                            }}
                          >
                            {acc.name}
                          </div>
                          <div
                            style={{
                              fontSize: 9,
                              color: '#aaa',
                              fontWeight: 500,
                              marginTop: 1,
                            }}
                          >
                            {acc.type}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: acc.bal.startsWith('−') ? '#aaa' : '#000',
                        }}
                      >
                        {acc.bal}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Budget Tracking (4 cols) — white ── */}
              <div
                className='card-hover'
                style={{
                  gridColumn: '1 / 5',
                  background: '#fff',
                  border: '1px solid #e8e8e8',
                  borderRadius: 28,
                  padding: 32,
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 13,
                    background: '#f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 18,
                  }}
                >
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#000'
                    strokeWidth='2'
                  >
                    <rect x='2' y='3' width='20' height='14' rx='2' />
                    <path d='M8 21h8M12 17v4' />
                  </svg>
                </div>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: '#000',
                    marginBottom: 8,
                    letterSpacing: '-0.025em',
                  }}
                >
                  Budget Tracking
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: '#888',
                    lineHeight: 1.7,
                    margin: '0 0 22px',
                  }}
                >
                  Monthly limits per category. Alerts before you overspend.
                </p>
                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
                >
                  {[
                    { cat: 'Food & Dining', used: 82, cls: 'b-bar-1' },
                    { cat: 'Transport', used: 45, cls: 'b-bar-2' },
                    { cat: 'Shopping', used: 31, cls: 'b-bar-3' },
                  ].map((b) => (
                    <div key={b.cat}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginBottom: 6,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#000',
                          }}
                        >
                          {b.cat}
                        </span>
                        <span style={{ fontSize: 12, color: '#aaa' }}>
                          {b.used}%
                        </span>
                      </div>
                      <div
                        style={{
                          height: 5,
                          background: '#f0f0f0',
                          borderRadius: 99,
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          className={b.cls}
                          style={{
                            height: '100%',
                            background: b.used > 78 ? '#000' : '#555',
                            borderRadius: 99,
                            width: 0,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Smart Goals (4 cols) — white ── */}
              <div
                className='card-hover'
                style={{
                  gridColumn: '5 / 9',
                  background: '#fff',
                  border: '1px solid #e8e8e8',
                  borderRadius: 28,
                  padding: 32,
                  boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 13,
                    background: '#f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 18,
                  }}
                >
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#000'
                    strokeWidth='2'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                  </svg>
                </div>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: '#000',
                    marginBottom: 8,
                    letterSpacing: '-0.025em',
                  }}
                >
                  Smart Goals
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: '#888',
                    lineHeight: 1.7,
                    margin: '0 0 22px',
                  }}
                >
                  Save towards a dream trip, gadget, or emergency fund.
                </p>
                <div
                  style={{
                    background: '#f9f9f9',
                    borderRadius: 18,
                    padding: 18,
                    border: '1px solid #f0f0f0',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 14,
                    }}
                  >
                    <div>
                      <div
                        style={{ fontSize: 13, fontWeight: 700, color: '#000' }}
                      >
                        🏖️ Goa Trip
                      </div>
                      <div
                        style={{ fontSize: 10, color: '#bbb', marginTop: 3 }}
                      >
                        Target: ₹50,000
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                        color: '#000',
                        letterSpacing: '-0.05em',
                      }}
                    >
                      58%
                    </div>
                  </div>
                  <div
                    style={{
                      height: 6,
                      background: '#ebebeb',
                      borderRadius: 99,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      className='goal-bar'
                      style={{
                        height: '100%',
                        background: '#000',
                        borderRadius: 99,
                        width: 0,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: 8,
                    }}
                  >
                    <span style={{ fontSize: 10, color: '#bbb' }}>
                      ₹29,000 saved
                    </span>
                    <span style={{ fontSize: 10, color: '#bbb' }}>
                      ₹21,000 to go
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ REPORTS ═══════════════════ */}
        <section
          id='reports'
          style={{ backgroundColor: '#fff', padding: '120px 32px' }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              gap: 80,
              flexWrap: 'wrap',
            }}
          >
            {/* Chart mockup */}
            <div style={{ flex: '1 1 380px' }}>
              <div
                className='card-hover'
                style={{
                  background: '#fff',
                  border: '1px solid #e8e8e8',
                  borderRadius: 28,
                  padding: 30,
                  boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 28,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: '#000',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      Spending Overview
                    </div>
                    <div style={{ fontSize: 11, color: '#bbb', marginTop: 2 }}>
                      March 2026
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: 3,
                      background: '#f5f5f5',
                      borderRadius: 10,
                      padding: 3,
                    }}
                  >
                    {['W', 'M', 'Y'].map((p, i) => (
                      <div
                        key={p}
                        style={{
                          padding: '5px 12px',
                          borderRadius: 7,
                          fontSize: 11,
                          fontWeight: 700,
                          cursor: 'pointer',
                          background: i === 1 ? '#000' : 'transparent',
                          color: i === 1 ? '#fff' : '#888',
                        }}
                      >
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: 7,
                    marginBottom: 8,
                    height: 90,
                  }}
                >
                  {[38, 62, 31, 78, 52, 88, 43, 68, 27, 82, 57, 73].map(
                    (h, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: `${h}%`,
                          background: i === 10 ? '#000' : '#e8e8e8',
                          borderRadius: '4px 4px 0 0',
                        }}
                      />
                    )
                  )}
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: 7,
                    justifyContent: 'space-between',
                    marginBottom: 24,
                  }}
                >
                  {[
                    'J',
                    'F',
                    'M',
                    'A',
                    'M',
                    'J',
                    'J',
                    'A',
                    'S',
                    'O',
                    'N',
                    'D',
                  ].map((m) => (
                    <div
                      key={m}
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        fontSize: 8,
                        color: '#ccc',
                        fontWeight: 600,
                      }}
                    >
                      {m}
                    </div>
                  ))}
                </div>
                <div
                  style={{ height: 1, background: '#f0f0f0', marginBottom: 20 }}
                />
                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
                >
                  {[
                    { cat: 'Food & Dining', pct: 34, amt: '₹7,820' },
                    { cat: 'Transport', pct: 22, amt: '₹5,060' },
                    { cat: 'Shopping', pct: 18, amt: '₹4,140' },
                    { cat: 'Health', pct: 15, amt: '₹3,450' },
                  ].map((item) => (
                    <div
                      key={item.cat}
                      style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                    >
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 2,
                          background: '#000',
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
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 600,
                              color: '#000',
                            }}
                          >
                            {item.cat}
                          </span>
                          <span style={{ fontSize: 12, color: '#aaa' }}>
                            {item.amt}
                          </span>
                        </div>
                        <div
                          style={{
                            height: 3,
                            background: '#f0f0f0',
                            borderRadius: 99,
                          }}
                        >
                          <div
                            style={{
                              width: `${item.pct * 2.8}%`,
                              height: '100%',
                              background: '#000',
                              borderRadius: 99,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Copy */}
            <div style={{ flex: '1 1 380px' }}>
              <div
                style={{
                  fontSize: 11,
                  color: '#bbb',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 18,
                }}
              >
                Detailed Reports
              </div>
              <h2
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 54px)',
                  fontWeight: 800,
                  letterSpacing: '-0.05em',
                  color: '#000',
                  margin: '0 0 20px',
                  lineHeight: 1.05,
                }}
              >
                See exactly where
                <br />
                your money goes.
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: '#888',
                  lineHeight: 1.75,
                  margin: '0 0 36px',
                  maxWidth: 420,
                }}
              >
                Weekly, monthly, and yearly breakdowns. Drill into every
                category. Understand your patterns before they understand you.
              </p>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
              >
                {[
                  'Week, month, and year views',
                  'Category-level drill-down',
                  'Income vs expense tracking',
                  'Historical trend analysis',
                  'Shareable reports',
                ].map((item) => (
                  <div
                    key={item}
                    style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 7,
                        background: '#000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width='11'
                        height='11'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='#fff'
                        strokeWidth='3'
                      >
                        <polyline points='20 6 9 17 4 12' />
                      </svg>
                    </div>
                    <span
                      style={{ fontSize: 15, color: '#333', fontWeight: 500 }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ OFFLINE ═══════════════════ */}
        <section style={{ backgroundColor: '#f6f6f6', padding: '120px 32px' }}>
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              gap: 80,
              flexWrap: 'wrap',
            }}
          >
            {/* Copy */}
            <div style={{ flex: '1 1 420px' }}>
              <div
                style={{
                  fontSize: 11,
                  color: '#bbb',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 18,
                }}
              >
                Offline-First
              </div>
              <h2
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 54px)',
                  fontWeight: 800,
                  color: '#000',
                  letterSpacing: '-0.05em',
                  margin: '0 0 20px',
                  lineHeight: 1.05,
                }}
              >
                Works at 30,000 feet.
                <br />
                <span style={{ color: '#ccc' }}>No internet needed.</span>
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: '#888',
                  lineHeight: 1.75,
                  margin: '0 0 44px',
                  maxWidth: 420,
                }}
              >
                Add transactions on the subway, in a mountain cabin, or
                mid-flight. Pennify queues everything locally and syncs silently
                when you reconnect.
              </p>
              <div style={{ display: 'flex', gap: 52 }}>
                <div>
                  <div
                    style={{
                      fontSize: 40,
                      fontWeight: 800,
                      color: '#000',
                      letterSpacing: '-0.06em',
                      lineHeight: 1,
                    }}
                  >
                    0ms
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: '#bbb',
                      fontWeight: 500,
                      marginTop: 6,
                    }}
                  >
                    Offline response time
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 40,
                      fontWeight: 800,
                      color: '#000',
                      letterSpacing: '-0.06em',
                      lineHeight: 1,
                    }}
                  >
                    100%
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: '#bbb',
                      fontWeight: 500,
                      marginTop: 6,
                    }}
                  >
                    Data always preserved
                  </div>
                </div>
              </div>
            </div>

            {/* Step flow */}
            <div style={{ flex: '1 1 360px' }}>
              <div style={{ maxWidth: 380 }}>
                {[
                  {
                    emoji: '📱',
                    title: 'You add a transaction',
                    sub: 'Instant, no wait time',
                  },
                  {
                    emoji: '🗄️',
                    title: 'Stored locally',
                    sub: 'Encrypted on your device',
                  },
                  {
                    emoji: '🔄',
                    title: 'Auto-syncs on reconnect',
                    sub: 'Seamless background sync',
                  },
                  {
                    emoji: '✅',
                    title: "Everything's up to date",
                    sub: 'Across all your devices',
                  },
                ].map((item, i, arr) => (
                  <div key={i}>
                    <div
                      style={{
                        display: 'flex',
                        gap: 20,
                        alignItems: 'flex-start',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                      >
                        <div
                          style={{
                            width: 52,
                            height: 52,
                            borderRadius: 18,
                            background: '#fff',
                            border: '1px solid #e8e8e8',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 22,
                            flexShrink: 0,
                          }}
                        >
                          {item.emoji}
                        </div>
                        {i < arr.length - 1 && (
                          <div
                            style={{
                              width: 1,
                              height: 32,
                              background: '#e0e0e0',
                              margin: '4px 0',
                            }}
                          />
                        )}
                      </div>
                      <div style={{ paddingTop: 12 }}>
                        <div
                          style={{
                            fontSize: 15,
                            fontWeight: 700,
                            color: '#000',
                            letterSpacing: '-0.02em',
                            marginBottom: 4,
                          }}
                        >
                          {item.title}
                        </div>
                        <div
                          style={{
                            fontSize: 13,
                            color: '#aaa',
                            fontWeight: 500,
                          }}
                        >
                          {item.sub}
                        </div>
                      </div>
                      <div style={{ marginLeft: 'auto', paddingTop: 14 }}>
                        <span
                          style={{
                            fontSize: 11,
                            color: '#ddd',
                            fontWeight: 700,
                            letterSpacing: '0.06em',
                          }}
                        >
                          0{i + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ RECEIPT SCANNER ═══════════════════ */}
        <section style={{ backgroundColor: '#fff', padding: '120px 32px' }}>
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              gap: 80,
              flexWrap: 'wrap',
            }}
          >
            {/* Copy */}
            <div style={{ flex: '1 1 420px' }}>
              <div
                style={{
                  fontSize: 11,
                  color: '#bbb',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 18,
                }}
              >
                Receipt Scanner
              </div>
              <h2
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 54px)',
                  fontWeight: 800,
                  letterSpacing: '-0.05em',
                  color: '#000',
                  margin: '0 0 20px',
                  lineHeight: 1.05,
                }}
              >
                Snap a receipt.
                <br />
                <span style={{ color: '#ccc' }}>Done in seconds.</span>
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: '#888',
                  lineHeight: 1.75,
                  margin: '0 0 44px',
                  maxWidth: 420,
                }}
              >
                Point your camera at any receipt and watch Pennify extract the
                merchant, amount, date, and category — powered by AI, instantly.
              </p>
              <div style={{ display: 'flex', gap: 52 }}>
                <div>
                  <div
                    style={{
                      fontSize: 40,
                      fontWeight: 800,
                      color: '#000',
                      letterSpacing: '-0.06em',
                      lineHeight: 1,
                    }}
                  >
                    &lt; 3s
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: '#bbb',
                      marginTop: 6,
                      fontWeight: 500,
                    }}
                  >
                    Average scan time
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 40,
                      fontWeight: 800,
                      color: '#000',
                      letterSpacing: '-0.06em',
                      lineHeight: 1,
                    }}
                  >
                    99%
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: '#bbb',
                      marginTop: 6,
                      fontWeight: 500,
                    }}
                  >
                    Accuracy rate
                  </div>
                </div>
              </div>
            </div>

            {/* Receipt card */}
            <div
              style={{
                flex: '1 1 300px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                className='card-hover'
                style={{
                  background: '#fff',
                  border: '1px solid #e8e8e8',
                  borderRadius: 28,
                  padding: 28,
                  width: '100%',
                  maxWidth: 340,
                  boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 22,
                    paddingBottom: 18,
                    borderBottom: '1px solid #f0f0f0',
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 15,
                      background: '#f5f5f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 22,
                    }}
                  >
                    🧾
                  </div>
                  <div>
                    <div
                      style={{ fontSize: 15, fontWeight: 700, color: '#000' }}
                    >
                      Receipt Scanned
                    </div>
                    <div style={{ fontSize: 12, color: '#aaa', marginTop: 2 }}>
                      Just now
                    </div>
                  </div>
                  <div
                    style={{
                      marginLeft: 'auto',
                      background: '#000',
                      color: '#fff',
                      padding: '5px 12px',
                      borderRadius: 99,
                      fontSize: 11,
                      fontWeight: 700,
                    }}
                  >
                    ✓ Done
                  </div>
                </div>
                {[
                  { label: 'Merchant', value: 'Zomato India' },
                  { label: 'Amount', value: '₹649' },
                  { label: 'Date', value: 'Mar 12, 2026' },
                  { label: 'Category', value: 'Food & Dining' },
                  { label: 'Payment', value: 'UPI' },
                ].map((row, i, arr) => (
                  <div
                    key={row.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingBottom: 12,
                      marginBottom: 12,
                      borderBottom:
                        i < arr.length - 1 ? '1px solid #f5f5f5' : 'none',
                    }}
                  >
                    <span
                      style={{ fontSize: 12, color: '#aaa', fontWeight: 500 }}
                    >
                      {row.label}
                    </span>
                    <span
                      style={{ fontSize: 12, color: '#000', fontWeight: 700 }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
                <div
                  style={{
                    background: '#f5f5f5',
                    borderRadius: 12,
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginTop: 4,
                  }}
                >
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#000'
                    strokeWidth='2.5'
                  >
                    <circle cx='12' cy='12' r='3' />
                    <path d='M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83' />
                  </svg>
                  <span
                    style={{ fontSize: 12, color: '#000', fontWeight: 600 }}
                  >
                    AI categorized automatically
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ SUBSCRIPTIONS ═══════════════════ */}
        <section style={{ backgroundColor: '#f6f6f6', padding: '120px 32px' }}>
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              display: 'flex',
              gap: 80,
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {/* Copy */}
            <div style={{ flex: '1 1 420px' }}>
              <div
                style={{
                  fontSize: 11,
                  color: '#bbb',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: 18,
                }}
              >
                Subscriptions
              </div>
              <h2
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 54px)',
                  fontWeight: 800,
                  color: '#000',
                  letterSpacing: '-0.05em',
                  margin: '0 0 20px',
                  lineHeight: 1.05,
                }}
              >
                Stop forgetting
                <br />
                <span style={{ color: '#ccc' }}>what you pay for.</span>
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: '#888',
                  lineHeight: 1.75,
                  margin: '0 0 36px',
                  maxWidth: 400,
                }}
              >
                Track Netflix, Spotify, gym memberships, and every recurring
                payment in one place. Get notified before each renewal.
              </p>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
              >
                {[
                  'Auto-detect recurring payments',
                  'Renewal reminders',
                  'Cancel tracking',
                  'Monthly cost summary',
                ].map((f) => (
                  <div
                    key={f}
                    style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 7,
                        background: '#000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width='11'
                        height='11'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='#fff'
                        strokeWidth='3'
                      >
                        <polyline points='20 6 9 17 4 12' />
                      </svg>
                    </div>
                    <span
                      style={{ fontSize: 15, color: '#333', fontWeight: 500 }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscription list */}
            <div style={{ flex: '1 1 360px' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 9,
                  maxWidth: 380,
                }}
              >
                {[
                  {
                    name: 'Netflix',
                    amt: '₹649/mo',
                    icon: '🎬',
                    due: 'Due in 3 days',
                    dim: false,
                  },
                  {
                    name: 'Spotify',
                    amt: '₹119/mo',
                    icon: '🎵',
                    due: 'Due in 9 days',
                    dim: false,
                  },
                  {
                    name: 'Gym Membership',
                    amt: '₹1,200/mo',
                    icon: '💪',
                    due: 'Due in 14 days',
                    dim: false,
                  },
                  {
                    name: 'iCloud Storage',
                    amt: '₹75/mo',
                    icon: '☁️',
                    due: 'Renewed today',
                    dim: true,
                  },
                  {
                    name: 'Amazon Prime',
                    amt: '₹299/mo',
                    icon: '📦',
                    due: 'Due in 21 days',
                    dim: false,
                  },
                ].map((sub) => (
                  <div
                    key={sub.name}
                    style={{
                      background: '#fff',
                      border: '1px solid #e8e8e8',
                      borderRadius: 16,
                      padding: '14px 18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      opacity: sub.dim ? 0.45 : 1,
                      boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div
                      style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 11,
                          background: '#f5f5f5',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 18,
                        }}
                      >
                        {sub.icon}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: '#000',
                          }}
                        >
                          {sub.name}
                        </div>
                        <div
                          style={{ fontSize: 10, color: '#bbb', marginTop: 2 }}
                        >
                          {sub.due}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ fontSize: 13, fontWeight: 700, color: '#000' }}
                    >
                      {sub.amt}
                    </div>
                  </div>
                ))}
                <div
                  style={{
                    background: '#fff',
                    border: '1.5px dashed #e0e0e0',
                    borderRadius: 16,
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{ fontSize: 13, color: '#bbb', fontWeight: 600 }}
                  >
                    Total: ₹2,342 / month
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ CTA (BLACK) ═══════════════════ */}
        <section
          id='download'
          style={{
            backgroundColor: '#000',
            padding: '140px 32px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle grid */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              maskImage:
                'radial-gradient(ellipse 70% 80% at 50% 50%, black 0%, transparent 100%)',
            }}
          />
          <div
            style={{
              maxWidth: 820,
              margin: '0 auto',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: 'rgba(255,255,255,0.3)',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 24,
              }}
            >
              Get Started Today
            </div>
            <h2
              style={{
                fontSize: 'clamp(50px, 9vw, 100px)',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-0.06em',
                lineHeight: 0.93,
                margin: '0 0 28px',
              }}
            >
              Take control
              <br />
              of your money.
            </h2>
            <p
              style={{
                fontSize: 18,
                color: 'rgba(255,255,255,0.4)',
                marginBottom: 52,
                lineHeight: 1.7,
                maxWidth: 480,
                margin: '0 auto 52px',
              }}
            >
              Free to download. No credit card. Works offline from day one.
            </p>

            {/* Store badges */}
            <div
              style={{
                display: 'flex',
                gap: 14,
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: 52,
              }}
            >
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 14,
              }}
            >
              <div
                style={{
                  height: 1,
                  width: 56,
                  background: 'rgba(255,255,255,0.1)',
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.22)',
                  fontWeight: 500,
                }}
              >
                iOS · Android · Free forever · No hidden fees
              </span>
              <div
                style={{
                  height: 1,
                  width: 56,
                  background: 'rgba(255,255,255,0.1)',
                }}
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════ FOOTER ═══════════════════ */}
        <footer
          style={{
            backgroundColor: '#050505',
            borderTop: '1px solid #141414',
            padding: '56px 32px 36px',
          }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: 40,
                marginBottom: 52,
              }}
            >
              {/* Brand */}
              <div style={{ maxWidth: 260 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 9,
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      background: '#fff',
                      borderRadius: 9,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width='14' height='14' viewBox='0 0 24 24' fill='none'>
                      <path
                        d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
                        stroke='#000'
                        strokeWidth='2.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: '#fff',
                      letterSpacing: '-0.04em',
                    }}
                  >
                    Pennify
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.28)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Personal finance made simple. Track, budget, and grow your
                  wealth.
                </p>
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      color: 'rgba(255,255,255,0.22)',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: 18,
                    }}
                  >
                    Product
                  </div>
                  {['Features', 'Reports', 'Download'].map((l) => (
                    <div key={l} style={{ marginBottom: 12 }}>
                      <a
                        href={`#${l.toLowerCase()}`}
                        className='foot-lnk'
                        style={{
                          fontSize: 13,
                          color: 'rgba(255,255,255,0.4)',
                          textDecoration: 'none',
                          fontWeight: 500,
                        }}
                      >
                        {l}
                      </a>
                    </div>
                  ))}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      color: 'rgba(255,255,255,0.22)',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: 18,
                    }}
                  >
                    Legal
                  </div>
                  {[
                    ['Privacy Policy', '/privacy'],
                    ['Terms of Service', '/terms'],
                  ].map(([label, href]) => (
                    <div key={label} style={{ marginBottom: 12 }}>
                      <a
                        href={href}
                        className='foot-lnk'
                        style={{
                          fontSize: 13,
                          color: 'rgba(255,255,255,0.4)',
                          textDecoration: 'none',
                          fontWeight: 500,
                        }}
                      >
                        {label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                borderTop: '1px solid #141414',
                paddingTop: 24,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.18)',
                  fontWeight: 500,
                }}
              >
                © 2026 Pennify. All rights reserved.
              </span>
              <div style={{ display: 'flex', gap: 6 }}>
                {['iOS', 'Android'].map((p) => (
                  <div
                    key={p}
                    style={{
                      padding: '4px 11px',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 7,
                      fontSize: 11,
                      color: 'rgba(255,255,255,0.22)',
                      fontWeight: 600,
                    }}
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
