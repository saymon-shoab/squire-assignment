/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

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
      <div className="">
        <Link to="https://squire-assignment.vercel.app/purchaseorderpage">
          <button
            type="button"
            className="bg-gray-800 ml-[345px] text-white justify-end items-end rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3"
          >
            <div className="flex flex-row items-center">
              <span className="mr-2">Next Page</span>
              <svg
                className="w-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Coounter;
