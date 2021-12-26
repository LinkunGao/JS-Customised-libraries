/**
 *
 * @param {String}} el
 * @param {String} type
 * @param {Function} callback
 * @param {String} selector
 */
function addMyEventListener(el, type, callback, selector) {
  // 判断el的类型
  if (typeof el === "string") {
    el = document.querySelector(el);
  }
  // 事件绑定
  if (!selector) {
    el.addEventListener(type, callback);
  } else {
    el.addEventListener(type, function (e) {
      // 获取点击的目标事件源
      const target = e.target;
      // 判断选择器是否与目标元素相符
      if (target.matches(selector)) {
        // 若符合，则调用回调函数
        callback.call(target, e);
      }
    });
  }
}
