import React, { useEffect, useState } from 'react';
import Banner from '../../Banner/Banner';
import Friends from '../../Friends/Friends';
import { FriendsContext } from '../../../FriendsContext/FriendsContext.jsx';   

const Home = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setFriends(data))
      .catch(err => console.error("Data load error:", err));
  }, []);

  return (
    <FriendsContext.Provider value={{ friends }}>
      <Banner />
      <Friends />
    </FriendsContext.Provider>
  );
};

export default Home;