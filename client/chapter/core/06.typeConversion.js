/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// String() ->  + ''
// number -> '2022'
const YEAR = 2022
console.log(String(YEAR));

// undefined -> 'undefined'
// null -> 'null'

let days = null
console.log(String(days));


// boolean -> 'true' or 'false'
let iskind = true;
console.log(String(iskind));  // 1번 째
console.log(iskind + ''); // 2번 째

/* 데이터 → 숫자 ----------------------------------------------------------- */

// Number()
// undeinfed
console.log(Number(undefined));

// null -> 0
let money = null;
console.log(Number(money));

// boolean -> true : 1 / false : 0
let cutie = true;
console.log(Number(cutie));
console.log(cutie / 1); // * 1 혹은 / 1 를 주면 자동으로 숫자 타입으로 된다.
console.log(+cutie); // 앞에 + 를 줘도 숫자 타입으로 된다.

// string 숫자형 문자
let num = '   123';
console.log(Number(num));

// numeric string
let width = '32.2312px';
console.log(parseInt(width,10));
console.log(parseFloat(width,10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log(Boolean(null));
console.log(Boolean(' '));
console.log(Boolean(0));
console.log(Boolean('0'));
console.log(!!'0');