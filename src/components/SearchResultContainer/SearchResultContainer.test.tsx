import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchResultContainer from './SearchResultContainer';

describe('<SearchResultContainer />', () => {
  test('it should mount', () => {
    render(<SearchResultContainer />);
    
    const searchResultContainer = screen.getByTestId('SearchResultContainer');

    expect(searchResultContainer).toBeInTheDocument();
  });
});