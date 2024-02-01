import { lazy } from "react";

const AdminDashboard = lazy(
  () => import("../../app/pages/admin/adminDashboard")
);

const adminRoutes = [
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
];

export default adminRoutes;
