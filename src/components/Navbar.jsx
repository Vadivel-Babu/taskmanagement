import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar } from "antd";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [minmize, setMinimize] = useState(false);
  return (
    <div className="bg-black md:h-screen text-white p-6 transition">
      <div className="flex md:flex-col justify-between h-full">
        <div className="flex md:flex-col sm:items-center gap-6 md:items-start md:justify-center">
          <NavLink
            to="/"
            className="md:text-4xl hover:text-hover-green font-semibold tracking-wider"
          >
            {minmize ? (
              <Avatar style={{ backgroundColor: "#dcfcec", color: "#00c763" }}>
                T
              </Avatar>
            ) : (
              <p className="text-xl md:text-4xl">Task</p>
            )}
          </NavLink>
          <div className="flex gap-3 md:flex-col">
            <NavLink
              to="/"
              className={`hover:text-hover-green md:text-2xl flex items-center gap-2 md:mt-5 ${
                location.pathname === "/" ? "text-green" : ""
              }`}
            >
              <span>
                <Icon
                  icon="weui:home-filled"
                  className={minmize ? "md:mt-0" : ""}
                  fontSize={25}
                />
              </span>
              {!minmize && <p className="hidden md:inline-block">Home</p>}
            </NavLink>
            <NavLink
              to="/task/create"
              className={`hover:text-hover-green md:text-2xl flex items-center gap-2 ${
                location.pathname === "/task/create" ? "text-green" : ""
              }`}
            >
              <span>
                <Icon
                  icon="weui:add2-filled"
                  fontSize={25}
                  className={minmize ? "md:mt-2" : ""}
                />
              </span>
              {!minmize && <p className="hidden md:inline-block">Create</p>}
            </NavLink>
            <NavLink
              to="/tasks"
              className={`hover:text-hover-green md:text-2xl flex items-center gap-2 ${
                location.pathname === "/tasks" ? "text-green" : ""
              }`}
            >
              <span>
                <Icon
                  icon="weui:star-filled"
                  className={minmize ? "md:mt-2" : ""}
                  fontSize={25}
                />
              </span>
              {!minmize && <p className="hidden md:inline-block">All Task</p>}
            </NavLink>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Avatar style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}>
              U
            </Avatar>
            {!minmize && (
              <p className="uppercase font-semibold text-xl hidden md:inline-block">
                user
              </p>
            )}
          </div>
          <div
            onClick={() => setMinimize(!minmize)}
            className="hidden md:flex items-center gap-2 text-xl cursor-pointer mt-5 hover:text-hover-green"
          >
            <Icon
              icon={
                minmize
                  ? "material-symbols-light:arrow-circle-right"
                  : "material-symbols-light:arrow-circle-left-rounded"
              }
              fontSize={"30px"}
            />
            {!minmize && <p className="text-lg">minimize</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
