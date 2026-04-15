import React from "react";
import { 
  Phone, MessageSquare, Video, Bell, 
  Archive, Trash2, Edit2 
} from "lucide-react";
import { toast } from "react-toastify";
import { useFriends } from "../../FriendsContext/FriendsContext";
import { useTimeline } from "../../TimelineContext/TimelineContext";

const Details = ({ id, onBack }) => {
  const { friends } = useFriends();
  const { addToTimeline } = useTimeline();

  
  
  const friend = friends.find((f) => f.id === id);

  if (!friend) return <div className="p-10 text-center">Friend not found!</div>;

  


  const handleAction = (type) => {
    switch (type) {
      case "call":
        toast.success(`📞 Calling ${friend.name}...`);
        addToTimeline("call", friend);
        break;
      case "text":
        toast.info(`💬 Message sent to ${friend.name}`);
        addToTimeline("text", friend);
        break;
      case "video":
        toast.success(`🎥 Video call with ${friend.name} started`);
        addToTimeline("video", friend);
        break;
      case "snooze":
        toast.warning("⏰ Snoozed for 2 weeks");
        break;
      case "archive":
        toast.dark("📦 Profile Archived");
        break;
      case "delete":
        toast.error("🗑 Profile Deleted");
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen p-4 md:p-8 font-sans">
      {/* Back Button for mobile convenience */}
      <button onClick={() => window.location.reload()} className="mb-4 text-sm text-gray-500 hover:text-gray-800 lg:hidden">
        ← Back to List
      </button>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: PROFILE CARD & SIDE ACTIONS (4/12 width) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Main Profile Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-gray-50"
            />
            <h2 className="text-xl font-bold text-gray-800 mt-4">{friend.name}</h2>
            
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-red-500 text-white rounded-full">
                {friend.status || "Overdue"}
              </span>
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700 rounded-full">
                FAMILY
              </span>
            </div>

            <p className="text-gray-500 italic text-sm mt-4 leading-relaxed">
              "Former colleague, great mentor"
            </p>
            <p className="text-xs text-gray-400 mt-2">Preferred: email</p>
          </div>

          {/* Sidebar Action Buttons */}
          <div className="space-y-2">
            <button onClick={() => handleAction("snooze")} className="w-full flex items-center justify-center gap-3 py-3 bg-white border border-gray-100 rounded-xl text-gray-700 hover:bg-gray-50 transition-all font-medium text-sm">
              <Bell size={18} className="text-gray-500" /> Snooze 2 Weeks
            </button>
            <button onClick={() => handleAction("archive")} className="w-full flex items-center justify-center gap-3 py-3 bg-white border border-gray-100 rounded-xl text-gray-700 hover:bg-gray-50 transition-all font-medium text-sm">
              <Archive size={18} className="text-gray-500" /> Archive
            </button>
            <button onClick={() => handleAction("delete")} className="w-full flex items-center justify-center gap-3 py-3 bg-white border border-gray-100 rounded-xl text-red-500 hover:bg-red-50 transition-all font-medium text-sm">
              <Trash2 size={18} /> Delete
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: STATS & QUICK CHECK-IN (8/12 width) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* TOP STATS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-3xl font-bold text-gray-800">62</h3>
              <p className="text-gray-400 text-xs mt-1 uppercase font-semibold">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-3xl font-bold text-gray-800">30</h3>
              <p className="text-gray-400 text-xs mt-1 uppercase font-semibold">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-3xl font-bold text-[#2d4a3e]">Feb 27, 2026</h3>
              <p className="text-gray-400 text-xs mt-1 uppercase font-semibold">Next Due</p>
            </div>
          </div>

          {/* RELATIONSHIP GOAL BOX */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
            <div>
              <h4 className="text-gray-700 font-bold text-base">Relationship Goal</h4>
              <p className="text-gray-500 text-sm mt-1">
                Connect every <span className="font-bold text-gray-800">30 days</span>
              </p>
            </div>
            <button className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 text-gray-600 transition-all">
              <Edit2 size={16} />
            </button>
          </div>

          {/* QUICK CHECK-IN SECTION */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="text-gray-700 font-bold text-base mb-6">Quick Check-In</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button 
                onClick={() => handleAction("call")}
                className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-50 rounded-2xl hover:bg-[#f0f4f8] border border-transparent hover:border-blue-100 transition-all group">
                <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Phone size={24} className="text-gray-700" />
                </div>
                <span className="font-semibold text-gray-700 text-sm">Call</span>
              </button>

              <button 
                onClick={() => handleAction("text")}
                className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-50 rounded-2xl hover:bg-[#f0f4f8] border border-transparent hover:border-blue-100 transition-all group" >
                <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} className="text-gray-700" />
                </div>
                <span className="font-semibold text-gray-700 text-sm">Text</span>
              </button>

              <button 
                onClick={() => handleAction("video")}
                className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-50 rounded-2xl hover:bg-[#f0f4f8] border border-transparent hover:border-blue-100 transition-all group" >
                <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Video size={24} className="text-gray-700" />
                </div>
                <span className="font-semibold text-gray-700 text-sm">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Details;