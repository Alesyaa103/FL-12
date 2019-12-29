let activate = confirm('Do you want to play a game?');
if (!activate) {
  alert('You did not become a billionaire, but can.');
} else {
  let next = true;
  let price = 0;
  let iteration = 0;
  let maxuserNum = 8;
  let maxIter = 3;
  let minWin = 25;
  while ( next ) {
    let gessed = Math.floor(Math.random() * maxuserNum).toString();
    let userNum = 10;
    let i = 0;
    while (gessed !== userNum && i < maxIter && userNum !== null) {
      i++;
      userNum = prompt( `Choose a roulette pocket userNum from 0 to 8
Attempts left: ${4-i}
Total prize: ${price}$
Possible prize on current attempt: ${minWin * Math.pow(2, maxIter-i ) * Math.pow(2,iteration)}$`);
    }
    if (gessed === userNum) {
      price += minWin * Math.pow(2,maxIter-i) * Math.pow(2,iteration)
      next = confirm(`Congratulation, you won!   Your prize is: ${price}$. Do you want to continue?`);
      if (!next) {
        alert(`Thank you for your participation. Your prize is: ${price}$`);
      }
    } else {
      alert(`Thank you for your participation. Your prize is: ${price}$.`)
      next = confirm('Do you want to play again?');
      price = 0;
      iteration = 0;
    }
    iteration++;
  }
}