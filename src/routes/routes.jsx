import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PurchaseOrderPage from "../pages/PurchaseOrderPage";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/purchaseorderpage",
    element: <PurchaseOrderPage />,
  },
]);

export default routes;
