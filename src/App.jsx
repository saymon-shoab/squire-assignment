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
        </div>
        <div className=" w-full mt-3 border">
          <h2 className=" mx-[130px] font-bold">Search..</h2>
        </div>
        <SearchSection />
        <TableHome />
        <Coounter />
      </div>
    </>
  );
}

export default App;
