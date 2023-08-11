// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const PurchaseOrderTable = () => {
  const tableHeader = [
    "Number",
    "Posted",
    "Order Date",
    "Party",
    "Amount",
    "Paid Amount",
    "Due Amount",
    "Branch",
    "Created By",
    "Approved",
  ];

  const tableData = [
    [
      "1",
      true,
      "2023-08-10",
      "Party A",
      "$100",
      "$80",
      "$20",
      "Branch 1",
      "User 1",
      "none",
    ],
    [
      "2",
      false,
      "2023-08-09",
      "Party B",
      "$200",
      "$150",
      "$50",
      "Branch 2",
      "User 2",
      "none",
    ],
    // Add more rows here
  ];

  return (
    <div className="p-4 h-screen flex flex-col">
      <div className="flex-grow">
        <table className="min-w-full  border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              {tableHeader.map((header, index) => (
                <th key={index} className="py-2 px-4 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-gray-100" : ""}
              >
                {rowData.map((data, dataIndex) => (
                  <td key={dataIndex} className="py-2 px-4">
                    {dataIndex === 0 ? (
                      <input type="checkbox" checked={data} />
                    ) : dataIndex === 1 ? (
                      <input type="checkbox" checked={data} />
                    ) : (
                      data
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <footer className="py-4 border w-full">
          <div className="flex justify-start space-x-4">
            <span className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer">
              Pending
            </span>
            <span className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded cursor-pointer">
              Start Progress
            </span>
            <span className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded cursor-pointer">
              Complete
            </span>
            <span className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded cursor-pointer">
              Reject
            </span>
          </div>
        </footer>
        <div className="fixed mb-5 bottom-0">
          <Link to="https://squire-assignment.vercel.app/">
            <button
              type="button"
              className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
            >
              <div className="flex flex-row items-center">
                <svg
                  className="w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="ml-2">Prev page</p>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrderTable;
