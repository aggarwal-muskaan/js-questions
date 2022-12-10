//  Q. How can a given string be reversed using recursion?

console.log(reverseString("!detseT"));
reverse("Muskaan", 0);

// Approach - 1
function reverse(str, len) {
  if (str.length === len) return;

  reverse(str, len + 1);
  console.log(str[len]);
}

// Approach - 2
function reverseString(str) {
  if (typeof str !== "string") {
    return str;
  }

  // you must add this line. rest of the code is fine
  if (!str.length) return str; // this terminates the recursion when it reaches the end

  return reverseString(str.substring(1)) + str.charAt(0);
}
