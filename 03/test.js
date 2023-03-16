// // 저번 시간에 const 써보다가 에러가 안나서
// // 오늘 그 부분 말씀해주신다고 하셨슴~

// // const a = "a";
// // console.log(a);

// // a = "1";
// // console.log(a);

// // Uncaught TypeError: Assignment to constant variable.
// //     at test.js:7:3
// // 요로코롬 에러가 난다굿~

// const todos = ["운동"];
// const todo = "공부";

// todos.push(todo);
// console.log(todos);

// // read
// todos.forEach(function (todo) {
//   console.log(todo);
// });

// const updateTodo = "공부";
// const updateIndex = todos.findIndex(function (todo) {
//   return todo === updateTodo;
// });

// const newTodos = todos.map(function (todo) {
//   if (todo === updateTodo) {
//     return "게임";
//   }
//   return todo;
// });

// console.log(newTodos);

// // 객체를 넘길 때, call by reference의 경우
// // 참조 시 원본이 바뀔 수 있으니 이왕이면 깊은 복사를 하는걸로 하자

// // if 문~
// var gender = isMan ? "남자" : "여자";

// // 문자형 숫자도 숫자로 인식하므로 false
// isNaN("1");

// // setInterval(실행할 함수, 시간)

// // 변수 scope를 배웠다

// // 함수가 특정 obj에 함수로 선언될 수 있다
// var car = {
//     func: function () { }
// }

// // 익명함수 - 만들자마자 바로 실행 -예전에는 많이 썼었음(지금은 안쓰나봅니다)
//     (function () { })

// var car2 = function () { }

// // 정규표현식
// // 자바스크립트의 주요 특징 : 함수에는 모든 데이터 타입이 다 들어올 수 있다.
// // Obj 형식으로 함수를 만들기도 한다

// // 객체를 전달인자로 사용한다
// function area1(width, height) {
//     console.log(width * height);
// }
// area1({ width: 300, height: 200 }); //이렇게 객체를 전달인자로도 사용 가능!!!!

// 1번
// var count = [10, 20, 30, 40, 50, 60, 70, 100];
// result = 0;
// count.forEach((i) => (result += i));
// console.log(result / count.length);

// 2번
// for (i = 1; i < 10; i++) {
//   for (j = 1; j < 10; j++) {
//     console.log(`${i} X ${j} = ${i * j}`);
//   }
// }

// 3번
// let multipleFunction = (n) => {
//   for (j = 1; j < 10; j++) {
//     console.log(`${n} X ${j} = ${n * j}`);
//   }
// };
// multipleFunction(3);

// 4번
// const obj = {
//   method: function () {
//     console.log("저는 method예요");
//   },
// };
// console.log(obj.method());

//5 번

// while true 무한루프

// var result = 0;
// while (true) {
//   promptNum = Number(window.prompt("정수를 입력하세요"));
//   if (promptNum !== null) {
//     result += promptNum;
//     console.log(result);
//   } else {
//     break;
//   }
// }

// 무한루프 쓰지말자..
// do while로 풀어보기

var result = 0;
do {
  promptNum = window.prompt("정수를 입력하세요");
  result += Number(promptNum);
  console.log(result);
} while (promptNum !== null);
