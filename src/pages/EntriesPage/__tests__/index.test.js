import EntriesPage from '..';
import renderer from 'react-test-renderer';
import React from 'react';

jest.mock('react-router-dom');

describe('EntriesPage', () => {
  it('should render the EntriesPage component', async () => {
    const tree = renderer.create(<EntriesPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});