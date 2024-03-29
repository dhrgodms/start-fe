const $box = document.querySelector(".box");
const $bug = document.querySelector("#bug");
const $point = document.querySelector("#point");
const $life = document.querySelector("#life");

let pointNumber = 0;
let lifeNumber = 10;

$box.addEventListener("click", (e) => {
  let randomNumLeft = Math.floor(Math.random() * 390) + 1;
  let randomNumTop = Math.floor(Math.random() * 390) + 1;

  $bug.style.left = randomNumLeft - 10 + "px";
  $bug.style.top = randomNumTop - 10 + "px";

  if (e.target === $bug) {
    pointNumber += 1;
    $point.textContent = pointNumber;
  } else {
    if (lifeNumber > 0) lifeNumber -= 1;
    $life.textContent = lifeNumber;
  }
});

// dom에서 조작할 수 있을 경우,
// 사용자가 조작할 수 있으므로 백엔드에서 값을 체크해야한다.
