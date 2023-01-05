// 이 파일에 클로저 실행 환경에 대한 이야기를 담을 것이다.



function earth(){
 
  let water = true;
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch']
  }

  let o2 = 9999

  /* function tiger(){
    console.log(water, o2);
  }
  return tiger */

  return function(){
    console.log(water, o2);
  }
}


const ufo = earth()



// 클로저 이해하기 위한 실무 예제 코드
/* function handler() {
  let isClicked = false;

  return function () {
    if (isClicked === true) {
      this.style.background = "transparent";
    } else {
      this.style.background = "red";
    }

    isClicked = !isClicked;
  };
}

document.querySelector(".first").addEventListener("click", handler()); */