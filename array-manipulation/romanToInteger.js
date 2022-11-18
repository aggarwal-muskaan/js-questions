// Symbol	Value
// I	    1
// V	    5
// X	    10
// L	    50
// C	    100
// D	    500
// M	    1000
// CM	    900
// XC	    90

// Q. Given a roman numeral s, convert it to an integer.
// Example - Input = XL, Output = 40

/* Approach - 1 */
const romanNumeral = (string) => {
  switch (string) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
};

const romanToInteger = (input) => {
  const arrayOfRoman = input.split("");
  const totalLength = arrayOfRoman.length;
  let requiredInteger = romanNumeral(arrayOfRoman[totalLength - 1]);

  for (let i = totalLength - 2; i >= 0; i--) {
    const currVal = romanNumeral(arrayOfRoman[i]);
    if (currVal < requiredInteger) requiredInteger -= currVal;
    else requiredInteger += currVal;
  }
  return requiredInteger;
};

const input = "MCMIV";
const output = romanToInteger(input);
console.log(`Integer value of ${input} is ${output}`);

/*
****** Approach - 2 using Map() 

Input = DCCLX
Output= 760

Input= CMLXXI
Output= 971
*/

const romanInput = "DCCLX";
romanToInt(romanInput);

function romanToInt(input) {
  const numeralValues = new Map();

  numeralValues.set("I", 1);
  numeralValues.set("V", 5);
  numeralValues.set("X", 10);
  numeralValues.set("L", 50);
  numeralValues.set("C", 100);
  numeralValues.set("D", 500);
  numeralValues.set("M", 1000);

  let output = 0;

  //    replacing 4,9,40,90,400,900
  input = input
    .replace("IV", "IIII")
    .replace("IX", "VIIII")
    .replace("XL", "XXXX")
    .replace("XC", "LXXXX")
    .replace("CD", "CCCC")
    .replace("CM", "DCCCC");
  //   input = input.replace("XL", "XXXX").replace("XC", "LXXXX");
  //   input = input.replace("CD", "CCCC").replace("CM", "DCCCC");
  for (let char of input) output += numeralValues.get(char);

  console.log("Output is", output);
}
