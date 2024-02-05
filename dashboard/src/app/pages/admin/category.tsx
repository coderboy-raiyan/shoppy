import { useState } from "react";
import { BsImage } from "react-icons/bs";
import { FaEdit, FaTrash } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";

function Category() {
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div
        onClick={() => setShow(false)}
        className={`fixed duration-200 ${
          show ? "visible" : "invisible"
        } w-screen h-screen bg-[#22292f80] top-0 left-0 z-[110]`}
      ></div>

      <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-[#283046] rounded-md">
        <h2 className="text-[#d0d2d6] font-semibold text-xl mb-4">
          Add Category
        </h2>
        <button
          onClick={() => setShow(!show)}
          className="lg:hidden rounded-sm bg-indigo-500 py-2 px-4 shadow-lg hover:shadow-indigo-500/50 text-white text-sm"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12">
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
                      Image
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Name
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
                      <span>Sports</span>
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
        <div
          className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0" : "-right-[340px]"
          } z-[110] top-0 transition-all duration-500`}
        >
          <div className="w-full pl-5 ">
            <div className="bg-[#283046] h-screen lg:h-auto px-3 py-2 lg:rounded-md text-[#d0d2d6]">
              <div className="flex justify-between items-center">
                <h2 className="text-[#d0d2d6] font-semibold text-xl mb-4">
                  Add Category
                </h2>
                <button
                  onClick={() => setShow(false)}
                  className="black lg:hidden "
                >
                  <GrClose />
                </button>
              </div>
              <form>
                <div className="flex flex-col w-full gap-1 mb-3">
                  <label className="text-sm" htmlFor="categoryName">
                    Category Name
                  </label>
                  <input
                    className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                    type="text"
                    name="categoryName"
                    placeholder="Category Name"
                  />
                </div>
                <div>
                  <label
                    className="flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-indigo-500 w-full border-[#d0d2d6]"
                    htmlFor="image"
                  >
                    <span>
                      <BsImage />
                    </span>
                    <span>Select Image</span>
                  </label>
                </div>
                <input className="hidden" type="file" name="image" id="image" />
                <div>
                  <button className="bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg rounded-md px-7 py-2 my-2 text-white ">
                    Add Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
