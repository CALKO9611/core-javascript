/* ---------------------------------------------------------------------- */
/* For Loop                                                               */
/* ---------------------------------------------------------------------- */


/* for (let j = 0; j < 10; j++){
  console.log(j)
} */



// 2 ~ 10까지의 짝수 출력하기

/* let value = prompt("수를 입력해주세요", 0);

for (let i = 1; i <= value; i++) {
  if (i % 2 !== 0) continue
  
  console.log(i)
} */





const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

/* let i = 0;
let l = frontEndDev.length;

while(i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
} */

/* let i = 0;
let l = frontEndDev.length;

for (; i < l; i++){
  console.log(frontEndDev[i]);
} */


// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.




for (let i = 0; i < frontEndDev.length; i++) {
  let result = frontEndDev[i];

  if (result.includes('jQuery')) break;
  
  console.log(result);
}



//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.


//   - 무한 루프 (브레이크)
//   - for 문 (역순환)