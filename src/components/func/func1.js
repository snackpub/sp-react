/**
 * Created by root on 2020/11/1.
 */

import React from 'react'; // 当使用JSX时react必须在作用域中. 'React' must be in scope when using JSX  react/react-in-jsx-scope

// 函数式组件

// 组件让你可以将 UI 分成独立的、可重用的小部分，并且可以独立的思考每一个部分的用处。
// 概念上来说，组件像是 JavaScript 中的函数。它们接收随意的输入（props），并且返回 React
// 元素来描述页面该呈现的样子

// 定义组件最简单的方式就是写一个 JavaScript 函数：
function Welcome(props) {
  return <h3>Hello, {props.name},这是函数式组件调用.</h3>
}

// 这个函数一个可靠的 React 组件，因为它接收一个“props”对象参数，返回一个 React 元素。
// 我们将这种组件称为函数式的组件，因为它们就是 JavaScript 中的函数。
// 当 React 发现一个自定义的组件，会传递一个 JSX 属性给这个组件作为一个对象。我们将这个对象称为 props。
const funcEle = <Welcome name="Sara"/>;
// 组件的首字母总是要大写，并且该组件要在域中.

// 构成组件

// 组件可以在它们各自的输出中引用其它组件。一个按钮，一个表单，一个对话框，一个屏幕，
// 这些在 React 应用中，都通常被表达为组件

function App2() {
  return (
    <div> {/*组件必须返回一个根元素*/}
      <Welcome name="Sara"/>
      <Welcome name="Cahal"/>
      <Welcome name="Edite"/>
    </div>
  );
}


// 抽取组件

// 不要害怕将一个组件分割成更小的组件。
// 思考如下组件.
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {/*{formatDate(props.date)}*/}
      </div>
    </div>
  );
}
// 该组件接收 author（对象），text（字符串）和 data（日期）作为 props，描述了一个展示在社交媒体网站上的评论信息。
// 由于内嵌的子元素太多，该组件很难修改，而且很难重用它的一部分。我们可以从它来抽取一些组件。

// 抽取Avatar
function Avatar(props) {
  return (
    <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name}
    />
  );
}
// Avatar 组件不需要知道它要在 Comment 组件中被渲染，这也是我们给 prop 一个更通用的名字:name ，而不是 author 的原因。
// 我们建议从组件的角度来命名 props，而不是从使用它的上下文的环境中去命名。

// 抽取用户信息
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user}/>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

// 现在我们简化Comment
function CommentSimp(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  )
}
// 抽取组件可能一开始会显得有点多余，但是在大型应用中，创建可重用的组件是很有用的。
// 如果你的 UI 被使用了很多次（Button，Panel，Avatar），或是本身很复杂，将其创建成一个
// 可重用的组件是一个很好的方案。


// [props]组件是只读的
// 无论是用函数式还是类式的方法创建的组件，都不能修改自身的 props。思考如下的函数：
function sum(a, b) {
  return a + b;
}
// 这种函数叫做 “纯函数”，它们不会改变函数的输入值，而且每次调用的返回结果都是一样的
// 相比之下，下例的函数就不是一个纯函数，因为它改变了函数的输入值：
function withdraw(account, amount) {
  account.total -= amount;
}
// React 是很灵活的，但是它有一个规定：考虑到 props，所有的组件必须具有纯函数一样的行为。
// 当然，应用的 UI 都是动态且可改变的

export {funcEle, App2, CommentSimp};