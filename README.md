# JS-Customised-libraries

this is for learning how to build a js library

1.1 call() apply() & bind()
1.1.1 API 说明

- call()
  - 语法：call(fn, obj, ...args)
  - 功能：执行 fn，使 this 为 obj，并将后面的 n 个参数传给 fn（功能等同于函数对象的 call 方法）
- apply() - 语法：apply(fn, obj, args) - 功能： 执行 fn，使 this 为 obj，并指定参数为后面的 n 个参数（功能等同于函数对象的 bind 方法）
  1.1.2 实现说明
- 区别 call，apply，bind
  - call(obj)/apply(obj):调用函数，指定函数中的 this 为第一个参数值
  - bind(obj)：返回一个新的函数，新的函数内部会调用原来的函数，且 this 为 bind（）指定的第一个参数的值
  - 注意：如果 obj 是 null/undefined，this 为 window
- 应用

  - call()/apply()应用：根据伪数组生成真数组

    1.2 函数的节流与函数防抖
    1.2.1 相关理解

- 事件频繁触发可能造成的问题
  - 一些浏览器事件： window.onresize, window.mousemove 等，触发的频率非常的高，会造成界面卡顿
  - 如果向后台发送请求，频繁触发，对服务器造成不必要的压力
- 如何限制事件处理函数频繁调用
  - 函数节流
  - 函数防抖
- 函数节流（throttle）
  - 理解：
    - 在函数需要频繁触发时：函数执行一次后，只要大于设定的执行周期后才会执行第二次
    - 适合多次事件按时间做平均分配触发
  - 场景：
    - 窗口调整（resize）
    - 页面滚动（scroll）
    - dom 元素的拖拽功能实现（mousemove）
    - 抢购疯狂点击（click）
- 函数防抖（debounce）
  - 理解：
    - 在函数需要频繁触发时：在规定时间内，只让最后一次生效，前面的不生效
    - 适合多次事件一次响应的情况
