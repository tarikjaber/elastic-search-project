import React, { FC } from 'react';
import { SearchResultWrapper } from './SearchResult.styled';

interface SearchResultProps {}

const SearchResult: FC<SearchResultProps> = () => (
 <SearchResultWrapper data-testid="SearchResult">
    SearchResult Component
 </SearchResultWrapper>
);

export default SearchResult;
