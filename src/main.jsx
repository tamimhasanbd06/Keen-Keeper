import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TimelineProvider } from "./TimelineContext/TimelineContext";



import App from "./App.jsx";
import Home from "./Components/Pages/Home/Home.jsx";
import Stats from "./Components/Pages/Stats/Stats.jsx";
import Timeline from "./Components/Pages/Timeline/Timeline.jsx";
import Details from "./Components/Details/Details.jsx";
import FriendsProvider from "./FriendsContext/FriendsProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineProvider>
      <FriendsProvider>   {/* ✅ FIXED */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="stats" element={<Stats />} />
              <Route path="timeline" element={<Timeline />} />
              <Route path="details/:id" element={<Details />} />
            </Route>
          </Routes>
          <ToastContainer position="top-right" autoClose={2000} />
        </BrowserRouter>
      </FriendsProvider>   
    </TimelineProvider>
  </StrictMode>
);