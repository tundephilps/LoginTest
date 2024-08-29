import React from "react";
import AuthImage from "../../assets/images/backgrounds/Step3.png";

import Logo from "../../assets/images/logo/logo.png";

const Step3 = () => {
  const [selectedOption, setSelectedOption] = React.useState("annually");

  const plans = {
    monthly: {
      starterPrice: "$349",
      proPrice: "$849",
      starterTransactions: "35 Transactions /Monthly",
      proTransactions: "145 Transactions /Monthly",
    },
    annually: {
      starterPrice: "$3,999",
      proPrice: "$9,999",
      starterTransactions: "420 Transactions /Yearly",
      proTransactions: "1740 Transactions /Yearly",
    },
  };

  const selectedPlan = plans[selectedOption];

  return (
    <div className="grid lg:grid-cols-6 lg:px-16 lg:py-6 p-0 lg:gap-12 gap-0 lg:h-full h-[100vh] ">
      <div className="col-span-4 bg-[#f4f4f4] px-12  pt-8 rounded-[50px] border border-[#cbceda] h-full">
        <img src={Logo} alt="Logo" className="pt-2" />
        <div className="text-start">
          <div className="mt-5 space-y-2">
            <div className="mt-5 space-y-2">
              <p className="text-gray-800 text-[24px] font-bold">
                Pricing Model
              </p>
            </div>{" "}
            <div className="flex lg:flex-row flex-col gap-y-6 items-center justify-between text-xs ">
              <p className="">
                Select your plan. All plans have a 7 day free trial!
              </p>
              <div className="flex flex-row gap-4">
                <div className="flex flex-row  items-center gap-2">
                  <label
                    htmlFor="annually"
                    className="flex flex-row items-center gap-2 text-red-500 cursor-pointer"
                  >
                    <span
                      className={`w-4 h-4 rounded-full border-2 border-red-500  ${
                        selectedOption === "annually" ? "bg-red-500 " : ""
                      }`}
                    ></span>
                    Annually
                  </label>
                  <input
                    type="radio"
                    id="annually"
                    name="frequency"
                    value="annually"
                    checked={selectedOption === "annually"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="hidden"
                  />
                </div>
                <div className="flex flex-row items-center gap-2">
                  <label
                    htmlFor="monthly"
                    className="flex flex-row items-center gap-2 text-red-500 cursor-pointer"
                  >
                    <span
                      className={`w-4 h-4 rounded-full border-2 border-red-500 ${
                        selectedOption === "monthly" ? "bg-red-500" : ""
                      }`}
                    ></span>
                    Monthly
                  </label>
                  <input
                    type="radio"
                    id="monthly"
                    name="frequency"
                    value="monthly"
                    checked={selectedOption === "monthly"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="hidden"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="h-[108px] lg:w-[33%] w-full lg:block hidden "></div>
              <div className="h-[108px] lg:w-[33%] w-full border-[#CBCEDA] border bg-[#ffffff] px-10">
                <h1 className="text-1xl font-extrabold pt-2">Starter</h1>
                <p className="text-[#B0B5C9] text-xs">
                  from{" "}
                  <span className="text-[#9CA8D7] text-xs">
                    {" "}
                    {selectedPlan.starterPrice}
                  </span>{" "}
                  /{selectedOption === "monthly" ? "Monthly" : "Annually"}
                </p>
                <p className="text-[#B0B5C9] text-xs">7 day free trial!</p>
              </div>
              <div className="h-[108px] lg:w-[33%] w-full border-[#CBCEDA] border bg-[#ffffff] px-10">
                <h1 className="text-1xl font-extrabold pt-2">Pro</h1>
                <p className="text-[#B0B5C9] text-xs">
                  from{" "}
                  <span className="text-[#9CA8D7] text-xs">
                    {" "}
                    {selectedPlan.proPrice}
                  </span>{" "}
                  /{selectedOption === "monthly" ? "Monthly" : "Annually"}
                </p>
                <p className="text-[#B0B5C9] text-xs">7 day free trial!</p>
              </div>
              <div className="h-[108px] lg:w-[33%] w-full border-[#CBCEDA] border bg-[#ffffff] px-10">
                <h1 className="text-1xl font-extrabold pt-2 text-xs">
                  Teammate/Subscribers
                </h1>
                <p className="text-[#B0B5C9] text-[8px]">
                  A teammate has their own login credentials. A subscriber is
                  someone who can receive transaction notifications.
                </p>
              </div>
              <div className="h-[108px] lg:w-[33%] w-full border-[#CBCEDA] border bg-[#ffffff] px-10 text-xs">
                <h1 className="text-1xl font-extrabold pt-2 whitespace-nowrap">
                  Includes 2 Teammates
                </h1>
                <h1 className="text-1xl font-extrabold whitespace-nowrap">
                  Includes 50 Subscribers
                </h1>
              </div>
              <div className="h-[108px] lg:w-[33%] w-full border-[#CBCEDA] border bg-[#ffffff] px-10 text-xs">
                <h1 className="text-1xl font-extrabold pt-2 whitespace-nowrap">
                  Includes 14 Teammates
                </h1>
                <h1 className="text-1xl font-extrabold whitespace-nowrap">
                  Includes 250 Subscribers
                </h1>
              </div>
              <div className="h-[108px] lg:w-[33%] w-full border-[#CBCEDA] border bg-[#ffffff] px-10 text-xs">
                <h1 className="text-1xl font-extrabold pt-2">Transactions</h1>
                <p className="text-[#B0B5C9] text-[8px]">
                  Each transaction is a fully processed bundle of documents. A
                  bundle can include up to 5 documents. Each document in the
                  bundle can contain up to 50,000 words.
                </p>
              </div>
              <div className="h-[108px] lg:w-[33%] w-full border-[#CBCEDA] border bg-[#ffffff] px-10">
                <h1 className="text-1xl font-extrabold pt-2 text-xs">
                  {selectedPlan.starterTransactions}
                </h1>
              </div>
              <div className="h-[108px] lg:w-[33%] w-full border-[#CBCEDA] border bg-[#ffffff] px-10">
                <h1 className="text-1xl font-extrabold pt-2 text-xs">
                  {selectedPlan.proTransactions}
                </h1>
              </div>
              <div className="h-[108px] lg:w-[33%] w-full"></div>
              <div className="h-[108px] lg:w-[33%] w-full pt-6 px-10">
                <button className=" px-2 py-2 text-white font-medium text-xs bg-[#b0b5c9] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Choose Starter plan
                </button>
              </div>
              <div className="h-[108px] lg:w-[33%] w-full pt-6 px-12">
                <button className=" px-3 py-2 text-white font-medium text-xs bg-[#b0b5c9] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Choose Pro plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 h-full relative lg:block hidden">
        <h1 className="absolute  text-white font-extrabold text-2xl m-auto inset-0 top-[50%] left-[13%]">
          Cost effective AI processing
        </h1>
        <img src={AuthImage} className="h-[95vh]" alt="" />
      </div>
    </div>
  );
};

export default Step3;
