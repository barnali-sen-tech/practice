import React from "react";
class ParentUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Barnali",
      age: 25,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: "sen",
      });
    }, 2000);
  }
  render() {
    return (
      <>
        {this.state.name}
        {this.state.age}
        <button onClick={() => this.setState({ name: "debnath", age: 26 })}>
          Click
        </button>
      </>
    );
  }
}
export default ParentUser;
