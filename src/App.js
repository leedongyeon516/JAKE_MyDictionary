import React from "react";
import WordContextProvider from "./contexts/WordContext";
import Navbar from "./components/Navbar";
import WordList from "./components/WordList";
import NewForm from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Footer />
      <div className="App">
        <WordContextProvider>
          <Navbar />
          <NewForm />
          <WordList />
        </WordContextProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
