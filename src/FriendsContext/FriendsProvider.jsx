import { useState, useEffect } from "react";
import { FriendsContext } from "./FriendsContext.jsx";

const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <FriendsContext.Provider value={{ friends, setFriends }}>
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendsProvider;