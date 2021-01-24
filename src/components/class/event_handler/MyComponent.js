/**
 * Created by root on 2021/1/1.
 *
 * 直接在React元素中采用箭头函数定义事件的处理函数
 *
 * 因为箭头函数中的this指向的是函数定义时的对象，
 * 所以可以保证 this总是指向当前组件的实例对象。
 * 当事件处理逻辑比较复杂时，如果 把所有的逻辑直接写在onClick的大括号内，
 * 就会导致render函数变得臃 肿，不容易直观地看出组件的UI结构，
 * 代码可读性也不好。这时，可以 把逻辑封装成组件的一个方法，然后在箭头函数中调用这个方法
 */
import  React, {Component} from "react";
class MyComponent extends React.Component {

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
        <button onClick={(event) => {
          console.log(this.state.number);
          console.log('event', event);
          this.handleClick(event);
        }}>
          Click
        </button>
      </div>
    )
  }

}

export default MyComponent;