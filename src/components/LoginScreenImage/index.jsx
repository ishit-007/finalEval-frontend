import LoginScreenImage from '../LoginScreenImage';
import { render } from '@testing-library/react';
import React from 'react';

describe('LoginScreenImage', () => {
  it('renders the component', () => {
    const { getByAltText, getByText } = render(<LoginScreenImage />);
    const image = getByAltText('Login Screen');
    const title1 = getByText(/Design API's fast,/i);
    const title2 = getByText(/Manage content easily./i);
    expect(image).toBeInTheDocument();
    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
  });
});
