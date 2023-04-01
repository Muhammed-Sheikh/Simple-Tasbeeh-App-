const button = document.getElementById("button");
const count = document.getElementById("count");

let counter = 0;

button.addEventListener("click", () => {
  counter++;
  count.innerHTML = counter;
});
