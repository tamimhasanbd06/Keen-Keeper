import React from "react";
import {
  Phone, MessageSquare, Video, Bell,
  Archive, Trash2, Edit2
} from "lucide-react";
import { toast } from "react-toastify";

import { useTimeline } from "../../TimelineContext/TimelineContext";
import { useParams, Link } from "react-router-dom";
import { useFriends } from "../../FriendsContext/FriendsContext.jsx";

const Details = () => {
  const { id } = useParams();
  const { friends } = useFriends();
  const { addToTimeline } = useTimeline();

  const friend = friends.find((f) => f.id == id);

  if (!friend) return <div className="p-10 text-center">Friend not found!</div>;

  const handleAction = (type) => {
    switch (type) {
      case "call":
        toast.success(
          <div className="flex items-center gap-2">
            <Phone size={18} />
            Calling {friend.name}...
          </div>
        );
        addToTimeline("call", friend);
        break;

      case "text":
        toast.info(
          <div className="flex items-center gap-2">
            <MessageSquare size={18} />
            Message sent to {friend.name}
          </div>
        );
        addToTimeline("text", friend);
        break;

      case "video":
        toast.success(
          <div className="flex items-center gap-2">
            <Video size={18} />
            Video call with {friend.name} started
          </div>
        );
        addToTimeline("video", friend);
        break;

      case "snooze":
        toast.warning(
          <div className="flex items-center gap-2">
            <Bell size={18} />
            Snoozed for 2 weeks
          </div>
        );
        break;

      case "archive":
        toast.dark(
          <div className="flex items-center gap-2">
            <Archive size={18} />
            Profile Archived
          </div>
        );
        break;

      case "delete":
        toast.error(
          <div className="flex items-center gap-2">
            <Trash2 size={18} />
            Profile Deleted
          </div>
        );
        break;

      default:
        break;
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen p-4 md:p-8 font-sans">

      <Link
        to="/"
        className="mb-4 text-sm text-gray-500 hover:text-gray-800 block">
          
        ← Back to List
      </Link>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

        <div className="lg:col-span-4 space-y-4">

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-gray-50"
            />

            <h2 className="text-lg font-semibold text-gray-800 mt-3">
              {friend.name}
            </h2>

            {/* ✅ UI MATCH BADGES */}
            <div className="flex flex-col items-center gap-2 mt-3">

              {/* Main Status */}
              <span className="px-3 py-[3px] text-[10px] font-semibold bg-red-500 text-white rounded-full">
                {friend.status}
              </span>

              {/* Tag (First one only like screenshot style) */}
              <span className="px-3 py-[3px] text-[10px] font-semibold bg-green-100 text-green-700 rounded-full">
                {friend.tags?.[0]}
              </span>

            </div>

            <p className="text-gray-500 italic text-sm mt-4 leading-relaxed">
              "Former colleague, great mentor"
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Preferred: email
            </p>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => handleAction("snooze")}
              className="w-full flex items-center justify-center gap-3 py-3 bg-white border border-gray-100 rounded-xl text-gray-700 hover:bg-gray-50 font-medium text-sm">

              <Bell size={18} className="text-gray-500" />
              Snooze 2 Weeks
            </button>

            <button
              onClick={() => handleAction("archive")}
              className="w-full flex items-center justify-center gap-3 py-3 bg-white border border-gray-100 rounded-xl text-gray-700 hover:bg-gray-50 font-medium text-sm">

              <Archive size={18} className="text-gray-500" />
              Archive
            </button>

            <button
              onClick={() => handleAction("delete")}
              className="w-full flex items-center justify-center gap-3 py-3 bg-white border border-gray-100 rounded-xl text-red-500 hover:bg-red-50 font-medium text-sm" >

              <Trash2 size={18} />
              Delete
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
              <h3 className="text-3xl font-bold text-gray-800">62</h3>
              <p className="text-gray-400 text-xs mt-1 uppercase font-semibold">
                Days Since Contact
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
              <h3 className="text-3xl font-bold text-gray-800">30</h3>
              <p className="text-gray-400 text-xs mt-1 uppercase font-semibold">
                Goal (Days)
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
              <h3 className="text-3xl font-bold text-[#2d4a3e]">
                Feb 27, 2026
              </h3>
              <p className="text-gray-400 text-xs mt-1 uppercase font-semibold">
                Next Due
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 flex justify-between items-center">
            <div>
              <h4 className="text-gray-700 font-bold">Relationship Goal</h4>
              <p className="text-gray-500 text-sm mt-1">
                Connect every{" "}
                <span className="font-bold text-gray-800">30 days</span>
              </p>
            </div>

            <button className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 text-gray-600">
              <Edit2 size={16} />
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100">
            <h4 className="text-gray-700 font-bold mb-6">
              Quick Check-In
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              <button
                onClick={() => handleAction("call")}
                className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-2xl hover:bg-[#f0f4f8] group">

                <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <span className="font-semibold text-sm">Call</span>
              </button>

              <button
                onClick={() => handleAction("text")}
                className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-2xl hover:bg-[#f0f4f8] group">

                <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110">
                  <MessageSquare size={24} />
                </div>
                <span className="font-semibold text-sm">Text</span>
              </button>

              <button
                onClick={() => handleAction("video")}
                className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-2xl hover:bg-[#f0f4f8] group" 
                  >
                <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110">
                  <Video size={24} />
                </div>
                <span className="font-semibold text-sm">Video</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Details;