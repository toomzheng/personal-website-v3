import { create } from 'zustand'

interface StartedStore {
  isStarted: boolean
  setIsStarted: (started: boolean) => void
}

export const useStartedStore = create<StartedStore>((set) => ({
  isStarted: false,
  setIsStarted: (started) => set({ isStarted: started }),
}))
