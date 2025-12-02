export type HeroBannerViewModel = {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImageUrl?: string;
  backgroundColor?: string;
  textColor?: string;
};

export function mapHeroBannerEntryToViewModel(entry: any): HeroBannerViewModel {
  if (!entry) {
    return { title: '' };
  }

  return {
    title: entry.title || '',
    subtitle: entry.sub_title || '',
    description: entry.description || '',
    backgroundImageUrl: entry.image?.url,
    backgroundColor: entry.background_color || '#0046ad',
    textColor: '#ffffff',
  };
}
