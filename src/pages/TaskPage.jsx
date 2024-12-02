import React from "react";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Badge, Card } from "antd";

const TaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="container-lg p-3">
      <BackButton />
      <Badge text="ji" count="0" />
      <Badge.Ribbon
        text={!false ? "Completed" : "Incompleted"}
        color={!false ? "green" : "red"}
        className="w-[100px] mt-2"
      >
        <Card
          title="Pushes"
          size="large"
          className="w-full md:w-[500px] mt-2 text-base"
        >
          and raises the spyglass.
          <div className="flex gap-2 justify-between mt-2">
            <Button onClick={() => navigate(`/task/edit/${id}`)}>Edit</Button>
            <Button color="danger" variant="filled">
              Delete
            </Button>
          </div>
        </Card>
      </Badge.Ribbon>
      {/* <div className="p-2 shadow-lg rounded-lg space-y-2">
        <h1>Title:</h1>
        <p>Content:</p>
        <p>Status: completed</p>
      </div> */}
    </div>
  );
};

export default TaskPage;
