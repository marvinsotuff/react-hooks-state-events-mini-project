import React from "react";

// The Task component now accepts 'task' and 'onDeleteTask' as props
// src/components/Task.js
function Task({ task, onDeleteTask }) {
  // Destructure text and category from the task object for easier access
  // This line caused errors previously because tests weren't passing 'task' prop correctly.
  // Ensure the 'task' prop is always a valid object when passed to this component from TaskList.
  const { text, category } = task; // This line should be INSIDE the component

  // Handle click on the delete button
  // This function should also be INSIDE the component
  const handleDeleteClick = () => {
    // Call the onDeleteTask function passed from the parent (App.js)
    // Pass the entire task object or just its id, depending on how onDeleteTask is structured
    onDeleteTask(task); // Assuming onDeleteTask expects the full task object
  };

  return (
    <div className="task flex justify-between items-center p-4 mb-3 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex-grow">
        {/* Display the category of the task */}
        <div className="label text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full inline-block mb-1">
          {category}
        </div>
        {/* Display the text content of the task */}
        <div className="text text-gray-800 text-base font-medium">
          {text}
        </div>
      </div>
      {/* Delete button */}
      <button
        className="delete ml-4 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full text-xs transition-colors duration-200"
        onClick={handleDeleteClick} // Attach the click handler
      >
        X
      </button>
    </div>
  );
}

export default Task;
