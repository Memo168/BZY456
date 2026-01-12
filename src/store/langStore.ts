import { create } from 'zustand';

type Lang = 'cn' | 'de';

interface LangStore {
  lang: Lang;
  toggleLang: () => void;
}

export const useLangStore = create<LangStore>((set) => ({
  lang: 'cn',
  toggleLang: () =>
    set((state) => ({ lang: state.lang === 'cn' ? 'de' : 'cn' })),
}));
