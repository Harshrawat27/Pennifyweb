export default function TermsOfService() {
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
            <a href="/" style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.04em", color: "#000", textDecoration: "none" }}>Pennify</a>
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
              Terms of Service
            </h1>
            <p style={{ fontSize: 15, color: "#a3a3a3", margin: 0 }}>
              Last updated: March 2025
            </p>
          </div>

          {/* Intro */}
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "#444", marginBottom: 40 }}>
            Please read these Terms of Service ("Terms") carefully before using the Pennify mobile application or website (the "Service"). By accessing or using the Service, you agree to be bound by these Terms.
          </p>

          <Section title="1. Acceptance of Terms">
            <p>By creating an account or using Pennify, you confirm that you are at least 13 years of age and agree to these Terms and our Privacy Policy. If you do not agree, please do not use the Service.</p>
          </Section>

          <Section title="2. Description of Service">
            <p>Pennify is a personal finance management application that helps you track income and expenses, set budgets, manage saving goals, and gain insights into your spending. The Service is provided for personal, non-commercial use only.</p>
            <p>Pennify is a <strong>tracking tool only</strong>. We are not a bank, financial institution, or financial advisor. Nothing in the Service constitutes financial, investment, legal, or tax advice.</p>
          </Section>

          <Section title="3. Account Registration">
            <ul>
              <li>You must provide accurate information when creating your account.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>You must notify us immediately of any unauthorised use of your account.</li>
              <li>One account per person. You may not transfer your account to another person.</li>
            </ul>
          </Section>

          <Section title="4. Subscriptions & Payments">
            <SubSection title="Free vs Premium">
              <p>Pennify offers a free trial period. Continued access to all features requires an active Premium subscription (monthly or yearly).</p>
            </SubSection>
            <SubSection title="Billing">
              <p>Subscriptions are billed through the Apple App Store. By subscribing, you agree to Apple's payment terms. Prices are displayed in your local currency at the time of purchase.</p>
            </SubSection>
            <SubSection title="Auto-renewal">
              <p>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period. You can manage or cancel your subscription at any time in your Apple ID account settings.</p>
            </SubSection>
            <SubSection title="Refunds">
              <p>All purchases are processed through the Apple App Store. Refund requests are subject to Apple's refund policy. We do not process refunds directly.</p>
            </SubSection>
          </Section>

          <Section title="5. Acceptable Use">
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to gain unauthorised access to any part of the Service</li>
              <li>Reverse engineer, decompile, or disassemble the app</li>
              <li>Use automated tools to scrape or extract data from the Service</li>
              <li>Impersonate any person or entity</li>
              <li>Introduce malware or any harmful code</li>
            </ul>
          </Section>

          <Section title="6. Your Data">
            <p>You retain ownership of all financial data you enter into Pennify. By using the Service, you grant us a limited licence to store and process your data solely for the purpose of providing the Service to you.</p>
            <p>You can export or delete your data at any time. See our <a href="/privacy" style={{ color: "#000", fontWeight: 600 }}>Privacy Policy</a> for details on how we handle your data.</p>
          </Section>

          <Section title="7. Disclaimers">
            <p>The Service is provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that:</p>
            <ul>
              <li>The Service will be uninterrupted or error-free</li>
              <li>Any financial insights or AI categorisations will be accurate</li>
              <li>The Service will meet your specific requirements</li>
            </ul>
            <p>Financial data you enter is only as accurate as the information you provide. Always verify important financial decisions independently.</p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>To the maximum extent permitted by applicable law, Pennify and its developer shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data or financial loss, arising from your use of the Service.</p>
            <p>Our total liability to you for any claims arising from the Service shall not exceed the amount you paid for the Service in the 12 months preceding the claim.</p>
          </Section>

          <Section title="9. Termination">
            <p>You may stop using the Service and delete your account at any time from Settings → Delete Account.</p>
            <p>We reserve the right to suspend or terminate your account if you violate these Terms, with or without notice. Upon termination, your right to use the Service ceases immediately.</p>
          </Section>

          <Section title="10. Changes to Terms">
            <p>We may modify these Terms at any time. We will notify you of material changes by updating the "Last updated" date. Continued use of the Service after changes constitutes your acceptance of the updated Terms.</p>
          </Section>

          <Section title="11. Governing Law">
            <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of India.</p>
          </Section>

          <Section title="12. Contact Us">
            <p>If you have any questions about these Terms, please contact us at:</p>
            <div style={{ backgroundColor: "#fff", border: "1px solid #f0f0f0", borderRadius: 14, padding: "20px 24px", marginTop: 12 }}>
              <p style={{ margin: 0, fontWeight: 600 }}>Pennify</p>
              <p style={{ margin: "6px 0 0", color: "#a3a3a3" }}>support@pennify.app</p>
            </div>
          </Section>

        </main>

        {/* FOOTER */}
        <footer style={{ backgroundColor: "#fafafa", borderTop: "1px solid #f0f0f0", padding: "36px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.04em", color: "#000" }}>Pennify</span>
              <p style={{ fontSize: 12, color: "#a3a3a3", margin: "4px 0 0" }}>© 2025 Pennify. All rights reserved.</p>
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
