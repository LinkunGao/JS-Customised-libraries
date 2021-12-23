/**
 *
 * @param {Array} arr
 * @param  {...any} args
 */
function pull(arr, ...args) {
  // 声明一个空数组
  const result = [];
  // 遍历arr
  for (let i = 0; i < arr.length; i++) {
    // 判断当前元素是否存在于args数组中
    if (args.includes(arr[i])) {
      // 将当前元素的值存入result数组中
      result.push(arr[i]);
      // 删除当前元素
      arr.splice(i, 1);
      // 下标自减
      i--;
    }
  }
  return result;
}

function pullAll(arr, values) {
  return pull(arr, ...values);
}
