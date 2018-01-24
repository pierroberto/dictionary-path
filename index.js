const dictionary = (words, begin, end) => {
  let direction = 0;
  let counter = 1;
  // I convert the begin and the end in numbers
  const beginNumber = begin.split("").map(letter => {
    return letter.charCodeAt(0);
  });

  const endNumber = end.split("").map(letter => {
    return letter.charCodeAt(0);
  });
  // It finds the first letter and remove from the array
  // the element from which it begun
  const index = words.indexOf(begin);
  words.splice(index, 1);

  // I convert the array and the words in numbers
  const list = words.map(word => {
    return word.split("").map(letter => {
      return letter.charCodeAt(0);
    });
  });
  list.push(beginNumber);
  direction = beginNumber[0] - endNumber[0];
  return findPath(list, beginNumber, endNumber, direction, counter);
};

const findPath = (list, begin, end, direction, counter) => {
  direction = begin[0] - end[0];
  let diff = 0;

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      if (list[i][j] !== begin[j]) {
        if (direction > 0) {
          if (list[i][0] <= begin[0]) {
            diff++;
          } else {
            list.splice(i, 1);
            diff = -1;
            i--;
          }
        } else if (direction < 0) {
          if (list[i][0] >= begin[0]) {
            diff++;
          } else {
            list.splice(i, 1);
            diff = -1;
            i--;
          }
        }
      }
    }
    if (diff === 0) list.splice(i, 1);
    if (diff === 1) {
      counter++;
      diff = 0;
      begin = list[i];
      list.splice(i, 1);
    }
    diff = 0;
  }
  if (list.length) {
    return findPath(list, begin, end, direction, counter);
  }
  return counter;
};

module.exports = { dictionary };
