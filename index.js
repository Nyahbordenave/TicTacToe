// created to make sure the game begins with player one and "X" 
let participant= {
    player: `Player One`,
    letter: `X`
   
}; 
  // created a function called player's move to meet requirements for alternating turns between player 1 and player 2
function turnMessage () { 
    document.getElementById('ongoingPlayer').innerText = `It is ${participant.letter}'s turn`;
}

// created switchplayer function to list the player's name correctly 
function switchPlayer () {
    participant.letter = participant.letter == `X` ? `O` : `X`; 
    participant.player = participant.letter === `X` ? `Player One` : `Player Two`;
    turnMessage ();
}



function turn(cell) { //  created function TURN referenced in html file so order of who's turn it is declared and is alternated between turn X and turn O
    const index = Array.from (cell.parentNode.children).indexOf(cell);


   if (game[index] === ' ' && !reviewIfWon()) {
    cell.innerHTML = participant.letter;
    game[index] = participant.letter;

        if (reviewIfWon()) {
        playerWhoWon (); 
        } else {
            switchPlayer();
        } 
    }
}

// header that declares who's turn it is -- "X" or "O"

function players () {
    return participant.player;
}

// created new function called game to represent the 9 empty spaces on the tic tac toe board
let game= [" ", " ", " ", " ", " ", " ", " ", " ", " "]; 


function reviewIfWon () { // created function declaring the combinations of the index's that will result in a player winning 
    const winningCombinations =[
    [2,4,6], [0,4,8], 
    [0,1,2], [3,4,5], [6, 7, 8],
    [2,5,8], [0,3,6], [7,4,1]
    ];
    

 // created a for if loop that will return true if any of the combinations are input in game play 
 for (const combination of winningCombinations) {
    const [x, y, z] = combination;
    if (game[x] !== ' ' && game[x] === game[y] && game[x] === game[z]) {
        const winnerAlert = `${participant.player} (${participant.letter}) is the winner!`;
        playerWhoWon(winnerAlert);
        return;
    }
} 

// included if the game ends in a tie, or game board fils up without a winner 
if (!game.includes(' ')) {
    const alertForTie = "It's a Tie!";
    playerWhoWon(alertForTie);
    return;
        }
}
// an alert will show up if winner or a tie is declared 
    function playerWhoWon (message) { 

    const alertElement = document.createElement ('div'); 
    alertElement.classList.add ('alert', 'alert-secondary'); 
    alertElement.textContent = message; 

    document.body.appendChild (alertElement);   

winnerAlertDisappears = setTimeout (() => { 
    // message will disappear after 4 seconds 
    document.body.removeChild (alertElement);
}, 4000); 
} 

// function to restart the game 
function restartGame() {
    // Reset participant to Player One and 'X'
    participant = {
        player: 'Player One',
        letter: 'X'
    };
    // set the cells to clear themselves 
    game= [" ", " ", " ", " ", " ", " ", " ", " ", " "]; 

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.innerHTML = ` `;
    }); 

    turnMessage(); 
}




    