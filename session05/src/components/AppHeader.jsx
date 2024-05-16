import { Layout } from "antd";
import MenuItems from "./MenuItems";
import ProfileAvatar from "./ProfileAvatar";
// AppHeader.js
import React from "react";
import SearchInput from "./SearchInput";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header
      style={{
        top: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        margin: "0",
        padding: "0",
        width: "100%",
        height: "100%",
      }}
    >
      <>
        <SearchInput className="transparent-element" />
        <MenuItems />
        <ProfileAvatar className="transparent-element" />
      </>
    </Header>
  );
};

export default AppHeader;
