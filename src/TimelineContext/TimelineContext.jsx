import React, { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timelineData, setTimelineData] = useState([]);

  const addToTimeline = (actionType, friend) => {
    const newItem = {
      id: Date.now(),
      type: actionType,
      friend,
      time: new Date().toLocaleString(),
    };

    setTimelineData((prev) => [newItem, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timelineData, addToTimeline }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);