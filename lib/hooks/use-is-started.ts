import { create } from 'zustand';

interface StartedState {
  isStarted: boolean;
  setIsStarted: (isStarted: boolean) => void;
}

export const useStartedStore = create<StartedState>((set) => ({
  isStarted: true, // Always start as true
  setIsStarted: (isStarted) => set({ isStarted }),
}));

export const useIsStarted = () => useStartedStore((state) => state.isStarted);
