import { lazy } from "react";
import SellerRequest from "../../app/pages/admin/sellerRequest";

const AdminDashboard = lazy(
  () => import("../../app/pages/admin/adminDashboard")
);
const Orders = lazy(() => import("../../app/pages/admin/orders"));
const Category = lazy(() => import("../../app/pages/admin/category"));
const Sellers = lazy(() => import("../../app/pages/admin/sellers"));
const PaymentRequest = lazy(
  () => import("../../app/pages/admin/paymentRequest")
);
const DeActiveSellers = lazy(
  () => import("../../app/pages/admin/deActiveSellers")
);
const SellerDetails = lazy(() => import("../../app/pages/admin/sellerDetails"));

const adminRoutes = [
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "/admin/dashboard/orders",
    element: <Orders />,
    role: "admin",
  },
  {
    path: "/admin/dashboard/category",
    element: <Category />,
    role: "admin",
  },
  {
    path: "/admin/dashboard/sellers",
    element: <Sellers />,
    role: "admin",
  },
  {
    path: "/admin/dashboard/payment-request",
    element: <PaymentRequest />,
    role: "admin",
  },
  {
    path: "/admin/dashboard/deactive-sellers",
    element: <DeActiveSellers />,
    role: "admin",
  },
  {
    path: "/admin/dashboard/sellers-request",
    element: <SellerRequest />,
    role: "admin",
  },
  {
    path: "/admin/dashboard/sellers/details/:sellerId",
    element: <SellerDetails />,
    role: "admin",
  },
];

export default adminRoutes;
