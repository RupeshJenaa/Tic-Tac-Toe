let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true; // plyer 0 and player X
let count = 0;

const winning = [
    [0,1,2] , 
    [0,3,6] ,
    [0,4,8] ,
    [1,4,7] ,
    [2,5,8] ,
    [2,4,6] ,
    [3,4,5] ,
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {   //gote gote box ku event listener add kara hauchi "click" function ra
        console.log("Button was clicked");
        if(turn0) { // player 0 turn
            box.innerHTML = "0";
            turn0 = false;
        }
        else { // player X turn
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;

        let win = checkWinner();
        if(count === 9 && !win){
            msg.innerText = "The match is DRAWN";
            msgContainer.classList.remove("hide");
            disabledBtn();
        }
    })
})

const checkWinner = () => {
    for(let patt of winning) {
        let pos1 = boxes[patt[0]].innerHTML;
        let pos2 = boxes[patt[1]].innerHTML;
        let pos3 = boxes[patt[2]].innerHTML;
        
        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3){
                console.log("WINNER" , pos1);
                showWinner(pos1);
            }
        }
    }
};

const showWinner = (pos1) => {
    msg.innerText = `Congrats the Winner is Player${pos1}`;
    msgContainer.classList.remove("hide");
    disabledBtn();
};

const disabledBtn = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enabledBtn = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const resetGame = () => {
    turn0 = true;
    count = 0;
    enabledBtn();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);