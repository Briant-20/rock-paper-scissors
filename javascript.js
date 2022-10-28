let computer_choice;
let winner;
let player_wins = 0;
let computer_wins = 0;
let tie_games = 0;
getcomputerchoice = () => {
let num = Math.floor(Math.random() * 3) + 1;
if (num == 1){
    computer_choice = "rock";
}
else if (num == 2){
    computer_choice = "paper";
}
else if (num == 3){
    computer_choice = "scissors";
}
}
play_round = () =>{
getcomputerchoice()
player_selection = prompt("Enter your choice");
player_selection = player_selection.toLowerCase();
console.log("The computer chose " + computer_choice)
console.log("You chose " + player_selection)
if (player_selection == "rock" && computer_choice == "scissors" || player_selection == "scissors" && computer_choice == "paper" || player_selection == "paper" && computer_choice == "rock"){
console.log(`Congratulations you win ${player_selection} beats ${computer_choice}`);
winner = "player"
}
else if (player_selection == computer_choice){
    console.log("The game was a tie, try again")
    winner = "tie"
}
else if (player_selection != "rock" && player_selection != "scissors" && player_selection != "paper"){
    console.log("Choice was invalid. Please enter rock, paper or scissors")
    winner = "invalid"
}
else{
    console.log(`Sorry you lose ${computer_choice} beats ${player_selection} `);
    winner = "computer";
}
}
play_game = () => {
for (i =  1; i<=5; ){
play_round()
if (winner == "player"){
player_wins++
i++
}
else if (winner == "computer"){
computer_wins++
i++
}
else if (winner == "tie"){
tie_games++
i++
}
}
}
Game_winner = () =>{
play_game()
if (computer_wins > player_wins){
    console.log(`The computer wins the game with ${computer_wins} rounds total out of 5`)
    }
if (player_wins > computer_wins){
        console.log(`Congrtulations you win the game with ${player_wins} rounds total out of 5`)
}
}
Game_winner()