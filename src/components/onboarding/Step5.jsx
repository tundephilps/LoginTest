import React from "react";

import AuthImage from "../../assets/images/backgrounds/Step5.png";

const Step5 = () => {
  return (
    <div className="h-screen w-full  lg:p-6 p-4">
      <div className="grid grid-cols-6 gap-12 h-full">
        <div className="lg:col-span-2 m-auto h-full lg:block flex flex-col justify-center  col-span-6 bg-[#f4f4f4] p-12 rounded-[50px] border border-[#cbceda]">
          {/* <img src={Logo} alt="Logo" className="h-8 object-contain " /> */}
          <div className="text-start">
            <div className="mt-0 space-y-2">
              <p className="text-gray-800 text-[24px] font-bold">Agreement</p>
              <p className="text-sm pb-4">
                Before completing your onboarding,please review and agree to the
                following terms and conditions
              </p>
            </div>
          </div>
          <div className="border border-gray-400 p-2 h-[250px] overflow-scroll text-xs">
            <p className=" space-y-3">
              <div>
                <p>Acceptance of Terms</p>
                <p>
                  By using our services, you agree to comply with and be bound
                  by these terms and conditions.
                </p>
              </div>{" "}
              <div>
                <p> User Responsibilities</p>
                <p>
                  You are responsible for maintaining the confidentiality of
                  your account and password and for restricting access to your
                  computer. You agree to accept responsibility for all
                  activities that occur under your account or password.
                </p>
              </div>{" "}
              <div>
                <p> Use of Service</p>
                <p>
                  You agree to use our services only for lawful purposes and in
                  a manner that does not infringe the rights of or restrict the
                  use and enjoyment of our services by any third party.
                </p>
              </div>{" "}
              <div>
                <p> Data Privacy</p>
                <p>
                  We take your privacy seriously. Please review our Privacy
                  Policy to understand how we collect, use, and safeguard your
                  information.
                </p>
              </div>{" "}
              <div>
                <p> Limitation of Liability </p>
                <p>
                  We are not liable for any damages that may result from your
                  use of our services, including but not limited to direct,
                  indirect, incidental, punitive, and consequential damages.
                </p>
              </div>{" "}
              <div>
                <p> Modifications to Terms </p>
                <p>
                  We reserve the right to change these terms at any time. Any
                  updates will be posted on this page, and it is your
                  responsibility to review these terms regularly. Termination We
                  reserve the right to terminate or suspend your account at our
                  sole discretion, without notice, if you breach these terms.
                </p>
              </div>{" "}
            </p>
          </div>

          <p className="font-bold pt-2 text-xs  cursor-pointer pb-4">
            I Agree to the terms and conditions
          </p>
          <div class="flex items-center pb-4 text-xs ">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  "
            />
            <label
              for="link-checkbox"
              class="ms-2 text-xs font-medium text-[#C0C0C0] "
            >
              I have read and agree to the terms and conditions.
            </label>
          </div>

          <button className="w-full px-4 py-2 text-white font-medium bg-[#b0b5c9] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Create Account
          </button>
        </div>
        <div className="col-span-4  lg:block hidden relative ">
          <h1 className="absolute  text-white font-extrabold text-2xl m-auto inset-0 top-[50%] left-[30%]">
            Keep your data safe... and ours too.
          </h1>
          <img src={AuthImage} className="h-[94vh] w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Step5;
