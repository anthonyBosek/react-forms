import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

const App = () => {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeClick = () => setIsDarkMode((isDarkMode) => !isDarkMode);

  const handleFormSubmit = (newItem) => setItems([...items, newItem]);

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
