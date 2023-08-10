/* eslint-disable no-unused-vars */
import React from "react";

const Coounter = () => {
  return (
    <div className="flex mx-5">
      <div className="w-[500px]">
        <div className="flex">
          <label className=" m-3 text-sm font-medium text-gray-700">
            Total Tax
          </label>
          <input
            type="text"
            className="mt-1 p-1 border w-full rounded-md"
            placeholder="12000"
          />
        </div>
        <div className="flex">
          <label className=" m-3 text-sm font-medium text-gray-700">
            Total Rebate
          </label>
          <input
            type="text"
            className="mt-1 p-1 border w-full rounded-md"
            placeholder="19838"
          />
        </div>
      </div>
      <div className="w-[500px]">
        <div className="flex">
          <label className=" m-3 text-sm font-medium text-gray-700">
            Total
          </label>
          <input
            type="text"
            className="mt-1 p-1 border w-full rounded-md"
            placeholder="400029"
          />
        </div>
        <div className="flex">
          <label className=" m-3 text-sm font-medium text-gray-700">
            Grand Total
          </label>
          <input
            type="text"
            className="mt-1 p-1 border w-full rounded-md"
            placeholder="400029"
          />
        </div>
      </div>
    </div>
  );
};

export default Coounter;
