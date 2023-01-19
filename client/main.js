import { insertLast, tiger, delayP } from  "./lib/index.js";


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


async function rendingUserList(){
  let response = await tiger.get('https://jsonplaceholder.typicode.com/users/1');
  let userData = response.data;

  console.log(userData);
}
rendingUserList()
