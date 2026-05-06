import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cookie-policy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/cookie-policy"!</div>
}
