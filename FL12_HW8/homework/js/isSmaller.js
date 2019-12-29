const isBigger = (a, b) => (a > b);

const isSmaller = (isBigger, a, b) => !isBigger(a, b);

isSmaller(isBigger, 6, 1);