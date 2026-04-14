import React from 'react';
import { useFriends } from "../../FriendsContext/FriendsContext";

const Friends = () => {

  const { friends } = useFriends();   

  const getStatusStyle = (status) => {
    if (status === 'overdue') return 'bg-gray-500 text-white';
    if (status === 'almost due') return 'bg-yellow-500 text-white';
    return 'bg-green-800 text-white';
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Your Friends
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {friends.map(friend => (
          <div
            key={friend.id}
            className="bg-white rounded-xl shadow-sm p-5 text-center hover:shadow-md transition duration-300 h-full"
          >

            <img
              src={friend.picture}
              alt={friend.name}
              className="w-20 h-20 mx-auto rounded-full object-cover mb-3"
            />

            <h3 className="font-semibold text-gray-800">
              {friend.name}
            </h3>

            <p className="text-sm text-gray-400 mb-2">
              {friend.days_since_contact}d ago
            </p>

            <div className="flex justify-center gap-2 flex-wrap mb-2">
              {friend.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full"
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>

            <div className="mt-2">
              <span
                className={`text-xs px-3 py-1 rounded-full ${getStatusStyle(friend.status)}`}
              >
                {friend.status}
              </span>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Friends;