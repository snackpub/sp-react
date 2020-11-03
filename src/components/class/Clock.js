import React from 'react';


/**
 * 状态（state）和生命周期（Lifecycle）
 *
 * @author snackpub
 * @date 2020/11/3.
 */
class Clock extends React.Component {

  // 添加一个构造函数初始化 this.state，Class 组件总是先调用构造函数
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // 生命钩子函数
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
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
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}


export default Clock;