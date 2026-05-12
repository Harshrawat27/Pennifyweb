export default function PrivacyPolicy() {
  return (
    <>
      <style>{`
        .btn-hover:hover { opacity: 0.88; }
        .btn-hover { transition: opacity 0.15s ease; }
        table { width: 100%; border-collapse: collapse; margin: 16px 0; }
        th, td { text-align: right; padding: 10px 14px; border-bottom: 1px solid #f0f0f0; font-size: 14px; }
        th { font-weight: 600; color: #000; background: #fafafa; }
        td { color: #444; }
      `}</style>

      <div
        dir='rtl'
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
              تحميل التطبيق
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
              قانوني
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
              سياسة الخصوصية
            </h1>
            <p style={{ fontSize: 15, color: '#a3a3a3', margin: 0 }}>
              آخر تحديث: 23 مارس 2026
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
              سبيندلر هو تطبيق للمالية الشخصية. أنت تثق بنا ببياناتك المالية — نحن نأخذ ذلك بجدية. تشرح هذه السياسة بالضبط ما نجمعه، ولماذا نجمعه، وأين يُخزَّن، وما الذي لا نفعله به أبداً.
            </p>
            <p>
              النسخة المختصرة:{' '}
              <strong>
                بياناتك المالية ملك لك، ولا نبيعها، ولا نستخدمها للإعلانات، ولا نشاركها مع أحد سوى مزودي البنية التحتية اللازمين لتشغيل التطبيق.
              </strong>
            </p>
          </div>

          <Section title='1. ما نجمعه'>
            <SubSection title='بيانات الحساب والهوية'>
              <p>عند إنشاء حساب، نجمع:</p>
              <ul>
                <li>
                  <strong>عنوان البريد الإلكتروني</strong> — يُستخدم لمصادقتك والتواصل معك إذا طلبت الدعم
                </li>
                <li>
                  <strong>الاسم</strong> — يظهر في التطبيق؛ اختياري
                </li>
                <li>
                  <strong>صورة الملف الشخصي</strong> — اختيارية؛ إذا تم توفيرها، تُخزَّن على خوادمنا
                </li>
                <li>
                  <strong>رموز المصادقة</strong> — مخزنة بأمان على جهازك عبر iOS Secure Enclave (SecureStore)؛ لا تُرسَل أبداً إلى أطراف ثالثة
                </li>
              </ul>
              <p>
                لا نجمع رقم هاتفك أو تاريخ ميلادك أو هوية حكومية أو أي معلومات تعريفية شخصية أخرى.
              </p>
            </SubSection>
            <SubSection title='البيانات المالية التي تُدخلها'>
              <p>
                كل ما تضيفه إلى سبيندلر يُخزَّن في حسابك على خوادمنا:
              </p>
              <ul>
                <li>
                  <strong>المعاملات</strong> — العنوان والمبلغ والتاريخ والملاحظات والفئة والحساب وحالة الإشارة المرجعية
                </li>
                <li>
                  <strong>صور الإيصالات</strong> — الصور التي تلتقطها لتسجيل الإيصالات؛ مخزنة على Cloudflare R2 (انظر القسم 4)
                </li>
                <li>
                  <strong>الحسابات</strong> — الأسماء والأنواع (نقدي، بنكي، بطاقة ائتمان، محفظة رقمية) والأرصدة التي تُدخلها يدوياً
                </li>
                <li>
                  <strong>الفئات</strong> — الفئات الافتراضية والمخصصة التي تنشئها
                </li>
                <li>
                  <strong>الميزانيات</strong> — حدود الإنفاق الشهرية لكل فئة
                </li>
                <li>
                  <strong>أهداف الادخار</strong> — أسماء الأهداف والمبالغ المستهدفة والمبالغ المدخرة
                </li>
                <li>
                  <strong>المدفوعات المتكررة</strong> — أسماء الاشتراكات والمبالغ وتواريخ الفوترة والترددات
                </li>
                <li>
                  <strong>الأشخاص والديون</strong> — الأسماء والمبالغ التي تتتبعها للنفقات المشتركة
                </li>
              </ul>
              <p>
                جميع البيانات المالية <strong>تُدخَل يدوياً منك</strong>. نحن لا نتصل أبداً بحسابك المصرفي أو نقرأ رسائلك النصية أو ندخل إلى أي حساب مالي خارجي.
              </p>
            </SubSection>
            <SubSection title='التفضيلات والإعدادات'>
              <ul>
                <li>عملتك المختارة (من أكثر من 25 عملة مدعومة)</li>
                <li>تفضيلات الإشعارات (التذكير اليومي تشغيل/إيقاف، التقرير الأسبوعي تشغيل/إيقاف)</li>
                <li>مفتاح تتبع الدخل</li>
                <li>مفتاح إخفاء الرصيد</li>
                <li>حالة الاشتراك (تجربة مجانية، شهري، أو سنوي)</li>
              </ul>
            </SubSection>
            <SubSection title='بيانات الجهاز والجلسة'>
              <ul>
                <li>
                  <strong>معرّفات الجهاز</strong> — تستخدمها RevenueCat لربط مشترياتك داخل التطبيق بحسابك
                </li>
                <li>
                  <strong>رموز الجلسة</strong> — رموز قصيرة الأمد تُبقيك مسجلاً الدخول؛ مخزنة في SecureStore على الجهاز
                </li>
                <li>
                  <strong>إصدار التطبيق</strong> — يُستخدم لأغراض الدعم والتوافق
                </li>
              </ul>
            </SubSection>
            <SubSection title='ما لا نجمعه'>
              <ul>
                <li>بيانات الموقع</li>
                <li>جهات الاتصال</li>
                <li>سجل المتصفح أو نشاط الويب</li>
                <li>البيانات من التطبيقات الأخرى</li>
                <li>موقع الجهاز الدقيق أو التقريبي</li>
                <li>معرّفات الإعلانات (IDFA/GAID)</li>
                <li>تسجيل ضربات المفاتيح أو التحليلات السلوكية</li>
              </ul>
            </SubSection>
          </Section>

          <Section title='2. لماذا نجمعه'>
            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: 'right' as const }}>البيانات</th>
                  <th style={{ textAlign: 'right' as const }}>الغرض</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: 'right' as const }}>البريد الإلكتروني ورموز المصادقة</td>
                  <td style={{ textAlign: 'right' as const }}>تسجيل الدخول، أمان الحساب، طلبات الدعم</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'right' as const }}>البيانات المالية</td>
                  <td style={{ textAlign: 'right' as const }}>الوظيفة الأساسية للتطبيق — عرض إنفاقك وميزانياتك وأهدافك</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'right' as const }}>صور الإيصالات</td>
                  <td style={{ textAlign: 'right' as const }}>مسح الإيصالات ومعالجة OCR</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'right' as const }}>تفضيلات الإشعارات</td>
                  <td style={{ textAlign: 'right' as const }}>جدولة إشعارات الجهاز المحلية (لا خادم push — الإشعارات تعمل بالكامل على جهازك)</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'right' as const }}>اختيار العملة</td>
                  <td style={{ textAlign: 'right' as const }}>تنسيق جميع المبالغ بعملتك المفضلة</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'right' as const }}>حالة الاشتراك</td>
                  <td style={{ textAlign: 'right' as const }}>تحديد الوصول إلى الميزات المميزة</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'right' as const }}>معرّف جهاز RevenueCat</td>
                  <td style={{ textAlign: 'right' as const }}>التحقق من صحة مشترياتك داخل التطبيق واستعادتها</td>
                </tr>
              </tbody>
            </table>
            <p>
              لا نستخدم بياناتك للإعلانات أو التعريف أو البيع لوسطاء البيانات — أبداً.
            </p>
          </Section>

          <Section title='3. كيف تُخزَّن بياناتك'>
            <p>
              جميع بياناتك مخزنة في <strong>Convex</strong>، وهي قاعدة بيانات سحابية بدون خادم. البيانات مشفرة أثناء النقل (TLS) وفي حالة السكون. بياناتك معزولة منطقياً بمعرّف المستخدم الخاص بك — لا يمكن لأي مستخدم آخر الوصول إلى بياناتك.
            </p>
            <p>
              تُخزَّن صور الإيصالات على <strong>Cloudflare R2</strong> لتخزين الكائنات، مع التحكم في الوصول من خلال الواجهة الخلفية لدينا. الصور ليست متاحة للعموم.
            </p>
            <p>
              تُخزَّن العناصر الحساسة (رموز الجلسة، ذاكرة التخزين المؤقت للاشتراك) على جهازك في <strong>iOS SecureStore</strong>، الذي يستخدم Secure Enclave للجهاز للتشفير المدعوم بالأجهزة.
            </p>
            <p>
              <strong>قائمة انتظار عدم الاتصال:</strong> إذا أضفت معاملة أثناء عدم الاتصال بالإنترنت، فستُخزَّن مؤقتاً في التخزين المحلي للجهاز (AsyncStorage) وتُزامَن مع السحابة عند استعادة الاتصال. تُمسح هذه القائمة المحلية بمجرد اكتمال المزامنة.
            </p>
          </Section>

          <Section title='4. خدمات الطرف الثالث'>
            <p>
              نستخدم عدداً صغيراً من الخدمات الموثوقة لتشغيل التطبيق. إليك ما تتلقاه كل خدمة:
            </p>
            <SubSection title='Convex (قاعدة البيانات)'>
              <p>
                <strong>ما تتلقاه:</strong> جميع بياناتك المالية وتفضيلاتك ومعلومات حسابك.
                <br />
                <strong>لماذا:</strong> هذه هي الواجهة الخلفية لدينا — جميع البيانات تعيش هنا.
                <br />
                <strong>سياسة الخصوصية الخاصة بهم:</strong> convex.dev/privacy
              </p>
            </SubSection>
            <SubSection title='Better Auth (المصادقة)'>
              <p>
                <strong>ما تتلقاه:</strong> بريدك الإلكتروني واسمك وصورة ملفك الشخصي (إذا تم تعيينها) وبيانات الاعتماد المجزأة.
                <br />
                <strong>لماذا:</strong> يتعامل مع تسجيل الدخول الآمن وإدارة الجلسات.
              </p>
            </SubSection>
            <SubSection title='RevenueCat (إدارة الاشتراكات)'>
              <p>
                <strong>ما تتلقاه:</strong> معرّف مستخدم مجهول الهوية وأحداث الشراء داخل التطبيق من Apple.
                <br />
                <strong>لماذا:</strong> للتحقق من اشتراكك واستعادة المشتريات وإدارة حالة التجربة.
                <br />
                <strong>سياسة الخصوصية الخاصة بهم:</strong> revenuecat.com/privacy
                <br />
                <strong>ملاحظة:</strong> لا تتلقى RevenueCat بياناتك المالية أو عنوان بريدك الإلكتروني.
              </p>
            </SubSection>
            <SubSection title='Cloudflare R2 (تخزين صور الإيصالات)'>
              <p>
                <strong>ما تتلقاه:</strong> صور الإيصالات التي ترفعها عند مسح الإيصالات.
                <br />
                <strong>لماذا:</strong> لتخزين صور الإيصالات المرتبطة بمعاملاتك.
                <br />
                <strong>سياسة الخصوصية الخاصة بهم:</strong> cloudflare.com/privacypolicy
              </p>
            </SubSection>
            <SubSection title='Apple App Store'>
              <p>
                <strong>ما تتلقاه:</strong> سجلات معاملات الشراء للتحقق من الاشتراك.
                <br />
                <strong>لماذا:</strong> مطلوب للمشتريات داخل التطبيق على iOS.
                <br />
                <strong>سياسة الخصوصية الخاصة بهم:</strong> apple.com/legal/privacy
              </p>
            </SubSection>
            <p>
              لا نستخدم Google Analytics أو Firebase Analytics أو Mixpanel أو Amplitude أو Sentry أو أي خدمة تحليل سلوكي.
            </p>
          </Section>

          <Section title='5. مشاركة البيانات'>
            <p>
              <strong>لا نبيع بياناتك.</strong>
              <br />
              <strong>لا نشارك بياناتك مع المعلنين.</strong>
              <br />
              <strong>لا نشارك بياناتك مع وسطاء البيانات.</strong>
            </p>
            <p>
              الظروف الوحيدة التي تغادر فيها بياناتك أنظمتنا:
            </p>
            <ol>
              <li>
                <strong>مزودو البنية التحتية</strong> المدرجون في القسم 4 — ضروريون بشكل صارم لعمل التطبيق
              </li>
              <li>
                <strong>المتطلبات القانونية</strong> — إذا تلقينا أمراً قضائياً صالحاً أو إجراءً قانونياً يستلزم الإفصاح، سنخطرك بالقدر المسموح به قانوناً
              </li>
              <li>
                <strong>نقل الحساب</strong> — إذا تم الاستحواذ على سبيندلر، ستنتقل بياناتك إلى المالك الجديد بموجب نفس التزامات الخصوصية؛ ستُخطَر مسبقاً
              </li>
            </ol>
          </Section>

          <Section title='6. الإشعارات'>
            <p>
              يرسل سبيندلر ثلاثة أنواع من الإشعارات — جميعها{' '}
              <strong>إشعارات محلية للجهاز</strong> مجدولة على جهازك. نحن لا ندير خادم إشعارات push.
            </p>
            <ul>
              <li>
                <strong>التذكير اليومي</strong> (الساعة 8:00 مساءً) — &quot;لا تنسَ تتبع إنفاق اليوم!&quot;
              </li>
              <li>
                <strong>التقرير الأسبوعي</strong> (الأحد الساعة 10:00 صباحاً) — &quot;تحقق من أداء أسبوعك!&quot;
              </li>
              <li>
                <strong>تذكيرات المدفوعات المتكررة</strong> — يوم واحد قبل تجديد اشتراك متتبع
              </li>
            </ul>
            <p>
              يمكن تعطيل جميع الإشعارات بشكل فردي أو كلياً من الإعدادات ← الإشعارات. تعطيل الإشعارات لا يؤثر على أي وظيفة في التطبيق.
            </p>
          </Section>

          <Section title='7. حقوقك وضوابطك'>
            <SubSection title='حذف حسابك'>
              <p>
                الإعدادات ← حذف الحساب يحذف بشكل دائم وغير قابل للإلغاء:
              </p>
              <ul>
                <li>جميع المعاملات والحسابات والفئات والميزانيات والأهداف</li>
                <li>جميع المدفوعات المتكررة والقواعد الذكية والديون المحفوظة</li>
                <li>جميع تفضيلات المستخدم والإعدادات</li>
                <li>سجل المصادقة الخاص بك ورموز الجلسة</li>
              </ul>
              <p>
                هذا الحذف كامل. لا نحتفظ بسجلات محذوفة ناعماً بعد حذف الحساب.
              </p>
            </SubSection>
            <SubSection title='الوصول إلى بياناتك'>
              <p>
                جميع بياناتك مرئية لك مباشرة في التطبيق. لا توجد بيانات مخفية نحتفظ بها عنك لا يمكنك رؤيتها.
              </p>
            </SubSection>
            <SubSection title='تصدير البيانات'>
              <p>
                لا نقدم حالياً ميزة تصدير البيانات. إذا أردت نسخة من بياناتك قبل حذف حسابك، يرجى إرسال بريد إلكتروني إلى support@spendler.app وسنقدمها بتنسيق CSV في غضون 14 يوماً.
              </p>
            </SubSection>
            <SubSection title='تصحيح بياناتك'>
              <p>
                يمكنك تحرير أو حذف أي معاملة أو حساب أو فئة أو ميزانية أو هدف مباشرة من داخل التطبيق.
              </p>
            </SubSection>
            <SubSection title='سحب الموافقة'>
              <p>
                يمكنك حذف حسابك في أي وقت. يُنهي حذف حسابك معالجة البيانات بموجب هذه السياسة.
              </p>
            </SubSection>
          </Section>

          <Section title='8. الاحتفاظ بالبيانات'>
            <ul>
              <li>
                <strong>الحسابات النشطة:</strong> تُحتفظ بالبيانات طالما حسابك نشط
              </li>
              <li>
                <strong>الاشتراكات المنتهية:</strong> تُحتفظ بياناتك حتى بعد انتهاء اشتراكك؛ تفقد فقط الوصول إلى الميزات المميزة. لن تُحذف بياناتك عند الانتهاء.
              </li>
              <li>
                <strong>الحسابات المحذوفة:</strong> تُحذف جميع البيانات فوراً وبشكل دائم عند حذف الحساب
              </li>
              <li>
                <strong>صور الإيصالات:</strong> تُحذف عند حذف المعاملة المرتبطة أو عند حذف حسابك
              </li>
            </ul>
          </Section>

          <Section title='9. خصوصية الأطفال'>
            <p>
              لا يستهدف سبيندلر الأطفال دون سن 13 عاماً. لا نجمع بياناً من أي شخص دون سن 13 عاماً عن علم. إذا كنت تعتقد أن طفلاً قد أنشأ حساباً، فاتصل بـ support@spendler.app وسنحذف الحساب فوراً.
            </p>
          </Section>

          <Section title='10. الأمان'>
            <p>نحمي بياناتك بـ:</p>
            <ul>
              <li>تشفير TLS لجميع البيانات أثناء النقل</li>
              <li>تشفير في حالة السكون في Convex و Cloudflare R2</li>
              <li>SecureStore مدعوم بالأجهزة للبيانات الحساسة المحلية للجهاز</li>
              <li>استعلامات قاعدة بيانات محددة بنطاق المستخدم (بياناتك معزولة بمعرّف المستخدم)</li>
              <li>لا نصوص تحليلات أو تتبع من طرف ثالث</li>
            </ul>
            <p>
              لا يوجد نظام آمن تماماً. إذا اكتشفت ثغرة أمنية، يرجى الإفصاح عنها بشكل مسؤول لـ support@spendler.app.
            </p>
          </Section>

          <Section title='11. التغييرات على هذه السياسة'>
            <p>
              إذا أجرينا تغييرات جوهرية على هذه السياسة، سنخطرك عبر إعلان داخل التطبيق قبل أن تدخل التغييرات حيز التنفيذ. الاستمرار في استخدام التطبيق بعد تاريخ السريان يُشكّل قبولاً للسياسة المحدثة.
            </p>
          </Section>

          <Section title='12. اتصل بنا'>
            <p>أسئلة حول سياسة الخصوصية هذه:</p>
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
                نهدف إلى الرد في غضون 5 أيام عمل.
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
                © 2026 Spendler. جميع الحقوق محفوظة.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              <a
                href='/ar/privacy'
                style={{
                  fontSize: 13,
                  color: '#a3a3a3',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                الخصوصية
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
                الشروط
              </a>
              <a
                href='/ar/support'
                style={{
                  fontSize: 13,
                  color: '#a3a3a3',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                الدعم
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
