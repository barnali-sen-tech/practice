import React from "react";
// import Dashboard from "./Dashboard";
import Login from "./Login";
const IsAuth = (WrappedComponent) => {
  return function (props) {
    const isLogin = true;

    return isLogin ? <WrappedComponent {...props} /> : <Login />;
  };
  // class Hoc extends React.Component{
  // constructor (props){
  // super(props)
  // this.isLogin=false;
  // }

  // }
  // render(){
  // return(<>

  // {this.isLogin?<WrappedComponent {...this.props}/>:<Login/>}
  // </>) }}
  // return Hoc;
  // }
};
export default IsAuth;
