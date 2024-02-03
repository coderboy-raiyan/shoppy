import { useState } from "react";
import { BsArrowBarDown, BsArrowBarUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";

function Orders() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        <div className="flex justify-between">
          <select
            onChange={(e) => setPerPage(Number(e.target.value))}
            className="px-4 py-2 hover:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
          >
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="25">25</option>
          </select>
          <input
            className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
            type="text"
            name="search"
            placeholder="Search"
          />
        </div>
        <div className="relative mt-5 overflow-x-hidden">
          <div className="w-full text-sm text-left text-[#d0d2d6]">
            <div className="text-sm uppercase  border-b border-slate-700">
              <div className="flex justify-between items-start ">
                <div className="py-3 w-[25%]">Order ID</div>
                <div className="py-3 w-[13%]">Price</div>
                <div className="py-3 w-[18%]">Payment Status</div>
                <div className="py-3 w-[18%]">Order Status</div>
                <div className="py-3 w-[18%]">Action</div>
                <div className="py-3 w-[8%]">
                  <BsArrowBarDown />
                </div>
              </div>
            </div>

            <div className="text-[#d0d2d6]">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-4 w-[25%] font-medium whitespace-nowrap">
                  #324523542345jk
                </div>
                <div className="py-4 w-[13%]">$560</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">pending</div>
                <div className="py-4 w-[18%]">
                  <Link to="">View</Link>
                </div>
                <div
                  onClick={() => setShow(!show)}
                  className="py-4 w-[8%] cursor-pointer"
                >
                  {show ? <BsArrowBarUp /> : <BsArrowBarDown />}
                </div>
              </div>
              <div
                className={`${
                  show
                    ? "block border-b border-slate-700 bg-slate-800"
                    : "hidden "
                }`}
              >
                <div className="flex justify-start items-start border-b border-slate-700">
                  <div className="py-4 w-[25%] font-medium whitespace-nowrap pl-3">
                    #324523542345jk
                  </div>
                  <div className="py-4 w-[13%]">$560</div>
                  <div className="py-4 w-[18%]">pending</div>
                  <div className="py-4 w-[18%]">pending</div>
                </div>
                <div className="flex justify-start items-start border-b border-slate-700">
                  <div className="py-4 w-[25%] font-medium whitespace-nowrap pl-3">
                    #324523542345jk
                  </div>
                  <div className="py-4 w-[13%]">$560</div>
                  <div className="py-4 w-[18%]">pending</div>
                  <div className="py-4 w-[18%]">pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            perPage={perPage}
            showItem={3}
            totalItem={50}
          />
        </div>
      </div>
    </div>
  );
}

export default Orders;
