import React, { useContext } from "react";
import { WordContext } from "../contexts/WordContext";

const WordDetails = ({ vocab }) => {
  const { removeWord } = useContext(WordContext);

  return (
    <li onClick={() => removeWord(vocab.id)}>
      <div className="word">{vocab.word}</div>
      <div className="definition">{vocab.definition}</div>
    </li>
  );
};

export default WordDetails;
