import React from "react";

class FocusInputUsingClass extends React.Component{

    constructor(props){
        super(props)
        this.inputref = React.createRef();
    }
    componentDidMount(){
        this.inputref.current.focus();
    }

    render(){
        return(<>
        <input type="text" ref={this.inputref}></input>
        </>)
    }
}

export default FocusInputUsingClass;