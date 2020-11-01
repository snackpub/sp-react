/**
 * Created by root on 2020/11/1.
 */

import React from 'react';
// 元素渲染

// 元素是react应用中最小的构建（building block）
// 一个元素描写了你在页面上想看到的内容.
const element = <h1>Hello,React</h1>;
// 与浏览器 DOM 不同，React 元素都是很容易创建的简单对象，React DOM 更新 DOM 来匹配React 元素

// 1. 将元素渲染成DOM


// 2. 更新已经渲染的元素
// React 元素都是不可变的。一旦你创建了一个元素，你就不能再去改变它的子元素或者属性
// 了。元素就像电影中的一个帧一样，在某一时刻呈现出特定的画面。
// 根据我们已有的知识，更新 UI 唯一的方式只有创建一个元素，然后传递给 ReactDOM.render()函数
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello,tick</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// 3. React 只更新有必要的更新的元素
// ReactDOM 将元素及其子元素 跟过去的进行比较，只更新改变的状态，其他的不改变。
// 如上例的运行结果我们可以在浏览器的工具栏查看