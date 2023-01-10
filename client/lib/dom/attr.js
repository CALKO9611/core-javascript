// get 함수 만들기
function getAttr(node, prop) {

  if(typeof node === 'string') {
    node = getNode(node);
  }
  return node.getAttribute(prop);
}

// set 함수 만들기
function setAttr(node, prop, value) {
  // validation
  if(typeof node === 'string') node = getNode(node);
  if(typeof prop !== 'string') throw new TypeError('setAtrr 함수의 두 번째 인자는 문자 타입 이어야 합니다.')

  if (prop.includes("data")) {
    let rest = prop.slice(5);
    node.dataset[rest] = value;
  }  

  if(!value) throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수값입니다.')

  node.setAttribute(prop, value);
}

//위에서 만든 get, set 한 번에 활용하는 함수
function attr(node, prop, value){
  //여러줄
  // if(!value){
  //   return getAttr(node, prop);
  // } else{
  //   setAttr(node, prop, value);
  // }

  // 한 줄
  return !value ? getAttr(node,prop) : setAttr(node,prop,value);
}