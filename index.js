const hand = {
    rock: 'img/rock.png',
    scissors: 'img/scissors.png',
    paper: 'img/paper.png'
}
function rock() {
    let currentHand = 'rock';
}
function scissors() {
    let currentHand = 'scissors';
}
function paper() {
    let currentHand = 'paper';
}
function pickRandomProperty(obj) {
    let result;
    let count = 0;
    for (let prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}