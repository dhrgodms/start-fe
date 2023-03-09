// 변수선언

// 숫자형
var count = 5;

// 문자형
var count = "5";
// 같은 이름의 변수를 계속 선언해도 에러 안남


// function 자료형도 존재해버리는..막강 js
var log = function () { }

function log(str) { 
    console.log(str)
}

log("nick");

var image = {};
image.width = 100;
image.height = 100;
console.log(image);

var image = ['1.jpg', '2.jpg'];

image[0] = '3.jpg';
image[3] = '4.jpg';
console.log(image);

// null로 초기화하는 경우는 거의 없다. 주로 초기화된 값들을 많이 사용함.
var nick = '';

var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length - 1; i++){
    console.log(arr[i]);
}