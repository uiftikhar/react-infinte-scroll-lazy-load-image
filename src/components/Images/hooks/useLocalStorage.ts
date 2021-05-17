import { useEffect } from 'react';

import { LocalStorage } from '../enums';

export const useLocalStorage = (favorites: number[]) => {
  useEffect(() => {
    localStorage.setItem(LocalStorage.Favorites, JSON.stringify(favorites));
  }, [favorites]);
};
