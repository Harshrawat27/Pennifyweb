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
              App downloaden
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
              Juridisch
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
              Privacybeleid
            </h1>
            <p style={{ fontSize: 15, color: '#a3a3a3', margin: 0 }}>
              Laatst bijgewerkt: 23 maart 2026
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
              Spendler is een persoonlijke financiën-app. Je vertrouwt ons je financiële gegevens toe — dat nemen we serieus. Dit beleid legt precies uit wat we verzamelen, waarom we het verzamelen, waar het is opgeslagen en wat we er nooit mee doen.
            </p>
            <p>
              De korte versie:{' '}
              <strong>
                je financiële gegevens zijn van jou, we verkopen ze niet, we gebruiken ze niet voor advertenties en we delen ze niet met iemand anders dan de infrastructuurproviders die nodig zijn om de app te laten werken.
              </strong>
            </p>
          </div>

          <Section title='1. Wat we verzamelen'>
            <SubSection title='Account- en identiteitsgegevens'>
              <p>Wanneer je een account aanmaakt, verzamelen we:</p>
              <ul>
                <li>
                  <strong>E-mailadres</strong> — gebruikt om je te authenticeren en contact met je op te nemen als je support aanvraagt
                </li>
                <li>
                  <strong>Naam</strong> — weergegeven in de app; optioneel
                </li>
                <li>
                  <strong>Profielfoto</strong> — optioneel; indien opgegeven, opgeslagen op onze servers
                </li>
                <li>
                  <strong>Authenticatietokens</strong> — veilig opgeslagen op je apparaat via iOS Secure Enclave (SecureStore); nooit naar derden verzonden
                </li>
              </ul>
              <p>
                We verzamelen je telefoonnummer, geboortedatum, overheids-ID of andere persoonlijk identificerende informatie niet.
              </p>
            </SubSection>
            <SubSection title='Financiële gegevens die je invoert'>
              <p>
                Alles wat je toevoegt aan Spendler wordt opgeslagen onder je account op onze servers:
              </p>
              <ul>
                <li>
                  <strong>Transacties</strong> — titel, bedrag, datum, notities, categorie, rekening, bladwijzerstatus
                </li>
                <li>
                  <strong>Bonafbeeldingen</strong> — foto&apos;s die je neemt om bonnen te registreren; opgeslagen op Cloudflare R2 (zie Sectie 4)
                </li>
                <li>
                  <strong>Rekeningen</strong> — namen, typen (contant, bank, creditcard, digitale portemonnee) en saldi die je handmatig invoert
                </li>
                <li>
                  <strong>Categorieën</strong> — standaard- en aangepaste categorieën die je aanmaakt
                </li>
                <li>
                  <strong>Budgetten</strong> — maandelijkse bestedingslimieten per categorie
                </li>
                <li>
                  <strong>Spaardoelen</strong> — doelnamen, doelbedragen en gespaarde bedragen
                </li>
                <li>
                  <strong>Terugkerende betalingen</strong> — abonnementsnamen, bedragen, factureringsdatums en frequenties
                </li>
                <li>
                  <strong>Personen en schulden</strong> — namen en bedragen die je bijhoudt voor gedeelde uitgaven
                </li>
              </ul>
              <p>
                Alle financiële gegevens worden <strong>handmatig door jou ingevoerd</strong>. We maken nooit verbinding met je bank, lezen je sms-berichten of hebben toegang tot externe financiële accounts.
              </p>
            </SubSection>
            <SubSection title='Voorkeuren en instellingen'>
              <ul>
                <li>Je geselecteerde valuta (uit 25+ ondersteunde valuta&apos;s)</li>
                <li>Meldingsvoorkeuren (dagelijkse herinnering aan/uit, wekelijks rapport aan/uit)</li>
                <li>Schakelaar voor het bijhouden van inkomsten</li>
                <li>Saldo verbergen-schakelaar</li>
                <li>Abonnementsstatus (gratis proefperiode, maandelijks of jaarlijks)</li>
              </ul>
            </SubSection>
            <SubSection title='Apparaat- en sessiegegevens'>
              <ul>
                <li>
                  <strong>Apparaatidentificatoren</strong> — gebruikt door RevenueCat om je in-app aankoop te koppelen aan je account
                </li>
                <li>
                  <strong>Sessietokens</strong> — kortlevende tokens die je ingelogd houden; opgeslagen in apparaat SecureStore
                </li>
                <li>
                  <strong>App-versie</strong> — gebruikt voor support en compatibiliteitsdoeleinden
                </li>
              </ul>
            </SubSection>
            <SubSection title='Wat we NIET verzamelen'>
              <ul>
                <li>Locatiegegevens</li>
                <li>Contacten</li>
                <li>Browsergeschiedenis of webactiviteit</li>
                <li>Gegevens van andere apps</li>
                <li>Exacte of globale apparaatlocatie</li>
                <li>Reclame-identificatoren (IDFA/GAID)</li>
                <li>Toetsaanslagregistratie of gedragsanalyse</li>
              </ul>
            </SubSection>
          </Section>

          <Section title='2. Waarom we het verzamelen'>
            <table>
              <thead>
                <tr>
                  <th>Gegevens</th>
                  <th>Doel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>E-mail en authenticatietokens</td>
                  <td>Inloggen, accountbeveiliging, supportverzoeken</td>
                </tr>
                <tr>
                  <td>Financiële gegevens</td>
                  <td>Kernfunctionaliteit van de app — weergave van je uitgaven, budgetten en doelen</td>
                </tr>
                <tr>
                  <td>Bonafbeeldingen</td>
                  <td>Bonnenscanning en OCR-verwerking</td>
                </tr>
                <tr>
                  <td>Meldingsvoorkeuren</td>
                  <td>Plannen van lokale apparaatmeldingen (geen push-server — meldingen draaien volledig op je apparaat)</td>
                </tr>
                <tr>
                  <td>Valutaselectie</td>
                  <td>Alle bedragen opmaken in je voorkeursvaluta</td>
                </tr>
                <tr>
                  <td>Abonnementsstatus</td>
                  <td>Toegang tot premiumfuncties bepalen</td>
                </tr>
                <tr>
                  <td>RevenueCat-apparaat-ID</td>
                  <td>Je in-app aankoop valideren en herstellen</td>
                </tr>
              </tbody>
            </table>
            <p>
              We gebruiken je gegevens niet voor advertenties, profilering of verkoop aan gegevensmakelaars — nooit.
            </p>
          </Section>

          <Section title='3. Hoe je gegevens worden opgeslagen'>
            <p>
              Al je gegevens worden opgeslagen in <strong>Convex</strong>, een serverloze clouddatabase. Gegevens zijn versleuteld tijdens overdracht (TLS) en in rust. Je gegevens zijn logisch geïsoleerd op basis van je gebruikers-ID — geen andere gebruiker kan je gegevens inzien.
            </p>
            <p>
              Bonafbeeldingen worden opgeslagen op <strong>Cloudflare R2</strong> objectopslag, met toegang beheerd via onze backend. Afbeeldingen zijn niet publiekelijk toegankelijk.
            </p>
            <p>
              Gevoelige items (sessietokens, abonnementscache) worden opgeslagen op je apparaat in <strong>iOS SecureStore</strong>, dat de apparaat Secure Enclave gebruikt voor hardware-ondersteunde versleuteling.
            </p>
            <p>
              <strong>Offline wachtrij:</strong> Als je een transactie toevoegt terwijl je offline bent, wordt deze tijdelijk opgeslagen in lokale apparaatopslag (AsyncStorage) en gesynchroniseerd naar de cloud wanneer je verbinding wordt hersteld. Deze lokale wachtrij wordt gewist zodra de synchronisatie is voltooid.
            </p>
          </Section>

          <Section title='4. Diensten van derden'>
            <p>
              We gebruiken een klein aantal vertrouwde diensten om de app te beheren. Dit is wat elk ontvangt:
            </p>
            <SubSection title='Convex (Database)'>
              <p>
                <strong>Wat ze ontvangen:</strong> Al je financiële gegevens, voorkeuren en accountinformatie.
                <br />
                <strong>Waarom:</strong> Dit is onze backend — alle gegevens leven hier.
                <br />
                <strong>Hun privacybeleid:</strong> convex.dev/privacy
              </p>
            </SubSection>
            <SubSection title='Better Auth (Authenticatie)'>
              <p>
                <strong>Wat ze ontvangen:</strong> Je e-mail, naam, profielfoto (indien ingesteld) en gehashte referenties.
                <br />
                <strong>Waarom:</strong> Verwerkt veilig inloggen en sessiebeheer.
              </p>
            </SubSection>
            <SubSection title='RevenueCat (Abonnementsbeheer)'>
              <p>
                <strong>Wat ze ontvangen:</strong> Een geanonimiseerd gebruikers-ID en in-app aankoopgebeurtenissen van Apple.
                <br />
                <strong>Waarom:</strong> Om je abonnement te valideren, aankopen te herstellen en de proefstatus te beheren.
                <br />
                <strong>Hun privacybeleid:</strong> revenuecat.com/privacy
                <br />
                <strong>Opmerking:</strong> RevenueCat ontvangt je financiële gegevens of e-mailadres niet.
              </p>
            </SubSection>
            <SubSection title='Cloudflare R2 (Opslag van bonafbeeldingen)'>
              <p>
                <strong>Wat ze ontvangen:</strong> Bonafbeeldingen die je uploadt bij het scannen van bonnen.
                <br />
                <strong>Waarom:</strong> Om bonafbeeldingen op te slaan die zijn gekoppeld aan je transacties.
                <br />
                <strong>Hun privacybeleid:</strong> cloudflare.com/privacypolicy
              </p>
            </SubSection>
            <SubSection title='Apple App Store'>
              <p>
                <strong>Wat ze ontvangen:</strong> Aankooptransactierecords voor abonnementsvalidatie.
                <br />
                <strong>Waarom:</strong> Vereist voor in-app aankopen op iOS.
                <br />
                <strong>Hun privacybeleid:</strong> apple.com/legal/privacy
              </p>
            </SubSection>
            <p>
              We gebruiken geen Google Analytics, Firebase Analytics, Mixpanel, Amplitude, Sentry of enige gedragsanalysedienst.
            </p>
          </Section>

          <Section title='5. Gegevens delen'>
            <p>
              <strong>We verkopen je gegevens niet.</strong>
              <br />
              <strong>We delen je gegevens niet met adverteerders.</strong>
              <br />
              <strong>We delen je gegevens niet met gegevensmakelaars.</strong>
            </p>
            <p>
              De enige omstandigheden waaronder je gegevens onze systemen verlaten:
            </p>
            <ol>
              <li>
                <strong>Infrastructuurproviders</strong> vermeld in Sectie 4 — strikt noodzakelijk voor de werking van de app
              </li>
              <li>
                <strong>Wettelijke vereiste</strong> — als we een geldige gerechtelijke beschikking of juridisch proces ontvangen dat openbaarmaking vereist, informeren we je voor zover de wet dit toestaat
              </li>
              <li>
                <strong>Accountoverdracht</strong> — als Spendler wordt overgenomen, zouden je gegevens worden overgedragen aan de nieuwe eigenaar onder dezelfde privacyverplichtingen; je wordt vooraf op de hoogte gesteld
              </li>
            </ol>
          </Section>

          <Section title='6. Meldingen'>
            <p>
              Spendler stuurt drie soorten meldingen — allemaal{' '}
              <strong>lokale apparaatmeldingen</strong> gepland op je apparaat. We beheren geen push-notificatieserver.
            </p>
            <ul>
              <li>
                <strong>Dagelijkse herinnering</strong> (20:00) — &quot;Vergeet niet de uitgaven van vandaag bij te houden!&quot;
              </li>
              <li>
                <strong>Wekelijks rapport</strong> (zondag 10:00) — &quot;Bekijk hoe je week verliep!&quot;
              </li>
              <li>
                <strong>Herinneringen voor terugkerende betalingen</strong> — 1 dag voor een bijgehouden abonnement verlengt
              </li>
            </ul>
            <p>
              Alle meldingen kunnen individueel of volledig worden uitgeschakeld via Instellingen → Meldingen. Het uitschakelen van meldingen heeft geen invloed op de app-functionaliteit.
            </p>
          </Section>

          <Section title='7. Je rechten en controles'>
            <SubSection title='Je account verwijderen'>
              <p>
                Instellingen → Account verwijderen verwijdert permanent en onomkeerbaar:
              </p>
              <ul>
                <li>Alle transacties, rekeningen, categorieën, budgetten, doelen</li>
                <li>Alle terugkerende betalingen, slimme regels en opgeslagen schulden</li>
                <li>Alle gebruikersvoorkeuren en -instellingen</li>
                <li>Je authenticatierecord en sessietokens</li>
              </ul>
              <p>
                Deze verwijdering is volledig. We bewaren geen zacht verwijderde records na accountverwijdering.
              </p>
            </SubSection>
            <SubSection title='Toegang tot je gegevens'>
              <p>
                Al je gegevens zijn direct zichtbaar voor je in de app. Er zijn geen verborgen gegevens die we over je hebben die je niet kunt zien.
              </p>
            </SubSection>
            <SubSection title='Gegevensexport'>
              <p>
                We bieden momenteel geen gegevensexportfunctie aan. Als je een kopie van je gegevens wilt voordat je je account verwijdert, stuur dan een e-mail naar support@spendler.app en we leveren deze binnen 14 dagen in CSV-formaat.
              </p>
            </SubSection>
            <SubSection title='Je gegevens corrigeren'>
              <p>
                Je kunt elke transactie, rekening, categorie, budget of doel rechtstreeks vanuit de app bewerken of verwijderen.
              </p>
            </SubSection>
            <SubSection title='Toestemming intrekken'>
              <p>
                Je kunt je account op elk moment verwijderen. Het verwijderen van je account beëindigt de gegevensverwerking onder dit beleid.
              </p>
            </SubSection>
          </Section>

          <Section title='8. Gegevensbewaring'>
            <ul>
              <li>
                <strong>Actieve accounts:</strong> Gegevens worden bewaard zolang je account actief is
              </li>
              <li>
                <strong>Verlopen abonnementen:</strong> Je gegevens worden bewaard ook nadat je abonnement verloopt; je verliest alleen toegang tot premiumfuncties. Je gegevens worden niet verwijderd bij verlopen.
              </li>
              <li>
                <strong>Verwijderde accounts:</strong> Alle gegevens worden onmiddellijk permanent verwijderd bij accountverwijdering
              </li>
              <li>
                <strong>Bonafbeeldingen:</strong> Verwijderd wanneer de bijbehorende transactie wordt verwijderd of wanneer je account wordt verwijderd
              </li>
            </ul>
          </Section>

          <Section title='9. Privacy van kinderen'>
            <p>
              Spendler is niet gericht op kinderen onder de 13 jaar. We verzamelen niet bewust gegevens van iemand onder de 13 jaar. Als je denkt dat een kind een account heeft aangemaakt, neem dan contact op met support@spendler.app en we verwijderen het account onmiddellijk.
            </p>
          </Section>

          <Section title='10. Beveiliging'>
            <p>We beschermen je gegevens met:</p>
            <ul>
              <li>TLS-versleuteling voor alle gegevens tijdens overdracht</li>
              <li>Versleuteling in rust in Convex en Cloudflare R2</li>
              <li>Hardware-ondersteunde SecureStore voor apparaatlokale gevoelige gegevens</li>
              <li>Gebruikersbereikbare databasequeries (je gegevens zijn geïsoleerd op gebruikers-ID)</li>
              <li>Geen analyse- of trackingscripts van derden</li>
            </ul>
            <p>
              Geen enkel systeem is perfect beveiligd. Als je een beveiligingslek ontdekt, maak dit dan verantwoord bekend aan support@spendler.app.
            </p>
          </Section>

          <Section title='11. Wijzigingen in dit beleid'>
            <p>
              Als we materiële wijzigingen aanbrengen in dit beleid, informeren we je via een aankondiging in de app voordat de wijzigingen van kracht worden. Voortgezet gebruik van de app na de ingangsdatum vormt acceptatie van het bijgewerkte beleid.
            </p>
          </Section>

          <Section title='12. Contact'>
            <p>Vragen over dit privacybeleid:</p>
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
                We streven ernaar binnen 5 werkdagen te reageren.
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
                © 2026 Spendler. Alle rechten voorbehouden.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              <a
                href='/nl/privacy'
                style={{
                  fontSize: 13,
                  color: '#a3a3a3',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Privacy
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
                Voorwaarden
              </a>
              <a
                href='/nl/support'
                style={{
                  fontSize: 13,
                  color: '#a3a3a3',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Ondersteuning
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
