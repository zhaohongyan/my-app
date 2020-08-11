###### 千里之行，始于足下

1. 类型注解
2. 接口
3. 类

...展开 浅拷贝， 对象展开会丢失其方法

```
class C {
  p = 12;
  m() {
  }
}
let c = new C();
let clone = { ...c };
clone.p; // ok
clone.m(); // error!

```