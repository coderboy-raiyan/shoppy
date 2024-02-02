import { lazy } from "react";
import Orders from "../../app/pages/admin/orders";

const AdminDashboard = lazy(
  () => import("../../app/pages/admin/adminDashboard")
);

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
];

export default adminRoutes;
