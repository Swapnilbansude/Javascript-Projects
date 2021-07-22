const input = document.querySelector("input");
const addBtn = document.querySelector(".btn");
let listCounter = 0;
const pendingNum = document.querySelector(".pendingNum");
const showDate = document.querySelector(".card-header");

addBtn.addEventListener('click', addList);

function addList(e) {
    const addList = document.querySelector(".todoList");
    const newLi = document.createElement("li");
    const checkBtn = document.createElement("span");
    checkBtn.className = "check";
    const deleteBtn = document.createElement("span");
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

    if(input.value !=='') {
        newLi.textContent = input.value;
        input.value = '';
        addList.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(deleteBtn);
        listCounter++;
        taskCount(listCounter);
    }

    deleteBtn.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
        listCounter--;
        taskCount(listCounter);
    });

    checkBtn.addEventListener('click', function() {
        const parent = this.parentNode;
        
        //parent.style.textDecoration = 'line-through';
        const childNode = checkBtn.firstChild;
        //console.log(childNode.className);
        if(childNode.className == 'fas fa-check') {
            parent.style.textDecoration = 'line-through';
            childNode.classList.remove('fa-check');
            childNode.classList.add('fa-times');
        } else {
            parent.style.textDecoration = 'none';
            childNode.classList.remove('fa-times');
            childNode.classList.add('fa-check');
        }

        //childNode.classList.toggle('fa-times');
        //console.log(childNode.className);
        //console.log(checkBtn.firstChild.classList.toggle('fa-times'));
    });
    console.log(listCounter);
}

function taskCount(num) {
    pendingNum.innerHTML = num;
}
//console.log(listCounter);

function showCurrentDate() {
    let currentDate = new Date();

    //Create list of weekdays and months
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //Get the current Date 
    var day = days[currentDate.getDay()];
    var dateNo = currentDate.getDate();
    var mon = months[currentDate.getMonth()];
    var year = currentDate.getFullYear();

    //display real time date
    showDate.innerHTML = 
        day + ",   " + dateNo + " " + mon + " " + year;

    var t = setTimeout(showCurrentDate, 500);
}