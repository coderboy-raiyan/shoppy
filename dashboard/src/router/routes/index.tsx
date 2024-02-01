import MainLayout from "../../layout/mainLayout";
import privateRoutes from "./privateRoutes";

const getRoutes = () => {
  return {
    path: "/",
    element: <MainLayout />,
    children: privateRoutes,
  };
};

export default getRoutes;
