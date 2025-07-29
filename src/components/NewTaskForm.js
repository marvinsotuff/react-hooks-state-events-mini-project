
import React, { useState } from "react";

// NewTaskForm component receives categories and onTaskFormSubmit as props
function NewTaskForm({ categories, onTaskFormSubmit }) {
  // State to manage the input value for the task text
  const [text, setText] = useState("");
  // State to manage the selected category for the new task, default to the first available category
  const [category, setCategory] = useState(categories[0] || "");

  // Handle changes in the text input field
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Handle changes in the category select field
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior (page reload)

    // Create a new task object
    const newTask = {
      text: text,
      category: category,
    };

    // Call the onTaskFormSubmit callback prop with the new task object
    onTaskFormSubmit(newTask);

    // Clear the form fields after submission
    setText(""); // Reset text input
    // Keep the category selected, or reset to default if preferred
    // setCategory(categories[0] || "");
  };

  return (
    <form className="new-task-form p-4 bg-white rounded-lg shadow-md mb-6" onSubmit={handleSubmit}>
      <label className="block mb-4">
        <span className="text-gray-700 text-sm font-medium">Details</span>
        <input
          type="text"
          name="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={text} // Controlled component: input value is tied to state
          onChange={handleTextChange} // Update state on change
          required // Make the text input required
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700 text-sm font-medium">Category</span>
        <select
          name="category"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={category} // Controlled component: select value is tied to state
          onChange={handleCategoryChange} // Update state on change
        >
          {/* Filter out "All" category and map to option elements */}
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <input
        type="submit"
        value="Add task"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 ease-in-out cursor-pointer font-semibold"
      />
    </form>
  );
}

export default NewTaskForm;