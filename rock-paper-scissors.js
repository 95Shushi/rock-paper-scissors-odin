function game() {
    function getComputerChoice() {
        const computerChoices = ["rock", "paper", "scissors"];
        let randomChoice = Math.floor(Math.random() * 3);
        return computerChoices[randomChoice];
    }
    
    function playRound(player, computer) {
        if (player === "rock") {
            if (computer === "rock") {
                result = "D";
                return "It's a Draw!";
            } else if (computer === "paper") {
                result = "L";
                return "You Lose! Paper beats Rock.";
            } else {
                result = "W";
                return "You Win! Rock beats Scissors.";
            }
        } else if (player === "paper") {
            if (computer === "paper") {
                result = "D";
                return "It's a Draw!";
            } else if (computer === "scissors") {
                result = "L";
                return "You Lose! Scissors beat Paper.";
            } else {
                result = "W";
                return "You Win! Paper beats Rock.";
            }
        } else if (player === "scissors") {
            if (computer === "scissors") {
                result = "D";
                return "It's a Draw!"
            } else if (computer === "rock") {
                result = "L";
                return "You Lose! Rock beats Scissors.";
            } else {
                result = "W";
                return "You Win! Scissors beat Paper.";
            }
        } else {
            return "You must have typed something wrong.";
        }
    }

    let computerSelection = getComputerChoice();
    let playerSelection = this.textContent.toLowerCase();
    let result = "";

    console.log(`${playRound(playerSelection, computerSelection)}`);

    if (result === "W") {
        playerScore++;
    } else if (result === "L") {
        computerScore++;
    } else if (result === "D"){
        playerScore++;
        computerScore++;
    }
}

function checkTotal() {
    if (playerScore > computerScore) {
        console.log("You Won the Game!")
    } else if (playerScore < computerScore) {
        console.log("You Lost the Game! The PC Won!")
    } else {
        console.log("It's a Draw! Peace between the human and the machine")
    }
}

let computerScore = 0;
let playerScore = 0;

// for (let i = 0; i < 5; i++) { 
//     game();
//     console.log(`Player:${playerScore}, Computer:${computerScore}`);
// }

// checkTotal()

let buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", game)
});