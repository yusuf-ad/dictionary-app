import SearchBar from "./SearchBar";
import ToggleDarkMode from "./ToggleDarkMode";

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

          <ToggleDarkMode />
        </div>
      </div>

      <SearchBar />
    </header>
  );
}

export default Header;
