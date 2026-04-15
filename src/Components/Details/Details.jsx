import React from "react";
import { Phone, MessageSquare, Video, Bell, Archive, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import { useFriends } from "../../FriendsContext/FriendsContext";
import { useTimeline } from "../../TimelineContext/TimelineContext"; // Add this import for timeline context

const Details = ({ id }) => {
  const { friends } = useFriends();
  const { addToTimeline } = useTimeline(); // Get addToTimeline from context

  const friend = friends.find((f) => f.id === id);

  if (!friend) return null;

  //  Toast function (unchanged)
  const handleToast = (type) => {
    if (type === "call") {
      toast.success("📞 Calling...");
      addToTimeline("call", friend); // Add call action to timeline
    }
    if (type === "text") {
      toast.info("💬 Message sent!");
      addToTimeline("text", friend); // Add text action to timeline
    }
    if (type === "video") {
      toast.success("🎥 Video call started!");
      addToTimeline("video", friend); // Add video action to timeline
    }
    if (type === "snooze") toast.warning("⏰ Snoozed for 2 weeks");
    if (type === "archive") toast.info("📦 Archived");
    if (type === "delete") toast.error("🗑 Deleted");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* GRID WRAPPER */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT CARD */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <img
            src={friend.picture}
            className="w-24 h-24 mx-auto rounded-full"
          />
          <h2 className="text-xl font-bold mt-3">{friend.name}</h2>
          <span className="inline-block mt-2 px-3 py-1 text-xs bg-red-500 text-white rounded-full">
            {friend.status}
          </span>
          <p className="text-gray-500 text-sm mt-3">
            "Former colleague, great mentor"
          </p>
          <p className="text-xs text-gray-400">Preferred: email</p>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-2 space-y-4">
          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl text-center shadow">
              <h3 className="text-2xl font-bold">62</h3>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded-xl text-center shadow">
              <h3 className="text-2xl font-bold">30</h3>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 rounded-xl text-center shadow">
              <h3 className="text-xl font-bold">Feb 27, 2026</h3>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          {/* GOAL CARD */}
          <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Relationship Goal</h3>
              <p className="text-gray-500 text-sm"> Connect every <b>30 days</b> </p>
            </div>
            <button className="px-3 py-1 text-sm border rounded">Edit</button>
          </div>

          {/* ACTIONS */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-3">

              <button onClick={() => handleToast("call")}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 flex flex-col items-center">
                <Phone />
                <span className="text-sm mt-1">Call</span>
              </button>

              <button onClick={() => handleToast("text")}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 flex flex-col items-center">
                <MessageSquare />
                <span className="text-sm mt-1">Text</span>
              </button>

              <button onClick={() => handleToast("video")}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 flex flex-col items-center" >
                <Video />
                <span className="text-sm mt-1">Video</span>
              </button>
            </div>
          </div>

          {/* EXTRA ACTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button onClick={() => handleToast("snooze")}
              className="bg-white p-3 rounded shadow flex items-center justify-center gap-2">
              <Bell size={16} /> Snooze 2 Weeks
            </button>

            <button onClick={() => handleToast("archive")}
              className="bg-white p-3 rounded shadow flex items-center justify-center gap-2">
              <Archive size={16} /> Archive
            </button>

            <button onClick={() => handleToast("delete")}
              className="bg-white p-3 rounded shadow text-red-500 flex items-center justify-center gap-2">
              <Trash2 size={16} /> Delete
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;