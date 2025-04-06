import React from "react";

const CommonCta = ({ text }) => {
  return (
    <div className="text-center py-20 relative">
      <h2 className="text-7xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-500 text-transparent bg-clip-text opacity-10">
        {text}
      </h2>
    </div>
  );
};

export default CommonCta;
