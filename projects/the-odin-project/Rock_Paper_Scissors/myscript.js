
let humanScore = 0;
let computerScore = 0;
let game_state = 'active'

function getComputerChoice() {
    let random_number = (Math.random() * 100)
    let computer_choice;

    if (random_number < 33) {
        computer_choice = 1;
        computer.textContent = "Computer picks: Paper";
    } else if (random_number >= 66) {
        computer_choice = 3;
        computer.textContent = "Computer picks: Rock";
    } else {
        computer_choice = 2;
        computer.textContent = "Computer picks: Scissors";
    }

    return computer_choice; 
}
    

function getHumanChoice(button_id) {
    let human_choice =  button_id // Number(prompt("Pick your weapon (enter number): 1. Rock | 2. Paper | 3. Scissors"));
    if (human_choice == "" || human_choice > 3 || human_choice < 1 || isNaN(human_choice)) {
        console.log("Pick a valid choice");
        return;
    } else if (human_choice == 1) {
        player_choice.textContent = "You picked: Rock";
    } else if (human_choice == 2) {
        player_choice.textContent = "You picked: Paper";
    } else {
        player_choice.textContent = "You picked: Scissors"
    }
    return human_choice;
}


function printScore() {
    results.textContent = "Computer:" + computerScore + " || Player:" + humanScore
}

function playRound(humanChoice, computerChoice) {
   
    let winning = "You won!";
    let loosing = "You lost! Try again";
    let draw = "It's a Draw!";


    if (humanChoice == 1) {
        if (computerChoice == 1) {
            outcome.textContent = loosing;
            computerScore += 1;
            printScore()
        } else if (computerChoice == 2){
            outcome.textContent = winning;
            humanScore += 1;
            printScore()
            } else if (computerChoice == 3){
            outcome.textContent = draw;
            printScore()
        }
    } else if (humanChoice == 2) {
        if (computerChoice == 1) {
            outcome.textContent = draw;
            printScore()
        } else if (computerChoice == 2){
            outcome.textContent = loosing;
            computerScore += 1;
            printScore()
        } else if (computerChoice == 3){
            outcome.textContent = winning;
            humanScore += 1;
            printScore()
        }
    } else if (humanChoice == 3) {
        if (computerChoice == 1) {
            outcome.textContent = winning;
            humanScore += 1;
            printScore()
        } else if (computerChoice == 2){
            outcome.textContent = draw;
            printScore()
        } else if (computerChoice == 3){
            outcome.textContent = loosing;
            computerScore += 1;
            printScore()
        }
    }   
    
    game_over()

    restart_game()
}   






function game_over() {
    if (humanScore == 5) {
        gameOver.textContent = 'You won!'
        gameOver.style.padding = "20px"
        game_state = 'inactive'
        console.log(game_state)
    } else if (computerScore == 5) {
        gameOver.textContent = 'You lost!'
        game_state = 'inactive'
        console.log(game_state)
    }

    
}

function restart_game() {

    console.log("restart_game was called");

    if (game_state == 'inactive') {
        const restart_button = document.createElement('button')
        restart_button.textContent = "Want to play again?"
        restart_button.classList.add('reset-button')
        winner.appendChild(restart_button)
        
        restart_button.addEventListener('click', () => { 
            console.log("restart_game was clicked");
            humanScore = 0
            computerScore = 0 
            game_state = 'active' 
            
            player_choice.textContent = ""
            computer.textContent = ""
            outcome.textContent = ""
            results.textContent = ""
            gameOver.textContent = ""
            gameOver.style.padding = "0px"
            winner.removeChild(restart_button)

        })
    }
}

    


const choices = document.querySelector('#choices')

const rock_button = document.createElement('button');
rock_button.textContent = 'Rock'
rock_button.setAttribute('id', '1')
rock_button.classList.add('rock')
rock_button.classList.add('left-tilt')
choices.appendChild(rock_button);

const paper_button = document.createElement('button');
paper_button.textContent = 'Paper'
paper_button.setAttribute('id', '2')
paper_button.classList.add('paper')
paper_button.classList.add('right-tilt')
choices.appendChild(paper_button);

const scissors_button = document.createElement('button');
scissors_button.textContent = 'Scissors'
scissors_button.setAttribute('id', '3')
scissors_button.classList.add('scissors')
scissors_button.classList.add('left-tilt')
choices.appendChild(scissors_button);


const btn = document.querySelectorAll('button');


btn.forEach( btn => {
    btn.addEventListener('click', () => {
        if (game_state === 'active') {
            playRound(getHumanChoice(btn.getAttribute('id')),getComputerChoice())
        }
    })
});



const rounds = document.querySelector('#rounds')

const player_choice = document.createElement('p')
rounds.appendChild(player_choice)

const computer = document.createElement('p')
rounds.appendChild(computer)

const outcome = document.createElement('p')
rounds.appendChild(outcome)

const results = document.createElement('p');
rounds.appendChild(results)

const winner = document.querySelector('#winner')
const gameOver = document.createElement('h1')
winner.appendChild(gameOver);



