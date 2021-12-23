function map(arr, callback) {
  // 声明一个空的数组
  let result = [];
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调
    result.push(callback(arr[i], i));
  }
  return result;
}

/**
 *
 * @param {Array} arr
 * @param {Function} callback
 * @param {*} initValue
 * @returns
 */
function reduce(arr, callback, initValue) {
  // 声明变量
  let result = initValue;
  // 执行回调
  for (let i = 0; i < arr.length; i++) {
    // 执行回调
    result = callback(result, arr[i]);
  }
  //   返回最终的结果
  return result;
}

/**
 *
 * @param {Array} arr
 * @param {Function} callback
 */
function filter(arr, callback) {
  // 声明一个空数组
  let result = [];
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    //执行回调
    let res = callback(arr[i], i);
    // 判断
    if (res) {
      result.push(arr[i]);
    }
  }
  return result;
}

/**
 *
 * @param {Array} arr
 * @param {Function} callback
 */
function find(arr, callback) {
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i);
    if (res) {
      return arr[i];
    }
  }
  return undefined;
}

/**
 *
 * @param {Array} arr
 * @param {Function} callback
 */
function findIndex(arr, callback) {
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i);
    if (res) {
      return i;
    }
  }
  return -1;
}

/**
 *
 * @param {Array} arr
 * @param {Function} callback
 */
function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i)) {
      return false;
    }
  }
  return true;
}

/**
 *
 * @param {Array} arr
 * @param {Function} callback
 */
function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return true;
    }
  }
  return false;
}

function unique(arr) {
  const result = [];
  arr.forEach((item) => {
    // 检测result数组中是否有这个值
    if (result.indexOf(item) === -1) {
      //若没有该元素，则插入到数组中
      result.push(item);
    }
  });
  return result;
}

function unique2(arr) {
  // 声明空数组
  const result = [];
  // 声明空对象
  const obj = {};
  arr.forEach((item) => {
    if (obj[item] === undefined) {
      //   将item作为下标存储在obj中
      obj[item] = true;
      result.push(item);
    }
  });
  return result;
}

function unique3(arr) {
  // 将数组转化set集合
  let set = new Set(arr);
  // 将set展开创建数组
  let array = [...set];
  return array;
}
