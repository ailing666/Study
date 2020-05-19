# Grid布局

### 一、啥是Grid呢
网格布局（Grid）是最强大的 CSS 布局方案

### 二、Grid和Flex
flex用来做一维布局，在一条轴线上来控制。
![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588068531635-e6d348df-184b-4c48-901a-3d78e295a14b.png#align=left&display=inline&height=267&margin=%5Bobject%20Object%5D&originHeight=267&originWidth=1242&size=0&status=done&style=none&width=1242)
grid是二维布局，通过行和列来控制


### 三、Grid的基本概念


![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588068693068-c9fdbc53-2f56-4a7d-ba56-90c35e2f11f1.png#align=left&display=inline&height=786&margin=%5Bobject%20Object%5D&originHeight=786&originWidth=1264&size=0&status=done&style=none&width=1264)
#### 1.容器和项目
采用网格布局的区域，称为"容器"（container）。容器内部采用网格定位的子元素，称为"项目"（item）。
```html
  <div class="container">
    <div class="item">
      <p></p>
    </div>
    <div class="item">
      <p></p>
    </div>
    <div class="item">
      <p></p>
    </div>
  </div>
```
此时给container设置display:grid;container就是项目，item就是子项，p标签并不是，只有他的亲儿子才是子项。
#### 2.行和列
容器里面的水平区域称为"行"（row），垂直区域称为"列"（column）。
#### 3.网格线
划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。
![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588069016464-86551404-aa17-427c-a02f-1b3a48ba8385.png#align=left&display=inline&height=968&margin=%5Bobject%20Object%5D&originHeight=968&originWidth=1069&size=0&status=done&style=none&width=1069)
上图是一个 4 x 4 的网格，共有5根水平网格线和5根垂直网格线。

### 四、容器属性
#### 1.display-grid
设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。

#### 2.grid-template-columns/grid-template-rows
用来设置行和列

![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588069214143-b2f31e92-79e4-4063-990f-b6105f0fe942.png#align=left&display=inline&height=985&margin=%5Bobject%20Object%5D&originHeight=985&originWidth=888&size=0&status=done&style=none&width=888)
上如图是一个三行三列每行都是100px效果~


![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588069470536-fc048805-b3eb-4ec4-ad3e-25152bcf000d.png#align=left&display=inline&height=975&margin=%5Bobject%20Object%5D&originHeight=975&originWidth=833&size=0&status=done&style=none&width=833)
上图可以按百分比填充~


![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588069572325-4ee7d86f-434a-48d9-bfbc-3bdf290da258.png#align=left&display=inline&height=963&margin=%5Bobject%20Object%5D&originHeight=963&originWidth=819&size=0&status=done&style=none&width=819)
fr单位相当于flex的份数，上图就是将网格行和列分为6份，第一个占1/6，第二个2/6，第三个3/6


**repeat()** 使用repeat()函数，简化重复的值
第一个参数是需要重复的次数，第二个参数就是要重复的值啦
![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588069715687-67c74b45-be03-42aa-a8b5-934adb5b9f21.png#align=left&display=inline&height=974&margin=%5Bobject%20Object%5D&originHeight=974&originWidth=822&size=0&status=done&style=none&width=822)
上述的代码等同于：
```css
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
```
![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588069956455-81f22048-6832-4dfc-bb06-7de57943370f.png#align=left&display=inline&height=847&margin=%5Bobject%20Object%5D&originHeight=933&originWidth=822&size=0&status=done&style=none&width=746)
上述代码等同于：
```css
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr;
```


**auto-fill** 
单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充。
![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588070133537-e175b20b-23cb-4a12-9a00-4aed07e4aff3.png#align=left&display=inline&height=927&margin=%5Bobject%20Object%5D&originHeight=927&originWidth=825&size=0&status=done&style=none&width=825)


##### minmax()函数
产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。
```css
//表示最小值为100px，最大值为1fr
grid-template-columns: 1fr 1fr minmax(100px, 1fr);

```
上述代码表示：当宽度大于100px时，由内容撑开
##### auto
超简单的左右固定，中间自适应...
![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588070424181-4a6bfa67-0d44-4426-9dc3-859245f08753.png#align=left&display=inline&height=903&margin=%5Bobject%20Object%5D&originHeight=903&originWidth=831&size=0&status=done&style=none&width=831)


#### 3.column-gap/ row-gap/gap
![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588070689179-46bb41cf-9891-4b67-80d1-006f471e5cb8.png#align=left&display=inline&height=859&margin=%5Bobject%20Object%5D&originHeight=938&originWidth=815&size=0&status=done&style=none&width=746)
grid-row-gap属性设置行与行的间隔（行间距），grid-column-gap属性设置列与列的间隔（列间距）。
##### gap
##### ![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588071052949-16973e4d-9362-4dbb-a79d-517a256b3dda.png#align=left&display=inline&height=890&margin=%5Bobject%20Object%5D&originHeight=890&originWidth=820&size=0&status=done&style=none&width=820)
gap属性是column-gap和row-gap的合并简写形式
如果行和列间距相等，就只用写一个值，否则前面写行，后面写列

#### 4.grid-template-areas
```css
  //表示每一个item都有自己的一座小房子
	grid-template-areas: 'a b c''d e f''g h i';
  //表示第一列的item都住在a小区，第二行的都住在b小区，第三行在c小区
  grid-template-areas: 'a a a''b b b''c c c';
  //表示第一行的第一个在a小区，第三个在c小区，中间的买不起房，孤立他不带他玩
  grid-template-areas: 'a . b''c . d''g . i';
```
#### 5.grid-auto-flow
划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行
![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588071429656-87171cb4-2ed4-4a95-8f50-f1a8efaa80cc.png#align=left&display=inline&height=815&margin=%5Bobject%20Object%5D&originHeight=896&originWidth=820&size=0&status=done&style=none&width=746)
> 默认是row，按水平方向排列，column是按照垂直方向排列



![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588071819564-51cfba66-edcb-4962-bb02-624ade7d6fe2.png#align=left&display=inline&height=1158&margin=%5Bobject%20Object%5D&originHeight=1158&originWidth=843&size=0&status=done&style=none&width=843)
当默认先行后列排列，1,2盒子横跨两行时，就会出现后面的装不下就掉下去的情况
##### row dense
![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588071931858-743786d0-2112-46ea-8735-1db99429f6f7.png#align=left&display=inline&height=1149&margin=%5Bobject%20Object%5D&originHeight=1149&originWidth=854&size=0&status=done&style=none&width=854)
设为row dense，表示"先行后列"，并且尽可能紧密填满，尽量不出现空格
#### 6.justify-items/align-items/place-items
justify-items属性设置单元格内容的水平位置（左中右），align-items属性设置单元格内容的垂直位置（上中下）。
```css
start：对齐单元格的起始边缘。
end：对齐单元格的结束边缘。
center：单元格内部居中。
stretch：拉伸，占满单元格的整个宽度（默认值）。
```
![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588072132675-f30416bf-ffe6-4aec-9a96-34d80ca08354.png#align=left&display=inline&height=938&margin=%5Bobject%20Object%5D&originHeight=938&originWidth=842&size=0&status=done&style=none&width=842)
由于默认值是拉伸，设置别的之后，宽高默认由内容撑开
上述写法可以简写称为
```css
place-items:center
```
#### 7.justify-content/align-content/place-content
justify-content属性是整个内容区域在容器里面的水平位置（左中右），align-content属性是整个内容区域的垂直位置（上中下）。
```css
start - 对齐容器的起始边框。
end - 对齐容器的结束边框。
center - 容器内部居中。
stretch - 项目大小没有指定时，拉伸占据整个网格容器。
space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。
space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。
space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。
```
![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588072513092-0ef398a4-cb9c-4e5d-bf56-d9468a837111.png#align=left&display=inline&height=928&margin=%5Bobject%20Object%5D&originHeight=928&originWidth=830&size=0&status=done&style=none&width=830)
place-content就是两种属性的简写啦
#### 8.grid-auto-rows
当设置了3*3的网格，多出来的item可以通过该属性单独设置

![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588072841051-1ae5b123-e49e-4d74-89ba-c006bcfeff39.png#align=left&display=inline&height=908&margin=%5Bobject%20Object%5D&originHeight=908&originWidth=834&size=0&status=done&style=none&width=834)
### 五、项目属性
#### 1.grid-column-start/grid-column-end/grid-row-start/grid-row-end/grid-area
```css
grid-column-start属性：左边框所在的垂直网格线
grid-column-end属性：右边框所在的垂直网格线
grid-row-start属性：上边框所在的水平网格线
grid-row-end属性：下边框所在的水平网格线
```
![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588073930831-02a553dd-c03f-49f7-9103-451025b56dd9.png#align=left&display=inline&height=1214&margin=%5Bobject%20Object%5D&originHeight=1214&originWidth=760&size=0&status=done&style=none&width=760)
盒子4从第一列网格线开始到第三列网格线结束，盒子五从第三列网格线开始，第二行网格线开始，第四行网格线结束


![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588074123842-b1ed9d04-7a22-4367-90e3-5d9155b58f74.png#align=left&display=inline&height=1182&margin=%5Bobject%20Object%5D&originHeight=1182&originWidth=754&size=0&status=done&style=none&width=754)
grid-area是简写，前两个值分别是行和列的开始网格线，后两个值分别是行和列的结束网格线
#### 2.justify-self/align-self/place-self
就是单独控制自己咯

源码
```css
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./css/gird.css">
</head>

<body>
  <div class="box">
    <div class="items1">1</div>
    <div class="items2">2</div>
    <div class="items3">3</div>
    <div class="items4">4</div>
    <div class="items5">5</div>
    <div class="items6">6</div>
    <div class="items7">7</div>
    <div class="items8">8</div>
    <div class="items9">9</div>
  </div>

</body>

</html>
```
```css
.box {
  width: 400px;
  height: 600px;
  border: 2px solid #095;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'a b c''d e f''g h i';
  // grid-template-areas: 'a a a''b b b''c c c';
  // grid-template-areas: 'a . b''c . d''g . i';


  .items1 {
    background-color: #FFDEAD;
  }

  .items2 {
    background-color: #BF3EFF;
  }

  .items3 {
    background-color: #B3EE3A;
  }

  .items4 {
    background-color: #A52A2A;
    grid-area: 1~'/'1~'/'3~'/'3;
  }

  .items5 {
    background-color: #A0522D;
  }

  .items6 {
    background-color: #0A0A0A;
  }

  .items7 {
    background-color: #00FA9A;
  }

  .items8 {
    background-color: #FFBBFF;
  }

  .items9 {
    background-color: #BBFFFF;
  }

}
```
