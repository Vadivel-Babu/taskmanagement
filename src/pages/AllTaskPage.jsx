import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import FilterTask from "../components/FilterTask";
import { useSelector } from "react-redux";

const AllTaskPage = () => {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState("all"); // State to store the current filter
  const [searchQuery, setSearchQuery] = useState("");

  // Get the current date
  const currentDate = new Date();

  // Filter tasks based on the selected filter
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "all") return true;
      if (filter === "completed") return task.isCompleted === true;
      if (filter === "pending") return task.isCompleted === false;
      if (filter === "overdue")
        return new Date(task.date) < currentDate && task.isCompleted === false;
      return true;
    })
    .filter((task) => {
      return task.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

  return (
    <div className="container-lg p-3 w-full">
      <BackButton />
      <FilterTask handleFilter={setFilter} handleQuery={setSearchQuery} />
      <div className="mt-2 flex gap-2 flex-wrap">
        {filteredTasks.length === 0 ? (
          <p className="text-3xl text-center font-bold">No Task Found</p>
        ) : (
          filteredTasks.map((task) => (
            <div className="shadow-lg p-2 w-[200px]" key={task.id}>
              <h1 className="text-xl font-medium">{task.title}</h1>
              <p className="text-lg">{task.content}</p>
              <Link
                to={`/task/${task.id}`}
                className="flex gap-1 items-center text-blue font-medium"
              >
                see more{" "}
                <Icon
                  icon={"material-symbols-light:arrow-right-alt"}
                  fontSize={18}
                />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllTaskPage;
