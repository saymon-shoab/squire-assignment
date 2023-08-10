// eslint-disable-next-line no-unused-vars
import React from "react";

const PurchaceTitle = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <h1 className="text-2xl font-semibold">Purchase Order</h1>
      <div className="space-x-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          +
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
          Report
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PurchaceTitle;
