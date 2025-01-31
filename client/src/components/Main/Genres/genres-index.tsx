import * as React from 'react';
import { useState } from 'react';
import './genres-style.scss';
import GenreItem from './Genre Item/genre-item-index';
import { GenreDb } from 'interfaces/genreObjects';
import { Artist } from 'interfaces/spotifyObjects';
import {
  getSortedGenreKeys,
  getMatchingGenres,
  countUnselected,
} from './genres-helpers';
import { WaveSpinner } from 'react-spinners-kit';
import SearchBar from 'components/common/Searchbar/searchbar-index';

export interface Props {
  genreList: GenreDb;
  artists: Artist[];
  selectHandler: (genreName: string) => void;
  loaded: boolean;
}

const Genres: React.FC<Props> = ({
  genreList,
  artists,
  selectHandler,
  loaded,
}) => {
  let [searchValue, setSearchValue] = useState('');

  return (
    <div className={'genres-wrapper' + (loaded ? ' loaded' : '')}>
      {loaded ? (
        <>
          <div className="genre-search">
            <SearchBar
              placeholder="Search genres"
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>

          <div className={'genres-container' + (loaded ? ' loaded' : '')}>
            {getSortedGenreKeys(
              searchValue
                ? getMatchingGenres(searchValue, genreList)
                : genreList,
              artists.filter((artist) => artist.selected)
            ).map((genreName) => {
              return (
                <GenreItem
                  key={genreName}
                  genreName={genreName}
                  artistCount={countUnselected(genreList, genreName, artists)}
                  selectHandler={selectHandler}
                  selected={genreList[genreName].selected}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="genre-loading-container">
          <WaveSpinner
            size={30}
            color="var(--spotify-white)"
            loading={!loaded}
          />
          <p className="loading-genres-message">Loading your genres...</p>
        </div>
      )}
      {/* - Genres will be sorted based on how many artists they contain (descending). Selected genres are always on top (getSortedGenreKeys)
      - If there is a search value entered in the searchbar, filter only genres whose names match with the search value       (getMatchingGenres)
      - For each genre, the artist count shows only the number of artists in that genre that the user has not selected so far.
        For example, say "Rock" has 5 artists, and "Modern Rock" has 3 artists, which are also under "Rock". If the user selects "Modern Rock" first, those 3 artists will be on display. On the left hand side, "Rock" genre will now show an artist count of 2, because the other 3 has already been chosen with the "Modern Rock" tag. */}
    </div>
  );
};

export default Genres;
