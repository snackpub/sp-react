import React, {Component} from "react";


function PostItem2(props) {

  //当发生点赞行为时，调用props.onVote方法将点赞逻辑交给 PostList中的handleVote方法处理
  const handleClick = () => {
    props.onVote(props.post.id);
  };
  const {post} = props;

  return (<li>
    <div> {post.title} </div>
    <div> 创建人：<span>{post.author}</span></div>
    <div> 创建时间：<span>{post.date}</span></div>
    <div>
      <button onClick={handleClick}>点赞</button>
      &nbsp; <span>{post.vote}</span></div>
  </li> );
}

export default PostItem2;