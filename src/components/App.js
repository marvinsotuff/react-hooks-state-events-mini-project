import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import { TASKS as initialTasks, CATEGORIES } from '../data';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter tasks based on selected category
  const filteredTasks = selectedCategory === "All" 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  // Handle task deletion
  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  // Handle new task submission
  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <TaskList 
        tasks={filteredTasks} 
        onDeleteTask={handleDeleteTask} 
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(cat => cat !== "All")} 
        onTaskFormSubmit={handleTaskFormSubmit}
      />
    </div>
  );
}

export default App;

