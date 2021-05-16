import { ImagesTypes, PagerTypes } from './enums';

export type Photo = {
  id: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
  ownername: string;
  farm: number;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  is_primary: number;
  has_comment: number;
};

export type Photos = {
  page?: number;
  pages?: number;
  perpage?: number;
  total?: number;
  photo: Photo[];
};

export type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: {
    type: Key;
    payload: M[Key];
  };
};

export type ImagesState = {
  photos: Photos;
  fetching: boolean;
  favorites: number[];
};

export type PagerState = { page: number };

export type ImagesPayload = {
  [ImagesTypes.Stack]: {
    photos: Photos;
  };
  [ImagesTypes.Fetching]: {
    fetching: boolean;
  };
  [ImagesTypes.Error]: {
    error: boolean;
  };
  [ImagesTypes.AddFavorite]: {
    id: number;
  };
  [ImagesTypes.RemoveFavorite]: {
    id: number;
  };
};

export type ImagesActions =
  ActionMap<ImagesPayload>[keyof ActionMap<ImagesPayload>];

export type PagerActions = {
  type: PagerTypes.AdvancePage;
};
