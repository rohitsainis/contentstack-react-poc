import React from 'react';
import { useHeroBanner } from '../hooks/useHeroBanner';
import { mapHeroBannerEntryToViewModel } from '../mappers/mapHeroBanner';

type PersonalizedHeroBannerProps = {
  contentTypeUid: string; // hero content type uid
  entryUid: string;       // hero entry uid
};

export const PersonalizedHeroBanner: React.FC<PersonalizedHeroBannerProps> = ({
  contentTypeUid,
  entryUid,
}) => {
  const { entry, loading, error } = useHeroBanner({ contentTypeUid, entryUid });

  if (loading) {
    return <div>Loading hero...</div>;
  }

  if (error) {
    console.error('Error loading hero banner', error);
    return <div>Failed to load hero banner.</div>;
  }

  if (!entry) return null;

  const vm = mapHeroBannerEntryToViewModel(entry);

  return (
    <section
      style={{
        width: '100%',
        boxSizing: 'border-box',
        padding: '80px 60px',
        backgroundColor: vm.backgroundColor || '#0046ad',
        color: vm.textColor || '#ffffff',
      }}
    >
      <div
        className="hero-inner"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          flexWrap: 'wrap',
        }}
      >
        {/* LEFT SIDE */}
        <div style={{ flex: 1, maxWidth: '600px' }}>
          {vm.subtitle && (
            <p
              style={{
                fontSize: '0.9rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                opacity: 0.9,
              }}
            >
              {vm.subtitle}
            </p>
          )}

          <h1
            style={{
              fontSize: '3rem',
              lineHeight: 1.2,
              marginBottom: '1rem',
              fontWeight: 700,
            }}
          >
            {vm.title}
          </h1>

          {vm.description && (
            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.6,
                marginBottom: '0',
              }}
            >
              {vm.description}
            </p>
          )}
        </div>

        {/* RIGHT SIDE IMAGE */}
        {vm.backgroundImageUrl && (
          <div style={{ flex: 1, textAlign: 'right' }}>
            <img
              src={vm.backgroundImageUrl}
              alt={vm.title}
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};
