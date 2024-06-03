let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let scoreOPara = document.querySelector("#scoreO");
let scoreXPara = document.querySelector("#scoreX");
let resetScr = document.querySelector("#resetScore");

let turnO = true; // playerO
let scoreO = 0;
let scoreX = 0;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const resetBoxes = () => {
    turnO = true;
    enableBoxes();
    msg.innerText = `Result`;
}

const resetScore = () => {
    scoreX = 0;
    scoreO = 0;
    scoreXPara.innerText = "Score of X";
    scoreOPara.innerText = "Score of O";


}



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();

    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                if (pos1Val === "O") {
                    scoreO++;
                } else {
                    scoreX++;
                }
                msg.innerText = `Winnerrrrrrr is ${pos1Val}`;
                msg.style.backgroundColor = "green";
                scoreOPara.innerText = `${scoreO}`;
                scoreXPara.innerText = `${scoreX}`;
                disableBoxes();
            }
        }
    }
};

reset.addEventListener("click", resetBoxes);
resetScr.addEventListener("click", resetScore);