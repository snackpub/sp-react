/**
 * Created by root on 2020/10/15.
 */

import React from "react";
import logo from '../logo.svg';
/**
 * JSX内嵌的表达式
 * JSX 中通过花括号（{}）嵌入任何 JavaScript 表达式，比如：2+2，user.firstName， formatName(user) 都是合法的表达式
 *
 * JSX可读性更好的写法
 * 将 JSX 分割成多行来书写，这不是必须的，但是这么做的时候，我
 * 们建议你用圆括号包裹内容，以避免由分号自动插入带来的错误
 *
 */

// JSX 标签语法
// const ele = <h1>Hello,JSX</h1>;

const user = {
  firstName: "Harper",
  lastName: "Perez",
  avatarUrl: {logo}
};

// 使用引号来指定一个 string 类型的字面量作为属性,React DOM 用驼峰标识属性命名规约，替代了HTML的属性名称.例如class在react中为className，tabindex为tabIndex
const ele1 = <div tabIndex="0"></div>;
// 花括号来嵌入一个 JavaScript 表达式作为属性值
const ele2 = <img src={user.avatarUrl} className="App-logo" alt="logo"/>; // 空标签可直接闭合


function formatName(user) {
  return user.firstName + " " + user.lastName;
}

//  JSX 也是一个表达式
function getGreeting(user) {
  // 可以将 JSX 用在 if 语句和 for
  // 循环中，也可以将它赋给一个变量，也可以将其作为参数传递和函数返回值使用
  if (user) {
    return <h3>Hello,{formatName(user)}</h3>;
  }
  return <h3>Hello,Stranger.</h3>
}


// JSX 中内嵌表达式
const element = (
  <h3>
    {getGreeting(user)}
    {/*{ele2}*/}
  </h3>
);


// JSX 阻止注入攻击
// const title = response.potentiallyMaliciousInput;
// // This is safe:
// const ele3 = <h1>{title}</h1>;

/*
 默认情况下，React DOM 在渲染元素之前已经将嵌入的每一个值都转义过了。所以这才确保
 了你应用程序中的不明代码不可能被注入进来。在渲染之前，所有值都转换成了字符串。这
 有利于阻止 XSS（cross-site-scripting）攻击。
 */


// JSX 表现对象
// Babel 将 JSX 编译成 React.createElement() 方法的调用。
// 下面两个例子是一样的：
const ele4 = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
// React.createElement() 提供几项检查确保你的代码不会出错，但实际上它是这样创建的.
const ele5 = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello,Word'
  }
};
// 这些对象叫做 React Elements(React 元素)，你可以将他们理解成你想在页面看到的样子.React 渲染这些对象，用它们来创建
// 这些DOM,并且保持实时更新.

export  {element};