export function openModal({ text }) {
  document.getElementsByClassName("content")[0].textContent = text;
  document.getElementsByClassName("modal")[0].style.display = "flex";
}

export function closeModal() {
  document.getElementsByClassName("modal")[0].style.display = "none";
}
