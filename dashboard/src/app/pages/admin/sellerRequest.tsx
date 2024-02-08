import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";

function SellerRequest() {
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        <div className="flex justify-between items-center">
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
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-[#d0d2d6]">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  No
                </th>
                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Shop name
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment status
                </th>
                <th scope="col" className="py-3 px-4">
                  Email
                </th>
                <th scope="col" className="py-3 px-4">
                  Status
                </th>

                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  1
                </td>

                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  <span>Raiyan</span>
                </td>
                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  <span>Raiyan's Fashion</span>
                </td>
                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  <span>Inactive</span>
                </td>
                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  <span>tajkierhaque@gmail.com</span>
                </td>
                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  <span>pending</span>
                </td>

                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  <div className="flex justify-start items-center gap-4">
                    <Link
                      to=""
                      className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50 text-white"
                    >
                      <FaEye />
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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

export default SellerRequest;
