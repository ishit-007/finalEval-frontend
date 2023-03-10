import { render } from '@testing-library/react';
import React from 'react';
import CollectionTypes from '..';
jest.mock('react-router-dom');

describe('CollectionTypes', () => {
  it('should render the CollectionTypes component', async () => {
    const { asFragment } = render(<CollectionTypes />);
    expect(asFragment()).toMatchSnapshot();
    // expect(queryByText('CMS+')).toBeTruthy();
  });
});