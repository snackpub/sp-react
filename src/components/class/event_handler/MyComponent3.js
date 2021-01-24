/**
 * Created by root on 2021/1/1.
 */
import  React, {Component} from "react";
class MyComponent3 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {number: 0};
  }

  // 每点击一次Button，state中的number增加1
  handleClick(event) {
    const number = ++this.state.number;
    this.setState({
      number: number
    })
  }


  render() {
    return (
      <div>
        <div>{this.state.number}</div>
        {/** 事件属性赋值和this绑定同时*/}
        <button onClick={this.handleClick.bind(this)}>
          Click
        </button>
      </div>
    )
  }

}

export default MyComponent3;