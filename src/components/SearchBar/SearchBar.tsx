import React, { FC } from 'react';
import { SearchBarWrapper } from './SearchBar.styled';

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = () => (
 <SearchBarWrapper data-testid="SearchBar">
    SearchBar Component
 </SearchBarWrapper>
);

export default SearchBar;
