function convert() {
  let a = [];
  for (let i = 0; i < arguments.length; i++) {
    typeof arguments[i] === 'string' ? a[i] = +arguments[i] : a[i] = arguments[i].toString()
  }
  return a;
}
convert('1', 2, 3, '4');

const executeforEach = function (arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let arg = arr[i];
    cb(arg, i, arr);
  }
}
executeforEach([1, 2, 3], function (el) {
  console.log(el * 2)
});

function mapArray(arr, cb) {
  let newArr = [];
  executeforEach(arr, function (arg, i, arr) {
    newArr.push(cb(arg, i, arr));
  });
  return newArr;
}
mapArray([2, '5', 8], function (el) {
  return parseInt(el) + 3
})

function filterArray(arr, cb) {
  let newArr = [];
  executeforEach(arr, function (arg, i, arr) {
    if (cb(arg, i, arr)) {
      newArr.push(arg);
    }
  });
  return newArr;
}

filterArray([2, 5, 8], function (el) {
  return el % 2 === 0
})

function flipOver(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += str[str.length - i - 1];
  }
  return newStr;
}

flipOver('hey world');

function makeListFromRange(arr) {
  let newArr = [];
  for (let i = 0; i <= arr[1] - arr[0]; i++) {
    newArr[i] = arr[0] + i;
  }
  return newArr;
}

makeListFromRange([2, 7])

const actors = [{
    name: 'tommy',
    age: 36
  },
  {
    name: 'lee',
    age: 28
  }
];

function getArrayOfKeys(arr, key) {
  let newArr = [];
  executeforEach(arr, function (arg) {
    newArr.push(arg[key]);
  })
  return newArr;
}

getArrayOfKeys(actors, 'name');

function substitute(arr) {
  return mapArray(arr, function (arg) {
    return arg > 30 ? '*' : arg;
  })
}

substitute([58, 14, 48, 2, 31, 29]);