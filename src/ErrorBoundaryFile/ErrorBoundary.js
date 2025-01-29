import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorinfo: null,
    };
  }
  static getDerivedStateFromError(error) {
    return { error: error };
  }
  componentDidCatch(error, errorinfo) {
    this.setState({
      error: error,
      errorinfo: errorinfo,
    });
  }
  render() {
    if (this.state.errorinfo) {
      return (
        <div>
          Something west wrong render JS Login.js U
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
          </details>
          <br />
          {this.state.errorinfo.componentStack}
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
