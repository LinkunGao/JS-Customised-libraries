/**
 * 数组的扁平化
 * @param {Array} arr
 */
function flatten1(arr) {
  // 声明一个空数组
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flatten1(item));
    } else {
      result = result.concat(item);
    }
  });
  return result;
}

/**
 *
 * @param {Array} arr
 */
function flatten2(arr) {
  // 声明数组
  let result = [...arr];
  //   循环判断
  while (result.some((item) => Array.isArray(item))) {
    result = [].concat(...result);
  }
  //   返回结果
  return result;
}
