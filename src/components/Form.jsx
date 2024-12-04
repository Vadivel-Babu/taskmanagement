import React, { useEffect, useState } from "react";
import { Input, DatePicker, Button, Switch, message } from "antd";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTask, handleCheck, updateTask } from "../slices/taskSlice";

const { TextArea } = Input;

const Form = ({ type = "create", task = "" }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: "",
    title: "",
    content: "",
    date: "",
    isCompleted: false,
  });
  const navigate = useNavigate();

  function resetState() {
    setData({
      id: "",
      title: "",
      content: "",
      date: "",
      isCompleted: false,
    });
  }

  function validation() {
    if (!data.title.trim()) {
      messageApi.error("title cannot be empty");
      return false;
    } else if (!data.content.trim()) {
      messageApi.error("content cannot be empty");
      return false;
    } else if (!data.date.trim()) {
      messageApi.error("select date");
      return false;
    }
    return true;
  }

  function handleTaskSubmit(e) {
    e.preventDefault();
    if (validation()) {
      let id = uuid().slice(0, 8);
      const newData = {
        ...data,
        id,
      };
      dispatch(addTask(newData));
      navigate("/tasks");
      resetState();
    }
  }

  function handleTaskUpdate(e) {
    e.preventDefault();

    if (validation()) {
      dispatch(updateTask(data));
      navigate("/tasks");
    }
  }

  useEffect(() => {
    if (type === "edit") {
      setData(task);
    }
  }, [task]);
  return (
    <>
      {contextHolder}
      <h1 className="my-2 text-xl font-medium text-center">
        {type === "create" ? "Create Task" : "Edit Task"}
      </h1>
      <form action="" className="border p-2 rounded-md space-y-3 max-w-[400px]">
        <Input
          placeholder="Title"
          name="title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextArea
          showCount
          maxLength={100}
          placeholder="content"
          style={{ height: 120, resize: "none" }}
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <div className="space-y-1">
          <p>Due Date: {type === "edit" && data.date}</p>
          <DatePicker
            onChange={(e) =>
              setData({ ...data, date: `${e?.$y}-${e?.$M + 1}-${e?.$D}` })
            }
          />
        </div>
        <div className="flex gap-3">
          {/* <p>Status: {data.isCompleted ? "Completed" : "Not Completed"}</p> */}
          {type === "edit" && (
            <Switch
              value={data.isCompleted}
              onChange={(bol) => setData({ ...data, isCompleted: bol })}
            />
          )}
        </div>
        <div className="flex justify-between">
          <Button
            onClick={() => navigate(-1)}
            color="danger"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={type === "create" ? handleTaskSubmit : handleTaskUpdate}
            color="default"
            variant="solid"
          >
            {type === "create" ? "Submit" : "Update"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;
