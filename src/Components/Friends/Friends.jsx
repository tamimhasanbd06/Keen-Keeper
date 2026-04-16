import React from "react";
import { useFriends } from "../../FriendsContext/FriendsContext.jsx";
import { Link } from "react-router-dom";

const Friends = () => {
  const { friends } = useFriends();

  const getStatusStyle = (status) => {
    if (status === "overdue") return "bg-gray-500 text-white";
    if (status === "almost due") return "bg-yellow-500 text-white";
    return "bg-green-800 text-white";
  };

  const getTagStyle = () => {
    return "bg-blue-500 text-white";
  };

  if (!friends || friends.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <span className="loading loading-infinity w-32 h-32"></span>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Your Friends
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <Link to={`/details/${friend.id}`} key={friend.id}>
            <div className="bg-white rounded-xl shadow-sm p-5 text-center hover:shadow-md cursor-pointer">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-20 h-20 mx-auto rounded-full mb-3"
              />

              <h3 className="font-semibold text-gray-800">
                {friend.name}
              </h3>

              <p className="text-sm text-gray-400 mb-2">
                {friend.days_since_contact}d ago
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-2">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-[10px] px-2 py-1 rounded-full ${getTagStyle()}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>


              <span
                className={`text-xs px-3 py-1 rounded-full ${getStatusStyle(
                  friend.status
                )}`}
              >
                {friend.status}
              </span>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Friends;