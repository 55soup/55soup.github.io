const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; ///빈 array로 시작

function saveToDos(){ //ToDo를 local Storage에 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); /// array로 저장하고 싶음, 복제의 문제, 
}

function deleteToDo(event){
    ///event.target - HTML의 요소를 알려줌
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); ///중복된 값을 지우고 새로운 array를 만들어냄
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; /// li id로 todo object id를 할당.
    const span = document.createElement("span");
    span.innerText = newTodo.text; ///매개변수로 받은 newTodo값을 span에 innerText에 넣음
    const button = document.createElement("button");
    button.innerText = "👌"; 
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);  ///li가 toDoList 즉 html 파일에 있는 ul에 자손으로 들어감
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = { ///중복되는 값을 없애기
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();  ///toDos array를 localStorage에 집어넣는 것.
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//     console.log("this is the turn of", item);
// }
const savedToDos = localStorage.getItem(TODOS_KEY); /// just string

if(savedToDos !== null ){/// change array, 전에 있던 toDo 불러오기.
    const parsedToDos = JSON.parse(savedToDos); /// array 형식으로 바꿈.
    toDos = parsedToDos; /// 이전에 toDo에 새로운 toDo를 추가.
    parsedToDos.forEach(paintToDo); /// 전에 있는 toDo를 paint
    
    // parsedToDos.forEach(sayHello); ///forEach : array 의 각 item 에 대해 function을 실행시킴
    // parsedToDos.forEach((item) => console.log("this is the turn of", itme));


    // parsedToDos.forEach(element => {
    //     sayHello();
    // });
}

function sexyFilter(item){ /// true를 반환하면 새로 생성되는 array들이 전과 같은 item을 가진 채 만들어짐
    return item !== toDos
}
