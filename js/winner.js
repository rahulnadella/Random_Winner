var fs = require('fs');
var possibleWinners = fs.readFileSync('content.txt').toString().split("\n");

// Generate a rondom number
function winner(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

//apply that number to the hmtl layout
document.querySelector('.winner-name').innerHTML = possibleWinners[winner(0, possibleWinners.length)];
