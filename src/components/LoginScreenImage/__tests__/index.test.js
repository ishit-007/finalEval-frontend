import LoginScreenImage from '..';
import renderer from 'react-test-renderer';
import React from 'react';

jest.mock('react-router-dom');

describe('LoginScreenImage for Login', () => {
  it('should render the LoginScreenImage component', async () => {
    const tree = renderer.create(<LoginScreenImage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});