import Header from "./components/Header";
import Main from "./components/Main";
import Container from "./components/Container";
import KeywordSection from "./components/KeywordSection";
import WordDefinition from "./components/WordDefinition";
import WordSource from "./components/WordSource";
import { useWordContext } from "./WordContext";

function App() {
  const { currentWord, isLoading } = useWordContext();

  const { meanings } = currentWord;

  return (
    <Container classes={`max-w-2xl mx-auto`}>
      <Header />

      {isLoading && (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 mt-12 border-purple-500"></div>
        </div>
      )}

      {currentWord && !isLoading && (
        <Main>
          <KeywordSection />

          {meanings.map((meaning) => (
            <WordDefinition key={meaning.partOfSpeech} meaning={meaning} />
          ))}

          <WordSource sources={currentWord.sourceUrls} />
        </Main>
      )}
    </Container>
  );
}

export default App;
