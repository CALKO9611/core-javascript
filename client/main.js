
import {copy, clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString, showAlert } from './lib/index.js';

import { jujeobData } from "./data/data.js";


const submit = getNode('#submit');
const resultArea = getNode('.result')


function clickSubmitHandler(e){
  e.preventDefault();
  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length-1)];
  
  if (!name){
    showAlert('.alert', "잘못된 정보입니다.", 2000)
    return;
  }
  
  if(isNumericString(name)){
    showAlert('.alert', "정확한 이름을 입력해주세요!", 2000)
    return;
  }


  clearContents(resultArea)
  insertLast(resultArea, pick)
}


function clickCopyHandler(){
  let text = resultArea.textContent;
  copy(text).then(()=>{
    showAlert('.alert-success', '클립보드 복사가 완료됐습니다.', 2000)
  })

  // 약속구문
  // 약속
  // 다음 해야 할 일
}

submit.addEventListener('click', clickSubmitHandler)
resultArea.addEventListener('click', clickCopyHandler)
