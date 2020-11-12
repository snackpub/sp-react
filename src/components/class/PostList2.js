/**
 * Created by root on 2020/11/8.
 */
import React, {Component} from 'react';
import PostItem from './PostItem2';

class PostList2 extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
    this.timer = null; // 定时器
    this.handleVote = this.handleVote.bind(this); //ES 6 class中，必须手动绑定方法this的指向
  }


  componentDidMount() {
    // 用setTimeout模拟异步从服务器端获取数据
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {id: 1, title: "大家一起来讨论React吧", author: "张 三", date: "2017-09-01 10:00", vote: 0},
          {id: 2, title: "前端框架，你最爱哪一个", author: "李 四", date: "2017-09-01 12:00", vote: 0},
          {id: 3, title: "Web App的时代已经到来", author: "王 五", date: "2017-09-01 14:00", vote: 0}]
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer); // 清除定时器
    }
  }

  handleVote(id) {
    //根据帖子id进行过滤，找到待修改vote属性的帖子，返回新的posts对象
    const posts = this.state.posts.map(item => {
      // console.log('{...item}', {...item, vote: ++item.vote});
      const newItem = item.id === id ? {...item, vote: ++item.vote} : item;
      return newItem;
    });
    // 使用新的posts对象设置state
    this.setState({
      posts
    });


  }

  render() {
    return (<div> 帖子列表：
      <ul>
        {this.state.posts.map(item => <PostItem post={item} onVote={this.handleVote} key={item.id}/>)} </ul>
    </div> );
  }
}

// 使用ES 6 export将PostList作为默认模块导出
export default PostList2;


