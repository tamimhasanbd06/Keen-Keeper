import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { BiStats } from "react-icons/bi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/", icon: <IoHomeSharp /> },
    { name: "Timeline", path: "/timeline", icon: <FaRegClock /> },
    { name: "Statistics", path: "/stats", icon: <BiStats /> },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-[#f3f3f3] border-b border-gray-200 relative z-50">

      <div className="max-w-400 mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-[20px] flex items-center gap-0.5">
          <span className="text-gray-900 font-semibold tracking-wide">Keen</span>
          <span className="text-green-700 font-bold tracking-wide">Keeper</span>
        </div>

        {/* DESKTOP MENU (ONLY md and above) */}
        <div className="hidden md:flex items-center gap-2 bg-white p-1 rounded-xl shadow-sm">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-2 px-4 lg:px-5 py-2 rounded-lg text-[14px] font-medium transition-all duration-200
                ${ isActive ? "bg-green-800 text-white shadow" : "text-gray-600 hover:bg-gray-100" }`} >
                <span className="text-[16px]">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* HAMBURGER (Mobile + Tablet only) */}
        <div ref={menuRef} className="md:hidden relative">

          <button
            onClick={() => setMenuOpen(!menuOpen)} className="text-2xl p-2 rounded-md hover:bg-gray-200 transition" >
            ☰
          </button>

          {/* DROPDOWN */}
          {menuOpen && (
            <div className="absolute right-0 top-full mt-3 w-44 sm:w-52 bg-white rounded-xl shadow-lg border border-gray-100 z-50">

              <div className="flex flex-col p-2 space-y-2">

                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.name} to={item.path} onClick={() => setMenuOpen(false)} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[14px] whitespace-nowrap transition
                      ${
                        isActive ? "bg-green-800 text-white" : "text-gray-600 hover:bg-gray-100" }`}>
                      <span className="text-[16px]">{item.icon}</span>
                      {item.name}
                    </Link>
                  );
                })}

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default NavBar;