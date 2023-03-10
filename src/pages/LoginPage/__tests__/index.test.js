import LoginPage from '..';
import renderer from 'react-test-renderer';
import React from 'react';

jest.mock('react-router-dom');

describe('LoginPage', () => {
  it('should render the LoginPage component', async () => {
    const tree = renderer.create(<LoginPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});