const computerChoise = ["Rock", "Paper", "Scissors"];

let UserScore = 0;
let computerScore = 0;

function PlayRound() {

    const UserInput = prompt("Enter Yourn choise(Rock, Paper, Scissors)");
    const randomIndex = Math.floor(Math.random() * 3);
    const computerInput = computerChoise[randomIndex];

    if (UserInput === computerInput) {
        alert(`Tie! your input is ${UserInput} and computer input is ${computerInput}`);
    }
    else if (
        (UserInput === "Rock" && computerInput === "Scissors") ||
        (UserInput === "Paper" && computerInput === "Rock") ||
        (UserInput === "Scissors" && computerInput === "Paper")
    ) {
        UserScore++;
    } else if (
        (computerInput === "Rock" && UserInput === "Scissors") ||   
        (computerInput === "Paper" && UserInput === "Rock") ||
        (computerInput === "Scissors" && UserInput === "Paper")
    ) {
        computerScore++;
    }
}
for (let i = 1; i <= 5; i++) {
    PlayRound();
    if(i === 5){
        if(UserScore > computerScore){
          alert("Congratulations, you won! Your Score is "+ UserScore);
        }else{
          alert("You lost! Your score is "+ UserScore);
        }
      }
}

