var reverse = function (x) {
  if (x < 0) return -reverse(-x);
  let reversed = 0;

  while (x > 0) {
    let remainder = x % 10;
    x = Math.floor(x / 10);
    if (reversed >= 214748365) return 0;
    reversed = reversed * 10 + remainder;
  }
  return reversed;
};
