import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Counter text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Counter/i);
  expect(linkElement).toBeInTheDocument();
});
