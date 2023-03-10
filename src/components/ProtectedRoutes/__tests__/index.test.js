import LoginScreenImage from '..';
import renderer from 'react-test-renderer';
import React from 'react';
import ProtectedRoutes from '..';

jest.mock('react-router-dom');

describe('ProtectedRoutes for Login', () => {
  it('should render the ProtectedRoutes component', async () => {
    const tree = renderer.create(<ProtectedRoutes text="" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
