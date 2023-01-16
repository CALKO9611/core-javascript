import { 
  diceAnimation, 
  disableElement, 
  enableElement, 
  getNode, 
  clearContents,
  getNodes, 
  invisibleElement, 
  visibleElement,
  insertLast,
  attr,
} from "./lib/index.js"
// [ 1 페이즈 ]
// [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸 함수 만들기
// 3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

// [ 2 페이즈 ]
// [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기

// [ 3 페이즈 ]
// [ 레코드 템플릿 뿌리기 ]
// 1. renderRecordListItem 함수 만들기
// 2. HTML 템플릿 만들기
// 3. 템플릿 뿌리기 

// [ 4 페이즈 ]
// [ 초기화 시키기 ]
// 1. clearContent 로 정보 지우기
// 2. total, count 초기화
// 3. 스크롤 밑으로 내리기
// 4. 메모이제이션 패턴

// 배열의 구조 분해 할당
const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button')

const recordListWrapper = getNode('.recordListWrapper')

/* ---------------------------------------- */
/* render                                    */
/* ---------------------------------------- */

let count = 0;
let total = 0;

function renderRecordListItem(){
  let diceValue = Number(attr('#cube', 'data-dice'));
  let template = /* html */`
  
    <tr>
      <td>${++count}</td>
      <td>${diceValue}</td>
      <td>${total += diceValue}</td>
    </tr> 
  `
  insertLast('.recordListWrapper tbody', template)
  // 스크롤 고정하기
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight
}



/* ---------------------------------------- */
/* event                                    */
/* ---------------------------------------- */

// IIFE
const handleRollingDice = (() => {
  let isRolling = false;
  let stopAnimation;

  return () => {
    if(!isRolling){
      stopAnimation = setInterval(diceAnimation, 100);
      disableElement(recordButton);
      disableElement(resetButton);
      

    }else{
      clearInterval(stopAnimation);
      enableElement(recordButton);
      enableElement(resetButton);
    }
  
    isRolling = !isRolling
  }
})()


const handleRecord = () => {
  visibleElement(recordListWrapper);

  renderRecordListItem()
}

const handleReset = () => {
  count = 0;
  total = 0;
  invisibleElement(recordListWrapper);
  clearContents('.recordListWrapper tBody')
}

rollingDiceButton.addEventListener('click', handleRollingDice)
recordButton.addEventListener('click', handleRecord)
resetButton.addEventListener('click', handleReset)