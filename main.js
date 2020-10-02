
// function to randomly select option within array, which will act as computer player
        function computerPlay() {
        const arr = ['paper', 'scissors', 'rock'];
        const randomIndex = Math.floor(Math.random() * arr.length);
        return playerSelection = (arr[randomIndex]);
        }

// function to play single round of paper, scissors, rock.
        function singleRound() {
        const arr = ['paper', 'scissors', 'rock'];
        const playerSelection = prompt("Enter Selection: Paper, Scissors or Rock");
        if (playerSelection == 'rock' && computerPlay() == 'scissors') {
                return "You Win. Rock Smashes Scissors";    
          } else if (playerSelection == 'rock' && computerPlay() == 'paper') {
                  return "You Lose. Paper beats Rock";
          } else if (playerSelection == 'rock' && computerPlay() == 'rock') {
                  return "Draw"; 
          } else if (playerSelection == 'paper' && computerPlay() == 'rock') {
                  return "You Win. Paper beats Rock";
          }
        }       