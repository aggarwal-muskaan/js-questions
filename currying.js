/* currying with bind() */
const multiply = (num1, num2) => {
  console.log(num1 * num2);
};

const multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5); // 10

const multiplyByThree = multiply.bind(this, 3);
multiplyByThree(7); // 21

/* currying with closures */
const multiplyClosure = function (num1) {
  return function (num2) {
    return function (num3) {
      console.log(`${num1} * ${num2} * ${num3}: `, num1 * num2 * num3);
    };
  };
};

const multiplyByFour = multiplyClosure(4);
multiplyByFour(9)(6); // 216

multiplyClosure(4)(6)(2); // 48

const multiplyBySix = multiplyClosure(2)(3);
multiplyBySix(10);

/* currying with recursion */
const recursiveCurrying = (a) => (b) => b ? recursiveCurrying(a * b) : a;
console.log("recursiveCurrying => ", recursiveCurrying(2)(3)(5)());
