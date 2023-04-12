const $box = document.querySelector(".box");
const $bug = document.querySelector("#bug");
const $point = document.querySelector("#point");
const $life = document.querySelector("#life");

$bug.addEventListener("click", (e) => {
  let randomNum = Math.floor(Math.random() * 390) + 1;
  $bug.style.left = randomNum + "px";
  $bug.style.top = randomNum + "px";
  $point.text = $point.text + 1;
  console.log($point.text);
});
