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
              Descargar App
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
              Legal
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
              Política de Privacidad
            </h1>
            <p style={{ fontSize: 15, color: '#a3a3a3', margin: 0 }}>
              Última actualización: 23 de marzo de 2026
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
              Spendler es una aplicación de finanzas personales. Confías en nosotros tus datos financieros — nos tomamos eso muy en serio. Esta política explica exactamente qué recopilamos, por qué lo recopilamos, dónde se almacena y qué nunca hacemos con él.
            </p>
            <p>
              La versión corta:{' '}
              <strong>
                tus datos financieros son tuyos, no los vendemos, no los usamos para publicidad y no los compartimos con nadie excepto los proveedores de infraestructura necesarios para que la aplicación funcione.
              </strong>
            </p>
          </div>

          <Section title='1. Lo que recopilamos'>
            <SubSection title='Datos de cuenta e identidad'>
              <p>Cuando creas una cuenta, recopilamos:</p>
              <ul>
                <li>
                  <strong>Correo electrónico</strong> — usado para autenticarte y contactarte si solicitas soporte
                </li>
                <li>
                  <strong>Nombre</strong> — mostrado en la app; opcional
                </li>
                <li>
                  <strong>Foto de perfil</strong> — opcional; si se proporciona, se almacena en nuestros servidores
                </li>
                <li>
                  <strong>Tokens de autenticación</strong> — almacenados de forma segura en tu dispositivo a través de iOS Secure Enclave (SecureStore); nunca se envían a terceros
                </li>
              </ul>
              <p>
                No recopilamos tu número de teléfono, fecha de nacimiento, documento de identidad ni ninguna otra información de identificación personal.
              </p>
            </SubSection>
            <SubSection title='Datos financieros que introduces'>
              <p>
                Todo lo que agregas a Spendler se almacena en tu cuenta en nuestros servidores:
              </p>
              <ul>
                <li>
                  <strong>Transacciones</strong> — título, monto, fecha, notas, categoría, cuenta, estado de marcador
                </li>
                <li>
                  <strong>Imágenes de recibos</strong> — fotos que tomas para registrar recibos; almacenadas en Cloudflare R2 (ver Sección 4)
                </li>
                <li>
                  <strong>Cuentas</strong> — nombres, tipos (efectivo, banco, tarjeta de crédito, billetera digital) y saldos que introduces manualmente
                </li>
                <li>
                  <strong>Categorías</strong> — categorías predeterminadas y personalizadas que creas
                </li>
                <li>
                  <strong>Presupuestos</strong> — límites de gasto mensuales por categoría
                </li>
                <li>
                  <strong>Metas de ahorro</strong> — nombres de metas, montos objetivo y montos ahorrados
                </li>
                <li>
                  <strong>Pagos recurrentes</strong> — nombres de suscripciones, montos, fechas de facturación y frecuencias
                </li>
                <li>
                  <strong>Personas y deudas</strong> — nombres y montos que rastreas para gastos compartidos
                </li>
              </ul>
              <p>
                Todos los datos financieros son <strong>introducidos manualmente por ti</strong>. Nunca nos conectamos a tu banco, leemos tus mensajes SMS ni accedemos a ninguna cuenta financiera externa.
              </p>
            </SubSection>
            <SubSection title='Preferencias y ajustes'>
              <ul>
                <li>Tu moneda seleccionada (de más de 25 monedas compatibles)</li>
                <li>Preferencias de notificación (recordatorio diario activado/desactivado, informe semanal activado/desactivado)</li>
                <li>Opción de seguimiento de ingresos</li>
                <li>Opción de ocultar saldo</li>
                <li>Estado de suscripción (prueba gratuita, mensual o anual)</li>
              </ul>
            </SubSection>
            <SubSection title='Datos del dispositivo y sesión'>
              <ul>
                <li>
                  <strong>Identificadores del dispositivo</strong> — usados por RevenueCat para asociar tu compra en la app con tu cuenta
                </li>
                <li>
                  <strong>Tokens de sesión</strong> — tokens de corta duración que te mantienen conectado; almacenados en SecureStore del dispositivo
                </li>
                <li>
                  <strong>Versión de la app</strong> — usada para soporte y compatibilidad
                </li>
              </ul>
            </SubSection>
            <SubSection title='Lo que NO recopilamos'>
              <ul>
                <li>Datos de ubicación</li>
                <li>Contactos</li>
                <li>Historial del navegador o actividad web</li>
                <li>Datos de otras apps</li>
                <li>Ubicación precisa o aproximada del dispositivo</li>
                <li>Identificadores publicitarios (IDFA/GAID)</li>
                <li>Registro de teclas o análisis de comportamiento</li>
              </ul>
            </SubSection>
          </Section>

          <Section title='2. Por qué lo recopilamos'>
            <table>
              <thead>
                <tr>
                  <th>Datos</th>
                  <th>Propósito</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Correo electrónico y tokens de autenticación</td>
                  <td>Inicio de sesión, seguridad de cuenta, solicitudes de soporte</td>
                </tr>
                <tr>
                  <td>Datos financieros</td>
                  <td>Funcionalidad principal de la app — mostrarte tus gastos, presupuestos y metas</td>
                </tr>
                <tr>
                  <td>Imágenes de recibos</td>
                  <td>Escaneo de recibos y procesamiento OCR</td>
                </tr>
                <tr>
                  <td>Preferencias de notificación</td>
                  <td>Programar notificaciones locales del dispositivo (sin servidor push — las notificaciones se ejecutan completamente en tu dispositivo)</td>
                </tr>
                <tr>
                  <td>Selección de moneda</td>
                  <td>Formatear todos los montos en tu moneda preferida</td>
                </tr>
                <tr>
                  <td>Estado de suscripción</td>
                  <td>Determinar acceso a funciones premium</td>
                </tr>
                <tr>
                  <td>ID de dispositivo de RevenueCat</td>
                  <td>Validar y restaurar tu compra en la app</td>
                </tr>
              </tbody>
            </table>
            <p>
              No usamos tus datos para publicidad, elaboración de perfiles ni venta a intermediarios de datos — nunca.
            </p>
          </Section>

          <Section title='3. Cómo se almacenan tus datos'>
            <p>
              Todos tus datos se almacenan en <strong>Convex</strong>, una base de datos en la nube sin servidor. Los datos están cifrados en tránsito (TLS) y en reposo. Tus datos están aislados lógicamente por tu ID de usuario — ningún otro usuario puede acceder a tus datos.
            </p>
            <p>
              Las imágenes de recibos se almacenan en <strong>Cloudflare R2</strong>, con acceso controlado a través de nuestro backend. Las imágenes no son accesibles públicamente.
            </p>
            <p>
              Los elementos sensibles (tokens de sesión, caché de suscripción) se almacenan en tu dispositivo en <strong>iOS SecureStore</strong>, que usa el Secure Enclave del dispositivo para cifrado respaldado por hardware.
            </p>
            <p>
              <strong>Cola sin conexión:</strong> Si agregas una transacción sin conexión, se almacena temporalmente en el almacenamiento local del dispositivo (AsyncStorage) y se sincroniza con la nube cuando se restaura la conexión. Esta cola local se borra una vez completada la sincronización.
            </p>
          </Section>

          <Section title='4. Servicios de terceros'>
            <p>
              Usamos un pequeño número de servicios confiables para operar la app. Esto es lo que recibe cada uno:
            </p>
            <SubSection title='Convex (Base de datos)'>
              <p>
                <strong>Qué reciben:</strong> Todos tus datos financieros, preferencias e información de cuenta.
                <br />
                <strong>Por qué:</strong> Este es nuestro backend — todos los datos viven aquí.
                <br />
                <strong>Su política de privacidad:</strong> convex.dev/privacy
              </p>
            </SubSection>
            <SubSection title='Better Auth (Autenticación)'>
              <p>
                <strong>Qué reciben:</strong> Tu correo electrónico, nombre, foto de perfil (si está configurada) y credenciales encriptadas.
                <br />
                <strong>Por qué:</strong> Gestiona el inicio de sesión seguro y la gestión de sesiones.
              </p>
            </SubSection>
            <SubSection title='RevenueCat (Gestión de suscripciones)'>
              <p>
                <strong>Qué reciben:</strong> Un ID de usuario anonimizado y eventos de compra en la app de Apple.
                <br />
                <strong>Por qué:</strong> Para validar tu suscripción, restaurar compras y gestionar el estado de prueba.
                <br />
                <strong>Su política de privacidad:</strong> revenuecat.com/privacy
                <br />
                <strong>Nota:</strong> RevenueCat no recibe tus datos financieros ni tu dirección de correo electrónico.
              </p>
            </SubSection>
            <SubSection title='Cloudflare R2 (Almacenamiento de imágenes de recibos)'>
              <p>
                <strong>Qué reciben:</strong> Imágenes de recibos que subes al escanear recibos.
                <br />
                <strong>Por qué:</strong> Para almacenar fotos de recibos adjuntas a tus transacciones.
                <br />
                <strong>Su política de privacidad:</strong> cloudflare.com/privacypolicy
              </p>
            </SubSection>
            <SubSection title='Apple App Store'>
              <p>
                <strong>Qué reciben:</strong> Registros de transacciones de compra para validación de suscripción.
                <br />
                <strong>Por qué:</strong> Requerido para compras en la app en iOS.
                <br />
                <strong>Su política de privacidad:</strong> apple.com/legal/privacy
              </p>
            </SubSection>
            <p>
              No usamos Google Analytics, Firebase Analytics, Mixpanel, Amplitude, Sentry ni ningún servicio de análisis de comportamiento.
            </p>
          </Section>

          <Section title='5. Compartir datos'>
            <p>
              <strong>No vendemos tus datos.</strong>
              <br />
              <strong>No compartimos tus datos con anunciantes.</strong>
              <br />
              <strong>No compartimos tus datos con intermediarios de datos.</strong>
            </p>
            <p>
              Las únicas circunstancias en las que tus datos salen de nuestros sistemas:
            </p>
            <ol>
              <li>
                <strong>Proveedores de infraestructura</strong> listados en la Sección 4 — estrictamente necesarios para que la app funcione
              </li>
              <li>
                <strong>Requisito legal</strong> — si recibimos una orden judicial válida o proceso legal que requiera divulgación, te notificaremos en la medida permitida por la ley
              </li>
              <li>
                <strong>Transferencia de cuenta</strong> — si Spendler es adquirido, tus datos se transferirían al nuevo propietario bajo los mismos compromisos de privacidad; se te notificará con anticipación
              </li>
            </ol>
          </Section>

          <Section title='6. Notificaciones'>
            <p>
              Spendler envía tres tipos de notificaciones — todas son{' '}
              <strong>notificaciones locales del dispositivo</strong> programadas en tu dispositivo. No operamos un servidor de notificaciones push.
            </p>
            <ul>
              <li>
                <strong>Recordatorio diario</strong> (8:00 PM) — &quot;¡No olvides registrar los gastos de hoy!&quot;
              </li>
              <li>
                <strong>Informe semanal</strong> (domingo 10:00 AM) — &quot;¡Comprueba cómo fue tu semana!&quot;
              </li>
              <li>
                <strong>Recordatorios de pagos recurrentes</strong> — 1 día antes de que se renueve una suscripción rastreada
              </li>
            </ul>
            <p>
              Todas las notificaciones se pueden desactivar individualmente o completamente desde Configuración → Notificaciones. Desactivar las notificaciones no afecta ninguna funcionalidad de la app.
            </p>
          </Section>

          <Section title='7. Tus derechos y controles'>
            <SubSection title='Eliminar tu cuenta'>
              <p>
                Configuración → Eliminar cuenta elimina permanente e irreversiblemente:
              </p>
              <ul>
                <li>Todas las transacciones, cuentas, categorías, presupuestos, metas</li>
                <li>Todos los pagos recurrentes, reglas inteligentes y deudas guardadas</li>
                <li>Todas las preferencias y ajustes de usuario</li>
                <li>Tu registro de autenticación y tokens de sesión</li>
              </ul>
              <p>
                Esta eliminación es completa. No conservamos registros eliminados temporalmente después de la eliminación de la cuenta.
              </p>
            </SubSection>
            <SubSection title='Acceder a tus datos'>
              <p>
                Todos tus datos son visibles para ti directamente en la app. No hay datos ocultos que tengamos sobre ti que no puedas ver.
              </p>
            </SubSection>
            <SubSection title='Exportación de datos'>
              <p>
                Actualmente no ofrecemos una función de exportación de datos. Si deseas una copia de tus datos antes de eliminar tu cuenta, envía un correo a support@spendler.app y te lo proporcionaremos en formato CSV dentro de 14 días.
              </p>
            </SubSection>
            <SubSection title='Corregir tus datos'>
              <p>
                Puedes editar o eliminar cualquier transacción, cuenta, categoría, presupuesto o meta directamente desde la app.
              </p>
            </SubSection>
            <SubSection title='Retirar el consentimiento'>
              <p>
                Puedes eliminar tu cuenta en cualquier momento. Eliminar tu cuenta termina el procesamiento de datos bajo esta política.
              </p>
            </SubSection>
          </Section>

          <Section title='8. Retención de datos'>
            <ul>
              <li>
                <strong>Cuentas activas:</strong> Los datos se conservan mientras tu cuenta esté activa
              </li>
              <li>
                <strong>Suscripciones vencidas:</strong> Tus datos se conservan incluso después de que venza tu suscripción; simplemente pierdes acceso a las funciones premium. Tus datos no se eliminan al vencer.
              </li>
              <li>
                <strong>Cuentas eliminadas:</strong> Todos los datos se eliminan permanentemente de inmediato al eliminar la cuenta
              </li>
              <li>
                <strong>Imágenes de recibos:</strong> Se eliminan cuando se elimina la transacción asociada o cuando se elimina tu cuenta
              </li>
            </ul>
          </Section>

          <Section title='9. Privacidad de menores'>
            <p>
              Spendler no está dirigido a menores de 13 años. No recopilamos datos de personas menores de 13 años a sabiendas. Si crees que un menor ha creado una cuenta, contacta support@spendler.app y eliminaremos la cuenta de inmediato.
            </p>
          </Section>

          <Section title='10. Seguridad'>
            <p>Protegemos tus datos con:</p>
            <ul>
              <li>Cifrado TLS para todos los datos en tránsito</li>
              <li>Cifrado en reposo en Convex y Cloudflare R2</li>
              <li>SecureStore respaldado por hardware para datos sensibles locales del dispositivo</li>
              <li>Consultas de base de datos con ámbito de usuario (tus datos están aislados por ID de usuario)</li>
              <li>Sin scripts de análisis ni seguimiento de terceros</li>
            </ul>
            <p>
              Ningún sistema es perfectamente seguro. Si descubres una vulnerabilidad de seguridad, divúlgala responsablemente a support@spendler.app.
            </p>
          </Section>

          <Section title='11. Cambios en esta política'>
            <p>
              Si realizamos cambios sustanciales en esta política, te notificaremos mediante un anuncio en la app antes de que entren en vigor. El uso continuado de la app después de la fecha de vigencia constituye la aceptación de la política actualizada.
            </p>
          </Section>

          <Section title='12. Contacto'>
            <p>Preguntas sobre esta política de privacidad:</p>
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
                Respondemos en un plazo de 5 días hábiles.
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
                © 2026 Spendler. Todos los derechos reservados.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              <a
                href='/es/privacy'
                style={{
                  fontSize: 13,
                  color: '#a3a3a3',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Privacidad
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
                Términos
              </a>
              <a
                href='/es/support'
                style={{
                  fontSize: 13,
                  color: '#a3a3a3',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                Soporte
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
