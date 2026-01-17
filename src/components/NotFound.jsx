import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5">
      <h1>Oops 😢</h1>
      <h5>404 PAGE NOT FOUND</h5>

      <h6
        style={{ cursor: "pointer", color: "blue" }}
        onClick={() => navigate("/")}
      >
        Go To Home Page
      </h6>
    </div>
  );
};

export default NotFound;
