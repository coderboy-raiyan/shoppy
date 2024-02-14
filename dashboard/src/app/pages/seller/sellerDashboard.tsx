/* eslint-disable @typescript-eslint/no-explicit-any */
import Chart from "react-apexcharts";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function SellerDashboard() {
  const state = {
    series: [
      {
        name: "Orders",
        data: [34, 87, 98, 20, 93, 278, 928, 823, 90, 19, 20, 100],
      },
      {
        name: "Revenue",
        data: [34, 76, 98, 20, 93, 28, 928, 823, 90, 19, 20, 100],
      },
      {
        name: "Sales",
        data: [90, 23, 98, 20, 93, 28, 99, 100, 90, 19, 20, 100],
      },
    ],
    options: {
      color: ["#181ee8", "#181ee8"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        linCap: "butt",
        width: 0.5,
        colors: "#f0f0f0",
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jen",
          "Feb",
          "Mar",
          "Apl",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jen",
              "Feb",
              "Mar",
              "Apl",
              "May",
              "June",
              "July",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: "550",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 ">
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3 ">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6] ">
            <h2 className="text-3xl font-bold">$8937</h2>
            <span className="text-md font-medium">Total Sales </span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl ">
            <BsCurrencyDollar className="text-[#28c76f] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3 ">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6] ">
            <h2 className="text-3xl font-bold">10</h2>
            <span className="text-md font-medium">Products</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl ">
            <RiProductHuntLine className="text-[#cd00e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3 ">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6] ">
            <h2 className="text-3xl font-bold">100</h2>
            <span className="text-md font-medium">Orders </span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl ">
            <AiOutlineShoppingCart className="text-[#00cfe8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3 ">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6] ">
            <h2 className="text-3xl font-bold">1937</h2>
            <span className="text-md font-medium">Pending Orders</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#7376f01f] flex justify-center items-center text-xl ">
            <AiOutlineShoppingCart className="text-[#7367f0] shadow-lg" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap mt-7 ">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-[#283046] p-4 rounded-md ">
            <Chart
              options={state.options as any}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>

        <div className="w-full lg:w-5/12 lg:p-4 mt-6 lg:mt-0">
          <div className="w-full bg-[#283046] p-4 rounded-md text-[#d0d2d6]">
            <div className="flex justify-between items-center ">
              <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">
                Recent customer Message
              </h2>
              <Link to="" className="font-semibold text-sm text-[#d0d2d6]">
                View All
              </Link>
            </div>
            <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
              <ol className="relative border-1 border-slate-600 ml-4">
                <li className="mb-3 ml-6">
                  <div className="w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full absolute -left-5 shadow-lg flex justify-center items-center">
                    <img
                      className="w-full h-full rounded-full shadow-lg"
                      src="/images/admin.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link to="admin">Customer Name</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        4 days ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-700">
                      how are you
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4 bg-[#283046] rounded-md mt-6">
        <div className="flex justify-between items-center ">
          <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">
            Recent Orders
          </h2>
          <Link to="" className="font-semibold text-sm text-[#d0d2d6]">
            View All
          </Link>
        </div>
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
                  <Link to="">view</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;
