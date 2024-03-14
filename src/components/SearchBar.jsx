import { useWordContext } from "../WordContext";

function SearchBar() {
  const { getWord } = useWordContext();

  function handleSubmit(e) {
    e.preventDefault();

    const word = e.target.search.value;

    getWord(word);
  }

  return (
    <form onSubmit={handleSubmit} className="relative mt-12">
      <input
        id="search"
        className="w-full bg-inputColor py-4 px-6 rounded-xl placeholder:text-textColor placeholder:font-bold placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 overflow-hidden shadow-sm"
        type="text"
        placeholder="Search for any word..."
      />

      <label className="absolute right-0 p-4 px-8 h-full cursor-pointer rounded-r-xl active:bg-gray-300">
        <button>
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="/assets/icon-search.svg"
            alt="search icon"
          />
        </button>
      </label>
    </form>
  );
}

export default SearchBar;
