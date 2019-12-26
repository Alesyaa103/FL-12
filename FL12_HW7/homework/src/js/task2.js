let activate = confirm('Do you want to play a game?');
if (!activate) {
  alert('You did not become a billionaire, but can.');
} else {
  let next = true;
  let price = 0;
  let iteration = 0;
  while ( next ) {
    let gessed = Math.floor(Math.random() * 8).toString();
    console.log(gessed);
    let number = 10;
    let i = 0;
    while (gessed !== number && i < 3) {
      i++;
      number = prompt( `Choose a roulette pocket number from 0 to 8
Attempts left: ${4-i}
Total prize: ${price}$
Possible prize on current attempt: ${25 * Math.pow(2, 3-i ) * Math.pow(2,iteration)}$`);
    }
    if (gessed === number) {
      price += 25 * Math.pow(2,3-i) * Math.pow(2,iteration)
      next = confirm(`Congratulation, you won!   Your prize is: ${price}$. Do you want to continue?`);
      if (!next) {
        alert(`Thank you for your participation. Your prize is: ${price}$`);
      }
    } else {
      alert(`Thank you for your participation. Your prize is: ${price}$`);
      next = false;
    }
    iteration++;
  }
}