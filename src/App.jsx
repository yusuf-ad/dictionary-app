import Header from "./components/Header";
import Main from "./components/Main";
import Container from "./components/Container";
import KeywordSection from "./components/KeywordSection";
import WordDefinition from "./components/WordDefinition";
import WordSource from "./components/WordSource";
import ErrorMessage from "./components/ErrorMessage";

import { useWordContext } from "./WordContext";
import { useEffect } from "react";

function App() {
  const { currentWord, isLoading, error, getWord } = useWordContext();
  const { meanings } = currentWord;

  const word = window.location.pathname.replace("/", "");

  useEffect(() => {
    if (word) {
      getWord(word);
    }
  }, [word]);

  return (
    <Container classes={`max-w-2xl mx-auto`}>
      <Header />

      <Main>
        {isLoading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 mt-12 border-purple-500"></div>
          </div>
        )}

        {!isLoading && error && (
          <div className="mt-12">
            <ErrorMessage message={"Something went wrong"} />
          </div>
        )}

        {currentWord && !isLoading && !error && (
          <>
            <KeywordSection />

            {meanings.map((meaning, index) => (
              <WordDefinition key={index} meaning={meaning} />
            ))}

            <WordSource sources={currentWord.sourceUrls} />
          </>
        )}
      </Main>
    </Container>
  );
}

export default App;
