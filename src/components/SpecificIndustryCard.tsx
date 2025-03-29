import React from "react";

const SpecificIndustryCard = () => {
  return (
    <div className="bg-red-50 rounded-3xl shadow-md p-4 flex flex-col items-start w-full max-w-xs ">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 0C0.895431 0 0 0.895431 0 2V13C0 14.6569 1.34315 16 3 16C4.65685 16 6 14.6569 6 13V2C6 0.895431 5.10457 0 4 0H2ZM3 14C3.55228 14 4 13.5523 4 13C4 12.4477 3.55228 12 3 12C2.44772 12 2 12.4477 2 13C2 13.5523 2.44772 14 3 14Z"
          fill="#E12B3E"
        />
        <path
          d="M8 12.2426L12.8995 7.34308C13.6805 6.56203 13.6805 5.2957 12.8995 4.51465L11.4853 3.10044C10.7042 2.31939 9.43789 2.31939 8.65684 3.10044L8 3.75728V12.2426Z"
          fill="#E12B3E"
        />
        <path
          d="M14 16H7.07104L13.071 10H14C15.1046 10 16 10.8954 16 12V14C16 15.1046 15.1046 14 14 16Z"
          fill="#E12B3E"
        />
      </svg>

      <h3 className="text-xl font-bold mt-2">Antiques</h3>
      <p className="text-red-500 text-sm mt-1 flex items-center gap-2">
        Antiques Inventory Management
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

export default SpecificIndustryCard;
