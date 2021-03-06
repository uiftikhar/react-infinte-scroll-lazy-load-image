import React, { useContext, useRef } from 'react';

import { AppContext } from '../../App.context';
import { LoadingIndicator } from '../Loading-Indicator/Loading-Indicator';
import { Photo } from '../Photo/Photo';
import { useFetch } from './hooks/useFetch';
import { useInfiniteScroll } from './hooks/useInfiniteScroll';
import { useLazyLoading } from './hooks/useLazyLoading';
import { useLocalStorage } from './hooks/useLocalStorage';
import * as ImageStyles from './Images.module.scss';
import { Photo as PhotoType } from './types';

export const Images: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const bottomBoundaryRef = useRef(null);
  useFetch({ page: state.pager.page }, dispatch);
  useLazyLoading('.card-img-top', state.images);
  useInfiniteScroll(bottomBoundaryRef, dispatch);
  useLocalStorage(state.images.favorites);
  return (
    <>
      <div className={ImageStyles.default['images-container']}>
        {state.images.photos.photo.map((image: PhotoType) => {
          const { farm, id, secret, server, title, ownername } = image;
          return (
            <Photo
              ownername={ownername}
              farm={farm}
              id={id}
              favorites={state.images.favorites}
              secret={secret}
              server={server}
              title={title}
              dispatch={dispatch}
              key={id}
            />
          );
        })}
      </div>
      {state.images.fetching && <LoadingIndicator />}
      <div id="page-bottom-boundary" ref={bottomBoundaryRef} />
    </>
  );
};
