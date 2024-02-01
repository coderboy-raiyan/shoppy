import adminRoutes from "./adminRoutes";
import sellerRoutes from "./sellerRoutes";

const privateRoutes = [...sellerRoutes, ...adminRoutes];

export default privateRoutes;
