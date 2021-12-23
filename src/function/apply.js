function apply(Fn, obj, args) {
  if (obj === undefined || obj === null) {
    obj = globalThis;
  }
  // 为obj添加一个临时的方法
  obj.temp = Fn;
  // 执行方法
  let results = obj.temp(...args);
  // 删除临时属性
  delete obj.temp;
  return results;
}
