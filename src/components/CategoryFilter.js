
import React from "react";

// CategoryFilter component receives categories, selectedCategory, and onSelectCategory as props
function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="categories mb-6 p-4 bg-white rounded-lg shadow-md">
      <h5 className="text-lg font-semibold mb-3 text-gray-700">Category filters</h5>
      <div className="flex flex-wrap gap-2">
        {/* Map over the categories array to render a button for each category */}
        {categories.map((category) => (
          <button
            key={category} // Use category as the key prop
            // Apply conditional styling based on whether the category is selected
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out
              ${selectedCategory === category
                ? "bg-blue-600 text-white shadow-md selected" // Styles for selected button
                : "bg-gray-200 text-gray-700 hover:bg-gray-300" // Styles for unselected buttons
              }
            `}
            onClick={() => onSelectCategory(category)} // Call onSelectCategory when button is clicked
          >
            {category} {/* Display the category name on the button */}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
