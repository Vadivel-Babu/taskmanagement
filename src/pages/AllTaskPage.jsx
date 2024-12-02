import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import FilterTask from "../components/FilterTask";

const AllTaskPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container-lg p-3">
      <BackButton />
      <FilterTask />
      <div className="mt-2 flex gap-2">
        <div className="shadow-lg p-2 w-[200px]">
          <h1 className="text-xl font-medium">Title</h1>
          <p className="text-lg">content</p>
          <Link
            to={"/task/1"}
            className="flex gap-1 items-center text-blue font-medium"
          >
            see more{" "}
            <Icon
              icon={"material-symbols-light:arrow-right-alt"}
              fontSize={18}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllTaskPage;
