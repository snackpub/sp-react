/**
 * Created by root on 2020/11/3.
 */
import React from 'react';


const userInfo = {"name": "Snack", "age": 22, "height": 170, "weight": "99"};

function MyComponent(props) {
  return (
    <div className="myComponent">
      <h2>MyComponent.</h2>
      <h2>UserInfo</h2>
      <h4>{props.user.name},{props.user.age}</h4>
    </div>
  );
}

function MyFunc2() {
  return(
    <div>
      <MyComponent user={userInfo}/>
    </div>
  )
}

export {MyFunc2};
