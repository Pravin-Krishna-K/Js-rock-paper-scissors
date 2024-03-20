let playgame = confirm("Shall we play rock, paper, or scissors?");

if(playgame){ // Give ok means execute this coditions
    const playerchoice = prompt("Please enter rock, paper, or scissors.");
    
    if(playerchoice){ // Enter something in the prompt means excute this condition.
        const player = playerchoice.trim().toLowerCase(); // converting player input to lowercase
        if(
            player === "rock"||     
            player === "paper"||
            player === "scissors"

        ){
            const computerchoice  = Math.floor(Math.random()*3+1); // random number from 1 to 3.

            const computer = 
            computerchoice ===1 ? "rock" : 
            computerchoice ===2 ?  "paper":
            computer = "scissors";
          
            let result =

            player === computer ? "Tie game!":
            player === "rock" && computer === "paper" ? `Player: ${player}\nComputer: ${computer}\nComputer Wins!`:
            player === "scissors" && computer === "rock" ? `Player: ${player}\nComputer: ${computer}\nComputer Wins!`:
            player === "paper" && computer === "scissors" ? `Player: ${player}\nComputer: ${computer}\nComputer Wins!`:
            `Player: ${player}\nComputer: ${computer}\nPlayer Wins!`;

             alert(result);


             const playagain = confirm("Play Again?");
             playagain ? location.reload() : // reload again.
             alert("Ok, thanks for playing."); 
        }
        else{
            alert("You didn't enter rock, paper, or scissors");
        }
    }
    else{
        alert("I guess you changed your mind. Maybe next time.");
    }

}
else{
    alert("We will see next time");
}