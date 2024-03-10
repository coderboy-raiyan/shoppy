/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsCurrencyDollar } from "react-icons/bs";

import { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ delta }: { delta: any }) {
  console.log("handleOnWheel", delta);
}

const outerElementType = forwardRef((props: any, ref: any) => (
  <div onWheel={handleOnWheel} ref={ref} {...props}></div>
));

function Payments() {
  const Row = ({ index, style }: { index: any; style: any }) => {
    return (
      <div style={style} className="flex text-sm ">
        <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap">$454</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="py-[1px] px-[5px] bg-slate-700 text-blue-500 rounded-md text-xs">
            pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">12 Jun 2023</div>
      </div>
    );
  };

  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3 ">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6] ">
            <h2 className="text-3xl font-bold">$8937</h2>
            <span className="text-sm font-medium">Total Sales </span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl ">
            <BsCurrencyDollar className="text-[#28c76f] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3 ">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6] ">
            <h2 className="text-3xl font-bold">$10.98</h2>
            <span className="text-sm font-medium">Available Amount</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl ">
            <BsCurrencyDollar className="text-[#cd00e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3 ">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6] ">
            <h2 className="text-3xl font-bold">$500</h2>
            <span className="text-sm font-medium">Withdrawal Amount</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl ">
            <BsCurrencyDollar className="text-[#00cfe8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3 ">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6] ">
            <h2 className="text-3xl font-bold">$200</h2>
            <span className="text-sm font-medium">Pending Amount</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#7376f01f] flex justify-center items-center text-xl ">
            <BsCurrencyDollar className="text-[#7367f0] shadow-lg" />
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 pb-4 mt-4">
        <div className="bg-[#283046] text-[#d0d2d6] rounded-md p-5">
          <h2 className="text-lg">Send Request</h2>
          <div className="pt-5">
            <form>
              <div className="flex gap-3  flex-wrap">
                <input
                  className="px-3 md:w-[70%]  outline-none border bg-transparent border-slate-700 rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                  type="number"
                  min={0}
                  name="amount"
                />
                <button
                  type="submit"
                  className="bg-indigo-500  hover:shadow-blue-500/50 hover:shadow-lg rounded-md px-7 py-2 text-white"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="mt-4">
              <h2 className="text-lg pb-4">Pending request</h2>
              <div className="w-full overflow-x-auto">
                <div className="flex bg-[#161d31] uppercase text-xs min-w-[340px]">
                  <div className="w-[25%] p-2">No</div>
                  <div className="w-[25%] p-2">Amount</div>
                  <div className="w-[25%] p-2">Status</div>
                  <div className="w-[25%] p-2">Date</div>
                </div>
                {
                  <List
                    width="100%"
                    style={{ minWidth: "340px" }}
                    className="List"
                    height={350}
                    itemCount={100}
                    itemSize={35}
                    outerElementType={outerElementType}
                  >
                    {Row}
                  </List>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#283046] text-[#d0d2d6] rounded-md p-5">
          <div>
            <div>
              <h2 className="text-lg pb-4">Success Withdrawal</h2>
              <div className="w-full overflow-x-auto">
                <div className="flex bg-[#161d31] uppercase text-xs min-w-[340px]">
                  <div className="w-[25%] p-2">No</div>
                  <div className="w-[25%] p-2">Amount</div>
                  <div className="w-[25%] p-2">Status</div>
                  <div className="w-[25%] p-2">Date</div>
                </div>
                {
                  <List
                    width="100%"
                    style={{ minWidth: "340px" }}
                    className="List"
                    height={350}
                    itemCount={100}
                    itemSize={35}
                    outerElementType={outerElementType}
                  >
                    {Row}
                  </List>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
