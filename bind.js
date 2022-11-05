const obj = { name: "Muskaan", age: 22, gender: "Female" };

function printInfo(city, state, country) {
  console.log(
    `My name is ${this.name}. I'm ${this.age} years old ${this.gender} who hails from ` +
      city +
      " " +
      state +
      " " +
      country
  );
}

const boundObj = printInfo.bind(obj, "Rohini", "Delhi");
boundObj("IN");

// my own bind func : polyfill
Function.prototype.bindPolyfill = function (thisArg, ...args) {
  const thisObj = this;
  return function (...arg2) {
    thisObj.call(thisArg, ...args, ...arg2);
  };
};

const newBind = printInfo.bindPolyfill(obj, "Lonavala", "Mumbai");
newBind("India");

console.log(obj.age.__proto__.__proto__);
