function playGame () {

let humanScore = 0;
let computerScore = 0; 

function getComputerChoice() {

// a random INT will be generated and the condition statement evaluate what to return

    const randomNo = Math.random();

    if (randomNo < 1/3 ){
        return "rock";
    }
    else if ( randomNo < 2/3 ) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    
    let buttonRock = document.getElementById("buttonRock");
    console.log(`Round 1:`);
    const humanSelection = buttonRock;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    //const userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
    //return userInput;
} 


function playRound(humanChoice, computerChoice) {
    
    computerChoice = getComputerChoice().toLowerCase();

        if (humanChoice === computerChoice){
            console.log( "It's a tie.");
            return; 
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") 
        ) 
        {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        }
        
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);

}
    //adding eventlistener to the buttons
    const buttonPaper = document.getElementById("buttonPaper");
    const buttonScissors = document.getElementById("buttonScissors");

    buttonRock = getHumanChoice();


    //playround function was here
    

    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log(`🏆 You win the game! Final Score: You ${humanScore} - Computer ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`😞 You lose the game! Final Score: You ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`🤝 It's a tie! Final Score: You ${humanScore} - Computer ${computerScore}`);
    }

}

playGame();


