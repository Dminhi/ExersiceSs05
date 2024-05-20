import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <p>This is the profile page for user ID: {userId}</p>
    </div>
  );
};

export default UserPage;
