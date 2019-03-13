
gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

game = {
    playerHand: "",
    aiHand: "",
}


const hands = [...document.querySelectorAll(".select img")];

function selectHand() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 2px red";
}

function whoWin(player, ai){
    if (player === ai) {
        return "draw"
    } else if((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")){
        return "win"
    } else {
        return "losse"
    }
}


function gameResult(player, ai, result){
    document.querySelector(`[data-summary="your-choice"]`).textContent = game.playerHand;
    document.querySelector(`[data-summary="ai-choice"]`).textContent = game.aiHand;
    document.querySelector(`.numbers span`).textContent = ++gameSummary.numbers;
    
  if(result === "win"){
    document.querySelector(`[data-summary="who-win"]`).textContent = "Wygrałem :)";
    document.querySelector(`[data-summary="who-win"]`).style.color = "green";
    document.querySelector(`.wins span`).textContent = ++gameSummary.wins;
  }

  if(result === "draw"){
    document.querySelector(`[data-summary="who-win"]`).textContent = "Remis ://"
    document.querySelector(`[data-summary="who-win"]`).style.color = "grey";
    document.querySelector(`.draws span`).textContent = ++gameSummary.draws;
  }

  if(result === "losse"){
    document.querySelector(`[data-summary="who-win"]`).textContent = "Wygrał komputer :("
    document.querySelector(`[data-summary="who-win"]`).style.color = "red";
    document.querySelector(`.losses span`).textContent = ++gameSummary.losses;
  }
}

function endGame() {
    hands.forEach(hand => hand.style.boxShadow = "");
    game.playerHand = "";
    game.aiHand = "";
}


function start(){
    if (game.playerHand){
    game.aiHand = hands[Math.floor(Math.random() * hands.length)].dataset.option;
   
    const result = whoWin(game.playerHand, game.aiHand);
    gameResult(game.playerHand, game.aiHand, result);

    endGame();



    } else {
        alert("Wybierz dłoń!!!");
        document.querySelector(`[data-summary="who-win"]`).textContent = "";
    }
}

//Wybór ręki
hands.forEach(hand => hand.addEventListener("click", selectHand))

//Obsługa zdarzeń
document.querySelector('.start').addEventListener("click", start)