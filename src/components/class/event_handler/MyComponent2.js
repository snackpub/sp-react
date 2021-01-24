/**
 * Created by root on 2021/1/1.
 */
import  React, {Component} from "react";
class MyComponent2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {number: 0};
    // 这个方法的this绑定到当前对象
    this.handleClick = this.handleClick.bind(this);
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
        {/*直接将组件的方法赋值给元素的事件属性*/}
        <button onClick={this.handleClick}>
          Click
        </button>
      </div>
    )
  }

}

export default MyComponent2;