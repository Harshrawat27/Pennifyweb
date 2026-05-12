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
              Download App
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
              Juridisk
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
              Privatlivspolitik
            </h1>
            <p style={{ fontSize: 15, color: '#a3a3a3', margin: 0 }}>
              Sidst opdateret: 23. marts 2026
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
              Spendler er en app til privatøkonomi. Du betror os dine finansielle data — det tager vi alvorligt. Denne politik forklarer præcis, hvad vi indsamler, hvorfor vi indsamler det, hvor det opbevares, og hvad vi aldrig gør med det.
            </p>
            <p>
              Den korte version:{' '}
              <strong>
                dine finansielle data tilhører dig, vi sælger dem ikke, vi bruger dem ikke til reklame, og vi deler dem ikke med nogen undtagen de infrastrukturudbydere, der er nødvendige for at appen fungerer.
              </strong>
            </p>
          </div>

          <Section title='1. Hvad vi indsamler'>
            <SubSection title='Konto- og identitetsdata'>
              <p>Når du opretter en konto, indsamler vi:</p>
              <ul>
                <li>
                  <strong>E-mailadresse</strong> — bruges til at autentificere dig og kontakte dig, hvis du henvender dig for support
                </li>
                <li>
                  <strong>Navn</strong> — vises i appen; valgfrit
                </li>
                <li>
                  <strong>Profilbillede</strong> — valgfrit; hvis det angives, gemmes det på vores servere
                </li>
                <li>
                  <strong>Autentificeringstokens</strong> — opbevares sikkert på din enhed via iOS Secure Enclave (SecureStore); sendes aldrig til tredjeparter
                </li>
              </ul>
              <p>
                Vi indsamler ikke dit telefonnummer, fødselsdato, offentligt udstedt ID eller andre personligt identificerbare oplysninger.
              </p>
            </SubSection>
            <SubSection title='Finansielle data du indtaster'>
              <p>
                Alt hvad du tilføjer til Spendler gemmes på din konto på vores servere:
              </p>
              <ul>
                <li>
                  <strong>Transaktioner</strong> — titel, beløb, dato, noter, kategori, konto, bogmærkestatus
                </li>
                <li>
                  <strong>Kvitteringsbilleder</strong> — fotos du tager for at registrere kvitteringer; opbevaret på Cloudflare R2 (se Afsnit 4)
                </li>
                <li>
                  <strong>Konti</strong> — navne, typer (kontanter, bank, kreditkort, digital tegnebog) og saldi du indtaster manuelt
                </li>
                <li>
                  <strong>Kategorier</strong> — standard- og brugerdefinerede kategorier du opretter
                </li>
                <li>
                  <strong>Budgetter</strong> — månedlige forbrugsgrænser pr. kategori
                </li>
                <li>
                  <strong>Opsparingsmål</strong> — målnavne, målbeløb og sparede beløb
                </li>
                <li>
                  <strong>Tilbagevendende betalinger</strong> — abonnementsnavne, beløb, faktureringsdatoer og frekvenser
                </li>
                <li>
                  <strong>Personer og gæld</strong> — navne og beløb du sporer for delte udgifter
                </li>
              </ul>
              <p>
                Alle finansielle data <strong>indtastes manuelt af dig</strong>. Vi forbinder aldrig til din bank, læser dine SMS-beskeder eller tilgår nogen ekstern finanskonto.
              </p>
            </SubSection>
            <SubSection title='Præferencer og indstillinger'>
              <ul>
                <li>Din valgte valuta (fra 25+ understøttede valutaer)</li>
                <li>Notifikationspræferencer (daglig påmindelse til/fra, ugentlig rapport til/fra)</li>
                <li>Indkomstsporing til/fra</li>
                <li>Skjul saldo til/fra</li>
                <li>Abonnementsstatus (gratis prøveperiode, månedlig eller årlig)</li>
              </ul>
            </SubSection>
            <SubSection title='Enheds- og sessionsdata'>
              <ul>
                <li>
                  <strong>Enhedsidentifikatorer</strong> — bruges af RevenueCat til at knytte dit køb i appen til din konto
                </li>
                <li>
                  <strong>Sessionstokens</strong> — kortlivede tokens der holder dig logget ind; opbevaret i enhedens SecureStore
                </li>
                <li>
                  <strong>App-version</strong> — bruges til support og kompatibilitetsformål
                </li>
              </ul>
            </SubSection>
            <SubSection title='Hvad vi IKKE indsamler'>
              <ul>
                <li>Placeringsdata</li>
                <li>Kontakter</li>
                <li>Browserhistorik eller webaktivitet</li>
                <li>Data fra andre apps</li>
                <li>Præcis eller omtrentlig enhedsplacering</li>
                <li>Reklameidentifikatorer (IDFA/GAID)</li>
                <li>Tastetrykslogning eller adfærdsanalyse</li>
              </ul>
            </SubSection>
          </Section>

          <Section title='2. Hvorfor vi indsamler det'>
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Formål</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>E-mail og autentificeringstokens</td>
                  <td>Log ind, kontosikkerhed, supportanmodninger</td>
                </tr>
                <tr>
                  <td>Finansielle data</td>
                  <td>Appens kernefunktionalitet — visning af dit forbrug, budgetter og mål</td>
                </tr>
                <tr>
                  <td>Kvitteringsbilleder</td>
                  <td>Kvitteringsscanning og OCR-behandling</td>
                </tr>
                <tr>
                  <td>Notifikationspræferencer</td>
                  <td>Planlægning af lokale enhedsnotifikationer (ingen push-server — notifikationer kører udelukkende på din enhed)</td>
                </tr>
                <tr>
                  <td>Valutavalg</td>
                  <td>Formatering af alle beløb i din foretrukne valuta</td>
                </tr>
                <tr>
                  <td>Abonnementsstatus</td>
                  <td>Bestemmelse af adgang til premium-funktioner</td>
                </tr>
                <tr>
                  <td>RevenueCat-enheds-ID</td>
                  <td>Validering og gendannelse af dit køb i appen</td>
                </tr>
              </tbody>
            </table>
            <p>
              Vi bruger ikke dine data til reklame, profilering eller salg til datamæglere — nogensinde.
            </p>
          </Section>

          <Section title='3. Hvordan dine data opbevares'>
            <p>
              Alle dine data gemmes i <strong>Convex</strong>, en serverløs cloud-database. Data er krypteret under transmission (TLS) og i hvile. Dine data er logisk isoleret efter dit bruger-ID — ingen anden bruger kan tilgå dine data.
            </p>
            <p>
              Kvitteringsbilleder gemmes på <strong>Cloudflare R2</strong> objektlager, med adgang styret via vores backend. Billeder er ikke offentligt tilgængelige.
            </p>
            <p>
              Følsomme elementer (sessionstokens, abonnementscache) gemmes på din enhed i <strong>iOS SecureStore</strong>, som bruger enhedens Secure Enclave til hardwarebaseret kryptering.
            </p>
            <p>
              <strong>Offline-kø:</strong> Hvis du tilføjer en transaktion offline, gemmes den midlertidigt i enhedens lokale lager (AsyncStorage) og synkroniseres til skyen, når din forbindelse gendannes. Denne lokale kø ryddes, når synkroniseringen er fuldført.
            </p>
          </Section>

          <Section title='4. Tredjepartstjenester'>
            <p>
              Vi bruger et lille antal betroede tjenester til at drive appen. Her er hvad hver enkelt modtager:
            </p>
            <SubSection title='Convex (Database)'>
              <p>
                <strong>Hvad de modtager:</strong> Alle dine finansielle data, præferencer og kontooplysninger.
                <br />
                <strong>Hvorfor:</strong> Dette er vores backend — alle data lever her.
                <br />
                <strong>Deres privatlivspolitik:</strong> convex.dev/privacy
              </p>
            </SubSection>
            <SubSection title='Better Auth (Autentificering)'>
              <p>
                <strong>Hvad de modtager:</strong> Din e-mail, dit navn, profilbillede (hvis indstillet) og hashede legitimationsoplysninger.
                <br />
                <strong>Hvorfor:</strong> Håndterer sikker log ind og sessionsstyring.
              </p>
            </SubSection>
            <SubSection title='RevenueCat (Abonnementsstyring)'>
              <p>
                <strong>Hvad de modtager:</strong> Et anonymiseret bruger-ID og køb i app-begivenheder fra Apple.
                <br />
                <strong>Hvorfor:</strong> For at validere dit abonnement, gendanne køb og administrere prøvestatus.
                <br />
                <strong>Deres privatlivspolitik:</strong> revenuecat.com/privacy
                <br />
                <strong>Bemærk:</strong> RevenueCat modtager ikke dine finansielle data eller e-mailadresse.
              </p>
            </SubSection>
            <SubSection title='Cloudflare R2 (Kvitteringsbilledlager)'>
              <p>
                <strong>Hvad de modtager:</strong> Kvitteringsbilleder du uploader ved scanning af kvitteringer.
                <br />
                <strong>Hvorfor:</strong> For at gemme kvitteringsbilleder knyttet til dine transaktioner.
                <br />
                <strong>Deres privatlivspolitik:</strong> cloudflare.com/privacypolicy
              </p>
            </SubSection>
            <SubSection title='Apple App Store'>
              <p>
                <strong>Hvad de modtager:</strong> Købstransaktionsposter til abonnementsvalidering.
                <br />
                <strong>Hvorfor:</strong> Krævet til køb i appen på iOS.
                <br />
                <strong>Deres privatlivspolitik:</strong> apple.com/legal/privacy
              </p>
            </SubSection>
            <p>
              Vi bruger ikke Google Analytics, Firebase Analytics, Mixpanel, Amplitude, Sentry eller nogen adfærdsanalysetjeneste.
            </p>
          </Section>

          <Section title='5. Datadeling'>
            <p>
              <strong>Vi sælger ikke dine data.</strong>
              <br />
              <strong>Vi deler ikke dine data med annoncører.</strong>
              <br />
              <strong>Vi deler ikke dine data med datamæglere.</strong>
            </p>
            <p>
              De eneste omstændigheder, hvorunder dine data forlader vores systemer:
            </p>
            <ol>
              <li>
                <strong>Infrastrukturudbydere</strong> angivet i Afsnit 4 — strengt nødvendigt for at appen fungerer
              </li>
              <li>
                <strong>Lovkrav</strong> — hvis vi modtager en gyldig retsordre eller juridisk proces, der kræver offentliggørelse, vil vi underrette dig i det omfang, loven tillader det
              </li>
              <li>
                <strong>Kontoovertagersel</strong> — hvis Spendler overtages, ville dine data overføres til den nye ejer under de samme privatlivsforpligtelser; du vil blive underrettet på forhånd
              </li>
            </ol>
          </Section>

          <Section title='6. Notifikationer'>
            <p>
              Spendler sender tre typer notifikationer — alle er{' '}
              <strong>lokale enhedsnotifikationer</strong> planlagt på din enhed. Vi driver ikke en push-notifikationsserver.
            </p>
            <ul>
              <li>
                <strong>Daglig påmindelse</strong> (kl. 20:00) — &quot;Husk at registrere dagens forbrug!&quot;
              </li>
              <li>
                <strong>Ugentlig rapport</strong> (søndag kl. 10:00) — &quot;Se hvordan din uge gik!&quot;
              </li>
              <li>
                <strong>Påmindelser om tilbagevendende betalinger</strong> — 1 dag før et sporet abonnement fornyes
              </li>
            </ul>
            <p>
              Alle notifikationer kan deaktiveres individuelt eller fuldstændigt fra Indstillinger → Notifikationer. Deaktivering af notifikationer påvirker ikke nogen appfunktionalitet.
            </p>
          </Section>

          <Section title='7. Dine rettigheder og kontroller'>
            <SubSection title='Slet din konto'>
              <p>
                Indstillinger → Slet konto sletter permanent og uigenkaldeligt:
              </p>
              <ul>
                <li>Alle transaktioner, konti, kategorier, budgetter, mål</li>
                <li>Alle tilbagevendende betalinger, smarte regler og gemte gæld</li>
                <li>Alle brugerpræferencer og indstillinger</li>
                <li>Din autentificeringspost og sessionstokens</li>
              </ul>
              <p>
                Denne sletning er fuldstændig. Vi beholder ikke blødt slettede poster efter kontosletning.
              </p>
            </SubSection>
            <SubSection title='Adgang til dine data'>
              <p>
                Alle dine data er synlige for dig direkte i appen. Der er ingen skjulte data, vi har om dig, som du ikke kan se.
              </p>
            </SubSection>
            <SubSection title='Dataeksport'>
              <p>
                Vi tilbyder i øjeblikket ikke en dataeksportfunktion. Hvis du ønsker en kopi af dine data, inden du sletter din konto, bedes du sende en e-mail til support@spendler.app, og vi vil levere dem i CSV-format inden for 14 dage.
              </p>
            </SubSection>
            <SubSection title='Ret dine data'>
              <p>
                Du kan redigere eller slette enhver transaktion, konto, kategori, budget eller mål direkte fra appen.
              </p>
            </SubSection>
            <SubSection title='Tilbagekald samtykke'>
              <p>
                Du kan slette din konto til enhver tid. Sletning af din konto afslutter databehandlingen under denne politik.
              </p>
            </SubSection>
          </Section>

          <Section title='8. Dataopbevaring'>
            <ul>
              <li>
                <strong>Aktive konti:</strong> Data opbevares, så længe din konto er aktiv
              </li>
              <li>
                <strong>Udløbne abonnementer:</strong> Dine data opbevares, selv efter dit abonnement udløber; du mister blot adgangen til premium-funktioner. Dine data slettes ikke ved udløb.
              </li>
              <li>
                <strong>Slettede konti:</strong> Alle data slettes permanent øjeblikkeligt ved kontosletning
              </li>
              <li>
                <strong>Kvitteringsbilleder:</strong> Slettes, når den tilknyttede transaktion slettes, eller når din konto slettes
              </li>
            </ul>
          </Section>

          <Section title='9. Børns privatliv'>
            <p>
              Spendler er ikke rettet mod børn under 13 år. Vi indsamler ikke bevidst data fra nogen under 13 år. Hvis du mener, at et barn har oprettet en konto, bedes du kontakte support@spendler.app, og vi vil slette kontoen øjeblikkeligt.
            </p>
          </Section>

          <Section title='10. Sikkerhed'>
            <p>Vi beskytter dine data med:</p>
            <ul>
              <li>TLS-kryptering for alle data under transmission</li>
              <li>Kryptering i hvile i Convex og Cloudflare R2</li>
              <li>Hardwarebaseret SecureStore til enhedslokale følsomme data</li>
              <li>Brugerspecificerede databaseforespørgsler (dine data er isoleret efter bruger-ID)</li>
              <li>Ingen tredjeparts analyse- eller sporingsskripts</li>
            </ul>
            <p>
              Intet system er perfekt sikkert. Hvis du opdager en sikkerhedssårbarhed, bedes du offentliggøre den ansvarligt til support@spendler.app.
            </p>
          </Section>

          <Section title='11. Ændringer af denne politik'>
            <p>
              Hvis vi foretager væsentlige ændringer af denne politik, vil vi underrette dig via en meddelelse i appen, inden ændringerne træder i kraft. Fortsat brug af appen efter ikrafttrædelsesdatoen udgør accept af den opdaterede politik.
            </p>
          </Section>

          <Section title='12. Kontakt'>
            <p>Spørgsmål om denne privatlivspolitik:</p>
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
                Vi sigter mod at svare inden for 5 hverdage.
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
                © 2026 Spendler. Alle rettigheder forbeholdes.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              <a
                href='/da/privacy'
                style={{
                  fontSize: 13,
                  color: '#a3a3a3',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Privatliv
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
                Vilkår
              </a>
              <a
                href='/da/support'
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
