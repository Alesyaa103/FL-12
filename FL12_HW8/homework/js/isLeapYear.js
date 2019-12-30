function isLeapYear(inputDate) {
  let date = new Date(inputDate);
  if (date instanceof Date && !isNaN(date)) {
      let year = date.getFullYear();
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return (`${year} is a leap year`);
      } else {
        return (`${year} is not a leap year`);
      }
  } else {
    return 'Invalid Date';
  }
}
isLeapYear(1213131313);