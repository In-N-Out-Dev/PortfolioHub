import { create } from 'zustand';

export interface ModeProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const useThemeStore = create<ModeProps>((set) => ({
  theme: 'light',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));
