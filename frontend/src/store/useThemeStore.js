import { create } from "zustand";

export const useThemeStore = create((set) => {
  const localTheme = localStorage.getItem("theme") || "dark";
  return {
    theme: localTheme,
    setTheme: (newTheme) => {
      localStorage.setItem("theme", newTheme);
      set({ theme: newTheme });
    },
  };
});
