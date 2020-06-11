# JavaScript 最佳实践

<details>
  <summary>1、避免定义全局变量</summary>

  原因：会产生全局污染
</details>

<details>
  <summary>2、尽可能把所有声明放在每段脚本或函数的顶部</summary>

  原因：
  - 获得更整洁的代码
  - 提供了查找局部变量的好位置
  - 更容易避免不需要的全局变量
  - 减少不需要的重新声明的可能性
  - 
</details>

<details>
  <summary>3、声明变量时对其进行初始化是个好习惯</summary>

  原因：
  - 更整洁的代码
  - 在单独的位置来初始化变量
  - 避免未定义值
  - 变量初始化使我们能够了解预期用途和预期的数据类型
</details>

<details>
  <summary>4、用 default 来结束 switch，用 else 结束 if </summary>

  原因：代码最容易出BUG的地方就是异常情况没有穷举，或else没考虑到
</details>

<details>
  <summary>5、避免使用 eval() </summary>

    原因：eval() 函数用于将文本作为代码来允许。在几乎所有情况下，都没有必要使用它。因为允许任意代码运行，它同时也意味着安全问题
</details>

<details>
  <summary>6、减少循环中的逻辑</summary>

  原因：编程经常会用到循环。循环每迭代一次，循环中的每条语句，包括 for while 语句，都会被执行。
  能够放在循环之外的语句或赋值会使循环运行得更快。
</details>

<details>
  <summary>7、DOM 访问最小化</summary>

</details>

<details>
  <summary>8、遍历对象的属性的时候，加上一个if语句</summary>


</details>

<details>
  <summary>9、避免严重嵌套</summary>

</details>

<details>
  <summary>10、不要信任任何数据</summary>

</details>

<details>
  <summary>11、使用常量</summary>

</details>

<details>
  <summary></summary>

</details>
