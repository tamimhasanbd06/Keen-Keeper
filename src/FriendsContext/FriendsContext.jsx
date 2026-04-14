import { createContext, useContext } from "react";

export const FriendsContext = createContext();

export const useFriends = () => useContext(FriendsContext);