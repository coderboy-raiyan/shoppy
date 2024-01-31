import { lazy } from "react";

const Login = lazy(() => import("../../app/auth/login"));
const Register = lazy(() => import("../../app/auth/register"));

const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export default publicRoutes;
