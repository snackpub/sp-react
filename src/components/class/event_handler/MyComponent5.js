/**
 * Created by root on 2021/1/24.
 *
 * 属性初始化语法（property initializer syntax)
 * 这种方式既不需要在构造函数中手动绑定this，也不需要担心组件 重复渲染导致的函数重复创建问题。
 * 但是，property initializers这个特性 还处于试验阶段，默认是不支持的
 * 。不过，使用官方脚手架Create React App创建的项目默认是支持这个特性的。
 *  你也可以自行在项目中引入 babel的transform-class-properties插件获取这个特性支持
 *  使用ES 7的property initializers会自动为class中定义的方法绑定this。
 */
import  React, {Component} from "react";
class MyComponent5 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {number: 0};
  }

  // // ES7的属性初始化语法，实际上也是使用了箭头函数
  handleClick = (event) => {
    const number = ++this.state.number;
    this.setState({
      number: number
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.number}</div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }

}

export default MyComponent5;