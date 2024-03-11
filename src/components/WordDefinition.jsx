function WordDefinition({ wordType, meanings, synonyms }) {
  return (
    <section className="mt-10">
      <div className="flex items-center gap-6 mb-4">
        <h2 className="text-black font-bold text-2xl">{wordType}</h2>
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>

      <div className="text-lg">
        <h3 className="mb-4">Meaning</h3>

        <ul className="space-y-2 pl-4">
          {meanings.map((meaning) => (
            <li key={meaning} className="custom-bullet">
              {meaning}
            </li>
          ))}
        </ul>

        {synonyms && (
          <p className="mt-6 text-gray-500">
            Synonyms
            <span className="text-purple-500 text-base ml-4">{synonyms}</span>
          </p>
        )}
      </div>
    </section>
  );
}

export default WordDefinition;
