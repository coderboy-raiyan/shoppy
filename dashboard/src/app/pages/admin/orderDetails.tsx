function OrderDetails() {
  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl text-[#d0d2d6]">Order Details</h2>
          <select
            name=""
            className="px-4 py-2 hover:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
          >
            <option value="pending">Pending</option>
            <option value="pending">Processing</option>
            <option value="pending">Warehouse</option>
            <option value="pending">Placed</option>
            <option value="pending">Cancelled</option>
          </select>
        </div>
        <div className="p-4">
          <div className="flex gap-2 text-lg text-[#d0d2d6]">
            <h2>#3424345465</h2>
            <span>2 jun 2023</span>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[32%]">
              <div className="pr-3 text-[#d0d2d6] text-lg">
                <div className="flex flex-col gap-1">
                  <h2 className="pb-2 font-semibold">
                    Delivered to : Kyle janner
                  </h2>
                  <p>
                    <span>Dhaka, Uttara, house no #456</span>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <h2>Payment Status : </h2>
                  <span className="text-base">Paid</span>
                </div>
                <p>Price : $456</p>
                <div className="mt-4 flex flex-col gap-4 ">
                  <div className="text-[#d0d2d6]">
                    <div className="flex gap-3 text-md">
                      <img
                        className="w-[45px] h-[45px]"
                        src="/images/category/1.jpg"
                        alt=""
                      />
                      <div>
                        <h2>Long long t-Shirt</h2>
                        <p className="text-sm">
                          <span>Brand : Zara </span>
                          <span>Easy </span>
                          <span> Quantity : 2 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[68%]">
              <div className="pl-3">
                <div className="mt-4 flex flex-col ">
                  <div className="text-[#d0d2d6]">
                    <div className="flex justify-start items-center gap-3">
                      <h2>Seller 1 order : </h2>
                      <span>pending</span>
                    </div>
                    <div className="mt-4 flex flex-col gap-4 ">
                      <div className="text-[#d0d2d6]">
                        <div className="flex gap-3 text-md">
                          <img
                            className="w-[45px] h-[45px]"
                            src="/images/category/1.jpg"
                            alt=""
                          />
                          <div>
                            <h2>Long long t-Shirt</h2>
                            <p className="text-sm">
                              <span>Brand : Zara </span>
                              <span>Easy </span>
                              <span> Quantity : 2 </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
