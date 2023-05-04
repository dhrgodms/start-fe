console.log("search.js");

const apiUrl = "https://dapi.kakao.com/v2/search/web";
const KAKAO_API_KEY = "4e94962e783672ade80b885ff7e6144b";

let page = 1;

const $searchForm = document.getElementById("searchForm");
const $searchInput = document.getElementById("searchInput");
const $items = document.getElementById("items");
const $moreItemBtn = document.getElementsByClassName(
  "button is-info is-fullwidth"
);

function fetchApi({ page, query, callback }) {
  const options = {
    headers: {
      Authorization: `KakaoAK ${KAKAO_API_KEY}`,
    },
  };

  const url = `${apiUrl}?query=${query}&size=10&page=${page}`;

  fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      callback(json);
    });
}

function submitForm(e) {
  e.preventDefault();
  console.log("submit");

  const query = $searchInput.value;

  fetchApi({
    page: 1,
    query,
    callback: renderItems,
  });
}

function moreItems(e) {
  e;
}

function renderItems(data) {
  let result = [];
  // data를 item dom으로 변환
  for (let i = 0; i < data.documents.length; i++) {
    const { title, datetime, contents } = data.documents[i];
    const el = `
  <div class="columns is-multiline">
  <div class="column is-one-third">
    <div class="card">
      <div class="card-content">
        <p class="title">${title}</p>
        <p class="subtitle">${datetime}</p>
        <div class="content">${contents}</div>
      </div>
    </div>
  </div>`;

    result.push(el);
  }
  $items.innerHTML = result.join(" ");

  // 더보기 버튼 보이기
  $moreItemBtn.style.display = "block";
}

$searchForm.addEventListener("submit", submitForm);
