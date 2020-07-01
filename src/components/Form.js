import React, { useContext, useState } from "react";
import { WordContext } from "../contexts/WordContext";

const NewForm = () => {
  const { addWord } = useContext(WordContext);
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addWord(word, definition);
    setWord("");
    setDefinition("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input">
        <input
          type="text"
          placeholder="Word"
          value={word}
          onChange={e => setWord(e.target.value)}
        />
        <input
          type="text"
          placeholder="Definition"
          value={definition}
          onChange={e => setDefinition(e.target.value)}
        />
      </div>
      <input type="submit" value="Add This Vocab" />
    </form>
  );
};

export default NewForm;
