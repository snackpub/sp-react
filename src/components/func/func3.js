/**
 * Created by root on 2020/11/14.
 */

import React from 'react';
import './css/style.css';
// 引入样式
{/*<link rel="stylesheet" type="text/css" href="./css/style.css">*/}
// <link rel="stylesheet" type="text/css" href="style.css">

function Welcome(props) {
  return <h1 className="foo">Hello,{props.name}</h1>;
}

// React提供了defaultProps为组件属性指定默认值特性,当未提供属性时使用默认属性.
Welcome.defaultProps = {
  name: "snackpub"
};


export default Welcome;