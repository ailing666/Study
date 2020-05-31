# 13-WabApi中的节点

## 一、节点的概述
节点（Node）：构成 HTML 网页的最基本单元。网页中的每一个部分都可以称为是一个节点，比如：html标签、属性、文本、注释、整个文档等都是一个节点。
**在HTML当中，一切都是节点**
整个html文档就是一个文档节点。所有的节点都是Object。
## 二、12种节点
| 节点 | nodeType | nodeName | nodeValue |
| --- | --- | --- | --- |
| 元素节点 | Node.ELEMENT_NODE(1) | 大写的标签名 | null |
| 属性节点 | Node.ATTRIBUTE_NODE(2) | 属性名 | 属性值 |
| 文本节点   | Node.TEXT_NODE(3) | '#text' | 内容值 |
| CDATA节点 |  Node.CDATA_SECTION_NODE(4) | '#cdata-section' | CDATA区域中的内容  |
| 实体引用名称节点  | Node.ENTRY_REFERENCE_NODE(5) | 实体引用的名称 | null |
| 实体名称节点 | Node.ENTITY_NODE(6) | 实体名称 | null |
| 处理指令节点  | Node.PROCESSING_INSTRUCTION_NODE(7) | target | entire content excluding the target |
| 注释节点  |  Node.COMMENT_NODE(8) | '#comment' | 注释的内容 |
| 文档节点 | Node.DOCUMENT_NODE(9) | '#document' | null |
| 文档类型节点 | Node.DOCUMENT_TYPE_NODE(10) | doctype的名称 | null |
| 文档片段节点 | Node.DOCUMENT_FRAGMENT_NODE(11) | '#document-fragment' | null |
| DTD声明节点 | Node.NOTATION_NODE(12) | 符号名称 | null |

常见节点：

- 文档节点（文档）：整个 HTML 文档。整个 HTML 文档就是一个文档节点。

- 元素节点（标签）：HTML标签。

- 属性节点（属性）：元素的属性。

- 文本节点（文本）：HTML标签中的文本内容（包括标签之间的空格、换行）。
## 三、节点的操作
### 1.查
#### 1.1 找孩子
##### 获取所有的子节点
返回值是包含所有子节点的伪数组
```html
父.childNodes;//只获取亲儿子
```
换行是节点吗？
当换行和文本相连接时，换行和文本就是一个文本节点
当换行和元素节点或注释连接时，就是一个单独的文本节点
![](https://cdn.nlark.com/yuque/0/2020/png/1307005/1588256442032-ea22262d-96f2-467d-aecd-2ebcfa7cd196.png#align=left&display=inline&height=954&margin=%5Bobject%20Object%5D&originHeight=954&originWidth=989&size=0&status=done&style=none&width=989)
##### 获取所有的子元素节点
返回值是包含所有子元素节点的伪数组
```html
父节点.children; 
父节点.childElementCount//获取子元素节点的个数
```


##### 获取第一个子元素节点
```html
父节点.firstElementChild || 父节点.children[0]
```


##### 获取最后个子元素节点
```html
父节点.lastElementChild|| 父节点.children[父节点.children.length - 1]
```
#### 1.2 找兄弟
##### 上一个兄弟元素
```html
当前元素.previousElementSibling;
```
##### 下一个兄弟元素
```javascript
box.nextElementSibling;
```
#### 1.3 找爸爸
```javascript
子.parentElement;
```
### 2.创
```javascript
document.write('创建的元素')
document.createElement('创建的元素');
box.innerHTML = '创建的元素'
```
#### 2.1 document.write

  - 如果页面文档流加载完毕，再调用这句话会导致页面重绘
> 原理：页面从上往下加载的时候，会开启一个文档流，当页面加载完，文档流就会关闭。
> document.write的本意就是在文档流上写入内容。如果页面没加载完成，文档流还是开着的，document.write直接在这个文档流上写东西
> 如果页面加载完成了，还是用document.write写东西，会重新开启一个新的文档流，往新的文档流上写东西，旧的文档流就被新的文档流覆盖了。



#### 2.2 innerHTML

  - 如果原来有内容的话，使用innerHTML会把原先的内容给干掉。
  - 执行效率
    - 字符串拼接形式创建对象，效率最低
    - 用数组方式效率最高



#### 2.3 createElement

  - 在内存里面创建了一个元素,并返回这个元素
  - 效率一般
### 3.增
#### 3.1 appendChild()
在父元素的末尾添加子元素，类似于数组中的push方法
```javascript
父元素.appendChild(子元素);
```
#### 3.2 insertBefor()
```javascript
父元素.insertBefore(新元素, 要替换的元素);//将新元素插入到要替换的元素前
```
### 4.删
```javascript
父元素.removeChild(子元素);//只能由父元素调用
```
### 5.克隆

- false：默认值：是浅复制，只会复制标签，节点本身，不会复制节点的孩子。

- true:   深度复制，会复制标签，还会复制标签的所有内容 

```javascript
box.cloneNode();// 浅克隆，只有克隆标签与属性

box.cloneNode(true);// 深克隆，克隆标签属性还有内容
```


源码
```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <ul id="father">
      啦啦啦
      <li>小艾同学1</li>
      <li>小艾同学2</li>
      <li>小艾同学3</li>
      <li class="my">小艾同学4</li>
      <li>小艾同学5</li>
      <li>小艾同学6</li>
    </ul>

    <script>
      let father = document.querySelector('#father');
      let my = document.querySelector('.my');
      // 1.获取所有的子节点
      console.log(father.childNodes); //13个//第一行的换行和text连着算一个，其余的换行+类名共计13
      // 2.获取所有的子元素节点
      console.log(father.children); //HTMLCollection(6) [li, li, li, li.my, li, li]

      // 3.第一个子元素
      console.log(father.children[0]); //<li>小艾同学1</li>

      // 4.最后一个子元素
      console.log(father.children[father.children.length - 1]); //<li>小艾同学6</li>

      // 5.获取上一个元素节点
      console.log(my.previousElementSibling); //<li>小艾同学3</li>

      // 6.获取下一个元素节点
      console.log(my.nextElementSibling); //<li>小艾同学5</li>

      // 7.获取父元素
      console.log(my.parentElement); //ul

      // 8.创建节点
      let news = document.createElement('p');
      news.innerText = 'hello';

      // 9.添加元素
      father.appendChild(news);

      // 10.浅客隆 => 只克隆当前标签及其属性
      let copy1 = my.cloneNode();
      console.log(copy1); //<li class="my"></li>

      // 11.深克隆 => 我全都要！
      let copy2 = my.cloneNode(true);
      console.log(copy2); //<li class="my">小艾同学4</li>

      // 12.插入元素
      father.insertBefore(copy2, my);
    </script>
  </body>
</html>

```

  -  
