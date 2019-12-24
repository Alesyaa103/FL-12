let flag = true;
let a, b, c ='';
while (flag) {
  a = parseInt(prompt('print the first (a) side of triangle'));
  if( a <= 0 || a >= 0) {
    flag = false;
  } else {
    alert('input values should be ONLY numbers');
  }
}
flag = true;
while (flag) {
  b = parseInt(prompt('print the second (b) side of triangle'));
  if( b <= 0 || b >= 0) {
    flag = false;
  } else {
    alert('input values should be ONLY numbers');
  }
}
flag = true;
while (flag) {
  c = parseInt(prompt('print the third (c) side of triangle'));
  if( c <= 0 || c >= 0) {
    flag = false;
  } else {
    alert('input values should be ONLY numbers');
  }
}
if ( a + b <= c || a + c <= b || c + b <= a ) {
  alert('Triangle doesn’t exist');
} else if ( a === b && b === c) {
  alert('Equilateral triangle');
} else if ( a === b || a === c || b === c ) {
  alert('Isosceles triangle');
} else {
  alert('Scalene triangle');
}