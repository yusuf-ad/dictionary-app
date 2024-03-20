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

      switch (listItem.textContent.toLowerCase().split(" ").at(0)) {
        case "sans":
          document.body.classList.add("font-sans");
          break;
        case "inconsolata":
          document.body.classList.add("font-inconsolata");
          break;
        case "lora":
          document.body.classList.add("font-lora");
      }
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
      className="relative flex gap-4 cursor-pointer font-lora"
    >
      <span>{selectedFont}</span>
      <img src="/assets/icon-arrow-down.svg" alt="arrow down icon" />

      <div
        className={`${
          isOpen ? "absolute" : "hidden"
        } -left-6 bg-inputColor rounded-md mt-12 z-30 shadow-lg shadow-purple-700`}
      >
        <ul onClick={handleSelect} className="py-6 px-8 space-y-2">
          {fontList.map((font, index) => (
            <li
              key={index}
              className={`listItem hover:underline ${
                selectedFont === font ? "text-purple-600 font-bold" : ""
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
