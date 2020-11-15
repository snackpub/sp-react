import React, {Component} from "react";

import PropTypes from 'prop-types';

import './css/PostItem2.css'

PostItem2.propTypes = {
  post: PropTypes.shape({
    // PropTypes.object
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string.isRequired,
    vote: PropTypes.number
  }).isRequired,
  onVote: PropTypes.func.isRequired
};

function PostItem2(props) {

  //当发生点赞行为时，调用props.onVote方法将点赞逻辑交给 PostList中的handleVote方法处理
  const handleClick = () => {
    props.onVote(props.post.id);
  };
  const {post} = props;

  return (
    <li className="item">
      <div className="title"> {post.title} </div>
      <div> 创建人：<span>{post.author}</span></div>
      <div> 创建时间：<span>{post.date}</span></div>
      <div className="like">
       {/* <span><img src="" onClick={handleClick()}/> </span>*/}
        <button onClick={handleClick}>点赞</button>{post.vote}</div>
    </li>
  );
}

export default PostItem2;