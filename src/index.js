module.exports = function reverse (n) {
  let str = ("" + Math.abs(n)).split('').reverse().join('');

  return +str;
}
