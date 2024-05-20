import { Button } from "antd";
import { Link } from "react-router-dom";
import React from "react";

const Error404 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-6">Page Not Found</p>
        <Link to="/">
          <Button type="primary" size="large">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
