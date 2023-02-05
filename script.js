let nameIsRight = false
let userWins = 0,
opponentWins = 0;
const rounds = 5;
let nameOfPlayer = ""

//legyen egy funkcio ami nem engedi hogy bot, paper, scissor, rock legyen a neved (megoldva)
//legyen megoldva a jatek elinditasanak a kesleltetese hogy idoben lehessen megnyitni a console-t
//legyen vege ha 3-nal tobb gyozelem van es irja ki a gyoztest
//miert nem irja ki hogy hany ponttal gyozott?


while (nameIsRight != true){
    let userName = prompt("What's your name?")
    if (userName !== "rock" && userName !== "paper" && userName !== "scissor" && userName !== "Rock" && userName !== "Paper" && userName !== "Scissor" && userName !== "Bot" && userName !== "bot"){
        nameOfPlayer = userName
        nameIsRight = true
    } else {
        alert("Please pick another name!")
    }
}

//this function for the right input form
function isItOkay (){
    let userChoise = prompt("Choose!\nRock, Paper or Scissor?");
    let lowerCaser = userChoise.toLowerCase();
    
    if (lowerCaser !== "rock" && lowerCaser !== "paper" && lowerCaser !== "scissor"){
        return 0
    }

    
    console.log(nameOfPlayer + " choose: " + lowerCaser)
    return lowerCaser;
}
//this function generate a random choice
function computerPlay() {
    let randomChoose = Math.floor(Math.random() * 3);
    let letsChoice = ""
    
    switch(randomChoose) {
        case 0:
            letsChoice = "rock";
          break;
        case 1:
            letsChoice = "paper";
          break;
        case 2:
            letsChoice = "scissor";
            break;
        default:
            letsChoice = "error";
      }

      console.log("Bot choose: " + letsChoice)
      return letsChoice;
}
//this function decide who's the winner after each round
function whoTheWinner (playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissor"){
        userWins += 1;
        return "You Win! Rock beats Scissor\n--------------------------------------------------"
    } else if (playerSelection === "scissor" && computerSelection === "paper"){
        userWins += 1;
        return "You Win! Scissor beats Paper\n--------------------------------------------------"
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        userWins += 1;
        return "You Win! Paper beats Rock\n--------------------------------------------------"
    } else if (playerSelection === computerSelection){
        return "It's a Tie!\n--------------------------------------------------"
    } else { 
        opponentWins += 1;
        return "You lost! " + computerSelection + " beats " + playerSelection + "\n--------------------------------------------------"
    }
}
//this function decide who's the winner after the 5th round
function theUltimateWinner (){
    if(userWins < opponentWins){
        alert("Winner Winner, Chicken dinnner!\nBot is the Ultimate Winner! With: " + opponentWins + " points")
    } else if(userWins = opponentWins){
        alert("It's a tie! No Ultimate Winner.")
    } else {
        alert("Winner Winner, Chicken dinner!\n" + nameOfPlayer + " is the Ultimate Winner! With: " + userWins + " points")
    }  
}
//this is the game
function gameStart (){
    for (let i = 0; i < rounds; i++){
        itsOkay = false
        playerChoice = ""

        //this is for the wrong input
        while(itsOkay != true){
            playerChoice = isItOkay();
            if (playerChoice === 0){
                alert("Unknown input.\nPlease choose again!");
            } else {
                itsOkay = true;
            }
        }

        console.log(
                whoTheWinner(
                    playerChoice,
                    computerPlay()))
    
    }
}


gameStart()
theUltimateWinner()

