/**
 * 使用es6 拓展运算符
 * 浅拷贝
 * @param {*} target
 */
function clone1(target) {
  // 类型判断 {} [] null
  if (typeof target === "object" && target !== null) {
    // 判断数据是否为数组
    if (Array.isArray(target)) {
      return [...target];
    } else {
      return { ...target };
    }
  } else {
    return target;
  }
}

/**
 * 使用es5 for ... in 实现浅拷贝
 * @param {*} target
 */
function clone2(target) {
  // 判断
  if (typeof target === "object" && target !== null) {
    //   创建一个容器
    const result = Array.isArray(target) ? [] : {};
    // 遍历target数据
    for (let key in target) {
      // 判断当前对象身上是否包含该属性
      if (target.hasOwnProperty(key)) {
        // 将属性设置到result结果数据中
        result[key] = target[key];
      }
    }
    return result;
  } else {
    return target;
  }
}

/**
 * DeepClone1
 * use json
 * this way cannot clone function
 * 无法解决循环引用问题
 * @param {*} target
 */
function deepClone1(target) {
  // 通过数据创建JSON格式的字符串
  let str = JSON.stringify(target);
  // 将JSON的字符串创建为JS数据
  let data = JSON.parse(str);
  return data;
}

/**
 * deep clone 2
 * 使用递归
 * 解决了函数clone的问题
 * 无法解决循环引用问题
 * @param {*} target
 */
function deepClone2(target) {
  // 检测数据的类型
  if (typeof target === "object" && target !== null) {
    // 创建一个容器
    const result = Array.isArray(target) ? [] : {};
    // 遍历对象
    for (let key in target) {
      // 检测该属性是否为对象本身的属性（不能拷贝原型对象的属性）
      if (target.hasOwnProperty(key)) {
        // 拷贝
        result[key] = deepClone2(target[key]);
      }
    }
    return result;
  } else {
    return target;
  }
}

/**
 *
 * @param {*} target
 * @param {Map} map
 * @returns
 */
function deepClone3(target, map = new Map()) {
  // 检测数据的类型
  if (typeof target === "object" && target !== null) {
    //   克隆数据之前，进行判断，数据之前是否克隆过
    let cache = map.get(target);
    if (cache) {
      return cache;
    }
    // 创建一个容器
    const result = Array.isArray(target) ? [] : {};
    //   将新的结果存入到容器中
    map.set(target, result);
    // 遍历对象
    for (let key in target) {
      // 检测该属性是否为对象本身的属性（不能拷贝原型对象的属性）
      if (target.hasOwnProperty(key)) {
        // 拷贝
        result[key] = deepClone2(target[key], map);
      }
    }
    return result;
  } else {
    return target;
  }
}

/**
 *
 * @param {*} target
 * @param {Map} map
 * @returns
 */
function deepClone4(target, map = new Map()) {
  // 检测数据的类型
  if (typeof target === "object" && target !== null) {
    //   克隆数据之前，进行判断，数据之前是否克隆过
    let cache = map.get(target);
    if (cache) {
      return cache;
    }
    // 创建一个容器
    let isArray = Array.isArray(target);
    const result = isArray ? [] : {};
    //   将新的结果存入到容器中
    map.set(target, result);
    // 遍历对象
    // 如果目标数据为数组
    if (isArray) {
      target.forEach((item, index) => {
        result[index] = deepClone4(item, map);
      });
    } else {
      Object.keys(target).forEach((key) => {
        result[key] = deepClone4(target[key], map);
      });
    }
    return result;
  } else {
    return target;
  }
}
