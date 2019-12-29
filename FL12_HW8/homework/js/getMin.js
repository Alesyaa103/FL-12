const getMin = (arr) => {
  let flag = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (flag > arr[i]) {
      flag = arr[i];
    }
  }
  return flag;
}

getMin([1, 0, -1, 3, 4, 8, -5, 10]);
