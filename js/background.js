const images = [
    "0.jpg",
    "1.jpg",    
    "2.jpg",
    "3.jpg"
]
const locate = [
    "Amalfi, Amalfi Coast",
    "Paris, arc de triomphe",
    "London, tower bridge",
    "Rome, trevi fountain",
]
const random = Math.floor(Math.random() * images.length);
const chosenImage = images[random];
const locateElement = document.body.querySelector("div #location");

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
locateElement.innerText = locate[random];
///appendChild : element를 밑에 삽입
///prepend : element를 위에 삽입