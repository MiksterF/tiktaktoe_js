let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbutton");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;
let turnX = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        console.log("check winner block");
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log(pos1);
                showWinner(pos1);
                // console.log("check winner if block");
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = "Congratulations, Winner is " + winner;
    msgContainer.classList.remove("hide");
    // console.log("winner block");
    disableBoxes();
    
}
//after declaring winner all boxes will be enabled
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add("hide");
    }
};

newGameBtn.addEventListener("click", enableBoxes);
resetBtn.addEventListener("click", enableBoxes);
