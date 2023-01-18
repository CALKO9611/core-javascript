import { getNode } from '../dom/getNode.js'
import { isNumber, isObject } from './typeOf.js';
import { addClass } from '../dom/css.js';

const first = getNode('.first');
/* 
function delay(callback, timeout = 1000){
  setTimeout(callback, timeout);
}
 */
/* 
delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    first.style.top = '0px';
    delay(()=>{
      first.style.transform = 'rotate(360deg)';
    })
  })
})
 */
/* 
delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP()
})
.then(()=>{
  first.style.transform = 'rotate(360deg)';
  return delayP()
})
.then(()=>{
  first.style.top = '0px';
})
 */

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}

export function delayP(options = {}){

  let config = {...defaultOptions};

  if(isNumber(options)){
    config.timeout = options;
  }

  // 객체 합성 mixin (앞에 있는 값에 뒤에 있는 값을 덮어 씌운다.)
  if(isObject(options)){
    config = {...config, ...options};
  }


  const {shouldReject, data, errorMessage, timeout} = config


  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  })
}



// delayP(3000)
// .then((res)=>{
//   console.log(res)
// })

// delayP()
// .then(res=>console.log(res))
// .catch(err=>console.log(err))



/* -------------------------------------------- */



// async await

// async : 일반 함수를 promise를 반환하는 함수로 만든다.
// await : 1. promise가 반환하는 result를 가져오기.
//         2. 코드 실행 흐름 제어

async function delayA(){
  return '완료'
}

let result = await delayA();


async function 라면끓이기(){
  try{
    await delayP()
    first.style.top = '-100px'
    await delayP()
    first.style.transform = 'rotate(360deg)'
    await delayP()
    first.style.top = '0px'
    await delayP()
    console.log('계란넣기');

    // throw new Error('계란 껍질이 들어가버렸다!');
    await delayP()
    console.log('그릇에담기');

  }catch(err){
    console.log(err);
  }
}

// 라면끓이기()