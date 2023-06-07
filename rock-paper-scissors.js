// Function that returns computer's random choice

function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"]
    let randomChoice = Math.floor(Math.random() * 3)
    console.log(computerChoices[randomChoice])
    return computerChoices[randomChoice]
}

function playRound(player, computer) {
    if (player === "rock") {
        if (computer === "rock") {
            return "It's a Draw!"
        } else if (computer === "paper") {
            return "You Lose! Paper beats Rock"
        } else {
            return "You Win! Rock beats Scissors"
        }
    } else if (player === "paper") {
        if (computer === "paper") {
            return "It's a Draw!"
        } else if (computer === "scissors") {
            return "You Lose! Scissors beat Paper"
        } else {
            return "You Win! Paper beats Rock"
        }
    } else if (player === "scissors") {
        if (computer === "scissors") {
            return "It's a Draw!"
        } else if (computer === "rock") {
            return "You Lose! Rock beats Scissors"
        } else {
            return "You Win! Scissors beat Paper"
        }
    } else {
        return "You must have typed something wrong"
    }
}

let computerSelection = getComputerChoice()
let playerSelection = prompt("Type in your choice: Rock, Paper or Scissors?").toLowerCase()

console.log(playRound(playerSelection, computerSelection))