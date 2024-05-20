import { Card, List } from "antd";

import { Link } from "react-router-dom";
import React from "react";

const UsersPage = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Jane Doe",
      avatar: "https://via.placeholder.com/150",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "Alice Smith",
      avatar: "https://via.placeholder.com/150",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Users List</h1>
        <List
          itemLayout="horizontal"
          dataSource={users}
          renderItem={(user) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Link
                    to={`/users/${user.id}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <img src={user.avatar} alt="" />
                    {user.name}
                  </Link>
                }
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default UsersPage;
