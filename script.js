
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

    function playRound(playerSelection) {
        
        computerSelection = getComputerChoice().toLowerCase();

        if (playerSelection === "rock") {
            if (computerSelection === "rock") {
                result = "It's a tie! You both chose Rock.";
            } else if (computerSelection === "paper") {
                computerScore++;
                result = "You lose! Paper beats Rock.";
            } else {
                humanScore++;
                result = "You win! Rock beats Scissors.";
            }
        } 
        else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                humanScore++;
                result = "You win! Paper beats Rock.";
            } else if (computerSelection === "paper") {
                result = "It's a tie! You both chose Paper.";
            } else {
                computerScore++;
                result = "You lose! Scissors beats Paper.";
            }
        } 
        else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                computerScore++;
                result = "You lose! Rock beats Scissors." ;
            } else if (computerSelection === "paper") {
                humanScore++;
                result = "You win! Scissors beats Paper.";
            } else {
                result = "It's a tie! You both chose Scissors.";
            }
        }

        updateScore(result);
        checkWinner();

    }

    function updateScore(resultText) {
        document.getElementById("result").textContent = resultText;
        document.getElementById("score").textContent = "Player: " + humanScore + " - Computer: " + computerScore;
    }

    function checkWinner() {
        if (humanScore === 5) {
            document.getElementById("final-result").textContent = "🎉 You won the game! 🎉";
            disableButtons();
        } else if (computerScore === 5) {
            document.getElementById("final-result").textContent = "💀 Computer wins the game! 💀";
            disableButtons();
        }
    }

    function disableButtons() {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }
    


document.getElementById("rock").addEventListener("click", function() { playRound("rock"); });
document.getElementById("paper").addEventListener("click", function() { playRound("paper"); });
document.getElementById("scissors").addEventListener("click", function() { playRound("scissors"); });


