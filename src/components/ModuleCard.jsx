import React from "react";

const ModuleCard = ({ name, manager, username, bgColor, onClick }) => {
  return (
    <div
      className={`m-2 w-56 rounded-lg ${bgColor} p-4 shadow-md md:w-64 cursor-pointer`}
      onClick={onClick}
    >
      <h2 className="mb-1 text-lg font-semibold md:text-xl">{name}</h2>
      <p className="text-sm md:text-base">

      </p>
    </div>
  );
};

export default ModuleCard;
