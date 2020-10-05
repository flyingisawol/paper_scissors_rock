
// function to randomly select option within array, which will act as computer player
        function computerPlay() {
          const arr = ['paper', 'scissors', 'rock'];
          const randomIndex = Math.floor(Math.random() * arr.length);
          return computerSelection = (arr[randomIndex]);
        }

// function to play single round of paper, scissors, rock.
        function playRound() {
          const computerSelection = computerPlay();
          const playerSelection = prompt("Enter Selection: Paper, Scissors or Rock").toLowerCase();
        
            if (playerSelection == 'rock' && computerSelection == 'scissors') {
              return "You Win. Rock Smashes Scissors";    
            } else if (playerSelection == 'rock' && computerSelection == 'paper') {
              return "You Lose. Paper beats Rock";
            } else if (playerSelection == 'rock' && computerSelection == 'rock') {
              return "Draw"; 
            } else if (playerSelection == 'paper' && computerSelection == 'rock') {
              return "You Win. Paper beats Rock";
            } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
              return "You lose. Scissors cut Paper";
            } else if (playerSelection == 'paper' && computerSelection == 'paper') {
              return "Draw";
            } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
              return "You Win. Scissors cut Paper";
            } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
              return "You lose! Rock Smashes Scissors";
            } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
              return "Draw";
            }
        }       

// function to play 5x rounds, keep score and declare winner.
        function game(message) {
          let n = 1;
          const playerSelection = "rock";
          const computerSelection = computerPlay();

          while (n <= 5) {
            if (playerSelection > computerSelection);
            console.log(playRound(playerSelection, computerSelection), n);
            n = n + 1;
          }
        }