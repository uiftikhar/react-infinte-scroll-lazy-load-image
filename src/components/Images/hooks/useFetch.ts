import { useEffect } from 'react';

import { ImagesTypes } from '../enums';
import { ImagesActions } from '../types';

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

    const fetchData = async () => {
      const result = await fetch(
        `https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${process.env.REACT_APP_FLICKR_API}&extras=owner_name&per_page=40&page=${data.page}&format=json&nojsoncallback=1`,
      );

      const photos = await result.json();
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
    };

    try {
      fetchData();
    } catch (error) {
      dispatch({
        type: ImagesTypes.Error,
        payload: {
          error: true,
        },
      });
    }
  }, [dispatch, data.page]);
};
