function Wrapper({ count, className }) {
  const $count = document.createElement("div");
  $count.classList.add(className);
  $count.textContent = count;

  return $count;
}

export default Wrapper;
