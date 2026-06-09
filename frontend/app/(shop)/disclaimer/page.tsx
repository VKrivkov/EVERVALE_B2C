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

export default function DisclaimerPage() {
  return (
    <LegalDoc title="Disclaimer" lastUpdated="May 2026">
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

      <WarningBox title="⚠ Important Notice">
        PLEASE READ THIS DISCLAIMER CAREFULLY. By accessing and using this
        Website or purchasing products, you acknowledge that you have read and
        understood this Disclaimer and agree to be bound by it.
      </WarningBox>

      <DocDivider />

      <SectionHeading number={1}>General Disclaimer</SectionHeading>
      <Paragraph>
        This Disclaimer outlines important legal limitations on the liability of
        Evervale and ELEVAN plus s.r.o. and describes the &lsquo;as-is&rsquo;
        nature of our products and services. By accessing and using the Website
        or purchasing products, you acknowledge that you have read and
        understood this Disclaimer and agree to be bound by it.
      </Paragraph>

      <SectionHeading number={2}>Age Restriction</SectionHeading>
      <Paragraph>
        This Website and all products offered on it are intended exclusively
        for adults aged <strong>21 years and older</strong>. By accessing the
        Website or placing an order, you confirm that you are at least 21 years
        of age. Evervale reserves the right to cancel any order if there is
        reason to believe the purchaser does not meet this age requirement.
      </Paragraph>

      <SectionHeading number={3}>
        Souvenir and Collectible Seeds - No Germination
      </SectionHeading>
      <Paragraph caps>
        ALL PRODUCTS SOLD ON THIS WEBSITE ARE OFFERED STRICTLY AS SOUVENIR AND
        COLLECTIBLE ITEMS ONLY.
      </Paragraph>
      <Paragraph>
        These seeds are sold solely as collectors&rsquo; items. They are{" "}
        <strong>
          not intended to be germinated, cultivated, or used for any
          agricultural or horticultural purpose
        </strong>
        . Evervale does not encourage, endorse, or facilitate the germination
        or cultivation of cannabis seeds in any jurisdiction where such
        activities are prohibited by law.
      </Paragraph>
      <Paragraph>
        Any use of the products beyond their intended purpose as collectible
        souvenirs is the sole responsibility of the purchaser. Evervale
        expressly disclaims all liability for any such use.
      </Paragraph>

      <SectionHeading number={4}>Germination Guarantee Scope</SectionHeading>
      <Paragraph>
        Evervale offers a Germination Guarantee exclusively for customers
        located in jurisdictions where cannabis germination is{" "}
        <strong>legal under applicable local, national, and/or EU law</strong>.
        The guarantee is available only where such activities are lawfully
        permitted.
      </Paragraph>
      <Paragraph>
        The existence of a Germination Guarantee does not constitute
        encouragement, endorsement, or authorisation to germinate seeds in
        jurisdictions where such activity is prohibited. It is the sole
        responsibility of the customer to verify the legality of germination in
        their jurisdiction before making a claim.
      </Paragraph>
      <Paragraph>
        For full terms, please refer to the Germination Guarantee page.
      </Paragraph>

      <SectionHeading number={5}>
        Jurisdictional and Geographic Warning
      </SectionHeading>
      <Paragraph caps>
        THE PURCHASE, POSSESSION, STORAGE, AND GERMINATION OF CANNABIS SEEDS
        MAY BE ILLEGAL IN YOUR COUNTRY, REGION, OR JURISDICTION.
      </Paragraph>
      <Paragraph>
        Laws regarding cannabis seeds vary significantly across the European
        Union and internationally. It is your sole and exclusive responsibility
        to:
      </Paragraph>
      <DocList
        items={[
          "Verify whether the purchase and possession of cannabis seeds is legal in your jurisdiction;",
          "Verify whether importing cannabis seeds across international or intra-EU borders is permitted;",
          "Comply with all applicable local, national, and EU laws at all times.",
        ]}
      />
      <Paragraph>
        Evervale ships orders from the Czech Republic. The Czech Republic
        permits the purchase and possession of cannabis seeds as souvenir
        collectibles. However, regulations in other EU member states and non-EU
        countries differ. Evervale does not accept responsibility for orders
        seized by customs or postal authorities, nor for any legal consequences
        arising from the purchase or possession of products in jurisdictions
        where such activities may be restricted or prohibited.
      </Paragraph>
      <Paragraph>
        <strong>
          By completing a purchase, you expressly confirm that such purchase is
          legal in your jurisdiction and that you have independently verified
          this.
        </strong>
      </Paragraph>

      <DocTable
        rows={[
          ["Evervale ships from", "Czech Republic (EU)"],
          [
            "Seeds legal as souvenirs in",
            "Most EU member states - verify your country",
          ],
          [
            "Germination legal in",
            "Czech Republic (up to 3 plants), Netherlands, Malta, Germany (limited) - check local law",
          ],
          [
            "Customer responsibility",
            "Full - you must verify legality before purchase",
          ],
        ]}
      />

      <SectionHeading number={6}>Website Disclaimer</SectionHeading>
      <Paragraph>
        The Website and all content provided on it (including product
        descriptions, images, genetic information, and strain characteristics)
        are provided on an &lsquo;AS-IS&rsquo; basis without warranties of any
        kind, express or implied. Evervale makes no representations regarding:
      </Paragraph>
      <DocList
        items={[
          "The accuracy, completeness, or reliability of Website content;",
          "The availability or uninterrupted operation of the Website;",
          "The absence of viruses, malware, or other harmful code;",
          "The fitness of the Website for any particular purpose.",
        ]}
      />

      <SectionHeading number={7}>Product Disclaimer</SectionHeading>
      <Paragraph>
        Our products are cannabis seeds offered exclusively as souvenir and
        collectible items. Evervale expressly disclaims any warranties regarding:
      </Paragraph>
      <DocList
        items={[
          "Germination, viability, or longevity (except as expressly stated in the Germination Guarantee, applicable only in legal jurisdictions);",
          "Genetic traits, characteristics, or composition;",
          "Suitability for cultivation (products are offered for collection purposes only);",
          "Compliance with any customer expectations or requirements;",
          "Storage longevity or physical condition after extended storage.",
        ]}
      />
      <Paragraph>
        All products are sold &lsquo;as-is&rsquo; without warranty of
        merchantability or fitness for a particular purpose.
      </Paragraph>

      <SectionHeading number={8}>
        Blog and Educational Content Disclaimer
      </SectionHeading>
      <Paragraph>
        The Website may contain a blog and other informational content,
        including articles on cannabis genetics, botany, cultivation
        techniques, and related topics.
      </Paragraph>

      <WarningBox title="Educational Content Notice">
        Any information regarding cultivation, germination, or growing
        techniques published on this Website is provided solely for{" "}
        <strong>educational and informational purposes</strong> and does not
        constitute encouragement, incitement, or instruction to break the law
        in any jurisdiction.
      </WarningBox>

      <Paragraph>All blog content on this Website:</Paragraph>
      <DocList
        items={[
          "Is provided solely for educational and informational purposes;",
          "Does not constitute encouragement, incitement, or instruction to break the law in any jurisdiction;",
          "Does not constitute professional botanical, agricultural, legal, or medical advice;",
          "Is not directed at individuals in jurisdictions where cannabis cultivation is prohibited.",
        ]}
      />
      <Paragraph>
        Users are solely responsible for ensuring that any information obtained
        from this Website is used in full compliance with applicable laws in
        their jurisdiction. Evervale accepts no liability for any use of blog
        content that violates local laws.
      </Paragraph>
      <p className="mb-4 mt-2 text-xs italic text-pr_w/60">
        Each blog article carries the following notice: &ldquo;This article is
        provided for educational and informational purposes only. Cannabis
        germination and cultivation may be illegal in your jurisdiction.
        Always check and comply with your local laws before taking any
        action.&rdquo;
      </p>

      <SectionHeading number={9}>
        Informational Content Disclaimer
      </SectionHeading>
      <Paragraph>
        The Website contains information about cannabis strains, genetic
        characteristics, and historical information. This information is
        provided for educational and informational purposes only and should
        not be construed as:
      </Paragraph>
      <DocList
        items={[
          "Professional botanical or agricultural advice;",
          "Medical, health, or therapeutic recommendations;",
          "Legal advice regarding the purchase or possession of cannabis seeds;",
          "Cultivation instructions or guidance.",
        ]}
      />
      <Paragraph>
        We recommend consulting with qualified professionals for advice on
        these topics.
      </Paragraph>

      <SectionHeading number={10}>No Medical or Health Claims</SectionHeading>
      <Paragraph>
        Evervale does not make any medical, health, or therapeutic claims
        regarding our products. Cannabis seeds are not intended to diagnose,
        treat, cure, prevent, or mitigate any disease or health condition. If
        you have health concerns, consult with a qualified healthcare provider.
      </Paragraph>

      <SectionHeading number={11}>Legal Compliance Disclaimer</SectionHeading>
      <Paragraph>
        It is the sole responsibility of the customer to ensure that the
        purchase and possession of cannabis seeds complies with applicable laws
        and regulations in their jurisdiction. Evervale is not responsible for:
      </Paragraph>
      <DocList
        items={[
          "Assessing the legality of sales to any particular jurisdiction;",
          "Advising customers on local laws;",
          "Any legal consequences arising from your purchase, possession, or use of products;",
          "Customs seizures, legal action, or other government enforcement.",
        ]}
      />
      <Paragraph>
        <strong>
          By purchasing, you represent that such purchase is legal in your
          jurisdiction.
        </strong>
      </Paragraph>

      <SectionHeading number={12}>Limitation of Liability</SectionHeading>
      <Paragraph caps>
        TO THE FULLEST EXTENT PERMITTED BY LAW, Evervale AND ELEVAN plus s.r.o.
        SHALL NOT BE LIABLE FOR:
      </Paragraph>
      <DocList
        items={[
          "Any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the Website or purchase of products, including loss of profits, data, goodwill, or business interruption;",
          "Any damages arising from errors, omissions, or inaccuracies in Website content or product descriptions;",
          "Unauthorized access to or alteration of your data by third parties;",
          "Loss, damage, or theft of products after delivery;",
          "Any personal injury, property damage, or financial loss arising from the products.",
        ]}
      />
      <Paragraph>
        This limitation applies even if we have been advised of the possibility
        of such damages.
      </Paragraph>

      <SectionHeading number={13}>Indemnification</SectionHeading>
      <Paragraph>
        You agree to indemnify and hold harmless Evervale, ELEVAN plus s.r.o.,
        and their officers, directors, employees, and agents from any and all
        claims, damages, losses, costs, and expenses (including
        attorney&rsquo;s fees) arising from:
      </Paragraph>
      <DocList
        items={[
          "Your violation of this Disclaimer or any applicable law;",
          "Your use of the Website or purchase of products;",
          "Any legal consequences of your actions.",
        ]}
      />

      <SectionHeading number={14}>
        Third-Party Links and Content
      </SectionHeading>
      <Paragraph>
        The Website may contain links to third-party websites or services.
        Evervale is not responsible for the content, accuracy, legality, or
        practices of third-party websites. Your use of third-party sites is at
        your own risk and subject to their terms and policies.
      </Paragraph>

      <SectionHeading number={15}>No Warranty</SectionHeading>
      <Paragraph caps>
        EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, Evervale DISCLAIMS ALL
        WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
        WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
        NON-INFRINGEMENT.
      </Paragraph>

      <SectionHeading number={16}>Severability</SectionHeading>
      <Paragraph>
        If any provision of this Disclaimer is deemed invalid or unenforceable
        by a court of competent jurisdiction, the remaining provisions shall
        continue in full force and effect.
      </Paragraph>

      <SectionHeading number={17}>Changes to Disclaimer</SectionHeading>
      <Paragraph>
        Evervale reserves the right to modify this Disclaimer at any time.
        Changes will be effective upon posting to the Website. Your continued
        use of the Website constitutes acceptance of the modified Disclaimer.
      </Paragraph>

      <SectionHeading number={18}>Contact Information</SectionHeading>
      <Paragraph>
        For questions regarding this Disclaimer, please contact:
      </Paragraph>
      <DocTable
        rows={[
          ["Privacy & Legal", <MailLink key="p" email="privacy@evervale.org" />],
          ["General", <MailLink key="g" email="info@evervale.org" />],
          ["Phone", "+357 978 162 42"],
        ]}
      />

      <DocFooter>
        ©2026 EVERVALE. All rights reserved. Sold strictly as collectible or
        souvenir seeds. Not intended for illegal use where prohibited by law.
      </DocFooter>
    </LegalDoc>
  );
}
