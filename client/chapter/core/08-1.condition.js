/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// let number = prompt('숫자를 입력하세요: ', 0)
// if (number >0) {
//   console.log(1)
// } else if (number < 0 ) {
//   console.log(-1)
// } else {
//   console.log(0)
// }

// let number = prompt('숫자를 입력하세요: ', 0)
// let message = (number > 0) ? 1 :
//               (number < 0) ? -1 : 0;
// console.log(message)




// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'no';

// 영화 볼거니?
let goingToWatchMovie = 'no';

if (didWatchMovie == 'yes') {
  console.log("영화 봤구나ㅠㅠ")
} else if (goingToWatchMovie == 'yes') {
  console.log("영화 같이 보러가자!")
} else {
  console.log("아.. 그러구나.. 어쩔 수 없지..")
}

let message = (didWatchMovie == 'yes') ? "영화 봤구나ㅠㅠ" : (goingToWatchMovie == 'yes') ? "영화 같이 보러가자!" : "아.. 그러구나.. 어쩔 수 없지..";
console.log(message)

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식