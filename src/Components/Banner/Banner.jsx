import React from "react";


const Banner = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-12 sm:py-16 md:py-20">
      
      <div className="max-w-277.5 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold  text-gray-900 leading-tight">
          Friends to keep close in your life
        </h1>

        {/* Description */}
        <p className=" mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-175 mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Button */}
        <button className="mt-6 cursor-pointer bg-green-700 hover:bg-green-800 transition text-white px-5 sm:px-6 py-2.5 rounded-md font-semibold text-sm sm:text-base">
          + Add a Friend
        </button>

      </div>

      {/* Stats Section (Added) */}
      <div className="max-w-277.5 mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div className="bg-[#f3f4f6] rounded-xl py-6 text-center shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">10</h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">Total Friends</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f3f4f6] rounded-xl py-6 text-center shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">3</h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">On Track</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f3f4f6] rounded-xl py-6 text-center shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">6</h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">Need Attention</p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#f3f4f6] rounded-xl py-6 text-center shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">12</h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">Interactions This Month</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Banner;