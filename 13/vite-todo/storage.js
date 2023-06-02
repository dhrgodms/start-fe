function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getStorage(key) {
  const localData = localStorage.getItem(key) || [];
  return localData.length > 0 ? JSON.parse(localData) : [];
}
export { setStorage, getStorage };
