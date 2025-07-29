import React from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: categories[0] // Default to first category
  });

  // Filter out "All" category
  const filteredCategories = categories.filter(category => category !== "All");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      text: formData.text,
      category: formData.category,
      id: Date.now() // Generate a unique ID (you can use a better method if available)
    };
    onTaskFormSubmit(newTask);
    // Reset form
    setFormData({
      text: "",
      category: filteredCategories[0]
    });
  };



  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {/* render <option> elements for each category here */}
          {filteredCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
