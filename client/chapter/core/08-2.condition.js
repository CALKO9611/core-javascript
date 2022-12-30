/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

/* let age = 28;

if ((age >= 14) && (age <= 90)) {
  console.log("나이에 속합니다.");
} else {
  console.log("나이에 속하지 않습니다.")
} */




let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b; // 빈 문자열 (b)

// 논리합(또는) 연산자
let AorB = a || b;  // 10 (a)
// 부정 연산자
let reverseValue = !value;  // true

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};  // {thisIsFalsy: false} ( {} 이거는 객체이다. 객체 자체는 true이다 &&에서 모두가 true 이면 마지막 값이 반환된다.)

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true}; // 2 ([2,3]의 길이)

let userName = prompt('사용자 아이디를 입력해주세요.','');

if(userName?.toLowerCase() === 'admin'){

  let pw = prompt('비밀번호를 입력해 주세요.','');

  if(pw?.toLowerCase() === 'themaster'){
    console.log('환영합니다.');
  }else{
    console.log('취소되었습니다.');
  }
}else if(userName.replace(/\s*/g,'') === '' || userName === null){
  console.log('취소했습니다.');
}else{
  console.log('인증되지 않은 사용자 입니다.');
}
