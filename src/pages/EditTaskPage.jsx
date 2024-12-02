import React from "react";
import Form from "../components/Form";
import BackButton from "../components/BackButton";

const EditTaskPage = () => {
  return (
    <div className="container-lg p-3">
      <BackButton />
      <h1>Edit Task</h1>
      <Form />
    </div>
  );
};

export default EditTaskPage;
