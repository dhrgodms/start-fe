// app.js
// modal.js 구현
import { openModal, closeModal } from "./modal.js";

document.querySelector(".modal").style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: none;
  justify-content: center;
  align-items: center;
`;
document.querySelector(".body").style.cssText = `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
document.querySelector(".close").style.cssText = `
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
document.querySelector(".content").style.cssText = `
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const $btn = document.querySelector("#btn");
const $btn2 = document.querySelector("#btn2");

$btn.addEventListener("click", (e) => {
  openModal({
    text: e.target.dataset.text,
  });
});

$btn2.addEventListener("click", (e) => {
  openModal({
    text: e.target.dataset.text,
  });
});

// close btn 눌렀을 때 close
document.querySelector(".close").addEventListener("click", closeModal);

// 모달창(내용이 있는 칸 제외) 누르면 close
document.querySelector(".body").addEventListener("click", (e) => {
  if (e.target !== document.querySelector(".content")) {
    closeModal();
  }
});
