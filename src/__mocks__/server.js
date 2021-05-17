import '@testing-library/jest-dom/extend-expect';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { MockPhotos } from './mockPhotos';

export const MOCK_URL = `https://www.flickr.com/services/rest`;
export const server = setupServer(
  rest.get(MOCK_URL, (req, res, ctx) => {
    return res(ctx.json(MockPhotos));
  }),
);
