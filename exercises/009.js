// TODO: https://tech-docs.corndel.com/js/arrow-functions.html

/**
 * Play a game of rock-paper-scissors.
 *
 * @param {'rock' | 'paper' | 'scissors'} choice1 The choice of player 1.
 * @param {'rock' | 'paper' | 'scissors'} choice2 The choice of player 2.
 * @returns {'player1' | 'player2' | 'tie'} The result of the game.
 */
export const rockPaperScissors =
  (choice1, choice2) => {
    var winMatrix = {
                rock : { 'rock' : 'tie', 'paper' : 'player2', 'scissors' : 'player1' },
                paper : { 'rock' : 'player1', 'paper' : 'tie', 'scissors' : 'player2'},
                scissors : { 'rock' : 'player2', 'paper' : 'player1', 'scissors' : 'tie'},
                    }
    return winMatrix[choice1][choice2]
  }
