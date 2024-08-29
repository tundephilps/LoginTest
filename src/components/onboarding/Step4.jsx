import React from "react";

import Logo from "../../assets/images/logo/logo.png";
import { CiCircleQuestion } from "react-icons/ci";

import AuthImage from "../../assets/images/backgrounds/Step4.jpeg";

const Step4 = () => {
  return (
    <div className="h-screen w-full  lg:p-6 p-4">
      <div className="grid grid-cols-6 gap-12 h-full">
        <div className="lg:col-span-2 m-auto h-full lg:block flex flex-col justify-center  col-span-6 bg-[#f4f4f4] px-12 py-4 rounded-[50px] border border-[#cbceda]">
          <img src={Logo} alt="Logo" className="h-8 mb-4 object-contain " />
          <div className="text-start">
            <div className="mt-2 space-y-2">
              <p className="text-gray-800 text-[24px] font-bold">
                Payment Method
              </p>
              <p className="text-xs">
                Add your credit details. Your card will not be charged until the
                7day free trail is over.
              </p>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 lg:space-y-3 space-y-12 text-xs"
          >
            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Name on Card <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="text"
                placeholder="John Doe"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Card Number <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="url"
                placeholder="1234 1234 1234 1234"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Expiration Date <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="text"
                placeholder="Food Distribution"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500 outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  CVC/CVV <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="text"
                placeholder="123"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500 outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Billing Address <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="text"
                placeholder="123 Main Street, MD."
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500 outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>

            <button className="w-full px-4 py-2 text-white font-medium bg-[#b0b5c9] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Next
            </button>
          </form>
        </div>
        <div className="col-span-4  lg:block hidden relative ">
          <h1 className="absolute  text-white font-extrabold text-2xl m-auto inset-0 top-[50%] left-[20%]">
            Get ready for your automated AI experience
          </h1>
          <img
            src={AuthImage}
            className="h-[94vh] w-full rounded-[50px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Step4;
