let k4 = 4;
let k2 = 2;
let a = parseFloat(prompt('print the first (a) parametr of the quadratic equation'));
let b = parseFloat(prompt('print the second (b) parametr of the quadratic equation'));
let c = parseFloat(prompt('print the third (c) parametr of the quadratic equation'));
if ((a < 0 || a > 0) && (b <= 0 || b >= 0) && (c <= 0 || c >= 0)){
  let D = b*b - k4*a*c;
  if(D < 0) {
    console.log('no solution');
  } else if (D > 0) {
    console.log('x1 =', Math.round((-b + Math.sqrt(D))/k2/a), 'and x2 =', Math.round((-b - Math.sqrt(D))/k2/a));
  } else {
    let x = Math.round(-b/k2/a);
    if (x === 0) {
      x = 0;
    }
    console.log('x =', x);
  }
} else {
  console.log('Invalid input data');
}