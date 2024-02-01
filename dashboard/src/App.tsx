import { useEffect, useState } from "react";
import Router from "./router/router";
import getRoutes from "./router/routes/index.tsx";
import publicRoutes from "./router/routes/publicRoutes.tsx";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes((prev) => {
      return [...prev, routes];
    });
  }, []);

  return <Router allRoutes={allRoutes} />;
}

export default App;
