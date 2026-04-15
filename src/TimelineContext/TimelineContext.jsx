import React, { createContext, useContext, useState, useEffect } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  // ✅ Lazy Initialization: সরাসরি লোকাল স্টোরেজ থেকে ডাটা লোড
  const [timelineData, setTimelineData] = useState(() => {
    try {
      const saved = localStorage.getItem("timelineData");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Local Storage parsing error:", error);
      return [];
    }
  });

  // ✅ Auto Save: যখনই ডাটা চেঞ্জ হবে লোকাল স্টোরেজে সেভ হবে
  useEffect(() => {
    localStorage.setItem("timelineData", JSON.stringify(timelineData));
  }, [timelineData]);

  // ✅ Add Action to Timeline
  const addToTimeline = (actionType, friend) => {
    const newItem = {
      id: Date.now(),
      type: actionType,
      friend: {
        id: friend.id,
        name: friend.name,
        picture: friend.picture
      },
      time: new Date().toISOString(),
    };

    setTimelineData((prev) => [newItem, ...prev]);
  };

  //  Remove from Timeline
  const removeFromTimeline = (id) => {
    setTimelineData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <TimelineContext.Provider
      value={{ timelineData, addToTimeline, setTimelineData, removeFromTimeline }}
    >
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);