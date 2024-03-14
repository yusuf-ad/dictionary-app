function WordDefinition({ wordType, meanings, synonyms }) {
  return (
    <section className="mt-10">
      <div className="flex items-center gap-6 mb-6">
        <h2 className="font-bold text-2xl">{wordType}</h2>
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>

      <div className="text-lg">
        <h3 className="mb-4 text-xl">Meaning</h3>

        <ul className="space-y-2 pl-4">
          {meanings.map((meaning) => (
            <li key={meaning} className="custom-bullet">
              {meaning}
            </li>
          ))}
        </ul>

        {synonyms && (
          <p className="mt-6 text-gray-500 text-xl">
            Synonyms
            <span className="text-primary font-bold text-base ml-4">
              {synonyms}
            </span>
          </p>
        )}
      </div>
    </section>
  );
}

export default WordDefinition;
