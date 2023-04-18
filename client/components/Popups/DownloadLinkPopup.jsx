import React from "react";

const DownloadLinkPopup = ({ setIsDownloaded }) => {
  const handlePopup = () => {
    setIsDownloaded(false);
  };

  return (
    <div class="fixed left-0 bottom-0 mb-4 p-4 bg-slate-500 text-white shadow-md flex w-50 animate-bounce">
      <div>File downloaded!</div>
      <button class="ml-2" onClick={handlePopup}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M19.707 18.293a1 1 0 0 1-1.414 0L10 10.414 2.707 17.707a1 1 0 1 1-1.414-1.414L8.586 9 1.293 1.707a1 1 0 1 1 1.414-1.414L10 7.586l7.293-7.293a1 1 0 0 1 1.414 1.414L11.414 9l7.293 7.293a1 1 0 0 1 0 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default DownloadLinkPopup;
