import React from "react";
import { useFriends } from "../../FriendsContext/FriendsContext";

const Banner = () => {

  const { friends } = useFriends();   

  const totalFriends = friends.length;

  const onTrack = friends.filter(
    (friend) => friend.status === "on-track"
  ).length;

  const overdue = friends.filter(
    (friend) => friend.status === "overdue"
  ).length;

  const almostDue = friends.filter(
    (friend) => friend.status === "almost due"
  ).length;

  const needAttention = overdue + almostDue;

  return (
    <section className="w-full bg-[#f9f9f9] py-12 sm:py-16 md:py-20">
      
      <div className="max-w-277.5 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 leading-tight">
          Friends to keep close in your life
        </h1>

        <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-175 mx-auto">
          Your personal shelf of meaningful connections.
        </p>

        <button className="mt-6 cursor-pointer bg-green-700 hover:bg-green-800 transition text-white px-5 sm:px-6 py-2.5 rounded-md font-semibold text-sm sm:text-base">
          + Add a Friend
        </button>

      </div>

      <div className="max-w-277.5 mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-[#f3f4f6] rounded-xl py-6 text-center shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">
              {totalFriends}
            </h2>
            <p className="text-gray-600 mt-1">Total Friends</p>
          </div>

          <div className="bg-[#f3f4f6] rounded-xl py-6 text-center shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">
              {onTrack}
            </h2>
            <p className="text-gray-600 mt-1">On Track</p>
          </div>

          <div className="bg-[#f3f4f6] rounded-xl py-6 text-center shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">
              {needAttention}
            </h2>
            <p className="text-gray-600 mt-1">Need Attention</p>
          </div>

          <div className="bg-[#f3f4f6] rounded-xl py-6 text-center shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">
              {almostDue}
            </h2>
            <p className="text-gray-600 mt-1">Almost Due</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Banner;