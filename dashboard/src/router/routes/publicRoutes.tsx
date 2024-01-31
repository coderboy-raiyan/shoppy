import { lazy } from "react";

const Login = lazy(() => import("../../app/auth/login"));
const Register = lazy(() => import("../../app/auth/register"));
const AdminLogin = lazy(() => import("../../app/auth/adminLogin"));

const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
];

export default publicRoutes;
