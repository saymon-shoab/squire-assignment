/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
const PurchaseFilterHeader = () => {
  return (
    <div className=" h-[130px] px-[100px] py-[20px] bg-gray-100">
      <div className=" flex gap-5">
        <div className="w-[300px] border rounded-sm flex gap-5">
          <label htmlFor="dropdown" className="block font-medium p-2 mb-1">
            Parry:
          </label>
          <select id="dropdown" className="border rounded w-[250px] py-2 px-3">
            <option value="option1">All </option>
            <option value="option2">Option 1</option>
            <option value="option3">Option 2</option>
          </select>
        </div>
        <div className="w-[362px] border rounded-sm flex gap-5">
          <label htmlFor="dropdown" className="block font-medium p-2 mb-1">
            Order No:
          </label>
          <input
            type="text"
            id="normalInput"
            className="border rounded w-[250px] py-2 px-3"
            placeholder="Enter something..."
          />
        </div>
        <div className="w-[300px] border rounded-sm flex gap-5">
          <label htmlFor="dropdown" className="block font-medium p-2 mb-1">
            From:
          </label>
          <input
            type="date"
            id="time"
            value={new Date()}
            className="border rounded w-[200px] py-2 px-3"
          />
        </div>
        <div className="w-[300px] border rounded-sm flex gap-5">
          <label htmlFor="dropdown" className="block font-medium p-2 mb-1">
            <FiSearch className="m-1" />
          </label>
          <input
            type="text"
            id="normalInput"
            className="border rounded w-[250px] py-2 px-3"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className=" flex gap-5">
        <div className="w-[300px] border rounded-sm flex gap-5">
          <label htmlFor="dropdown" className="block font-medium p-2 mb-1">
            Status:
          </label>
          <select
            id="dropdown"
            className="border rounded w-[250px] py-2 px-3"
            // value={selectedValue}
            // onChange={handleDropdownChange}
          >
            <option value="option1">All </option>
            <option value="option2">Option 1</option>
            <option value="option3">Option 2</option>
          </select>
        </div>
        <div className="w-[362px] border rounded-sm flex gap-5">
          <label htmlFor="dropdown" className="block font-medium p-2 mb-1">
            Order No:
          </label>
          <input
            type="text"
            id="normalInput"
            className="border rounded w-[250px] py-2 px-3"
            placeholder="Enter something..."
          />
        </div>
        <div className="w-[250px] border rounded-sm flex gap-5">
          <label
            htmlFor="dropdown"
            className="block w-[68px] font-medium p-2 mb-1"
          >
            To:
          </label>
          <input
            type="date"
            id="time"
            value={new Date()}
            className="border rounded w-[200px] py-2 px-3"
          />
        </div>
      </div>
    </div>
  );
};

export default PurchaseFilterHeader;
