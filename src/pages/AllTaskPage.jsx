import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import FilterTask from "../components/FilterTask";
import { useSelector } from "react-redux";

const AllTaskPage = () => {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState("all"); // State to store the current filter
  const [searchQuery, setSearchQuery] = useState("");
  const [reorderTasks, setReorderTasks] = useState([]);

  // Get the current date
  const currentDate = new Date();

  // Filter tasks based on the selected filter
  const filteredTasks = reorderTasks
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

  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggedItem(index);
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Allow dropping
  };

  const handleDrop = (index) => {
    if (draggedItem === index) return;

    const updatedTasks = [...reorderTasks];
    const [movedTask] = updatedTasks.splice(draggedItem, 1);
    updatedTasks.splice(index, 0, movedTask);

    setDraggedItem(index);
    setReorderTasks(updatedTasks);
  };

  useEffect(() => {
    //set task to display reorder list
    setReorderTasks(tasks);
  }, []);

  return (
    <div className="container-lg p-3 w-full">
      <BackButton />
      <FilterTask handleFilter={setFilter} handleQuery={setSearchQuery} />
      <div className="mt-2 flex gap-2 flex-wrap">
        {filteredTasks.length === 0 && (
          <p className="text-3xl text-center font-bold">No Task Found</p>
        )}

        {filteredTasks.length > 0 &&
          filteredTasks.map((task, index) => (
            <div
              key={task.id}
              draggable
              onDragStart={() => handleDragStart(index)} // Triggered when drag starts
              onDragOver={handleDragOver} // Triggered when dragging over a valid target
              onDrop={() => handleDrop(index)}
              className="shadow-lg p-2 w-[200px] bg-white mt-1 cursor-grab"
            >
              <h1 className="text-xl font-medium">{task.title}</h1>
              <p className="text-lg">{task.content}</p>
              <Link
                to={`/task/${task.id}`}
                className="flex gap-1 items-center text-blue font-medium cursor-pointer"
              >
                see more{" "}
                <Icon
                  icon={"material-symbols-light:arrow-right-alt"}
                  fontSize={18}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllTaskPage;
