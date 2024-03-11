function WordSource() {
  return (
    <div className="border-t-2 pt-4 mt-6">
      <h4>Source</h4>

      <a className="flex gap-2" href="https://en.wiktionary.org/wiki/keyboard">
        https://en.wiktionary.org/wiki/keyboard
        <img
          className="mb-1"
          src="/assets/icon-new-window.svg"
          alt="copy icon"
        />
      </a>
    </div>
  );
}

export default WordSource;
