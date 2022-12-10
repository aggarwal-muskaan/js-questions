const longString = "find duplicates in a string";

const hashMap = new Map();

for (let i = 0; i < longString.length; i++) {
  if (hashMap.has(longString[i])) {
    const count = hashMap.get(longString[i]);
    hashMap.set(longString[i], count + 1);
  } else {
    hashMap.set(longString[i], 1);
  }
}

for (const [key, val] of hashMap) {
  if (val > 1) console.log(key, " : ", val);
}
