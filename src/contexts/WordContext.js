import React, { createContext, useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";

export const WordContext = createContext();

const WordContextProvider = props => {
  const localData = localStorage.getItem("vocab");
  const [todayVocab, setTodayVocab] = useState([
    { word: "a", definition: "abc", id: uuidv1() }
  ]);
  const [vocab, setVocab] = useState(JSON.parse(localData));

  useEffect(() => {
    localStorage.setItem("vocab", JSON.stringify(vocab));
  }, [vocab]);

  const addWord = (word, definition) => {
    if (word) {
      setVocab([...vocab, { word, definition, id: uuidv1() }]);
    }
  };

  const removeWord = id => {
    setVocab(vocab.filter(word => word.id !== id));
  };

  return (
    <WordContext.Provider value={{ todayVocab, vocab, addWord, removeWord }}>
      {props.children}
    </WordContext.Provider>
  );
};

export default WordContextProvider;
