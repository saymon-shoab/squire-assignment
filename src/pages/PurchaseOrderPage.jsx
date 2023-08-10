import PurchaceTitle from "../components/PurchaceTitle";
import PurchaseFilterHeader from "../components/PurchaseFilterHeader";
import PurchaseOrderTable from "../components/PurchaseOrderTable";

const PurchaseOrderPage = () => {
  return (
    <>
      <PurchaceTitle />
      <PurchaseFilterHeader />
      <PurchaseOrderTable />
    </>
  );
};

export default PurchaseOrderPage;
