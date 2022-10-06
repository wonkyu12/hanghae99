const arr = [1, '사과', '토마토', 4, 5, 100, true];

// const result = arr.filter(Number)
// // console.log(arr[1]);
// console.log(arr.slice(1,3));

function filtered () {

    let result = arr.filter(arr => arr.includes(''))
                   
    return result;
    
  }
 
// const arr = [1, '사과', '토마토', 4, 5, 100, true];
// 1. arr를 모두 순회하며 각각의 요소를 console.log 찍어보세요.
// 2. arr 중 string 인것만 console.log 찍어보세요.

// 3. arr 중 숫자 인것만 가려내여 새로운 배열로 값을 도출하세요.


// const str = "Hello_123_World_456_!!!";
// const regex = /[^0-9]/g;
// const result = str.replace(regex, "");
// const number = parseInt(result);

// console.log(result);
// console.log(typeof(result));

// console.log(number);
// console.log(typeof(number));

const arr = [1, "사과", "토마토", 4, 5, 100, true]


const newArr = arr.filter((item) => {
if(Number.isInteger(item) === true) {
return item
}
})

console.log(newArr)
const newArr2 = arr.filter((item) => {
return Number(item)
})