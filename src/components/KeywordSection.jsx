function KeywordSection() {
  return (
    <section className="flex justify-between items-center mt-12">
      <div className="flex flex-col gap-4 ">
        <h1 className="font-bold text-black text-6xl">keyboard</h1>
        <span className="text-purple-600 text-xl">/ˈkiːbɔːd/</span>
      </div>

      <div className="w-16 h-16 rounded-full bg-purple-100/5">
        <img src="/assets/icon-play.svg" alt="play icon" />
      </div>
    </section>
  );
}

export default KeywordSection;
