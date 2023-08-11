import PurchaceTitle from "../components/PurchaceTitle";
import PurchaseFilterHeader from "../components/PurchaseFilterHeader";
import PurchaseOrderTable from "../components/PurchaseOrderTable";

const PurchaseOrderPage = () => {
  return (
    <div className="h-screen">
      <PurchaceTitle />
      <PurchaseFilterHeader />
      <PurchaseOrderTable />
    </div>
  );
};

export default PurchaseOrderPage;
