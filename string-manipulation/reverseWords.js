// Q. How do you reverse words in a given sentence without using any library method?

reverseWords("The sky is pink!!");

function reverseWords(str) {
  const words = str.split(" ");

  const reversedWord = words.map((w) => w.split("").reverse().join(""));

  const output = reversedWord.join(" ");
  console.log(output);
}
