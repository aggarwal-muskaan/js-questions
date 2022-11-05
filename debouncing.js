const targetDiv = document.getElementById("#debounce");
const button = document.getElementById("#checkDebounce");

const expensive = () => {
  const listItem = document.createElement("p");
  listItem.innerHTML = " Button Clicked!";
  targetDiv.appendChild(listItem);
};

const debounce = (f, delay) => {
  let timerId;
  return function () {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      f.apply(this, arguments);
    }, delay);
  };
};

button.addEventListener("click", debounce(expensive, 1000)); // delay is 1000 milliseconds
