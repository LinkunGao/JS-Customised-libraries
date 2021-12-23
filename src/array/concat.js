/**
 *
 * @param {Array} arr
 * @param  {...any} args
 */
function concat(arr, ...args) {
  // 声明一个空数组
  const result = [...arr];
  //   遍历数组
  args.forEach((item) => {
    if (Array.isArray(item)) {
      // result.push(4,5,6)
      result.push(...item);
    } else {
      result.push(item);
    }
  });
  return result;
}
