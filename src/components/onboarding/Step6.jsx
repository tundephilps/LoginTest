import React from "react";

import Logo from "../../assets/images/logo/logo.png";

import AuthImage from "../../assets/images/backgrounds/Step6.png";

const Step6 = () => {
  const [progress, setProgress] = React.useState(7); // Initial progress set to 7%

  const progressColor = progress < 70 ? "orange" : "green";
  const progressText =
    progress === 100 ? "100% completed" : `${progress}% Setting up database`;

  // Simulate progress update (for demonstration)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100)); // Increment progress by 1% until it reaches 100%
    }, 100); // Update every 100ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="h-screen w-full  lg:p-6 p-4">
      <div className="grid grid-cols-6 gap-12 h-full">
        <div className="lg:col-span-2 m-auto h-full lg:block flex flex-col justify-center  col-span-6 bg-[#f4f4f4] p-12 rounded-[50px] border border-[#cbceda]">
          <img src={Logo} alt="Logo" className="h-8 object-contain " />
          <div className="text-start">
            <div className="mt-5 space-y-2">
              <p className="text-gray-800 text-[24px] font-bold">
                Your account is being
              </p>
              <p className="text-sm">
                After a successful account creation, you will receive an account
                confirmation email.
              </p>
            </div>
          </div>
          <div className="w-full text-gray-600 pt-16 pb-12">
            <div className="mt-8 space-y-5 ">
              <p className="font-bold">Progress</p>
              <div className="w-full  bg-gray-300 rounded-lg overflow-hidden ">
                <div
                  className=" py-2 text-white font-medium text-center flex items-center justify-center rounded-lg"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: progressColor,
                    transition:
                      "width 0.5s ease-in-out, background-color 0.5s ease-in-out",
                  }}
                >
                  <p className="whitespace-nowrap text-gray-200">
                    {" "}
                    {progressText}{" "}
                  </p>
                </div>
              </div>
              {/* <div className="w-full px-4 py-2 text-white font-medium bg-[#B0B5C9]  rounded-lg ">
              7% Setting up database
            </div> */}
              <button className="w-full px-4 py-2 text-white font-medium bg-[#B0B5C9] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                Go to Tutorial
              </button>
              <button className="w-full px-4 py-2 text-white font-medium bg-[#C2C2C2] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-4  lg:block hidden relative ">
          <h1 className="absolute  text-white font-extrabold text-2xl m-auto inset-0 top-[50%] left-[15%]">
            Spinning up your custom automated AI environment
          </h1>
          <img src={AuthImage} className="h-[94vh] w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Step6;
