// src/components/TaskList.js
import React from "react";
import Task from "./Task"; // Make sure this import path is correct

function TaskList({ tasks, onDeleteTask }) { // TaskList expects 'tasks' array and 'onDeleteTask'
  return (
    <div className="task-list">
      {/* Check if tasks array exists and has items before mapping */}
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          // Key prop is crucial for lists in React
          // Pass the entire 'task' object to the Task component
          <Task key={task.id || task.text} task={task} onDeleteTask={onDeleteTask} />
        ))
      ) : (
        <p>No tasks to display.</p> // Optional: message when no tasks are present
      )}
    </div>
  );
}

export default TaskList;

