'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'How do I add a transaction?',
    a: 'Tap the + button on the home screen or the bottom tab bar to quickly add a new transaction.',
  },
  {
    q: 'How do I restore my subscription?',
    a: 'Go to the paywall screen and tap "Restore Purchases" to restore a previously purchased subscription.',
  },
  {
    q: 'Is my data backed up?',
    a: 'Yes. All your data is securely synced to the cloud and available across your devices.',
  },
  {
    q: 'How do I cancel my subscription?',
    a: 'Go to Settings → Manage Subscription, or open the App Store → your Apple ID → Subscriptions.',
  },
  {
    q: 'How do I delete my account?',
    a: 'Go to Settings → Delete Account. This will permanently remove all your data.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: '1px solid #f0f0f0',
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 16,
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: '#111', lineHeight: 1.4 }}>{q}</span>
        <span
          style={{
            flexShrink: 0,
            width: 22,
            height: 22,
            borderRadius: '50%',
            background: open ? '#111' : '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.15s',
          }}
        >
          <svg width={10} height={10} viewBox='0 0 10 10' fill='none'>
            <line x1={5} y1={open ? 2 : 1} x2={5} y2={open ? 2 : 9} stroke={open ? '#fff' : '#111'} strokeWidth={1.5} strokeLinecap='round'
              style={{ transition: 'all 0.15s' }} />
            <line x1={1} y1={5} x2={9} y2={5} stroke={open ? '#fff' : '#111'} strokeWidth={1.5} strokeLinecap='round' />
          </svg>
        </span>
      </button>
      {open && (
        <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, margin: '0 0 20px', paddingRight: 38 }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function SupportPage() {
  return (
    <div style={{ fontFamily: 'var(--font-bricolage), system-ui, sans-serif', background: '#fff', color: '#111', minHeight: '100vh' }}>

      {/* Navbar */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #f0f0f0',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href='/' style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/logo.png' alt='Spendler logo' style={{ width: 26, height: 26, borderRadius: 6, display: 'block' }} />
            <span style={{ fontSize: 17, fontWeight: 800, color: '#111', letterSpacing: '-0.5px' }}>Spendler</span>
          </a>
          <a
            href='https://apps.apple.com/us/app/spendler/id6760784989'
            style={{
              fontSize: 13, fontWeight: 600, color: '#fff',
              background: '#111', padding: '8px 18px', borderRadius: 99,
              textDecoration: 'none',
            }}
          >
            Download App
          </a>
        </div>
      </nav>

      <main style={{ maxWidth: 640, margin: '0 auto', padding: '72px 24px 96px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-block', background: '#111', color: '#fff',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '5px 12px', borderRadius: 99, marginBottom: 20,
          }}>
            Support
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 46px)', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.1, margin: '0 0 14px' }}>
            How can we help?
          </h1>
          <p style={{ fontSize: 16, color: '#666', lineHeight: 1.65, margin: 0 }}>
            Have a question or issue? Reach out and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Email card */}
        <a
          href='mailto:support@spendler.app'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 24px',
            borderRadius: 16,
            border: '1px solid #e8e8e8',
            textDecoration: 'none',
            marginBottom: 64,
            transition: 'border-color 0.15s, box-shadow 0.15s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = '#111';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = '#e8e8e8';
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 42, height: 42, borderRadius: 12, background: '#f5f5f5',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width={18} height={18} viewBox='0 0 24 24' fill='none' stroke='#111' strokeWidth={1.8} strokeLinecap='round' strokeLinejoin='round'>
                <rect x={2} y={4} width={20} height={16} rx={3} />
                <path d='M2 7l10 7 10-7' />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#111', marginBottom: 2 }}>Email support</div>
              <div style={{ fontSize: 14, color: '#666' }}>support@spendler.app</div>
            </div>
          </div>
          <svg width={16} height={16} viewBox='0 0 16 16' fill='none'>
            <path d='M6 3l5 5-5 5' stroke='#999' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </a>

        {/* FAQ */}
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.5px', margin: '0 0 4px' }}>
            Frequently asked questions
          </h2>
          <p style={{ fontSize: 14, color: '#999', margin: '0 0 24px' }}>Quick answers to common questions.</p>
          <div style={{ borderTop: '1px solid #f0f0f0' }}>
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #f0f0f0', padding: '32px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/logo.png' alt='Spendler logo' style={{ width: 22, height: 22, borderRadius: 5, display: 'block' }} />
            <span style={{ fontSize: 14, fontWeight: 700, color: '#111' }}>Spendler</span>
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href='/privacy' style={{ fontSize: 13, color: '#999', textDecoration: 'none' }}>Privacy</a>
            <a href='/terms' style={{ fontSize: 13, color: '#999', textDecoration: 'none' }}>Terms</a>
            <a href='/support' style={{ fontSize: 13, color: '#111', fontWeight: 600, textDecoration: 'none' }}>Support</a>
          </div>
          <span style={{ fontSize: 13, color: '#bbb' }}>© 2026 Spendler.</span>
        </div>
      </footer>

    </div>
  );
}
