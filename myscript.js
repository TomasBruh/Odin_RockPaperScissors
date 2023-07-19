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

function playOneRound(e)
{
    playersChoice = e.target.textContent;
    computersChoice = getComputersChoice();
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

const choiceButtons = document.querySelectorAll('button.choice');
choiceButtons.forEach(button => button.addEventListener('click', playOneRound));