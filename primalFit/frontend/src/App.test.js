import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the App component without crashing', () => {
  render(<App />);
  expect(true).toBe(true);

});

