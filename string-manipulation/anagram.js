// Q. How do you check if two strings are anagrams of each other?

/**
 * An anagram of a string is another string that contains the same characters,
 * only the order of characters can be different.
 * Input: “abcd” and “dabc”
 * Output: "Anagram"
 *
 * Input: str1 = “gram”  str2 = “arm”
 * Output: “Not Anagram”
 */

function checkAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const hashMap = new Map();

  arr1.forEach((element) => {
    if (hashMap.has(element)) {
      const count = hashMap.get(element);
      hashMap.set(element, count + 1);
    } else hashMap.set(element, 1);
  });

  arr2.forEach((el) => {
    if (hashMap.has(el)) {
      const count = hashMap.get(el);
      hashMap.set(el, count - 1);
    } else hashMap.set(el, 1);
  });

  for (const [key, value] of hashMap) {
    console.log(value);
    if (value !== 0) return false;
  }

  return true;
}

const str1 = "gram",
  str2 = "armg";

const output = checkAnagram(str1.split(""), str2.split(""));
if (output) console.log("Anagram");
else console.log("Not Anagram");
