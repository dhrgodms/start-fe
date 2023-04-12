const $number = document.querySelector("#num");
const $btn = document.querySelector("#btn");
const $result = document.querySelector("#result");

$btn.addEventListener("click", (e) => {
  const num = $number.value;
  let str = "";
  for (i = 1; i < 10; i++) {
    str += `<h4>${num} X ${i} = ${num * i}</h4>`;
  }
  $result.innerHTML = str;
});
