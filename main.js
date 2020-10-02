
// function to randomly select option within array, which will act as computer player
        function computerPlay() {
        const arr = ['paper', 'scissors', 'rock'];
        const randomIndex = Math.floor(Math.random() * arr.length);
        return (arr[randomIndex]);
        }

// function to play single round of paper, scissors, rock.
        function singleRound() {
        const playerSelection = prompt("Enter Selection: Paper, Scissors or Rock");
        const arr = ['paper', 'scissors', 'rock']; 
        if (playerSelection == rock && computerPlay == scissors) {
          result = "You Win. Rock Smashes Scissors";
          } else if (playerSelection == rock && computerPlay == paper) {
            result = "You Lose. Paper beats Rock";
          } else if (playerSelection == rock && computerPlay == rock) {
                  result = "Draw"; 
          }        
        }