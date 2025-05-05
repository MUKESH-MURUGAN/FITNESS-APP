import { useState } from "react";
import { User } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-gray-400 shadow-md px-6 py-4">
      {/* Left: Title */}
      <div className="text-xl font-bold text-gray-800">
        FITNESS AND WELLBEING
      </div>

      {/* Center: Nav Links */}
      <nav className="flex space-x-6 text-gray-700 font-medium">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600"}>
          Home
        </NavLink>
        <NavLink to="/media" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600"}>
          Media
        </NavLink>
        <NavLink to="/article" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600"}>
          Article
        </NavLink>
        <NavLink to="/diet" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600"}>
          Diet
        </NavLink>
      </nav>

      {/* Right: Profile Dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition"
        >
          <User className="w-5 h-5" />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            <ul className="py-1 text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Placeholder Option</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
