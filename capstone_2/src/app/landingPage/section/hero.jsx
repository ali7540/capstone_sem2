import React from "react";


const hero = () => {
  return (
    <div className="bg-[#E8DAF9] min-h-screen flex px-12 flex-col justify-center items-center">
      <h1 className="text-black font-bold text-8xl pb-6 mt-32 ">
        Control Your Money,
        <br /> Unlock Your Future!
      </h1>
      <p className="text-black text-md text-center max-w-2xl">
        Manage your budget, track expenses, invest wisely, and achieve your
        financial goals—all in one intuitive apps savings goals, and investment
        tracking.
      </p>
      <button className="border text-black px-6 py-2 mt-4 rounded-full">
        Contact
      </button>
      <div className="h-[95vh] w-[75vw] rounded-4xl overflow-hidden mt-32 mb-20">
      <img className="h-[100%] w-full object-fit " src="/assets/dashboard.png" alt="" />
      </div>

    </div>
  );
};

export default hero;
