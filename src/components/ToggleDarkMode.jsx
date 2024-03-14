import { useEffect, useState } from "react";

function ToggleDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleToggle() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.dataset.theme = "dark";
      document.documentElement.classList.add = "dark";
    } else {
      document.documentElement.dataset.theme = "light";
      document.documentElement.classList.remove = "dark";
    }
  });

  return (
    <div className="flex items-center gap-4 border-l-2 border-gray-300 pl-8 h-12">
      <input
        checked={isDarkMode}
        onChange={handleToggle}
        type="checkbox"
        className="hidden peer"
        id="toggle"
      />
      <label
        htmlFor="toggle"
        className="relative bg-gray-500 h-6 w-12 rounded-full transition-colors duration-300 ease-in-out cursor-pointer peer-checked:bg-primary peer-hover"
      >
        <div
          className={`h-5 w-5 absolute bg-white rounded-full top-1/2 -translate-y-1/2 transition-all duration-300 ${
            isDarkMode ? "translate-x-[26px]" : "translate-x-[2px]"
          }`}
        ></div>
      </label>

      <img
        className="cursor-pointer"
        onClick={handleToggle}
        src="/assets/icon-moon.svg"
        alt="moon icon"
      />
    </div>
  );
}

export default ToggleDarkMode;