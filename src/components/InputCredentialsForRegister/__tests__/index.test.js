import InputCredentialsForRegister from '..';
import renderer from 'react-test-renderer';
import React from 'react';

jest.mock('react-router-dom');

describe('InputCredentialsForRegister for Login', () => {
  it('should render the InputCredentialsForRegister component', async () => {
    const tree = renderer.create(<InputCredentialsForRegister />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});