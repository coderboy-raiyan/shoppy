function SellerToAdmin() {
  return (
    <div className="px-7 lg:px-7 py-5">
      <div className="w-full p-4 bg-[#283046] rounded-md h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative ">
          <div className="w-full  md:pl-4">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="relative">
                  <img
                    className="w-[40px] h-[40px] border-2 border-green-500 max-w-[38px] p-[2px] rounded-full"
                    src="/images/admin.jpg"
                    alt=""
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0 "></div>
                </div>
                <h2 className="text-base font-semibold text-white">Support</h2>
              </div>
            </div>

            <div className="py-4 ">
              <div className="bg-slate-800 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div className="">
                      <img
                        className="border-2 w-[38px] h-[38px] border-white max-w-[38px] p-[2px] rounded-full"
                        src="/images/admin.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-center flex-col w-full bg-orange-600 shadow-lg shadow-orange-900 text-white py-1 px-2 rounded-md">
                      <span>How are you?</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div className="flex justify-center items-center flex-col w-full bg-blue-600 shadow-lg shadow-blue-900 text-white py-1 px-2 rounded-md">
                      <span>How are you?</span>
                    </div>
                    <div className="">
                      <img
                        className="border-2 w-[38px] h-[38px] border-white max-w-[38px] p-[2px] rounded-full"
                        src="/images/admin.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form className="flex gap-3">
              <input
                className="w-full flex justify-between px-2 border border-slate-700 items-center py-[5px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6]"
                type="text"
                placeholder="Input your message"
              />
              <button
                type="submit"
                className="bg-cyan-500 shadow-lg hover:shadow-cyan-500/50 font-semibold w-[75px] h-[35px] rounded-md text-white flex justify-center items-center"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerToAdmin;
