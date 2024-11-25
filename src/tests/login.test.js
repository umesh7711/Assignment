import { render, fireEvent, screen } from '@testing-library/react';
import Login from '../components/Login';
import '@testing-library/jest-dom';

test('renders login form and submits', () => {
  render(<Login setToken={() => {}} />);

  // Check if input fields and buttons are present
  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  expect(screen.getByText(/Login/i)).toBeInTheDocument();

  // Simulate user typing and submitting
  fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByPlaceholderText(/Password/i), { target: { value: 'password123' } });

  fireEvent.click(screen.getByText(/Login/i));

  // Check if expected result is shown (i.e., token saved in localStorage)
  expect(localStorage.getItem('token')).toBeDefined();
});
