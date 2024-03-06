import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Pagination/Search/Search";

function Orders() {
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="px-2 lg:px-7 pt-5 pb-4">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setPerPage={setPerPage}
        />
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-[#d0d2d6]">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Order Id
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Order Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  #453453454f
                </td>
                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  $455
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
                  <span>pending</span>
                </td>
                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  <Link
                    to=""
                    className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 text-white flex justify-center items-center w-[40px]"
                  >
                    <FaEye />
                  </Link>
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

export default Orders;
