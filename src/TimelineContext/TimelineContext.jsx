import React, { createContext, useContext, useState, useEffect } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  
  const [timelineData, setTimelineData] = useState(() => {
    try {
      const saved = localStorage.getItem("timelineData");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Local Storage parsing error:", error);
      return [];
    }
  });

  
  useEffect(() => {
    localStorage.setItem("timelineData", JSON.stringify(timelineData));
  }, [timelineData]);

  
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