import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {element}  from './jsx/J1.js';
import {funcEle as funcele, App2, CommentSimp}  from './components/func/func1.js';
import {MyFunc2} from './components/func/func2';
import Clock from './components/class/Clock';


const user = {name: "qiuhaijun", avatarUrl: "avatarUrl"}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          {element}
          {funcele}
          <App2/>
          {/*组件的参数名称要与props.后面的属性名对应*/}
          <CommentSimp author={user} text="2020/11/1日，今晚正在学习react基础." date={new Date().toLocaleTimeString()}/>
          <MyFunc2/>
          <Clock />
        </header>
      </div>
    )
  }
}

export default App;
