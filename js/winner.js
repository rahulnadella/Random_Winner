// Retrieve the File System module
var fs = require('fs');

// Perform a Asynchronous read of the content.txt file and store into array of possibleWinners
fs.readFile('content.txt', function(err, data) {
  if (err) throw err;
  var possibleWinners = data.toString().split("\n");
  //apply that number to the hmtl layout
  document.querySelector('.winner-name').innerHTML = possibleWinners[winner(0, possibleWinners.length)];
});

// Generate a rondom number
function winner(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}
