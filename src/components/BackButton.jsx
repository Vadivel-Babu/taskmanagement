import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      icon={
        <Icon icon={"material-symbols-light:arrow-left-alt"} fontSize={20} />
      }
      type="primary"
      onClick={() => navigate(-1)}
    />
  );
};

export default BackButton;
