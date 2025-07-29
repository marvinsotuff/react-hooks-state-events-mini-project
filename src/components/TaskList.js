import React from "react";


import { TASKS } from "../data";

const [tasks, setTasks] = useState(TASKS);
const [selectedCategory, setSelectedCategory] = useState("All");

const filteredTasks = selectedCategory === "All"
  ? tasks
  : tasks.filter(task => task.category === selectedCategory);

function TaskList({ TASKS }) {
  return (
    <div className="tasks">
      {TASK.map((task) => (
        <Task key={task.text} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
