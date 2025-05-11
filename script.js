let computerScore = 0;
let userScore = 0;
let userInput;
let computerInput;
let c = 0.
let u = 0.


let buttons = document.querySelectorAll("button");
let UserscoreDis = document.getElementById("userScore") ;
let ComputerscoreDis = document.getElementById("computerScore") ;
let finalMessage = document.getElementById("finalmessage");

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        let random = Math.floor (Math.random() * 10 ) ;
        let computerChoice;
        userInput = this.textContent;

        if (random == 0) {
            computerChoice = 'Rock'
        }
        else if (random > 0 && random <= 5) {
            computerChoice = 'Paper'
        }
        else {
            computerChoice = 'Scissor'
        }

        if ((computerChoice == 'Scissor' &&
            userInput == 'Paper')
            || (computerChoice == 'Paper' &&
                userInput == 'Rock') || (computerChoice == 'Rock' &&
                    userInput == 'Scissor')
        ) {
            ComputerscoreDis.textContent = ++c
        }
        else if ((userInput == 'Scissor' &&
            computerChoice == 'Paper')
            || (userInput == 'Paper' &&
                computerChoice == 'Rock') || (userInput == 'Rock' &&
                computerChoice == 'Scissor')) {
                    UserscoreDis.textContent = ++u
        }

        if ( u == 5 || c == 5 ) {
            buttons.forEach(function(button) {
                button.disabled = true;
                finalMessage.textContent = ( c == 5 ) ? "Computer Wins" : "You Win" ;
            } )     
        }

         
        
         

    })
});

