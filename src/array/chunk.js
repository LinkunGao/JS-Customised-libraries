/**
 * 数组分组
 * @param {Array} arr
 * @param {Number} size
 */
function chunk(arr, size = 1) {
  if (arr.length === 0) {
    return [];
  }
  let result = [];
  let tmp = [];

  arr.forEach((item) => {
    //   判断tmp元素的长度是否为零
    if (tmp.length === 0) {
      result.push(tmp);
    }
    tmp.push(item);
    //   将元素压入到临时数组tmp中
    if (tmp.length === size) {
      tmp = [];
    }
  });
  return result;
}
