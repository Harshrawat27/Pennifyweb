export default function PrivacyPolicy() {
  return (
    <>
      <style>{`
        .btn-hover:hover { opacity: 0.88; }
        .btn-hover { transition: opacity 0.15s ease; }
        table { width: 100%; border-collapse: collapse; margin: 16px 0; }
        th, td { text-align: left; padding: 10px 14px; border-bottom: 1px solid #f0f0f0; font-size: 14px; }
        th { font-weight: 600; color: #000; background: #fafafa; }
        td { color: #444; }
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
              Last updated: March 23, 2026
            </p>
          </div>

          {/* Overview */}
          <div style={{ marginBottom: 40, fontSize: 15, lineHeight: 1.75, color: "#444" }}>
            <p>Spendler is a personal finance app. You trust us with your financial data — we take that seriously. This policy explains exactly what we collect, why we collect it, where it lives, and what we never do with it.</p>
            <p>The short version: <strong>your financial data is yours, we do not sell it, we do not use it for advertising, and we do not share it with anyone except the infrastructure providers needed to make the app work.</strong></p>
          </div>

          <Section title="1. What We Collect">
            <SubSection title="Account & Identity Data">
              <p>When you create an account, we collect:</p>
              <ul>
                <li><strong>Email address</strong> — used to authenticate you and to contact you if you reach out for support</li>
                <li><strong>Name</strong> — displayed in the app; optional</li>
                <li><strong>Profile photo</strong> — optional; if provided, stored on our servers</li>
                <li><strong>Authentication tokens</strong> — stored securely on your device via iOS Secure Enclave (SecureStore); never sent to third parties</li>
              </ul>
              <p>We do not collect your phone number, date of birth, government ID, or any other personally identifying information.</p>
            </SubSection>
            <SubSection title="Financial Data You Enter">
              <p>Everything you add to Spendler is stored under your account on our servers:</p>
              <ul>
                <li><strong>Transactions</strong> — title, amount, date, notes, category, account, bookmark status</li>
                <li><strong>Receipt images</strong> — photos you take to log receipts; stored on Cloudflare R2 (see Section 4)</li>
                <li><strong>Accounts</strong> — names, types (cash, bank, credit card, digital wallet), and balances you manually enter</li>
                <li><strong>Categories</strong> — default and custom categories you create</li>
                <li><strong>Budgets</strong> — monthly spending limits per category</li>
                <li><strong>Savings goals</strong> — goal names, target amounts, and saved amounts</li>
                <li><strong>Recurring payments</strong> — subscription names, amounts, billing dates, and frequencies</li>
                <li><strong>People & debts</strong> — names and amounts you track for shared expenses</li>
              </ul>
              <p>All financial data is <strong>manually entered by you</strong>. We never connect to your bank, read your SMS messages, or access any external financial account.</p>
            </SubSection>
            <SubSection title="Preferences & Settings">
              <ul>
                <li>Your selected currency (from 25+ supported currencies)</li>
                <li>Notification preferences (daily reminder on/off, weekly report on/off)</li>
                <li>Income tracking toggle</li>
                <li>Hide balance toggle</li>
                <li>Subscription status (free trial, monthly, or yearly)</li>
              </ul>
            </SubSection>
            <SubSection title="Device & Session Data">
              <ul>
                <li><strong>Device identifiers</strong> — used by RevenueCat to associate your in-app purchase with your account</li>
                <li><strong>Session tokens</strong> — short-lived tokens that keep you logged in; stored in device SecureStore</li>
                <li><strong>App version</strong> — used for support and compatibility purposes</li>
              </ul>
            </SubSection>
            <SubSection title="What We Do NOT Collect">
              <ul>
                <li>Location data</li>
                <li>Contacts</li>
                <li>Browser history or web activity</li>
                <li>Data from other apps</li>
                <li>Precise or coarse device location</li>
                <li>Advertising identifiers (IDFA/GAID)</li>
                <li>Keystroke logging or behavioral analytics</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="2. Why We Collect It">
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Email &amp; auth tokens</td><td>Sign in, account security, support requests</td></tr>
                <tr><td>Financial data</td><td>Core app functionality — displaying your spending, budgets, and goals</td></tr>
                <tr><td>Receipt images</td><td>Receipt scanning and OCR processing</td></tr>
                <tr><td>Notification preferences</td><td>Scheduling local device notifications (no push server — notifications run entirely on your device)</td></tr>
                <tr><td>Currency selection</td><td>Formatting all amounts in your preferred currency</td></tr>
                <tr><td>Subscription status</td><td>Determining access to premium features</td></tr>
                <tr><td>RevenueCat device ID</td><td>Validating and restoring your in-app purchase</td></tr>
              </tbody>
            </table>
            <p>We do not use your data for advertising, profiling, or selling to data brokers — ever.</p>
          </Section>

          <Section title="3. How Your Data Is Stored">
            <p>All your data is stored in <strong>Convex</strong>, a serverless cloud database. Data is encrypted in transit (TLS) and at rest. Your data is logically isolated by your user ID — no other user can access your data.</p>
            <p>Receipt images are stored on <strong>Cloudflare R2</strong> object storage, with access controlled through our backend. Images are not publicly accessible.</p>
            <p>Sensitive items (session tokens, subscription cache) are stored on your device in <strong>iOS SecureStore</strong>, which uses the device Secure Enclave for hardware-backed encryption.</p>
            <p><strong>Offline queuing:</strong> If you add a transaction while offline, it is temporarily stored in device local storage (AsyncStorage) and synced to the cloud when your connection is restored. This local queue is cleared once the sync completes.</p>
          </Section>

          <Section title="4. Third-Party Services">
            <p>We use a small number of trusted services to operate the app. Here is what each receives:</p>
            <SubSection title="Convex (Database)">
              <p><strong>What they receive:</strong> All your financial data, preferences, and account information.<br />
              <strong>Why:</strong> This is our backend — all data lives here.<br />
              <strong>Their privacy policy:</strong> convex.dev/privacy</p>
            </SubSection>
            <SubSection title="Better Auth (Authentication)">
              <p><strong>What they receive:</strong> Your email, name, profile photo (if set), and hashed credentials.<br />
              <strong>Why:</strong> Handles secure sign-in and session management.</p>
            </SubSection>
            <SubSection title="RevenueCat (Subscription Management)">
              <p><strong>What they receive:</strong> An anonymized user ID and in-app purchase events from Apple.<br />
              <strong>Why:</strong> To validate your subscription, restore purchases, and manage trial status.<br />
              <strong>Their privacy policy:</strong> revenuecat.com/privacy<br />
              <strong>Note:</strong> RevenueCat does not receive your financial data or email address.</p>
            </SubSection>
            <SubSection title="Cloudflare R2 (Receipt Image Storage)">
              <p><strong>What they receive:</strong> Receipt images you upload when scanning receipts.<br />
              <strong>Why:</strong> To store receipt photos attached to your transactions.<br />
              <strong>Their privacy policy:</strong> cloudflare.com/privacypolicy</p>
            </SubSection>
            <SubSection title="Apple App Store">
              <p><strong>What they receive:</strong> Purchase transaction records for subscription validation.<br />
              <strong>Why:</strong> Required for in-app purchases on iOS.<br />
              <strong>Their privacy policy:</strong> apple.com/legal/privacy</p>
            </SubSection>
            <p>We do not use Google Analytics, Firebase Analytics, Mixpanel, Amplitude, Sentry, or any behavioral analytics service.</p>
          </Section>

          <Section title="5. Data Sharing">
            <p><strong>We do not sell your data.</strong><br />
            <strong>We do not share your data with advertisers.</strong><br />
            <strong>We do not share your data with data brokers.</strong></p>
            <p>The only circumstances under which your data leaves our systems:</p>
            <ol>
              <li><strong>Infrastructure providers</strong> listed in Section 4 — strictly necessary for the app to function</li>
              <li><strong>Legal requirement</strong> — if we receive a valid court order or legal process requiring disclosure, we will notify you to the extent permitted by law</li>
              <li><strong>Account transfer</strong> — if Spendler is acquired, your data would transfer to the new owner under the same privacy commitments; you will be notified in advance</li>
            </ol>
          </Section>

          <Section title="6. Notifications">
            <p>Spendler sends three types of notifications — all are <strong>local device notifications</strong> scheduled on your device. We do not operate a push notification server.</p>
            <ul>
              <li><strong>Daily reminder</strong> (8:00 PM) — "Don't forget to track today's spending!"</li>
              <li><strong>Weekly report</strong> (Sunday 10:00 AM) — "Check how your week went!"</li>
              <li><strong>Recurring payment reminders</strong> — 1 day before a tracked subscription renews</li>
            </ul>
            <p>All notifications can be disabled individually or entirely from Settings → Notifications. Disabling notifications does not affect any app functionality.</p>
          </Section>

          <Section title="7. Your Rights & Controls">
            <SubSection title="Delete Your Account">
              <p>Settings → Delete Account permanently and irreversibly deletes:</p>
              <ul>
                <li>All transactions, accounts, categories, budgets, goals</li>
                <li>All recurring payments, smart rules, and saved debts</li>
                <li>All user preferences and settings</li>
                <li>Your authentication record and session tokens</li>
              </ul>
              <p>This deletion is complete. We do not retain soft-deleted records after account deletion.</p>
            </SubSection>
            <SubSection title="Access Your Data">
              <p>All your data is visible to you directly in the app. There is no hidden data we hold about you that you cannot see.</p>
            </SubSection>
            <SubSection title="Data Export">
              <p>We do not currently offer a data export feature. If you want a copy of your data before deleting your account, please email support@spendler.app and we will provide it in CSV format within 14 days.</p>
            </SubSection>
            <SubSection title="Correct Your Data">
              <p>You can edit or delete any transaction, account, category, budget, or goal directly from within the app.</p>
            </SubSection>
            <SubSection title="Withdraw Consent">
              <p>You can delete your account at any time. Deleting your account terminates data processing under this policy.</p>
            </SubSection>
          </Section>

          <Section title="8. Data Retention">
            <ul>
              <li><strong>Active accounts:</strong> Data is retained as long as your account is active</li>
              <li><strong>Expired subscriptions:</strong> Your data is retained even after your subscription expires; you simply lose access to premium features. Your data is not deleted on expiry.</li>
              <li><strong>Deleted accounts:</strong> All data is permanently deleted immediately upon account deletion</li>
              <li><strong>Receipt images:</strong> Deleted when the associated transaction is deleted or when your account is deleted</li>
            </ul>
          </Section>

          <Section title="9. Children's Privacy">
            <p>Spendler is not directed at children under 13. We do not knowingly collect data from anyone under 13. If you believe a child has created an account, contact support@spendler.app and we will delete the account immediately.</p>
          </Section>

          <Section title="10. Security">
            <p>We protect your data with:</p>
            <ul>
              <li>TLS encryption for all data in transit</li>
              <li>Encryption at rest in Convex and Cloudflare R2</li>
              <li>Hardware-backed SecureStore for device-local sensitive data</li>
              <li>User-scoped database queries (your data is isolated by user ID)</li>
              <li>No third-party analytics or tracking scripts</li>
            </ul>
            <p>No system is perfectly secure. If you discover a security vulnerability, please disclose it responsibly to support@spendler.app.</p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>If we make material changes to this policy, we will notify you via an in-app announcement before the changes take effect. Continued use of the app after the effective date constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="12. Contact">
            <p>Questions about this privacy policy:</p>
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
