import React from "react";

function WordDefinition({ meaning }) {
  const { partOfSpeech, definitions, synonyms, antonyms } = meaning;

  return (
    <section className="mt-10">
      <div className="flex items-center gap-6 mb-6">
        <h2 className="font-bold text-2xl">{partOfSpeech}</h2>
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>

      <div className="text-lg">
        <h3 className="mb-4 text-xl">Meaning</h3>

        <ul className="space-y-2 pl-4">
          {definitions.map((definition, index) => (
            <React.Fragment key={index}>
              <li className="custom-bullet">{definition.definition}</li>
              <li className="text-gray-500">{definition.example}</li>
            </React.Fragment>
          ))}
        </ul>

        {synonyms.length > 0 && (
          <p className="mt-6 text-gray-500 text-xl">
            Synonyms
            <span className="text-primary font-bold text-base ml-3">
              {synonyms.map((synonym) => (synonym ? `${synonym}, ` : ""))}
            </span>
          </p>
        )}

        {antonyms.length > 0 && (
          <p className="mt-6 text-gray-500 text-xl">
            Antonyms
            <span className="text-primary font-bold text-base ml-3">
              {antonyms.map((antony) => (antony ? `${antony},  ` : ""))}
            </span>
          </p>
        )}
      </div>
    </section>
  );
}

export default WordDefinition;
