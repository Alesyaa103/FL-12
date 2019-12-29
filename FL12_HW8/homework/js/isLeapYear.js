function isLeapYear(data) {
  if (typeof (data) === 'number') {
    let date = new Date(data);
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDate();
    if (!year) {
      return ('Invalid Date')
    } else if (new Date(year, month, day).getDate() === 29) {
      return (`${year} is a leap year`);
    } else {
      return (`${year} is not a leap year`);
    }
  } else {
    data = data.split('');
    let year = data.slice(0,4).join('');
    if ( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return (`${year} is a leap year`);
    } else {
      return (`${year} is not a leap year`);
    }
  }
}
isLeapYear(1213131313);
