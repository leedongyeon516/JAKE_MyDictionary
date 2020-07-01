import React, { useContext } from "react";
import { WordContext } from "../contexts/WordContext";
import WordDetails from "../components/WordDetails";

const WordList = () => {
  const { vocab } = useContext(WordContext);

  return vocab.length ? (
    <div className="word-list">
      <ul>
        {vocab.map(word => {
          return <WordDetails vocab={word} key={word.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">Hooray, no words to study.</div>
  );
};

export default WordList;
