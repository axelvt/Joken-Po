const userScoreSpan = document.getElementById('user-score');
const machineScoreSpan = document.getElementById('machine-score');
const resultText = document.getElementById('result-text');
const options = document.querySelectorAll('.option');

let userScore = 0;
let machineScore = 0;

options.forEach(option => {
    option.addEventListener('click', () => {
        const userChoice = option.id;
        const machineChoice = getMachineChoice();
        const result = determineWinner(userChoice, machineChoice);
        updateScores(result);
        resultText.textContent = `Você escolheu ${userChoice}, a máquina escolheu ${machineChoice}. ${result}`;
    });
});

function getMachineChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(user, machine) {
    if (user === machine) {
        return 'Empate!';
    } else if ((user === 'rock' && machine === 'scissors') || 
               (user === 'paper' && machine === 'rock') || 
               (user === 'scissors' && machine === 'paper')) {
        return 'Você ganhou!';
    } else {
        return 'Você perdeu!';
    }
}

function updateScores(result) {
    if (result === 'Você ganhou!') {
        userScore++;
        userScoreSpan.textContent = userScore;
    } else if (result === 'Você perdeu!') {
        machineScore++;
        machineScoreSpan.textContent = machineScore;
    }
}
