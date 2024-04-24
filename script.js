let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#comp-score");


const drawGame = () => {
    console.log("game was draw.")
    msg.innerText = "Game Was Draw,Play Again."
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${comChoice}`
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        comScorePara.innerText = compScore;
        console.log("You Lose")
        msg.innerText = `You Lose!${comChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}

const getCompChoice = () => {
    const options = ["rock", "paper", "scissior"];
    const randIDX = Math.floor(Math.random() * 3);
    return options[randIDX];
    //rock,paper,scissior
}
const playgame = (userChoice) => {
    //user choice
    console.log("user choice=", userChoice);
    //genrate computer choice
    const comChoice = getCompChoice();
    console.log("comp choice =", comChoice);
    if (userChoice == comChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice == "paper") {
            userWin = comChoice === "scissior" ? false : true;
        } else {
            //scissior
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);

    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});