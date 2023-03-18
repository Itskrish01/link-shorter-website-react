import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const LinkContext = createContext();

const LinkProvider = ({ children }) => {
  const [shortenLinks, setShortenLinks] = useState([]);

  const addShortenLink = (shortenLink, realLink, link_id) => {
    const newItem = { link_id, realLink, shortenLink };
    const itemExists = shortenLinks.some(
      (item) => item.realLink === newItem.realLink
    );
    if (itemExists) {
      toast.error("You have already shorten this link!");
      return;
    }
    setShortenLinks([...shortenLinks, newItem]);
  };

  const value = {
    shortenLinks,
    addShortenLink,
  };

  return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>;
};

export default LinkProvider;
