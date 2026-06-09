import {
  DocDivider,
  DocFooter,
  DocList,
  DocMeta,
  DocNote,
  DocTable,
  LegalDoc,
  MailLink,
  Paragraph,
  SectionHeading,
  WarningBox,
} from "@/components/legal/LegalDoc";

export default function TermsAndConditionsPage() {
  return (
    <LegalDoc title="Terms & Conditions" lastUpdated="May 2026">
      <DocMeta>
        <p>Version: May 2026</p>
        <p className="text-pr_w">Evervale</p>
        <p>ELEVAN plus s.r.o.</p>
        <p>Na Čečeličce 425/4, 150 00 Praha, Czechia</p>
        <p>Company ID: 02928205 &nbsp;|&nbsp; VAT ID: CZ02928205</p>
        <p>
          Email: <MailLink email="privacy@evervale.org" /> &nbsp;|&nbsp;{" "}
          <MailLink email="info@evervale.org" />
        </p>
      </DocMeta>

      <DocDivider />

      <WarningBox title="⚠ Important Notice">
        These Terms and Conditions govern your use of{" "}
        <a href="https://evervale.org">https://evervale.org</a> and all
        purchases made on the Website. By using the Website or placing an
        order, you agree to these Terms in full. If you do not agree, please do
        not use the Website.
      </WarningBox>

      <DocDivider />

      <SectionHeading number={1}>
        Introduction and Acceptance
      </SectionHeading>
      <Paragraph>
        These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the
        website <a href="https://evervale.org">https://evervale.org</a> (the
        &ldquo;Website&rdquo;) and the purchase of products offered thereon.
        By accessing and using the Website, or by placing an order, you
        acknowledge that you have read, understood, and agree to be bound by
        these Terms. If you do not agree with any part of these Terms, you
        must not use the Website or place any orders.
      </Paragraph>

      <SectionHeading number={2}>
        Eligibility and Age Restriction
      </SectionHeading>
      <Paragraph>
        You must be at least <strong>21 years of age</strong> to access and
        use the Website and to purchase products. By using the Website, you
        represent and warrant that you are at least 21 years of age and possess
        the legal authority to enter into these Terms. We reserve the right to
        verify your age at any time and to cancel orders where this
        requirement is not met.
      </Paragraph>

      <SectionHeading number={3}>Product Description and Use</SectionHeading>
      <Paragraph>
        Evervale offers cannabis seeds exclusively as{" "}
        <strong>souvenir and collectible products</strong>. The seeds are
        offered as genetic material for collection purposes only and are{" "}
        <strong>
          not intended for germination, cultivation, propagation, or growth
        </strong>
        . All information provided on the Website regarding product
        characteristics, strains, and genetic properties is for informational
        purposes only.
      </Paragraph>
      <WarningBox title="⚠ No Germination Warranty">
        Results such as germination or viability are not guaranteed by default.
        We make no representations or warranties regarding the performance,
        characteristics, or results of the products. You assume all risks
        associated with the use or possession of the products.
        <br />
        <br />A separate Germination Guarantee applies exclusively to
        customers in jurisdictions where cannabis germination is legal. See
        Section 6 and the Germination Guarantee page for details.
      </WarningBox>

      <SectionHeading number={4}>Legal Compliance</SectionHeading>
      <Paragraph>
        It is your responsibility to ensure that your purchase and possession
        of the products complies with the laws and regulations of your
        country, region, or locality. The legal status of cannabis seeds
        varies significantly across jurisdictions. By placing an order, you
        represent and warrant that:
      </Paragraph>
      <DocList
        items={[
          "The purchase and possession of cannabis seeds is legal in your jurisdiction;",
          "You will comply with all applicable local, state, national, and EU laws regarding the products;",
          "You will not use the products in violation of any law;",
          "You have independently verified the legality of your purchase before placing an order.",
        ]}
      />
      <Paragraph>
        Evervale is not responsible for any legal consequences arising from
        your purchase, possession, or use of the products. We reserve the
        right to refuse or cancel any order at our discretion if we have
        reason to believe legal compliance cannot be confirmed.
      </Paragraph>

      <SectionHeading number={5}>
        Blog and Educational Content
      </SectionHeading>
      <Paragraph>
        The Website may include a blog and other informational content
        covering topics such as cannabis genetics, botany, cultivation
        techniques, legal developments, and industry news.
      </Paragraph>
      <Paragraph>
        All blog and editorial content published on the Website:
      </Paragraph>
      <DocList
        items={[
          <>
            Is provided solely for{" "}
            <strong>educational and informational purposes</strong>;
          </>,
          "Does not constitute encouragement, incitement, or instruction to break the law in any jurisdiction;",
          "Does not constitute professional botanical, agricultural, legal, or medical advice;",
          "Is not directed at individuals in jurisdictions where cannabis cultivation or germination is prohibited.",
        ]}
      />
      <Paragraph>
        Users are solely responsible for ensuring that any information
        obtained from the Website is used in full compliance with the laws of
        their jurisdiction. Evervale accepts no liability for any use of blog
        content that violates applicable local laws.
      </Paragraph>
      <DocNote>
        Each blog article carries the following notice: &ldquo;This article is
        provided for educational and informational purposes only. Cannabis
        germination and cultivation may be illegal in your jurisdiction.
        Always check and comply with your local laws before taking any
        action.&rdquo;
      </DocNote>

      <SectionHeading number={6}>Germination Guarantee</SectionHeading>
      <Paragraph>
        Evervale offers a voluntary Germination Guarantee for qualifying
        orders. The guarantee applies{" "}
        <strong>
          exclusively to customers located in jurisdictions where cannabis
          germination is legal
        </strong>{" "}
        under applicable local, national, and/or EU law.
      </Paragraph>
      <Paragraph>
        Full terms, eligibility conditions, and the claims process are
        described on the dedicated Germination Guarantee page. The existence
        of a Germination Guarantee does not constitute encouragement or
        authorisation to germinate seeds in any jurisdiction where such
        activity is prohibited.
      </Paragraph>

      <SectionHeading number={7}>Shipping and Delivery</SectionHeading>
      <Paragraph>
        Orders are shipped from the Czech Republic using postal and courier
        services. We ship to destinations within the EU and internationally,
        provided that shipping to the destination country is legally
        permissible for cannabis seed products. We reserve the right to refuse
        or cancel shipments to countries where such products are prohibited by
        law.
      </Paragraph>
      <DocTable
        rows={[
          ["Ships from", "Czech Republic (EU)"],
          [
            "Risk of loss",
            "Transfers to buyer upon delivery to the stated address",
          ],
          [
            "Customs",
            "Buyer is responsible for any customs duties, fees, or restrictions",
          ],
          [
            "Delays",
            "Evervale is not liable for delays caused by postal services, customs, or third-party carriers",
          ],
          [
            "Lost packages",
            "Evervale will assist with carrier tracing; resolution at our discretion",
          ],
        ]}
      />
      <Paragraph>
        Evervale does not ship to jurisdictions where the import of cannabis
        seeds is explicitly prohibited. It is the customer&rsquo;s
        responsibility to verify import regulations before placing an order.
      </Paragraph>

      <SectionHeading number={8}>Returns and Refunds</SectionHeading>
      <Paragraph>
        Given the nature of our products, returns are generally not accepted.
        Limited return and replacement options are available subject to the
        following conditions:
      </Paragraph>
      <DocList
        ordered
        items={[
          "The product packaging must remain unopened and sealed;",
          <>
            A return request must be submitted within <strong>14 days</strong>{" "}
            of receiving the order;
          </>,
          "Return shipping costs are the responsibility of the customer;",
          "Products that have been opened, used, tampered with, or damaged by the customer will not be accepted.",
        ]}
      />
      <Paragraph>
        If a return is approved, Evervale may offer a product replacement or
        store credit at its discretion. Refunds to the original payment method
        may be offered in exceptional circumstances only.
      </Paragraph>

      <WarningBox title="EU Consumer Rights - Withdrawal Right">
        Under EU Directive 2011/83/EU, consumers generally have a 14-day right
        of withdrawal from distance contracts. However, cannabis seeds are
        perishable goods subject to rapid deterioration, and sealed items that
        are not suitable for return for health and hygiene reasons once opened
        may be exempt from this right once the seal is broken. By placing an
        order and breaking the seal, you acknowledge that the right of
        withdrawal may no longer apply. For unopened items, requests must be
        submitted within 14 days of delivery.
      </WarningBox>

      <SectionHeading number={9}>Payment</SectionHeading>
      <Paragraph>
        Payments are currently processed exclusively through{" "}
        <strong>Stripe</strong>. We do not store or have access to your
        payment card details. Stripe handles all payment processing and fraud
        prevention in accordance with PCI-DSS standards. Payment methods may
        be expanded in the future.
      </Paragraph>
      <Paragraph>
        All prices are displayed in the currency selected on the Website.
        Payment must be completed and authorised before your order is
        confirmed. If payment fails, your order will not be processed.
      </Paragraph>

      <SectionHeading number={10}>User Accounts</SectionHeading>
      <Paragraph>
        You may create an account on the Website to simplify future purchases,
        or place orders as a guest. If you create an account, you agree to
        provide accurate and complete information and to keep your login
        credentials confidential. You are responsible for all activity that
        occurs under your account. Please notify us immediately of any
        unauthorised use.
      </Paragraph>

      <SectionHeading number={11}>Intellectual Property</SectionHeading>
      <Paragraph>
        All content on the Website, including text, images, logos, product
        descriptions, blog articles, and design elements, is the property of
        Evervale / ELEVAN plus s.r.o. or its licensors and is protected by
        applicable intellectual property laws. You may not reproduce,
        distribute, or use any content from the Website without prior written
        permission.
      </Paragraph>

      <SectionHeading number={12}>Limitation of Liability</SectionHeading>
      <Paragraph caps>
        TO THE FULLEST EXTENT PERMITTED BY LAW, Evervale AND ELEVAN plus
        s.r.o. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS
        OF PROFITS, DATA, OR GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF
        THE WEBSITE OR PURCHASE OF PRODUCTS.
      </Paragraph>
      <Paragraph>
        This limitation applies even if we have been advised of the possibility
        of such damages.
      </Paragraph>

      <SectionHeading number={13}>Indemnification</SectionHeading>
      <Paragraph>
        You agree to indemnify and hold harmless Evervale, ELEVAN plus
        s.r.o., and their officers, directors, employees, and agents from any
        claims, damages, losses, or expenses (including attorney&rsquo;s fees)
        arising from your violation of these Terms, your use of the Website,
        or your purchase or possession of the products.
      </Paragraph>

      <SectionHeading number={14}>
        Governing Law and Jurisdiction
      </SectionHeading>
      <Paragraph>
        These Terms are governed by and construed in accordance with the laws
        of the <strong>Czech Republic</strong>, without regard to its conflict
        of law principles. Any disputes arising from these Terms or your use
        of the Website shall be resolved exclusively in the courts of the
        Czech Republic.
      </Paragraph>
      <Paragraph>
        For EU consumers, mandatory consumer protection provisions of your
        country of residence apply to the extent required by applicable EU law
        and cannot be excluded by these Terms.
      </Paragraph>

      <SectionHeading number={15}>
        Online Dispute Resolution (EU)
      </SectionHeading>
      <Paragraph>
        In accordance with EU Regulation No. 524/2013, Evervale is required to
        inform EU consumers of the availability of the European
        Commission&rsquo;s Online Dispute Resolution platform. Consumers may
        use this platform to resolve disputes with online traders without
        going to court:
      </Paragraph>
      <Paragraph>
        <a
          href="https://consumer-redress.ec.europa.eu/index_en"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://consumer-redress.ec.europa.eu/index_en
        </a>
      </Paragraph>
      <Paragraph>
        Our contact email for ODR purposes:{" "}
        <MailLink email="privacy@evervale.org" />
      </Paragraph>
      <DocNote>
        Note: Evervale is not obliged to participate in alternative dispute
        resolution proceedings, but we are committed to resolving customer
        concerns directly. Please contact us before initiating any formal
        dispute process.
      </DocNote>

      <SectionHeading number={16}>Modifications to Terms</SectionHeading>
      <Paragraph>
        Evervale reserves the right to modify these Terms at any time. Changes
        will be effective upon posting to the Website. Your continued use of
        the Website following the posting of modified Terms constitutes your
        acceptance of the changes. We recommend reviewing these Terms
        periodically.
      </Paragraph>

      <SectionHeading number={17}>Entire Agreement</SectionHeading>
      <Paragraph>
        These Terms, together with the Privacy Policy, Disclaimer, Return &
        Refund Policy, and Germination Guarantee, constitute the entire
        agreement between you and Evervale regarding the subject matter
        hereof and supersede all prior and contemporaneous agreements,
        understandings, and communications, whether written or oral.
      </Paragraph>

      <SectionHeading number={18}>Contact Information</SectionHeading>
      <Paragraph>
        For questions or concerns regarding these Terms, please contact:
      </Paragraph>
      <DocTable
        rows={[
          [
            "Legal & Privacy",
            <MailLink key="p" email="privacy@evervale.org" />,
          ],
          ["General", <MailLink key="g" email="info@evervale.org" />],
          ["Phone", "+357 978 162 42"],
          [
            "ODR Platform",
            <a
              key="o"
              href="https://consumer-redress.ec.europa.eu/index_en"
              target="_blank"
              rel="noopener noreferrer"
            >
              consumer-redress.ec.europa.eu
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
