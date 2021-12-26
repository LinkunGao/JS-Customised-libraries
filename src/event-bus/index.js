const eventBus = {
  // 保存类型与回调的容器
  callbacks: {},
};
// 绑定事件
eventBus.on = function (type, callback) {
  if (this.callbacks[type]) {
    this.callbacks[type].push(callback);
  } else {
    this.callbacks[type] = [callback];
  }
};
// 触发事件
eventBus.emit = function (type, data) {
  if (this.callbacks[type] && this.callbacks[type].length > 0) {
    this.callbacks[type].forEach((callback) => {
      callback(data);
    });
  }
};

// 事件解绑
eventBus.off = function (eventName) {
  if (eventName) {
    delete this.callbacks[eventName];
  } else {
    this.callbacks = [];
  }
};
