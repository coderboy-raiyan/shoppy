import { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Pagination/Search/Search";

function DiscountProducts() {
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
        <div className="relative overflow-x-auto mt-5">
          <table className="w-full text-sm text-left text-[#d0d2d6]">
            <thead className="text-sm font-semibold text-[#d0d2d6] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  No
                </th>
                <th scope="col" className="py-3 px-4">
                  Image
                </th>
                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Category
                </th>
                <th scope="col" className="py-3 px-4">
                  Brand
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Discount
                </th>
                <th scope="col" className="py-3 px-4">
                  Stock
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
                  1
                </td>
                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  <img
                    className="w-[45px] h-[45px]"
                    src="/images/category/1.jpg"
                    alt=""
                  />
                </td>
                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  <span>
                    Amazfit Band 5 Activity Fitness Tracker with Alexa Built-in,
                    15-Day Battery Life, Blood Oxygen
                  </span>
                </td>
                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  <span>Sports</span>
                </td>
                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  <span>$789</span>
                </td>
                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  <span>5%</span>
                </td>
                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  <span>Xiaomi</span>
                </td>
                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  <span>10</span>
                </td>
                <td
                  scope="row"
                  className="py-4 px-4 font-medium whitespace-nowrap"
                >
                  <div className="flex justify-start items-center gap-4">
                    <Link
                      to=""
                      className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 text-white"
                    >
                      <FaEdit />
                    </Link>
                    <Link
                      to=""
                      className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 text-white"
                    >
                      <FaEye />
                    </Link>
                    <Link
                      to=""
                      className="p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50 text-white"
                    >
                      <FaTrash />
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

export default DiscountProducts;
