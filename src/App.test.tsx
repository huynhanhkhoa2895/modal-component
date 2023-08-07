import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders modal when click', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  fireEvent.click(screen.getByText('Click To Open'));
  expect(screen.getByTestId('modal-container')).toBeInTheDocument();
});

test('renders modal when toggle', async () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  fireEvent.click(screen.getByText('Click To Open'));
  expect(screen.getByTestId('modal-container')).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('modal-container'));
  setTimeout(() => {
    expect(screen.getByTestId('modal-container')).not.toBeInTheDocument();
  }, 500);
});

test('render correct content', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Click To Open'));
  expect(screen.getByTestId('modal-content')).toHaveTextContent(
    'Hello Content',
  );
  expect(screen.getByTestId('modal-panel')).toHaveTextContent('Hello Panel');
  expect(screen.getByTestId('modal-footer')).toHaveTextContent('Hello Footer');
});
