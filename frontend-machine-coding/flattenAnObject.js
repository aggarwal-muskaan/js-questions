const deeplyNestedObj = {
  name: "Muskaan",
  gender: "female",
  education: { school: "2017", graduation: "2020" },
  job: { first: { type: "startup" } },
  city: ["Delhi", "India"],
};

let newObj = {};
function flattenObj(input, parent) {
  for (let key in input) {
    const value = input[key];
    const childObj = parent + key;

    if (typeof key === "object") {
      flattenObj(value, childObj + ".");
    } else {
      newObj[key] = value;
    }
  }
}

flattenObj(deeplyNestedObj, {});
console.log(newObj);
