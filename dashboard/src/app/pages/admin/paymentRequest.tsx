/* eslint-disable @typescript-eslint/no-explicit-any */

import { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ delta }: { delta: any }) {
  console.log("handleOnWheel", delta);
}

const outerElementType = forwardRef((props: any, ref: any) => (
  <div onWheel={handleOnWheel} ref={ref} {...props}></div>
));

function PaymentRequest() {
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
        <div className="w-[25%] p-2 whitespace-nowrap">
          <button className="bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-[3px] py-[2px] text-white rounded-sm text-sm">
            Confirm{" "}
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="px-2 lg:px-7 pt-5 text-[#d0d2d6]">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        <h1 className="text-xl font-medium pb-5 text-[#d0d2d6]">
          Withdrawal Request
        </h1>
        <div className="w-full">
          <div className="w-full overflow-x-auto">
            <div className="flex bg-[#161d31] uppercase text-xs min-w-[340px]">
              <div className="w-[25%] p-2">No</div>
              <div className="w-[25%] p-2">amount</div>
              <div className="w-[25%] p-2">Status</div>
              <div className="w-[25%] p-2">Date</div>
              <div className="w-[25%] p-2">Action</div>
            </div>
            {
              <List
                width="100%"
                style={{ minWidth: "340px" }}
                className="List"
                height={350}
                itemCount={10}
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
  );
}

export default PaymentRequest;
