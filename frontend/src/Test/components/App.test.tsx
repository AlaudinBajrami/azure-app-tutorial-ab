import React from 'react';
import '../setupTests';
import "../mocks.js"
import { render, screen } from '@testing-library/react';
import App from '../../main/components/App';

test('renders http session id', () => {
  render(<App />);
  const linkElement = screen.getByText(/Http session id from backend/i);
  expect(linkElement).toBeInTheDocument();
});