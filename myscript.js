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
                    addResultDiv("A draw! You both chose Rock!");
                    return;
                case "Paper":
                    addResultDiv("You lost. Paper beats Rock.");
                    return;
                case "Scissors":
                    addResultDiv("You won! Rock beats Scissors.");
                    return;
            }
        case "Paper":
            switch (computersChoice)
            {
                case "Rock":
                    addResultDiv("You won! Paper beats Rock.");
                    return;
                case "Paper":
                    addResultDiv("A draw! You both chose Paper!");
                    return;
                case "Scissors":
                    addResultDiv("You lost. Scissors beat Paper.");
                    return;
            }
        case "Scissors":
            switch (computersChoice)
            {
                case "Rock":
                    addResultDiv("You lost. Rock beats Scissors.");
                    return;
                case "Paper":
                    addResultDiv("You won! Scissors beat Paper.");
                    return;
                case "Scissors":
                    addResultDiv("A draw! You both chose Scissors!");
                    return;
            }

    }

}

function addResultDiv(conclusionString)
{
    const conclusionDiv = document.createElement('div');
    conclusionDiv.textContent = conclusionString;
    conclusionDiv.classList.add('resultsDivResult');
    const containerDiv = document.querySelector('.resultsDiv');
    containerDiv.appendChild(conclusionDiv);
    const conclusionDivs = document.querySelectorAll('.resultsDiv > div');
    const conclusionDivsCount = conclusionDivs.length;
    if(conclusionDivsCount == 5)
    {
        announceWinner(conclusionDivs);
    }

}


function announceWinner(roundDivs)
{
    let index = 0;
    roundDivs.forEach(roundDiv => {
        let roundDivText = roundDiv.textContent;
        if(roundDivText.includes('won'))
        {
            index++;
        }
        else if(roundDivText.includes('lost'))
        {
            index--;
        }
        roundDiv.parentNode.removeChild(roundDiv);
    });
    if(index > 0)
    {
        let currentBodyColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
        document.body.style.backgroundColor = "rgb(0, 101, 0)";
        setInterval(() => {
            document.body.style.backgroundColor = currentBodyColor
        }, 2000);
    }
    else if (index < 0)
    {
        let currentBodyColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
        document.body.style.backgroundColor = "rgb(101, 0, 0)";
        setInterval(() => {
            document.body.style.backgroundColor = currentBodyColor
        }, 2000);
    }
    else
    {
        let currentBodyColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
        document.body.style.backgroundColor = "rgb(100, 100, 100)";
        setInterval(() => {
            document.body.style.backgroundColor = currentBodyColor
        }, 2000);
    }
}

const choiceButtons = document.querySelectorAll('button.choice');
choiceButtons.forEach(button => button.addEventListener('click', playOneRound));