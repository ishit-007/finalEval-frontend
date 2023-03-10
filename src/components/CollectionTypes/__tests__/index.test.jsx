import ContentTypes from '..';
import renderer from 'react-test-renderer';
import React from 'react';
import CollectionTypes from '..';

describe('collectiontypes', () => {
  it('should render the collectiontypes component', async () => {
    const tree = renderer.create(<CollectionTypes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
