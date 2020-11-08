import React from 'react';


function FormattedDate(props) {
  return <h2>现在是{props.date.toLocaleTimeString()}.</h2>;
}


/**
 * 最终我们将实现 tick()函数每秒都会执行一次。它将会使用 this.setState()函数来调度更新组件的状态
 *
 * @author snackpub
 * @date 2020/11/3.
 */
class Clock extends React.Component {

  // 状态（state）和生命周期（Lifecycle）

  // 添加一个构造函数初始化 this.state，Class 组件总是先调用构造函数
  constructor(props) {
    super(props);
    // 能使用state赋值的唯一地方实在构造器中
    this.state = {date: new Date()};
    this.state.commonent = '直接修改state';
  }

  // 生命钩子函数

  // componentDidMount() 钩子在组件输出已经被渲染到DOM 上时运行
  componentDidMount() {
    // 将 timerID 保存在 this 上
    this.timerID = setInterval(
      () => this.tick(),
      1000);
  }

  // 当 Clock 组件从 DOM 中移除的时候，React 调用 componentWillUnmount()这个生命周期函数，此时定时器已经停止工作了。
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // this.setState()函数来调度更新组件的状态
    this.setState({
      date: new Date()
    });
  }


  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is
          {/*render 函数中props使用this.props代替*/}
          {/*{this.props.date.toLocaleTimeString()}*/}
          {/*可以在类式组件使用局部状态和生命周期钩子*/}
        </h2>
        {/*state与props很像，但是它是私有的并且完全由组件控制.
         state是在class中的特性.
         */}
        {/*{this.state.date.toLocaleTimeString()}*/}
        {/*{this.state.commonent}*/}
        <FormattedDate date={this.state.date}/>
      </div>
    );
  }
}


function App() {
  return (
    <div>
      <Clock />
      <Clock/>
      <Clock/>
    </div>
  );
}


// 4. 正确使用 state
// 1. 不能直接修改state
// 2. 状态的更新可能是异步的


export  {Clock, App};