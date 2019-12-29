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
makeNumber('hgd.utr,e5;4rtf65765drd65e');