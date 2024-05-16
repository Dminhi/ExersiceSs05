import { Menu } from "antd";
import React from "react";

const MenuItems = () => {
  return (
    <Menu
      mode="horizontal"
      style={{
        height: "67",
        color: "white",
        backgroundColor: "#ed242e",
        flex: 1,
        justifyContent: "center",
        borderBottom: "none",
      }}
      className="covido-menu-item"
    >
      <Menu.Item style={{ color: "white" }} key="home">
        HOME
      </Menu.Item>
      <Menu.Item style={{ color: "white" }} key="about">
        ABOUT
      </Menu.Item>
      <Menu.Item style={{ color: "white" }} key="take-action">
        TAKE ACTION
      </Menu.Item>
      <Menu.Item className="covido" style={{ color: "white" }} key="covido">
        <div>COVIDO</div>
        <div className="img-covido">
          <img
            src="http://benhviendaihocyhaiphong.vn/images/nCoV.png"
            alt=""
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </div>
      </Menu.Item>
      <Menu.Item style={{ color: "white" }} key="news">
        NEWS
      </Menu.Item>
      <Menu.Item style={{ color: "white" }} key="doctores">
        DOCTORES
      </Menu.Item>
      <Menu.Item style={{ color: "white" }} key="contact">
        CONTACT
      </Menu.Item>
    </Menu>
  );
};

export default MenuItems;
