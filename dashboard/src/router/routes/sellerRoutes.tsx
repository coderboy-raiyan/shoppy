import { lazy } from "react";

const Home = lazy(() => import("../../app/pages/home"));
const SellerDashboard = lazy(
  () => import("../../app/pages/seller/sellerDashboard")
);
const AddProduct = lazy(() => import("../../app/pages/seller/addProduct"));
const Products = lazy(() => import("../../app/pages/seller/products"));
const DiscountProducts = lazy(
  () => import("../../app/pages/seller/discountProducts")
);
const Orders = lazy(() => import("../../app/pages/seller/orders"));
const Payments = lazy(() => import("../../app/pages/seller/payments"));
const SellerToCustomer = lazy(
  () => import("../../app/pages/seller/sellerToCustomer")
);
const SellerToAdmin = lazy(
  () => import("../../app/pages/seller/sellerToAdmin")
);

const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/products",
    element: <Products />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/discount-products",
    element: <DiscountProducts />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    role: "seller",
    ability: ["active", "deactive"],
  },
  {
    path: "/seller/dashboard/payments",
    element: <Payments />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-support",
    element: <SellerToAdmin />,
    ability: ["active", "deactive", "pending"],
  },
  {
    path: "/seller/dashboard/chat-customer",
    element: <SellerToCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-customer/:customerId",
    element: <SellerToCustomer />,
    role: "seller",
    status: "active",
  },
];

export default sellerRoutes;
