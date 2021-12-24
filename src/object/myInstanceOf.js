/**
 *
 * @param {Object} obj
 * @param {Function} Fn
 * @returns
 */
function myInstanceOf(obj, Fn) {
  // 获取这个函数的显示原型
  let prototype = Fn.prototype;
  // 获取obj的隐式原型对象
  let proto = obj.__proto__;
  // 遍历原型链
  while (proto) {
    // check the prototype is equal
    if (prototype === proto) {
      return true;
    }
    proto = proto.__proto__;
  }
  return false;
}
