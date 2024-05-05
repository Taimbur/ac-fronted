import React from "react";
import p from "../assets/repair.svg";
import pp from "../assets/card1.png";
import install from "../assets/install.jpg";
const Service = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16 ">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 font-[rubik] dark:text-white">
            Services We Offer
          </h1>
          <p className="max-w-2xl mb-6 capitalize  font-semibold text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Many air conditioning services are available from us.{" "}
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 ">
          <div className=" shadow-lg shadow-indigo-500/50  hover:scale-110  duration-300 hover:rounded-xl ">
            <div className="flex  justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img src={install} alt="install" className="h-auto  max-w-20" />
            </div>
            <h3 className="mb-2 text-xl mx-1 pt-2 font-bold dark:text-white uppercase ">
              ac installation (split/ window)
            </h3>

            <div
              className="flex p-4 mb-4 text-sm text-blue-800 rounded-lg   dark:bg-gray-800 dark:text-blue-400"
              role="alert"
            >
              <div>
                <ul className="mt-1.5 font-medium list-inside capitalize  space-y-3">
                  <li>
                    <i className="ri-check-line bg-green-500 text-white rounded-full m-1"></i>
                    &nbsp;Include Fixing of AC stand in Windows
                  </li>
                  <li>
                    <i className="ri-check-line bg-green-500 text-white rounded-full m-1"></i>
                    &nbsp;Connect inlet AC assembly to Air Conditioner
                  </li>
                  <li>
                    <i className="ri-check-line bg-green-500 text-white rounded-full m-1"></i>
                    &nbsp;Connect electricity supply to Air Conditioner
                  </li>
                  <li>
                    <i className="ri-check-line bg-green-500 text-white rounded-full m-1"></i>
                    &nbsp;Check Window AC functions after installation
                  </li>
                </ul>
                <div className=" flex justify-between mx-2 font-bold font-[rubik] uppercase pt-5">
                  <h6 className="pt-2">
                    price &nbsp;
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                      ₹ 499/-
                    </span>
                  </h6>
                  <a href="https://wa.me/8860524349">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" shadow-lg shadow-indigo-500/50  hover:scale-110  duration-300 hover:rounded-xl ">
            <div className="flex justify-center  items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img
                src={p}
                alt="repair"
                className="h-auto max-w-16 ml-2 xl:ml-1 sm:ml-2"
              />
            </div>
            <h3 className="mb-2 text-xl mx-1 font-bold dark:text-white uppercase">
              repair service (split/ window)
            </h3>
            <div
              className="flex p-4 mb-4 text-sm text-blue-800 rounded-lg   dark:bg-gray-800 dark:text-blue-400"
              role="alert"
            >
              <div>
                <ul className="mt-1.5 font-medium list-inside capitalize space-y-3">
                  <li>
                    <i className="ri-check-line bg-green-500 text-white rounded-full m-1"></i>
                    &nbsp;makes sure the components are checked
                  </li>
                  <li>
                    <i className="ri-check-line bg-green-500 text-white rounded-full m-1"></i>
                    &nbsp;Examines every rip and wear on the wires.
                  </li>
                  <li>
                    <i className="ri-check-line bg-green-500 text-white rounded-full m-1"></i>
                    &nbsp;solves the issue quickly and effectively
                  </li>
                  <li>
                    <i className="ri-check-line bg-green-500 text-white rounded-full m-1"></i>
                    &nbsp;inspects the air conditioner's performance
                  </li>
                </ul>
                <div className=" flex justify-between mx-2 font-bold font-[rubik] uppercase pt-5">
                  <h6 className="pt-2">
                    price &nbsp;
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                      ₹ 599/-
                    </span>
                  </h6>
                  <a href="https://wa.me/8860524349">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" shadow-lg shadow-indigo-500/50  hover:scale-110  duration-300 hover:rounded-xl ">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img
                src={pp}
                alt="refill"
                className="h-auto max-w-16 ml-2 xl:ml-1 sm:ml-2"
              />
            </div>
            <h3 className="mb-2 text-xl mx-1 pt-2 font-bold dark:text-white uppercase">
              gas leak fix & refill
            </h3>
            <div
              className="flex p-4 mb-4 text-sm text-blue-800 rounded-lg   dark:bg-gray-800 dark:text-blue-400"
              role="alert"
            >
              <div>
                <ul className="mt-1.5 font-medium  list-inside capitalize space-y-3">
                  <li>
                    <i className="ri-check-line bg-green-500 text-white rounded-full m-1"></i>
                    &nbsp;Pre-service checks
                  </li>
                  <li>
                    <i className="ri-check-line bg-green-500 text-white rounded-full m-1"></i>
                    &nbsp;Finding and repairing leaks
                  </li>
                  <li>
                    <i className="ri-check-line bg-green-500 text-white rounded-full m-1"></i>
                    &nbsp; gas refill at best cost
                  </li>
                  <li>
                    <i className="ri-check-line bg-green-500 text-white rounded-full m-1"></i>
                    &nbsp;Post-service cleanup
                  </li>
                </ul>
                <div className=" flex justify-between mx-2 font-bold font-[rubik] uppercase pt-5">
                  <h6 className="pt-2">
                    price &nbsp;
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                      ₹ 2499/-
                    </span>
                  </h6>
                  <a href="https://wa.me/8860524349">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
