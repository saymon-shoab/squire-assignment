/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import SearchSection from "./components/SearchSection";
import Coounter from "./components/Coounter";
import ProductTable from "./components/ProductTable";
import PurchaseForm from "./components/PurchaseForm";

function App() {
  return (
    <>
      {/* purchess invoice section start */}
      <div className="flex justify-center items-center ">
        <div className=" w-full fixed top-0 border">
          <h2 className=" mx-[25px] font-bold">purchse Invoice</h2>
        </div>
        <PurchaseForm />
      </div>
      <div className=" w-full mt-3 border">
        <h2 className=" mx-[130px] font-bold">Search..</h2>
      </div>
      <SearchSection />
      <ProductTable />
      <Coounter />
    </>
  );
}

export default App;
