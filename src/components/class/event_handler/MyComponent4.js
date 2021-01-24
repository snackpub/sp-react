/**
 * Created by root on 2021/1/1.
 */
import  React, {Component} from "react";
class MyComponent4 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {list: [1, 2, 3, 4], current: 1};
  }

  // 点击每一项时，将点击项设置为当前选中项，因此需要把点击项作为参数传 递
  handleClick(item, event) {
    this.setState({
      current: item
    });
  }

  /**
   * 使用bind会创建一个新的函数，因此这种写法依然存在每次render
   都会创建一个新函数的问题。但在需要为处理函数传递额外参数时，这种写法就有了用武之地。例如，下面的例子需要为handleClick传入参数
   * @returns {XML}
   */
  render() {
    return (
      <ul>
        {this.state.list.map((item) => (
          /* bind除了绑定this，还绑定item作为参数，供 handleClick使用 */
          <li className={this.state.current === item ? 'current' : ''}
              onClick={this.handleClick.bind(this, item)}> {item} </li> ))}
      </ul>
    );
  }

}

export default MyComponent4;