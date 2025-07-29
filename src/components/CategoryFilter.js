import React from "react";



const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["Food", "Money", "Code", "Misc"]

  const filteredTasks = selectedCategory === "All"
    ? TASKS
    : TASKS.filter(task => task.category === selectedCategory);

    
function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      <div className="buttons">
        <button
          key="All"
          className={selectedCategory === "All" ? "selected" : ""}
          onClick={() => onSelectCategory("All")}
        >
          All
        </button>
        
        {/* Category buttons */}
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "selected" : ""}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
