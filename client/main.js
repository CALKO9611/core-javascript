/* global gsap */

import { renderSpinner, changeColor, renderUserCard, getNode, insertLast, tiger, delayP, } from  "./lib/index.js";


// call back

/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (res) =>{
    insertLast('body', JSON.stringify(res));
  },
  (err) => {
    insertLast('body',err);
  }
)

 */
/* -------------------------------------------- */
/* 
// promice
xhrPromise
.get('https://jsonplaceholder.typicode.com/users/1') // promise
.then((res)=>{
  insertLast(document.body, JSON.stringify(res));
})
.catch((err)=>{
  console.log(err);
})
 */
/* -------------------------------------------- */
/* 
async function render(){
  await delayP(2000)
  let response = await tiger.get('https://jsonplaceholder.typicode.com/users/1')
  console.log(response.data);

}
render()
*/
/* -------------------------------------------- */

// rendingUserList 함수 만들기
// ajax (tiger) get user List

// 유저 카드 생성
// 생성된 카드로 랜더링

// userList.js로 갑니다.
// renderUserCard 함수를 만들기
// 만들어진 함수 안에  createUserCard를 던지고,
// renderUserCard함수를 사용했을 때 렌더링이 잘 될 수 있도록.

const userCardContainer = getNode('.user-card-inner')

async function rendingUserList(){

  renderSpinner(userCardContainer)

  try {
    await delayP(2000)
    getNode('.loadingSpinner').remove() // loadingSpinner 효과 지우기

    let response = await tiger.get('https://jsonplaceholder.typicode.com/users');

    let userData = response.data;

    // forEach 사용 (화살표 함수로 축약함)
    userData.forEach((data) => {
      renderUserCard(userCardContainer, data)
    })

    changeColor('.user-card')
    
    gsap.to(gsap.utils.toArray('.user-card'),{
      x:0, 
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    })

  }catch(err){
    console.log(err)
  }
}

rendingUserList()
