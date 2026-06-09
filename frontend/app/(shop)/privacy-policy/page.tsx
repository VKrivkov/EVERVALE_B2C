import {
  DocDivider,
  DocFooter,
  DocList,
  DocMeta,
  DocTable,
  LegalDoc,
  MailLink,
  Paragraph,
  SectionHeading,
  WarningBox,
} from "@/components/legal/LegalDoc";

export default function PrivacyPolicyPage() {
  return (
    <LegalDoc title="Privacy Policy" lastUpdated="May 2026">
      <DocMeta>
        <p>Version: May 2026</p>
        <p className="text-pr_w">Evervale</p>
        <p>ELEVAN plus s.r.o.</p>
        <p>Na Čečeličce 425/4, 150 00 Praha, Czechia</p>
        <p>Company ID: 02928205 &nbsp;|&nbsp; VAT ID: CZ02928205</p>
        <p>
          Privacy Contact: <MailLink email="privacy@evervale.org" />
        </p>
      </DocMeta>

      <DocDivider />

      <SectionHeading number={1}>Introduction</SectionHeading>
      <Paragraph>
        This Privacy Policy (&ldquo;Policy&rdquo;) describes how Evervale
        (operated by ELEVAN plus s.r.o.) collects, uses, protects, and
        processes your personal data when you visit our website at{" "}
        <a href="https://evervale.org">https://evervale.org</a>, place an
        order, or interact with our blog and other content. This Policy is
        issued in compliance with the EU General Data Protection Regulation
        (GDPR) (Regulation (EU) 2016/679) and applicable Czech law.
      </Paragraph>

      <SectionHeading number={2}>Data Controller</SectionHeading>
      <Paragraph>
        The data controller responsible for processing your personal data is:
      </Paragraph>
      <DocTable
        rows={[
          ["Company", "ELEVAN plus s.r.o."],
          ["Registered address", "Na Čečeličce 425/4, 150 00 Praha, Czechia"],
          ["Company ID", "02928205"],
          [
            "Privacy contact",
            <MailLink key="p" email="privacy@evervale.org" />,
          ],
        ]}
      />

      <SectionHeading number={3}>Personal Data We Collect</SectionHeading>
      <Paragraph>
        We collect only personal data that you voluntarily provide when placing
        an order, creating an account, or contacting us:
      </Paragraph>
      <DocList
        items={[
          "Full name",
          "Email address",
          "Phone number",
          "Delivery address (country, city, postal code, street)",
          "Payment information (processed by Stripe; we do not store card details)",
        ]}
      />
      <Paragraph>
        We do not collect sensitive personal data such as health information or
        other special categories of data under Article 9 GDPR.
      </Paragraph>
      <Paragraph>
        <strong>Blog and website usage:</strong> When you visit our website and
        blog, anonymised analytical data (page views, session duration, traffic
        sources) may be collected automatically via Google Analytics. This data
        is not linked to your identity and is used solely for website
        performance analysis.
      </Paragraph>

      <SectionHeading number={4}>
        Purpose and Legal Basis for Processing
      </SectionHeading>
      <Paragraph>
        We process your personal data for the following purposes and on the
        following legal bases (GDPR Article 6):
      </Paragraph>
      <DocTable
        rows={[
          ["Order fulfilment", "Performance of a contract (Art. 6(1)(b))"],
          ["Delivery of products", "Performance of a contract (Art. 6(1)(b))"],
          ["Order communication", "Performance of a contract (Art. 6(1)(b))"],
          ["Customer support", "Legitimate interests (Art. 6(1)(f))"],
          ["Legal & accounting records", "Legal obligation (Art. 6(1)(c))"],
          [
            "Website analytics (anonymised)",
            "Legitimate interests (Art. 6(1)(f)) / Consent via cookie banner",
          ],
        ]}
      />
      <Paragraph>
        We do not use your personal data for marketing and do not send
        unsolicited newsletters.
      </Paragraph>

      <SectionHeading number={5}>Data Sharing and Third Parties</SectionHeading>
      <Paragraph>
        We do not sell or rent your personal data. We share data only with
        service providers strictly necessary to operate the Website and fulfil
        orders:
      </Paragraph>
      <DocTable
        rows={[
          [
            "Stripe",
            <>
              Payment processing (PCI-DSS compliant).{" "}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener"
              >
                Privacy Policy
              </a>
            </>,
          ],
          [
            "Google Analytics",
            <>
              Anonymised traffic and performance analytics.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener"
              >
                Privacy Policy
              </a>
            </>,
          ],
          [
            "CookieYes",
            <>
              Cookie consent management platform.{" "}
              <a
                href="https://www.cookieyes.com/privacy-policy/"
                target="_blank"
                rel="noopener"
              >
                Privacy Policy
              </a>
            </>,
          ],
          [
            "Postal / courier services",
            "Delivery of orders (name and address shared as required)",
          ],
          ["Internal CRM", "Order management and customer support records"],
        ]}
      />
      <Paragraph>
        All third-party service providers are bound by data processing
        agreements and/or their own GDPR-compliant privacy policies.
      </Paragraph>

      <SectionHeading number={6}>Data Storage and Retention</SectionHeading>
      <Paragraph>
        Your personal data is stored securely in our internal systems. We
        retain data only as long as necessary for the purposes described in
        this Policy and as required by applicable law:
      </Paragraph>
      <DocTable
        rows={[
          [
            "Order and customer data",
            <>
              <strong>3 years</strong> from the date of last order or last
              account activity
            </>,
          ],
          [
            "Accounting and invoicing records",
            <>
              <strong>10 years</strong> as required by Czech accounting law
              (Act No. 563/1991 Coll.)
            </>,
          ],
          [
            "Customer support correspondence",
            <>
              <strong>2 years</strong> from resolution of the query
            </>,
          ],
          [
            "Anonymised analytics data",
            "As per Google Analytics retention settings (default: 26 months)",
          ],
        ]}
      />
      <Paragraph>
        Upon expiry of the applicable retention period, personal data is
        securely deleted or anonymised.
      </Paragraph>

      <SectionHeading number={7}>
        Cookies and Consent Management
      </SectionHeading>
      <Paragraph>
        We use cookies and similar tracking technologies on the Website.
        Cookies are managed through <strong>CookieYes</strong>, our cookie
        consent management platform. When you first visit the Website, a
        cookie banner is displayed allowing you to accept, reject, or
        customise your cookie preferences.
      </Paragraph>
      <Paragraph>We use the following categories of cookies:</Paragraph>
      <DocTable
        rows={[
          [
            "Strictly necessary",
            "Required for basic website function (login, cart, security). Cannot be disabled.",
          ],
          [
            "Analytics",
            "Google Analytics - anonymised traffic and performance data. Requires consent.",
          ],
        ]}
      />
      <Paragraph>
        You can change or withdraw your cookie consent at any time by clicking
        the cookie settings link in the website footer, or by adjusting your
        browser settings. Withdrawing consent does not affect the lawfulness of
        processing carried out prior to withdrawal.
      </Paragraph>

      <SectionHeading number={8}>Your Data Rights (GDPR)</SectionHeading>
      <Paragraph>
        Under the GDPR, you have the following rights regarding your personal
        data:
      </Paragraph>
      <DocList
        items={[
          <>
            <strong>Access</strong> - request a copy of the personal data we
            hold about you;
          </>,
          <>
            <strong>Rectification</strong> - request correction of inaccurate
            or incomplete data;
          </>,
          <>
            <strong>Erasure</strong> (&ldquo;right to be forgotten&rdquo;) -
            request deletion of your data where it is no longer necessary;
          </>,
          <>
            <strong>Portability</strong> - receive your data in a structured,
            machine-readable format;
          </>,
          <>
            <strong>Restriction</strong> - request that we restrict processing
            of your data in certain circumstances;
          </>,
          <>
            <strong>Objection</strong> - object to processing based on
            legitimate interests;
          </>,
          <>
            <strong>Withdrawal of consent</strong> - where processing is based
            on consent, you may withdraw it at any time.
          </>,
        ]}
      />
      <Paragraph>
        To exercise any of these rights, contact us at:{" "}
        <MailLink email="privacy@evervale.org" />. We will respond within 30
        days as required by the GDPR.
      </Paragraph>

      <SectionHeading number={9}>
        Right to Lodge a Complaint with a Supervisory Authority
      </SectionHeading>
      <WarningBox title="ℹ GDPR - Supervisory Authority">
        You have the right to lodge a complaint with a data protection
        supervisory authority if you believe your personal data has been
        processed in violation of the GDPR. As ELEVAN plus s.r.o. is registered
        in the Czech Republic, the competent supervisory authority is:
        <br />
        <br />
        <strong>Úřad pro ochranu osobních údajů (ÚOOÚ)</strong>
        <br />
        Pplk. Sochora 27, 170 00 Praha 7, Czech Republic
        <br />
        Website:{" "}
        <a href="https://www.uoou.cz" target="_blank" rel="noopener">
          www.uoou.cz
        </a>
        <br />
        Email: <a href="mailto:posta@uoou.cz">posta@uoou.cz</a>
        <br />
        <br />
        You also have the right to lodge a complaint with the supervisory
        authority in your country of residence within the EU.
      </WarningBox>

      <SectionHeading number={10}>International Data Transfers</SectionHeading>
      <Paragraph>
        Your personal data is primarily stored and processed within the
        European Economic Area (EEA). Where data is transferred outside the
        EEA (for example, via Google Analytics servers), such transfers are
        carried out in compliance with the GDPR, including through Standard
        Contractual Clauses (SCCs) or equivalent safeguards.
      </Paragraph>

      <SectionHeading number={11}>Children&rsquo;s Privacy</SectionHeading>
      <Paragraph>
        This Website is intended exclusively for individuals aged 21 and over.
        We do not knowingly collect personal data from anyone under the age of
        21. If we become aware that personal data has been collected from
        someone under 21, we will delete it promptly. If you believe we have
        inadvertently collected such data, please contact us at{" "}
        <MailLink email="privacy@evervale.org" />.
      </Paragraph>

      <SectionHeading number={12}>Changes to This Policy</SectionHeading>
      <Paragraph>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices, legal requirements, or Website functionality
        (including blog-related data processing). Updates are effective upon
        posting to the Website. We recommend reviewing this Policy
        periodically. The version date at the top of this page indicates when
        the Policy was last updated.
      </Paragraph>

      <SectionHeading number={13}>Contact Us</SectionHeading>
      <Paragraph>
        For questions about this Policy or to exercise your data rights,
        contact:
      </Paragraph>
      <DocTable
        rows={[
          ["Privacy", <MailLink key="p" email="privacy@evervale.org" />],
          ["General", <MailLink key="g" email="info@evervale.org" />],
          ["Phone", "+357 978 162 42"],
          [
            "Supervisory authority",
            <a
              key="s"
              href="https://www.uoou.cz"
              target="_blank"
              rel="noopener"
            >
              www.uoou.cz
            </a>,
          ],
        ]}
      />

      <DocFooter>
        ©2026 EVERVALE. All rights reserved. Sold strictly as collectible or
        souvenir seeds. Not intended for illegal use where prohibited by law.
      </DocFooter>
    </LegalDoc>
  );
}
