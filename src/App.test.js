// Import necessary functions and components for testing
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this to use jest-dom matchers
import App from './App';

// Mock fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);

// Describe block for grouping related tests
describe('App Component', () => {
  // Test case for rendering
  test('renders App component', () => {
    const { getByText } = render(<App />);
    const headingElement = getByText(/Pöördumised kasutajatoele/i);
    expect(headingElement).toBeInTheDocument();
  });

  // Test case for form submission
  test('form submission adds new ticket', async () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const descriptionInput = getByPlaceholderText('Kirjeldus');
    const submitButton = getByText('Sisesta');

    // Fill form
    fireEvent.change(descriptionInput, { target: { value: 'Test description' } });

    // Submit form
    fireEvent.click(submitButton);

    // Wait for fetch call
    await waitFor(() => expect(fetch).toHaveBeenCalled());

    // Check if form is cleared after submission
    expect(descriptionInput.value).toBe('');
  });

  // Add more test cases as needed
});