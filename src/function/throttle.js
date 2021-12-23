/* 
实现函数节流
- 语法: throttle(callback, wait)
- 功能: 创建一个节流函数，在 wait 毫秒内最多执行 `callback` 一次
*/
function throttle(callback, wait) {
  // 定义一个开始时间
  let start = 0;
  // 返回结果是一个函数
  return function (e) {
    //   获取当前的时间戳
    let now = Date.now();
    // 判断
    if (now - start >= wait) {
      //如果是满足添加，则执行回调函数
      callback.call(this, e);
      // 修改开始时间
      start = now;
    }
  };
}
