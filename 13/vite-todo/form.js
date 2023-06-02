import { setStorage, getStorage } from "./storage";

const $form = document.querySelector(".new-task");
const $input = document.querySelector(".new-task > input");

const $todos = document.querySelector("#todos");

let $delete = document.querySelectorAll(".delete") || null;

// 로컬스토리지에 있는 todo목록 불러오기
const readLocalStorage = (list) => {
  const todoHtml = list.map((item, index) => {
    const isDone = item.isDone ? "checked" : "";
    return `
    <li class=${index}>
  <button class="delete">×</button>
  <input type="checkbox" class="toggle-checked" ${isDone} />
  <span class="text">${item.title}</span>
  </li>
  `;
  });

  const setDelete = () => {
    $delete = document.querySelectorAll(".delete") || null;
    $delete?.forEach((item) => item?.addEventListener("click", deleteTodo));
  };

  $todos.innerHTML = `<ul>${todoHtml.join("")}</ul>`;
  setDelete();
};

// 삭제
const deleteTodo = (e) => {
  e.preventDefault();
  const list = getStorage("todoList");
  const filteredList = list.filter(
    (_, index) => index !== parseInt(e.target.parentElement.classList[0], 10)
  );
  setStorage("todoList", filteredList);
  readLocalStorage(filteredList);
};

export default function init(list) {
  readLocalStorage(list);
  $delete = document.querySelectorAll(".delete");
  // 추가하기
  const newTodo = (e) => {
    e.preventDefault();
    const todo = { title: $input.value, isDone: false };
    list.push(todo);

    $input.value = "";

    setStorage("todoList", list);
    readLocalStorage(list);
  };

  $form.addEventListener("submit", newTodo);
  $delete?.forEach((item) => item?.addEventListener("click", deleteTodo));
}
