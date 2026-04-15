import React, { useState } from "react";
import { Phone, MessageSquare, Video, Trash2 } from "lucide-react";
import { useTimeline } from "../../../TimelineContext/TimelineContext";

const Timeline = () => {
  const { timelineData, removeFromTimeline } = useTimeline();
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? timelineData
      : timelineData.filter((item) => item.type === filter);

  const getIcon = (type) => {
    if (type === "call") return <Phone size={20} />;
    if (type === "text") return <MessageSquare size={20} />;
    if (type === "video") return <Video size={20} />;
  };

  const formatTime = (time) => {
    return new Date(time).toLocaleString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    

    <div className="min-h-screen bg-[#f8fafc] w-full max-w-400 mx-auto px-4 md:px-8 py-10 font-sans">
      
      
      <div className="max-w-277.5 mx-auto">
        
        {/* Header Section: Title & Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            Timeline
          </h1>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-xl bg-white text-gray-600 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer">
            <option value="all">All Activities</option>
            <option value="call">Calls</option>
            <option value="text">Texts</option>
            <option value="video">Videos</option>
          </select>
        </div>

        {/* Timeline Items Section */}
        <div className="space-y-4">
          {filteredData.length === 0 ? (
            <div className="bg-white p-10 rounded-2xl border border-dashed border-gray-300 text-center">
              <p className="text-gray-400 font-medium">No activity found in your timeline.</p>
            </div>
          ) : (

            filteredData.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300" >
                {/* Left Side: Icon & Info */}
                <div className="flex items-center gap-5">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full shrink-0 ${
                      item.type === "call"
                        ? "bg-green-50 text-green-600"
                        : item.type === "text"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-purple-50 text-purple-600" }`} >
                    {getIcon(item.type)}
                  </div>

                  <div>
                    <p className="text-sm md:text-base text-gray-800 font-medium">
                      <span className="capitalize">{item.type}</span> with{" "}
                      <span className="text-blue-600 font-bold">
                        {item.friend?.name || "Unknown"}
                      </span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1 font-medium italic">
                      {formatTime(item.time)}
                    </p>
                  </div>
                </div>

                {/* Right Side: Action Button */}
                <button
                  onClick={() => removeFromTimeline(item.id)}
                  className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                  title="Remove Activity">
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;