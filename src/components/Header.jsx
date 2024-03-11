function Header() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <a href="#">
          <img src="/assets/logo.svg" alt="book logo" />
        </a>

        <div className="flex items-center gap-8">
          <div className="flex gap-4">
            <span>Sans serif</span>
            <img src="/assets/icon-arrow-down.svg" alt="arrow down icon" />
          </div>

          <div className="flex items-center gap-4 border-l-2 border-gray-300 pl-8 h-12">
            <div className="relative bg-gray-500 h-6 w-12 rounded-full">
              <div className="h-5 w-5 absolute bg-white rounded-full top-1/2 left-3 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <img src="/assets/icon-moon.svg" alt="moon icon" />
          </div>
        </div>
      </div>

      <div className="relative mt-12">
        <input
          id="search"
          className="w-full bg-gray-100 py-4 px-6 rounded-xl placeholder:text-black placeholder:font-bold placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 overflow-hidden shadow-sm"
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
      </div>
    </header>
  );
}

export default Header;
