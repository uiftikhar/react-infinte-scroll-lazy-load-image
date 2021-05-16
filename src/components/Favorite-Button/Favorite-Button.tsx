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
        className={`${FavoriteButtonStyles.default['favorite-button']} ${
          isFavorite ? FavoriteButtonStyles.default['is-active'] : null
        }`}
      >
        <i
          className={`${FavoriteButtonStyles.default['favorite-border']} ${FavoriteButtonStyles.default['not-favorite']} ${FavoriteButtonStyles.default.bouncy}`}
        />
        <i
          className={`${FavoriteButtonStyles.default['favorite-full']} ${FavoriteButtonStyles.default['is-favorite']} ${FavoriteButtonStyles.default.bouncy}`}
        />
        <span className={FavoriteButtonStyles.default['favorite-overlay']} />
      </button>
      <p>Favourite</p>
    </div>
  );
};
