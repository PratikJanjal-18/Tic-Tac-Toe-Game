let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let winner = document.getElementById("winner");
let result = document.querySelector(".result");
let newGame = document.getElementById("new-btn");
let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame=()=>{
    turnO = true;
    enableBoxes();
    result.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener(("click"),()=>{
        console.log("Box was Clicked");
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.style.color = "black";
        box.disabled = true;

        checkWinner();
    }) 
});
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
        winner.class
    }
};
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML="";
    }
};
    const showWinner = (win) =>{
        winner.innerText = `Congratulations, Winner is ${win}`;
        result.classList.remove("hide");
        disableBoxes();
    }
const checkWinner = ()=>{
    for(let pattern of winPatterns){
//  Explanation
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]); // boxes wale array main 0st position peh-le jao ph-ir 1st position ph=ir 2nd position pe jao or wo koi bhi array ho sak-ta ha-in example [1,4,7];
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
// Logics
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner" ,pos2Val);
                showWinner(pos1Val);
            }
        }
    }
};
newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);