import { render, screen } from '@testing-library/react';
import App from './App';

test('Test1', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is/i);
  expect(linkElement).toBeInTheDocument();
});

test('Test2', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reshab/i);
  expect(linkElement).toBeInTheDocument();
});

// test('Test3', () => {
//   render(<App />);
//   const linkElement = screen.getByTestId("img1");
//   expect(linkElement).toBeInTheDocument();
// });

// test('Test4', () => {
//   render(<App />);
//   const linkElement = screen.getByRole("btn");
//   expect(linkElement).toHaveTextContent("Button");
// });

// test('Test5', () => {
//   render(<App />);
//   const linkElement = screen.getAllByRole("listitem");
//   expect(linkElement.length).toEqual(3);
// });