import { Input, Select } from "antd";
import React from "react";

const FilterTask = ({ handleFilter, handleQuery }) => {
  return (
    <div className="mt-2 flex shadow-lg p-2 rounded-lg gap-2 justify-between flex-wrap w-full md:w-[650px]">
      <Input
        placeholder="search by title"
        onChange={(e) => handleQuery(e.target.value)}
        className="max-w-[300px]"
      />
      <div className="flex gap-2">
        <h1 className="font-medium">Filter By Status:</h1>
        <Select
          placeholder="Select task status"
          defaultValue="all"
          options={[
            {
              value: "all",
              label: "All Task",
            },
            {
              value: "pending",
              label: "Pending Task",
            },
            {
              value: "completed",
              label: "Completed Task",
            },
            {
              value: "overdue",
              label: "Overdue Task",
            },
          ]}
          onChange={(e) => handleFilter(e)}
        />
      </div>
    </div>
  );
};

export default FilterTask;
