import { useEffect, useRef, useState } from "react";

const fontList = ["Sans serif", "Inconsolata", "Lora"];

function SelectFont() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState(fontList[0]);

  const button = useRef(null);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleSelect(e) {
    const listItem = e.target.closest(".listItem");

    if (listItem) {
      setSelectedFont(listItem.textContent);
      setIsOpen(false);

      document.body.className = document.body.className.replace(
        /font-[\w-]+/g,
        ""
      );

      document.body.classList.add(
        `font-${listItem.textContent.toLowerCase().split(" ").at(0)}`
      );
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (button.current && !button.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      ref={button}
      onClick={handleToggle}
      className="relative flex gap-4 cursor-pointer font-"
    >
      <span>{selectedFont}</span>
      <img src="/assets/icon-arrow-down.svg" alt="arrow down icon" />

      <div
        className={`${
          isOpen ? "absolute" : "hidden"
        } -left-6 bg-white rounded-md mt-12 z-30 shadow-lg`}
      >
        <ul onClick={handleSelect} className="py-6 px-8 space-y-2">
          {fontList.map((font, index) => (
            <li
              key={index}
              className={`listItem hover:underline ${
                selectedFont === font ? "text-purple-700 font-bold" : ""
              }`}
            >
              {font}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SelectFont;
