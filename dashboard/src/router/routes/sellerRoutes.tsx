import { lazy } from "react";

const Home = lazy(() => import("../../app/pages/home"));
const SellerDashboard = lazy(
  () => import("../../app/pages/seller/sellerDashboard")
);
const AddProduct = lazy(() => import("../../app/pages/seller/addProduct"));

const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    ability: ["seller"],
  },
];

export default sellerRoutes;
