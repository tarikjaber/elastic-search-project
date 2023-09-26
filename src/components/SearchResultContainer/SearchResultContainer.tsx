import React, { FC } from 'react';
import { SearchResultContainerWrapper } from './SearchResultContainer.styled';

interface SearchResultContainerProps {}

const SearchResultContainer: FC<SearchResultContainerProps> = () => (
 <SearchResultContainerWrapper data-testid="SearchResultContainer">
    SearchResultContainer Component
 </SearchResultContainerWrapper>
);

export default SearchResultContainer;
