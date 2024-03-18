import { createContext, useContext, useState } from "react";

const WordContext = createContext();

function WordContextProvider({ children }) {
  const [currentWord, setCurrentWord] = useState("");
  const [status, setStatus] = useState("idle");

  async function getWord(word) {
    setStatus("loading");

    try {
      const res = await fetch(
        "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
      );
      const [data] = await res.json();

      console.log(data);

      setStatus("success");

      setCurrentWord(data);
    } catch (err) {
      console.log(`ERROR 🔥 ` + err.message);
      console.log(err);
      setStatus("error");
    }
  }

  const isLoading = status === "loading";
  const error = status === "error";

  return (
    <WordContext.Provider value={{ currentWord, getWord, error, isLoading }}>
      {children}
    </WordContext.Provider>
  );
}

function useWordContext() {
  const context = useContext(WordContext);

  if (!context) {
    throw new Error("useWordContext must be used within a WordContextProvider");
  }

  return context;
}

export { WordContextProvider, useWordContext };
