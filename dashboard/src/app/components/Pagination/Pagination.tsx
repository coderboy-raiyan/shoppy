import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { IPagination } from "./pagination.type";

function Pagination({
  pageNumber,
  setPageNumber,
  totalItem,
  perPage,
  showItem,
}: IPagination) {
  const totalPage = Math.ceil(totalItem / perPage); // 10
  let startPage = pageNumber; // 1

  const diff = totalPage - pageNumber; // 9
  if (diff <= showItem) {
    // 9 <= 3
    startPage = totalPage - showItem; // 10 - 3
  }
  const endPage = startPage < 0 ? showItem : showItem + startPage;
  if (startPage <= 0) {
    startPage = 1;
  }
  console.log(startPage, endPage);
  const createBtn = () => {
    const btns = [];

    for (let i = startPage; i < endPage; i++) {
      btns.push(
        <li
          key={i}
          onClick={() => setPageNumber(i)}
          className={`${
            pageNumber == i
              ? "bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white"
              : "bg-slate-700 hover:bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 hover:text-white text-[#d0d2d6] "
          } w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer`}
        >
          <button>{i}</button>
        </li>
      );
    }
    return btns;
  };

  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li>
          <button
            className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-700 text-[#d0d2d6] cursor-pointer"
            onClick={() => setPageNumber((prev) => prev - 1)}
          >
            <BsChevronDoubleLeft />
          </button>
        </li>
      )}
      {createBtn()}
      {pageNumber < totalPage && (
        <li>
          <button
            onClick={() => setPageNumber((prev) => prev + 1)}
            className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-700 text-[#d0d2d6] cursor-pointer"
          >
            {" "}
            <BsChevronDoubleRight />
          </button>
        </li>
      )}
    </ul>
  );
}

export default Pagination;
