import { create } from 'zustand';
import { Theme } from '../types';

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'light',
  
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      
      // Update body class for global theme switching
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      // Save to localStorage for persistence
      localStorage.setItem('theme', newTheme);
      
      return { theme: newTheme };
    });
  },
  
  setTheme: (theme: Theme) => {
    set({ theme });
    
    // Update body class
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  },
}));

// Initialize theme from localStorage on load
const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme') as Theme | null;
  
  if (savedTheme) {
    useThemeStore.getState().setTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Use system preference as fallback
    useThemeStore.getState().setTheme('dark');
  }
};

// Call when module is imported
initializeTheme();

export default useThemeStore;