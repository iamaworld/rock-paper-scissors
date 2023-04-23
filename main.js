function getChoiceComputer() {
	let choice = Math.floor(Math.random() * 3);
	const choices = ['Rock', 'Paper', 'Scissors'];
	return choices.at(choice);
}
console.log(getChoiceComputer());
function playRound(playerSelection, computerSelection) {
	if (playerSelection === 'Rock' && computerSelection === 'Paper') {
		return 'You Lose! Paper beats Rock';
	} else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
		return 'You Lose! Rock beats Scissors';
	} else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
		return 'You Lose! Paper beats Rock';
	} else if (computerSelection === playerSelection) {
		return 'Tie!';
	} else {
		return 'You win! ' + playerSelection + ' beats ' + computerSelection;
	}
}
console.log(playRound('Rock', getChoiceComputer()));
