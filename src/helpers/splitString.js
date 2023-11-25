const croatianWordsString =

function splitWordString(word) {
  var charArray = [];
  var currentElement = "";

  for (var i = 0; i < word.length; i++) {
    currentElement += word[i];

    // Check if the current element is a digraph
    if (
      currentElement.slice(-2) === "lj" ||
      currentElement.slice(-2) === "nj" ||
      currentElement.slice(-2) === "dž"
    ) {
      // If it's a digraph, add it to the array and reset the current element
      charArray.push(currentElement.slice(0, -2));
      charArray.push(currentElement.slice(-2));
      currentElement = "";
    } else {
      // If it's not a digraph, add it to the array and reset the current element
      charArray.push(currentElement.slice(0, -1));
      currentElement = word[i];
    }
  }

  // Add the last element if it exists
  if (currentElement !== "") {
    charArray.push(currentElement);
  }

  // Filter array from blank spaces
  return charArray.filter((element) => element !== "");
}

function filterWordsByLength(text) {
  // Split the text into words using spaces
  var array = text.split(" ");

  // Split each word into an array of characters
  var wordsArray = array.map((word) => splitWordString(word));

  // Filter words with a length of 5 characters
  var filteredWords = wordsArray.filter((word) => word.length === 5);

  return filteredWords;
}

export const filtredArray = filterWordsByLength(croatianWordsString);