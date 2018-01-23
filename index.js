const dictionary = (words, begin, end) => {
  counter = 1;
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
  words.splice(index, 1);

  // I convert the array and the words in numbers
  const list = words.map(word => {
    return word.split("").map(letter => {
      return letter.charCodeAt(0);
    });
  });
  const originalList = list;
  originalList.push(beginNumber);
  direction = beginNumber[0] - endNumber[0];
  console.log(
    "INITIAL VALUES",
    "list",
    list,
    "begin",
    beginNumber,
    "end",
    endNumber
  );
  return findPath(list, beginNumber, endNumber, originalList);
};

let direction = 0;
let counter = 0;

const findPath = (list, begin, end, originalList) => {
  console.log("LIST begin", list);
  if (!list.length) return counter;
  let diff = 0;
  let next = 0;
  let sortedList = [];

  for (let i = 0; i < list.length - 1; i++) {
    if (!list.length) return counter;
    console.log("working on LINE ", list[i], " and compared to", begin);
    for (let j = 0; j < list[i].length - 1; j++) {
      if (!list.length) return counter;
      if (list[i][j] !== begin[j]) {
        if (direction > 0) {
          console.log("positive direction ...");
          if (list[i][0] <= begin[0]) {
            diff++;
          } else {
            list.splice(i, 1);
            diff = -1;
            if (!list.length) return counter;
          }
        } else if (direction < 0) {
          console.log("negative direction ...");
          if (list[i][0] >= begin[0]) {
            diff++;
          } else {
            list.splice(i, 1);
            diff = -1;
            if (!list.length) return counter;
          }
        }
      }
      console.log("===== DEBUGGER ====");
    }

    if (diff === 0) {
      list.splice(i, 1);
      if (!list.length) return counter;
    }
    if (diff === 1) {
      counter++;
      console.log("counter", counter);
      diff = 0;
      begin = list[i];
      list.splice(i, 1);
      if (!list.length) return counter;

      console.log("LIST final", list);
    }

    diff = 0;
  }
  console.log("--------------- LOOP END ----------------------");
  if (list.length) {
    return findPath(list, begin, end);
  }

  //return list, begin, end;
  return counter;
};

module.exports = { dictionary };
