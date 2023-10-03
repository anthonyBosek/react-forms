import { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

const ShoppingList = ({ items, onItemFormSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

  const itemsToDisplay = items
    //! filter by category if category selected is not "All"
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    //! filter by search term if search term is not empty
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  const allItems = itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        search={search}
        onSearchChange={setSearch}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">{allItems}</ul>
    </div>
  );
};

export default ShoppingList;
