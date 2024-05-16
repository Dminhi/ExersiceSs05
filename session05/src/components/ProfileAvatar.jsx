import { Avatar } from "antd";
// ProfileAvatar.js
import React from "react";
import { UserOutlined } from "@ant-design/icons";

const ProfileAvatar = () => {
  return (
    <UserOutlined
      style={{
        color: "#fff",
        height: "70px",
        width: "70px",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
};

export default ProfileAvatar;
