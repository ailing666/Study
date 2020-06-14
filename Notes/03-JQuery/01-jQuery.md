# 21-jQuery

### 一、jQuery简介
#### 1.概念
jQuery是一个jQuery是一个快速的、轻量的、功能丰富的js库。
设计宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。
#### 2.使用步骤

- 下载jquery ： [https://jquery.com/](https://jquery.com/)
- 引入jquery文件
- 入口函数
#### 3.jQuery入口函数

1. 相当于原生JS中的DOMContentLoaded
1. 原生js中的load是等页面文档，外部js文件，css文件，图片加载完毕才执行内部代码，而JQ入口函数则是等DOM结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成。
```javascript
    //第一种 （推荐使用）
    $(function () {
      //do something
    })

    //第二种
    $(document).ready(function () {
      //do something
    })
```
#### 4.JQ中的顶级对象$

- $是jQuery的别称，可以用jQuery替代$
- $是jQuery中的顶级对象，相当于js中的window。
- 用$包裹的元素就能转为jq对象，调用jq的方法

作用：

- 参数为函数：入口函数
- 参数为css选择器：获取元素
- 参数为DOM对象：将DOM对象转为jQ对象
- 参数为html字符串：创建节点
### 二、jQuery对象和DOM对象
#### 1.概念

1. DOM对象：用原生JS获取到的对象就是DOM对象
1. jQuery对象：用jQuery方法获取的元素就是jQuery对象
1. jQuery对象的本质：就是DOM对象的包装集(伪数组形式储存)
#### 2.区别

1. jQuery对象和DOM对象的方法不能混用
```javascript
    // 1.用原生js获取的对象叫dom对象
    let box = document.querySelector('.box');
    console.log(box);//<div class="box" style="background-color: pink;">a </div>

    // DOM只能用原生js的方法
    box.style.backgroundColor = "pink"
    //error
    // box.css("backgroundColor", "red")//Uncaught TypeError: box.css is not a function


    // 2.用JQ获取的是jq对象
    //jq对象是一个伪数组
    console.log($(".box"));//S.fn.init [div.box, prevObject: S.fn.init(1)]
    // jq对象只能用jq的方法
    $(".box").css("backgroundColor", "red")
		//error
    // $(".box").style.style.backgroundColor = "pink"//Uncaught TypeError: Cannot read property 'style' of undefined
```
#### 3.转换

- DOM对象转jQuery对象
   - $(DOM对象)
```javascript
    // 3.bom转jq => 用$包裹dom对象，并去掉引号
    $(box).hide()
```

- jQuery对象转DOM对象
   - $('jQ对象')[0] 
   - $('jQ对象').get(0)
```javascript
    // 4.jq转bom => 在jq对象后面加上索引值
    $(".box")[0].style.display = "block"
    // 或者 get() => 也是跟上索引值
    $(".box").get(0).style.backgroundColor = "blue"
```
###  三、jQuery选择器
#### 1.jQ完全兼容css选择器
都是css的写法

| 名称 | 用法 | 描述 |
| :--- | :--- | :--- |
| ID选择器 | $(“#id”); | 获取指定ID的元素 |
| 类选择器 | $(“.class”); | 获取同一类class的元素 |
| 标签选择器 | $(“div”); | 获取同一类标签的所有元素 |
| 并集选择器 | $(“div,p,li”); | 使用逗号分隔，只要符合条件之一就可。 |
| 交集选择器 | $(“div.redClass”); | 获取class为redClass的div元素 |
| 子代选择器 | $(“ul>li”); | 使用>号，获取儿子层级的元素，注意，并不会获取孙子层级的元素 |
| 后代选择器 | $(“ul li”); | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等 |



#### 2.过滤选择器
都是带冒号的

| 名称 | 用法 | 描述 |
| :--- | :--- | :--- |
| :eq（index） | $(“li:eq(2)”).css(“color”, ”red”); | 获取到的li元素中，选择索引号为2的元素，索引号index从0开始。 |
| :odd | $(“li:odd”).css(“color”, ”red”); | 获取到的li元素中，选择索引号为奇数的元素 |
| :even | $(“li:even”).css(“color”, ”red”); | 获取到的li元素中，选择索引号为偶数的元素 |
| :first | $(“li:first”).css(“color”, ”red”); | 获取到的li元素中的第一个 |
| :last | $(“li:last”).css(“color”, ”red”); | 获取到的li元素中的最后一个 |

```javascript

  <div class="box">
    <ul>
      <li>1</li>
      <li>2</li>
      <li class="item">3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <ol>
      <li>1</li>
      <li>2</li>
      <li class="inner">3</li>
      <li>4</li>
    </ol>
    <input type="password" value="">
    <input type="text" value="">
  </div>
  <script>
    // 1.；类选择器
    $('.box').css("backgroundColor", "pink")

    // 2.子代选择器
    $(".box > ul").css("fontSize", 20)

    // 3.后代选择器
    $("ul li").css("height", 50)

    //4.交集选择器
    $("li.item").css("backgroundColor", "red")

    //5.并集选择器
    $(".item,.inner").css("color", "green")

    // 6.第几个
    $("ul li:eq(2)").css("width", 200)

    // 7.奇数
    $("ul li:odd").css("background", "yellow")

    // 8.偶数
    $("ul li:even").css("background", "blue")

    // 9.属性选择器
    $("input[type = text]").css("background", "blue")

    //10.最后一个
    $("ol li:last").text('最后一个小艾同学')

    //11.第一个
    $("ol li:first").text('第一个小艾同学')
  </script>
```
#### 3.筛选选择器
都是方法，带括号的哦

| 名称 | 用法 | 描述 |
| :--- | :--- | :--- |
| children(selector) | $(“ul”).children(“li”) | 获取当前元素的所有子元素中的li元素 |
| find(selector) | $(“ul”).find(“li”); | 获取当前元素中的后代元素中的li元素 |
| siblings(selector) | $(“#first”).siblings(“li”); | 查找兄弟节点，不包括自己本身。 |
| parent() | $(“#first”).parent(); | 查找父亲 |
| eq(index) | $(“li”).eq(2); | 相当于`$(“li:eq(2)”)`,index从0开始 |
| next() | $(“li”).next() | 找下一个兄弟 |
| prev() | $(“li”).prev() | 找上一次兄弟 |

```javascript
<body>
  <div class="box">
    <p>亲儿子</p>
    <ul>
      <li>1</li>
      <li>2</li>
      <li class="item">3</li>
      <li>4
        <p>野孩子</p>
      </li>
      <li>5</li>
    </ul>
    <ol>
      <li>1</li>
      <li>2</li>
      <li class="inner">3</li>
      <li>4</li>
    </ol>
  </div>
  <script>
    // 1.找父元素(最近一级)
    console.log($(".item").parent());//ul

    // 2.找亲儿子
    $(".box").children("p").css("background", "pink")

    // 3.找所有孩子
    $(".box").find("p").css("fontSize", 30)

    // 4.除了这个元素外的所有兄弟
    $('.item').siblings("li").css('color', "green")

    // 5.当前元素的上一个兄弟
    $(".inner").prev("li").text('上一个')

    // 6.当前元素前面的所有兄弟
    $(".inner").prevAll("li").css("color", "blue")

    // 7.当前元素下一个兄弟
    $(".inner").nextAll("li").text('下一个')

    //8.当前元素后面的所有兄弟
    $(".inner").nextAll("li").css("color", "red")

    // 9.第n个元素（推荐第二种）
    $("ul li:eq(0)").css("backgroundColor", "skyblue")//eq()里面的值是固定的
    $("ul li").eq(0).css("backgroundColor", "skyblue")//eq()里面的值可以是一个变量

    //10.查询该元素是否有这个类名:有就返回true，没有就是false
    console.log($("ul li").eq(2).hasClass("item"));//true
    console.log($("ul li").eq(1).hasClass("item"));//false

    // 11.返回指定的祖先元素
    console.log($("p").parents(".box"));
  </script>
```
###  四、jQ中操作css

- 作用：设置或修改css样式
- 参数：
   - 只写属性：就是获取样式
   - 一个属性名，一个属性值：就是设置单个css样式
      - 属性名必须加引号
      - 中间用逗号隔开
      - 属性值是数字就不用加引号和单位
   - 一个对象：设置多个css样式
      - 和对象的书写规范一致，键值对
      - 属性不用加引号
      - 属性值是数字就不用加引号和单位
```javascript
  <script>
    // 1.只写属性，代表查询
    console.log($(".box p").eq(0).css("width"));

    // 2.属性加参数
    $(".box p").eq(2).css("backgroundColor", "pink")

    //3.多个属性用对象修改
    $(".box p").eq(1).css({
      width: 500,
      backgroundColor: "green",
      fontSize: 20
    })
  </script>
```
### 五、jQ中操作class

- 添加类名
   - addClass(name)
- 移除类名
   - removeClass(name)
      - 无参:就是删除所有的类名
- 切换类名
   - toggleClass(name)
- 判断是否有该类名
   - hasClass(name)
   - 有就返回true，没有就返回fasle
```javascript
<style>
  div {
    width: 150px;
    height: 150px;
    background-color: pink;
    margin: 100px auto;
    transition: all 0.5s;
  }

  .current {
    background-color: red;
    transform: rotate(360deg);
  }

  .big {
    transform: scale(2);
  }

  .bdr {
    border-radius: 50%;
    background-color: green;
  }
</style>

<body>
  <div class="current big"></div>

  <script>
    // 1.删除类名:无参，删除所有的类名，但是class还在
    // $("div").removeClass()//<div class=""></div>

    //一个参数，就是删除这个类名
    $("div").removeClass("big")//根那个类名就删除哪一个

    // 2.添加类名：在原有的基础上添加，不会影响原有类名
    $("div").addClass("bdr")

    // 3.切换类名:有这个类名就移除，没有就添加
    $("div").click(function () {
      $(this).toggleClass("bdr big")
      //4.判断是否含有某个类名:有就返回true
      console.log($("div").hasClass("bdr"));
    })
  </script>
```
### 六、jQ操作属性
#### 1.attr操作自定义属性
主要用来操作自定义属性(index,class)
```javascript
  <img src="" alt="a" tittle="b" class="xa">

  <script>
    $(function () {
      // 1.获取：传入需要的属性
      console.log($("img").attr("class"));

      //2.设置单个属性
      $("img").attr("tittle", "小艾同学")

      //3.设置多个属性
      $("img").attr({
        alt: "嘤嘤嘤",
        class: "嘿嘿嘿"
      })

      //4.移除属性
      $("img").removeAttr("tittle")
    })
  </script>
```
#### 2.prop操作固有属性
主要是用来操作固有属性(src,checked)
```javascript
  <input type="checkbox" name="" id="check">
  <script>

    $(function () {
      // 1.设置属性
      $("input").prop("checked", true)
      $("input").click(function () {
        // 2.获取属性
        console.log($("input").prop("checked"));
      })
    })
  </script>
```
##### 3.date操作缓存属性
```javascript
<body>
  <a href="JavaScript:;" title="都挺好" class="hah">都挺好</a>
  <input type="checkbox" name="" id="" checked>
  <div index="1" data-index="2">我是div</div>
  <span>123</span>

  <script>
    // 1.获得属性：只能获得元素的固有属性
    console.log($("div").prop("index")); //undefined
    console.log($("a").prop("href"));
    console.log($("a").prop("class"));

    // 2.获取元素自定义属性
    console.log($("div").attr("index"));//1

    // 3.获取date前缀的属性 => date前缀的数据存放在元素的内存里面
    console.log($("div").attr("date-index"));//undefined
    console.log($("div").data("index"));//2 => 返回的数字类型
  </script>
</body>
```
### 七、动画

##### 1.显示/隐藏/切换
show/hide/toggle([speed], [easing], [callback]);

- speed(可选)：动画的执行时间,以ms为单位
   - 1.如果不传，就没有动画效果。如果是slide和fade系列，会默认为normal
   - 2.毫秒值(比如1000),动画在1000毫秒执行完成(推荐)
   - 3.固定字符串，slow(200)、normal(400)、fast(600)，如果传其他字符串，则默认为normal。
- easing(可选)： 动画效果，默认是swing，慢-快-慢，提供了一个linear 匀速的效果
- callback(可选):执行完动画后执行的回调函数
- 三个参数都没传就没有动画效果


```javascript
    // 参数：速度，切换效果，回调函数
    $(function () {
      $("button").eq(0).click(function () {
        $(".box").show(1000)
      })
      $("button").eq(1).click(function () {
        $(".box").hide(500, "linear", function () {
          alert('小艾同学');
        })
      })
      $("button").eq(2).click(function () {
        $(".box").toggle(300, "linear")
      })
    })
```
##### 2.下拉/上拉/切换
参数设置同show()
区别：slide系列三个参数都不写，也是有动画效果的
```javascript
    // 参数：速度，切换效果，回调函数
    $(function () {
      $("button").eq(0).click(function () {
        $(".box").slideUp(1000)
      })
      $("button").eq(1).click(function () {
        $(".box").slideDown(500)
      })
      $("button").eq(2).click(function () {
        $(".box").slideToggle(500, "linear", function () {
          alert('小艾同学');
        })
      })
    })
```
##### 3.淡入/淡出/切换/修改透明度
参数说明：和show一致，但是三个参数都不写，默认有动画效果
```javascript
    $(function () {
      // 三个参数：速度，切换方式，透明度  
      $("button").eq(0).click(function () {
        $("div").fadeIn(200)
      })
      $("button").eq(1).click(function () {
        $("div").fadeOut(300, function () {
          alert('123');
        })
      })
      $("button").eq(2).click(function () {
        $("div").fadeToggle(300, "linear")
      })
    })
```
修改透明度
fadeTo( duration, opacity ,easing, callback )

- duration(必写):动画持续时长
- opactiy(必写):透明度，取值0-1
- easing(可选)： 动画效果，默认是swing，慢-快-慢，提供了一个linear 匀速的效果
- callback(可选):动画执行完后执行的函数
```javascript
      // 修改透明度，必写属性：第一个是速度，第二个是透明度，取值0-1
      $("button").eq(3).click(function () {
        $("div").fadeTo(100, 0.5)
      })
```
#### 4.自定义动画
$(selector).animate({params},[speed],[easing],[callback]);

- {params}(必选)：要执行动画的CSS属性，带数字
- speed(可选)：执行动画时长
- easing(可选): 执行效果，默认为swing（缓动）  可以是linear(匀速)
- callback(可选)：动画执行完后立即执行的回调函数
```javascript
    $(function () {
      $("div").click(function () {
        // 参数：要修改的css样式，运动速度，运动曲线，回调函数
        $(this).animate({
          width: 200,
          height: 400,
          // backgroundColor: "green" 无法修改背景颜色
          fontSize: 30,
          margin: 20,
          paddingTop: 20,
          // textAlign: "center" 无效
          lineHeight: 400 + "px"
        }, 500)
      })
    })
```
#### 5.动画列队
在同一个元素上执行多个动画，那么对于这个动画来说，后面的动画会被放到动画队列中，等前面的动画执行完成了才会执行。
当给元素添加多个动画效果的时候，jQ把元素需要做的动画添加到了元素的动画队列中，元素在执行动画的时候，按照队列的顺序依次来执行
优点：能使动画按顺序有条不紊的执行
缺点：给元素不停的添加动画，元素就会不停的执行动画效果，直到列队中的动画执行完毕才会停下来


##### 停止动画列队 
stop( [clearQueue ] [, jumpToEnd ] )

- clearQueue(可选):_是_否清空动画队列，默认为false，不清除  true 清除
- jumpToEnd(可选) : 是否要跳转到当前正在执行的动画的最终状态 true 跳转，默认值false  不跳转
```javascript
            $("button").eq(1).click(function () {
                $("div").stop(true, true);
            })
```
### 八、jQ节点操作
##### 1.创建节点
$(htmlStr)

- htmlStr:一个html字符串
```javascript
var $links = $('<h2><a href="http://www.baidu.com">百度一下</a></h2>'); 
```
##### 2.添加节点
本质上是appendChild的封装

- append()：parent.append(child)
   - 将child添加到parent里面的最后面
- appendTo()：child.appebdTo(parent)
   - 作用和append()一样，区别是语法
- prepend()：parent.prepend(child)
   - 将child添加到parent里面的最前面
- prependTo()：child.prependT(parent)
   - 作用和prepend()一样，区别是语法
- after()：A.after(B)
   - 在A的后面添加B
- before()：A.before(B)
   - 在A的前面添加B
- 以上方法共同点：
   - 如果添加的元素是页面中本来就存在的，实际上就是剪切操作，将该元素挪动
   - 如果是页面中没有的元素，就在对应位置添加这个元素
```javascript
    $(function () {
      // 1.创建节点
      let p = $("<p>我是加进来的</p>")

      //2.在最后面添加
      //添加页面上没有的元素
      p.appendTo($("ul"))
      // $("ul").append(p)   等同于这种写法
      //挪动页面上本来有的元素
      $("ul").append($("li:first"))

      //3.在最前面添加
      //添加页面中没有的元素
      $("ul").prepend(p)
      // p.prependTo($("ul")) //等同于这种写法
      //挪动页面中有的元素
      $("ul").prepend($("li:last"))//根据当前

      //4.在前面添加
      $("ul").before("<div>前面</div>")

      // 5.在后面添加
      $("ul").after("<div>后面</div>")
    })
```


##### 3.删除节点

- empty()：清空节点
   - 清除该元素里面的所有内容，不包括他自己
   - empty()和html("")的异同
      - 都能清空内容，且保留自己
      - empty()推荐使用：会清空子元素的所有内容，包括子元素上绑定的事件
      - html("")：会造成内存泄漏，绑定的事件不会被清除
         - 暴力设置innerHtml = ''
         - 内存泄漏可以定义为程序不再使用或不需要的一块内存，但是由于某种原因没有被释放仍然被不必要的占有
- remove()：删除
   - 删除自己，该元素里面的节点也被删除


```javascript
      // 6.清空节点
      $("ul").empty()

      // 7.删除节点
      $("ul").remove()
			$("ul").html("")
```
##### 4.克隆节点

- clone()
   - 参数：默认false，不克隆事件，true克隆事件
   - 返回值：克隆的元素，不会影响原元素
```javascript
      // 8.克隆节点
      $("ul>li>button").click(function () {
        console.log(1);
      })
      // 不加参数就是深克隆
      let newBtn = $("ul>li:eq(1)").clone()
      //true，会克隆事件
      let newBtn2 = $("ul>li:eq(1)").clone(true)
      $("ul").append(newBtn)
      $("ul").append(newBtn2)
```
### 九、jQ特殊属性的操作
##### 1.val()
用于设置或获取表单的元素的值
##### 2.html()和text()
用于设置或获取普通元素的值

- html()能解析html标签
- text()无法解析html标签


##### 3.width()和height()

- 获取时返回的时候一个没有单位的数字类型
- width()/height() ：获取的是width/height
- innerWidth()/innerHeight()：获取的是width/height + padding
- outerWidth()/outerHeight()：获取的是width/height + padding + border 
- outerWidth(true)/outerHeight(true)：获取的是width/height + padding + border + margin

##### 4.scrollTop和scrollLeft()
```javascript
  <style>
    div {
      width: 300px;
      height: 200px;
      padding: 20px;
      margin: 10px;
      background-color: pink;
      border: 10px solid #000;
    }

    button {
      position: fixed;
      bottom: 0;
      right: 0;
    }
  </style>
</head>

<body>

  <input type="text" value="小艾同学">
  <div></div>
  <p></p>
  <button style="display: none;">回到顶部</button>

  <script>

    $(function () {
      // 1.无参是获取
      console.log($("input").val());//小艾同学
      //修改
      $("input").val("真棒棒")

      // 2.html和text
      // html能解析html标签
      $("div").html("<h1> 嘤 嘤 嘤 </h1>")
      $("p").text("<h1>嘤嘤嘤</h1>")

      // 获取
      console.log($("div").html());//<h1> 嘤 嘤 嘤 </h1>
      console.log($("div").text());// 嘤 嘤 嘤 


      // 3.获取宽高
      //css获取的是带单位的字符串
      console.log($("div").css("width"));//300px
      // width()/height()获取的是纯数字
      console.log($("div").width());//300

      // 设置
      $("div").height(88)
      $("html").height(8888)

      //innerWidth() --> width+padding
      console.log($("div").innerWidth());//340

      //outerWidth()  --> width+padding+border
      console.log($("div").outerWidth());//360

      //outerWidth(true)  --> width+padding+border+margin
      console.log($("div").outerWidth(true));//380

      //可视区的宽高
      console.log($(window).width());
      console.log($(window).height());

      //WebApi中获取页面的被卷曲的距离
      // window.pageYoffset || document.documentElement.scrollTop || document.body.scrollTop

      $(window).scroll(function () {
        $(window).scrollTop() > 500 && $("button").show()
        // jQ获取
        console.log($(window).scrollTop());
      })
      $("button").click(function () {
        //设置
        $(window).scrollTop(0)
      })
    })
  </script>
```
### 十、jQ事件
##### 1.简单事件绑定


