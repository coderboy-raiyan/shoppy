import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

function MainLayout() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <section className={`bg-[#161d31] w-full min-h-screen`}>
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

      <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
        <Outlet />
      </div>
    </section>
  );
}

export default MainLayout;
