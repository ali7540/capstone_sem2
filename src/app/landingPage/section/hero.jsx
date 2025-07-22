import React from "react";

const hero = () => {
  return (
    <div className="bg-[#E8DAF9] min-h-screen w-full flex px-12 flex-col justify-center items-center">
      <h1 className="text-black text-[13vw] leading-16 md:text-8xl md:leading-none font-bold text-center  pb-6 mt-32">
        Control Your Money,
        <br /> Unlock Your Future!
      </h1>
      <p className="text-black text-md text-center max-w-2xl">
        Manage your budget, track expenses, invest wisely, and achieve your
        financial goals—all in one intuitive apps savings goals, and investment
        tracking.
      </p>
      <button className="border bg-[#8140FE]  text-white px-6 py-2 mt-4 rounded-full">
        Contact
      </button>
      <div className="h-auto w-[95vw] p-0 md:pl-48 md:pr-48 rounded-2xl md:rounded-4xl overflow-hidden mt-32 mb-20">
        <img
          className="h-[100%] w-full rounded-2xl md:rounded-4xl object-fit "
          src="/assets/dashboard.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default hero;

// components/Hero.jsx
// "use client";

// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="bg-[#E8DAF9] flex flex-col items-center justify-center min-h-screen px-4 md:px-20 text-center">
//       {/* Heading */}
//       <h1
//         className="
//           font-bold text-black
//           text-4xl sm:text-5xl md:text-7xl lg:text-8xl

//           max-w-3xl
//         "
//       >
//         Control Your Money,<br className="hidden md:block" />
//          Unlock Your Future!
//       </h1>

//       {/* Sub‑heading */}
//       <p className="mt-4 text-base sm:text-lg md:text-xl text-black max-w-2xl">
//         Manage your budget, track expenses, invest wisely, and achieve your
//         financial goals—all in one intuitive app.
//       </p>

//       {/* CTA Button */}
//       <button
//         className="
//           mt-8 px-8 py-3 rounded-full
//           bg-gradient-to-r from-purple-500 to-indigo-500
//           text-white font-semibold
//           hover:opacity-90 transition
//           text-sm sm:text-base
//         "
//       >
//         Contact Us
//       </button>

//       {/* Dashboard Preview Image */}
//       <div
//         className="
//           mt-16 w-full max-w-4xl
//           aspect-[4/3]  /* keep 4:3 ratio */
//           overflow-hidden rounded-3xl
//         "
//       >
//         <Image
//           src="/assets/dashboard.png"
//           alt="Dashboard preview"
//           width={1200}
//           height={900}
//           className="object-cover w-full h-full"
//           priority
//         />
//       </div>
//     </section>
//   );
// }
