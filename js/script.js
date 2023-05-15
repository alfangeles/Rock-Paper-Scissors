console.log(
    "===== Rock Paper and Scissors ====="
);

let playerScore = 0;
let computerScore = 0;


//COMPUTER SELECTION ==============================
let computerSelection = '';

function getComputerChoice() {

    let computerPlaying = Math.ceil(Math.random() * 3);
    switch (computerPlaying) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper"
            break;
        default:
            computerSelection = "scissors"
            break;
    }
}

getComputerChoice();

//PLAYER SELECTIONI ==================================

let playerSelection = '';

function playRound(player, computer) {
    switch (player) {
        case 'rock':
            switch (computer) {
                case 'rock':
                    console.log("tied game");
                    break;
                case 'scissors':
                    console.log("You win");
                    playerScore++
                    break;
                case 'paper':
                    console.log("You loose");
                    computerScore++
                    break;

            }
            break;
        case 'paper':
            switch (computer) {
                case 'paper':
                    console.log("tied game");
                    break;
                case 'rock':
                    console.log("You win");
                    playerScore++
                    break;
                case 'scissors':
                    console.log("You loose");
                    computerScore++
                    break;

            }
            break;
        case 'scissors':
            switch (computer) {
                case 'scissors':
                    console.log("tied game");
                    break;
                case 'paper':
                    console.log("You win");
                    playerScore++
                    break;
                case 'rock':
                    console.log("You loose");
                    computerScore++
                    break;

            }
            break;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let ask = prompt()
        playerSelection = ask.toLocaleLowerCase();
        console.log("Computer played: " + computerSelection);
        console.log("You played: " + playerSelection);
        playRound(playerSelection, computerSelection);
    }
    console.log("Computer score:\t\t" + computerScore + "\nPlayer Score:\t\t" + playerScore);
    if (computerScore > playerScore) {
        console.log("===== Computer wins ======");

    } else if (computerScore < playerScore) {
        console.log("===== You win =====");
    } else {
        console.log("Tied Game!");
    }

}

game();