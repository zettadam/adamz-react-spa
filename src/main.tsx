import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App.tsx'

import './props.css'

const rootEl = document.getElementById('root')

const qc = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
})

if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <QueryClientProvider client={qc}>
        <App />
      </QueryClientProvider>
    </StrictMode>,
  )
} else {
  console.error('"root" element was not found.')
}
