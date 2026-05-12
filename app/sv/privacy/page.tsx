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

      <div
        style={{
          fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
          backgroundColor: '#fafafa',
          color: '#000',
          minHeight: '100vh',
        }}
      >
        {/* NAVBAR */}
        <nav
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            backgroundColor: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid #f0f0f0',
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: '0 auto',
              padding: '0 24px',
              height: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <a
              href='/'
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                textDecoration: 'none',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='/logo.png'
                alt='Spendler logo'
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 7,
                  display: 'block',
                }}
              />
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  color: '#000',
                }}
              >
                Spendler
              </span>
            </a>
            <a
              href='https://apps.apple.com/us/app/spendler/id6760784989'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-hover'
              style={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '9px 20px',
                borderRadius: 99,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              Ladda ner appen
            </a>
          </div>
        </nav>

        {/* CONTENT */}
        <main
          style={{ maxWidth: 720, margin: '0 auto', padding: '64px 24px 96px' }}
        >
          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <div
              style={{
                display: 'inline-block',
                backgroundColor: '#000',
                color: '#fff',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '5px 12px',
                borderRadius: 99,
                marginBottom: 20,
              }}
            >
              Juridiskt
            </div>
            <h1
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                margin: '0 0 16px',
              }}
            >
              Integritetspolicy
            </h1>
            <p style={{ fontSize: 15, color: '#a3a3a3', margin: 0 }}>
              Senast uppdaterad: 23 mars 2026
            </p>
          </div>

          {/* Overview */}
          <div
            style={{
              marginBottom: 40,
              fontSize: 15,
              lineHeight: 1.75,
              color: '#444',
            }}
          >
            <p>
              Spendler är en app för privatekonomi. Du anförtror oss dina ekonomiska uppgifter — vi tar det på allvar. Den här policyn förklarar exakt vad vi samlar in, varför vi samlar in det, var det finns och vad vi aldrig gör med det.
            </p>
            <p>
              Kortversionen:{' '}
              <strong>
                dina ekonomiska data tillhör dig, vi säljer dem inte, vi använder dem inte för reklam och vi delar dem inte med någon annan än de infrastrukturleverantörer som behövs för att appen ska fungera.
              </strong>
            </p>
          </div>

          <Section title='1. Vad vi samlar in'>
            <SubSection title='Konto- och identitetsdata'>
              <p>När du skapar ett konto samlar vi in:</p>
              <ul>
                <li>
                  <strong>E-postadress</strong> — används för att autentisera dig och kontakta dig om du kontaktar support
                </li>
                <li>
                  <strong>Namn</strong> — visas i appen; valfritt
                </li>
                <li>
                  <strong>Profilfoto</strong> — valfritt; om det tillhandahålls lagras det på våra servrar
                </li>
                <li>
                  <strong>Autentiseringstokens</strong> — lagras säkert på din enhet via iOS Secure Enclave (SecureStore); skickas aldrig till tredje parter
                </li>
              </ul>
              <p>
                Vi samlar inte in ditt telefonnummer, födelsedatum, statligt utfärdat ID eller annan personligt identifierbar information.
              </p>
            </SubSection>
            <SubSection title='Ekonomiska data du anger'>
              <p>
                Allt du lägger till i Spendler lagras under ditt konto på våra servrar:
              </p>
              <ul>
                <li>
                  <strong>Transaktioner</strong> — titel, belopp, datum, anteckningar, kategori, konto, bokmärkesstatus
                </li>
                <li>
                  <strong>Kvittobilder</strong> — foton du tar för att logga kvitton; lagras på Cloudflare R2 (se Avsnitt 4)
                </li>
                <li>
                  <strong>Konton</strong> — namn, typer (kontant, bank, kreditkort, digital plånbok) och saldon du anger manuellt
                </li>
                <li>
                  <strong>Kategorier</strong> — standard- och anpassade kategorier du skapar
                </li>
                <li>
                  <strong>Budgetar</strong> — månatliga utgiftsgränser per kategori
                </li>
                <li>
                  <strong>Sparmål</strong> — målnamn, målbelopp och sparade belopp
                </li>
                <li>
                  <strong>Återkommande betalningar</strong> — prenumerationsnamn, belopp, faktureringsdatum och frekvenser
                </li>
                <li>
                  <strong>Personer och skulder</strong> — namn och belopp du spårar för delade utgifter
                </li>
              </ul>
              <p>
                Alla ekonomiska data <strong>anges manuellt av dig</strong>. Vi ansluter aldrig till din bank, läser dina SMS-meddelanden eller får åtkomst till externa finansiella konton.
              </p>
            </SubSection>
            <SubSection title='Inställningar och preferenser'>
              <ul>
                <li>Din valda valuta (från 25+ valda valutor)</li>
                <li>Aviseringsinställningar (daglig påminnelse på/av, veckorapport på/av)</li>
                <li>Växel för inkomstspårning</li>
                <li>Dölj saldo-växel</li>
                <li>Prenumerationsstatus (gratis provperiod, månadsvis eller årsvis)</li>
              </ul>
            </SubSection>
            <SubSection title='Enhets- och sessionsdata'>
              <ul>
                <li>
                  <strong>Enhetsidentifierare</strong> — används av RevenueCat för att associera ditt köp i appen med ditt konto
                </li>
                <li>
                  <strong>Sessionstokens</strong> — kortlivade tokens som håller dig inloggad; lagras i enhetens SecureStore
                </li>
                <li>
                  <strong>App-version</strong> — används för support och kompatibilitetssyften
                </li>
              </ul>
            </SubSection>
            <SubSection title='Vad vi INTE samlar in'>
              <ul>
                <li>Platsdata</li>
                <li>Kontakter</li>
                <li>Webbläsarhistorik eller webbaktivitet</li>
                <li>Data från andra appar</li>
                <li>Exakt eller ungefärlig enhetsplats</li>
                <li>Reklamidentifierare (IDFA/GAID)</li>
                <li>Tangenttrycksloggning eller beteendeanalys</li>
              </ul>
            </SubSection>
          </Section>

          <Section title='2. Varför vi samlar in det'>
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Syfte</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>E-post och autentiseringstokens</td>
                  <td>Inloggning, kontosäkerhet, supportförfrågningar</td>
                </tr>
                <tr>
                  <td>Ekonomiska data</td>
                  <td>Appens kärnfunktionalitet — visning av dina utgifter, budgetar och mål</td>
                </tr>
                <tr>
                  <td>Kvittobilder</td>
                  <td>Kvittoskanning och OCR-bearbetning</td>
                </tr>
                <tr>
                  <td>Aviseringsinställningar</td>
                  <td>Schemaläggning av lokala enhetsaviseringar (ingen push-server — aviseringar körs helt på din enhet)</td>
                </tr>
                <tr>
                  <td>Valutaval</td>
                  <td>Formatering av alla belopp i din föredragna valuta</td>
                </tr>
                <tr>
                  <td>Prenumerationsstatus</td>
                  <td>Bestämma åtkomst till premiumfunktioner</td>
                </tr>
                <tr>
                  <td>RevenueCat enhets-ID</td>
                  <td>Validera och återställa ditt köp i appen</td>
                </tr>
              </tbody>
            </table>
            <p>
              Vi använder inte dina data för reklam, profilering eller försäljning till datamäklare — aldrig.
            </p>
          </Section>

          <Section title='3. Hur dina data lagras'>
            <p>
              Alla dina data lagras i <strong>Convex</strong>, en serverlös molndatabas. Data är krypterade under transport (TLS) och i vila. Dina data är logiskt isolerade av ditt användar-ID — ingen annan användare kan komma åt dina data.
            </p>
            <p>
              Kvittobilder lagras på <strong>Cloudflare R2</strong> objektlagring, med åtkomst kontrollerad via vår backend. Bilder är inte offentligt tillgängliga.
            </p>
            <p>
              Känsliga objekt (sessionstokens, prenumerationscache) lagras på din enhet i <strong>iOS SecureStore</strong>, som använder enhetens Secure Enclave för hårdvarubaserad kryptering.
            </p>
            <p>
              <strong>Offlinekö:</strong> Om du lägger till en transaktion offline lagras den temporärt i enhetens lokala lagring (AsyncStorage) och synkroniseras till molnet när din anslutning återställs. Den här lokala kön rensas när synkroniseringen är klar.
            </p>
          </Section>

          <Section title='4. Tredjepartstjänster'>
            <p>
              Vi använder ett litet antal betrodda tjänster för att driva appen. Här är vad var och en tar emot:
            </p>
            <SubSection title='Convex (Databas)'>
              <p>
                <strong>Vad de tar emot:</strong> Alla dina ekonomiska data, inställningar och kontoinformation.
                <br />
                <strong>Varför:</strong> Det här är vår backend — all data lever här.
                <br />
                <strong>Deras integritetspolicy:</strong> convex.dev/privacy
              </p>
            </SubSection>
            <SubSection title='Better Auth (Autentisering)'>
              <p>
                <strong>Vad de tar emot:</strong> Din e-post, ditt namn, profilfoto (om angivet) och hashade inloggningsuppgifter.
                <br />
                <strong>Varför:</strong> Hanterar säker inloggning och sessionshantering.
              </p>
            </SubSection>
            <SubSection title='RevenueCat (Prenumerationshantering)'>
              <p>
                <strong>Vad de tar emot:</strong> Ett anonymiserat användar-ID och köphändelser i appen från Apple.
                <br />
                <strong>Varför:</strong> För att validera din prenumeration, återställa köp och hantera provstatus.
                <br />
                <strong>Deras integritetspolicy:</strong> revenuecat.com/privacy
                <br />
                <strong>Obs:</strong> RevenueCat tar inte emot dina ekonomiska data eller e-postadress.
              </p>
            </SubSection>
            <SubSection title='Cloudflare R2 (Lagring av kvittobilder)'>
              <p>
                <strong>Vad de tar emot:</strong> Kvittobilder du laddar upp vid skanning av kvitton.
                <br />
                <strong>Varför:</strong> För att lagra kvittobilder kopplade till dina transaktioner.
                <br />
                <strong>Deras integritetspolicy:</strong> cloudflare.com/privacypolicy
              </p>
            </SubSection>
            <SubSection title='Apple App Store'>
              <p>
                <strong>Vad de tar emot:</strong> Köptransaktionsposter för prenumerationsvalidering.
                <br />
                <strong>Varför:</strong> Krävs för köp i appen på iOS.
                <br />
                <strong>Deras integritetspolicy:</strong> apple.com/legal/privacy
              </p>
            </SubSection>
            <p>
              Vi använder inte Google Analytics, Firebase Analytics, Mixpanel, Amplitude, Sentry eller någon beteendeanalystjänst.
            </p>
          </Section>

          <Section title='5. Datadelning'>
            <p>
              <strong>Vi säljer inte dina data.</strong>
              <br />
              <strong>Vi delar inte dina data med annonsörer.</strong>
              <br />
              <strong>Vi delar inte dina data med datamäklare.</strong>
            </p>
            <p>
              De enda omständigheterna under vilka dina data lämnar våra system:
            </p>
            <ol>
              <li>
                <strong>Infrastrukturleverantörer</strong> listade i Avsnitt 4 — strikt nödvändigt för att appen ska fungera
              </li>
              <li>
                <strong>Lagkrav</strong> — om vi tar emot en giltig domstolsorder eller rättslig process som kräver utlämnande kommer vi att meddela dig i den utsträckning lagen tillåter
              </li>
              <li>
                <strong>Kontoöverföring</strong> — om Spendler förvärvas skulle dina data överföras till den nya ägaren under samma integritetsåtaganden; du kommer att meddelas i förväg
              </li>
            </ol>
          </Section>

          <Section title='6. Aviseringar'>
            <p>
              Spendler skickar tre typer av aviseringar — alla är{' '}
              <strong>lokala enhetsaviseringar</strong> schemalagda på din enhet. Vi driver ingen push-aviseringsserver.
            </p>
            <ul>
              <li>
                <strong>Daglig påminnelse</strong> (kl. 20:00) — &quot;Glöm inte att spåra dagens utgifter!&quot;
              </li>
              <li>
                <strong>Veckorapport</strong> (söndag kl. 10:00) — &quot;Kolla hur din vecka gick!&quot;
              </li>
              <li>
                <strong>Påminnelser om återkommande betalningar</strong> — 1 dag innan en spårad prenumeration förnyas
              </li>
            </ul>
            <p>
              Alla aviseringar kan inaktiveras individuellt eller helt från Inställningar → Aviseringar. Att inaktivera aviseringar påverkar inte appens funktionalitet.
            </p>
          </Section>

          <Section title='7. Dina rättigheter och kontroller'>
            <SubSection title='Ta bort ditt konto'>
              <p>
                Inställningar → Ta bort konto tar permanent och oåterkalleligt bort:
              </p>
              <ul>
                <li>Alla transaktioner, konton, kategorier, budgetar, mål</li>
                <li>Alla återkommande betalningar, smarta regler och sparade skulder</li>
                <li>Alla användarinställningar och preferenser</li>
                <li>Din autentiseringspost och sessionstokens</li>
              </ul>
              <p>
                Den här borttagningen är fullständig. Vi behåller inte mjukt borttagna poster efter kontoborttagning.
              </p>
            </SubSection>
            <SubSection title='Åtkomst till dina data'>
              <p>
                Alla dina data är synliga för dig direkt i appen. Det finns inga dolda data vi håller om dig som du inte kan se.
              </p>
            </SubSection>
            <SubSection title='Dataexport'>
              <p>
                Vi erbjuder för närvarande inte en dataexportfunktion. Om du vill ha en kopia av dina data innan du tar bort ditt konto, vänligen e-posta support@spendler.app och vi tillhandahåller det i CSV-format inom 14 dagar.
              </p>
            </SubSection>
            <SubSection title='Rätta dina data'>
              <p>
                Du kan redigera eller ta bort valfri transaktion, konto, kategori, budget eller mål direkt i appen.
              </p>
            </SubSection>
            <SubSection title='Återkalla samtycke'>
              <p>
                Du kan ta bort ditt konto när som helst. Att ta bort ditt konto avslutar databehandling under den här policyn.
              </p>
            </SubSection>
          </Section>

          <Section title='8. Datalagring'>
            <ul>
              <li>
                <strong>Aktiva konton:</strong> Data behålls så länge ditt konto är aktivt
              </li>
              <li>
                <strong>Utgångna prenumerationer:</strong> Dina data behålls även efter att din prenumeration löper ut; du förlorar bara åtkomst till premiumfunktioner. Dina data tas inte bort vid utgång.
              </li>
              <li>
                <strong>Borttagna konton:</strong> All data tas permanent bort omedelbart vid kontoborttagning
              </li>
              <li>
                <strong>Kvittobilder:</strong> Tas bort när den associerade transaktionen tas bort eller när ditt konto tas bort
              </li>
            </ul>
          </Section>

          <Section title='9. Barns integritet'>
            <p>
              Spendler riktar sig inte till barn under 13 år. Vi samlar inte medvetet in data från någon under 13 år. Om du tror att ett barn har skapat ett konto, kontakta support@spendler.app och vi tar bort kontot omedelbart.
            </p>
          </Section>

          <Section title='10. Säkerhet'>
            <p>Vi skyddar dina data med:</p>
            <ul>
              <li>TLS-kryptering för all data under transport</li>
              <li>Kryptering i vila i Convex och Cloudflare R2</li>
              <li>Hårdvarubaserad SecureStore för enhetslokala känsliga data</li>
              <li>Användaromfångade databasfrågor (dina data är isolerade efter användar-ID)</li>
              <li>Inga tredjeparts analys- eller spårningsskript</li>
            </ul>
            <p>
              Inget system är helt säkert. Om du upptäcker en säkerhetssårbarhet, vänligen avslöja den ansvarsfullt till support@spendler.app.
            </p>
          </Section>

          <Section title='11. Ändringar av den här policyn'>
            <p>
              Om vi gör väsentliga ändringar i den här policyn kommer vi att meddela dig via ett meddelande i appen innan ändringarna träder i kraft. Fortsatt användning av appen efter ikraftträdandedatumet utgör godkännande av den uppdaterade policyn.
            </p>
          </Section>

          <Section title='12. Kontakt'>
            <p>Frågor om den här integritetspolicyn:</p>
            <div
              style={{
                backgroundColor: '#fff',
                border: '1px solid #f0f0f0',
                borderRadius: 14,
                padding: '20px 24px',
                marginTop: 12,
              }}
            >
              <p style={{ margin: 0, fontWeight: 600 }}>Spendler</p>
              <p style={{ margin: '6px 0 0', color: '#a3a3a3' }}>
                support@spendler.app
              </p>
              <p style={{ margin: '4px 0 0', fontSize: 13, color: '#a3a3a3' }}>
                Vi strävar efter att svara inom 5 arbetsdagar.
              </p>
            </div>
          </Section>
        </main>

        {/* FOOTER */}
        <footer
          style={{
            backgroundColor: '#fafafa',
            borderTop: '1px solid #f0f0f0',
            padding: '36px 24px',
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='/logo.png'
                  alt='Spendler logo'
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 6,
                    display: 'block',
                  }}
                />
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    color: '#000',
                  }}
                >
                  Spendler
                </span>
              </div>
              <p style={{ fontSize: 12, color: '#a3a3a3', margin: '4px 0 0' }}>
                © 2026 Spendler. Alla rättigheter förbehållna.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              <a
                href='/sv/privacy'
                style={{
                  fontSize: 13,
                  color: '#a3a3a3',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Integritet
              </a>
              <a
                href='/terms'
                style={{
                  fontSize: 13,
                  color: '#a3a3a3',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Villkor
              </a>
              <a
                href='/sv/support'
                style={{
                  fontSize: 13,
                  color: '#a3a3a3',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Support
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: '-0.02em',
          margin: '0 0 14px',
          color: '#000',
        }}
      >
        {title}
      </h2>
      <div style={{ fontSize: 15, lineHeight: 1.75, color: '#444' }}>
        {children}
      </div>
    </div>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <h3
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: '#000',
          margin: '0 0 6px',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}
