import React, { FC } from 'react';
import './SearchBar.scss';

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => (
  <div className="SearchBar" data-testid="SearchBar">
    SearchBar Component
  </div>
);

export default SearchBar;
