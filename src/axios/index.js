function axios({ method, url, params, data }) {
  method = method.toUpperCase();
  // 返回值
  return new Promise((resolve, reject) => {
    // 四步骤
    // 1. 创建对象
    const xhr = new XMLHttpRequest();
    // 2. 初始化
    // 处理params对象 a=100,b=200
    let str = "";
    for (let k in params) {
      str += `${k}=${params[k]}&`;
    }
    str = str.slice(0, -1);

    xhr.open(method, url + "?" + str);
    // 3.发送
    if (method === "POST" || method === "PUT" || method === "DELETE") {
      // Content-type mine 类型设置
      xhr.setRequestHeader("Content-type", "application/json");
      // 设置请求体
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }
    // 设置响应结果的类型为json
    xhr.responseType = "json";
    // 4. 处理结果
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        //   判断状态响应吗 2xx
        if (xhr.status >= 200 && xhr.status < 300) {
          // 成功状态
          resolve({
            status: xhr.status,
            message: xhr.statusText,
            body: xhr.response,
          });
        } else {
          reject(new Error("请求失败，失败的状态码为： " + xhr.status));
        }
      }
    };
  });
}

axios.get = function (url, options) {
  // 发送AJAX请求 GET
  let config = Object.assign(options, { method: "GET" }, { url: url });
  return axios(config);
};

axios.post = function (url, options) {
  // 发送AJAX请求 GET
  let config = Object.assign(options, { method: "POST" }, { url: url });
  return axios(config);
};
axios.put = function (url, options) {
  // 发送AJAX请求 GET
  let config = Object.assign(options, { method: "PUT" }, { url: url });
  return axios(config);
};
axios.delete = function (url, options) {
  // 发送AJAX请求 GET
  let config = Object.assign(options, { method: "DELETE" }, { url: url });
  return axios(config);
};
