const ProductTable = () => {
  const tableHeader = [
    "Sr",
    "Product",
    "Color",
    "Quantity",
    "UoM",
    "Unit Price",
    "AV",
    "CD (%)",
    "CD",
    "RD (%)",
    "RD",
    "SD (%)",
    "SD",
    "VAT (%)",
    "VAT",
    "AIT (%)",
    "AIT",
    "ATV",
    "TTI",
  ];
  const tableData = [
    [
      "1",
      "Product A",
      "Blue",
      "10",
      "pcs",
      "20.00",
      "15.00",
      "5%",
      "0.75",
      "3%",
      "0.45",
      "2%",
      "0.30",
      "5%",
      "0.75",
      "3%",
      "0.45",
      "0.50",
      "27.00",
    ],
    [
      "2",
      "Product B",
      "Red",
      "5",
      "pcs",
      "15.00",
      "10.00",
      "5%",
      "0.50",
      "4%",
      "0.40",
      "2%",
      "0.20",
      "5%",
      "0.50",
      "3%",
      "0.30",
      "0.50",
      "20.00",
    ],
    // Add more rows here
  ];
  return (
    <div className="p-4">
      <table className="min-w-full border-collapse border border-gray-300">
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
                  {data}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
