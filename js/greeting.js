const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; ///반복해서 사용하는 string은 대문자 변수로 깅거한느것이 좋음

function onLoginBtnClick(event){
    event.preventDefault(); ///브라우저에서 작동하는 기본동작을 막음.
    // const username = loginInput;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    // greeting.innerText="Hello  " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function handleLinkClick(event){
//     event.preventDefault();
//     console.log(event);
// }
// link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    ///show the form 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginBtnClick);
}else{
    ///show the greetings
   paintGreetings(savedUsername);
}