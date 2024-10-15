import React from "react";
const MyCard = ({ dynamicIcon, title, description }) => {
  return (
    <div className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10">
      {dynamicIcon}
      <h2 className="mt-4 text-xl font-bold text-black">{title}</h2>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default MyCard;
