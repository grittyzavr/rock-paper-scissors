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
    enemyHand();
}
function scissors() {
    let currentHand = 'scissors';
    elementPaper.remove();
    elementRock.remove();
}
function paper() {
    let currentHand = 'paper';
    elementRock.remove();
    elementScissors.remove()
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
  const myImage = new Image();
  myImage.src = hand[`${pickRandomProperty(hand)}`];
  document.body.appendChild(myImage);
}
