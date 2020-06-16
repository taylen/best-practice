# JavaScript 最佳实践

<details>
  <summary>1、避免定义全局变量</summary>

  <pre>
  <p> 原因：会产生全局污染 </p>
  <code>
    g = {};
    var c = {};
  </code>
  </pre>
</details>

<details>
  <summary>2、尽可能把所有声明放在每段脚本或函数的顶部</summary>

  <pre>
    <p> 原因：
      - 获得更整洁的代码
      - 提供了查找局部变量的好位置
      - 更容易避免不需要的全局变量
      - 减少不需要的重新声明的可能性
    </p>
    <code>
      let a = 1;

      if (a === 1) {
        let b = 2;
      } else {
        let b = 3;
      }
    </code>
  </pre>
</details>

<details>
  <summary>3、声明变量时对其进行初始化是个好习惯</summary>

  <pre>
    <p>
    原因：
    - 更整洁的代码
    - 在单独的位置来初始化变量
    - 避免未定义值
    - 变量初始化使我们能够了解预期用途和预期的数据类型
    </p>
    <code>
    let a, b, c;

    ============

    let a = '',
      b = 1,
      c = [];
    </code>
  </pre>
  
</details>

<details>
  <summary>
  4、用 default 来结束 switch，用 else 结束 if 
  </summary>

  <pre>
    <p>原因：代码最容易出BUG的地方就是异常情况没有穷举</p>
    <code>
      let g = {
        v: 1
      };

      switch (g.v) {
        case 0:
          g.a = 0;
          break;
        case 1:
          g.a = 1;
          break;
      }

      console.log(g.a);
    </code>
  </pre>
  
</details>

<details>
  <summary>5、避免使用 eval() </summary>
  <pre>
    <p>
    原因：eval() 函数用于将文本作为代码来允许。在几乎所有情况下，都没有必要使用它。因为允许任意代码运行，它同时也意味着安全问题
    </p>
    <code>
      const a = 'while(true){}';
      eval(a);
    </code>
  </pre>
</details>

<details>
  <summary>6、减少循环中的逻辑</summary>

  <pre>
  <p>
    原因：编程经常会用到循环。循环每迭代一次，循环中的每条语句，包括 for while 语句，都会被执行。
    能够放在循环之外的语句或赋值会使循环运行得更快。
  </p>
  <code>
  const LOOP_COUNT = 500000;
  let list = Object.keys(Array.from({ length: LOOP_COUNT }))
                .map(function(item) {
                  return +item;
                });
  let s = Date.now();
  for(let i = 0; i < list.length; i++) {
    if (i === list.length - 1) {
      console.log(Date.now() - s);
    } else {
      // do sth
    }
  }

  ----------

  const LOOP_COUNT = 500000;
  let list = Object.keys(Array.from({ length: LOOP_COUNT }))
                .map(function(item) {
                  return +item;
                });
  let s = Date.now();
  for(let i = 0, len = list.length; i < len; i++) {
    if (i === len - 1) {
      console.log(Date.now() - s);
    } else {
      // do sth
    }
  }
  </code>
  </pre>
</details>

<details>
  <summary>7、DOM 访问最小化</summary>

  任何一次DOM访问和操作都比较耗时，我们尽一切可能减少DOM操作
  - 早期的fragment
  - 虚拟DOM
  
</details>

