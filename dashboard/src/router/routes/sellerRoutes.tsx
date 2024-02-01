import { lazy } from "react";

const Home = lazy(() => import("../../app/pages/home"));

const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
];

export default sellerRoutes;
