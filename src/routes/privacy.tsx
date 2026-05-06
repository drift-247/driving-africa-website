import { createFileRoute } from '@tanstack/react-router'
import { 
  LegalLayout, 
  LegalSection, 
  LegalInfoBox, 
  LegalChecklist, 
  LegalAccentCard 
} from '#/components/legal/legal-layout'

export const Route = createFileRoute('/privacy')({
  component: PrivacyPage,
})

function PrivacyPage() {
  const cards = [
    {
      title: 'Data Sovereignty',
      description: 'Users maintain full control over their personal and institutional information within our systems.'
    },
    {
      title: 'Encryption',
      description: 'End-to-end security protocols for all sensitive data transfers and storage across our network.'
    },
    {
      title: 'Transparency',
      description: 'Clear communication regarding data usage and rigorous regulatory compliance for all users.'
    }
  ]

  return (
    <LegalLayout 
      title="Privacy Policy" 
      lastUpdated="May 06, 2026"
      description="At Driving Africa Digital Services Limited, we take your privacy with absolute seriousness. This policy outlines how we handle data within our institutional framework and the protections we afford to our partners and users across the continent."
      cards={cards}
    >
      <LegalSection title="1. Information Governance">
        <p>
          We implement rigorous data governance protocols to ensure that all information processed through our systems is handled with maximum security and transparency. Our approach is designed to exceed standard regulatory requirements.
        </p>

        <LegalChecklist items={[
          "End-to-end encryption for all sensitive user credentials.",
          "Strict data localization policies in compliance with regional African regulations.",
          "Regular independent security audits of our data storage infrastructure."
        ]} />

        <LegalInfoBox>
          "We do not, and will never, monetize user data through third-party advertising networks. Our revenue model is built on service excellence, not data exploitation."
        </LegalInfoBox>
      </LegalSection>

      <LegalSection title="2. Data Acquisition">
        <p>
          We only collect data that is strictly necessary for the provision of our digital services and the maintenance of platform security. This includes technical metadata for performance optimization and user-provided information for identity verification.
        </p>
        
        <LegalAccentCard text="Privacy is a Fundamental Right, Not a Luxury." />
      </LegalSection>

      <LegalSection title="3. User Rights & Control">
        <p>
          Users maintain full sovereignty over their data. You have the right to request a full export of your information, correction of inaccuracies, or complete erasure from our active systems, subject to legal retention requirements.
        </p>
      </LegalSection>

      <LegalSection title="4. Institutional Security">
        <p>
          Our security architecture is modeled after top-tier financial institutions, utilizing multi-layer defense mechanisms to protect against unauthorized access and data breaches. We are committed to maintaining the highest level of integrity for the Pan-African digital network.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
