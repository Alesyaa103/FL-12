const square = x => x*x - 2*x + 1;
const pow = x => x*x*x;
const decrement = x => x - 20;

const pipe = (x, ...arr) => {
  for (let i = 0; i < arr.length; i++) {
    x = arr[i](x);
  }
  return x;
}

pipe(3, square, pow, decrement);
