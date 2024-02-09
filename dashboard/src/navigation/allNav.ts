import { AiFillDashboard, AiOutlineShopping } from "react-icons/ai";
import { BiCategory, BiLoaderCircle } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { IconType } from "react-icons/lib";

export type INavigation = {
  id: string;
  title: string;
  icon: IconType;
  role: string;
  path: string;
};
export const allNav: INavigation[] = [
  {
    id: crypto.randomUUID() as string,
    title: "Dashboard",
    icon: AiFillDashboard,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: crypto.randomUUID() as string,
    title: "Orders",
    icon: AiOutlineShopping,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: crypto.randomUUID() as string,
    title: "Category",
    icon: BiCategory,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: crypto.randomUUID() as string,
    title: "Sellers",
    icon: FiUsers,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: crypto.randomUUID() as string,
    title: "Payment request",
    icon: BsCurrencyDollar,
    role: "admin",
    path: "/admin/dashboard/payment-request",
  },
  {
    id: crypto.randomUUID() as string,
    title: "Deactive Sellers",
    icon: FiUsers,
    role: "admin",
    path: "/admin/dashboard/deactive-sellers",
  },
  {
    id: crypto.randomUUID() as string,
    title: "Seller request",
    icon: BiLoaderCircle,
    role: "admin",
    path: "/admin/dashboard/sellers-request",
  },
  {
    id: crypto.randomUUID() as string,
    title: "Chat Seller",
    icon: CiChat1,
    role: "admin",
    path: "/admin/dashboard/chat-sellers",
  },
];
