import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders http session id', () => {
  render(<App />);
  const linkElement = screen.getByText(/Http session id from backend/i);
  expect(linkElement).toBeInTheDocument();
});