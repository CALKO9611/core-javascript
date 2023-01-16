import { typeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";


/**
 * @function isElement checkElement
 * @param {HTMLElement} node
 * @return {disabled} set disabled
 */

export function disableElement(node) {
  if(!isElement(node)){
    typeError('disableElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  node.disabled = true;
}
export function enableElement(node) {
  if(!isElement(node)){
    typeError('disableElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  node.disabled = false;
}

export function visibleElement(node){ // 보여야함
  if(!isElement(node)){
    typeError('visiableElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  node.hidden = false;
}

export function invisibleElement(node){ // 안보여야함
  if(!isElement(node)){
    typeError('visiableElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  node.hidden = true;
}