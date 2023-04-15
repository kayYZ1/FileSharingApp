import React from "react";
import { useRouter } from "next/router";

const PreviousPageButton = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.back();
  };
  return (
    <button
      onClick={handleButtonClick}
      className="absolute top-2 left-2 bg-white border border-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-left"
        viewBox="0 0 16 16"
      >
        {" "}
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        />{" "}
      </svg>
    </button>
  );
};

export default PreviousPageButton;
