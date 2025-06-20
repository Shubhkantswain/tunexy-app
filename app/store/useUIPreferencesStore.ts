// store/useUIPreferencesStore.ts
import { create } from 'zustand';
import { ViewType } from '~/types';

interface Preferences {
  panelSize: number;
  view: ViewType;
}

interface UIPreferencesStore {
  preferences: Preferences;
  setPreferences: (newPreferences: Partial<Preferences>) => void;
}

export const useUIPreferencesStore = create<UIPreferencesStore>((set) => ({
  preferences: {
    panelSize: 25,
    view: 'Default List',
  },
  setPreferences: (newPreferences) =>
    set((state) => ({
      preferences: {
        ...state.preferences,
        ...newPreferences,
      },
    })),
}));
