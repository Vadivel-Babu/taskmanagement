import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Badge, Card, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../slices/taskSlice";

const TaskPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const task = tasks.find((task) => task.id === id);
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="container-lg p-3">
      <BackButton />
      <Badge text="ji" count="0" />
      <Badge.Ribbon
        text={task?.isCompleted ? "Completed" : "Incompleted"}
        color={task?.isCompleted ? "green" : "red"}
        className="w-[100px] mt-2"
      >
        <Card
          title={task?.title}
          size="large"
          className="w-full md:w-[500px] mt-2 text-base"
        >
          {task?.content}
          <div className="flex gap-2 justify-between mt-2">
            <Button onClick={() => navigate(`/task/edit/${id}`)}>Edit</Button>
            <Button
              color="danger"
              variant="filled"
              onClick={() => setOpen(true)}
            >
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
      <Modal
        title="Delete Task"
        footer={
          <>
            <Button
              color="danger"
              variant="solid"
              onClick={() => {
                setOpen(false);
                dispatch(removeTask(id));
                navigate("/tasks");
              }}
            >
              yes
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              No
            </Button>
          </>
        }
        open={isOpen}
        onCancel={() => setOpen(false)}
      >
        <p className="font-medium text-lg">Are you sure?</p>
      </Modal>
    </div>
  );
};

export default TaskPage;
