import { lazy } from "react";

const AdminDashboard = lazy(
  () => import("../../app/pages/admin/adminDashboard")
);
const Orders = lazy(() => import("../../app/pages/admin/orders"));
const Category = lazy(() => import("../../app/pages/admin/category"));

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
];

export default adminRoutes;
