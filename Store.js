import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useChoiceStore = create(
  persist(
    (set) => ({
      choice: true, // default value

      // Set choice to true
      setChoiceTrue: () => set({ choice: true }),

      // Optional: set choice back to false
      setChoiceFalse: () => set({ choice: false }),
    }),
    {
      name: "choice-storage", // key in localStorage
    },
  ),
);

export const usePagechangeStore = create((set) => ({
  page: "dashboard",
  setPage: (newPage) => set({ page: newPage }),
}));
