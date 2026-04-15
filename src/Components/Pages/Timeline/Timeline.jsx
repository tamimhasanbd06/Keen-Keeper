import React from "react";
import { Phone, MessageSquare, Video } from "lucide-react";
import { useTimeline } from "../../../../src/TimelineContext/TimelineContext";

const Timeline = () => {
  const { timelineData } = useTimeline();

  // 🔥 ICON FUNCTION
  const getIcon = (type) => {
    if (type === "call") return <Phone size={20} />;
    if (type === "text") return <MessageSquare size={20} />;
    if (type === "video") return <Video size={20} />;
    return null;
  };

  // 🔥 LABEL FUNCTION
  const getLabel = (type) => {
    if (type === "call") return "Call";
    if (type === "text") return "Text";
    if (type === "video") return "Video";
    return "Activity";
  };

  // 🔥 TIME FORMAT FUNCTION
  const formatTime = (time) => {
    return new Date(time).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Timeline
      </h1>

      {/* FILTER (UI ONLY) */}
      <div className="mb-6">
        <select className="px-4 py-2 border rounded-lg bg-white text-sm text-gray-600 shadow-sm">
          <option>Filter timeline</option>
          <option>Call</option>
          <option>Text</option>
          <option>Video</option>
        </select>
      </div>

      {/* EMPTY STATE */}
      {timelineData.length === 0 ? (
        <div className="text-gray-400 text-sm">
          No activity yet
        </div>
      ) : (
        <div className="space-y-4">

          {timelineData.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-4 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300"
            >

              {/* ICON */}
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
                {getIcon(item.type)}
              </div>

              {/* CONTENT */}
              <div>

                <p className="text-sm text-gray-800">
                  <span className="font-semibold">
                    {getLabel(item.type)}
                  </span>{" "}
                  with{" "}
                  <span className="text-blue-600 font-medium">
                    {item.friend?.name}
                  </span>
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {formatTime(item.time)}
                </p>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Timeline;