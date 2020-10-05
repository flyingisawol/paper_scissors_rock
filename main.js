// function to randomly select option within array, which will act as computer player
function computerPlay() {
    
    let arr = ['paper', 'scissors', 'rock'];
    let randomIndex = Math.floor(Math.random() * arr.length);
    return computerSelection = (arr[randomIndex]);
    }


// function to play single round of paper, scissors, rock.
function playRound() {

    let computerSelection = computerPlay();
    let playerSelection = prompt("Enter Selection: Paper, Scissors or Rock").toLowerCase();
    let playerScore = 0;
    let computerScore = 0;
    
    if (playerSelection == computerSelection) {
        return playerScore = 0, computerScore = 0;
    }
    // now we know either the player or computer has won and the game is not a draw

    // did the player win?
    // Q re curly braces indentation - like this??
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return 1;
    } 
    if (playerSelection == "scissors" && computerSelection == "paper") {
        return 1;
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        return 1;
    }

    // did the bot win?
    // Q re curly braces indentation - or like this ?? this one is most natural with the automatic indentation inside of VS Code.
    if (computerSelection == "rock" && playerSelection == "scissors") { 
        return 0;
        }
    if (computerSelection == "scissors" && playerSelection == "paper") {
        return 0;
        }
    if (computerSelection == "paper" && playerSelection == "rock") {
        return 0;
    }
}  

    // function to play 5x rounds, keep score and declare winner.
    function game() {
        let n = 1 ;
        let playerScore = 0;
        let computerScore = 0;          

        while (n <= 5) {
            let gameResult = playRound();           
            if (gameResult === -1) {
                computerScore = computerScore + 1;
            } 
            if (gameResult === 1) {
                playerScore = playerScore + 1;
            }

            n = n + 1;
            if (n > 5);

            if (playerScore > computerScore) {
                console.log("round number:", n, "You Win!", "You scored", playerScore, "Computer scored", computerScore);
            } 
            if (playerScore < computerScore) {
                console.log("round number:", n, "You Lose!", "You scored", playerScore, "Computer scored", computerScore);
            }
            if (playerScore == computerScore) {
                console.log("round number:", n, "Draw");
            }
          }
        }