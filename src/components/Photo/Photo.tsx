import React from 'react';

import PlaceHolder from '../../assets/place-holder.jpg';
import { FavoriteButton } from '../Favorite-Button/Favorite-Button';
import { ImagesTypes } from '../Images/enums';
import { ImagesActions } from '../Images/types';
import * as PhotoStyles from './Photo.module.scss';

interface PhotoProps {
  farm: number;
  server: string;
  id: number;
  secret: string;
  title: string;
  ownername: string;
  favorites: number[];
  dispatch: React.Dispatch<ImagesActions>;
}

export const Photo: React.FC<PhotoProps> = ({
  farm,
  server,
  id,
  secret,
  title,
  ownername,
  dispatch,
  favorites,
}) => {
  const photoUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
  const isFavorite = favorites.includes(id);
  return (
    <div className={PhotoStyles.default.container}>
      <img
        aria-label="new image"
        className={`${PhotoStyles.default.image} card-img-top`}
        title={title}
        src={PlaceHolder}
        data-src={photoUrl}
      />
      <div className={PhotoStyles.default.overlay}>
        <span
          className={`${PhotoStyles.default.underline} ${PhotoStyles.default.title}`}
        >
          {title || 'title unavailable'}
        </span>
        <span>{ownername}</span>
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={() =>
            isFavorite
              ? dispatch({
                  type: ImagesTypes.RemoveFavorite,
                  payload: {
                    id,
                  },
                })
              : dispatch({
                  type: ImagesTypes.AddFavorite,
                  payload: {
                    id,
                  },
                })
          }
        />
      </div>
    </div>
  );
};
