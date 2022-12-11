// Q. How do you check if two strings are a rotation of each other?

function checkRotation(str1, str2) {
  const initChar = str1.charAt(0);

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === initChar) {
      const newString =
        str2.substring(i, str2.length + 1) + str2.substring(0, i);
      if (newString === str1) return true;
    }
  }

  return false;
}

const output = checkRotation("ABCXA", "XAABC");
if (output) console.log("Yes!!");
else console.log("No.");

// APPROACH - 2
console.log(areRotEq("ABCX", "XABC"));

function areRotEq(str1, str2) {
  if (str1.length != str2.length) return false;
  return (str1 + str1).indexOf(str2) != -1;
}
