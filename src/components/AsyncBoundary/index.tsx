import { ErrorBoundary } from '@sentry/react'
import { ComponentProps, ReactNode, Suspense } from 'react'

type SuspenseProps = ComponentProps<typeof Suspense>

interface AsyncBoundaryProps {
  suspenseFallback: SuspenseProps['fallback']
  errorFallback: ReactNode
  children: ReactNode
}

function AsyncBoundary({
  suspenseFallback,
  errorFallback,
  children,
}: AsyncBoundaryProps) {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  )
}

export default AsyncBoundary
