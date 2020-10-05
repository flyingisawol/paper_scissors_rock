
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
                
          if (playerSelection == computerSelection) {
              return 0
            }
        
          // now we know either the player or computer has won, its not a draw

        //did the player win?
        if (playerSelection = "rock" && computerSelection == "scissors") {return 1}
        if (playerSelection = "scissors" && computerSelection == "paper") {return 1}
        if (playerSelection = "paper" && computerSelection == "rock") {return 1}


        //did the computer win?
        if (computerSelection = "rock" && playerSelection == "scissors") {return -1}
        if (computerSelection = "scissors" && playerSelection == "paper") {return -1}
        if (computerSelection = "paper" && playerSelection == "rock") {return -1}


        
            // if (playerSelection == 'rock' && computerSelection == 'scissors') {
            //   return "You Win. Rock Smashes Scissors";    
            // } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            //   return "You Lose. Paper beats Rock";
            // } else if (playerSelection == 'rock' && computerSelection == 'rock') {
            //   return "Draw"; 
            // } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            //   return "You Win. Paper beats Rock";
            // } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            //   return "You lose. Scissors cut Paper";
            // } else if (playerSelection == 'paper' && computerSelection == 'paper') {
            //   return "Draw";
            // } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            //   return "You Win. Scissors cut Paper";
            // } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            //   return "You lose! Rock Smashes Scissors";
            // } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
            //   return "Draw";
            // }
        }       

// function to play 5x rounds, keep score and declare winner.
        function game(message) {
          let n = 1;
          let playerScore = 0;
          let computerScore = 0;
          

          while (n <= 5) {
            let gameResult = playRound();           
            if (gameResult==-1) {computerScore = computerScore + 1;};
            if (gameResult==1) {playerScore = playerScore + 1;};

            n = n + 1;
            if (n > 5)
                if (playerScore > computerScore) {console.log("You Win!", "You scored", playerScore, "Computer scored", computerScore)}
                if (playerScore < computerScore) {console.log("You Lose!", "You scored", playerScore, "Computer scored", computerScore)}
                if (playerScore == computerScore) {console.log("Draw", "You Scored", playerScore, "Computer scored", computerScore)}
          }
        }