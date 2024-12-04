import React from "react";
import Form from "../components/Form";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EditTaskPage = () => {
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks);
  const task = tasks.find((task) => task.id === id);
  return (
    <div className="container-lg p-3 my-auto mx-auto w-max">
      <Form type="edit" task={task} />
    </div>
  );
};

export default EditTaskPage;
