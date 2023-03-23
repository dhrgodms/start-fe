// // caniuse.com 에서 브라우저에서 각각 사용하는 것이 무엇인지 볼 수 있음
// const title = "jeju";
// const url = "https://daum.net/" + title;
// const url2 = "https://daum.net/";

// function multiply(a, b = 1) {
//   return a * b;
// }

// function sum(x, y = 0) {
//   return x + y;
// }

// const result = [1, 2, 3].map((item) => item + 1);
// console.log(result);

// function sum(x, y, z) {
//   return x + y + z;
// }

// const numbers = [1, 2, 3];
// const [x, y, z] = [...numbers];
// console.log(sum(...numbers));
// console.log(x, y, z);

// // rest파라미터
// function func(...param) {
//   console.log(param);
// }

// func(1, 2, 3);

// const obj = { team: 1, area: 2 };
// const team = obj.team;

// // 인수로 어떤 변수가 들어가는지 알 수 없다!(좋은거임)
// function func1(options) {
//     return options.width + options.height;
// }

// 1. 문자열 합치기
const year = 2022;
const month = 11;
const day = 3;

// quiz
const dateString = year + "-" + month + "-" + day;
// 출력: 2022-12-03
console.log(dateString);

// 2. 문자열 분리

// quiz
const dateStringEle = dateString.split("-");
console.log(dateStringEle);
// 출력: [2022,12,12];

// 3. 문자열 변경
const text = "나는 XX를 좋아해";
const item = "JS";

// quiz
console.log(text.replace("XX", item));
// 출력: 나는 JS를 좋아해

// 4. 문자열 검색
const text1 = "안녕하세요. 나는 사람입니다.";
const searchText = "사람";

// quiz
console.log(text1.includes(searchText));
// 출력: true

// 5. 모든 배열값 더하기
const point1 = [12, 34, 80, 72];
const point2 = [1, 80, 94];

// quiz
// point3이 생길수도 있을때 대응

let result = 0;
[...point1, ...point2].map((item) => (result += item));
console.log(result);
// 출력: 373 (모든 배열값들이 합)

// 6. 소수점 이하를 버리고 정수 구하기
const a = 1.2;
const b = 3.4;

// quiz
console.log(Math.floor(a) + Math.floor(b));
// 출력: 4

// 7. 랜덤수 구하기
const min = 1;
const max = 10;

// quiz
console.log(Math.floor(Math.random() * 10));
//출력: 3 (1~10 포함한 랜덤수)

// 8. 배수 확인
const target = 10;
const num = 3;

// quiz
// target이 num이 배수인지
console.log(target % num == 0);
// 출력: false

// 9. 대문자로 변경
const nick = "kakao";

// quiz
console.log(nick.toUpperCase());
// 출력: KAKAO

// 10. 원시 타입 요소만 배열로 만들기
const items = [1, "a", true, ["a"], { n: 1 }];

// quiz
const filteredItems = items.filter(
  (item) =>
    typeof item !== "object" &&
    typeof item !== "array" &&
    typeof item !== "function"
);
console.log(filteredItems);

// 출력: [1,'a',true]

// 11. 배열값 나누기
const items1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

// quiz
// pageSize에 따라 배열값 분리해서 출력
// pageSize=2 일때는 맨끝에 --- 없어야함
let result11 = "";

const items_result = items1.map((v, i) => {
  if ((i + 1) % pageSize !== 0 && i !== items1.length - 1) {
    return v + ",";
  } else {
    return v + "---";
  }
});
items_result.forEach((item) => (result11 += item));
console.log(result11);
// 출력: a,b,c---d,e,f---g,h,i---j

// 12
const items3 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize12 = 3;
let result_array12 = [];
let tempList = [];
// quiz
// pageSize에 따라 배열값 분리해서 출력
items3.forEach((v, i) => {
  tempList.push(v);
  if ((i + 1) % pageSize12 === 0) {
    result_array12.push(tempList);
    tempList = [];
  } else {
    result_array12.push(tempList);
  }
});

console.log(result_array12);
// 출력: [ [a,b,c], [d,e,f], [g,h,i], [j] ]

// 13
const items13 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize13 = 3;

const getStartIndexByPage = function (page) {
  console.log((page - 1) * pageSize13);
  // quiz
};

// 출력
getStartIndexByPage(1); // 0
getStartIndexByPage(2); // 3
getStartIndexByPage(3); // 6

// 14

const phoneNumber = `010-1234-1234`;

// quiz
// xxx-xxxx-xxxx 패턴찾기
console.log(/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/.test(phoneNumber));
// 출력: true

// 15
const user15 = { nickk: "nio", age: 20, location: "제주" };

// quiz
const { nickk: nickk, age: age } = user15;
const user15_copy = { nickk, age: 21, name: "부산" };
console.log(user15_copy);
// 출력:

// 16
const text16 = "{a:1, b:2}";
const jsonText16 = JSON.parse(text16);
// quiz
console.log(jsonText16);
// 출력: {a:1 , b:2}
