const dictionary = (words, begin, end) => {
  // I convert the begin and the end in numbers
  const beginNumber = begin.split("").map(letter => {
    return letter.charCodeAt(0);
  });

  const endNumber = end.split("").map(letter => {
    return letter.charCodeAt(0);
  });
  // It finds the first letter and remove from the array
  // the element from which it begun
  const firstLetter = begin.charCodeAt(0);
  const index = words.indexOf(begin);
  words.shift(index);

  // I convert the array and the words in numbers
  const list = words.map(word => {
    return word.split("").map(letter => {
      return letter.charCodeAt(0);
    });
  });

  // the loop begins here
  let counter = 0;
  const direction = beginNumber[0] - endNumber[0];
  if (direction > 0) {
    const sortedList = list.sort((a, b) => {
      return b[0] - a[0];
    });
    const filteredList = sortedList.filter(numbers => {
      return numbers[0] <= beginNumber[0];
    });
    for (let i = 0; i < filteredList.length - 1; i++) {
      if (filteredList[i][0] <= filteredList[i + 1][0]) {
        counter++;
      }
      filteredList[i].shift();
    }
    filteredList[filteredList.length - 1].shift();
    console.log("sorted list DOWN", filteredList, counter);
  } else if (direction <= 0) {
    const sortedList = list.sort((a, b) => {
      return a[0] - b[0];
    });
    const filteredList = sortedList.filter(numbers => {
      return numbers[0] >= beginNumber[0];
    });
    for (let i = 0; i < filteredList.length - 1; i++) {
      if (filteredList[i][0] >= filteredList[i + 1][0]) {
        counter++;
      }
      filteredList[i].shift();
    }
    filteredList[filteredList.length - 1].shift();
    console.log("sorted list UP", filteredList, counter);
  }
  return;
};

module.exports = { dictionary };
