// Q. Print all Permutations of given String?

function permute(s, answer) {
  if (s.length === 0) {
    console.log(answer + "  ");
  }

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    let left_substr = s.slice(0, i);
    let right_substr = s.slice(i + 1);
    let rest = left_substr + right_substr;
    permute(rest, answer + ch);
  }
}

permute("abs", "");

// function permut(string) {
//   if (string.length < 2) return string; // This is our break condition

//   var permutations = []; // This array will hold our permutations
//   for (var i = 0; i < string.length; i++) {
//     var char = string[i];

//     // Cause we don't want any duplicates:
//     if (string.indexOf(char) != i)
//       // if char was used already
//       continue; // skip it this time

//     var remainingString =
//       string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

//     for (var subPermutation of permut(remainingString))
//       permutations.push(char + subPermutation);
//   }
//   return permutations;
// }

// var myString = "xyz";
// permutations = permut(myString);
// for (permutation of permutations) print(permutation); //Use the output method of your choice
