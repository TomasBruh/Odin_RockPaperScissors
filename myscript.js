function getComputersChoice ()
{
    let rnd = Math.random();
    if(rnd > 0.666)
    {
        return "Rock";
    }
    if(rnd < 0.333)
    {
        return "Paper";
    }
    return "Scissors";
}

function getPlayersChoice ()
{
    let userInput = prompt("Choose: Rock, Paper or Scissors");
    if(userInput == null || userInput == "")
    {
                return null;
    }
    firstInputLetter = userInput.charAt(0).toUpperCase();
    userInput = firstInputLetter + userInput.substring(1).toLowerCase();
    if(userInput == "Rock" || userInput == "Paper" || userInput == "Scissors")
    {
        return userInput;
    }
    alert("You can only choose between a Rock, Paper and Scissors. Pick one of these.");
    return getPlayersChoice();
}

function playOneRound(playerSelection, computerSelection)
{
    playersChoice = playerSelection();
    computersChoice = computerSelection();
    if(playersChoice == null)
    {
        return null;
    }
    switch (playersChoice)
    {
        case "Rock":
            switch (computersChoice)
            {
                case "Rock":
                    alert("It's a draw! You both chose Rock!");
                    return 0;
                case "Paper":
                    alert("You lost. Paper beats Rock.");
                    return -1;
                case "Scissors":
                    alert("You won! Rock beats Scissors.");
                    return 1;
            }
        case "Paper":
            switch (computersChoice)
            {
                case "Rock":
                    alert("You won! Paper beats Rock.");
                    return 1;
                case "Paper":
                    alert("It's a draw! You both chose Paper!");
                    return 0;
                case "Scissors":
                    alert("You lost. Scissors beat Paper.");
                    return -1;
            }
        case "Scissors":
            switch (computersChoice)
            {
                case "Rock":
                    alert("You lost. Rock beats Scissors.");
                    return -1;
                case "Paper":
                    alert("You won! Scissors beat Paper.");
                    return 1;
                case "Scissors":
                    alert("It's a draw! You both chose Scissors!");
                    return 0;
            }

    }

}

function fiveRoundGame ()
{
    let roundsWon = 0;
    let roundsDrawn = 0;
    for (let i = 0; i < 5; i++)
    {
        aRound = playOneRound(getPlayersChoice, getComputersChoice);
        if(aRound == null)
        {
            alert("You left the game");
            return;
        }
        if(!aRound)
        {
            roundsDrawn++;
        }
        else if (aRound > 0)
        {
            roundsWon++;
        }
    }
    alert(`You won ${roundsWon} rounds and drawn ${roundsDrawn} out of 5.`);
    askToReplay = prompt("Do you want to play a gain?").toLowerCase();
    if(askToReplay == "yes" || askToReplay == "")
    {
        fiveRoundGame();
    }
    
}

fiveRoundGame();