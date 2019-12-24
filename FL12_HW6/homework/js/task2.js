let a = parseInt(prompt('print the first (a) parametr of the quadratic equation'));
let b = parseInt(prompt('print the second (b) parametr of the quadratic equation'));
let c = parseInt(prompt('print the third (c) parametr of the quadratic equation'));
if ( a > 0 && b > 0 && c > 0) {
  if ( a + b <= c || a + c <= b || c + b <= a ) {
    alert('Triangle doesn’t exist');
  } else if ( a === b && b === c) {
    alert('Equilateral triangle');
  } else if ( a === b || a === c || b === c ) {
    alert('Isosceles triangle');
  } else {
    alert('Scalene triangle');
  }
} else if (a <= 0 || b <= 0 || c <= 0) {
  alert('A triangle must have 3 sides with a positive definite length');
} else {
  alert('input values should be ONLY numbers');
}