// TODO:
// 1)Complete the game.
// 2)Refactor code. (like in frontend project, gameengine etc.)
// 3)That should looks good.(at this moment page looks like shit)
const elementRock = document.getElementById('rock');
const elementScissors = document.getElementById('paper');
const elementPaper = document.getElementById('scissors');
const hand = {
    rock: 'img/rock.png',
    scissors: 'img/scissors.png',
    paper: 'img/paper.png'
}
function rock() {
    let currentHand = 'rock';
    elementScissors.remove()
    elementPaper.remove()
    if (enemyHand() === currentHand) {
        console.log(1);
    }
}
function scissors() {
    let currentHand = 'scissors';
    elementPaper.remove();
    elementRock.remove();
    enemyHand();
}
function paper() {
    let currentHand = 'paper';
    elementRock.remove();
    elementScissors.remove()
    enemyHand();
}
function pickRandomProperty(obj) {
    let result;
    let count = 0;
    for (let prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}
function enemyHand() {
  const randomHand = pickRandomProperty(hand);
  const myImage = new Image();
  myImage.src = hand[`${randomHand}`];
  document.body.appendChild(myImage);
  return randomHand;
}
