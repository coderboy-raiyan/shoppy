function Search({
  searchValue,
  setPerPage,
  setSearchValue,
}: {
  searchValue?: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
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
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}

export default Search;
