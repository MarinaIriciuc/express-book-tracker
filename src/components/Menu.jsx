import {useState} from "react";
import {IoStatsChartSharp} from "@react-icons/all-files/io5/IoStatsChartSharp.js";
import {IoSettingsOutline} from "@react-icons/all-files/io5/IoSettingsOutline.js";
import {IoHomeOutline} from "@react-icons/all-files/io5/IoHomeOutline.js";
import {IoStatsChartOutline} from "@react-icons/all-files/io5/IoStatsChartOutline.js";
import {IoHome} from "@react-icons/all-files/io5/IoHome.js";
import {IoSettings} from "@react-icons/all-files/io5/IoSettings.js";
import {FaRegBookmark} from "@react-icons/all-files/fa/FaRegBookmark.js";
import {FaBookmark} from "@react-icons/all-files/fa/FaBookmark.js";
import {PiBooks} from "react-icons/pi";
import {PiBooksBold} from "react-icons/pi";
import {Link, useLocation} from "react-router-dom";

export default function Menu() {

  const [activeItem, setActiveItem] = useState("");

  const location = useLocation();
  const {pathname} = location;


  return (
    <div className="menu">
      <Link to="/" onClick={() => setActiveItem("home")}>
        <div className="flex items-center gap-2 cursor-pointer">
          {(activeItem === "home" || pathname === '/') ? <IoHome className="text-xl text-blue-400"/> :
            <IoHomeOutline className=" text-xl"/>}
          <p
            className={`text-xs md:block hidden ${(activeItem === "home" || pathname === '/') ? 'text-blue-400' : ''}`}>To
            Read</p>
        </div>
      </Link>
      <Link to="/books">
        <div onClick={() => setActiveItem("books")} className="flex items-center gap-2 cursor-pointer">
          {(activeItem === "books" || pathname === "/books") ? <PiBooksBold className="text-2xl text-blue-400"/> :
            <PiBooks className="text-2xl"/>}
          <p
            className={`text-xs md:block hidden ${(activeItem === "books" || pathname === "/books") ? 'text-blue-400' : ''}`}>My
            books</p>
        </div>
      </Link>
      <Link to="/favorites" onClick={() => setActiveItem("favorites")}>
        <div className="flex items-center gap-2 cursor-pointer">
          {(activeItem === "favorites" || pathname === '/favorites') ? <FaBookmark className="text-xl text-blue-400"/> :
            <FaRegBookmark className="text-xl"/>}
          <p
            className={`text-xs md:block hidden ${(activeItem === "favorites" || pathname === '/favorites') ? 'text-blue-400' : ''}`}>Favorites</p>
        </div>
      </Link>
      <Link to="/statistics" onClick={() => setActiveItem("stats")}>
        <div className="flex items-center gap-2 cursor-pointer">
          {(activeItem === "stats" || pathname === '/statistics') ?
            <IoStatsChartSharp className="text-xl text-blue-400"/> :
            <IoStatsChartOutline className="text-xl"/>}
          <p
            className={`text-xs md:block hidden ${(activeItem === "stats" || pathname === '/statistics') ? 'text-blue-400' : ''}`}>Stats</p>
        </div>
      </Link>
      <Link to="/settings" onClick={() => setActiveItem("settings")}>
        <div className="flex items-center gap-2 cursor-pointer">
          {(activeItem === "settings" || pathname === '/settings') ? <IoSettings className="text-xl text-blue-400"/> :
            <IoSettingsOutline className=" text-xl"/>}
          <p
            className={`text-xs md:block hidden ${(activeItem === "settings" || pathname === '/settings') ? 'text-blue-400' : ''}`}>Settings</p>
        </div>
      </Link>
    </div>
  )
}
