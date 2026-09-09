import { createFileRoute, Link } from '@tanstack/react-router'
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  ExternalLink,
  Mail,
  ShieldCheck,
  UserRound,
} from 'lucide-react'

type CredentialStatus = 'Active' | 'Inactive'

type Credential = {
  fullName: string
  staffId: string
  role: string
  department: string
  status: CredentialStatus
  issueDate: string
  validUntil: string
  verificationEmail: string
  issuer: string
  photo: string
}

const credentials: Record<string, Credential> = {
  'DADSL-EXE-002': {
    fullName: 'Sarah Effiong',
    staffId: 'DADSL-EXE-002',
    role: 'Co-founder & Chief Technology Officer',
    department: 'Executive / Technology',
    status: 'Active',
    issueDate: 'January 2026',
    validUntil: 'January 2028',
    verificationEmail: 'hello@drivingafricadigitalserviceslimited.com',
    issuer: 'Driving Africa Digital Services Limited',
    photo: '/sarah_passport.png',
  },
}

export const Route = createFileRoute('/verify/$staffId')({
  component: CredentialVerificationPage,

  head: ({ params }) => ({
    meta: [
      {
        title: `Credential Verification | ${params.staffId} | Driving Africa Digital Services Limited`,
      },
      {
        name: 'description',
        content:
          'Official credential verification record issued by Driving Africa Digital Services Limited.',
      },
      {
        name: 'robots',
        content: 'noindex, nofollow',
      },
    ],
  }),
})

function CredentialVerificationPage() {
  const { staffId } = Route.useParams()

  const normalizedStaffId = staffId.trim().toUpperCase()
  const credential = credentials[normalizedStaffId]

  if (!credential) {
    return <UnverifiedCredential staffId={normalizedStaffId} />
  }

  const verificationDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date())

  return (
    <main className="min-h-screen bg-[#f3f5f7] px-4 py-10 sm:px-6 lg:py-14">
      <div className="mx-auto max-w-4xl">
        {/* Verification portal identity */}
        <header className="mb-7">
          <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white">
                <img
                  src="/logo-icon.svg"
                  alt="Driving Africa Digital Services Limited"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
                  Driving Africa Digital Services Limited
                </p>

                <h1 className="mt-1 text-xl font-black text-primary sm:text-2xl">
                  Official Credential Verification
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 sm:self-auto">
              <BadgeCheck className="h-4 w-4 text-emerald-700" />

              <span className="text-xs font-bold uppercase tracking-[0.12em] text-emerald-800">
                Verified Record
              </span>
            </div>
          </div>
        </header>

        {/* Main credential record */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Record status */}
          <div className="flex flex-col gap-5 bg-[#0b2f52] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                  Credential Status
                </p>

                <p className="mt-1 text-xl font-bold text-white">
                  Verified & Active
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-white/15 bg-white/5 px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                Credential Reference
              </p>

              <p className="mt-1 font-mono text-sm font-bold text-white">
                {credential.staffId}
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Holder identity */}
            <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-center">
              <div className="shrink-0">
                <div className="overflow-hidden rounded-xl border border-slate-300 bg-slate-100 p-1 shadow-sm">
                  <img
                    src={credential.photo}
                    alt={`${credential.fullName} credential photograph`}
                    className="h-32 w-28 rounded-lg object-cover object-top"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
                  Credential Holder
                </p>

                <h2 className="mt-2 text-3xl font-black text-primary sm:text-4xl">
                  {credential.fullName}
                </h2>

                <p className="mt-2 text-base font-medium text-slate-600">
                  {credential.role}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1.5">
                  <BadgeCheck className="h-4 w-4 text-emerald-700" />

                  <span className="text-xs font-bold text-emerald-800">
                    Active Company Credential
                  </span>
                </div>
              </div>
            </div>

            {/* Credential details */}
            <div className="py-8">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
                Credential Details
              </p>

              <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
                <CredentialField
                  icon={<ShieldCheck className="h-4 w-4" />}
                  label="Staff ID"
                  value={credential.staffId}
                />

                <CredentialField
                  icon={<Building2 className="h-4 w-4" />}
                  label="Department"
                  value={credential.department}
                />

                <CredentialField
                  icon={<CalendarDays className="h-4 w-4" />}
                  label="Issue Date"
                  value={credential.issueDate}
                />

                <CredentialField
                  icon={<CalendarDays className="h-4 w-4" />}
                  label="Valid Until"
                  value={credential.validUntil}
                />

                <CredentialField
                  icon={<Building2 className="h-4 w-4" />}
                  label="Issued By"
                  value={credential.issuer}
                />

                <CredentialField
                  icon={<BadgeCheck className="h-4 w-4" />}
                  label="Status"
                  value={credential.status}
                  status
                />
              </div>
            </div>

            {/* Verification statement */}
            <div className="border-y border-slate-200 py-7">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                  <BadgeCheck className="h-5 w-5 text-emerald-700" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Credential authenticity confirmed
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                    Driving Africa Digital Services Limited confirms that this
                    credential was issued by the company and that the individual
                    named above is currently recognized as an active member of
                    the organization.
                  </p>
                </div>
              </div>
            </div>

            {/* Verification metadata */}
            <div className="grid gap-6 py-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-text-muted">
                  Verification Checked
                </p>

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {verificationDate}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-text-muted">
                  Verification Contact
                </p>

                <a
                  href={`mailto:${credential.verificationEmail}`}
                  className="mt-2 inline-flex items-start gap-2 break-all text-sm font-semibold text-primary transition hover:opacity-75"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  {credential.verificationEmail}
                </a>
              </div>
            </div>

            {/* Privacy statement */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
              <p className="text-xs leading-5 text-slate-500">
                This public verification page confirms only the validity,
                identity match, and current status of the issued company
                credential. Private employment, financial, government
                identification, residential, and compensation information is
                not disclosed.
              </p>
            </div>

            {/* Navigation actions */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                <UserRound className="h-4 w-4" />
                View Company Profile
              </Link>

              <a
                href="https://www.drivingafricadigitalserviceslimited.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-primary transition hover:bg-slate-50"
              >
                Company Website
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Verification footer */}
        <footer className="mt-6 text-center">
          <p className="text-xs leading-5 text-slate-500">
            Credential Reference: {credential.staffId}
            <br />
            Official verification record issued by Driving Africa Digital
            Services Limited.
          </p>
        </footer>
      </div>
    </main>
  )
}

