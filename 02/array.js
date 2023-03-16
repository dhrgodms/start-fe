var words = ['a', 'b', 'c']
// 회사에 들어가면 변수명 규칙이 있다. 
// 배열 변수를 쓸 때 ~s를 많이 붙인다는 회사만의 컨벤션이 있다
console.log(words.pop());

words.push("d");

console.log(words.join("-"));

var words = ["a", "b", "c"];

// shift메서드는 앞에서 빠짐(pop을 앞에서 한거랑 같음)
// unshift 메서드는 앞에 추가(push를 앞에서 한거랑 같음)
console.log(words.shift());
console.log(words.unshift("z"));
console.log(words);

// slice는 원래 words 객체는 변하지 않는다
console.log(words.slice(0, 1))

// splice는 원래 words 객체도 변함
console.log(words.splice(0, 1))

var words = ["a", "b", "c"];
var wordsMap = words.map(i => i + "ok")
console.log(wordsMap);

var nums = [1, 2, 3, 4, 5];
var newNums = [];

for (var i = 0; i < nums.length; i++){
    if (nums[i] > 2) {
        newNums.push(nums[i])
    }
}


// 요새는 이게 유행이다
var filteredNums = nums.filter(i => i >= 3).map(function (num) {
    return num + 10;
});
console.log(filteredNums);