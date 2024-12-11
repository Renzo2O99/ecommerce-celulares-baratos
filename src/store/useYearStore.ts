import { create } from 'zustand'

interface YearState {
  year: number
  setYear: (year: number) => void
}

export const useYearStore = create<YearState>((set) => ({
  year: new Date().getFullYear(),
  setYear: (year) => set({ year }),
}))
