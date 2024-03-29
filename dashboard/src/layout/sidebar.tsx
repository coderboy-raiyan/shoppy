import { useEffect, useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import getNavs from "../navigation";
import { INavigation } from "../navigation/allNav";

function Sidebar({
  showSideBar,
  setShowSideBar,
}: {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [allNav, setAllNav] = useState<INavigation[]>([] as INavigation[]);
  const { pathname } = useLocation();

  useEffect(() => {
    const navs = getNavs("seller");
    setAllNav(navs);
  }, []);

  return (
    <div>
      <div
        onClick={() => setShowSideBar(false)}
        className={`fixed duration-200 ${
          showSideBar ? "visible" : "invisible"
        } w-screen h-screen bg-[#22292f80] top-0 left-0 z-[110]`}
      ></div>

      <div
        className={`w-[260px] fixed bg-[#283046] z-[120] top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${
          showSideBar ? "left-0" : "-left-[260px] lg:left-0"
        }`}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link className="w-[180px] h-[50px]" to="/">
            <img className="w-full h-full" src="/images/logo.png" alt="" />
          </Link>
        </div>

        <div className="p-[16px]">
          <ul>
            {allNav.map((n) => (
              <li key={n.id}>
                <Link
                  to={n.path}
                  className={`${
                    pathname === n.path
                      ? "bg-slate-600 shadow-indigo-500/30 text-white duration-500"
                      : "text-[#d0d2d6] font-normal duration-200 "
                  } px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1`}
                >
                  <span>
                    <n.icon />
                  </span>
                  <span>{n.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <button
                className="text-[#d0d2d6] font-normal duration-200 
                  px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1"
              >
                <span>
                  <BiLogInCircle />
                </span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
