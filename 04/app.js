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
// 템플릿 표현식으로 고쳐주자.
const dateString = `${String(year).padStart(2, "0")}-${String(month).padStart(
  2,
  "0"
)}-${String(day).padStart(2, "0")}`;
// 출력: 2022-12-03
console.log(dateString);

// 2. 문자열 분리

// quiz
const dateStringEle = dateString.split("-");
dateStringResult = dateStringEle.map((i) => Number(i));
console.log(dateStringResult);
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
// point3이 생길수도 있을때 대응 (function 화 해보아라~)
//버그인~
const getTotalResult = (...lists) => {
  let result = 0;
  for (const arg of lists) {
    arg.forEach((item) => (result += item));
  }
  return result;
};
console.log(getTotalResult(point1, point2));
//출력: 373 (모든 배열값들이 합)

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
console.log(Math.floor(Math.random() * max) + 1);
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
  (item) => typeof item !== "object" && typeof item !== "function"
);
console.log(filteredItems);

// 출력: [1,'a',true]

// 11. 배열값 나누기
const items1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

// quiz
// pageSize에 따라 배열값 분리해서 출력
// pageSize=2 일때는 맨끝에 --- 없어야함
let result11 = [];
const items_result = items1.map((v, i) => {
  const isNotEnd = i !== items1.length - 1;
  const isMultipleOfPageSize = (i + 1) % pageSize !== 0;
  result11.push(v);
  if (isMultipleOfPageSize) {
    if (isNotEnd) {
      result11.push(",");
    }
  } else {
    result11.push("---");
  }
});
result11.forEach((item) => process.stdout.write(item));
console.log();
// 출력: a,b,c---d,e,f---g,h,i---j

// 12
const items12 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize12 = 3;
let result12 = [];
let tempList = [];
// quiz
// pageSize에 따라 배열값 분리해서 출력
items12.forEach((v, i) => {
  const isNotEnd = i !== items12.length - 1;
  const isMultipleOfPageSize = (i + 1) % pageSize12 !== 0;
  tempList.push(v);
  if (isNotEnd) {
    if (!isMultipleOfPageSize) {
      result12.push(tempList);
      tempList = [];
    }
  } else {
    result12.push(tempList);
  }
});

console.log(result12);
// 출력: [ [a,b,c], [d,e,f], [g,h,i], [j] ]

// 13 _ 나 이 문제 이해 못한듯
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
const user15 = { nick: "nio", age: 20, location: "제주" };

// quiz
const { nick: nickk, age: age } = user15;
const user15_copy = { nick, age: 21, name: "부산" };
console.log(user15_copy);
// 출력: {nick:'nio', age:21, name:'부산'}

// 16 설마 이거 잘라서 "" 붙여줘야되나 오바야~(일단 패스)
const text16 = "{a:1, b:2}"; // '{"a":1, "b":2}' 면 가능한데 이건 어떻게 해야되는걸까
// const jsonText16 = JSON.parse(text16);
let jsonStr16 = "";
let strIdxList = [];
// quiz
for (i = 0; i < text16.length; i++) {
  if (["{", "}", ":", ","].includes(text16[i])) {
    strIdxList.push(i);
  }
}
console.log(strIdxList);
strIdxList.forEach((item) => {
  text16.slice(item);
});
// 출력: {a:1 , b:2}

// 17  프로퍼티 키에 큰따옴표가 붙은 채로 출력되어도 되는걸까요
const user17 = { nickkk: "nio", age: 20, location: "제주" };
const result17 = JSON.stringify(user17);
console.log(result17);

// quiz

// 출력: string "{ nick: 'nio', age: 20, location: '제주' }"

// 18
const items18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// quiz
console.log(items18.filter((item) => item % 2 == 0));
// 출력: 짝수만 [2,4,6,8,10]

// 19
const list = [
  {
    id: 1,
    title: "JS",
    isPublic: true,
  },
  {
    id: 2,
    title: "기본",
    isPublic: true,
  },
  {
    id: 3,
    title: "ecma",
    isPublic: true,
  },
  {
    id: 4,
    title: "dom",
    isPublic: false,
  },
];

// quiz
console.log(
  list.filter((objItem) => objItem.isPublic).map((item) => item.title)
);
// 출력: ['JS','기본','ecma']  isPublic=true 의  title만 뽑기

// 20
const dday = "2022-02-02";

// quiz
const ddayStrList = dday.split("-").map((item) => Number(item));
// console.log(ddayStrList);
let [year20, month20, day20] = ddayStrList;
let isLeafYear = false;
// 윤년인지
if (year20 % 4 === 0) {
  if (year20 % 100 !== 0) {
    if (year20 % 400 === 0) {
      isLeafYear = true;
    }
  }
}
// 달의 마지막일에 따른 switch
switch (month20) {
  case 1 || 3 || 5 || 7 || 8 || 10:
    if (day20 !== 31) {
      day20 += 1;
    } else {
      month20 += 1;
      day20 = 1;
    }
    break;

  case 4 || 6 || 9 || 11:
    if (day20 !== 30) {
      day20 += 1;
    } else {
      month20 += 1;
      day20 = 1;
    }
    break;
  case 2:
    if (isLeafYear) {
      if (day20 !== 29) {
        day20 += 1;
      } else {
        month20 += 1;
        day20 = 1;
      }
    } else {
      if (day20 !== 28) {
        day20 += 1;
      } else {
        month20 += 1;
        day20 = 1;
      }
    }
    break;
  case 12:
    if (day20 !== 31) {
      day20 += 1;
    } else {
      month20 = 1;
      day20 = 1;
      year20 += 1;
    }
    break;

  default:
    console.error("잘못된 입력");
}
console.log(
  `${String(year20).padStart(2, "0")}-${String(month20).padStart(
    2,
    "0"
  )}-${String(day20).padStart(2, "0")}`
);

// 출력: '2022-02-03'
