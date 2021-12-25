function reverseString(str) {
  // 将字符串转换为数组
  // let arr = str.split('');
  let arr = [...str];
  // 翻转数组
  arr.reverse();

  let s = arr.join("");
  return s;
}

function palindrome(str) {
  return reverseString(str) === str;
}

function truncate(str, size) {
  return str.slice(0, size) + "...";
}
