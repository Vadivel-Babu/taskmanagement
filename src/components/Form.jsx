import React, { useState } from "react";
import { Input, DatePicker, Button, Switch } from "antd";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

const Form = ({ type = "create" }) => {
  const [data, setData] = useState({
    title: "",
    content: "",
    date: "",
    isCompleted: false,
  });
  const navigate = useNavigate();
  return (
    <>
      <h1 className="my-2 text-xl font-medium text-center">Create Task</h1>
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
          <p>Due Date:</p>
          <DatePicker onChange={(e) => console.log(e)} />
        </div>
        <div className="flex gap-3">
          <p>Status:</p>
          <Switch
            value={data.isCompleted}
            onChange={(bol) => setData({ ...data, isCompleted: bol })}
          />
        </div>
        <div className="flex justify-between">
          <Button
            onClick={() => navigate(-1)}
            color="danger"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button color="default" variant="solid">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;
