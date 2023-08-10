// eslint-disable-next-line no-unused-vars
import React from "react";

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
      false,
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
      true,
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
      </div>
    </div>
  );
};

export default PurchaseOrderTable;
