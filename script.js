const userInput = prompt("Please enter your choice: rock, paper, or scissors");

function getComputerChoice() {

// a random INT will be generated and the condition statement evaluate what to return

    const randomNo = Math.random();

    if (randomNo < 1/3 ){
        return "rock";
    }
    else if ( randomNo < 2/3 ) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {

}

console.log(userInput)
