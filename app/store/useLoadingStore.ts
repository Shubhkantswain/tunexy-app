// store/useAuthStore.ts
import { create } from 'zustand';

interface LoadingStore {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

export const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: true, // Default value
  setIsLoading: (loading) => set({ isLoading: loading }),
}));