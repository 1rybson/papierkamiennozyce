function game(){
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    function playGame(){
        const rock = document.querySelector(".rock");
        const paper = document.querySelector(".paper");
        const scissor = document.querySelector(".scissor");
    
        const playerOptions = [rock, paper, scissor];
        const cpuOptions = ['rock', 'paper','scissor'];
        playerOptions.forEach(element => {
            element.addEventListener('click', function(){
                const movesleft = document.querySelector('.movesleft');
                moves++;
                movesleft.innerText = `Pozostałe ruchy: ${10-moves}`;
    
                const cpuNumber = Math.floor(Math.random()*3);
                const cpuChoice = cpuOptions[cpuNumber];
    
                winner(this.innerText, cpuChoice);
    
                if(moves==10){
                    gameOver(playerOptions, movesleft);
                }
            })
        })
    }
    
    function winner(player, computer){
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const cpuScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if(player === computer){
            result.textContent = 'Remis';
        }else if(player == 'kamien'){
            if(computer == 'paper'){
                result.textContent = 'Komputer wygrywa';
                computerScore++;
                cpuScoreBoard.textContent = computerScore;
            }else{
                result.textContent = "Gracz wygrywa";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }else if(player == 'nozyce'){
            if(computer == 'rock'){
                result.textContent = 'Komputer wygrywa';
                computerScore++;
                cpuScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Gracz wygrywa';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }else if(player == 'papier'){
            if(computer == 'scissor'){
                result.textContent = 'Komputer wygrywa';
                computerScore++;
                cpuScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Gracz wygrywa';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    function gameOver(playerOptions, movesleft){
        const move = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reload = document.querySelector('.reload');

        playerOptions.forEach(element => {
            element.style.display = 'none';
        })

        move.innerText = 'Koniec gry';
        movesleft.style.display ='none';

        if(playerScore>computerScore){
            result.innerText = "Wygrałeś";
            result.style.fontSize='2em';

        }else if(playerScore<computerScore){
            result.innerText = 'Przegrałeś';
            result.style.fontSize = '2em';
        }else{
            result.innerText = 'Remis';
            // reload.style.fontSize = '2em';
        }
        reload.innerText = 'Restart';
        // reload.style.display = 'block';
        reload.addEventListener('click', () => {window.location.reload();})

    }

    playGame();
}

game();
