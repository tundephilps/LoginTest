import React from "react";

import Logo from "../../assets/images/logo/logo.png";
import { CiBellOn } from "react-icons/ci";

import AuthImage2 from "../../assets/images/backgrounds/AuthImage2.png";
import { Link } from "react-router-dom";

const ResetPasswordLink = () => {
  return (
    <div className="h-screen w-full  lg:p-6 p-4">
      <div className="grid grid-cols-6 gap-12 h-full">
        <div className="lg:col-span-2 m-auto h-full lg:block flex flex-col justify-center  col-span-6 bg-[#f4f4f4] p-12 rounded-[50px] border border-[#cbceda]">
          <img src={Logo} alt="Logo" className="h-8 object-contain  " />
          <div className="text-start">
            <div className="mt-5 space-y-2">
              <p className="text-gray-800 text-[24px] font-bold">
                Reset your password
              </p>
              <p className="text-sm">
                Ooppss! Seems like you forgot your password! No worries! In a
                few easy steps it can be reset
              </p>

              <p className="font-bold pt-12">
                Please check your email for the reset link
              </p>
            </div>
            <div className="space-y-12 pt-36">
              <div className="text-start">
                <Link to="" className="hover:text-indigo-600">
                  Need an Account?
                  <span className="text-[#9cabd7]"> {""}Sign up</span>
                </Link>
              </div>

              <button
                type="button"
                className="text-gray-900 flex flex-row items-center gap-2 bg-white border border-slate-500 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2"
              >
                <CiBellOn /> Buzz the sales team
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-4  lg:block hidden relative ">
          <h1 className="absolute  text-white font-extrabold text-2xl m-auto inset-0 top-[50%] left-[30%]">
            Its okay. We all forget our passowrds
          </h1>
          <img src={AuthImage2} className="h-[94vh] w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordLink;
