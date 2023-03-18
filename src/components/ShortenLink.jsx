import React, { useState } from "react";
import { toast } from "react-hot-toast";

const ShortenLink = ({ realLink, shortenLink }) => {
  const [isCopied, setIsCopied] = useState(false);
  function truncateText(text, maxLength, append = "...") {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + append;
    } else {
      return text;
    }
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shortenLink);
    setIsCopied(true);
    toast.success("Successfully Copied!");
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <div className="flex flex-wrap items-center bg-white justify-between px-4 sm:px-10 py-5 rounded-lg">
      <div>
        <p className="sm:w-full w-[90%] sm:text-xl break-words">
          {truncateText(realLink, 50)}
        </p>
      </div>
      <div className="flex flex-wrap gap-6 items-center">
        <a
          className="sm:text-xl sm:mt-0 mt-2 text-[#2ebaba] hover:underline"
          target="_blank"
          href={shortenLink}
        >
          {shortenLink}
        </a>
        <button
          disabled={isCopied}
          type="button"
          onClick={copyToClipboard}
          className="bg-[#29d1d0] disabled:bg-[#29d1d0]/60 flex-1 py-3 w-full sm:py-2 hover:bg-[#29d1d0]/60 text-white font-bold px-8 rounded whitespace-nowrap"
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ShortenLink;
