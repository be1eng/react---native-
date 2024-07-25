import React from 'react';
import { render } from '@testing-library/react';
import { BasicSignUp } from './sign-up.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicSignUp />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
