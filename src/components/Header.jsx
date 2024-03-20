import SearchBar from "./SearchBar";
import SelectFont from "./SelectFont";
import ToggleDarkMode from "./ToggleDarkMode";

function Header() {
  return (
    <header>
      <div className="flex justify-between items-center">
        <a href="#">
          <img src="/assets/logo.svg" alt="book logo" />
        </a>

        <div className="flex items-center gap-8">
          <SelectFont />

          <ToggleDarkMode />
        </div>
      </div>

      <SearchBar />
    </header>
  );
}

export default Header;
