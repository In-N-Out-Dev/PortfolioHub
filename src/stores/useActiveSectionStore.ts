import { MENU_LIST } from 'contents';
import { create } from 'zustand';

export interface ActiveSectionStore {
  activeSection: string;
  setActiveSection: (state: string) => void;
}

export const useActiveSectionStore = create<ActiveSectionStore>((set) => ({
  activeSection: MENU_LIST[0],
  setActiveSection: (state) => set({ activeSection: state }),
}));
