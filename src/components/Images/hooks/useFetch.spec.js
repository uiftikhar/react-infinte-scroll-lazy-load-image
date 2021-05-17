import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '../../../__mocks__/intersectionObserverMock';

import App from '../../../App';
import { MockPhotos } from '../../../__mocks__/mockPhotos';

describe('App', () => {
  it('fetches images', async () => {
    render(<App />);
    const items = await waitFor(() =>
      screen.getAllByRole('img', { name: 'new image' }),
    );
    expect(items.length).toBe(2);
  });

  it('renders fetched images to view', async () => {
    render(<App />);
    await waitForElementToBeRemoved(() => screen.getByTitle('loading'));
    MockPhotos.photos.photo.forEach((photo) => {
      expect(screen.getByText(photo.title)).toBeInTheDocument();
    });
  });

  it('shows and removes loading indicator', async () => {
    render(<App />);
    const loadingIndicator = screen.getByTitle('loading');
    expect(loadingIndicator).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTitle('loading'));
    expect(loadingIndicator).not.toBeInTheDocument();
  });
});
