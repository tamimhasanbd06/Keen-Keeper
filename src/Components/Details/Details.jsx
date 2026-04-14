import React from 'react';
import { useFriends } from "../../FriendsContext/FriendsContext";
import { useNavigate } from 'react-router-dom';
import { Bell, Archive, Trash2, Phone, MessageSquare, Video, ChevronLeft } from 'lucide-react';

const Details = ({ id }) => {
    const { friends } = useFriends();
    const navigate = useNavigate();
    const friend = friends.find(f => f.id === id);

    if (!friend) {
        return <div className="flex justify-center items-center min-h-screen text-gray-500 font-medium">Friend not found</div>;
    }

    const isOverdue = friend.status === 'overdue';
    const nextDue = new Date(friend.next_due_date).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric'
    });

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-slate-700">
            {/* Main Container: min-width 320px, max-width 1600px */}
            <div className="mx-auto min-w-[320px] max-w-400 p-4 md:p-8">

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-emerald-800 transition mb-6 group"
                >
                    <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Dashboard
                </button>




                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* LEFT COLUMN: Profile & Admin Actions */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col items-center text-center">

                            <img src={friend.picture} alt={friend.name} className="w-24 h-24 rounded-full object-cover mb-4 shadow-sm" />

                            <h2 className="text-xl font-bold text-gray-800">{friend.name}</h2>

                            <div className="flex flex-wrap justify-center gap-2 mt-2">
                                {isOverdue && (<span className="px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider 
                                  rounded-full bg-red-500 text-white">
                                    Overdue
                                </span>
                                )}
                                {friend.tags && friend.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full
                                     bg-green-100 text-green-600">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-sm text-gray-500 mt-4 italic leading-relaxed">
                                "{friend.bio}"
                            </p>
                            <p className="text-[11px] text-gray-400 mt-2">
                                Preferred: <span className="text-gray-500">{friend.preferred_method || 'email'}</span>
                            </p>
                        </div>

                        {/* Admin Action Buttons */}

                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2">

                            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 
                            rounded-xl text-sm font-medium hover:bg-gray-50 transition">

                                <Bell size={16} /> <span className="sm:hidden lg:inline">Snooze 2 Weeks</span><span className="hidden 
                                sm:inline lg:hidden">Snooze</span>
                            </button>

                            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200
                             rounded-xl text-sm font-medium hover:bg-gray-50 transition">
                                <Archive size={16} /> Archive
                            </button>

                            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 
                            rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition">
                                <Trash2 size={16} /> Delete
                            </button>

                        </div>
                    </div>

                    {/* RIGHT COLUMN: Stats & Contact */}
                    <div className="lg:col-span-8 space-y-6">

                        {/* Stats Row: Responsive grid (1 col on tiny, 3 col on sm+) */}

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">

                                <div className="text-3xl font-bold text-gray-800">{friend.days_since_contact || 0}</div>

                                <div className="text-[12px] text-gray-400 mt-1 uppercase tracking-wide">Days Since Contact</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">

                                <div className="text-3xl font-bold text-gray-800">{friend.frequency || 30}</div>

                                <div className="text-[12px] text-gray-400 mt-1 uppercase tracking-wide">Goal (Days)</div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">

                                <div className="text-2xl font-bold text-emerald-800">{nextDue}</div>

                                <div className="text-[12px] text-gray-400 mt-1 uppercase tracking-wide">Next Due</div>
                            </div>
                        </div>

                        {/* Relationship Goal Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row 
                        justify-between items-start sm:items-center gap-4">
                            <div>
                                <h3 className="text-base font-semibold text-emerald-900">Relationship Goal</h3>

                                <p className="text-sm text-gray-600 mt-1">Connect every <span className="font-bold">
                                    {friend.frequency || 30} days</span></p>
                            </div>
                            <button className="w-full sm:w-auto px-6 py-1.5 bg-gray-50 border border-gray-200 rounded-lg 
                            text-xs font-semibold text-gray-600 hover:bg-gray-100 transition">
                                Edit
                            </button>
                        </div>

                        {/* Quick Check-In Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

                            <h3 className="text-base font-semibold text-emerald-900 mb-4 text-center sm:text-left">Quick Check-In</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                                <button className="flex flex-col items-center justify-center gap-2 p-6 bg-gray-50 border border-transparent rounded-2xl
                                 hover:border-emerald-200 hover:bg-emerald-50 transition group">

                                    <Phone className="text-gray-600 group-hover:text-emerald-600 transition-colors" />
                                    <span className="text-sm font-medium text-gray-700">Call</span>
                                </button>

                                <button className="flex flex-col items-center justify-center gap-2 p-6 bg-gray-50 border border-transparent 
                                rounded-2xl hover:border-emerald-200 hover:bg-emerald-50 transition group">

                                    <MessageSquare className="text-gray-600 group-hover:text-emerald-600 transition-colors" />
                                    <span className="text-sm font-medium text-gray-700">Text</span>
                                </button>

                                <button className="flex flex-col items-center justify-center gap-2 p-6 bg-gray-50 border
                                 border-transparent rounded-2xl hover:border-emerald-200 hover:bg-emerald-50 transition group">

                                    <Video className="text-gray-600 group-hover:text-emerald-600 transition-colors" />
                                    <span className="text-sm font-medium text-gray-700">Video</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;