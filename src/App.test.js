import { render, screen } from '@testing-library/react';
import App from './practica-3-4-dwc/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
