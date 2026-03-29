export default function OGImage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          width: 1200px;
          height: 630px;
          overflow: hidden;
          background: #fff;
          font-family: 'Bricolage Grotesque', system-ui, sans-serif;
        }
      `}</style>

      <div
        style={{
          width: 1200,
          height: 630,
          background: '#fff',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
          display: 'flex',
        }}
      >
        {/* Dot grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, #d4d4d4 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, #000 40%, transparent 80%)',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, #000 40%, transparent 80%)',
          }}
        />

        {/* Left side — main content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '72px 64px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Logo + name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/logo.png'
              alt='Spendler'
              style={{ width: 52, height: 52, borderRadius: 14, display: 'block' }}
            />
            <span
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: '#111',
                letterSpacing: '-1px',
              }}
            >
              Spendler
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#111',
              lineHeight: 1.02,
              letterSpacing: '-2.5px',
              marginBottom: 24,
            }}
          >
            Track every penny.
            <br />
            <span style={{ color: '#888' }}>AI handles the rest.</span>
          </h1>

          {/* Subline */}
          <p
            style={{
              fontSize: 22,
              color: '#555',
              lineHeight: 1.5,
              fontWeight: 400,
              maxWidth: 480,
              marginBottom: 44,
            }}
          >
            Personal finance app with AI categorization, budgets, goals & subscription tracking.
          </p>

          {/* Feature pills */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              '40+ Categories',
              'Budget Tracking',
              'Savings Goals',
              'Subscriptions',
              'AI Insights',
              'Works Offline',
            ].map((f) => (
              <div
                key={f}
                style={{
                  background: '#f0f0f0',
                  borderRadius: 50,
                  padding: '8px 18px',
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#333',
                }}
              >
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Right side — phone mockup */}
        <div
          style={{
            width: 380,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingRight: 32,
          }}
        >
          {/* Glow behind phone */}
          <div
            style={{
              position: 'absolute',
              width: 320,
              height: 320,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,0,0,0.06) 0%, transparent 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/home-page.png'
            alt='Spendler app screenshot'
            style={{
              height: 520,
              width: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.22))',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, #111 0%, #555 50%, #111 100%)',
          }}
        />

        {/* App Store badge — bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: 28,
            left: 64,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div
            style={{
              background: '#111',
              borderRadius: 50,
              padding: '10px 22px',
              fontSize: 14,
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.3px',
            }}
          >
            ↓ Available on the App Store
          </div>
          <div
            style={{
              fontSize: 14,
              color: '#999',
              fontWeight: 500,
            }}
          >
            spendler.app
          </div>
        </div>
      </div>
    </>
  );
}
