import Header from "./components/Header";
import Main from "./components/Main";
import Container from "./components/Container";
import KeywordSection from "./components/KeywordSection";
import WordDefinition from "./components/WordDefinition";
import WordSource from "./components/WordSource";

const meanings = [
  `  A civil force granted the legal authority for law enforcement
      and maintaining public order.`,
  `       A component of many instruments including the piano, organ, and
  harpsichord consisting of usually black and white keys that
  cause different tones to be produced when struck.`,
];

function App() {
  return (
    <Container classes={`max-w-2xl mx-auto`}>
      <Header />

      <Main>
        <KeywordSection />

        <WordDefinition
          wordType="noun"
          meanings={meanings}
          synonyms={["electronic keyboard"]}
        />

        <WordDefinition wordType="verb" meanings={meanings} />

        <WordSource />
      </Main>
    </Container>
  );
}

export default App;
