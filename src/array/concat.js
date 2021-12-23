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
/**
 *
 * @param {Array} arr
 * @param {the begin index} begin
 * @param {the end index} end
 */
function slice(arr, begin, end) {
  // 若arr数组长度为0
  if (arr.length === 0) {
    return [];
  }
  //   判断begin
  begin = begin || 0;
  if (begin >= arr.length) {
    return [];
  }

  //   判断end
  end = end || arr.length;
  if (end < begin) {
    end = arr.length;
  }
  // 声明一个空数组
  const result = [];
  // 遍历对象
  for (let i = 0; i < arr.length; i++) {
    if (i >= begin && i < end) {
      result.push(arr[i]);
    }
  }
  return result;
}
