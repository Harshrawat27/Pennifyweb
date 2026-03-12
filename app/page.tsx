"use client";

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes txIn1 {
          0%, 15% { opacity: 0; transform: translateY(12px); }
          25%, 75% { opacity: 1; transform: translateY(0); }
          85%, 100% { opacity: 0; transform: translateY(-12px); }
        }
        @keyframes txIn2 {
          0%, 35% { opacity: 0; transform: translateY(12px); }
          45%, 75% { opacity: 1; transform: translateY(0); }
          85%, 100% { opacity: 0; transform: translateY(-12px); }
        }
        @keyframes txIn3 {
          0%, 55% { opacity: 0; transform: translateY(12px); }
          65%, 85% { opacity: 1; transform: translateY(0); }
          95%, 100% { opacity: 0; transform: translateY(-12px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes syncLine {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .tx-card-1 { animation: txIn1 4s ease-in-out infinite; }
        .tx-card-2 { animation: txIn2 4s ease-in-out infinite; }
        .tx-card-3 { animation: txIn3 4s ease-in-out infinite; }
        .hero-text { animation: fadeSlideUp 0.7s ease both; }
        .hero-sub { animation: fadeSlideUp 0.7s 0.15s ease both; }
        .hero-cta { animation: fadeSlideUp 0.7s 0.28s ease both; }
        .hero-phone { animation: fadeIn 0.9s 0.1s ease both; }
        .feature-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }
        .feature-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .btn-hover:hover { opacity: 0.88; }
        .btn-hover { transition: opacity 0.15s ease; }
        .sync-bar { animation: syncLine 2s 0.5s ease forwards; width: 0; }
      `}</style>

      <div style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif", backgroundColor: "#fafafa", color: "#000" }}>

        {/* ── NAVBAR ── */}
        <nav style={{
          position: "sticky", top: 0, zIndex: 50,
          backgroundColor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #f0f0f0",
        }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.04em", color: "#000" }}>Pennify</span>
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

        {/* ── HERO ── */}
        <section style={{ backgroundColor: "#000", padding: "80px 24px 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap" }}>

            {/* Left */}
            <div style={{ flex: "1 1 380px", paddingBottom: 80 }}>
              <div className="hero-text" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 99, padding: "6px 14px", marginBottom: 28,
              }}>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Personal Finance App</span>
              </div>

              <h1 className="hero-text" style={{
                fontSize: "clamp(44px, 6vw, 68px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                margin: "0 0 20px",
              }}>
                Your Money,<br />Crystal Clear.
              </h1>

              <p className="hero-sub" style={{
                fontSize: 17, color: "rgba(255,255,255,0.55)", lineHeight: 1.65,
                maxWidth: 420, margin: "0 0 36px",
              }}>
                Track expenses, set budgets, and reach your goals. Works even when you're offline.
              </p>

              <div className="hero-cta" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {/* App Store */}
                <a href="https://apps.apple.com/app/pennify" className="btn-hover" style={{
                  display: "flex", alignItems: "center", gap: 10,
                  backgroundColor: "#fff", color: "#000",
                  padding: "13px 22px", borderRadius: 14,
                  textDecoration: "none", fontWeight: 600, fontSize: 14,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div>
                    <div style={{ fontSize: 10, opacity: 0.6, fontWeight: 500 }}>Download on the</div>
                    <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em" }}>App Store</div>
                  </div>
                </a>

                {/* Google Play */}
                <a href="https://play.google.com/store/apps/details?id=com.pennify" className="btn-hover" style={{
                  display: "flex", alignItems: "center", gap: 10,
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  padding: "13px 22px", borderRadius: 14,
                  textDecoration: "none", fontWeight: 600, fontSize: 14,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                    <path d="M3.18 23.76c.3.17.64.24.99.2L14.38 12 10.78 8.4 3.18 23.76zm17.17-11.04L17.6 11.3l-3.22 3.22 3.2 3.2 2.78-1.52c.8-.44.8-1.64-.01-2.08zM2.08 1.05C1.72 1.35 1.5 1.82 1.5 2.43v19.14c0 .61.22 1.08.58 1.38l.09.07L12.85 12v-.27L2.17.98l-.09.07zm9.77 11.22L3.18.24c-.35-.04-.69.03-.99.2l7.59 15.38 2.07-3.55z"/>
                  </svg>
                  <div>
                    <div style={{ fontSize: 10, opacity: 0.6, fontWeight: 500 }}>Get it on</div>
                    <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em" }}>Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="hero-phone" style={{ flex: "0 0 auto", display: "flex", justifyContent: "center", alignSelf: "flex-end" }}>
              <div style={{
                width: 240,
                height: 490,
                backgroundColor: "#000",
                borderRadius: 40,
                border: "8px solid #1a1a1a",
                boxShadow: "0 0 0 1px #333, 0 40px 80px rgba(0,0,0,0.7)",
                overflow: "hidden",
                position: "relative",
              }}>
                {/* Notch */}
                <div style={{
                  position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)",
                  width: 80, height: 22, backgroundColor: "#000",
                  borderRadius: 20, zIndex: 10,
                  border: "2px solid #1a1a1a",
                }} />

                {/* Screen content */}
                <div style={{ padding: "48px 16px 20px", height: "100%", boxSizing: "border-box", overflowY: "hidden" }}>
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.12)" }} />
                    <div style={{ backgroundColor: "rgba(255,255,255,0.12)", borderRadius: 99, padding: "4px 10px" }}>
                      <span style={{ fontSize: 9, color: "#fff", fontWeight: 600 }}>March 2026</span>
                    </div>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.12)" }} />
                  </div>

                  {/* Balance */}
                  <div style={{ textAlign: "center", marginBottom: 24 }}>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Current Balance</div>
                    <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: "-0.04em" }}>₹24,850</div>
                  </div>

                  {/* White card area */}
                  <div style={{ backgroundColor: "#f5f5f5", borderRadius: 20, padding: 12 }}>
                    {/* Income / Expense mini cards */}
                    <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                      <div style={{ flex: 1, backgroundColor: "#fff", borderRadius: 12, padding: "8px 10px" }}>
                        <div style={{ width: 20, height: 20, borderRadius: 8, backgroundColor: "#f0f0f0", marginBottom: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
                        </div>
                        <div style={{ fontSize: 7, color: "#a3a3a3", marginBottom: 2 }}>Income</div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "#000" }}>₹48,000</div>
                      </div>
                      <div style={{ flex: 1, backgroundColor: "#fff", borderRadius: 12, padding: "8px 10px" }}>
                        <div style={{ width: 20, height: 20, borderRadius: 8, backgroundColor: "#f0f0f0", marginBottom: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5"><path d="M17 7L7 17M17 17H7V7"/></svg>
                        </div>
                        <div style={{ fontSize: 7, color: "#a3a3a3", marginBottom: 2 }}>Expenses</div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "#000" }}>₹23,150</div>
                      </div>
                    </div>

                    {/* Transactions */}
                    {[
                      { icon: "☕", name: "Starbucks", cat: "Food", amount: "-₹380" },
                      { icon: "🚗", name: "Uber Ride", cat: "Transport", amount: "-₹220" },
                      { icon: "💊", name: "Pharmacy", cat: "Health", amount: "-₹650" },
                    ].map((tx, i) => (
                      <div key={i} style={{
                        backgroundColor: "#fff", borderRadius: 10, padding: "8px 10px",
                        display: "flex", alignItems: "center", gap: 8, marginBottom: 6,
                      }}>
                        <div style={{ width: 24, height: 24, borderRadius: 8, backgroundColor: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>{tx.icon}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 9, fontWeight: 700, color: "#000" }}>{tx.name}</div>
                          <div style={{ fontSize: 7, color: "#a3a3a3" }}>{tx.cat}</div>
                        </div>
                        <div style={{ fontSize: 9, fontWeight: 700, color: "#000" }}>{tx.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ backgroundColor: "#fff", borderBottom: "1px solid #f0f0f0" }}>
          <div style={{
            maxWidth: 1100, margin: "0 auto", padding: "36px 24px",
            display: "flex", justifyContent: "center", gap: "clamp(32px, 8vw, 96px)",
            flexWrap: "wrap",
          }}>
            {[
              { val: "10K+", label: "Downloads" },
              { val: "4.8★", label: "Rating" },
              { val: "100%", label: "Offline Ready" },
            ].map((s) => (
              <div key={s.val} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.04em", color: "#000" }}>{s.val}</div>
                <div style={{ fontSize: 13, color: "#a3a3a3", fontWeight: 500, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section style={{ backgroundColor: "#fafafa", padding: "96px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#000", margin: 0 }}>
                Everything you need
              </h2>
              <p style={{ fontSize: 16, color: "#a3a3a3", marginTop: 12 }}>One app to rule your personal finances.</p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 20,
            }}>
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
                  ),
                  title: "AI Categorization",
                  desc: "Transactions categorized automatically using AI. No manual tagging ever again.",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M1 6l11 6 11-6"/><path d="M1 12l11 6 11-6"/></svg>
                  ),
                  title: "Works Offline",
                  desc: "Add transactions anywhere. Syncs automatically when you're back online.",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                  ),
                  title: "Budget Tracking",
                  desc: "Set monthly budgets per category. Know when you're close to limits.",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ),
                  title: "Smart Goals",
                  desc: "Create savings goals with target amounts. Track progress visually.",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  ),
                  title: "Detailed Reports",
                  desc: "Weekly, monthly, yearly breakdowns. Understand your spending habits.",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>
                  ),
                  title: "Multiple Accounts",
                  desc: "Bank, cash, UPI — track all your accounts in one place.",
                },
              ].map((f) => (
                <div key={f.title} className="feature-card" style={{
                  backgroundColor: "#fff",
                  borderRadius: 20,
                  padding: 28,
                  border: "1px solid #f0f0f0",
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 14,
                    backgroundColor: "#f5f5f5",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20,
                  }}>
                    {f.icon}
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#000", margin: "0 0 8px", letterSpacing: "-0.02em" }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: "#a3a3a3", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI HIGHLIGHT ── */}
        <section style={{ backgroundColor: "#000", padding: "96px 24px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", margin: "0 0 14px" }}>
              AI that works for you
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", marginBottom: 56 }}>
              Just type what you spent. Our AI figures out the category.
            </p>

            {/* Animated transaction cards */}
            <div style={{ position: "relative", height: 200 }}>
              {[
                { tx: "Starbucks Coffee", cat: "Food & Dining", emoji: "☕" },
                { tx: "Uber Ride", cat: "Transport", emoji: "🚗" },
                { tx: "Netflix", cat: "Entertainment", emoji: "🎬" },
              ].map((item, i) => (
                <div
                  key={item.tx}
                  className={`tx-card-${i + 1}`}
                  style={{
                    position: "absolute", left: "50%", transform: "translateX(-50%)",
                    top: "50%", marginTop: -36,
                    width: "min(400px, 90vw)",
                    backgroundColor: "#fff", borderRadius: 16,
                    padding: "16px 20px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    opacity: 0,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{item.emoji}</div>
                    <span style={{ fontSize: 15, fontWeight: 700, color: "#000" }}>{item.tx}</span>
                  </div>
                  <div style={{
                    display: "flex", alignItems: "center", gap: 5,
                    backgroundColor: "#000", color: "#fff",
                    padding: "6px 12px", borderRadius: 99, fontSize: 12, fontWeight: 600,
                  }}>
                    <span>⚡</span>
                    <span>{item.cat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OFFLINE FIRST ── */}
        <section style={{ backgroundColor: "#fff", padding: "96px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 64, flexWrap: "wrap" }}>
            {/* Left */}
            <div style={{ flex: "1 1 320px" }}>
              <div style={{
                display: "inline-block",
                backgroundColor: "#f5f5f5", borderRadius: 99,
                padding: "6px 14px", marginBottom: 20,
                fontSize: 11, fontWeight: 600, color: "#a3a3a3",
                letterSpacing: "0.06em", textTransform: "uppercase",
              }}>
                Offline First
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#000", margin: "0 0 16px", lineHeight: 1.15 }}>
                Add transactions at<br />30,000 feet
              </h2>
              <p style={{ fontSize: 16, color: "#a3a3a3", lineHeight: 1.7, margin: 0, maxWidth: 380 }}>
                No internet? No problem. Pennify queues your transactions locally and syncs the moment you're back online — nothing ever gets lost.
              </p>
            </div>

            {/* Right: Diagram */}
            <div style={{ flex: "1 1 320px", display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 0, position: "relative" }}>
                {[
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
                    ),
                    label: "Phone",
                  },
                  null,
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
                    ),
                    label: "Queue",
                  },
                  null,
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>
                    ),
                    label: "Sync",
                  },
                  null,
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    ),
                    label: "Done",
                    accent: true,
                  },
                ].map((item, i) => {
                  if (item === null) {
                    return (
                      <div key={`line-${i}`} style={{ position: "relative", width: 40, height: 2 }}>
                        <div style={{ height: 2, backgroundColor: "#e5e5e5", width: "100%" }} />
                        <div className="sync-bar" style={{ position: "absolute", top: 0, left: 0, height: 2, backgroundColor: "#000" }} />
                      </div>
                    );
                  }
                  return (
                    <div key={item.label} style={{ textAlign: "center" }}>
                      <div style={{
                        width: 64, height: 64, borderRadius: 20,
                        backgroundColor: item.accent ? "#000" : "#f5f5f5",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        marginBottom: 8,
                      }}>
                        <div style={{ color: item.accent ? "#fff" : "#000" }}>
                          {item.accent ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                          ) : item.icon}
                        </div>
                      </div>
                      <div style={{ fontSize: 11, color: "#a3a3a3", fontWeight: 600 }}>{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── DOWNLOAD CTA ── */}
        <section style={{ backgroundColor: "#000", padding: "96px 24px" }}>
          <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", margin: "0 0 14px", lineHeight: 1.1 }}>
              Start tracking today
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.4)", marginBottom: 44 }}>
              Free to download. No credit card required.
            </p>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
              <a href="https://apps.apple.com/app/pennify" className="btn-hover" style={{
                display: "flex", alignItems: "center", gap: 10,
                backgroundColor: "#fff", color: "#000",
                padding: "14px 24px", borderRadius: 14,
                textDecoration: "none", fontWeight: 600, fontSize: 14,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#000"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 10, opacity: 0.5, fontWeight: 500 }}>Download on the</div>
                  <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em" }}>App Store</div>
                </div>
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.pennify" className="btn-hover" style={{
                display: "flex", alignItems: "center", gap: 10,
                backgroundColor: "#fff", color: "#000",
                padding: "14px 24px", borderRadius: 14,
                textDecoration: "none", fontWeight: 600, fontSize: 14,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#000"><path d="M3.18 23.76c.3.17.64.24.99.2L14.38 12 10.78 8.4 3.18 23.76zm17.17-11.04L17.6 11.3l-3.22 3.22 3.2 3.2 2.78-1.52c.8-.44.8-1.64-.01-2.08zM2.08 1.05C1.72 1.35 1.5 1.82 1.5 2.43v19.14c0 .61.22 1.08.58 1.38l.09.07L12.85 12v-.27L2.17.98l-.09.07zm9.77 11.22L3.18.24c-.35-.04-.69.03-.99.2l7.59 15.38 2.07-3.55z"/></svg>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 10, opacity: 0.5, fontWeight: 500 }}>Get it on</div>
                  <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em" }}>Google Play</div>
                </div>
              </a>
            </div>

            {/* QR placeholder */}
            <div style={{ display: "inline-block" }}>
              <div style={{
                width: 96, height: 96,
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 16,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 8px",
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                  <rect x="14" y="14" width="3" height="3"/><rect x="18" y="14" width="3" height="3"/><rect x="14" y="18" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/>
                </svg>
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>Scan to download</div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ backgroundColor: "#fafafa", borderTop: "1px solid #f0f0f0", padding: "36px 24px" }}>
          <div style={{
            maxWidth: 1100, margin: "0 auto",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 16,
          }}>
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
