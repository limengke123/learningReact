#### 第一章 node简介
##### node应用场景
* i/o密集型
##### 单线程的问题
* 无法利用多核cpu
* 错误导致整个应用退出
* 大量计算占用cpu导致异步i/o无法调用
> node采用类似web workers解决单线程大量计算问题：child_process。
#### 第二章 模块机制
引入模块，经历三个步骤：
1. 路径分析
2. 文件定位
3. 编译执行
##### 模块分类
* node提供 => 核心模块   部分模块被直接加载在内存中，忽略1、2两个步骤，加载速度最快；
* 用户编写 => 文件模块   速度慢；
##### 模块标识符类型
1. 核心模块  编译成功的模块缓冲存到NativeModule._cache对象上
2. .或..开始的相对路径文件模块   将编译执行后的结果路径存放在缓冲中(文件路径做为索引缓冲在Module._cache对象上，二次加载更快
3. /开始的绝对路径文件模块
4. 非路径形式的文件模块，自定义的connect模块
>node中，每个文件模块都是一个对象，定义如下：
```js
    function Module(id,parent) {
      this.id = id;
      this.exports = {};
      this.parent = parent;
      if(parent && parent.children){
          parent.children.push(this);
      }
      this.filename = null;
      this.loaded = false;
      this.children = [];
    }
```
*node对获取到的文件内容进行了头尾包装，用process.dlopen()进行加载和执行)，如下*
```js
    (function(exports,require,module,__filename,__dirname) {
      /**具体内容**/
      /**传入的参数中有__filename和__dirname**/
    })
```
#####核心模块
* 核心模块分为c/c++和js编写的两部分，c/c++放在src目录下，js文件放在lib目录下。
* 纯c/c++编写为内建模块，被编译成二进制文件，直接被加载到内存，直接执行。
> 内建模块(c/c++) -> 核心模块(javascript) -> 文件模块
> node在启动时，会生成一个全局变量process，提供Binding()方法来协助加载内建模块



