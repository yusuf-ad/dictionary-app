function WordSource({ sources }) {
  return (
    <div className="border-t-2 pt-4 mt-8">
      <h4 className="mb-1">Source</h4>

      {sources.map((source) => (
        <a
          key={source}
          className="flex gap-2"
          href="https://en.wiktionary.org/wiki/keyboard"
        >
          {source}
          <img
            className="mb-1"
            src="/assets/icon-new-window.svg"
            alt="copy icon"
          />
        </a>
      ))}
    </div>
  );
}

export default WordSource;
