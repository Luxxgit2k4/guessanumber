const prompt = require("prompt-sync")();
const reach = Math.round(Math.random()*100);
//console.log(reach);
let guesses = 0;
while(true) {
    const guess = Number(prompt("GUESS THE NUMBER (0-100):"));
    guesses ++;
if(guess > reach)  {
console.log("Your guess is high");
}
else if(guess < reach) {
    console.log("Your guess is low");
}
else {
    console.log("Your guess is right");
    break;
}
}
console.log("You took",guesses," guesses to get it correct");

 