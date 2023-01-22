function reverse (n) {
  if (n < 0) {
    let a = n * (-1);
    return rev(a);
  } else {
    return rev(n);
  }
}

function rev (a) {
    let str = a.toString();
    let arr = str.split("");
    arr.reverse();
    let strNew = arr.join("");
    return Number(strNew);
}

module.exports = reverse;

console.log(reverse(-123));
