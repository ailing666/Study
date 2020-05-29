# 2020年css新特性：flex-gap

基于现有的flex属性支持，想用它实现一个九宫格不是一个太容易的事情，我们需要靠配合伪类选择器去模拟，好在浏览器总会发现我们的痛点，然后通过引入新的属性来解决问题，flexbox原生的gap属性已经落入规范，应该会在今年完成全面支持，喜大普奔，

## 如何实现一个间距gap始终保持10px的九宫格布局

### 1. flex + 伪类选择器模拟
```css
.container {
    height: 375px;
    display: flex;
    flex-wrap: wrap;
  }
.container div {
  width: calc((100% - 20px)/3);
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: brown;
  text-align: center;
}
/* 3n 元素重置margin-right */
.container div:nth-of-type(3n) {
  margin-right: 0;
}
/* 倒数前三重置margin-bottom */
.container div:nth-last-of-type(-n+3) {
  margin-bottom: 0;
}
```

### 2. 原生flexbox gap支持
```css
.container {
  height: 375px;
  display: flex;
  flex-wrap: wrap;
  // 原生gap
  gap: 10px;
}
.container div {
  width: calc((100% - 20px)/3);
  background-color: brown;
  text-align: center;
}
```
<br />
<a name="BMMtp"></a>
#### 效果预览浏览器要求
比较遗憾目前阶段还只有firework的最新俩个版本提供支持，愿景是美好的，弹性盒子作为最好用的布局方式注定会越来越完善~<br />