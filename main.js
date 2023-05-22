const choices = ['Rock', 'Paper', 'Scissors'];

function getChoiceComputer() {
	let choice = Math.floor(Math.random() * 3);
	return choices.at(choice);
}

let playerSelection = '';
let computerSelection = '';

let rock = document.getElementById('Rock');
let paper = document.getElementById('Paper');
let scissors = document.getElementById('Scissors');
rock.addEventListener('click', () => {
	playerSelection = 'Rock';
	computerSelection = getChoiceComputer();
	if (playerSelection === 'Rock' && computerSelection === 'Paper') {
		console.log('You Lose! Paper beats Rock');
	} else if (computerSelection === playerSelection) {
		console.log('Tie!');
	} else if (!choices.includes(playerSelection)) {
		console.log('Unknown value. Please try again');
	} else {
		console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
	}
});

paper.addEventListener('click', () => {
	playerSelection = 'Paper';
	computerSelection = getChoiceComputer();
	if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
		console.log('You Lose! Paper beats Rock');
	} else if (computerSelection === playerSelection) {
		console.log('Tie!');
	} else if (!choices.includes(playerSelection)) {
		console.log('Unknown value. Please try again');
	} else {
		console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
	}
});

scissors.addEventListener('click', () => {
	playerSelection = 'Scissors';
	computerSelection = getChoiceComputer();
	if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
		console.log('You Lose! Rock beats Scissors');
	} else if (computerSelection === playerSelection) {
		console.log('Tie!');
	} else if (!choices.includes(playerSelection)) {
		console.log('Unknown value. Please try again');
	} else {
		console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
	}
});
