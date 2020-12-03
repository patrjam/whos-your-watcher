import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Whos your watcher?" text', () => {
  render(<App />);
  const textElement = screen.getByText(/Who's your watcher/i);
  expect(textElement).toBeInTheDocument();
});
