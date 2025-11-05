import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const publish_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publish_key) console.log("Publishable Key Not Fount 404");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={publish_key} afterSignOutUrl='/' >
      <App />
    </ClerkProvider>
  </StrictMode>,
)
