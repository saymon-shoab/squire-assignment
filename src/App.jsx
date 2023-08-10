/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useState } from "react";
import TableHome from "./components/TableHome/TableHome";
import DummyTable from "./components/DummyTable";
import SearchSection from "./components/SearchSection";
import Coounter from "./components/Coounter";

function App() {
  const [vendor, setVendor] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [entryDate, setEntryDate] = useState(new Date());
  const [lcNo, setLcNo] = useState("");
  const [chaillanNo, setChaillanNo] = useState("");
  const [challanDate, setChallanDate] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState("");
  const [inventoryInfo, setInventoryInfo] = useState("");
  const [dropdown1Value, setDropdown1Value] = useState("");
  const [dropdown2Value, setDropdown2Value] = useState("");
  const [normalInputValue, setNormalInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission logic here
    // For now, let's just log the form data
    // console.log({
    //   vendor,
    //   name,
    //   address,
    //   contact,
    //   entryDate,
    //   lcNo,
    //   chaillanNo,
    //   challanDate,
    //   vehicleInfo,
    //   inventoryInfo,
    // });
  };

  return (
    <>
      <div>
        {/* purchess invoice section start */}
        <div className="flex justify-center items-center ">
          <div className=" w-full fixed top-0 border">
            <h2 className=" mx-[130px] font-bold">purchse Invoice</h2>
          </div>
          <DummyTable />
          {/* <form
            className="mt-6 p-8 border rounded-lg shadow-lg"
            onSubmit={handleFormSubmit}
          >
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  vendor
                </label>
                <input
                  type="text"
                  className="mt-1 p-1 border w-full rounded-md"
                  value={vendor}
                  onChange={(e) => setVendor(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-1 border w-full rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  className="mt-1 p-6 border w-full rounded-md"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contact
                </label>
                <input
                  type="contact"
                  className="mt-1 p-2 border w-full rounded-md"
                  value={contact}
                  placeholder="+880"
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Entry Date
                </label>
                <input
                  type="date"
                  className="mt-1 p-2 border w-full rounded-md"
                  value={entryDate}
                  onChange={(e) => setEntryDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  LC NO
                </label>
                <input
                  type="text"
                  className="mt-1 p-1 border w-full rounded-md"
                  value={lcNo}
                  onChange={(e) => setLcNo(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Challan NO
                </label>
                <input
                  type="text"
                  className="mt-1 p-1 border w-full rounded-md"
                  value={chaillanNo}
                  onChange={(e) => setChaillanNo(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Challan Date
                </label>
                <input
                  type="date"
                  className="mt-1 p-2 border w-full rounded-md"
                  value={challanDate}
                  placeholder="+880"
                  onChange={(e) => setChallanDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Vecheal Info
                </label>
                <input
                  type="text"
                  className="mt-1 p-1 border w-full rounded-md"
                  value={vehicleInfo}
                  onChange={(e) => setVehicleInfo(e.target.value)}
                />
              </div>
              <div className="">
                <label className="block text-sm font-medium text-gray-700">
                  Inventory Info
                </label>
                <select
                  className="mt-1 p-1 border w-full rounded-md"
                  value={inventoryInfo}
                  onChange={(e) => setInventoryInfo(e.target.value)}
                >
                  <option value="">Select an option</option>
                  <option value="raw_material">Raw Material</option>
                </select>
              </div>
            </div>
          </form> */}
        </div>
        <div className=" w-full mt-3 border">
          <h2 className=" mx-[130px] font-bold">Search..</h2>
        </div>
        <SearchSection />
        <TableHome />
        <Coounter />
        {/* <div className="w-[1000px] bg-red-500 mx-auto text-white grid lg:grid-cols-4">
          <div className=" bg-green-500">hello</div>
          <div className=" bg-green-500">hello</div>
          <div className=" bg-green-500">hello</div>
          <div className=" bg-green-500">hello</div>
          <div className=" bg-green-500">hello</div>
          <div className=" bg-green-500">hello</div>
          <div className=" bg-green-500">hello</div>
        </div> */}
        {/* purchess invoice section end */}
      </div>
    </>
  );
}

export default App;
