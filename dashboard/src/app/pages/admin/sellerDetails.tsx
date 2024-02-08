function SellerDetails() {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        <div className="w-full flex flex-wrap text-[#d0d2d6]">
          <div className="w-3/12 flex justify-center items-center py-3">
            <div>
              <img
                className="w-full h-[230px] rounded-md"
                src="/images/admin.jpg"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-4/12">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Basic Info</h2>
              </div>
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md">
                <div className="flex gap-2">
                  <span>Name : </span>
                  <span>Raiyan</span>
                </div>
                <div className="flex gap-2">
                  <span>Email : </span>
                  <span>tajkierhaque@gmail.com</span>
                </div>
                <div className="flex gap-2">
                  <span>Role : </span>
                  <span>seller</span>
                </div>
                <div className="flex gap-2">
                  <span>Status : </span>
                  <span>Active</span>
                </div>
                <div className="flex gap-2">
                  <span>Payment Account : </span>
                  <span>Active</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Address</h2>
              </div>
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md">
                <div className="flex gap-2">
                  <span>Shop name : </span>
                  <span>Zara Fashion</span>
                </div>
                <div className="flex gap-2">
                  <span>Divison : </span>
                  <span>Dhaka</span>
                </div>
                <div className="flex gap-2">
                  <span>District : </span>
                  <span>Dhaka</span>
                </div>

                <div className="flex gap-2">
                  <span>Sub-district : </span>
                  <span>Dhaka</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form>
            <div className="flex gap-4 py-3 ">
              <select
                className="px-4 py-2 hover:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
                name=""
                id=""
              >
                <option value="">Select status</option>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
              </select>
              <button
                type="submit"
                className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg rounded-md px-7 py-4  text-white w-[170px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SellerDetails;
