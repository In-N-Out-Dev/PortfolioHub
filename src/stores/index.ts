import { create } from 'zustand';

export interface ModeProps {
  isDarkMode: boolean;
}

export const useThemeStore = create<ModeProps>((set) => ({
  isDarkMode: false,
  toggleMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
