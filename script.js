// script.js
// Function to handle the roll button click
function rollDice() {
  // Get the user's balance and bet amount
  var balanceElement = document.getElementById('balance');
  var balance = parseFloat(balanceElement.value);
  var betElement = document.getElementById('bet');
  var bet = parseFloat(betElement.value);

  // Get the selected odds
  var oddsElement = document.getElementById('odds');
  var odds = parseFloat(oddsElement.value);

  // Generate a random number between 0 and 1 to simulate the roll
  var rollResult = Math.random();

  // Check if the roll is a win or loss based on the odds
  if (rollResult <= odds) {
    // Win case
    balance += bet;
  } else {
    // Loss case
    balance -= bet;
  }

  // Update the balance textbox with the new balance
  balanceElement.value = balance.toFixed(2);
}
