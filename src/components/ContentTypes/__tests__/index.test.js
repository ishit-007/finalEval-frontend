import ContentTypes from '..';
import renderer from 'react-test-renderer';
import React from 'react';

jest.mock('react-router-dom');

describe('ContentTypes', () => {
  it('should render the ContentTypes component', async () => {
    const tree = renderer.create(<ContentTypes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});