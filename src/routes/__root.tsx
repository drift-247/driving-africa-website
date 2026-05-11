import { Footer } from '#/components/footer'
import { Navbar } from '#/components/navbar'
import { TanStackDevtools } from '@tanstack/react-devtools'
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import appCss from '../styles.css?url'
import { createPresetPageMeta, seoConfig } from '../seo'

function RootNotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 text-center bg-white">
      <div>
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-3">
          404
        </p>
        <h1 className="text-4xl font-black text-primary mb-4">
          Page not found
        </h1>
        <p className="text-text-muted max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
      </div>
    </main>
  )
}

export const Route = createRootRoute({
  head: () => ({
    ...createPresetPageMeta({
      title: 'Driving Africa Digital Limited',
      description:
        'Driving Africa Digital Limited builds digital products for Africa with a focus on safety, trust, and practical local impact.',
      ogTitle: 'Driving Africa Digital Limited',
      ogDescription:
        'Driving Africa Digital Limited - building practical digital products for Africa',
      ogUrl: 'https://drift-africa.example',
      canonical: 'https://drift-africa.example',
    }),
    links: [{ rel: 'stylesheet', href: appCss }, ...seoConfig.faviconLinks],
  }),
  notFoundComponent: RootNotFound,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Navbar />

        {children}
        <Footer />
        {process.env.NODE_ENV === 'development' && (
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'TanStack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        )}

        <Scripts />
      </body>
    </html>
  )
}
