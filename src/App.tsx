import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PersonalizedHeroBanner, resolveVariant } from 'cs-hero-banner-component';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonalizedHeroBanner
        experienceId={import.meta.env.VITE_CS_HERO_EXPERIENCE_UID}
        contentTypeUid={import.meta.env.VITE_CS_HERO_CONTENT_TYPE_UID}
        fallbackEntryUid={import.meta.env.VITE_CS_HERO_FALLBACK_UID}
        travelType="Budget"
        resolveVariant={resolveVariant}
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
