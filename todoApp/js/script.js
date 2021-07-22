//getting all required elements

const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const pendingTaskNum = document.querySelector(".pendingTaskNum");
const deleteAllTask = document.querySelector(".footer button");
const toggleIcon = document.querySelector(".uncheck");
const toggleClass = document.querySelector(".uncheck far fa-square");
const toggleText = document.querySelector(".notDone");

inputBox.onkeyup = () => {
    let userData = inputBox.value; //getting user entered value
    if(userData.trim() != 0) {
        addBtn.classList.add("active"); //active the add button
    } else {
        addBtn.classList.remove("active");  //inactive add button
    }
}

showList();

//if user click on the add button
addBtn.onclick = () => {
    let userData = inputBox.value; //getting user entered value
    let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage
    if(getLocalStorage == null) {   //if local storage is empty or null
        listArr = [];   //create blank array to store
    } else {
        listArr = JSON.parse(getLocalStorage);  //transforming json string into js object
    }
    listArr.push(userData);    //pushing or adding user data
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object to js string
    showList(); //calling showList() function to display todo's 
    addBtn.classList.remove("active");  //inactive add button
}

//function to add tasks list inside ul
function showList() {
    let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage
    if(getLocalStorage == null) {   //if local storage is empty or null
        listArr = [];   //create blank array to store
    } else {
        listArr = JSON.parse(getLocalStorage);  //transforming json string into js object
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li class="notDone"><span class="uncheck"><i onclick="changeClass(this)" class="fas fa-check"></i></span> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
        console.log(typeof(newLiTag));
        //console.log(index);
    });
    todoList.innerHTML = newLiTag;  //adding new li tag inside ul
    inputBox.value = "";
    pendingTaskNum.textContent = listArr.length;
    if(listArr.length > 0) {    //check listArr length
        deleteAllTask.classList.add("active");  //active deleteAllTask button
    } else {
        deleteAllTask.classList.remove("active");   //deactive deleteAllTask button
    }
}

function changeClass(x) {
    x.classList.toggle("fa-times");
    console.log(x);
    //console.log(newLiTag);
    //element.style.textDecoration = "line-through";
}

//delete task function
function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage
    listArr = JSON.parse(getLocalStorage);  //transforming json string into js object
    listArr.splice(index, 1);   //remove or delete particular indexed li
    //after remove li again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object to js string
    showList(); //calling showList() function to display todo's   
}

//delete all tasks
deleteAllTask.onclick = () => {
    listArr = [];   //empty an array
    //after remove all tasks again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object to js string
    showList(); //calling showList() function to display todo's
}

