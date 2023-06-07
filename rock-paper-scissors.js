// Function that returns computer's random choice

function getComputerChoice() {
    let computerChoices = ["Rock", "Paper", "Scissors"]
    let randomChoice = Math.floor(Math.random() * 3)
    console.log(computerChoices[randomChoice])
    return computerChoices[randomChoice]
}
