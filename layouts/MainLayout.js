import Navbar from "@/components/Navbar";
import React, { useMemo } from "react";
import Sidebar from "./Sidebar";
import {
  BsGrid,
  BsShopWindow,
  BsMinecart,
  BsTruck,
  BsBoxSeam,
} from "react-icons/bs";
import { FiMessageCircle, FiUser } from "react-icons/fi";
import { useRouter } from "next/router";

const routeName = [
  {
    route: "/",
    name: "Dashboard",
    iconActive: <BsGrid color="white" />,
    iconInActive: <BsGrid color="#808191" />,
  },
  {
    route: "/categories",
    name: "Category",
    iconActive: <BsBoxSeam color="white" />,
    iconInActive: <BsBoxSeam color="#808191" />,
  },
  {
    route: "/products",
    name: "Product",
    iconActive: <BsMinecart color="white" />,
    iconInActive: <BsMinecart color="#808191" />,
  },
  {
    route: "/courriers",
    name: "Courrier",
    iconActive: <BsTruck color="white" />,
    iconInActive: <BsTruck color="#808191" />,
  },
  {
    route: "/review-rating",
    name: "Rating & Review",
    iconActive: <FiMessageCircle color="white" />,
    iconInActive: <FiMessageCircle color="#808191" />,
  },
  {
    route: "/accounts",
    name: "Accounts",
    iconActive: <FiUser color="white" />,
    iconInActive: <FiUser color="#808191" />,
  },
];

const MainLayout = (props) => {
  const router = useRouter();
  const currentPathName = router.pathname?.split("/")?.[1];
  const tabRoute = "/" + currentPathName;
  const currentIndexTab = useMemo(() => {
    return routeName?.findIndex((item) => tabRoute === item.route) ?? 0;
  }, [currentPathName]);
  return (
    <main className="flex flex-row w-full">
      <Sidebar routes={routeName} indexTab={currentIndexTab} />
      <div className="md:mx-[25px] mx-0 py-[15px] w-full">
        <Navbar routes={routeName} indexTab={currentIndexTab} />
        {props.children}
      </div>
    </main>
  );
};

export default MainLayout;
