import React, { FC } from 'react';
import './SearchResult.scss';

interface SearchResultProps {}

const SearchResult: FC<SearchResultProps> = () => (
  <div className="SearchResult" data-testid="SearchResult">
    SearchResult Component
  </div>
);

export default SearchResult;
