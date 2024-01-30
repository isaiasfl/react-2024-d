import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  function handleBack() {
    // navigate("..")
    navigate(-1);
  }
  return (
    <div className="bg-gray-800">
      <button
        onClick={handleBack}
        className="ml-5 bg-gray-800 text-white py-2 px-4 "
      >
        Volver
      </button>
    </div>
  );
};

export default BackButton;
