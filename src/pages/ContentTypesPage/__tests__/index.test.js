import ContentTypesPage from '..';
import renderer from 'react-test-renderer';
import React from 'react';

jest.mock('react-router-dom');

describe('ContentTypesPage for Login', () => {
  it('should render the ContentTypesPage component', async () => {
    const tree = renderer.create(<ContentTypesPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});