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
  return findPath(list, beginNumber, endNumber);
};

let counter = 1;
const findPath = (list, beginNumber, endNumber) => {
  // the loop begins here
  let filteredList;
  const direction = beginNumber[0] - endNumber[0];
  console.log("DEBUGGER", list, "counter", counter, direction);
  if (direction >= 0) {
    const sortedList = list.sort((a, b) => {
      return b[0] - a[0];
    });
    filteredList = sortedList.filter(numbers => {
      return numbers[0] <= beginNumber[0];
    });
    //console.log("CHECK", filteredList);
    for (let i = 0; i < filteredList.length - 1; i++) {
      if (filteredList[i][0] <= filteredList[i + 1][0]) {
        counter++;
        filteredList.splice(i, 1);
      }
      filteredList[i].shift();
    }
    filteredList[filteredList.length - 1].shift();
    console.log("sorted list DOWN");
    if (!filteredList.length) {
      return counter;
    } else {
      beginNumber.shift();
      endNumber.shift();
      findPath(filteredList, beginNumber, endNumber);
    }
  } else if (direction < 0) {
    const sortedList = list.sort((a, b) => {
      return a[0] - b[0];
    });
    filteredList = sortedList.filter(numbers => {
      return numbers[0] >= beginNumber[0];
    });
    for (let i = 0; i < filteredList.length - 1; i++) {
      if (filteredList[i][0] >= filteredList[i + 1][0]) {
        counter++;
        filteredList.splice(i, 1);
      }
      filteredList[i].shift();
    }
    filteredList[filteredList.length - 1].shift();
    console.log("sorted list UP");
    if (!filteredList.length) {
      return counter;
    } else {
      beginNumber.shift();
      endNumber.shift();
      findPath(filteredList, beginNumber, endNumber);
    }
  }

  return counter;
};

module.exports = { dictionary };
