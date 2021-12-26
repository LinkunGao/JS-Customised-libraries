const PubSub = {
  // 订阅的唯一ID
  id: 1,
  //   频道与回调的一个容器
  callbacks: {},
};

/**
 * 订阅频道
 * @param {*} channel
 * @param {Function} callback
 */
PubSub.subscribe = function (channel, callback) {
  // 创建唯一的编号
  let token = "token_" + this.id++;
  // 判断callbacks属性中是否存在pay
  if (this.callbacks[channel]) {
    this.callbacks[channel][token] = callback;
  } else {
    this.callbacks[channel] = {
      // 变量作为key，使用[]表示
      [token]: callback,
    };
  }
  //   返回频道订阅的ID
  return token;
};
/**
 * 发布消息
 * @param {*} channel
 * @param {*} data
 */
PubSub.publish = function (channel, data) {
  // 获取当前频道中所有的回调
  if (this.callbacks[channel]) {
    Object.values(this.callbacks[channel]).forEach((callback) => {
      callback(data);
    });
  }
};

/**
 *
 * @param {*} flag
 */
PubSub.unsubscribe = function (flag) {
  if (flag === undefined) {
    this.callbacks = {};
  } else if (typeof flag === "string") {
    if (flag.indexOf("token_") === 0) {
      let callbackObj = Object.values(this.callbacks).find((obj) =>
        obj.hasOwnProperty(flag)
      );
      if (callbackObj) {
        delete callbackObj[flag];
      }
    } else {
      delete this.callbacks[flag];
    }
  }
};
