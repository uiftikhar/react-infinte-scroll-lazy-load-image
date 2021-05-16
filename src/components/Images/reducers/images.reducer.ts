import { ImagesTypes } from '../enums';
import { ImagesActions, ImagesState } from '../types';

export const imagesReducer = (state: ImagesState, action: ImagesActions) => {
  switch (action.type) {
    case ImagesTypes.Stack:
      return {
        ...state,
        photos: {
          ...action.payload.photos,
          photo: state.photos.photo.concat(action.payload.photos.photo),
        },
      };
    case ImagesTypes.Fetching:
      return { ...state, fetching: action.payload.fetching };
    case ImagesTypes.AddFavorite:
      return {
        ...state,
        favorites: state.favorites.concat(...[action.payload.id]), // Get from local storage,
      };
    case ImagesTypes.RemoveFavorite:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item !== action.payload.id), // local storage
      };
    default:
      return state;
  }
};
