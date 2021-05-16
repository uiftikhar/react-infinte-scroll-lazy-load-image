import React, { createContext, useReducer } from 'react';
import { LocalStorage } from '../enums';

import { imagesReducer } from '../reducers/images.reducer';
import { pageReducer } from '../reducers/pager.reducer';
import { ImagesActions, ImagesState, PagerActions, PagerState } from '../types';

type MainReducerState = {
  images: ImagesState;
  pager: PagerState;
};

const InitialState: MainReducerState = {
  images: {
    photos: {
      photo: [],
      page: 1,
      pages: 13,
      perpage: 40,
    },
    fetching: true,
    favorites: JSON.parse(localStorage.getItem(LocalStorage.Favorites) || '[]'),
  },
  pager: {
    page: 1,
  },
};

const AppContext = createContext<{
  state: MainReducerState;
  dispatch: React.Dispatch<ImagesActions | PagerActions>;
}>({
  state: InitialState,
  dispatch: () => null,
});

const mainReducer = (
  { images, pager }: MainReducerState,
  action: ImagesActions | PagerActions,
) => ({
  images: imagesReducer(images, action as ImagesActions),
  pager: pageReducer(pager, action as PagerActions),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, InitialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
