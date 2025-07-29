import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";

test("displays the task text", () => {
  render(<Task text="text!" category="category!" />);
  expect(screen.getByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  render(<Task text="text!" category="category!" />);
  expect(screen.getByText("category!")).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  render(<App />);
  
  // Find the task text first
  const taskText = screen.getByText(/Buy rice/);
  expect(taskText).toBeInTheDocument();
  
  // Then find the delete button relative to the task
  const taskElement = taskText.closest('.task');
  const deleteButton = taskElement.querySelector('button');
  
  fireEvent.click(deleteButton);
  
  expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
});
