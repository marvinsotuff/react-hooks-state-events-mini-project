import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  // Initialize tasks state with the TASKS data
  const [tasks, setTasks] = useState(TASKS);
  // Initialize categories state with the CATEGORIES data
  const [categories] = useState(CATEGORIES);
  // Initialize selectedCategory state to 'All' to show all tasks initially
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle category selection for filtering
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Function to handle task deletion
  const handleDeleteTask = (taskToDelete) => {
    // Filter out the task that matches the text of the task to delete
    const updatedTasks = tasks.filter((task) => task.text !== taskToDelete.text);
    setTasks(updatedTasks);
  };

  // Function to handle adding a new task from the form
  const onTaskFormSubmit = (newTask) => {
    // Add the new task to the existing tasks array
    setTasks([...tasks, newTask]);
  };

  // Filter tasks based on the selected category
  const filteredTasks = tasks.filter((task) => {
    // If 'All' is selected, show all tasks
    if (selectedCategory === "All") {
      return true;
    }
    // Otherwise, show only tasks that match the selected category
    return task.category === selectedCategory;
  });

  return (
    <div className="App p-4 max-w-xl mx-auto bg-gray-100 rounded-lg shadow-lg my-8 font-sans">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">My tasks</h2>
      
      {/* Pass categories and the category selection handler to CategoryFilter */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      
      {/* Pass categories and the form submission handler to NewTaskForm */}
      <NewTaskForm
        categories={categories.filter(cat => cat !== "All")} // Exclude "All" for new task category selection
        onTaskFormSubmit={onTaskFormSubmit}
      />
      
      {/* Pass the filtered tasks and the delete handler to TaskList */}
      <TaskList
        tasks={filteredTasks}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;

