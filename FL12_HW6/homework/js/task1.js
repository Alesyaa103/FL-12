let flag = true;
let a, b, c ='';
let k4 = 4;
let k2 = 2;
while (flag) {
  a = parseFloat(prompt('print the first (a) parametr of the quadratic equation'));
  if( a < 0 || a > 0 ) {
    flag = false;
  } else {
    alert('Invalid input data');
  }
}
flag = true;
while (flag) {
  b = parseFloat(prompt('print the second (b) parametr of the quadratic equation'));
  if( b <= 0 || b >= 0 ) {
    flag = false;
  } else {
    alert('Invalid input data');
  }
}
flag = true;
while (flag) {
  c = parseFloat(prompt('print the third (c) parametr of the quadratic equation'));
  if( c <= 0 || c >= 0 ) {
    flag = false;
  } else {
    alert('Invalid input data');
  }
}
let D = b*b - k4*a*c;
if(D < 0) {
  console.log('no solution');
} else if (D > 0) {
  console.log('x1 =',Math.round((-b + Math.sqrt(D))/k2/a), 'and x2 =',Math.round((-b - Math.sqrt(D))/k2/a));
} else {
  console.log('x =',Math.round(-b/k2/a));
}
