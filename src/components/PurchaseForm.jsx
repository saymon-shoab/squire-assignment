/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const PurchaseForm = () => {
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
    <div className="w-full mx-5">
      <form
        className="mt-6 p-8 border  rounded-lg shadow-lg"
        // onSubmit={handleFormSubmit}
      >
        <div className="flex gap-10">
          <div className="w-[400px] px-5 border-r-2">
            <div className="">
              <label className="  text-sm font-medium text-gray-700">
                vendor
              </label>
              <input
                type="text"
                className="mt-1 p-1 border w-full rounded-md"
                value={vendor}
                onChange={(e) => setVendor(e.target.value)}
              />
            </div>
            <div className="">
              <label className=" text-sm font-medium text-gray-700">
                Names{"       "}
              </label>
              <input
                type="text"
                className="mt-1 p-1 border w-full  rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="">
              <label className=" text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                className="mt-1 p-6 border w-full rounded-md"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="">
              <label className="m-3 text-sm font-medium text-gray-700">
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
          </div>
          <div className=" px-10 border-r-2">
            <div className="">
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
            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Vehicle Info
              </label>
              <input
                type="text"
                className="mt-1 p-1 border w-full rounded-md"
                value={vehicleInfo}
                onChange={(e) => setVehicleInfo(e.target.value)}
              />
            </div>
          </div>
          <div className="border-r-2">
            <div className=" flex w-[300px] mx-10">
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
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;
