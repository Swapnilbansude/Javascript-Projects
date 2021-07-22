//selecting all required elements

const selectBox = document.querySelector('.select-box'),
selectXBtn = selectBox.querySelector('.playerX'),
selectOBtn = selectBox.querySelector('.playerO'),
playBoard = document.querySelector('.play-board'),
allBox = document.querySelectorAll('section span'),
players = document.querySelector('.players');

window.onload = () => {     //once window loaded
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick","clickedBox(this)");
    }

    selectXBtn.onclick = () => {    //onclick event on select X button
        selectBox.classList.add('hide');    //hide select box
        playBoard.classList.add('show');    //show playboard
    }
    selectOBtn.onclick = () => {    //onclick event on select O button
        selectBox.classList.add('hide');    //hide select box
        playBoard.classList.add('show');    //show playboard
        players.setAttribute("class", "players active player");
    }
}

let playerXIcon = "fas fa-times";   //fontawesome icon for cross
let playerOIcon = "far fa-circle";  //fontawesome icon for circle

// user click function
function clickedBox(element) {
    console.log(element);
    if(players.classList.contains("player")) {
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.add("active");
    } else {
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.add("active");
    }
    element.style.pointerEvents = "none";
    bot();
}

//bot click function
function bot() {
    let array = [];     //create empty list and will store unselected box index in this array
    for (let i = 0; i < allBox.length; i++) {
        if (allBox[i].childElementCount == 0) {     //if span has no child element
            array.push(i);      //insert unseleted box in array
            console.log(i + " " + "has no children");
        }
        
    }
    console.log(array);
}