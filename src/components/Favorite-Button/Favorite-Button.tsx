import React from 'react';

import * as FavoriteButtonStyles from './Favorite-Button.module.scss';

interface FavoriteButtonProps {
  onClick: () => void;
  isFavorite: boolean;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  onClick,
  isFavorite,
}) => {
  return (
    <div
      aria-label="Favorite"
      className={FavoriteButtonStyles.default['button-wrapper']}
      onClick={onClick}
    >
      <button
        type="button"
        className={`${FavoriteButtonStyles.default['like-button']} ${
          isFavorite ? FavoriteButtonStyles.default['is-active'] : null
        }`}
      >
        <i
          className={`${FavoriteButtonStyles.default.favorite_border} ${FavoriteButtonStyles.default['not-liked']} ${FavoriteButtonStyles.default.bouncy}`}
        />
        <i
          className={`${FavoriteButtonStyles.default.favorite_full} ${FavoriteButtonStyles.default['is-liked']} ${FavoriteButtonStyles.default.bouncy}`}
        />
        <span className={FavoriteButtonStyles.default['like-overlay']} />
      </button>
      <p>Favourite</p>
    </div>
  );
};
