function makeNumber(str) {
  let arr = str.split('');
  let newStr = '';
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) { 
      newStr += arr[i];
    }
  }
  return newStr;
}

function countNumber(makeNumber, str) {
  let newObj = {};
  let arr = makeNumber(str).split('');
  for (let i = 0; i < arr.length; i++ ) {
    let newProp = arr[i];
    (newObj[newProp] !== undefined) ? newObj[newProp]++ : newObj[newProp] = 1;
  }
  return newObj;
}

countNumber(makeNumber, 'uyft69tb7o;..-9ftrthvgh');