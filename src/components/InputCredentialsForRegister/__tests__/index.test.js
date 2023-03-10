import InputCredentialsForRegister from '..';
import renderer from 'react-test-renderer';
import React from 'react';

describe('InputCredentialsForRegister', () => {
  it('should render the Input component', async () => {
    const tree = renderer.create(<InputCredentialsForRegister />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});