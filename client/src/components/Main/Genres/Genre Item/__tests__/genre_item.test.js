import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import GenreItem from '../genre-item-index';

describe('Genre Item', () => {
  it('appears on screen', () => {
    const { container } = render(<GenreItem />);
    const tag = container.querySelector('a');
    expect(tag).toBeInTheDocument();
  });

  it('renders the right name', () => {
    const genreName = 'metal';
    render(<GenreItem genreName={genreName} />);
    const name = screen.getByText('metal');
    expect(name).toBeInTheDocument();
  });

  it('renders the right number of artists', () => {
    const artistCount = 3;
    render(<GenreItem artistCount={artistCount} />);
    const count = screen.getByText('+3 artists');
    expect(count).toBeInTheDocument();
  });

  it('only renders genre name when selected', () => {
    const genreName = 'punk rock';
    const artistCount = 3;
    render(
      <GenreItem
        genreName={genreName}
        artistCount={artistCount}
        selected={true}
      />
    );
    const count = screen.queryByText('+3 artists');
    expect(count).toBeNull();
  });
});
