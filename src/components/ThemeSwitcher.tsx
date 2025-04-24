import { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import { cn } from '../lib/utils';

const themes = [
  { name: 'Default', primary: 'from-purple-600 to-pink-600' },
  { name: 'Ocean', primary: 'from-blue-600 to-cyan-600' },
  { name: 'Forest', primary: 'from-green-600 to-emerald-600' },
  { name: 'Sunset', primary: 'from-orange-600 to-red-600' },
  { name: 'Neon', primary: 'from-indigo-600 to-purple-600' }
];

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const handleThemeChange = (theme: typeof themes[0]) => {
    setCurrentTheme(theme);
    // Apply theme changes here
    document.documentElement.style.setProperty('--theme-primary', theme.primary);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-20 right-4 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg"
      >
        <Palette className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-2 w-48"
        >
          {themes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => handleThemeChange(theme)}
              className={cn(
                "w-full px-4 py-2 rounded-lg text-left",
                "hover:bg-gray-100 dark:hover:bg-gray-700",
                "transition-colors duration-200",
                currentTheme.name === theme.name && "bg-gray-100 dark:bg-gray-700"
              )}
            >
              <div className="flex items-center gap-2">
                <div className={cn(
                  "w-6 h-6 rounded-full bg-gradient-to-r",
                  theme.primary
                )} />
                <span>{theme.name}</span>
              </div>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}