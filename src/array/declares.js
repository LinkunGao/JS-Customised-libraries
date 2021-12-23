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
