import RegistrationPage from '..';
import renderer from 'react-test-renderer';
import React from 'react';

jest.mock('react-router-dom');

describe('RegistrationPage', () => {
  it('should render the RegistrationPage component', async () => {
    const tree = renderer.create(<RegistrationPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});