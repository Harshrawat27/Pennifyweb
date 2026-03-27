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
            <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Spendler logo" style={{ width: 28, height: 28, borderRadius: 7, display: "block" }} />
              <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.04em", color: "#000" }}>Spendler</span>
            </a>
            <a
              href="https://apps.apple.com/us/app/spendler/id6760784989"
              target="_blank"
              rel="noopener noreferrer"
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
              Last updated: March 23, 2026
            </p>
          </div>

          <Section title="1. Agreement">
            <p>By downloading, installing, or using Spendler, you agree to these Terms. If you do not agree, do not use the app.</p>
            <p>These Terms form a contract between you and the developer of Spendler ("we", "us"). They govern your access to and use of the Spendler iOS app and its associated backend services.</p>
          </Section>

          <Section title="2. What Spendler Is">
            <p>Spendler is a <strong>personal finance tracking app</strong>. It lets you:</p>
            <ul>
              <li>Manually log income and expense transactions</li>
              <li>Organize spending by accounts and categories</li>
              <li>Set monthly budgets and track spending against them</li>
              <li>Create and track savings goals</li>
              <li>Monitor recurring payments and subscriptions</li>
              <li>Track shared expenses with other people</li>
              <li>Scan receipts to log transactions faster</li>
              <li>View spending reports and trends</li>
            </ul>
            <p><strong>Important:</strong> Spendler is a manual tracking tool. It does not connect to your bank, read your SMS or email, access your financial accounts, or process real money in any way. All data you see in the app is data you have entered yourself (or data derived from what you entered).</p>
          </Section>

          <Section title="3. Account">
            <SubSection title="Creating an Account">
              <p>You need an account to use Spendler. You must provide a valid email address. You are responsible for keeping your credentials secure.</p>
            </SubSection>
            <SubSection title="Your Responsibility">
              <p>You are responsible for all activity under your account. If you believe your account has been compromised, contact support@spendler.app immediately.</p>
            </SubSection>
            <SubSection title="One Account Per Person">
              <p>Accounts are personal and non-transferable. You may not share your account with others or create accounts on behalf of others without their knowledge.</p>
            </SubSection>
            <SubSection title="Age Requirement">
              <p>You must be at least 13 years old to use Spendler. By creating an account, you represent that you meet this requirement.</p>
            </SubSection>
          </Section>

          <Section title="4. Subscription & Payments">
            <SubSection title="Free Trial">
              <p>New accounts receive a <strong>3-day free trial</strong> with full access to all premium features. No charge is made during the trial period. You can use all features and delete your account before the trial ends without being charged.</p>
            </SubSection>
            <SubSection title="After the Trial">
              <p>After the trial ends, access to premium features requires an active paid subscription:</p>
              <ul>
                <li><strong>Monthly plan</strong> — charged monthly</li>
                <li><strong>Yearly plan</strong> — charged annually (lower effective monthly rate)</li>
              </ul>
              <p>Current pricing is displayed in the app before you subscribe. Prices may vary by region based on App Store pricing tiers.</p>
            </SubSection>
            <SubSection title="What Requires a Subscription">
              <p>Premium features include budgets, reports, savings goals, recurring payment tracking, AI financial insights, and additional transaction history. Basic transaction logging remains accessible.</p>
              <p>The app does not degrade or delete your data if your subscription expires — your data is preserved. You simply lose access to premium features until you resubscribe.</p>
            </SubSection>
            <SubSection title="Billing">
              <p>Billing is handled entirely by Apple through the App Store. We never see or store your payment card details. Apple's payment terms apply to all purchases.</p>
              <p>Subscriptions automatically renew unless cancelled at least 24 hours before the renewal date.</p>
            </SubSection>
            <SubSection title="Cancellation">
              <p>You can cancel your subscription at any time through iOS Settings → Apple ID → Subscriptions. Cancelling stops future renewals; you retain access until the end of your current billing period.</p>
            </SubSection>
            <SubSection title="Refunds">
              <p>Refund requests are handled by Apple under their standard App Store refund policy. We cannot issue refunds directly — contact Apple Support at reportaproblem.apple.com.</p>
            </SubSection>
            <SubSection title="Restore Purchases">
              <p>If you reinstall the app or switch devices, use Settings → Restore Purchases to recover your subscription.</p>
            </SubSection>
          </Section>

          <Section title="5. Your Data">
            <SubSection title="Ownership">
              <p>All financial data you enter into Spendler belongs to you. We claim no ownership over your transactions, budgets, goals, or any other content you create.</p>
            </SubSection>
            <SubSection title="License to Us">
              <p>By using the app, you grant us a limited, non-exclusive license to store and process your data solely to provide the service. This license ends when you delete your account or your data.</p>
            </SubSection>
            <SubSection title="Your Responsibility for Accuracy">
              <p>Spendler is only as accurate as the data you enter. We are not responsible for financial decisions you make based on data in the app. Spendler does not provide financial advice.</p>
            </SubSection>
            <SubSection title="Account Deletion">
              <p>You can permanently delete your account and all associated data at any time from Settings → Delete Account. This action is irreversible. All data is deleted immediately from our systems.</p>
            </SubSection>
          </Section>

          <Section title="6. Acceptable Use">
            <p>You agree not to:</p>
            <ul>
              <li>Use the app for any illegal purpose or in violation of any law</li>
              <li>Attempt to reverse-engineer, decompile, or extract source code from the app</li>
              <li>Attempt to access other users' data</li>
              <li>Attempt to overload, attack, or disrupt our servers or backend services</li>
              <li>Circumvent subscription validation or attempt to access premium features without a valid subscription</li>
              <li>Automate access to the app or its backend via scripts, bots, or other means without our written permission</li>
              <li>Use the app in a way that could harm, threaten, or harass others</li>
            </ul>
            <p>We reserve the right to suspend or terminate accounts that violate these terms.</p>
          </Section>

          <Section title="7. Receipt Scanning & Camera">
            <p>When you use the receipt scanning feature, the app accesses your device camera and uploads the captured image to our servers for OCR processing. Images are stored on Cloudflare R2 and associated with the transaction they belong to. Deleting a transaction deletes its receipt image. Deleting your account deletes all receipt images.</p>
            <p>We do not use receipt images for any purpose other than displaying them in your transaction history.</p>
          </Section>

          <Section title='8. AI Features ("Ask Penny")'>
            <p>Spendler includes an AI financial assistant feature. When you use this feature:</p>
            <ul>
              <li>Your questions and relevant financial context (e.g., spending totals, budget data) are sent to an AI language model for processing</li>
              <li>AI responses are informational only and do not constitute financial, investment, tax, or legal advice</li>
              <li>Do not rely on AI responses for major financial decisions</li>
              <li>AI responses may occasionally be inaccurate or incomplete</li>
            </ul>
          </Section>

          <Section title="9. Notifications">
            <p>Spendler uses local device notifications. All notifications are scheduled on your device — we do not operate a push notification server. You can disable notifications at any time from the app or from iOS Settings. Disabling notifications does not affect your access to any features.</p>
          </Section>

          <Section title="10. Service Availability">
            <p>We aim for high availability but cannot guarantee uninterrupted service. We may perform maintenance, updates, or make changes to the service at any time.</p>
            <p>We are not liable for any loss of data or business impact resulting from:</p>
            <ul>
              <li>Service downtime or outages</li>
              <li>Data loss due to hardware or software failure (though we maintain backups)</li>
              <li>Changes to third-party services we depend on (Convex, RevenueCat, Cloudflare, Apple)</li>
            </ul>
          </Section>

          <Section title="11. Intellectual Property">
            <p>The Spendler app, its design, branding, and all original content are owned by us and protected by applicable intellectual property laws. You may not copy, modify, distribute, or create derivative works from the app without written permission.</p>
            <p>The default categories, icons, and UI components in the app are part of the product and are not licensed for reuse outside of Spendler.</p>
          </Section>

          <Section title="12. Disclaimer of Warranties">
            <p>Spendler is provided <strong>"as is"</strong> without warranties of any kind, either express or implied.</p>
            <p>We do not warrant that:</p>
            <ul>
              <li>The app will be error-free or uninterrupted</li>
              <li>The app's calculations or reports will be perfectly accurate</li>
              <li>The app will meet your specific financial management needs</li>
            </ul>
            <p><strong>Spendler is a convenience tool, not a substitute for professional financial advice.</strong></p>
          </Section>

          <Section title="13. Limitation of Liability">
            <p>To the maximum extent permitted by applicable law, we are not liable for:</p>
            <ul>
              <li>Any indirect, incidental, or consequential damages arising from your use of Spendler</li>
              <li>Financial losses resulting from decisions made based on data in the app</li>
              <li>Data loss due to account deletion (which is user-initiated and irreversible)</li>
              <li>Loss of access during service outages</li>
            </ul>
            <p>Our total liability to you for any claim arising from your use of Spendler shall not exceed the amount you paid us in the 12 months preceding the claim.</p>
          </Section>

          <Section title="14. Changes to These Terms">
            <p>If we make material changes to these terms, we will notify you via an in-app announcement at least 7 days before the changes take effect. Continuing to use the app after that date means you accept the updated terms.</p>
            <p>If you disagree with updated terms, you may delete your account before they take effect.</p>
          </Section>

          <Section title="15. Termination">
            <SubSection title="By You">
              <p>You can stop using Spendler and delete your account at any time. Deleting your account ends this agreement.</p>
            </SubSection>
            <SubSection title="By Us">
              <p>We may suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or abuse our services. We will attempt to notify you before terminating, except in cases of severe or illegal conduct.</p>
              <p>Upon termination, your access to the service ends. If we terminate your account without cause, we will refund any unused portion of a prepaid subscription.</p>
            </SubSection>
          </Section>

          <Section title="16. Governing Law">
            <p>These Terms are governed by the laws of the jurisdiction where the developer is incorporated, without regard to conflict of law principles. Any disputes that cannot be resolved informally shall be submitted to binding arbitration or the courts of that jurisdiction.</p>
          </Section>

          <Section title="17. Contact">
            <p>For questions about these Terms:</p>
            <div style={{ backgroundColor: "#fff", border: "1px solid #f0f0f0", borderRadius: 14, padding: "20px 24px", marginTop: 12 }}>
              <p style={{ margin: 0, fontWeight: 600 }}>Spendler</p>
              <p style={{ margin: "6px 0 0", color: "#a3a3a3" }}>support@spendler.app</p>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#a3a3a3" }}>We aim to respond within 5 business days.</p>
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
              <p style={{ fontSize: 12, color: "#a3a3a3", margin: "4px 0 0" }}>© 2026 Spendler. All rights reserved.</p>
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
