/// 시:분:초 단위x   시:분   ":"이 초 단위로 깜빡거리도록.
const clock = document.querySelector("h2#clock");

/// 초단위로 계속 반복.
// function sayHello(){
//     console.log("hello");
// }
// setInterval(sayHello, 5000);

/// 한번 반복
// setTimeout(sayHello, 5000);

function getClock(){ ///"1".padEnd(2,"0") => 20
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); ///"1".padStart(2,"0") => 01 
    const minutes = String(date.getMinutes()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);