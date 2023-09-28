import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchResultsContainer from './SearchResultsContainer';

describe('<SearchResultsContainer />', () => {
  test('it should mount', () => {
    render(<SearchResultsContainer />);
    
    const searchResultsContainer = screen.getByTestId('SearchResultsContainer');

    expect(searchResultsContainer).toBeInTheDocument();
  });
});