import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

function MainLayout() {
  return (
    <section className={`bg-[#161d31] w-full min-h-screen`}>
      <Header />
      <Sidebar />

      <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
        <Outlet />
      </div>
    </section>
  );
}

export default MainLayout;
