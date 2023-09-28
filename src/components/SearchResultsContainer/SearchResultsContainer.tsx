import React, { FC } from 'react';
import './SearchResultsContainer.scss';

interface SearchResultsContainerProps {}

const SearchResultsContainer: FC<SearchResultsContainerProps> = () => (
  <div className="SearchResultsContainer" data-testid="SearchResultsContainer">
    SearchResultsContainer Component
  </div>
);

export default SearchResultsContainer;
