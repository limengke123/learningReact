#### 第三章 异步I/O

1. 异步IO与非阻塞IO
* 异步和非阻塞都达到了并行IO的目的，异步/同步/阻塞/非阻塞是两回事。
* 操作系统内核对于IO阻塞和非阻塞。
* 非阻塞IO不带数据直接返回，要获取数据，需要通过文件描述符再次读取
* 通过轮询判断操作是否完成
  ###### 轮询类型
  1. read
  2. select
  3. poll
  4. epoll
--------------------
* windows和*nix平台差异，node提供libuv做为抽象封装层，node在编译期间判断平台条件。
* windows采用IOCP,*nix采用自定义线程池
* **node是单线程，仅仅指js执行在单线程中，内部完成IO任务的另有线程池**

2. node的异步IO
>完成整个异步IO环节的有时间循环、观察者和请求对象
  1. 事件循环
  >进程启动时，node会创建一个类似于while循环，每执行一次循环体，称为tick，每个tick查看是否有事件待处理，如果有就取出事件及回调，如果有回调则执行回调，然后进入下一个循环，没有事件，则退出进程。
  2. 观察者
  * 判断tick中是否有事件需要处理
  * node中，事件主要源于网络请求、文件IO
  3. 请求对象
  * 从js层传入的参数和当前方法都被封装在这个请求对象上，其中回调函数则被设置在这个对象的oncomplete_sym属性上
3. 非IO的异步API
  * 定时器 setTimeOut setInterval （存在问题）
  * process.nextTick 最快 多个nextTick则一次执行完成
  * setImmediate 与nextTick类似，执行慢，多个setImmediate则顺序执行 

