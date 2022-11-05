const arr1 = [1, 2, 3, 4, 5, 6];
rotateRight(arr1);
console.log("right rotated Array", arr1);

const arr2 = [1, 2, 3, 4, 5, 6];
rotateLeft(arr2);
console.log("left rotated Array", arr2);

const arr3 = [0, 1, 2, 3];
rotateRightByCount(arr3, 3);
console.log("3 times right rotated Array", arr3);

const arr4 = [0, 1, 2, 3];
rotateLeftByCount(arr4, 6);
// console.log("6 times left rotated Array", arr4);

/*
push => append el at end of array & returns new length
pop => remove & return el from end of array, change actual array
unshift => append elements top of array & return new length
shift => delete & return first el of array
*/

function rotateRight(arr) {
  if (arr.length) {
    const lastEl = arr.pop();
    arr.unshift(lastEl);
  }
}

function rotateLeft(arr) {
  if (arr.length) {
    const firstEl = arr.shift();
    arr.push(firstEl);
  }
}

function rotateRightByCount(arr, count) {
  let i = 1;
  while (i <= count) {
    const lastEl = arr.pop();
    arr.unshift(lastEl);
    ++i;
  }
}

function rotateLeftByCount(arr, count) {
  let i = 1;
  while (i <= count) {
    const firstEl = arr.shift();
    arr.push(firstEl);
    console.log(`${i} time left rotated array: `, arr);
    ++i;
  }
}