<details>
  <summary>8、遍历对象的属性的时候，加上一个if语句</summary>

  <pre>
    <p>当检查对象上某个属性是否存在时，hasOwnProperty 是唯一可用的方法。 同时在使用 for in loop 遍历对象时，推荐总是使用 hasOwnProperty 方法， 这将会避免原型对象扩展带来的干扰。
    </p>
    <code>
      for(key in object) {  
        if(object.hasOwnProperty(key) {  
            ...then do something...  
        }  
      }
    </code>
  </pre>
</details>

<details>
  <summary>9、避免严重嵌套</summary>

  <pre>
    <p>
    如何避免严重嵌套？
    - 链式调用 Promise
    - async/await
    - 多层 if条件 合并为 一层 判断条件
    </p>
    <code>
      if (a > 0) {
        if (b > 0) {
          // a > 0 && b > 0
        } else {
          // a > 0 && b <= 0
        }
      } else {
        if (c > 0) {
          // a < 0 && c > 0
        } else {
          // a < 0 && c <= 0
        }
      }

      ===========

      if (a > 0 && b > 0) {
        // do sth
      } else if (a > 0 && b <= 0) {
        // do sth
      } else if (a < 0 && c > 0) {
        // do sth
      } else {
        // do sth
      }

      ============

      if (a <= 0) {
        return;
      }
      if (b > 0) {
        // a > 0 && b > 0
      } else {
        // a > 0 && b <= 0
      }

    </code>
  </pre>
</details>

<details>
  <summary>10、不要信任任何数据</summary>

  - 和后台约定返回json，后台一定会返回json格式吗？
  - 后台数据为空时，字段名称一定还会存在吗？
  - 凡是依赖外部传入的数据，都不可信，都应进行校验

</details>

<details>
  <summary>11、使用常量</summary>

  <pre>
    <code>
      setTimeout(function() {
        // do sth
      }, 300); // 300 代表什么含义？

      =====
      const CLICK_BROKEN_DELAY = 300;
      setTimeout(function() {
        // do sth
      }, CLICK_BROKEN_DELAY);
    </code>
  </pre>
</details>

<details>
  <summary>12、尽量少的算法复杂度</summary>

  <pre>
    <p>
    算法（Algorithm）是指用来操作数据、解决程序问题的一组方法。同一个问题使用不同的算法，虽然结果相同，但消耗的资源和时间却会有很大的区别，那么如何去衡量不同算法之间的优劣呢？主要从算法所占用的「时间」和「空间」两个维度去考量。
    - 时间维度：是指执行当前算法所消耗的时间，我们通常用「时间复杂度」来描述。
    - 空间维度：是指执行当前算法需要占用多少内存空间，我们通常用「空间复杂度」来描述。

    我们先从常见的时间复杂度量级进行大O的理解：
    - 常数阶O(1)
    - 线性阶O(n)
    - 平方阶O(n²)
    - 对数阶O(logn)
    - 线性对数阶O(nlogn)
    </p>
    <code>
    // 复杂度都是O(1)
    function add(a: number, b: number): number{
      return a + b;
    }

    // for循环里面的代码会执行 n 遍，因此它消耗的时间是随着 n 的变化而变化的，因此可以用O(n)来表示它的时间复杂度
    function sum (n: number ){
      let ret = 0;
      for ( let i = 0 ; i <= n ; i++) {
          ret += i;
      }
      return ret;
    }

    // 当存在双重循环的时候，即把 O(n) 的代码再嵌套循环一遍，它的时间复杂度就是 O(n²) 
    function selectionSort(arr: <Array>, n: number){
      for(let i = 0; i < n ; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n ; j++ ) {
          if (arr[j] < arr[minIndex])
            minIndex = j;
        }
        swap (arr[i], arr[minIndex]);
      }
    }

    // 二分查找法的代码中，通过while循环，成 2 倍数的缩减搜索范围，也就是说需要经过 log2^n 次即可跳出循环。
    function binarySearch(arr: <Array>, n: number, target: number) {
      let l = 0,
        r = n - 1;
      while ( l <= r) {
        let mid = l + (r - l) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] > target ) r = mid - 1;
        else l = mid + 1;
      }
      return -1;
    }

    // 将时间复杂度为O(logn)的代码循环N遍的话，那么它的时间复杂度就是 n * O(logn)，即 O(nlogn)
    function hello (n: number) {
      for( let m = 1 ; m < n ; m++){
        let i = 1;
        while( i < n ){
            i = i * 2;
        }
      }
    }
    </code>
  </pre>
</details>