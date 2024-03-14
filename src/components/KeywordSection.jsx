import { useRef } from "react";
import { useWordContext } from "../WordContext";

function KeywordSection() {
  const {
    currentWord: { word, phonetic, phonetics },
  } = useWordContext();

  const [{ audio }] = phonetics.filter((item) => item.audio);

  const audioRef = useRef();

  function handlePlay() {
    audioRef.current.play();
  }

  return (
    <section className="flex justify-between items-center mt-12">
      <div className="flex flex-col gap-4 ">
        <h1 className="font-bold text-6xl">{word}</h1>
        <span className="text-primary font-bold text-xl">{phonetic}</span>
      </div>

      <div
        onClick={handlePlay}
        className="w-20 h-20 rounded-full bg-purple-100 hover:bg-purple-300 cursor-pointer flex "
      >
        <img src="/assets/icon-play.svg" alt="play icon" />
        <audio ref={audioRef}>
          <source src={audio} />
        </audio>
      </div>
    </section>
  );
}

export default KeywordSection;
