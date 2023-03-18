import React, { useContext, useState } from "react";
import axios from "axios";
import { LinkContext } from "../LinkContext";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

const InputLink = () => {
  const { addShortenLink } = useContext(LinkContext);
  const [realLink, setRealLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    setRealLink(e.target.value);
  };

  const onSubmitLink = async (e) => {
    e.preventDefault();
    try {
      if (realLink === "") {
        setIsValid(false);
        return;
      } else {
        setIsValid(true);
        setIsLoading(true);
        const response = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${realLink}`
        );
        if (response?.data.ok === true) {
          addShortenLink(
            response?.data.result.full_short_link,
            realLink,
            uuidv4()
          );
          setRealLink("");
        } else {
          toast.error("Failed to shorten the link");
        }
      }
    } catch (error) {
      toast.error("Failed! Link is not valid.");
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <form
      id="linkInput"
      onSubmit={onSubmitLink}
      className="absolute w-[95%] mx-2.5 sm:mx-0 mt-10 sm:w-full sm:flex-row flex-col left-0 -top-20 gap-5 flex px-8 py-6 sm:px-14 sm:py-10 rounded-lg"
    >
      <div className="w-full">
        <input
          onChange={handleChange}
          value={realLink}
          className={`appearance-none block w-full placeholder:text-lg text-lg text-gray-700 border  rounded-lg py-4 px-4 leading-tight focus:outline-none focus:bg-white ${
            !isValid ? "border-red-500 placeholder:text-red-500" : ""
          }`}
          id="grid-first-name"
          type="text"
          placeholder="Shorten a link here..."
        />
        {!isValid && (
          <p className="text-red-500 text-sm absolute mt-1 italic ">
            Please add a link
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-[#29d1d0] disabled:bg-[#58cfcf] inline-flex items-center transition duration-150 ease-in-out flex-1 py-4 w-full sm:py-0 hover:bg-[#84ebeb] text-white font-bold px-10 rounded-lg whitespace-nowrap"
      >
        {isLoading ? (
          <>
            <svg
              class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Shortening link...
          </>
        ) : (
          "  Shorten It!"
        )}
      </button>
    </form>
  );
};

export default InputLink;
