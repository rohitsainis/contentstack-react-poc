import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PersonalizeProvider } from 'cs-hero-banner-component';

const apiKey = import.meta.env.VITE_CS_API_KEY;
const deliveryToken = import.meta.env.VITE_CS_DELIVERY_TOKEN;
const environment = import.meta.env.VITE_CS_ENVIRONMENT;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PersonalizeProvider
      apiKey={apiKey}
      deliveryToken={deliveryToken}
      environment={environment}
    >
      <App />
    </PersonalizeProvider>
  </StrictMode>,
)
