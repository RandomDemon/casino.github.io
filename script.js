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

  // Check if the user has enough balance to place the bet
  if (balance < bet) {
    alert("You don't have enough balance to place this bet.");
    return;
  }

  // Generate a random number between 0 and 1 to simulate the roll
  var rollResult = Math.random();

  // Calculate the payout multiplier based on the selected odds
  var payoutMultiplier = 1 + odds;

  // Check if the roll is a win or loss based on the odds
  if (rollResult <= odds) {
    // Win case
    var winnings = bet * payoutMultiplier;
    balance += winnings;
    alert('Congratulations! You won ' + winnings.toFixed(2) + ' credits.');
  } else {
    // Loss case
    balance -= bet;
    alert('Sorry, you lost ' + bet.toFixed(2) + ' credits.');
  }

  // Update the balance textbox with the new balance
  balanceElement.value = balance.toFixed(2);
}
