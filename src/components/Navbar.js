import React, { useContext } from "react";
import { WordContext } from "../contexts/WordContext";

const Navbar = () => {
  const { vocab } = useContext(WordContext);

  return (
    <div className="navbar">
      <h1>FlashCard</h1>
      <p>
        You have{" "}
        <span className="accent-txt">
          {vocab.length} word{vocab.length > 1 ? "s" : ""}
        </span>{" "}
        to memorize. Keep it up!
      </p>
    </div>
  );
};

export default Navbar;
