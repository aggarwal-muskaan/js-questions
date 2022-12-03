/**  Q1. Longest Substring Without Repeat
 Given a string s, find the length of the longest substring without repeating characters.
*/
const longestUniqueSubstr = (str) => {
  let resultantLength = 0,
    start = 0,
    end = 0;
  for (let i = 0; i < str.length; i++) {
    let visited = new Array(256);
    for (let j = i; j < str.length; j++) {
      if (visited[str.charCodeAt(j)] === true) break;
      else {
        visited[str.charCodeAt(j)] = true;
        if (resultantLength < j - i + 1) {
          resultantLength = j - i + 1;
          start = i;
          end = j;
        }
      }
    }
  }
  //   end index is not included in sunstring()
  const longestSubstring = str.substring(start, end + 1);
  console.log(
    "longest substring has length - ",
    resultantLength,
    longestSubstring
  );
};

const longString = "geeksforgeeks";
longestUniqueSubstr(longString);

// LINEAR APPROACH -2 O(n)
const linearUniqueSubstr = (str) => {
  let resultantLength = 0,
    start = 0,
    visited = new Map();

  for (let end = 0; end < str.length; end++) {
    if (visited.has(str[end])) {
      // update start of the string
      start = Math.max(start, visited.get(str[end]) + 1);
    }
    visited.set(str[end], end);
    if (end - start + 1 > resultantLength) {
      resultantLength = end - start + 1;
    }
  }

  console.log("longest substring has length - ", resultantLength);
};

linearUniqueSubstr(longString);

/** Q2. Longest Palindromic Substring (LPS)
 * There can be multiple palindromic substrings with the max length. In case of conflict, return the substring that has the smallest starting index
 */

/** Q3. Implement clearAllTimeout()
 * clearAllTimeout function would be used to clear all active timers on the page set via setTimeout.
 */