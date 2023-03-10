import InputCredentialsForLogin from '..';
import renderer from 'react-test-renderer';
import React from 'react';
jest.mock('react-router-dom');
describe('InputCredentials for Login', () => {
  it('should render the InputCredentials component', async () => {
    const tree = renderer.create(<InputCredentialsForLogin />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});