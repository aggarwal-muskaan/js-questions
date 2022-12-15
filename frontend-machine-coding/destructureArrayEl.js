// Q. How would you destructure array elements?

const destructure = ["destructure", "array", "elements", "in", "javascript"];

let [one, two] = destructure;
console.log("first two indexes", one, two);

const [, c, , ...d] = destructure;
console.log("partially destructure and rest param: ", c, d);

[one, two] = [two, one];
console.log("swapped values", one, two);

/*




 * / Q. How would you empty an array ?
 */
let emptyThisArray = ["23", "32", "65", "56", "89"];
emptyThisArray = [];

const emptyThisArr = ["23", "32", "65", "56", "8"];
emptyThisArr.length = 0;
console.log(emptyThisArr, emptyThisArray);

/*



Q. What are the different ways to create an array ?
*/
// with Array constructor
const Animals = new Array("🐼", "🦁", "🐷", "🦊");

// from another Array
const extendedArr = Array.from(Animals);
console.log(extendedArr);

// with new length & fill values
const fillArr = new Array(5).fill("test!");
