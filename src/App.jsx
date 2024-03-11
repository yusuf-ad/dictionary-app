import Header from "./components/Header";
import Main from "./components/Main";
import Container from "./components/Container";

function App() {
  return (
    <Container classes={`max-w-2xl mx-auto`}>
      <Header />

      <Main>
        <section className="flex justify-between items-center mt-12">
          <div className="flex flex-col gap-4 ">
            <h1 className="font-bold text-black text-6xl">keyboard</h1>
            <span className="text-purple-600 text-xl">/ˈkiːbɔːd/</span>
          </div>

          <div className="w-16 h-16 rounded-full bg-purple-100/5">
            <img src="/assets/icon-play.svg" alt="play icon" />
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-6 mb-4">
            <h2 className="text-black font-bold text-2xl">noun</h2>
            <div className="w-full h-[1px] bg-gray-300"></div>
          </div>

          <div className="text-lg">
            <h3 className="mb-4">Meaning</h3>

            <ul className="space-y-2 pl-4">
              <li className="custom-bullet">
                A civil force granted the legal authority for law enforcement
                and maintaining public order.
              </li>
              <li className="custom-bullet">
                A component of many instruments including the piano, organ, and
                harpsichord consisting of usually black and white keys that
                cause different tones to be produced when struck.
              </li>
            </ul>

            <p className="mt-6 text-gray-500">
              Synonyms{" "}
              <span className="text-purple-500 text-base ml-4">
                electronic keyboard
              </span>
            </p>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-6 mb-4">
            <h2 className="text-black font-bold text-2xl">verb</h2>
            <div className="w-full h-[1px] bg-gray-300"></div>
          </div>

          <div className="text-lg">
            <h3 className="mb-4">Meaning</h3>

            <ul className="space-y-2 pl-4">
              <li className="custom-bullet">
                A civil force granted the legal authority for law enforcement
                and maintaining public order.
              </li>
              <li className="custom-bullet">
                A component of many instruments including the piano, organ, and
                harpsichord consisting of usually black and white keys that
                cause different tones to be produced when struck.
              </li>
            </ul>

            <p className="mt-6 text-gray-500">
              Synonyms{" "}
              <span className="text-purple-500 text-base ml-4">
                electronic keyboard
              </span>
            </p>
          </div>
        </section>

        <footer className="border-t-2 pt-4 mt-6">
          <h4>Source</h4>

          <a
            className="flex gap-2"
            href="https://en.wiktionary.org/wiki/keyboard"
          >
            https://en.wiktionary.org/wiki/keyboard
            <img
              className="mb-1"
              src="/assets/icon-new-window.svg"
              alt="copy icon"
            />
          </a>
        </footer>
      </Main>
    </Container>
  );
}

export default App;
