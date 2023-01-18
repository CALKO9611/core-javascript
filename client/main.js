import { insertLast, xhrData, xhrPromise, tiger, delayP } from  "./lib/index.js";


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

async function render(){
  await delayP(2000)
  let response = await tiger.get('https://jsonplaceholder.typicode.com/users/1')
  console.log(response.data);

}
render()
