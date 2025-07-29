import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


const [tasks, setTasks] = useState(TASKS);
  // ... other state ...

  // Get unique categories from tasks (including "All")
  const categories = ["All", ...new Set(tasks.map(task => task.category))];

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };


function App() {

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={["All", ...new Set(tasks.map(task => task.category))]}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
