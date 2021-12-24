/**
 *
 * @param  {...any} objs
 * @returns
 */
function mergeObject(...objs) {
  // 声明一个空对象
  const result = {};
  // 遍历所有的参数对象
  objs.forEach((obj) => {
    // 获取当前对象所有的属性
    Object.keys(obj).forEach((key) => {
      // 检测result中是否存在key属性
      if (result.hasOwnProperty(key)) {
        result[key] = [].concat(result[key], obj[key]);
      } else {
        result[key] = obj[key];
      }
    });
  });
  return result;
}
