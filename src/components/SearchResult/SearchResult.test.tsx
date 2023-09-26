import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchResult from './SearchResult';

describe('<SearchResult />', () => {
  test('it should mount', () => {
    render(<SearchResult />);
    
    const searchResult = screen.getByTestId('SearchResult');

    expect(searchResult).toBeInTheDocument();
  });
});