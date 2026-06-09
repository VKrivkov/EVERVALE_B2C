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

export default function ReturnRefundPolicyPage() {
  return (
    <LegalDoc title="Return & Refund Policy" lastUpdated="May 2026">
      <DocMeta>
        <p>Version: May 2026</p>
        <p className="text-pr_w">Evervale</p>
        <p>ELEVAN plus s.r.o.</p>
        <p>Na Čečeličce 425/4, 150 00 Praha, Czechia</p>
        <p>Company ID: 02928205 &nbsp;|&nbsp; VAT ID: CZ02928205</p>
        <p>
          Contact: <MailLink email="privacy@evervale.org" />
        </p>
      </DocMeta>

      <DocDivider />

      <WarningBox title="ℹ EU Consumer Rights - Right of Withdrawal">
        Under EU Directive 2011/83/EU on Consumer Rights, you generally have
        the right to withdraw from a distance contract within{" "}
        <strong>14 days</strong> of receiving your order, without giving any
        reason.
        <br />
        <br />
        However, cannabis seeds are{" "}
        <strong>perishable goods subject to rapid deterioration</strong> in
        quality. Additionally, sealed items that are not suitable for return
        for health or hygiene reasons once the protective seal has been broken
        are exempt from the right of withdrawal under Article 16(d) and 16(e)
        of the Directive.
        <br />
        <br />
        <strong>For unopened, sealed orders</strong>, you may request a return
        within 14 days of delivery. Once the original packaging is opened or
        the seal broken, the right of withdrawal no longer applies. By
        breaking the seal, you acknowledge and accept this limitation.
      </WarningBox>

      <DocDivider />

      <SectionHeading number={1}>General Return Policy</SectionHeading>
      <Paragraph>
        Due to the nature of our products (perishable collectible seeds),
        returns and refunds are generally not permitted. Limited return
        options are available under the strict conditions set out in this
        Policy.
      </Paragraph>
      <Paragraph>
        Products are sold <strong>&ldquo;as-is&rdquo;</strong> with no
        warranty of outcomes, including germination, viability, or genetic
        characteristics. Please refer to the Germination Guarantee page for
        viability claims in eligible jurisdictions.
      </Paragraph>

      <SectionHeading number={2}>
        Return Eligibility Requirements
      </SectionHeading>
      <Paragraph>
        A return may only be considered if <strong>all</strong> of the
        following conditions are met:
      </Paragraph>
      <DocList
        items={[
          <>
            Return request submitted within <strong>14 days</strong> of
            confirmed delivery;
          </>,
          "Original packaging is unopened and the seal is intact;",
          "No signs of use, damage, or tampering;",
          "Valid order confirmation or proof of purchase provided.",
        ]}
      />
      <DocNote>
        Note: Opening the product packaging automatically disqualifies the
        item from return eligibility, as described in the EU Consumer Rights
        notice above.
      </DocNote>

      <SectionHeading number={3}>
        Germination Guarantee vs. Return Policy
      </SectionHeading>
      <Paragraph>
        If you have a quality concern about seed viability, you may be
        eligible to submit a claim under the Germination Guarantee instead of
        a return. The Germination Guarantee applies exclusively in
        jurisdictions where cannabis germination is legal and is subject to
        its own separate terms and documentation requirements.
      </Paragraph>
      <Paragraph>
        <strong>
          An active Germination Guarantee claim and a return request cannot
          be submitted for the same order simultaneously.
        </strong>{" "}
        If you have opened your seeds to test viability, the standard return
        route is no longer available - the Germination Guarantee route applies
        instead (subject to eligibility).
      </Paragraph>

      <SectionHeading number={4}>Return Process</SectionHeading>
      <DocList
        ordered
        items={[
          <>
            Email <MailLink email="privacy@evervale.org" /> with your order
            number and reason for return;
          </>,
          "Attach photos of the unopened product if requested;",
          <>
            Await approval - we aim to respond within{" "}
            <strong>5 business days</strong>;
          </>,
          "If approved, follow the return shipping instructions we provide.",
        ]}
      />

      <SectionHeading number={5}>Return Shipping Costs</SectionHeading>
      <Paragraph>
        Return shipping costs are the responsibility of the customer. We
        recommend using a tracked service, as Evervale cannot be held
        responsible for returned parcels lost in transit.
      </Paragraph>

      <SectionHeading number={6}>Refund Options</SectionHeading>
      <Paragraph>
        If a return is approved, Evervale may provide one of the following at
        its sole discretion:
      </Paragraph>
      <DocList
        items={[
          "Replacement product;",
          "Store credit for a future order;",
          "Refund to original payment method - in exceptional circumstances only.",
        ]}
      />

      <SectionHeading number={7}>Non-Returnable Items</SectionHeading>
      <Paragraph>
        The following items are not eligible for return under any
        circumstances:
      </Paragraph>
      <DocList
        items={[
          "Opened, unsealed, or used products;",
          "Products with signs of tampering or damage caused by the customer;",
          "Requests submitted after 14 days of delivery;",
          "Promotional, free, or gift seeds;",
          "Products improperly stored by the customer (not in cool, dry conditions).",
        ]}
      />

      <SectionHeading number={8}>Damaged Products on Arrival</SectionHeading>
      <Paragraph>
        If your order arrives visibly damaged, please report this within{" "}
        <strong>7 days</strong> of delivery by emailing{" "}
        <MailLink email="privacy@evervale.org" /> with clear photos of the
        damaged packaging and contents. We will assess the claim and arrange
        a replacement or resolution at our discretion.
      </Paragraph>

      <SectionHeading number={9}>Lost or Missing Orders</SectionHeading>
      <Paragraph>
        If your order has not arrived within the expected timeframe, contact
        us at <MailLink email="privacy@evervale.org" />. We will initiate a
        carrier trace and work toward a resolution. Resolution timelines
        depend on postal carrier investigation procedures and are outside our
        direct control.
      </Paragraph>

      <SectionHeading number={10}>
        Online Dispute Resolution (EU)
      </SectionHeading>
      <Paragraph>
        EU consumers who are unable to resolve a dispute directly with
        Evervale may use the European Commission&rsquo;s Online Dispute
        Resolution platform:
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
        Our contact for ODR purposes:{" "}
        <MailLink email="privacy@evervale.org" />
      </Paragraph>
      <DocNote>
        Evervale is not obliged to participate in alternative dispute
        resolution proceedings, but we are committed to resolving all
        customer concerns directly and fairly. We encourage you to contact us
        before initiating any formal process.
      </DocNote>

      <SectionHeading number={11}>
        Exceptions and Discretionary Resolutions
      </SectionHeading>
      <Paragraph>
        Evervale may, at its sole discretion, provide resolutions in
        exceptional cases not covered by this Policy. Such resolutions do not
        create a precedent or obligation to provide the same resolution in
        future cases.
      </Paragraph>

      <SectionHeading number={12}>Policy Changes</SectionHeading>
      <Paragraph>
        We may update this Policy from time to time. Changes are effective
        upon posting to the Website. The version date at the top of this page
        indicates when the Policy was last updated.
      </Paragraph>

      <SectionHeading number={13}>Contact</SectionHeading>
      <DocTable
        rows={[
          [
            "Returns & Refunds",
            <MailLink key="r" email="privacy@evervale.org" />,
          ],
          ["General", <MailLink key="g" email="info@evervale.org" />],
          ["Phone", "+357 978 162 42"],
          [
            "ODR Platform",
            <a
              key="o"
              href="https://consumer-redress.ec.europa.eu/index_en"
              target="_blank"
              rel="noopener"
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
