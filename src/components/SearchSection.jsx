// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const SearchSection = () => {
  const [dropdown1Value, setDropdown1Value] = useState("");
  const [dropdown2Value, setDropdown2Value] = useState("");
  const [normalInputValue, setNormalInputValue] = useState("");
  return (
    <div className="p-4">
      <div className="flex space-x-2">
        <select
          className="border rounded py-2 px-3 w-1/3"
          value={dropdown1Value}
          onChange={(e) => setDropdown1Value(e.target.value)}
        >
          <option value="">Sticker</option>
          <option value="option1">Sticker 1</option>
          <option value="option2">Sticker 2</option>
          <option value="option3">Sticker 3</option>
        </select>
        <select
          className="border rounded py-2 px-3 w-1/3"
          value={dropdown2Value}
          onChange={(e) => setDropdown2Value(e.target.value)}
        >
          <option value="">Color</option>
          <option value="choice1">Red</option>
          <option value="choice2">Green 2</option>
          <option value="choice3">Blue 3</option>
        </select>
        <input
          type="text"
          className="border rounded py-2 px-3 w-1/3"
          placeholder="Product Quantity..."
          value={normalInputValue}
          onChange={(e) => setNormalInputValue(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Add
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
