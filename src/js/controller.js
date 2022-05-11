import { wordList } from "./words.js";

const inputArray = ["t", "a-z", "dbracky", "dbracky", "dbracky"];
const searchArray = `[${inputArray.join("][")}]`;
const searchParams = new RegExp(`^(${searchArray})$`);

function findWords(params) {
  const results = wordList.filter((word) => params.test(word));
  // console.log(results);
}

findWords(searchParams);
