export default function PrivacyPolicy() {
  return (
    <>
      <style>{`
        .btn-hover:hover { opacity: 0.88; }
        .btn-hover { transition: opacity 0.15s ease; }
      `}</style>

      <div style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif", backgroundColor: "#fafafa", color: "#000", minHeight: "100vh" }}>

        {/* NAVBAR */}
        <nav style={{
          position: "sticky", top: 0, zIndex: 50,
          backgroundColor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #f0f0f0",
        }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Spendler logo" style={{ width: 28, height: 28, borderRadius: 7, display: "block" }} />
              <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.04em", color: "#000" }}>Spendler</span>
            </a>
            <a
              href="https://apps.apple.com/app/pennify"
              className="btn-hover"
              style={{
                backgroundColor: "#000", color: "#fff",
                padding: "9px 20px", borderRadius: 99,
                fontSize: 13, fontWeight: 600, textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Download App
            </a>
          </div>
        </nav>

        {/* CONTENT */}
        <main style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 96px" }}>

          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "inline-block", backgroundColor: "#000", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px 12px", borderRadius: 99, marginBottom: 20 }}>
              Legal
            </div>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 16px" }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: 15, color: "#a3a3a3", margin: 0 }}>
              Last updated: March 2026
            </p>
          </div>

          {/* Intro */}
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "#444", marginBottom: 40 }}>
            Spendler ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use the Spendler mobile application and website (collectively, the "Service").
          </p>

          <Section title="1. Information We Collect">
            <SubSection title="Information you provide">
              <ul>
                <li><strong>Account information:</strong> When you sign in with Google or Apple, we receive your name and email address from the authentication provider.</li>
                <li><strong>Financial data:</strong> Transactions, account balances, budgets, goals, and categories you create within the app.</li>
                <li><strong>Preferences:</strong> Currency, notification settings, and other in-app preferences.</li>
              </ul>
            </SubSection>
            <SubSection title="Information collected automatically">
              <ul>
                <li><strong>Device information:</strong> Device type, operating system version, and app version for debugging and compatibility.</li>
                <li><strong>Usage data:</strong> Features used and general interaction patterns to improve the Service.</li>
              </ul>
            </SubSection>
            <SubSection title="Receipt scanning (optional)">
              <p>If you use the receipt scanning feature, images you capture are sent to our servers for processing and are not stored after the transaction is extracted.</p>
            </SubSection>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul>
              <li>To provide, operate, and maintain the Service</li>
              <li>To sync your data across devices</li>
              <li>To send you notifications you have opted into (daily reminders, weekly reports)</li>
              <li>To improve and personalise your experience</li>
              <li>To respond to support enquiries</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p>We do <strong>not</strong> sell your personal data to third parties. We do not use your financial data for advertising purposes.</p>
          </Section>

          <Section title="3. Data Storage & Security">
            <p>Your data is stored securely on <strong>Convex</strong> (convex.dev), a cloud database platform. All data is transmitted over HTTPS. We implement industry-standard security measures to protect your information.</p>
            <p>Financial data you enter (transactions, balances, budgets) is stored only for the purpose of providing the Service to you and is never shared with financial institutions or third-party advertisers.</p>
          </Section>

          <Section title="4. Third-Party Services">
            <p>We use the following third-party services to operate the Service:</p>
            <ul>
              <li><strong>Google Sign-In / Apple Sign-In:</strong> For authentication. Governed by their respective privacy policies.</li>
              <li><strong>Convex:</strong> Cloud database for storing your app data.</li>
              <li><strong>OpenAI:</strong> Used to automatically categorise transactions. Only transaction titles are sent — never amounts, balances, or personal details.</li>
              <li><strong>RevenueCat:</strong> For managing in-app subscriptions and purchase validation.</li>
              <li><strong>Expo / Apple / Google:</strong> For delivering push notifications.</li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>We retain your data for as long as your account is active. You can delete your account at any time from within the app (Settings → Delete Account), which permanently removes all your data from our systems within 30 days.</p>
          </Section>

          <Section title="6. Your Rights">
            <p>Depending on your location, you may have rights including:</p>
            <ul>
              <li>The right to access the personal data we hold about you</li>
              <li>The right to correct inaccurate data</li>
              <li>The right to delete your data</li>
              <li>The right to data portability</li>
            </ul>
            <p>To exercise any of these rights, contact us at the email below.</p>
          </Section>

          <Section title="7. Children's Privacy">
            <p>Spendler is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.</p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the "Last updated" date at the top of this page. Continued use of the Service after changes constitutes your acceptance of the updated policy.</p>
          </Section>

          <Section title="9. Contact Us">
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <div style={{ backgroundColor: "#fff", border: "1px solid #f0f0f0", borderRadius: 14, padding: "20px 24px", marginTop: 12 }}>
              <p style={{ margin: 0, fontWeight: 600 }}>Spendler</p>
              <p style={{ margin: "6px 0 0", color: "#a3a3a3" }}>support@pennify.app</p>
            </div>
          </Section>

        </main>

        {/* FOOTER */}
        <footer style={{ backgroundColor: "#fafafa", borderTop: "1px solid #f0f0f0", padding: "36px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="Spendler logo" style={{ width: 26, height: 26, borderRadius: 6, display: "block" }} />
                <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.04em", color: "#000" }}>Spendler</span>
              </div>
              <p style={{ fontSize: 12, color: "#a3a3a3", margin: "4px 0 0" }}>© 2025 Spendler. All rights reserved.</p>
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              <a href="/privacy" style={{ fontSize: 13, color: "#a3a3a3", textDecoration: "none", fontWeight: 500 }}>Privacy Policy</a>
              <a href="/terms" style={{ fontSize: 13, color: "#a3a3a3", textDecoration: "none", fontWeight: 500 }}>Terms of Service</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 14px", color: "#000" }}>
        {title}
      </h2>
      <div style={{ fontSize: 15, lineHeight: 1.75, color: "#444" }}>
        {children}
      </div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <h3 style={{ fontSize: 14, fontWeight: 600, color: "#000", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}
