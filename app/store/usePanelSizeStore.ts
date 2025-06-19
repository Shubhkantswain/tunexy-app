// store/useAuthStore.ts
import { create } from 'zustand';

interface PanelSizeStore {
  panelSize: number;
  setPanelSize: (value: number) => void;
};

export const usePanelSizeStore = create<PanelSizeStore>((set) => ({
  panelSize: 25, // Default value
  setPanelSize: (value) => set({ panelSize: value }),
}));