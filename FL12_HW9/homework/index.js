const convert = function () {
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
  console.log(el * 2);
});

const mapArray = function (arr, cb) {
  let newArr = [];
  executeforEach(arr, function (arg, i, arr) {
    newArr.push(cb(arg, i, arr));
  });
  return newArr;
}

mapArray([2, '5', 8], function (el) {
  return parseInt(el) + 3;
});

const filterArray = function (arr, cb) {
  let newArr = [];
  executeforEach(arr, function (arg, i, arr) {
    if (cb(arg, i, arr)) {
      newArr.push(arg);
    }
  });
  return newArr;
}

filterArray([2, 5, 8], function (el) {
  return el % 2 === 0;
});

const flipOver = function (str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += str[str.length - i - 1];
  }
  return newStr;
}

flipOver('hey world');

const makeListFromRange = function (arr) {
  let newArr = [];
  for (let i = 0; i <= arr[1] - arr[0]; i++) {
    newArr[i] = arr[0] + i;
  }
  return newArr;
}

makeListFromRange([2, 7]);

const actors = [{
    name: 'tommy',
    age: 36
  },
  {
    name: 'lee',
    age: 28
  }
];

const getArrayOfKeys = function (arr, key) {
  let newArr = [];
  executeforEach(arr, function (arg) {
    newArr.push(arg[key]);
  })
  return newArr;
}

getArrayOfKeys(actors, 'name');

const substitute = function (arr) {
  return mapArray(arr, function (arg) {
    return arg > 30 ? '*' : arg;
  })
}

substitute([58, 14, 48, 2, 31, 29]);

const date = new Date(2019, 0, 2);

const getPastDay = function (date, num) {
  return new Date(+date - num * 3600 * 24 * 1000).getDate();
}

getPastDay(date, 1);
getPastDay(date, 2);
getPastDay(date, 365);

const formatDate = function (date) {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}

formatDate(new Date('6/15/2018 09:15:00'));
formatDate(new Date());