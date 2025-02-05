import { create } from 'zustand';

interface StartedState {
  isStarted: boolean;
  setIsStarted: (started: boolean) => void;
}

export const useStartedStore = create<StartedState>((set) => ({
  isStarted: false,
  setIsStarted: (started) => set({ isStarted: started }),
}));

export const useIsStarted = () => useStartedStore((state) => state.isStarted);
