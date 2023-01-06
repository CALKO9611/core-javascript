


// 1번
/* let n = 2023;

let res = (n % 2023) ? '거짓' : '진실'
console.log(res) */



// 2번
let value = true; // (1), (2)

if (!value) {
  value = !!value
} else {
  value = !value
}

console.log(value) 

// 3번 (if)

/* let result = 0;

if (result === 0){
  result += 1;
  if (result > 0){
    result = result-result-result;
  }
  if (result > 0){
    result = 2;
  } else if(result++ === 0){
    result = result * 1;
  } else{
    result = '안녕';
  }
}
if (result < 0){
  result = '사자';
}
console.log(result); */


// 4번 (while)
// a = 1 ,7, 9 ,13 5,
// b = 10, 8, 5, 3, 17
/* let count = 0
let lsta = [1, 7, 9, 13, 5]
let lstb = [10, 8, 5, 3, 17]
while(count < 5) {
  let a = lsta[count]; //  1, 7, 9, 13,  5
  let b = lstb[count]; // 10, 8, 5,  3, 17

  if (a+b > 15) break

  console.log(a+b)
  count++
} */


