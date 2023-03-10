import LoginScreenImage from '..';
import renderer from 'react-test-renderer';
import React from 'react';

describe('LoginScreenImage', () => {
  it('should render the Image component', async () => {
    const tree = renderer.create(<LoginScreenImage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});