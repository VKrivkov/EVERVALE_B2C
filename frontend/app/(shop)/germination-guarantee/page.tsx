import {
  DocDivider,
  DocFooter,
  DocList,
  DocMeta,
  DocNote,
  DocTable,
  FaqItem,
  LegalDoc,
  MailLink,
  Paragraph,
  SectionHeading,
  WarningBox,
} from "@/components/legal/LegalDoc";

export default function GerminationGuaranteePage() {
  return (
    <LegalDoc title="Germination Guarantee" lastUpdated="May 2026">
      <DocMeta>
        <p>Version: May 2026</p>
        <p className="text-pr_w">Evervale</p>
        <p>ELEVAN plus s.r.o.</p>
        <p>Na Čečeličce 425/4, 150 00 Praha, Czechia</p>
        <p>
          Contact: <MailLink email="support@evervale.org" />
        </p>
      </DocMeta>

      <DocDivider />

      <WarningBox title="⚠ Important Notice">
        Evervale sells cannabis seeds exclusively as{" "}
        <strong>collectible souvenirs</strong> for genetic preservation
        purposes. Our seeds are <strong>not intended for cultivation</strong>.
        Germination and cultivation of cannabis seeds is illegal in many
        countries.
        <br />
        <br />
        By placing an order on our website, the buyer confirms that they are
        familiar with the laws of their country and{" "}
        <strong>bear full personal responsibility</strong> for any actions
        taken with the purchased seeds.
        <br />
        <br />
        This Germination Guarantee applies{" "}
        <strong>
          exclusively to buyers located in jurisdictions where germination and
          cultivation of cannabis is legal
        </strong>
        .
      </WarningBox>

      <DocDivider />

      <SectionHeading number={1}>Our Germination Guarantee</SectionHeading>
      <Paragraph>
        Evervale guarantees the viability of every seed shipped to our
        customers. Each seed batch undergoes quality control before dispatch.
        We stand behind our genetics - and this guarantee is our commitment,
        not just a promise.
      </Paragraph>
      <Paragraph>
        We guarantee a <strong>90% germination rate</strong> under the
        conditions described below. If documented results show that more than
        10% of seeds in your order have failed to germinate, we will replace
        them free of charge.
      </Paragraph>

      <SectionHeading number={2}>What the Guarantee Covers</SectionHeading>
      <DocList
        items={[
          "All seeds purchased on evervale.org",
          <>
            Claims submitted within <strong>90 days</strong> of receiving your
            order
          </>,
          <>
            Germination attempted using the{" "}
            <strong>paper towel method only</strong> (described in Section 3)
          </>,
          "Photo documentation with a visible timestamp (date on phone screen or paper beside the seeds)",
          <>
            Buyer is located in a jurisdiction where cannabis germination{" "}
            <strong>is legal</strong>
          </>,
        ]}
      />

      <SectionHeading number={3}>
        Paper Towel Method (Required for Guarantee)
      </SectionHeading>
      <Paragraph>Only this method is accepted for guarantee claims:</Paragraph>
      <DocList
        ordered
        items={[
          "Place seeds between two sheets of damp paper towel",
          "Set on a plate or in a food container in a dark, warm location (21-26°C)",
          "Maintain consistent moisture for 5-7 days",
          "Photograph each stage with a visible date",
        ]}
      />
      <DocNote>
        Seeds germinated in soil, hydroponics, peat pellets, or by any other
        method are not covered by this guarantee.
      </DocNote>

      <SectionHeading number={4}>How to Submit a Claim</SectionHeading>
      <DocList
        ordered
        items={[
          <>
            Email <strong>support@evervale.org</strong> with subject:{" "}
            <em>Germination Guarantee - [order number]</em>
          </>,
          "Attach: photos of each stage with date, order number, quantity and name of ungerminated seeds",
          <>
            We will review your claim within{" "}
            <strong>5 business days</strong>
          </>,
          "If approved, a free replacement will be dispatched to your address",
        ]}
      />

      <SectionHeading number={5}>Terms and Limitations</SectionHeading>
      <DocTable
        rows={[
          ["Claim period", "90 days from receipt of order"],
          ["Claims per order", "One claim per order"],
          ["Germination method", "Paper towel method only"],
          ["Documentation", "Timestamped photos required"],
          [
            "Compensation",
            "Seed replacement or store credit - no cash refunds",
          ],
          ["Promotional seeds", "Free and gift seeds are not covered"],
          ["Storage", "Seeds must have been stored in a cool, dry place"],
          [
            "Jurisdiction",
            "Countries where cannabis germination is legal only",
          ],
        ]}
      />

      <SectionHeading number={6}>
        Why We Are Confident in Our Genetics
      </SectionHeading>
      <Paragraph>
        Evervale works with an exclusive dedicated supplier - Green Future, a
        professional cannabis seed producer based in Thailand with its own
        breeding and selection program. Green Future operates as our primary
        and preferred genetics partner, providing us with direct access to
        tested, stable varieties before each shipment.
      </Paragraph>
      <Paragraph>
        Every batch undergoes internal germination testing prior to dispatch.
        Batches falling below a 90% germination rate are{" "}
        <strong>not released for sale</strong>. This controlled supply chain
        is the foundation of our guarantee - and what allows us to back it
        with a real commitment rather than a marketing claim.
      </Paragraph>

      <SectionHeading number={7}>Frequently Asked Questions</SectionHeading>

      <FaqItem
        question="Can I receive a cash refund instead of a replacement?"
        answer="No. Compensation is issued exclusively as a seed replacement or store credit toward a future order."
      />
      <FaqItem
        question="What if I cannot photograph the process?"
        answer="Unfortunately, claims cannot be processed without photo documentation. This is a standard requirement to protect both parties."
      />
      <FaqItem
        question="What if germination is illegal in my country?"
        answer="The Germination Guarantee does not apply. Please note that Evervale seeds are sold exclusively as collectible souvenirs."
      />
      <FaqItem
        question="I ordered 10 seeds and 2 did not germinate. Does this qualify?"
        answer="Yes. 2 out of 10 represents a 20% loss, exceeding the 10% threshold. Your claim will be reviewed."
      />
      <FaqItem
        question="How long will a replacement take to arrive?"
        answer="Once approved, replacements are dispatched within 3-5 business days using our standard discreet packaging."
      />

      <DocFooter>
        Evervale reserves the right to update this policy at any time. The
        version in effect at the time of purchase applies to your order.
      </DocFooter>
    </LegalDoc>
  );
}
