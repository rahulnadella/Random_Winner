var possibleWinners = ['Adam Rasheed',
                       'Alexander Barakhov',
                       'Anton Kastritskiy',
                       'Ayoub Moutil',
                       'Bharat Modi',
                       'Bryan Knight',
                       'Chris D',
                       'Daniyaal Khan',
                       'David Vazquez',
                       'Devan Farrell',
                       'Finley',
                       'Flores Kire',
                       'Goran Petricevic',
                       'Guillaume Bauer',
                       'Hamza Shezad',
                       'Honu Menehune',
                       'Isak Aslund',
                       'James Robb',
                       'Jason C',
                       'Junior Ferreira',
                       'Kamil Szymczak',
                       'Lee Keitel',
                       'Mustafa Al-Sharifi',
                       'Omer Oreg',
                       'Sam Churney',
                       'Tanseer Saji',
                       'Viktor Kynchev',
                       'Vishnu Neoelemento',
                       'Yakir Reznik'];

// Generate a rondom number
function winner(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

//apply that number to the hmtl layout
document.querySelector('.winner-name').innerHTML = possibleWinners[winner(0, possibleWinners.length)];
