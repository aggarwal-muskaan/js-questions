const arraysInArray = [[2, 3, [5.6], [7, 8]], 1, 4, [6]];

function flatten(arraysInArray) {
  const flattenedArray = arraysInArray.reduce((prev, curr) => {
    if (Array.isArray(curr)) {
      prev = prev.concat(flatten(curr));
    } else {
      prev.push(curr);
    }

    return prev;
  }, []);

  return flattenedArray;
}

console.log(flatten(arraysInArray));
