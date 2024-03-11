import SearchBar from "./SearchBar";

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

      <SearchBar />
    </header>
  );
}

export default Header;
