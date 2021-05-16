import { useEffect } from 'react';

import { ImagesTypes } from '../enums';
import { ImagesActions } from '../types';

// TODO: Put it in ENV
// APIKEY: 85ee567e29e6c9a0a2ecba3404d97d8b
// convert to async await
export const useFetch = (
  data: { page: number },
  dispatch: (arg0: ImagesActions) => void,
) => {
  useEffect(() => {
    dispatch({
      type: ImagesTypes.Fetching,
      payload: {
        fetching: true,
      },
    });
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=85ee567e29e6c9a0a2ecba3404d97d8b&extras=owner_name&per_page=40&page=${data.page}&format=json&nojsoncallback=1`,
    )
      .then((imagesResponse) => imagesResponse.json())
      .then((photos) => {
        dispatch({
          type: ImagesTypes.Stack,
          payload: {
            ...photos,
          },
        });
        dispatch({
          type: ImagesTypes.Fetching,
          payload: {
            fetching: false,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: ImagesTypes.Error,
          payload: {
            error: true,
          },
        });
        return e;
      });
  }, [dispatch, data.page]);
};
