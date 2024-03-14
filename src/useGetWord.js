const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

export async function useGetWord(word = "keyboard") {
  const res = await fetch(`${API_URL}/${word}`);

  const [data] = await res.json();

  console.log(data);

  return data;
}
