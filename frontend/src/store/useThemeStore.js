import { create } from "zustand";

const defaultTheme = localStorage.getItem("theme") || "coffee";

export const useThemeStore = create((set) => ({
  theme: defaultTheme,
  setTheme: (newTheme) => {
    localStorage.setItem("theme", newTheme);
    set({ theme: newTheme });
  },
}));
