export type HeroBannerViewModel = {
  title: string;
  subtitle?: string;
  backgroundImageUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  ctaLabel?: string;
  ctaUrl?: string;
};

export function mapHeroBannerEntryToViewModel(entry: any): HeroBannerViewModel {
  if (!entry) {
    return { title: '' };
  }

  // 1. Try to find hero_banner inside page_components
  const components = entry.page_components || [];
  const heroWrapper = components.find((c: any) => c.hero_banner);
  const hero = heroWrapper?.hero_banner;

  // 2. If no hero_banner modular block found, fall back to something basic
  if (!hero) {
    return {
      title: entry.title || '',
    };
  }

  return {
    title: hero.banner_title || '',
    subtitle: hero.banner_description || '',
    backgroundImageUrl: hero.banner_image?.url,
    backgroundColor: hero.bg_color || '#7d2dcd',
    textColor: hero.text_color || '#ffffff',
    ctaLabel: hero.call_to_action?.title || '',
    ctaUrl: hero.call_to_action?.href || '#',
  };
}
