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
      description: 'Users maintain full control over their personal information within our systems.'
    },
    {
      title: 'Encryption',
      description: 'End-to-end security protocols for all sensitive data transfers, specifically for ride and payment data.'
    },
    {
      title: 'Transparency',
      description: 'Clear communication regarding data usage and rigorous regulatory compliance.'
    }
  ]

  return (
    <LegalLayout 
      title="Privacy Policy" 
      lastUpdated="April 2026"
      description="At Driving Africa Digital Services Limited, we take your privacy with absolute seriousness. This policy outlines how we handle data across our products and services, including Drift247."
      cards={cards}
    >
      <LegalSection title="1. Information Governance">
        <p>
          We implement rigorous data governance protocols to ensure that all information processed through our systems is handled with maximum security and transparency.
        </p>

        <LegalChecklist items={[
          "End-to-end encryption for all sensitive user credentials and payment data.",
          "Strict data localization policies in compliance with Nigerian regulations.",
          "Regular security audits of our data storage infrastructure."
        ]} />

        <LegalInfoBox>
          "We do not, and will never, sell user data to third-party advertisers. Your privacy is not our product."
        </LegalInfoBox>
      </LegalSection>

      <LegalSection title="2. Data Acquisition">
        <p>
          For our mobility services (Drift247), we collect real-time location data to facilitate ride matching and safety monitoring. This data is only active during the course of a trip or while the app is in use for service purposes.
        </p>
        
        <LegalAccentCard text="Privacy is a Fundamental Right, Not a Luxury." />
      </LegalSection>

      <LegalSection title="3. Third-Party Sharing">
        <p>
          We share necessary data with our trusted technology partners (such as Prembly for identity verification) to ensure the safety and security of our platforms. We only share what is strictly required to provide the service.
        </p>
      </LegalSection>

      <LegalSection title="4. User Rights & Control">
        <p>
          Users maintain full control over their data. You have the right to request access to your information, correction of inaccuracies, or deletion of your account and associated data.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