function CredentialField({
  icon,
  label,
  value,
  status = false,
}: {
  icon: React.ReactNode
  label: string
  value: string
  status?: boolean
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-slate-500">
        {icon}

        <p className="text-[11px] font-bold uppercase tracking-[0.14em]">
          {label}
        </p>
      </div>

      <p
        className={`mt-2 text-sm font-semibold ${
          status ? 'text-emerald-700' : 'text-slate-900'
        }`}
      >
        {value}
      </p>
    </div>
  )
}

function UnverifiedCredential({ staffId }: { staffId: string }) {
  return (
    <main className="min-h-screen bg-[#f3f5f7] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <header className="mb-7 rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200">
              <img
                src="/logo-icon.svg"
                alt="Driving Africa Digital Services Limited"
                className="h-10 w-10 object-contain"
              />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
                Driving Africa Digital Services Limited
              </p>

              <h1 className="mt-1 text-xl font-black text-primary">
                Official Credential Verification
              </h1>
            </div>
          </div>
        </header>

        <section className="overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
          <div className="bg-red-700 px-6 py-5 sm:px-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-white" />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Verification Result
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  Credential Not Verified
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-sm leading-6 text-slate-600">
              No active company credential could be verified using the
              reference below:
            </p>

            <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-red-700">
                Credential Reference
              </p>

              <p className="mt-1 font-mono text-sm font-bold text-red-900">
                {staffId}
              </p>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-600">
              Please confirm the reference printed on the physical credential.
              If the reference is correct, contact Driving Africa Digital
              Services Limited directly for further verification.
            </p>

            <div className="mt-7 border-t border-slate-200 pt-6">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                Visit Company Profile
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}