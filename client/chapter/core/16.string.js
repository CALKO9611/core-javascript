/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';



// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength : ', stringTotalLength)


// 특정 인덱스의 글자 추출
let extractCharacter = message[0]
console.log('extractCharacter : ', extractCharacter)

// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;
// message = 'more' + message[5];
// message[3] = 'i'  이건 안된다.


// 부분 문자열 추출
let slice = message.slice(8, -1);
// let slice = message.slice(0, 3);
// let slice = message.slice(8);
console.log('slice : ', slice)

let subString = message.substring(0,3);  // 숫자 순서를 바꿔도 잘 작동한다.
console.log('subString : ', subString)

let subStr;   // 이 친구는 사라진 기능이다.


// 문자열 포함 여부 확인
let indexOf = message.indexOf('i');
console.log('indexOf : ', indexOf)

let lastIndexOf = message.lastIndexOf('i'); // 이거 이해 잘 안갔다. 그리고 잘 안 쓰기도 한다.

let includes = message.includes('Less');  // 해당 문구가 포함되어 있다면 true, 없으면 false
console.log('includes : ', includes)

let startsWith = message.startsWith('L'); // 해당 문자로 시작하면 true, 그렇지 않으면 false
console.log('startsWith : ', startsWith)

let endsWith = message.endsWith('.');   // 해당 문자로 끝나면 true, 그렇지 않으면 false
console.log('endsWith : ', endsWith)


// 공백 잘라내기
// trimLeft, trimRight, trim 다 삭선이 표시되었다.
let trimLeft = message.trimLeft();
console.log('trimLeft : ', trimLeft)

let trimRight = message.trimRight();
console.log('trimRight : ', trimRight)

let trim = message.trim(); // replace와 정규 표현식을 사용하여 구현 가능하다
console.log('trim : ', trim)


// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : ', repeat)


// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase : ', toLowerCase)

let toUpperCase = message.toUpperCase();
console.log('toUpperCase : ', toUpperCase)


// 텍스트 이름 변환 유틸리티 함수
// 참고만 하자...
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

// let toCamelCase;
// let toPascalCase;
console.log(toCamelCase('less-is-more')) // lessIsMore
console.log(toPascalCase('less-is-more')) // LessIsMore