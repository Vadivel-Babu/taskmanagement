import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from "recharts";

const HomePage = () => {
  const tasks = useSelector((state) => state.tasks);
  const completed = tasks.filter((task) => task.isCompleted === true);
  const notcompleted = tasks.filter((task) => task.isCompleted === false);

  const data = [
    {
      name: "Tasks",
      total: tasks.length,
      completed: completed.length,
      notCompleted: notcompleted.length,
    },
  ];
  return (
    <div className="container-lg p-3 mx-auto">
      <div className="flex gap-3 items-center justify-evenly  flex-wrap mb-10">
        <div className={`shadow-lg rounded-lg bg-[#3beb1c] text-[#fff] p-3`}>
          <h1 className="text-xl font-semibold tracking-wider">Total Task</h1>
          <h1 className="text-2xl font-bold">{tasks.length ?? 0}</h1>
        </div>
        <div className={`shadow-lg rounded-lg bg-[#e7eb1c] text-[#000] p-3`}>
          <h1 className="text-xl font-semibold tracking-wider">
            Completed Task
          </h1>
          <h1 className="text-2xl font-bold">{completed.length ?? 0}</h1>
        </div>
        <div className={`shadow-lg rounded-lg bg-[#eb1c31] text-[#fff] p-3`}>
          <h1 className="text-xl font-semibold tracking-wider">
            Not Completed Task
          </h1>
          <h1 className="text-2xl font-bold">{notcompleted.length ?? 0}</h1>
        </div>
      </div>
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="total"
            fill="yellow"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="completed"
            fill="green"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
          <Bar
            dataKey="notCompleted"
            fill="red"
            activeBar={<Rectangle fill="red" stroke="red" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HomePage;
