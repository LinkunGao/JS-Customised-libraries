/* 
实现函数防抖
- 语法: debounce(callback, wait)
- 功能: 创建一个防抖动函数，该函数会从上一次被调用后，延迟 `wait` 毫秒后调用 `callback`
*/
function debounce(callback, time) {
  let timeId = null;
  // 返回一个函数
  return function (e) {
    // 判断
    if (timeId !== null) {
      //清空定时器
      clearTimeout(timeId);
    }
    // 启动定时器
    timeId = setTimeout(() => {
      callback.call(this, e);
      //   重制定时器变量
      timeId = null;
    }, time);
  };
}
