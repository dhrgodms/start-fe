// msa 아키텍처

// js기본, ecma스크립트, dom이 중요하다~

// 저번 퀴즈가
const $board = document.getElementById("board");
const COLOR_WHITE = "white";
const COLOR_BLACK = "black";

function createBoard(color) {
  const div = `<div class="${color}"></div>`;
  return div;
}

function createRow(count = 4, startColor = "white") {
  let row = "";
  for (let i = 0; i < count; i++) {
    let color = startColor;
    if (i % 2 === 0) {
      color = startColor === COLOR_WHITE ? COLOR_BLACK : COLOR_WHITE;
    }
    row += createBoard(color);
  }
  return row;
}

function createChessBoard(count = 4) {
  let board = "";
  for (let i = 0; i < count; i++) {
    const startColor = i % 2 === 0 ? COLOR_WHITE : COLOR_BLACK;
    board += createBoard(4, startColor);
  }
  return board;
}

$board.innerHTML = createChessBoard();

$board.addEventListener("click", function (e) {
  let $target = e.target;
  $target.classList.add("red");
  const $prevTarget = $target;

  $prevTarget && $prevTarget.classList.remove("red");
});
