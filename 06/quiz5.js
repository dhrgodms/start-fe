const $box = document.getElementsByClassName("box");
let x = 0;
let y = 0;
let isMouseDown = false;
function onMouseDown(e) {
  isMouseDown = true;
}

function onMouseMove(e) {
  if (isMouseDown) {
    e.target.style.position = "absolute";
    e.target.style.zIndex = 1000;
    e.target.style.left = e.pageX - e.target.offsetWidth / 2 + "px";
    e.target.style.top = e.pageY - e.target.offsetHeight / 2 + "px";
  }
}

function onMouseUp(e) {
  isMouseDown = false;
  e.target.removeEventListener("mousemove", onMouseMove);
}
document.body.addEventListener("mousemove", onMouseMove);
document.body.addEventListener("mousedown", onMouseDown);
document.body.addEventListener("mouseup", onMouseUp);
