const myTargetDiv = document.getElementById("#throttling");

const expensiveFunc = () => {
  const listItem = document.createElement("p");
  listItem.innerHTML = " Window Resized!";
  myTargetDiv.appendChild(listItem);
};

const throttle = (f, delay) => {
  let toThrottle = false;

  return function () {
    if (!toThrottle) {
      f.apply(this, arguments);
      toThrottle = true;

      setTimeout(() => {
        toThrottle = false;
      }, delay);
    }
  };
};

window.addEventListener("resize", throttle(expensiveFunc, 1500)); // delay is 1500 millisec
