import React from 'react';
import { PersonalizedHeroBanner } from './personalization/components/PersonalizedHeroBanner';

function App() {
  // TODO: replace with your real hero_banner entry UID from Contentstack
  const heroEntryUid = 'bltceb1054d4ea935c9';

  return (
    <div>
      <PersonalizedHeroBanner
        contentTypeUid="page"
        entryUid={heroEntryUid}
      />

      <div style={{ padding: 24 }}>
        <h2>Below the hero banner content</h2>
        <p>This is just placeholder content under the hero banner.</p>
      </div>
    </div>
  );
}

export default App;
