# 12-WebApi基本概念

## 一、js的三大组成
![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1587904696101-eff9855d-0263-4fa9-963b-204889dcabc4.png#align=left&display=inline&height=1007&margin=%5Bobject%20Object%5D&originHeight=1007&originWidth=1876&size=0&status=done&style=none&width=1876)
#### 1.ECMAScript-核心
ECMAScript 是一套标准，对该标准规定了各个方面内容的语言的描述，与具体的实现无关。
#### 2.DOM文档对象模型/文档树对象模型
文档对象模型（Document Object Model），是W3C组织推荐的处理可扩展标志语言的标准编程接口。
一套 JavaScript 动态操作网页内容的 API（函数）。
#### 3.BOM浏览器对象模型
浏览器对象模型（Browser Object Model）
一套 JavaScript 动态操作浏览器窗口的 API。

## 二、DOM文档树
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1307005/1587904858655-e1fa94fd-47d7-4ba0-a83e-80912034809f.png#align=left&display=inline&height=296&margin=%5Bobject%20Object%5D&name=image.png&originHeight=592&originWidth=1178&size=95780&status=done&style=none&width=589)
DOM树 又称为文档树模型，把文档映射成树形结构，通过节点对象对其处理，处理的结果可以加入到当前的页面。
会把整个网页当成一个对象

- 文档：一个页面就是一个文档，DOM中使用document表示

- 节点：网页中的所有内容，在文档树中都是节点（标签、属性、文本、注释等），使用node表示

- 标签节点：网页中的所有标签，通常称为元素节点，又简称为“元素”，使用element表示
## 三、获取元素的方式
#### 1.通过ID名获取
```
document.getElementById('id')
```

- 参数：id名
- 返回值：元素对象或null
  - 返回null的情况
  - 1.当括号里面的id与实际的id不匹配时，会返回null
  - 2.当获取的id写在了实际id的前面时，也会返回null
    - 当出现上述情况时，仍调用方法会出现以下报错，此时谁.了方法谁就是null
    - Uncaught TypeError: Cannot set property '方法' of null
- 只能通过document调用



#### 2.通过类名获取
```
document.getElementsByClassName('类名')
```

- 参数：类名
- 返回值：一个伪数组
- 注意
  - 只要返回的是一个伪数组，不能直接使用，需通过下标使用元素
#### 3.通过标签名
```
document.getElementsByTagName('标签名');
```

- 参数：标签名
- 返回值：一个伪数组
- 注意
  - 只要返回的是一个伪数组，不能直接使用，需通过下标使用元素
- 任意元素都能调用
#### 4.通过name获取
```
document.getElementsByName('name值')
```

- 参数：name名
- 返回值：一个伪数组
- 注意
  - 只要返回的是一个伪数组，不能直接使用，需通过下标使用元素
#### 5.上述方法总结

- 只要是Element的都是返回一个，是Elements就是返回伪数组
- 伪数组判断,从log显示
  - 真数组： (3)[1,2,3]或Array(3)
  - 伪数组：一个名字(3)[1,2,3]



```html
<body>
  <div class="box"></div>
  <button id="btn"></button>
  <p>标签</p>
  <p>标签</p>
  <p>标签</p>
  <h1 name="xiaoai"></h1>
  <script>
    // 1.通过id名获取元素:性能最高
    //    能且仅能获取一个，如果有多个相同id只会获取第一个
    let btn = document.getElementById('btn')
    // 2.通过类名获取元素
    //    返回的是一个伪数组
    let boxs = document.getElementsByClassName('box')
    // 3.通过标签名获取元素
    //    返回的是一个伪数组
    let ps = document.getElementsByTagName('p');
    // 4.通过自定义name获取元素
    let xiaoai = document.getElementsByName('xiaoai')

    /*
      总结：
          通过类名和标签名获取时，返回的是一个伪数组
          用的时候需要通过下标使用，或者遍历拿到每一个
    */
    console.log(btn);//<button id="btn"></button>
    console.log(boxs);//HTMLCollection [div.box]
    console.log(ps);//HTMLCollection(3) [p, p, p]
    console.log(xiaoai);//NodeList [h1]
  </script>
</body>
```
#### 6.通过选择器获取元素
##### 1.document.querySelector
语法：

- document.querySelector('.类名');
- document.querySelector('#id名');
- document.querySelector('标签名');

返回值：都只会返回第一个获得的元素
```html
<body>
  <div class="box">1</div>
  <div class="box">2</div>
  <button id="btn"></button>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <script>
    // 1.通过类选择器
    let box = document.querySelector('.box');
    // 2.通过id选择器
    let btn = document.querySelector('#btn');
    // 3.通过标签选择器
    let ps = document.querySelector('p');

    console.log(box);//<div class="box">1</div>
    console.log(btn);//<button id="btn"></button>
    console.log(ps); //<p>1</p >
  </script>
</body>
```
##### 1.document.querySelectorAll
语法：

- document.querySelectorAll('.类名');
- document.querySelectorAll('标签名');

返回值：返回一个伪元素，里面装的所有该选择器获取的元素
```html

<body>
  <div class="box">1</div>
  <div class="box">2</div>
  <button id="btn"></button>
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <script>


    // 1.通过类选择器
    let boxs = document.querySelectorAll('.box');
    // 2.通过id选择器
    // 3.通过标签选择器
    let ps = document.querySelectorAll('p');

    console.log(boxs);// [div.box, div.box]
    console.log(ps); //[p, p, p]
  </script>
</body>

```
##### 3.子代，后代，交集等写法
```html
<body>

  <ul id="father">
    <li class="son">
      <p>1</p>
      <p>2</p>
    </li>
    <li class="sun">亲儿子sun</li>
    <li class="son">
      <h5 class="sun">3</h5>
    </li>
  </ul>
  <ul id="mother">
    <li class="son">1</li>
    <li class="son">2</li>
  </ul>
  <div id="mother">123</div>
    <input type="text">

  <script>
    // 1.子代
    let sun = document.querySelectorAll('#father .sun');
    // father里面的sun才变色
    for (let i = 0; i < sun.length; i++) {
      sun[i].style.backgroundColor = 'red'
    }
    // 2.后代
    let sun2 = document.querySelectorAll('#father > .sun');
    // father里面的亲儿子sun才变色
    for (let i = 0; i < sun2.length; i++) {
      sun2[i].style.backgroundColor = 'green'
    }
    // 3.交集
    // 既有mother优势ul才变色
    let jiao = document.querySelectorAll('ul#mother');
    for (let i = 0; i < jiao.length; i++) {
      jiao[i].style.backgroundColor = 'yellow'
    }
    //4.属性选择器
    let text = document.querySelector('[type = text]');
  </script>
</body>
```
#### 7.body和html的获取
```html
    // 获取body
    let body = document.body
    // 获取html
    let html = document.documentElement
    console.log(body);
    console.log(html);
```
## 四、操控元素属性
### 1.点语法实现增删改查
```html
<body>

  <input type="text" value="小艾同学" id="ipt">
  <script>
    // 1.获取
    let ipt = document.querySelector('#ipt');

    //2.查
    console.log(ipt.type);//text
    // 3.改
    ipt.value = '666'
    // 4.增
    ipt.className = 'xiaoai'//方式1
    // ipt.classList.add('xiaoai')//方式2
    //5.删
    ipt.removeAttribute('class');        //完全移除 
    // ipt.classList.remove('xiaoai')   //只能移除类名，class还在
  </script>
</body>
```
### 2.class属性
注意，操作js中的类名class时，必须写成className才行哦
添加类名的时候，如果原先有类名，直接添加吧原来的类名覆盖掉哦
```html
  <style>
    .big {
      width: 100px;
      height: 50px;
      background-color: #95f;
    }

    .red {
      background-color: red;
    }
  </style>
</head>

<body>
  <button class="btn big">小艾同学</button>
  <script>

    let btn = document.querySelector('.btn');

    // 直接添加类名会覆盖掉原来的
    // btn.className = 'red'

    // 方法一:将原来的类名写上，中间必须有空格！！
    // btn.className = 'big red'

    // 方法二，字符串拼接,前面必须有空格啊！！！！！！
    btn.className += ' red'
  </script>
</body>
```
### 3.操作style属性
只要能在style标签里面写的，就能通过js修改
```html
<body>
  <div class="box"></div>
  <script>
    let box = document.querySelector('.box');
    box.style.width = '100px'
    box.style.height = '100px'
    // background-color =>将-去掉，-后的第一个字母大写
    box.style.backgroundColor = 'red';
  </script>
</body>
```
### 4.表单的操作
       1. disabled 是否禁用 (场景 : 按钮、文本输入框)
          true : 禁用
          false : 不禁用


      2. checked 是否选中 (场景 : 单选框 、多选框)
         true  : 选中
         false : 不选中


      3. selected 是否选中 (场景 : 下拉菜单)
         true : 选中
        false : 不选中
```html
<body>

  <input type="text">
  <input type="radio">
  <br>

  男： <input type="checkbox" class="duo" id="">
  女： <input type="checkbox" class="duo" id="">

  <br>
  <select name="" id="sel">
    <option>小艾同学1</option>
    <option>小艾同学2</option>
    <option>小艾同学3</option>
  </select>
  <script>
    // 1.获取
    let text = document.querySelector('[type = text]');
    let radio = document.querySelector('[type = radio]');
    let duo = document.querySelectorAll('.duo');
    let opt = document.querySelectorAll('#sel option');

    // text.innerText = '小艾艾'
    // 表单元素的值只能用value修改
    text.value = '小艾艾'

    // disabled = false是默认值，可选中
    // radio.disabled = false;

    // disabled = true代表禁用
    radio.disabled = true;

    //checked = true,默认选中/false是默认值，代表不选中
    duo[0].checked = true;

    //selected= true默认选中/false是默认值，代表不选中
    opt[2].selected = true;
  </script>
</body>
```
### 5.innerText和innerHTML

- 获取内容时的区别：


	innerText会去除空格和换行，而innerHTML会保留空格和换行	

- 设置内容时的区别：


	innerText不会识别html，而innerHTML会识别
```html
 <body>
    <div id="box">
      <h2>小艾同学</h2>
    </div>
  <script>
    // 1.获取元素
    let box = document.getElementById('box')

    // innerText只能识别文本内容
		console.log(box.innerText)
    // innerHTML能识别文本和html标签
		console.log(box.innerHTML)
  </script>
  </body>
```
## 五、事件
### 1.事件三要素
#### 事件源：谁去做
#### 事件名称：做啥事
#### 事件处理函数：咋做
事件绑定方式
```html
  <button id="btn">小艾同学</button>

  <script>
//方式一：传统的
    //1. 获取元素
    var btn = document.getElementById('btn')

    //2. 注册一个点击事件
    /*
      bth：事件源
      onclick：事件名称
      function：事件处理函数
    */
    btn.onclick = function () {
      console.log('小艾同学');
    }

```
```html
 <body>

    <div id="box">哈哈哈哈</div>
  <script>
//方式二：监听绑定
    // 1.获取元素
    let box = document.getElementById('box')

    //事件源：box
    //事件名：click
    //处理函数：function
    box.addEventListener('click',function () {
      box.className += 'big'
		})
  </script>
  </body>
```
**传统事件和监听事件的去呗** 

- 传统事件都带'on'
- 监听事件都不带'on'，但是事件要用引号抱起来
- 传统事件只能绑定一种事件处理函数
- 监听事件可以支持绑定多个事件句柄
```html
    
		btn.onclick = function () {
      console.log('123')
    }    
    // 绑定多个事件，只有最有一个生肖
    btn.onclick = function () {
      console.log('456')
    }    

    //可以无限绑定  
		btn.addEventListener('click', function () {
      console.log('789')
    })

    btn.addEventListener('click', function () {
      console.log('987')
    })
```
### 2.事件的执行

- 不会立马执行, 当事件被触发的时候才会执行
- 一开始就自己触发自己
```html
    btn.onclick = function () {
      console.log('小艾同学');
    }

		//自己触发自己
    btn.onclick()
```


