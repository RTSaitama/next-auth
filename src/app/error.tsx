'use client' 
import Link from "next/link"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
      <div className="text-center">
        <p className="text-base font-semibold text-red-400">Error</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          Something went wrong
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          {error.message || "An unexpected error occurred"}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button 
            onClick={reset}
            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Try again
          </button>
          <Link href="/" className="text-sm font-semibold text-white">
            Go back home <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
  )
}