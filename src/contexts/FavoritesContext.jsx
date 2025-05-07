import { createContext, useContext, useState, useEffect } from 'react';

/**
 * Context for managing favorite characters
 * @type {React.Context}
 */
const FavoritesContext = createContext(null);

/**
 * Custom hook to handle localStorage operations
 * @param {string} key - Storage key
 * @param {any} initialValue - Default value
 */
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

/**
 * Provider component for favorites management
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const addFavorite = (character) => {
    if (!favorites.some(fav => fav.id === character.id)) {
      setFavorites(prev => [...prev, character]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(prev => prev.filter(char => char.id !== id));
  };

  const contextValue = {
    favorites,
    addFavorite,
    removeFavorite
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
}

/**
 * Custom hook to access favorites context
 * @returns {Object} Favorites context value
 * @throws {Error} If used outside of FavoritesProvider
 */
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === null) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};