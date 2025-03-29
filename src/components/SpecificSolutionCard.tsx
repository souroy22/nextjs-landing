import React from "react";

const SpecificSolutionCard = ({ solution }: any) => {
  return (
    <div className="bg-pink-100 rounded-2xl shadow-md p-6 flex flex-col items-start transition transform hover:scale-105">
      <span className="mb-2">
        <svg
          width="70"
          height="80"
          viewBox="0 0 70 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 5C40 3.26711 40.8973 1.65778 42.3713 0.746746C43.8454 -0.164289 45.6861 -0.247107 47.2361 0.527864L67.2361 10.5279C68.93 11.3748 70 13.1061 70 15V43.8197C70 45.5525 69.1027 47.1619 67.6287 48.0729C66.1546 48.9839 64.3139 49.0668 62.7639 48.2918L42.7639 38.2918C41.07 37.4448 40 35.7135 40 33.8197V5Z"
            fill="#E12B3E"
          />
          <path
            d="M61.0557 58.618C62.7496 59.465 63.8197 61.1963 63.8197 63.0902C63.8197 64.984 62.7496 66.7153 61.0557 67.5623L37.2361 79.4721C35.8284 80.176 34.1716 80.176 32.7639 79.4721L8.94427 67.5623C7.25035 66.7153 6.18034 64.984 6.18034 63.0902C6.18034 61.1963 7.25035 59.465 8.94427 58.618L32.7639 46.7082C34.1716 46.0044 35.8284 46.0044 37.2361 46.7082L61.0557 58.618Z"
            fill="#E12B3E"
          />
          <path
            d="M7.23607 48.2918C5.68613 49.0668 3.84543 48.9839 2.37134 48.0729C0.897262 47.1619 0 45.5525 0 43.8197V15C0 13.1061 1.07001 11.3748 2.76393 10.5279L22.7639 0.527864C24.3139 -0.247107 26.1546 -0.164289 27.6287 0.746746C29.1027 1.65778 30 3.26711 30 5V33.8197C30 35.7135 28.93 37.4448 27.2361 38.2918L7.23607 48.2918Z"
            fill="#E12B3E"
          />
        </svg>
      </span>
      <h3 className="text-lg font-bold">{solution.title}</h3>
      <p className="text-gray-600 text-sm mt-2">{solution.description}</p>
      <p className="w-full text-red-500 text-sm mt-1 flex items-center gap-2">
        <span className="flex-1">{solution.linkText}</span>
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.292893 15.7071C-0.0976311 15.3166 -0.0976312 14.6834 0.292893 14.2929L6.58579 8L0.292893 1.70711C-0.0976317 1.31658 -0.0976318 0.683417 0.292893 0.292893C0.683417 -0.0976315 1.31658 -0.0976315 1.70711 0.292893L8.70711 7.29289C9.09763 7.68342 9.09763 8.31658 8.70711 8.70711L1.70711 15.7071C1.31658 16.0976 0.683418 16.0976 0.292893 15.7071Z"
            fill="#E12B3E"
          />
        </svg>
      </p>
    </div>
  );
};

export default SpecificSolutionCard;
